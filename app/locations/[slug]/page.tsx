import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import { locations, getLocationBySlug } from "@/lib/locations";
import { getServiceBySlug } from "@/lib/services";
import { breadcrumbSchema, faqSchema, locationServiceSchema, toJsonLd } from "@/lib/schema";
import { MapPin } from "lucide-react";

// All confirmed Nairobi, Kenya photography (verified geotagged). Kiambu, Murang'a
// and Nakuru don't yet have their own verified free stock on hand, so each page
// uses a distinct Nairobi image captioned honestly rather than claiming to show
// the specific county itself, the page heading and copy already name the county.
const locationImage: Record<string, { src: string; alt: string }> = {
  kiambu: {
    src: "https://images.unsplash.com/photo-1735837836882-559fd3ab1a8e?fm=jpg&q=70&w=2400&auto=format&fit=crop",
    alt: "Nairobi city skyline seen across open ground, Kenya",
  },
  nairobi: {
    src: "https://images.unsplash.com/photo-1611144727915-ef30a08aaeb3?fm=jpg&q=70&w=2400&auto=format&fit=crop",
    alt: "Nairobi high-rise buildings during daytime",
  },
  muranga: {
    src: "https://images.unsplash.com/photo-1669333490889-194e8f46a766?fm=jpg&q=70&w=2400&auto=format&fit=crop",
    alt: "Nairobi city skyline with tall buildings, Kenya",
  },
  nakuru: {
    src: "https://images.unsplash.com/photo-1693902997450-7e912c0d3554?fm=jpg&q=70&w=2400&auto=format&fit=crop",
    alt: "Nairobi city skyline, Kenya",
  },
};

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return {
    title: location.seo.title,
    description: location.seo.description,
    alternates: { canonical: `/locations/${location.slug}` },
  };
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const relevantServices = location.relevantServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: location.name },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(locationServiceSchema(location), breadcrumbSchema(crumbs), faqSchema(location.faqs)),
        }}
      />
      <PageHero
        image={locationImage[location.slug]}
        crumbs={crumbs}
      >
        <p className="flex items-center gap-1.5 text-[13px] font-mono-tag uppercase tracking-wide text-sprout mb-3">
          <MapPin size={14} /> {location.region}
        </p>
        <h1 className="font-display text-[32px] sm:text-[42px] text-white max-w-2xl leading-[1.12]">
          Construction &amp; compliance support in {location.name}
        </h1>
        <p className="mt-5 text-[16px] text-white/85 max-w-xl leading-relaxed">{location.intro}</p>
        <div className="mt-8">
          <CTAButton href={`/contact?county=${location.slug}`} size="lg">
            Get Assistance in {location.name}
          </CTAButton>
        </div>
      </PageHero>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 grid lg:grid-cols-[1.2fr_0.8fr] gap-14">
          <Reveal className="space-y-5">
            {location.context.map((p, i) => (
              <p key={i} className="text-[16px] leading-relaxed text-ink/90">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={100} className="border border-hairline rounded-sm p-6 h-fit">
            <h2 className="font-display text-[18px] text-ink mb-4">Areas we cover</h2>
            <ul className="flex flex-wrap gap-2">
              {location.areasServed.map((area) => (
                <li
                  key={area}
                  className="text-[13px] text-ink/80 border border-hairline rounded-full px-3 py-1.5"
                >
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-hairline bg-mist">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
          <SectionHeading
            eyebrow={`Services in ${location.name}`}
            title={`What we help with in ${location.region}`}
            className="mb-9"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {relevantServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
          <SectionHeading eyebrow="Local questions" title="Frequently asked questions" className="mb-10" />
          <div className="max-w-3xl">
            <FAQAccordion faqs={location.faqs} />
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 text-center">
          <h2 className="font-display text-[26px] sm:text-[32px] text-white max-w-lg mx-auto leading-tight">
            Get assistance with your {location.name} property or approval.
          </h2>
          <div className="mt-8 flex justify-center">
            <CTAButton href={`/contact?county=${location.slug}`} size="lg">
              Get Assistance in {location.name}
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
