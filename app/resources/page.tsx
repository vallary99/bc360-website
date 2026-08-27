import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import ArticleCard from "@/components/ArticleCard";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical guidance on construction approvals, land subdivision, title deed transfers and compliance processes in Kenya.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <div>
      <PageHero
        image={{
          src: "https://images.unsplash.com/photo-1735837836882-559fd3ab1a8e?fm=jpg&q=70&w=2400&auto=format&fit=crop",
          alt: "Nairobi city skyline seen across open ground, Kenya",
        }}
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        eyebrow="Resources"
        title="Guidance on Kenyan property and construction compliance"
        description="Practical, plain-language articles on stuck approvals, land subdivision, title transfers and construction compliance in Kenya. We're adding to this library regularly, and each service page below also covers the process, who it's for, and common questions."
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
        <Reveal>
          <SectionHeading eyebrow="Latest articles" title="Guides and explainers" className="mb-8" />
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 70}>
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <SectionHeading eyebrow="Browse by topic" title="Services" className="mb-8" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <Link
                  href={`/services/${s.slug}`}
                  className="h-full flex flex-col border border-hairline rounded-sm p-6 hover:border-forest hover:-translate-y-0.5 transition-all"
                >
                  <h3 className="font-display text-[19px] text-ink mb-2">{s.shortTitle}</h3>
                  <p className="text-[14px] leading-relaxed text-slate">{s.shortDescription}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16 border-t border-hairline pt-10 text-center">
          <p className="text-[15px] text-slate mb-6">
            Have a specific question about your property or application?
          </p>
          <CTAButton href="/contact" size="lg">
            Get Assistance
          </CTAButton>
        </Reveal>
      </div>
    </div>
  );
}
