import type { NextConfig } from "next";

const SERVICE_REDIRECTS = [
  "joint-injections",
  "trigger-point-injections",
  "physical-therapy",
  "nutritional-ivs",
  "bioidentical-hormone-replacement-therapy",
  "gainswave",
  "medical-weight-loss",
];

const CONDITION_REDIRECTS = [
  "neuropathy",
  "joint-pain",
  "knee-pain",
  "pain-relief",
  "sexual-dysfunction",
  "hormonal-imbalance",
];

const nextConfig: NextConfig = {
  // Match the live site's URL structure (e.g. /about/, /services/chiropractic-care/)
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      ...SERVICE_REDIRECTS.map((slug) => ({
        source: `/${slug}/`,
        destination: `/services/${slug}/`,
        permanent: true,
      })),
      ...CONDITION_REDIRECTS.map((slug) => ({
        source: `/${slug}/`,
        destination: `/conditions-treated/${slug}/`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
