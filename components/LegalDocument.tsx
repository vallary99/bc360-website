import type { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";

type Section = {
  heading: string;
  body: ReactNode;
};

export default function LegalDocument({
  title,
  lastUpdated,
  intro,
  sections,
  crumbLabel,
}: {
  title: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: Section[];
  crumbLabel: string;
}) {
  return (
    <div>
      <div className="border-b border-hairline">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 pt-8 pb-12">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: crumbLabel }]} />
          <h1 className="font-display text-[30px] sm:text-[38px] text-ink leading-[1.15] mt-6">{title}</h1>
          <p className="mt-3 text-[13px] font-mono-tag uppercase tracking-wide text-slate">
            Last updated: {lastUpdated}
          </p>
          <div className="mt-6 text-[15px] leading-relaxed text-ink/90">{intro}</div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-14">
        <div className="mb-10 border border-hairline bg-mist rounded-sm p-5 text-[13px] leading-relaxed text-slate">
          This document is provided as a general template reflecting common requirements under
          Kenyan law and is not a substitute for advice from a licensed Kenyan advocate. Build
          Compliance 360 should have this reviewed and, where necessary, adapted by a qualified
          legal professional before relying on it.
        </div>

        {sections.map((section, i) => (
          <section key={i} className={i > 0 ? "mt-10" : ""}>
            <h2 className="font-display text-[19px] sm:text-[21px] text-ink mb-4">
              {i + 1}. {section.heading}
            </h2>
            <div className="text-[15px] leading-relaxed text-ink/90 space-y-4">{section.body}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
