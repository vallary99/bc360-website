import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import TrustSection from "@/components/TrustSection";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Build Compliance 360",
  description:
    "Build Compliance 360 is a Kenya-based consultancy helping property owners, developers and mortgage clients navigate construction, land and compliance processes in Kiambu, Nairobi, Murang'a and Nakuru.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={{
          src: "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=70&w=2400&auto=format&fit=crop",
          alt: "A bridge with the Nairobi city skyline in the background, Westlands",
        }}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About us"
        title="A dedicated partner for construction, land and compliance processes in Kenya"
        description={site.description}
      />

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <SectionHeading eyebrow="What we do" title="Guidance through requirements that are rarely straightforward" />
            <p className="mt-5 text-[15px] leading-relaxed text-slate">
              Construction approvals, land subdivision, title deed transfers and bank or mortgage
              documentation each involve their own requirements, offices and timelines. We work
              alongside property owners, developers, architects and mortgage clients to review
              where things stand, clarify what is genuinely required, and help identify realistic
              next steps, including when an application has already stalled.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading eyebrow="How we work" title="Practical, document-first support" />
            <p className="mt-5 text-[15px] leading-relaxed text-slate">
              We start by reviewing the documentation and status of your specific application or
              property, rather than offering generic advice. From there, we help you understand
              what is outstanding and what a sensible path forward looks like, always through the
              relevant county or national authority, never around it.
            </p>
          </Reveal>
        </div>
      </section>

      <TrustSection />

      <section>
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 text-center">
          <Reveal>
            <h2 className="font-display text-[26px] sm:text-[32px] text-ink max-w-lg mx-auto">
              Tell us about your property or application
            </h2>
            <div className="mt-8">
              <CTAButton href="/contact" size="lg">
                Get Assistance
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
