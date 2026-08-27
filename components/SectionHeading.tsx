type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: Props) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p className="font-mono-tag text-[13px] tracking-wide uppercase text-forest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[28px] sm:text-[34px] leading-[1.15] text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[16px] leading-relaxed text-slate">
          {description}
        </p>
      )}
    </div>
  );
}
