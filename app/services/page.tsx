import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import { services, type Service } from "@/lib/services";

export const metadata: Metadata = {
  title: "Construction Approvals & Property Compliance Services",
  description:
    "Construction approvals, land subdivision, title deed transfers and bank/mortgage compliance services for property owners and developers in Kiambu, Nairobi, Murang'a and Nakuru.",
  alternates: { canonical: "/services" },
};

const groups: { key: Service["category"]; label: string; blurb: string }[] = [
  {
    key: "construction-approvals",
    label: "Construction Approvals",
    blurb: "Architectural, structural, NEMA, NCA and change of use approvals, our core focus.",
  },
  {
    key: "land",
    label: "Land & Title",
    blurb: "Subdivision, land survey and title deed transfer support.",
  },
  {
    key: "bank-mortgage",
    label: "Bank & Mortgage",
    blurb: "Approval assistance and verification for financing transactions.",
  },
  {
    key: "stuck-approvals",
    label: "Stuck Approvals",
    blurb: "For applications that have already stalled somewhere in the process.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        image={{
          src: "https://images.unsplash.com/photo-1693902997450-7e912c0d3554?fm=jpg&q=70&w=2400&auto=format&fit=crop",
          alt: "Nairobi city skyline with tall buildings",
        }}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        title="Construction compliance support for every stage of your project"
        description="Our core focus is guiding projects through construction approvals, from architectural and structural sign-off to NEMA, NCA and change of use, alongside land subdivision, title transfer and support for applications that have already stalled."
      />

      {groups.map((group) => {
        const groupServices = services.filter((s) => s.category === group.key);
        return (
          <section key={group.key} className="border-b border-hairline">
            <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
              <Reveal>
                <div className="mb-8">
                  <h2 className="font-display text-[24px] text-ink">{group.label}</h2>
                  <p className="text-[14px] text-slate mt-1.5">{group.blurb}</p>
                </div>
              </Reveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
                {groupServices.map((service, i) => (
                  <Reveal key={service.slug} delay={i * 70} fullHeight>
                    <ServiceCard service={service} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 text-center">
          <Reveal>
            <h2 className="font-display text-[24px] sm:text-[28px] text-ink max-w-lg mx-auto">
              Not sure which service applies to your situation?
            </h2>
            <p className="mt-3 text-[15px] text-slate max-w-md mx-auto">
              Tell us briefly what&apos;s going on and we&apos;ll point you in the right direction.
            </p>
            <div className="mt-7 flex justify-center">
              <CTAButton href="/contact" size="lg">
                Talk to an Expert
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
