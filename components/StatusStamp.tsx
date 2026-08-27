type Props = {
  label: string;
  variant?: "forest" | "ink" | "light";
  className?: string;
};

/**
 * The site's signature visual motif: a rubber-stamp style status mark,
 * echoing the real object at the centre of every client's problem:
 * a file sitting somewhere with an unclear status.
 */
export default function StatusStamp({ label, variant = "forest", className = "" }: Props) {
  const color = variant === "forest" ? "#16771e" : variant === "ink" ? "#25312d" : "#ffffff";
  return (
    <div
      className={`stamp inline-flex items-center justify-center border-[3px] rounded-full px-5 py-2.5 select-none ${className}`}
      style={{ borderColor: color, color }}
      aria-hidden="true"
    >
      <span className="font-mono-tag text-[13px] sm:text-[14px] tracking-[0.18em] uppercase font-semibold">
        {label}
      </span>
    </div>
  );
}
