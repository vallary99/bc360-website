import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
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

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE,
    CONTACT_TO_EMAIL,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error(
      "Contact form: missing SMTP configuration (SMTP_HOST / SMTP_USER / SMTP_PASS)."
    );
    return NextResponse.json(
      {
        ok: false,
        error: "Email sending isn't configured yet. Please contact us directly in the meantime.",
      },
      { status: 500 }
    );
  }

  const toEmail = CONTACT_TO_EMAIL || site.email;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT ? parseInt(SMTP_PORT, 10) : 587,
      secure: SMTP_SECURE === "true", // true for port 465, false for 587/others
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

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

    await transporter.sendMail({
      from: `"${site.name} Website" <${SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: `New enquiry from ${name}${service ? `: ${service}` : ""}`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: failed to send email.", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Something went wrong sending your enquiry. Please try again or email us directly.",
      },
      { status: 502 }
    );
  }
}
