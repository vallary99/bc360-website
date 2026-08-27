import type { Metadata } from "next";
import Link from "next/link";
import LegalDocument from "@/components/LegalDocument";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects personal data, in line with Kenya's Data Protection Act, 2019.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      lastUpdated="27 August 2026"
      crumbLabel="Privacy Policy"
      intro={
        <p>
          This Privacy Policy explains how {site.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
          collects, uses, discloses and protects personal data when you use our website at{" "}
          {site.url.replace("https://", "")} or otherwise contact us. It is prepared with regard
          to the <strong>Data Protection Act, 2019</strong> (Kenya) and its subsidiary
          regulations, which govern the processing of personal data in Kenya.
        </p>
      }
      sections={[
        {
          heading: "Who we are",
          body: (
            <>
              <p>
                {site.name} is a construction, land and regulatory compliance consultancy
                operating in Kenya, serving clients primarily in Kiambu, Nairobi, Murang&apos;a and
                Nakuru counties. For the purposes of the Data Protection Act, 2019,{" "}
                {site.name} acts as the <strong>data controller</strong> in respect of personal
                data collected through this website.
              </p>
              <p>
                You can reach us at{" "}
                <a href={`mailto:${site.email}`} className="text-forest underline">
                  {site.email}
                </a>{" "}
                or {site.phone} for any question about this policy or your personal data.
              </p>
            </>
          ),
        },
        {
          heading: "What personal data we collect",
          body: (
            <>
              <p>We collect personal data that you provide directly to us, primarily through our contact and enquiry form. This may include:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Your name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>County and general location of your property or project</li>
                <li>The service you are enquiring about and a description of your situation</li>
                <li>Any documents you choose to upload or send us relating to your enquiry</li>
                <li>Messages sent via WhatsApp, email or phone, and the metadata associated with them</li>
              </ul>
              <p>
                We do not knowingly collect sensitive categories of personal data (such as health
                or biometric data) unless you volunteer it as part of describing your enquiry, and
                we ask that you avoid sharing sensitive personal data with us unless it is
                genuinely necessary.
              </p>
            </>
          ),
        },
        {
          heading: "Why we process your data",
          body: (
            <>
              <p>
                Under the Data Protection Act, 2019, personal data may only be processed where a
                lawful basis exists. We process your personal data on the following bases:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Consent:</strong> where you submit an enquiry or contact us directly, you
                  consent to us using your details to respond to that enquiry.
                </li>
                <li>
                  <strong>Performance of a contract:</strong> where we are engaged to provide
                  consultancy services, we process data necessary to deliver those services.
                </li>
                <li>
                  <strong>Legitimate interests:</strong> such as maintaining records of enquiries,
                  improving our services, and ensuring the security of our website, provided this
                  does not override your rights and freedoms.
                </li>
                <li>
                  <strong>Legal obligation:</strong> where processing is required to comply with
                  applicable Kenyan law.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "How we use your data",
          body: (
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To respond to enquiries and provide the consultancy services you request</li>
              <li>To communicate with you about your application, property or project</li>
              <li>To maintain internal records of client engagements</li>
              <li>To improve our website and services</li>
              <li>To comply with legal or regulatory obligations where applicable</li>
            </ul>
          ),
        },
        {
          heading: "Sharing your data",
          body: (
            <>
              <p>We do not sell personal data. We may share personal data in limited circumstances, including:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  With relevant county or national government offices, banks or other third
                  parties <strong>only where necessary to progress your specific enquiry, and
                  generally with your knowledge and consent</strong> (for example, when following up
                  on an application on your behalf).
                </li>
                <li>
                  With service providers who support our operations, such as website hosting or
                  email providers, under obligations of confidentiality.
                </li>
                <li>Where required by law, regulation, or a valid order of a Kenyan court or authority.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Data retention",
          body: (
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes
              described in this policy, including any legal, accounting or reporting requirements.
              Enquiry and engagement records are typically retained for the duration of an active
              matter and a reasonable period afterward, after which they are securely deleted or
              anonymised.
            </p>
          ),
        },
        {
          heading: "Your rights under the Data Protection Act, 2019",
          body: (
            <>
              <p>As a data subject under Kenyan law, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Be informed of the use to which your personal data is to be put</li>
                <li>Access your personal data that we hold</li>
                <li>Request the correction of inaccurate or outdated personal data</li>
                <li>Request the deletion of your personal data, subject to legal exceptions</li>
                <li>Object to the processing of your personal data in certain circumstances</li>
                <li>
                  Lodge a complaint with the{" "}
                  <strong>Office of the Data Protection Commissioner (ODPC)</strong>, the body
                  responsible for enforcing the Data Protection Act, 2019, if you believe your
                  rights have been infringed
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a href={`mailto:${site.email}`} className="text-forest underline">
                  {site.email}
                </a>
                . We will respond within a reasonable time in line with our obligations under the
                Act.
              </p>
            </>
          ),
        },
        {
          heading: "Cookies and website analytics",
          body: (
            <p>
              Our website may use limited functional cookies necessary for it to operate correctly,
              and may use analytics tools to understand general, aggregated usage of the site. We
              do not use these tools to build detailed profiles for advertising purposes. You can
              control or disable cookies through your browser settings; doing so may affect some
              website functionality.
            </p>
          ),
        },
        {
          heading: "Data security",
          body: (
            <p>
              We take reasonable technical and organisational measures to protect personal data
              against unauthorised access, loss, misuse or alteration, consistent with our
              obligations under the Data Protection Act, 2019. No method of transmission or storage
              is completely secure, and we cannot guarantee absolute security.
            </p>
          ),
        },
        {
          heading: "International data transfers",
          body: (
            <p>
              Where personal data is processed or stored using service providers located outside
              Kenya (for example, cloud hosting infrastructure), we take steps to ensure such
              transfers comply with the cross-border data transfer requirements of the Data
              Protection Act, 2019, including verifying that appropriate safeguards are in place.
            </p>
          ),
        },
        {
          heading: "Children's privacy",
          body: (
            <p>
              Our services are intended for adults dealing with property, construction and
              compliance matters. We do not knowingly collect personal data from children.
            </p>
          ),
        },
        {
          heading: "Changes to this policy",
          body: (
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or legal requirements. The &quot;Last updated&quot; date at the top of this
              page indicates when it was last revised. We encourage you to review this page
              periodically.
            </p>
          ),
        },
        {
          heading: "Contact us",
          body: (
            <p>
              If you have questions about this Privacy Policy or how we handle your personal data,
              contact us at{" "}
              <a href={`mailto:${site.email}`} className="text-forest underline">
                {site.email}
              </a>{" "}
              or {site.phone}. You may also refer to our{" "}
              <Link href="/terms" className="text-forest underline">
                Terms &amp; Conditions
              </Link>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
