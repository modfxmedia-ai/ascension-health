import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Match the live site's URL structure (e.g. /about/, /services/chiropractic-care/)
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
