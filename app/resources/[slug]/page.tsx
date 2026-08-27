import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTAButton from "@/components/CTAButton";
import ServiceCard from "@/components/ServiceCard";
import { articles, getArticleBySlug } from "@/lib/articles";
import { getServiceBySlug } from "@/lib/services";
import { articleSchema, breadcrumbSchema, toJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.seo.title,
    description: article.seo.description,
    alternates: { canonical: `/resources/${article.slug}` },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = article.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: article.title },
  ];

  const publishedDate = new Date(article.datePublished).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            articleSchema({
              slug: article.slug,
              title: article.title,
              description: article.seo.description,
              datePublished: article.datePublished,
            }),
            breadcrumbSchema(crumbs)
          ),
        }}
      />

      <div className="border-b border-hairline">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 pt-8 pb-14">
          <Breadcrumbs items={crumbs} />
          <p className="font-mono-tag text-[12px] uppercase tracking-wide text-slate mt-6 mb-3">
            <time dateTime={article.datePublished}>{publishedDate}</time> · Build Compliance 360 · {article.readingTime}
          </p>
          <h1 className="font-display text-[30px] sm:text-[38px] text-ink leading-[1.15]">{article.title}</h1>
          <p className="mt-5 text-[16px] text-slate leading-relaxed">{article.dek}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-14">
        {article.body.map((section, i) => (
          <div key={i} className={i > 0 ? "mt-9" : ""}>
            {section.heading && (
              <h2 className="font-display text-[21px] text-ink mb-4">{section.heading}</h2>
            )}
            {section.paragraphs.map((p, j) => (
              <p key={j} className="text-[16px] leading-relaxed text-ink/90 mb-4">
                {p}
              </p>
            ))}
            {section.list && (
              <ul className="space-y-2.5 mt-2 mb-2">
                {section.list.map((item, k) => (
                  <li key={k} className="text-[15px] text-ink/90 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-forest before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="mt-12 pt-8 border-t border-hairline text-[13px] text-slate leading-relaxed">
          This article is general information, not legal or professional advice for your specific
          property or application. Requirements vary by county, parcel and circumstance, so get in
          touch if you&apos;d like us to review your situation directly.
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-hairline bg-mist">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 py-14">
            <h2 className="font-display text-[20px] text-ink mb-6">Related services</h2>
            <div className="grid sm:grid-cols-2 gap-5 items-stretch">
              {related.map((r) => (
                <ServiceCard key={r.slug} service={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-14 text-center">
          <h2 className="font-display text-[22px] text-ink mb-6">
            Want us to look at your specific situation?
          </h2>
          <CTAButton href="/contact" size="lg">
            Get Assistance
          </CTAButton>
        </div>
      </section>
    </article>
  );
}
