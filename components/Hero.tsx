import Image from "next/image";
import CTAButton from "./CTAButton";
import StatusStamp from "./StatusStamp";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative border-b border-hairline overflow-hidden">
      <div className="relative h-[560px] sm:h-[620px] lg:h-[680px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1741991110666-88115e724741?fm=jpg&q=70&w=2400&auto=format&fit=crop"
          alt="Nairobi skyline on a sunny day"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

        <div className="relative h-full mx-auto max-w-6xl px-5 sm:px-8 flex items-center">
          <Reveal className="max-w-xl">
            <StatusStamp label="Application Status: Unclear" variant="light" className="mb-7 bg-ink/30 backdrop-blur-sm" />
            <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[52px] leading-[1.08] text-white text-balance">
              Stuck on a property or construction approval?
            </h1>
            <p className="mt-6 text-[17px] sm:text-[18px] leading-relaxed text-white/85 max-w-[46ch]">
              Build Compliance 360 helps property owners, developers and mortgage clients
              navigate construction approvals, land subdivision, title transfers and
              compliance processes across Kenya, including applications that have already
              stalled.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <CTAButton href="/contact" size="lg">
                Get Assistance
              </CTAButton>
              <CTAButton
                href="/services"
                variant="secondary"
                size="lg"
                showArrow={false}
                className="!text-white !border-white/50 hover:!border-white hover:!text-white"
              >
                View Services
              </CTAButton>
            </div>
            <p className="mt-8 text-[13px] font-mono-tag uppercase tracking-wide text-white/70">
              Serving {site.counties.join(", ")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
