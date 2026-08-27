import type { Metadata } from "next";
import { AlertCircle, FileQuestion, Clock, MessageSquareWarning, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import StatusStamp from "@/components/StatusStamp";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { getServiceBySlug, getRelatedServices } from "@/lib/services";
import { breadcrumbSchema, faqSchema, serviceSchema, toJsonLd } from "@/lib/schema";

const service = getServiceBySlug("stuck-approvals")!;
const related = getRelatedServices(service);
const crumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Stuck Approvals" },
];

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  alternates: { canonical: "/services/stuck-approvals" },
};

const signs = [
  { icon: Clock, text: "It's been weeks or months since you submitted, with no update." },
  { icon: FileQuestion, text: "You're not sure if a document is missing or just sitting in a queue." },
  { icon: MessageSquareWarning, text: "Different offices or officers have given you conflicting information." },
  { icon: AlertCircle, text: "You don't know who to follow up with, or how." },
];

export default function StuckApprovalsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(serviceSchema(service), breadcrumbSchema(crumbs), faqSchema(service.faqs)),
        }}
      />
      {/* Hero */}
      <PageHero
        image={{
          src: "https://images.unsplash.com/photo-1611144727915-ef30a08aaeb3?fm=jpg&q=70&w=2400&auto=format&fit=crop",
          alt: "Nairobi high-rise buildings during daytime",
        }}
        crumbs={crumbs}
      >
        <StatusStamp label="Pending: No Update" variant="light" className="mb-7 bg-ink/30 backdrop-blur-sm" />
        <h1 className="font-display text-[34px] sm:text-[46px] text-white max-w-2xl leading-[1.1]">
          Has your approval been stuck?
        </h1>
        <p className="mt-5 text-[17px] text-white/85 max-w-xl leading-relaxed">
          A submitted application that goes quiet is one of the most stressful parts of
          building or developing property in Kenya. We review where things stand and help
          you understand what to do next.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <CTAButton href="/contact?service=stuck-approvals" size="lg">
            Get Help With Your Approval
          </CTAButton>
          <CTAButton
            href="#signs"
            variant="secondary"
            size="lg"
            showArrow={false}
            className="!text-white !border-white/50 hover:!border-white hover:!text-white"
          >
            Does this sound familiar?
          </CTAButton>
        </div>
      </PageHero>

      {/* Signs */}
      <section id="signs" className="border-b border-hairline bg-mist">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
          <SectionHeading eyebrow="Recognize the pattern" title="Signs your application is stuck, not just slow" className="mb-10" />
          <div className="grid sm:grid-cols-2 gap-5 items-stretch">
            {signs.map((sign, i) => (
              <Reveal key={i} delay={i * 80} className="bg-white border border-hairline rounded-sm p-6 flex gap-4">
                <sign.icon size={22} className="text-forest shrink-0 mt-0.5" strokeWidth={1.75} />
                <p className="text-[15px] text-ink/90 leading-relaxed">{sign.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid lg:grid-cols-2 gap-14">
          <div>
            <SectionHeading eyebrow="How we help" title="A clear review of where things actually stand" className="mb-8" />
            <div className="space-y-4">
              {service.description.map((p, i) => (
                <p key={i} className="text-[16px] leading-relaxed text-ink/90">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-[20px] text-ink mb-5">What we help with</h2>
            <ul className="space-y-3">
              {service.whatWeHelpWith.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-ink/90">
                  <Check size={16} className="text-forest mt-1 shrink-0" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13px] text-slate leading-relaxed border-t border-hairline pt-5">
              We do not promise guaranteed approvals or fixed timelines. Decisions rest with the
              relevant county or national authority. Our role is to give you clarity and a
              realistic path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
          <SectionHeading eyebrow="How it works" title="From unclear status to a clear next step" className="mb-10" />
          <ProcessSteps />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
          <SectionHeading eyebrow="Common questions" title="Frequently asked questions" className="mb-10" />
          <div className="max-w-3xl">
            <FAQAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-b border-hairline bg-mist">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
          <SectionHeading eyebrow="Once your approval is moving" title="Related services" className="mb-8" />
          <div className="grid sm:grid-cols-2 gap-5 items-stretch">
            {related.map((r) => (
              <ServiceCard key={r.slug} service={r} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 text-center">
          <h2 className="font-display text-[26px] sm:text-[32px] text-white max-w-lg mx-auto leading-tight">
            Let&apos;s find out what&apos;s really happening with your application.
          </h2>
          <div className="mt-8 flex justify-center">
            <CTAButton href="/contact?service=stuck-approvals" size="lg">
              Get Help With Your Approval
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
