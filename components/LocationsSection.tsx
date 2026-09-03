import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { locations } from "@/lib/locations";
import SectionHeading from "./SectionHeading";

export default function LocationsSection() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Where we work"
          title="Serving Kiambu, Nairobi, Murang'a and Nakuru"
          description="These four counties are our core focus, with each location page tailored to the areas and services most relevant there."
        />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group h-full flex flex-col border border-hairline rounded-sm p-6 hover:border-forest transition-colors"
            >
              <h3 className="font-display text-[19px] text-ink mb-1.5">{loc.name}</h3>
              <p className="text-[13px] text-slate mb-4">{loc.region}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-medium text-forest">
                Get assistance in {loc.name}
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
