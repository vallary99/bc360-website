import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Build Compliance 360 serves property owners and developers in Kiambu, Nairobi, Murang'a and Nakuru counties.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <div>
      <PageHero
        image={{
          src: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?fm=jpg&q=70&w=2400&auto=format&fit=crop",
          alt: "Nairobi city skyline, Kenya",
        }}
        crumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]}
        title="Where we work"
        description="Our core focus is four counties in Central Kenya and Nairobi. Each location page covers the areas and services most relevant there."
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
        <div className="grid sm:grid-cols-2 gap-5 items-stretch">
          {locations.map((loc, i) => (
            <Reveal key={loc.slug} delay={i * 70}>
              <Link
                href={`/locations/${loc.slug}`}
                className="group h-full flex flex-col border border-hairline rounded-sm p-7 hover:border-forest hover:-translate-y-0.5 transition-all"
              >
                <h2 className="font-display text-[22px] text-ink mb-2">{loc.name}</h2>
                <p className="text-[14px] text-slate leading-relaxed mb-5">{loc.intro}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-medium text-forest">
                  Get assistance in {loc.name}
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
