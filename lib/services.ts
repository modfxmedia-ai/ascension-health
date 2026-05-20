export type Service = {
  slug: string;
  href: string;
  title: string;
  tagline: string;
  summary: string;
};

export const SERVICES: Service[] = [
  {
    slug: "joint-injections",
    href: "/joint-injections/",
    title: "Joint Injections",
    tagline: "Targeted relief for painful, inflamed joints.",
    summary:
      "Image-guided injections that reduce inflammation and restore comfortable movement.",
  },
  {
    slug: "trigger-point-injections",
    href: "/trigger-point-injections/",
    title: "Trigger Point Injections",
    tagline: "Release knots that cause referred muscle pain.",
    summary:
      "Quick in-office injections that calm tight muscle bands and ease chronic tension.",
  },
  {
    slug: "physical-therapy",
    href: "/physical-therapy/",
    title: "Physical Therapy",
    tagline: "Recover strength, mobility and confidence.",
    summary:
      "Personalized rehab and therapeutic exercise after injury, surgery or chronic pain.",
  },
  {
    slug: "chiropractic-care",
    href: "/services/chiropractic-care/",
    title: "Chiropractic Care",
    tagline: "Natural adjustments for spine and nervous system health.",
    summary:
      "Gentle, precise care to relieve back, neck and joint pain — no medication required.",
  },
  {
    slug: "nutritional-ivs",
    href: "/nutritional-ivs/",
    title: "Nutritional IVs",
    tagline: "Vitamins and minerals delivered directly to your cells.",
    summary:
      "IV blends that support energy, immunity and recovery when oral supplements fall short.",
  },
  {
    slug: "bioidentical-hormone-replacement-therapy",
    href: "/bioidentical-hormone-replacement-therapy/",
    title: "Bioidentical Hormones",
    tagline: "Rebalance hormones, feel like yourself again.",
    summary:
      "Custom hormone therapy for fatigue, mood, sleep, libido and metabolic concerns.",
  },
  {
    slug: "spinal-decompression",
    href: "/services/spinal-decompression/",
    title: "Spinal Decompression",
    tagline: "Non-surgical relief for bulging and herniated discs.",
    summary:
      "Gentle mechanical traction that takes pressure off spinal nerves and discs.",
  },
  {
    slug: "gainswave",
    href: "/gainswave/",
    title: "GAINSWave™",
    tagline: "Drug-free wave therapy for men's wellness.",
    summary:
      "Acoustic-wave therapy that improves blood flow and supports sexual health.",
  },
  {
    slug: "medical-weight-loss",
    href: "/medical-weight-loss/",
    title: "Medical Weight Loss",
    tagline: "Physician-guided weight management that lasts.",
    summary:
      "A clinical plan that combines nutrition, accountability and medical support.",
  },
];
