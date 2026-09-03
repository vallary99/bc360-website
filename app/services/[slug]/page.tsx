import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import { services, getServiceBySlug, getRelatedServices, type Service } from "@/lib/services";
import { breadcrumbSchema, faqSchema, serviceSchema, toJsonLd } from "@/lib/schema";
import { Check } from "lucide-react";

// Verified Nairobi, Kenya photography, distinct per category for visual variety.
const categoryImage: Record<Service["category"], { src: string; alt: string }> = {
  "stuck-approvals": {
    src: "https://images.unsplash.com/photo-1611144727915-ef30a08aaeb3?fm=jpg&q=70&w=2400&auto=format&fit=crop",
    alt: "Nairobi high-rise buildings during daytime",
  },
  land: {
    src: "https://images.unsplash.com/photo-1735837836882-559fd3ab1a8e?fm=jpg&q=70&w=2400&auto=format&fit=crop",
    alt: "Nairobi city skyline seen across open ground, Kenya",
  },
  "construction-approvals": {
    src: "https://images.unsplash.com/photo-1542621334-a254cf47733d?fm=jpg&q=70&w=2400&auto=format&fit=crop",
    alt: "Architectural blueprint plan being drafted with a pencil and ruler",
  },
  "bank-mortgage": {
    src: "https://images.unsplash.com/photo-1693902997450-7e912c0d3554?fm=jpg&q=70&w=2400&auto=format&fit=crop",
    alt: "Nairobi city skyline, Kenya",
  },
};

export function generateStaticParams() {
  return services.filter((s) => s.slug !== "stuck-approvals").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service || service.slug === "stuck-approvals") notFound();

  const related = getRelatedServices(service);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(serviceSchema(service), breadcrumbSchema(crumbs), faqSchema(service.faqs)),
        }}
      />
      <PageHero image={categoryImage[service.category]} crumbs={crumbs}>
        <p className="font-mono-tag text-[13px] uppercase tracking-wide text-sprout mb-3">
          {service.tagline}
        </p>
        <h1 className="font-display text-[32px] sm:text-[42px] text-white max-w-2xl leading-[1.12]">
          {service.title}
        </h1>
        <p className="mt-5 text-[16px] text-white/85 max-w-xl leading-relaxed">
          {service.shortDescription}
        </p>
        <div className="mt-8">
          <CTAButton href={`/contact?service=${service.slug}`} size="lg">
            {service.ctaLabel}
          </CTAButton>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid lg:grid-cols-[1.3fr_0.7fr] gap-14">
        <div>
          <div className="space-y-5 mb-12">
            {service.description.map((p, i) => (
              <p key={i} className="text-[16px] leading-relaxed text-ink/90">
                {p}
              </p>
            ))}
          </div>

          <h2 className="font-display text-[22px] text-ink mb-5">What we help with</h2>
          <ul className="space-y-3 mb-12">
            {service.whatWeHelpWith.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-ink/90">
                <Check size={16} className="text-forest mt-1 shrink-0" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-display text-[22px] text-ink mb-5">Frequently asked questions</h2>
          <FAQAccordion faqs={service.faqs} />
        </div>

        <aside className="space-y-8">
          <Reveal className="border border-hairline rounded-sm p-6">
            <h3 className="font-display text-[18px] text-ink mb-3">This is for you if</h3>
            <ul className="space-y-2.5">
              {service.audience.map((a, i) => (
                <li key={i} className="text-[14px] text-slate leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-forest before:font-bold">
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>

          {related.length > 0 && (
            <Reveal delay={80} className="border border-hairline rounded-sm p-6">
              <h3 className="font-display text-[18px] text-ink mb-3">Related services</h3>
              <ul className="space-y-2.5">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/services/${r.slug}`}
                      className="text-[14px] text-forest hover:text-[#125e18] underline underline-offset-2"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          <Reveal delay={160} className="bg-mist rounded-sm p-6">
            <h3 className="font-display text-[18px] text-ink mb-2">Ready to talk it through?</h3>
            <p className="text-[14px] text-slate mb-5 leading-relaxed">
              Tell us about your property and where things stand. We&apos;ll follow up with next steps.
            </p>
            <CTAButton href={`/contact?service=${service.slug}`} className="w-full justify-center">
              {service.ctaLabel}
            </CTAButton>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}
