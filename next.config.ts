import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hosted on Vercel: default Node.js/serverless output, so API routes
  // (the contact form's email sending) and on-demand image optimization
  // both work normally. No special `output` setting needed here.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
