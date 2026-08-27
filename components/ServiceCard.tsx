import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group h-full flex flex-col border border-hairline rounded-sm p-6 hover:border-forest transition-colors ${
        featured ? "bg-mist" : "bg-white"
      }`}
    >
      <p className="font-mono-tag text-[12px] uppercase tracking-wide text-slate mb-3">
        {service.category.replace(/-/g, " ")}
      </p>
      <h3 className="font-display text-[20px] text-ink mb-2 leading-snug">{service.title}</h3>
      <p className="text-[14px] text-slate leading-relaxed mb-5">{service.shortDescription}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-medium text-forest">
        {service.ctaLabel}
        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  );
}
