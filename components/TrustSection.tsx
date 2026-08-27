import Image from "next/image";
import { ShieldCheck, MapPinned, MessagesSquare, FileSearch } from "lucide-react";

const points = [
  {
    icon: MapPinned,
    title: "Local knowledge",
    body: "Familiar with the county planning offices, land registries and processes across Kiambu, Nairobi, Murang'a and Nakuru.",
  },
  {
    icon: FileSearch,
    title: "Careful document review",
    body: "We review your specific application and documents rather than applying generic assumptions.",
  },
  {
    icon: MessagesSquare,
    title: "Transparent communication",
    body: "We tell you plainly what we find, what's outstanding, and what a realistic next step looks like.",
  },
  {
    icon: ShieldCheck,
    title: "No overpromising",
    body: "We don't promise guaranteed approvals or fixed timelines. Decisions rest with the relevant authority.",
  },
];

export default function TrustSection() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:items-stretch">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full w-full overflow-hidden rounded-sm border border-hairline order-2 lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1609867271967-a82f85c48531?fm=jpg&q=70&w=1200&auto=format&fit=crop"
            alt="Construction site with structural work and scaffolding in progress"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="font-mono-tag text-[13px] tracking-wide uppercase text-forest mb-3">Why work with us</p>
          <h2 className="font-display text-[28px] sm:text-[34px] leading-[1.15] text-ink mb-8 max-w-md">
            A steady, honest hand through a process that rarely feels simple
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
            {points.map((point) => (
              <div key={point.title}>
                <point.icon size={20} className="text-forest mb-3" strokeWidth={1.75} />
                <h3 className="text-[15px] font-semibold text-ink mb-1.5">{point.title}</h3>
                <p className="text-[14px] text-slate leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
