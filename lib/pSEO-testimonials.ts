/**
 * Shared testimonials used across all programmatic SEO pages.
 *
 * Names + cities are illustrative composites — replace with real Google /
 * Facebook reviews once the client has approved attribution. Each entry
 * carries a `topicTags` array so pages can prefer testimonials that match
 * the page's service or condition; falls back to the first 3 when no
 * matches exist.
 */

export type Testimonial = {
  name: string;
  city: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  topicTags: string[];
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marcie R.",
    city: "Fernley, NV",
    rating: 5,
    quote:
      "I had chronic lower back pain for over a year and three sessions in I was already sleeping through the night. The team listens, explains everything, and never tries to upsell. Genuinely the best chiropractic care I've had in Nevada.",
    topicTags: [
      "chiropractic-care",
      "back-pain",
      "spinal-decompression",
      "sciatica",
      "herniated-disc",
      "pain-management",
    ],
  },
  {
    name: "Daniel K.",
    city: "Reno, NV",
    rating: 5,
    quote:
      "Drove out to Fernley after my Reno PT clinic kept rebooking me without progress. Ascension built me a real plan, gave me homework, and got me back on the mountain bike in six weeks. Worth every mile of the drive.",
    topicTags: [
      "physical-therapy",
      "sports-injury-care",
      "knee-pain",
      "shoulder-pain",
      "sports-injuries",
      "myofascial-release",
    ],
  },
  {
    name: "Jenna T.",
    city: "Fallon, NV",
    rating: 5,
    quote:
      "The medical weight-loss program changed my life. Down 28 pounds, off two medications, and I actually understand why my body was holding the weight. Real accountability, not gimmicks.",
    topicTags: [
      "medical-weight-loss",
      "bioidentical-hormone-replacement-therapy",
      "hormonal-imbalance",
      "menopause-symptoms",
      "low-testosterone",
    ],
  },
  {
    name: "Robert M.",
    city: "Sparks, NV",
    rating: 5,
    quote:
      "Whiplash from a rear-end on I-80. They billed my auto insurance directly and walked me through every step. Pain free in about two months — couldn't recommend them more.",
    topicTags: [
      "auto-accident-injury-care",
      "whiplash",
      "neck-pain",
      "auto-accident-injuries",
      "headaches",
      "migraines",
    ],
  },
  {
    name: "Andrea L.",
    city: "Carson City, NV",
    rating: 5,
    quote:
      "After menopause hit I felt like a stranger in my own body. The BHRT plan and lifestyle coaching brought back my energy and my mood. I tell every friend over 45 about Ascension.",
    topicTags: [
      "bioidentical-hormone-replacement-therapy",
      "menopause-symptoms",
      "hormonal-imbalance",
      "low-testosterone",
    ],
  },
  {
    name: "Mike H.",
    city: "Dayton, NV",
    rating: 5,
    quote:
      "Tried injections, gabapentin, everything. The neuropathy protocol here is the first thing that actually moved the needle. Feeling in my feet is back and I'm walking 3 miles a day.",
    topicTags: [
      "neuropathy-treatment",
      "neuropathy",
      "burning-foot-pain-treatment",
      "numbness-and-tingling-treatment",
    ],
  },
];

/**
 * Pick up to 3 testimonials, prioritizing those tagged with the page's
 * topic slug. Falls back to filling from the front of the list.
 */
export function pickTestimonials(topicSlug: string | undefined, count = 3): Testimonial[] {
  if (!topicSlug) return TESTIMONIALS.slice(0, count);
  const matched = TESTIMONIALS.filter((t) => t.topicTags.includes(topicSlug));
  const rest = TESTIMONIALS.filter((t) => !matched.includes(t));
  return [...matched, ...rest].slice(0, count);
}
