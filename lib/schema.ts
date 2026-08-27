import { site } from "@/lib/site";
import type { Service, FAQ } from "@/lib/services";
import type { Location } from "@/lib/locations";

/**
 * Central JSON-LD builders. Every function here only encodes facts that are
 * actually rendered on the page it's attached to: no invented ratings,
 * review counts, addresses or founding dates.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: site.description,
    areaServed: site.counties.map((county) => ({
      "@type": "AdministrativeArea",
      name: `${county} County, Kenya`,
    })),
    address: {
      "@type": "PostalAddress",
      addressCountry: "KE",
    },
  };
}

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${site.url}${item.href}` } : {}),
    })),
  };
}

export function faqSchema(faqs: FAQ[]) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/services/${service.slug}/#service`,
    name: service.title,
    description: service.shortDescription,
    serviceType: service.title,
    url: `${site.url}/services/${service.slug}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: site.counties.map((county) => ({
      "@type": "AdministrativeArea",
      name: `${county} County, Kenya`,
    })),
  };
}

export function locationServiceSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/locations/${location.slug}/#localbusiness`,
    name: `${site.name}, ${location.name}`,
    description: location.intro,
    url: `${site.url}/locations/${location.slug}`,
    parentOrganization: { "@id": `${site.url}/#organization` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: location.region,
    },
  };
}

export function articleSchema(article: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${site.url}/resources/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}/resources/${article.slug}`,
  };
}

/** Renders one or more JSON-LD objects as a single script tag's content. */
export function toJsonLd(...schemas: (object | null)[]) {
  const valid = schemas.filter(Boolean);
  return JSON.stringify(valid.length === 1 ? valid[0] : valid);
}
