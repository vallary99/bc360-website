import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/lib/articles";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/resources/${article.slug}`}
      className="group h-full flex flex-col border border-hairline rounded-sm p-6 hover:border-forest transition-colors bg-white"
    >
      <p className="font-mono-tag text-[12px] uppercase tracking-wide text-slate mb-3">
        {article.readingTime}
      </p>
      <h3 className="font-display text-[19px] text-ink mb-2 leading-snug">{article.title}</h3>
      <p className="text-[14px] text-slate leading-relaxed mb-5">{article.dek}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-medium text-forest">
        Read article
        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  );
}
