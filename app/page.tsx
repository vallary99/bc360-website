import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProblemGrid from "@/components/ProblemGrid";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import TrustSection from "@/components/TrustSection";
import LocationsSection from "@/components/LocationsSection";
import FAQAccordion from "@/components/FAQAccordion";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import { featuredServices } from "@/lib/services";
import { faqSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Construction, Land & Compliance Consultancy in Kenya",
  description:
    "Stuck on a building or land approval in Kenya? Build Compliance 360 helps with stuck approvals, land subdivision, title transfers, construction approvals and bank/mortgage compliance in Kiambu, Nairobi, Murang'a and Nakuru.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    q: "How long does a building approval take in Kenya?",
    a: "It depends on the county, the type of project and how complete the documentation is at submission. There's no single fixed timeline, but we can give you a clearer picture once we've reviewed your specific application.",
  },
  {
    q: "What should I do if my building approval is stuck?",
    a: "Gather what you've submitted so far, including any reference numbers, and get in touch. We'll review the file with you and help identify what's outstanding and what a realistic next step looks like.",
  },
  {
    q: "Do you assist with approvals in Kiambu, Nairobi, Murang'a and Nakuru?",
    a: "Yes. These four counties are our core focus, though the underlying processes are similar across Kenya. Get in touch and let us know where your property is located.",
  },
  {
    q: "Can you help verify approvals submitted to a bank?",
    a: "Yes. We review the approval documentation provided and help explain what it covers and whether anything looks incomplete or worth confirming further before a transaction proceeds.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema(homeFaqs)) }}
      />
      <Hero />
      <ProblemGrid />

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <SectionHeading
                eyebrow="What we help with"
                title="Compliance support across every stage of a property project"
              />
              <Link href="/services" className="text-[14px] font-medium text-forest hover:text-[#125e18] shrink-0">
                View all services &rarr;
              </Link>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {featuredServices.map((service, i) => (
              <Reveal key={service.slug} delay={i * 70}>
                <ServiceCard service={service} featured={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <Reveal>
            <SectionHeading eyebrow="How it works" title="A clear, four-step process" className="mb-10" />
          </Reveal>
          <ProcessSteps />
        </div>
      </section>

      <TrustSection />
      <LocationsSection />

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <Reveal>
            <SectionHeading eyebrow="Common questions" title="Frequently asked questions" className="mb-10" />
            <div className="max-w-3xl">
              <FAQAccordion faqs={homeFaqs} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink md:hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-10 text-center">
          <Reveal>
            <h2 className="font-display text-[28px] sm:text-[36px] text-white leading-tight max-w-xl mx-auto">
              Know exactly what to do next with your property or approval.
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" size="lg">
                Get Assistance
              </CTAButton>
              <CTAButton
                href="/services/stuck-approvals"
                variant="secondary"
                size="lg"
                showArrow={false}
                className="!text-white !border-white/30 hover:!border-white hover:!text-white"
              >
                Stuck Approval?
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
