import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export: no Node.js server required at all. Deploy the
  // contents of `out/` directly into cPanel's public_html via File Manager
  // or FTP, same as any plain HTML site. The contact form posts to
  // contact.php (in public/) instead of a Next.js API route, since static
  // export can't run server-side route handlers.
  output: "export",
  images: {
    // No server means no on-demand image optimization API; images are
    // served as-is. Quality/sizing is still controlled via the `w`/`q`
    // query params already baked into each Unsplash URL in the code.
    unoptimized: true,
  },
};

export default nextConfig;
