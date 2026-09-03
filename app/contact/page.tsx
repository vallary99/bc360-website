import type { Metadata } from "next";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us: Get Assistance With Your Property or Approval",
  description:
    "Get in touch with Build Compliance 360 about a stuck approval, land subdivision, title transfer, construction approval or bank/mortgage compliance need.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div>
      <div className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-8 pb-14">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1 className="font-display text-[34px] sm:text-[44px] text-ink mt-6 max-w-xl leading-[1.12]">
            Talk to an expert
          </h1>
          <p className="mt-5 text-[16px] text-slate max-w-xl leading-relaxed">
            Tell us about your property, project or approval situation and we&apos;ll follow up
            with next steps.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid lg:grid-cols-[1fr_0.6fr] gap-14">
        <ContactForm />

        <aside className="space-y-6">
          <Reveal className="border border-hairline rounded-sm p-6">
            <h2 className="font-display text-[18px] text-ink mb-4">Direct contact</h2>
            <div className="space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-[15px] text-forest hover:text-[#125e18]"
              >
                <Mail size={16} /> {site.email}
              </a>
              <a
                href={`tel:${site.phoneIntl}`}
                className="flex items-center gap-2 text-[15px] text-forest hover:text-[#125e18]"
              >
                <Phone size={16} /> {site.phone}
              </a>
              <a
                href={`https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(site.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[15px] text-forest hover:text-[#125e18]"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={100} className="bg-mist rounded-sm p-6">
            <h2 className="font-display text-[18px] text-ink mb-2">Where we work</h2>
            <p className="text-[14px] text-slate leading-relaxed">
              Kiambu, Nairobi, Murang&apos;a and Nakuru counties.
            </p>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}
