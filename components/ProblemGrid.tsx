import Link from "next/link";
import Reveal from "./Reveal";

const problems = [
  { text: "Your approval has been pending for longer than expected.", href: "/services/stuck-approvals" },
  { text: "You submitted documents but haven't had clear feedback.", href: "/services/stuck-approvals" },
  { text: "You need to transfer a title deed.", href: "/services/title-deed-transfer" },
  { text: "You want to subdivide land.", href: "/services/land-subdivision" },
  { text: "Your bank needs property approvals verified.", href: "/services/approval-verification" },
  { text: "You need approvals before construction can start.", href: "/services/construction-approvals" },
];

export default function ProblemGrid() {
  return (
    <section className="border-b border-hairline bg-mist">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
        <Reveal>
          <h2 className="font-display text-[26px] sm:text-[32px] text-ink max-w-lg leading-[1.2]">
            Not sure what&apos;s holding your application back?
          </h2>
          <p className="mt-3 text-[15px] text-slate max-w-md">
            Most enquiries we get start with one of these:
          </p>
        </Reveal>

        <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {problems.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <Link
                href={p.href}
                className="group h-full flex flex-col bg-white border border-hairline rounded-sm p-5 hover:border-forest hover:-translate-y-0.5 transition-all"
              >
                <p className="text-[15px] text-ink leading-snug">{p.text}</p>
                <span className="mt-auto pt-4 inline-block text-[13px] font-medium text-forest opacity-0 group-hover:opacity-100 transition-opacity">
                  See how we help &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
