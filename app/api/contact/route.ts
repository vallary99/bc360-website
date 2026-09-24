import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  county?: string;
  service?: string;
  message?: string;
  company?: string; // honeypot field, real users never fill this in
  loadedAt?: number; // client timestamp (ms) of when the form rendered
};

const MIN_SECONDS_TO_SUBMIT = 3;

// Matches the previous PHP contact form's conventions, kept for
// consistency with existing inbox filters/rules that may reference them.
const SITE_LABEL = "WEB ENQUIRIES";

// Sent via Resend's API (HTTPS, not raw SMTP), so this address just needs
// to be on a domain verified in Resend (buildcompliance360.com), it does
// not need to be a real, checkable mailbox. Unlike the old SMTP setup,
// there's no "must match the authenticated account" constraint here.
const FROM_EMAIL = "no-reply@buildcompliance360.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const email = (body.email || "").trim();
  const county = (body.county || "").trim();
  const service = (body.service || "").trim();
  const message = (body.message || "").trim();
  const honeypot = (body.company || "").trim();
  const loadedAt = body.loadedAt || 0;

  // Anti-bot check 1: honeypot. Silently succeed so bots don't learn to
  // leave it blank.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  // Anti-bot check 2: time trap. Real visitors take at least a couple of
  // seconds to fill in a form; instant submissions are almost always bots.
  if (loadedAt > 0) {
    const elapsedSeconds = (Date.now() - loadedAt) / 1000;
    if (elapsedSeconds < MIN_SECONDS_TO_SUBMIT) {
      return NextResponse.json({ ok: true }); // pretend success, don't tip off the bot
    }
  }

  if (!name || !email) {
    return NextResponse.json(
      { ok: false, error: "Name and email are required." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL } = process.env;

  if (!RESEND_API_KEY) {
    console.error("Contact form: missing RESEND_API_KEY.");
    return NextResponse.json(
      {
        ok: false,
        error: "Email sending isn't configured yet. Please contact us directly in the meantime.",
      },
      { status: 500 }
    );
  }

  const toEmail = CONTACT_TO_EMAIL || site.email;
  const resend = new Resend(RESEND_API_KEY);

  const fields: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "Not provided"],
    ["County", county || "Not specified"],
    ["Service needed", service || "Not specified"],
  ];

  const textBody = [
    "New enquiry from the Build Compliance 360 website contact form.",
    "",
    ...fields.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    message || "(No message provided)",
  ].join("\n");

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; font-size: 15px; color: #25312d; line-height: 1.6;">
      <h2 style="color: #16771e; margin-bottom: 16px;">New website enquiry</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
        ${fields
          .map(
            ([label, value]) => `
          <tr>
            <td style="font-weight: bold; vertical-align: top; padding-right: 12px;">${escapeHtml(label)}</td>
            <td>${escapeHtml(value)}</td>
          </tr>`
          )
          .join("")}
      </table>
      <p style="font-weight: bold; margin-top: 20px; margin-bottom: 6px;">Message</p>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message || "(No message provided)")}</p>
    </div>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: `${SITE_LABEL} <${FROM_EMAIL}>`,
      to: toEmail,
      replyTo: email,
      subject: `[${SITE_LABEL}] New enquiry: ${service || "General"}`,
      text: textBody,
      html: htmlBody,
    });

    if (error) {
      // Resend returns errors as a value rather than throwing, so this is
      // the normal path for "the API call went through but Resend
      // rejected it" (e.g. domain not verified yet, invalid from address).
      console.error(`Contact form: Resend rejected the send. ${JSON.stringify(error)}`);
      return NextResponse.json(
        {
          ok: false,
          error: "Something went wrong sending your enquiry. Please try again or email us directly.",
        },
        { status: 502 }
      );
    }

    console.log(`Contact form: email sent via Resend, id=${data?.id}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    // A thrown error here means the request to Resend's API itself failed
    // (network issue, invalid API key format, etc.), rather than Resend
    // processing it and declining.
    const message = err instanceof Error ? err.message : String(err);
    console.error(`Contact form: request to Resend failed. message=${message}`, err);
    return NextResponse.json(
      {
        ok: false,
        error: "Something went wrong sending your enquiry. Please try again or email us directly.",
      },
      { status: 502 }
    );
  }
}