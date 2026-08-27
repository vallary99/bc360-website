import Link from "next/link";

export default function Breadcrumbs({ items, light = false }: { items: { label: string; href?: string }[]; light?: boolean }) {
  const base = light ? "text-white/70" : "text-slate";
  const hover = light ? "hover:text-white" : "hover:text-forest";
  const current = light ? "text-white" : "text-ink";
  const divider = light ? "text-white/30" : "text-hairline";
  return (
    <nav aria-label="Breadcrumb" className={`text-[13px] ${base}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {item.href ? (
              <Link href={item.href} className={`${hover} transition-colors`}>
                {item.label}
              </Link>
            ) : (
              <span className={current}>{item.label}</span>
            )}
            {i < items.length - 1 && <span className={divider}>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
