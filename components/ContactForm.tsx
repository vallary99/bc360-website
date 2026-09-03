"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const serviceOptions = [
  "Construction Approvals (general)",
  "Land Subdivision",
  "Title Deed Transfer",
  "Land Survey Services",
  "Change of Use",
  "Architectural Approval",
  "Structural Approval",
  "NEMA Approval",
  "NCA Approval",
  "Mortgage / Bank Approval",
  "Approval Verification",
  "Stuck Approval",
  "Other",
];

const counties = ["Kiambu", "Nairobi", "Murang'a", "Nakuru", "Other"];

export default function ContactForm({ defaultService }: { defaultService?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("email") || "").trim();

    if (!name || !contact) {
      setError("Please share your name and either an email or phone number so we can reach you.");
      return;
    }
    setError(null);
    // In production this posts to a lead endpoint / CRM / email service.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-forest/30 bg-mist rounded-sm p-8 text-center">
        <h3 className="font-display text-[22px] text-ink mb-2">Enquiry received</h3>
        <p className="text-[15px] text-slate leading-relaxed">
          Thank you. We&apos;ve received your details and will get back to you shortly. If your enquiry is
          urgent, you can also reach us directly at{" "}
          <a href={`mailto:${site.email}`} className="text-forest underline underline-offset-2">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {error && (
        <p role="alert" className="text-[14px] text-[#8a2c2c] bg-[#fbeaea] border border-[#e3b3b3] rounded-sm px-4 py-3">
          {error}
        </p>
      )}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-[13px] font-medium text-ink mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-hairline rounded-sm px-4 py-3 text-[15px] focus-visible:border-forest"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[13px] font-medium text-ink mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full border border-hairline rounded-sm px-4 py-3 text-[15px] focus-visible:border-forest"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-[13px] font-medium text-ink mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-hairline rounded-sm px-4 py-3 text-[15px] focus-visible:border-forest"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="county" className="block text-[13px] font-medium text-ink mb-1.5">
            County
          </label>
          <select
            id="county"
            name="county"
            className="w-full border border-hairline rounded-sm px-4 py-3 text-[15px] bg-white focus-visible:border-forest"
          >
            {counties.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="service" className="block text-[13px] font-medium text-ink mb-1.5">
            Service needed
          </label>
          <select
            id="service"
            name="service"
            defaultValue={defaultService}
            className="w-full border border-hairline rounded-sm px-4 py-3 text-[15px] bg-white focus-visible:border-forest"
          >
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-[13px] font-medium text-ink mb-1.5">
          Brief description
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-hairline rounded-sm px-4 py-3 text-[15px] focus-visible:border-forest resize-y"
          placeholder="Tell us about your property and where things currently stand."
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center bg-forest text-white font-medium px-7 py-3.5 rounded-sm hover:bg-[#125e18] transition-colors"
      >
        Send Enquiry
      </button>
    </form>
  );
}
