type FAQ = { q: string; a: string };

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="divide-y divide-hairline border-t border-b border-hairline">
      {faqs.map((faq, i) => (
        <details key={i} className="group py-5">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
            <span className="text-[16px] font-medium text-ink pr-4">{faq.q}</span>
            <span
              aria-hidden="true"
              className="shrink-0 text-forest text-xl leading-none transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-[15px] leading-relaxed text-slate max-w-2xl">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
