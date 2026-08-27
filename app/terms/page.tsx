import type { Metadata } from "next";
import Link from "next/link";
import LegalDocument from "@/components/LegalDocument";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms and conditions governing use of the ${site.name} website and consultancy services.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms & Conditions"
      lastUpdated="27 August 2026"
      crumbLabel="Terms & Conditions"
      intro={
        <p>
          These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the {site.name}{" "}
          website at {site.url.replace("https://", "")} and your engagement of our consultancy
          services. By using this website or engaging our services, you agree to these Terms. They
          are governed by the laws of Kenya.
        </p>
      }
      sections={[
        {
          heading: "About Build Compliance 360",
          body: (
            <p>
              {site.name} is an independent consultancy that assists property owners, developers
              and mortgage clients in understanding and navigating construction approvals, land
              subdivision, title deed transfer processes and related compliance matters in Kenya.{" "}
              {site.name} is <strong>not a government authority, county government, land registry
              or regulatory body</strong>, and does not issue approvals, permits or title deeds.
              We assist clients in preparing, understanding and progressing matters through the
              relevant authorities.
            </p>
          ),
        },
        {
          heading: "Nature of our services",
          body: (
            <>
              <p>
                Our services are advisory and consultative in nature. We help clients understand
                requirements, review documentation and identify realistic next steps. Unless
                expressly agreed in a separate written engagement, our services do not constitute
                legal advice, and {site.name} is not a law firm. For matters requiring legal
                representation or opinion, we recommend engaging a qualified Kenyan advocate.
              </p>
              <p>
                We do not guarantee that any application, approval, subdivision, transfer or
                verification will be successful, approved within a particular timeframe, or
                approved at all. Outcomes and timelines are determined by the relevant county or
                national authority, bank or land registry, and are outside our control.
              </p>
            </>
          ),
        },
        {
          heading: "Acceptable use of this website",
          body: (
            <>
              <p>When using this website, you agree not to:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Provide false, misleading or fraudulent information in any enquiry or form</li>
                <li>
                  Attempt to gain unauthorised access to this website, its systems or any related
                  network, in a manner that would contravene the{" "}
                  <strong>Computer Misuse and Cybercrimes Act, 2018</strong> (Kenya)
                </li>
                <li>Use the website to transmit any virus, malware or harmful code</li>
                <li>Copy, reproduce or republish substantial content from this website without permission</li>
                <li>Use the website in any way that infringes the rights of any third party</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <p>
              All content on this website, including text, graphics, logos and design, is owned by
              or licensed to {site.name} and is protected under the{" "}
              <strong>Copyright Act (Cap. 130, Laws of Kenya)</strong> and other applicable
              intellectual property laws. You may view and print pages for your personal,
              non-commercial use, but may not reproduce, distribute or create derivative works from
              this content without our prior written consent.
            </p>
          ),
        },
        {
          heading: "Consumer protection",
          body: (
            <p>
              Where these Terms apply to services provided to consumers, nothing in these Terms is
              intended to limit any rights you may have under the{" "}
              <strong>Consumer Protection Act, 2012</strong> (Kenya). We are committed to fair
              dealing, accurate representation of our services, and transparent communication about
              what our services can and cannot achieve.
            </p>
          ),
        },
        {
          heading: "No guarantee of outcomes",
          body: (
            <p>
              As set out above, {site.name} does not and cannot guarantee approvals, outcomes,
              specific timelines, regulatory compliance determinations, or any particular result
              from engaging our services. Any statements about typical processes or timeframes are
              general in nature and may not reflect your specific circumstances, which depend on
              the relevant county, authority, property and documentation involved.
            </p>
          ),
        },
        {
          heading: "Limitation of liability",
          body: (
            <p>
              To the fullest extent permitted under Kenyan law, {site.name} shall not be liable for
              any indirect, incidental or consequential loss arising from your use of this website
              or our services, including loss of profits, delays in approvals, or decisions made by
              third-party authorities. Nothing in these Terms excludes or limits liability that
              cannot lawfully be excluded or limited under the laws of Kenya, including liability
              for fraud or wilful misconduct.
            </p>
          ),
        },
        {
          heading: "Third-party links and references",
          body: (
            <p>
              This website may reference or link to third-party websites, government portals or
              resources for your convenience. We do not control and are not responsible for the
              content, accuracy or availability of third-party websites.
            </p>
          ),
        },
        {
          heading: "Fees and engagements",
          body: (
            <p>
              Any fees for consultancy services will be agreed separately with you before work
              begins. Submitting an enquiry through this website does not create a binding
              engagement; an engagement is formed only once terms of service, scope and (where
              applicable) fees have been agreed between you and {site.name}.
            </p>
          ),
        },
        {
          heading: "Privacy",
          body: (
            <p>
              Our collection and use of personal data is described in our{" "}
              <Link href="/privacy-policy" className="text-forest underline">
                Privacy Policy
              </Link>
              , prepared in accordance with the Data Protection Act, 2019.
            </p>
          ),
        },
        {
          heading: "Changes to these Terms",
          body: (
            <p>
              We may update these Terms from time to time. The &quot;Last updated&quot; date at the
              top of this page reflects the most recent revision. Continued use of the website
              after changes are posted constitutes acceptance of the revised Terms.
            </p>
          ),
        },
        {
          heading: "Governing law and dispute resolution",
          body: (
            <>
              <p>
                These Terms are governed by and construed in accordance with the laws of Kenya. Any
                dispute arising from these Terms or your use of our services shall first be
                addressed through good-faith negotiation between the parties, and where relevant,
                the parties may consider alternative dispute resolution mechanisms consistent with{" "}
                <strong>Article 159 of the Constitution of Kenya, 2010</strong>, which promotes the
                use of alternative forms of dispute resolution. Unresolved disputes shall be subject
                to the exclusive jurisdiction of the courts of Kenya.
              </p>
            </>
          ),
        },
        {
          heading: "Contact us",
          body: (
            <p>
              For questions about these Terms, contact us at{" "}
              <a href={`mailto:${site.email}`} className="text-forest underline">
                {site.email}
              </a>{" "}
              or {site.phone}.
            </p>
          ),
        },
      ]}
    />
  );
}
