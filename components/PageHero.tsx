import ImageWithSkeleton from "./ImageWithSkeleton";
import Breadcrumbs from "./Breadcrumbs";
import Reveal from "./Reveal";
import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

type Props = {
  image: { src: string; alt: string };
  crumbs: Crumb[];
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  children?: ReactNode;
  height?: "md" | "lg";
};

export default function PageHero({
  image,
  crumbs,
  eyebrow,
  title,
  description,
  children,
  height = "md",
}: Props) {
  const heightClass = height === "lg" ? "h-[480px] sm:h-[540px] lg:h-[580px]" : "h-[420px] sm:h-[460px] lg:h-[480px]";

  return (
    <section className="relative border-b border-hairline overflow-hidden">
      <div className={`relative w-full ${heightClass}`}>
        <ImageWithSkeleton
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/55 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

        <div className="relative h-full mx-auto max-w-6xl px-5 sm:px-8 flex flex-col justify-center">
          <Breadcrumbs items={crumbs} light />
          <Reveal className="mt-6 max-w-2xl">
            {eyebrow && (
              <p className="font-mono-tag text-[13px] uppercase tracking-wide text-sprout mb-3">
                {eyebrow}
              </p>
            )}
            {title && (
              <h1 className="font-display text-[32px] sm:text-[42px] lg:text-[46px] text-white leading-[1.1]">
                {title}
              </h1>
            )}
            {description && (
              <p className="mt-5 text-[16px] sm:text-[17px] text-white/85 max-w-xl leading-relaxed">
                {description}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
