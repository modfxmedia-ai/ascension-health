export const SITE_ORIGIN = (
  process.env.SITE_ORIGIN || "https://ascensionhealthnv.com"
).replace(/\/$/, "")

export const DEFAULT_COVER = "/images/blog/default-cover.jpg"
export const DEFAULT_COVER_ALT = "Ascension Health wellness article cover"

export const DEFAULT_CTA = {
  label: "Request Appointment",
  href: "/appointments/",
}

/** Cover prompt for Ascension Health. No patient faces / medical gore. */
export function coverPrompt(title: string): string {
  const topic = title.replace(/\s+/g, " ").trim().slice(0, 140)
  return [
    "Editorial photograph, 16:9 landscape, premium chiropractic and wellness clinic photography.",
    `The photograph MUST clearly illustrate this exact article topic: "${topic}".`,
    "Match the subject of the title — if it is sciatica, show lower-back care; if headaches, a calm headache-relief wellness scene; if hormones or weight loss, a relevant wellness setting; if chiropractic or spinal decompression, a clean spine-care clinic scene.",
    "Ascension Health brand: calm Fernley, Nevada clinic, natural light, warm greens and soft neutrals, professional and hopeful.",
    "Cinematic lighting, sharp, no grain, no watermark.",
    "No text, no letters, no logos, no captions, no readable signage.",
    "No patient faces, no identifiable people looking at camera, no medical gore, no blood, no needles in close-up.",
  ].join(" ")
}

/**
 * Slugs that already have a committed file at /images/blog/covers/{slug}.png
 * List only. Do not fs.stat public/ — that packs images into the cron bundle.
 */
export const COMMITTED_COVER_SLUGS: readonly string[] = []
