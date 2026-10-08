import Script from "next/script";

/**
 * Google tag (gtag.js) for Google Analytics 4.
 *
 * Uses the production measurement ID by default; set NEXT_PUBLIC_GA_ID to point
 * the site at a different property. NEXT_PUBLIC_* values are
 * inlined at build time, so changing the ID in Vercel requires a redeploy.
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-9VKRP1TT20";

export default function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
