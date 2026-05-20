/**
 * Programmatic SEO (pSEO) data for Ascension Health (Fernley, NV).
 *
 * Derived from Google Search Console export in
 * `Ascension Health GSC Report/` (Queries.csv, Pages.csv, Countries.csv).
 *
 * ──────────────────────────────────────────────────────────────────────────
 * GSC ANALYSIS SUMMARY
 * ──────────────────────────────────────────────────────────────────────────
 *
 * 1. TOP QUERIES (by impressions / clicks)
 *    - "fernley chiropractic"       — 58 impr, 1 click, pos 14.5
 *    - "ascension chiropractic"     — 49 impr, 1 click, pos 11.1
 *    - "chiropractor fernley nv"    — 30 impr, 1 click, pos 3.5  (top click intent)
 *    - "fernley chiropractor"       — 10 impr, 1 click, pos 2.5
 *    - "gainswave las vegas"        — 44 impr, 0 clicks, pos 30.5
 *    - "ascension"                  — 26 impr, brand
 *    - "how to do myofascial release correctly" — 15 impr, pos 6.6
 *    - "physical therapy fernley nv" — 12 impr, pos 9.4
 *    - "invisalign in fernley"      — 11 impr, pos 51.9  (off-offer, ignore)
 *    - "joint injections las vegas" — 9 impr, pos 69.3   (rank-too-deep gap)
 *
 * 2. KEYWORD PATTERNS OBSERVED
 *    - {service} + {city/nv}        e.g. "physical therapy fernley nv",
 *                                        "gainswave las vegas",
 *                                        "joint injections las vegas"
 *    - {condition} + city           e.g. "ascension headache", "fernley hospital"
 *    - {service} + "near me"        e.g. "chiropractor near me",
 *                                        "medical weight loss near me",
 *                                        "back pain doctor near me"
 *    - symptom + state              e.g. "natural pain relief nevada",
 *                                        "weight loss nevada",
 *                                        "menopause treatment in nevada"
 *    - branded geographic           e.g. "ascension health fernley"
 *    - comparison / vs (latent)     e.g. "myofascial release vs myofascial release"
 *
 * 3. QUICK-WIN PAGES (high impressions, low CTR — already ranking but bleeding)
 *    - /about/                       134 impr, 0 clicks, pos 8.0
 *    - /contact/                     133 impr, 0 clicks, pos 7.4
 *    - /services/chiropractic-care/  132 impr, 0 clicks, pos 7.7
 *    - /gainswave/                    69 impr, 0 clicks, pos 26.4
 *    - /new-patients/                 66 impr, 0 clicks, pos 7.5
 *    - /appointments/                 63 impr, 0 clicks, pos 6.8
 *    - /services/                     60 impr, 0 clicks, pos 6.7
 *    - /joint-pain/                   55 impr, 0 clicks, pos 3.7  (page-1, fix title/meta)
 *    - /conditions-treated/           55 impr, 0 clicks, pos 8.4
 *    - /pain-relief/                  43 impr, 1 click,  pos 16.8
 *    => Action: rewrite titles/metas with city + intent modifier, add FAQ schema.
 *
 * 4. AUDIENCE
 *    96%+ of impressions are US-based. Cluster impressions around Northern
 *    Nevada (Fernley / Reno / Carson) and Southern Nevada (Las Vegas /
 *    Henderson / Paradise) — the two pSEO geo-clusters below.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * PROGRAMMATIC PAGE CATEGORIES (5)
 *   1. service-city     /{service}-in-{city}-nv/
 *   2. condition-city   /{condition}-treatment-{city}-nv/
 *   3. service-near-me  /{service}-near-me/
 *   4. symptom          /{symptom}-nevada/
 *   5. comparison       /{a}-vs-{b}-{city}-nv/
 *
 * Slugs are namespaced so they do NOT collide with the existing app routes
 * (e.g. /physical-therapy/, /joint-pain/, /services/chiropractic-care/).
 * ──────────────────────────────────────────────────────────────────────────
 */

export type PSEOCategory =
  | "service-city"
  | "condition-city"
  | "service-near-me"
  | "symptom"
  | "comparison";

export type PSEOPage = {
  /** URL path (leading + trailing slash) — unique. */
  slug: string;
  category: PSEOCategory;
  /** Primary keyword/phrase this page targets. */
  primaryKeyword: string;
  /** Recommended <title>. */
  title: string;
  /** Recommended <meta description>. */
  metaDescription: string;
  /** Recommended H1. */
  h1: string;
  service?: string;
  condition?: string;
  city?: string;
  symptom?: string;
  comparisonAgainst?: string;
};

// ─────────────────────────────────────────────────────────────────────────
// SOURCE DATA
// ─────────────────────────────────────────────────────────────────────────

export type PSEOCity = {
  slug: string;
  name: string;
  /** "Northern" or "Southern" Nevada cluster. */
  region: "Northern NV" | "Southern NV";
};

/** 30 Nevada cities/communities clustered around our two service geos. */
export const PSEO_CITIES: PSEOCity[] = [
  // Northern NV (primary — Fernley HQ)
  { slug: "fernley", name: "Fernley", region: "Northern NV" },
  { slug: "fallon", name: "Fallon", region: "Northern NV" },
  { slug: "reno", name: "Reno", region: "Northern NV" },
  { slug: "sparks", name: "Sparks", region: "Northern NV" },
  { slug: "carson-city", name: "Carson City", region: "Northern NV" },
  { slug: "dayton", name: "Dayton", region: "Northern NV" },
  { slug: "silver-springs", name: "Silver Springs", region: "Northern NV" },
  { slug: "hazen", name: "Hazen", region: "Northern NV" },
  { slug: "lovelock", name: "Lovelock", region: "Northern NV" },
  { slug: "winnemucca", name: "Winnemucca", region: "Northern NV" },
  { slug: "yerington", name: "Yerington", region: "Northern NV" },
  { slug: "gardnerville", name: "Gardnerville", region: "Northern NV" },
  { slug: "minden", name: "Minden", region: "Northern NV" },
  { slug: "virginia-city", name: "Virginia City", region: "Northern NV" },
  { slug: "sun-valley", name: "Sun Valley", region: "Northern NV" },
  { slug: "spanish-springs", name: "Spanish Springs", region: "Northern NV" },
  { slug: "cold-springs", name: "Cold Springs", region: "Northern NV" },
  { slug: "elko", name: "Elko", region: "Northern NV" },
  { slug: "ely", name: "Ely", region: "Northern NV" },
  // Southern NV (secondary — GAINSWave / weight-loss traffic seen in GSC)
  { slug: "las-vegas", name: "Las Vegas", region: "Southern NV" },
  { slug: "henderson", name: "Henderson", region: "Southern NV" },
  { slug: "north-las-vegas", name: "North Las Vegas", region: "Southern NV" },
  { slug: "paradise", name: "Paradise", region: "Southern NV" },
  { slug: "summerlin", name: "Summerlin", region: "Southern NV" },
  { slug: "spring-valley", name: "Spring Valley", region: "Southern NV" },
  { slug: "enterprise", name: "Enterprise", region: "Southern NV" },
  { slug: "boulder-city", name: "Boulder City", region: "Southern NV" },
  { slug: "mesquite", name: "Mesquite", region: "Southern NV" },
  { slug: "pahrump", name: "Pahrump", region: "Southern NV" },
  { slug: "laughlin", name: "Laughlin", region: "Southern NV" },
];

export type PSEOService = {
  slug: string;
  name: string;
  /** Verb/benefit clause used in meta/H1 templates. */
  benefit: string;
};

/** Services with meaningful search volume in Nevada. */
export const PSEO_SERVICES: PSEOService[] = [
  { slug: "chiropractic-care", name: "Chiropractic Care", benefit: "natural spine and nervous-system care without medication" },
  { slug: "spinal-decompression", name: "Spinal Decompression", benefit: "non-surgical relief for bulging and herniated discs" },
  { slug: "physical-therapy", name: "Physical Therapy", benefit: "1-on-1 rehab that restores strength and mobility" },
  { slug: "joint-injections", name: "Joint Injections", benefit: "image-guided injections that calm inflamed joints" },
  { slug: "trigger-point-injections", name: "Trigger Point Injections", benefit: "in-office injections that release painful muscle knots" },
  { slug: "medical-weight-loss", name: "Medical Weight Loss", benefit: "physician-guided weight loss with real accountability" },
  { slug: "nutritional-iv-therapy", name: "Nutritional IV Therapy", benefit: "IV vitamins for energy, immunity and recovery" },
  { slug: "bioidentical-hormone-replacement-therapy", name: "Bioidentical Hormone Replacement Therapy", benefit: "custom hormone therapy for fatigue, mood and libido" },
  { slug: "gainswave-therapy", name: "GAINSWave® Therapy", benefit: "drug-free acoustic-wave therapy for men's sexual health" },
  { slug: "neuropathy-treatment", name: "Neuropathy Treatment", benefit: "non-surgical care for nerve pain, numbness and tingling" },
  { slug: "pain-management", name: "Pain Management", benefit: "drug-free pain relief that treats the root cause" },
  { slug: "myofascial-release", name: "Myofascial Release Therapy", benefit: "hands-on therapy that frees tight fascia and muscle" },
  { slug: "intersegmental-traction", name: "Intersegmental Traction", benefit: "roller-table therapy that mobilizes the spine gently" },
  { slug: "sports-injury-care", name: "Sports Injury Care", benefit: "get back in the game with conservative sports medicine" },
  { slug: "auto-accident-injury-care", name: "Auto Accident Injury Care", benefit: "whiplash and crash recovery, billed direct to insurance" },
  { slug: "work-injury-care", name: "Work Injury Care", benefit: "workers' comp injury care with documentation done right" },
  { slug: "sexual-wellness-treatment", name: "Sexual Wellness Treatment", benefit: "discreet care for low libido and sexual dysfunction" },
];

export type PSEOCondition = {
  slug: string;
  name: string;
  /** Lay-language symptom phrase for meta copy. */
  symptomPhrase: string;
};

export const PSEO_CONDITIONS: PSEOCondition[] = [
  { slug: "back-pain", name: "Back Pain", symptomPhrase: "lower or upper back pain" },
  { slug: "neck-pain", name: "Neck Pain", symptomPhrase: "stiff or aching neck" },
  { slug: "shoulder-pain", name: "Shoulder Pain", symptomPhrase: "shoulder pain or limited range of motion" },
  { slug: "knee-pain", name: "Knee Pain", symptomPhrase: "knee pain that limits walking or stairs" },
  { slug: "hip-pain", name: "Hip Pain", symptomPhrase: "hip pain or stiffness" },
  { slug: "sciatica", name: "Sciatica", symptomPhrase: "shooting leg pain from the lower back" },
  { slug: "herniated-disc", name: "Herniated Disc", symptomPhrase: "bulging or herniated disc pain" },
  { slug: "headaches", name: "Headaches", symptomPhrase: "tension headaches" },
  { slug: "migraines", name: "Migraines", symptomPhrase: "chronic migraines" },
  { slug: "whiplash", name: "Whiplash", symptomPhrase: "whiplash after a car accident" },
  { slug: "scoliosis", name: "Scoliosis", symptomPhrase: "scoliosis discomfort" },
  { slug: "carpal-tunnel", name: "Carpal Tunnel", symptomPhrase: "carpal tunnel hand numbness" },
  { slug: "joint-pain", name: "Joint Pain", symptomPhrase: "stiff, swollen or arthritic joints" },
  { slug: "arthritis", name: "Arthritis", symptomPhrase: "arthritis pain and stiffness" },
  { slug: "neuropathy", name: "Neuropathy", symptomPhrase: "burning, numb or tingling nerve pain" },
  { slug: "sports-injuries", name: "Sports Injuries", symptomPhrase: "sports injuries and strains" },
  { slug: "work-injuries", name: "Work Injuries", symptomPhrase: "injuries from work" },
  { slug: "auto-accident-injuries", name: "Auto Accident Injuries", symptomPhrase: "car-accident injuries" },
  { slug: "plantar-fasciitis", name: "Plantar Fasciitis", symptomPhrase: "heel pain from plantar fasciitis" },
  { slug: "tmj-pain", name: "TMJ Pain", symptomPhrase: "jaw pain and TMJ tension" },
  { slug: "fibromyalgia", name: "Fibromyalgia", symptomPhrase: "fibromyalgia widespread pain" },
  { slug: "hormonal-imbalance", name: "Hormonal Imbalance", symptomPhrase: "fatigue, mood and hormonal symptoms" },
  { slug: "low-testosterone", name: "Low Testosterone", symptomPhrase: "low energy and low testosterone" },
  { slug: "menopause-symptoms", name: "Menopause Symptoms", symptomPhrase: "hot flashes, mood and menopause symptoms" },
  { slug: "erectile-dysfunction", name: "Erectile Dysfunction", symptomPhrase: "erectile dysfunction (ED)" },
];

export type PSEOSymptom = {
  slug: string;
  phrase: string;
  /** Cluster keyword for the page. */
  intent: string;
};

/** State-modified symptom queries (matches "natural pain relief nevada" pattern). */
export const PSEO_SYMPTOMS: PSEOSymptom[] = [
  { slug: "lower-back-pain-relief", phrase: "Lower Back Pain Relief", intent: "lower back pain relief" },
  { slug: "upper-back-pain-relief", phrase: "Upper Back Pain Relief", intent: "upper back pain relief" },
  { slug: "chronic-neck-pain-relief", phrase: "Chronic Neck Pain Relief", intent: "chronic neck pain relief" },
  { slug: "natural-pain-relief", phrase: "Natural Pain Relief", intent: "natural pain relief" },
  { slug: "drug-free-pain-relief", phrase: "Drug-Free Pain Relief", intent: "drug-free pain relief" },
  { slug: "non-surgical-back-pain-treatment", phrase: "Non-Surgical Back Pain Treatment", intent: "non-surgical back pain treatment" },
  { slug: "pinched-nerve-relief", phrase: "Pinched Nerve Relief", intent: "pinched nerve relief" },
  { slug: "shooting-leg-pain-help", phrase: "Shooting Leg Pain Help", intent: "shooting leg pain treatment" },
  { slug: "numbness-and-tingling-treatment", phrase: "Numbness & Tingling Treatment", intent: "numbness and tingling treatment" },
  { slug: "burning-foot-pain-treatment", phrase: "Burning Foot Pain Treatment", intent: "burning foot pain treatment" },
  { slug: "headache-relief-without-medication", phrase: "Headache Relief Without Medication", intent: "headache relief without medication" },
  { slug: "migraine-relief", phrase: "Migraine Relief", intent: "migraine relief" },
  { slug: "post-car-accident-pain", phrase: "Post-Car-Accident Pain Care", intent: "after car accident pain" },
  { slug: "whiplash-recovery", phrase: "Whiplash Recovery", intent: "whiplash recovery" },
  { slug: "herniated-disc-relief", phrase: "Herniated Disc Relief", intent: "herniated disc relief" },
  { slug: "bulging-disc-treatment", phrase: "Bulging Disc Treatment", intent: "bulging disc treatment" },
  { slug: "knee-pain-without-surgery", phrase: "Knee Pain Help Without Surgery", intent: "knee pain without surgery" },
  { slug: "hip-pain-relief", phrase: "Hip Pain Relief", intent: "hip pain relief" },
  { slug: "shoulder-pain-relief", phrase: "Shoulder Pain Relief", intent: "shoulder pain relief" },
  { slug: "arthritis-pain-management", phrase: "Arthritis Pain Management", intent: "arthritis pain management" },
  { slug: "sciatica-treatment", phrase: "Sciatica Treatment", intent: "sciatica treatment" },
  { slug: "muscle-knot-relief", phrase: "Muscle Knot Relief", intent: "muscle knot relief" },
  { slug: "low-energy-and-fatigue-help", phrase: "Low Energy & Fatigue Help", intent: "low energy and fatigue treatment" },
  { slug: "hormone-fatigue-treatment", phrase: "Hormone Fatigue Treatment", intent: "hormone-related fatigue treatment" },
  { slug: "menopause-treatment", phrase: "Menopause Treatment", intent: "menopause treatment" },
  { slug: "low-libido-treatment-for-men", phrase: "Low Libido Treatment for Men", intent: "low libido treatment for men" },
  { slug: "low-libido-treatment-for-women", phrase: "Low Libido Treatment for Women", intent: "low libido treatment for women" },
  { slug: "erectile-dysfunction-treatment", phrase: "Erectile Dysfunction Treatment", intent: "erectile dysfunction treatment" },
  { slug: "physician-supervised-weight-loss", phrase: "Physician-Supervised Weight Loss", intent: "physician-supervised weight loss" },
  { slug: "iv-vitamin-therapy-for-energy", phrase: "IV Vitamin Therapy for Energy", intent: "IV vitamin therapy for energy" },
  { slug: "iv-therapy-for-immune-support", phrase: "IV Therapy for Immune Support", intent: "IV therapy for immune support" },
  { slug: "iv-therapy-for-hangover-recovery", phrase: "IV Therapy for Hangover Recovery", intent: "IV therapy for hangover recovery" },
];

/** Region modifiers appended to symptom pages to multiply long-tail coverage. */
export const PSEO_SYMPTOM_REGIONS: { slug: string; name: string }[] = [
  { slug: "nevada", name: "Nevada" },
  { slug: "northern-nevada", name: "Northern Nevada" },
  { slug: "southern-nevada", name: "Southern Nevada" },
  { slug: "reno-tahoe", name: "the Reno-Tahoe Area" },
  { slug: "las-vegas-valley", name: "the Las Vegas Valley" },
];

export type PSEOComparison = {
  slug: string;
  a: string;
  b: string;
  title: string;
  /** Brief positioning angle for the meta. */
  angle: string;
};

/** Comparison/decision queries — high-intent bottom-of-funnel pages. */
export const PSEO_COMPARISONS: PSEOComparison[] = [
  {
    slug: "chiropractor-vs-physical-therapist",
    a: "Chiropractor",
    b: "Physical Therapist",
    title: "Chiropractor vs. Physical Therapist",
    angle: "how to choose the right provider for your pain",
  },
  {
    slug: "spinal-decompression-vs-back-surgery",
    a: "Spinal Decompression",
    b: "Back Surgery",
    title: "Spinal Decompression vs. Back Surgery",
    angle: "a non-surgical alternative that may save you the OR",
  },
  {
    slug: "trigger-point-injections-vs-dry-needling",
    a: "Trigger Point Injections",
    b: "Dry Needling",
    title: "Trigger Point Injections vs. Dry Needling",
    angle: "two approaches to muscle-knot pain — what's the difference?",
  },
  {
    slug: "joint-injections-vs-oral-pain-meds",
    a: "Joint Injections",
    b: "Oral Pain Medication",
    title: "Joint Injections vs. Oral Pain Medication",
    angle: "targeted relief that skips the side-effects of pills",
  },
  {
    slug: "gainswave-vs-ed-pills",
    a: "GAINSWave®",
    b: "ED Pills",
    title: "GAINSWave® vs. ED Pills",
    angle: "drug-free acoustic-wave therapy compared to oral ED meds",
  },
  {
    slug: "bhrt-vs-traditional-hormone-therapy",
    a: "Bioidentical HRT",
    b: "Traditional Hormone Therapy",
    title: "Bioidentical HRT vs. Traditional Hormone Therapy",
    angle: "what's actually different about bioidentical hormones",
  },
  {
    slug: "medical-weight-loss-vs-fad-diets",
    a: "Medical Weight Loss",
    b: "Fad Diets",
    title: "Medical Weight Loss vs. Fad Diets",
    angle: "why physician-supervised programs outperform crash diets",
  },
  {
    slug: "iv-therapy-vs-oral-vitamins",
    a: "IV Therapy",
    b: "Oral Vitamins",
    title: "IV Therapy vs. Oral Vitamins",
    angle: "absorption, speed and when each option makes sense",
  },
  {
    slug: "chiropractic-care-vs-pain-clinic",
    a: "Chiropractic Care",
    b: "Pain Clinic",
    title: "Chiropractic Care vs. a Pain Clinic",
    angle: "treating the cause versus masking the symptom",
  },
  {
    slug: "myofascial-release-vs-deep-tissue-massage",
    a: "Myofascial Release",
    b: "Deep Tissue Massage",
    title: "Myofascial Release vs. Deep Tissue Massage",
    angle: "two hands-on therapies — which one fits your pain?",
  },
];

/** Cities used for the comparison-page geo multiplier. */
const COMPARISON_CITIES = PSEO_CITIES.filter((c) =>
  [
    "fernley",
    "fallon",
    "reno",
    "sparks",
    "carson-city",
    "dayton",
    "gardnerville",
    "las-vegas",
    "henderson",
    "summerlin",
  ].includes(c.slug)
);

// ─────────────────────────────────────────────────────────────────────────
// PAGE BUILDERS
// ─────────────────────────────────────────────────────────────────────────

function buildServiceCityPages(): PSEOPage[] {
  const out: PSEOPage[] = [];
  for (const s of PSEO_SERVICES) {
    for (const c of PSEO_CITIES) {
      const keyword = `${s.name} in ${c.name}, NV`;
      out.push({
        slug: `/${s.slug}-in-${c.slug}-nv/`,
        category: "service-city",
        primaryKeyword: keyword.toLowerCase(),
        title: `${s.name} in ${c.name}, NV | Ascension Health`,
        metaDescription: `${s.name} for ${c.name}, Nevada patients — ${s.benefit}. Book a same-week visit with Ascension Health.`,
        h1: `${s.name} in ${c.name}, Nevada`,
        service: s.slug,
        city: c.slug,
      });
    }
  }
  return out;
}

function buildConditionCityPages(): PSEOPage[] {
  const out: PSEOPage[] = [];
  for (const cond of PSEO_CONDITIONS) {
    for (const c of PSEO_CITIES) {
      const keyword = `${cond.name} treatment ${c.name} NV`;
      out.push({
        slug: `/${cond.slug}-treatment-${c.slug}-nv/`,
        category: "condition-city",
        primaryKeyword: keyword.toLowerCase(),
        title: `${cond.name} Treatment in ${c.name}, NV | Ascension Health`,
        metaDescription: `Help for ${cond.symptomPhrase} in ${c.name}, Nevada. Conservative, drug-free ${cond.name.toLowerCase()} care from the Ascension Health team.`,
        h1: `${cond.name} Treatment for ${c.name}, NV Patients`,
        condition: cond.slug,
        city: c.slug,
      });
    }
  }
  return out;
}

function buildServiceNearMePages(): PSEOPage[] {
  return PSEO_SERVICES.map<PSEOPage>((s) => ({
    slug: `/${s.slug}-near-me/`,
    category: "service-near-me",
    primaryKeyword: `${s.name.toLowerCase()} near me`,
    title: `${s.name} Near Me | Ascension Health (Fernley, NV)`,
    metaDescription: `Looking for ${s.name.toLowerCase()} near you? Ascension Health serves Northern & Southern Nevada — ${s.benefit}.`,
    h1: `${s.name} Near You`,
    service: s.slug,
  }));
}

function buildSymptomPages(): PSEOPage[] {
  const out: PSEOPage[] = [];
  for (const sym of PSEO_SYMPTOMS) {
    for (const region of PSEO_SYMPTOM_REGIONS) {
      out.push({
        slug: `/${sym.slug}-${region.slug}/`,
        category: "symptom",
        primaryKeyword: `${sym.intent} ${region.name.replace(/^the /i, "")}`.toLowerCase(),
        title: `${sym.phrase} in ${region.name.replace(/^the /i, "")} | Ascension Health`,
        metaDescription: `${sym.phrase} for patients in ${region.name}. Conservative, root-cause care from the Ascension Health team — book an evaluation today.`,
        h1: `${sym.phrase} in ${region.name}`,
        symptom: sym.slug,
      });
    }
  }
  return out;
}

function buildComparisonPages(): PSEOPage[] {
  const out: PSEOPage[] = [];
  for (const cmp of PSEO_COMPARISONS) {
    // National / un-geo version
    out.push({
      slug: `/${cmp.slug}/`,
      category: "comparison",
      primaryKeyword: `${cmp.a.toLowerCase()} vs ${cmp.b.toLowerCase()}`,
      title: `${cmp.title} — Which Is Right for You? | Ascension Health`,
      metaDescription: `${cmp.title}: ${cmp.angle}. An honest side-by-side from the clinicians at Ascension Health.`,
      h1: `${cmp.title}: Which Is Right for You?`,
      comparisonAgainst: cmp.b,
    });
    // Geo-multiplied versions
    for (const c of COMPARISON_CITIES) {
      out.push({
        slug: `/${cmp.slug}-${c.slug}-nv/`,
        category: "comparison",
        primaryKeyword: `${cmp.a.toLowerCase()} vs ${cmp.b.toLowerCase()} ${c.name.toLowerCase()}`,
        title: `${cmp.title} in ${c.name}, NV | Ascension Health`,
        metaDescription: `${cmp.title} for ${c.name}, Nevada patients — ${cmp.angle}.`,
        h1: `${cmp.title} for ${c.name}, NV Patients`,
        city: c.slug,
        comparisonAgainst: cmp.b,
      });
    }
  }
  return out;
}

// ─────────────────────────────────────────────────────────────────────────
// PUBLIC EXPORT
// ─────────────────────────────────────────────────────────────────────────

export const PSEO_PAGES: PSEOPage[] = (() => {
  const all = [
    ...buildServiceCityPages(),
    ...buildConditionCityPages(),
    ...buildServiceNearMePages(),
    ...buildSymptomPages(),
    ...buildComparisonPages(),
  ];

  // Guarantee slug uniqueness at module load. Throwing here surfaces
  // accidental collisions during `next build` rather than at runtime.
  const seen = new Set<string>();
  for (const p of all) {
    if (seen.has(p.slug)) {
      throw new Error(`[pSEO] duplicate slug detected: ${p.slug}`);
    }
    seen.add(p.slug);
  }
  return all;
})();

export const PSEO_PAGES_BY_CATEGORY: Record<PSEOCategory, PSEOPage[]> = {
  "service-city": PSEO_PAGES.filter((p) => p.category === "service-city"),
  "condition-city": PSEO_PAGES.filter((p) => p.category === "condition-city"),
  "service-near-me": PSEO_PAGES.filter((p) => p.category === "service-near-me"),
  symptom: PSEO_PAGES.filter((p) => p.category === "symptom"),
  comparison: PSEO_PAGES.filter((p) => p.category === "comparison"),
};

export const PSEO_STATS = {
  total: PSEO_PAGES.length,
  byCategory: {
    "service-city": PSEO_PAGES_BY_CATEGORY["service-city"].length,
    "condition-city": PSEO_PAGES_BY_CATEGORY["condition-city"].length,
    "service-near-me": PSEO_PAGES_BY_CATEGORY["service-near-me"].length,
    symptom: PSEO_PAGES_BY_CATEGORY.symptom.length,
    comparison: PSEO_PAGES_BY_CATEGORY.comparison.length,
  },
};

/**
 * Quick-win page list extracted from GSC: pages already getting impressions
 * but bleeding clicks. Use these to prioritise on-page title/meta rewrites
 * and FAQ schema BEFORE shipping the programmatic pages above.
 */
export const PSEO_QUICK_WINS: {
  url: string;
  impressions: number;
  clicks: number;
  position: number;
  recommendation: string;
}[] = [
  { url: "/about/", impressions: 134, clicks: 0, position: 8.01, recommendation: "Rewrite title to include 'Fernley NV chiropractor & wellness clinic'; add team schema." },
  { url: "/contact/", impressions: 133, clicks: 0, position: 7.41, recommendation: "Title: 'Contact Ascension Health — Fernley, NV Chiropractor'; add LocalBusiness schema + click-to-call." },
  { url: "/services/chiropractic-care/", impressions: 132, clicks: 0, position: 7.72, recommendation: "Add 'Chiropractor in Fernley, NV' to title + above-the-fold city H2; insert FAQ schema." },
  { url: "/gainswave/", impressions: 69, clicks: 0, position: 26.45, recommendation: "Build out content depth (1500+ words), add 'GAINSWave Las Vegas / Reno' sections, internal-link from sexual-wellness pages." },
  { url: "/new-patients/", impressions: 66, clicks: 0, position: 7.48, recommendation: "Title: 'New Patients — Same-Week Appointments in Fernley, NV'; reduce friction copy." },
  { url: "/appointments/", impressions: 63, clicks: 0, position: 6.76, recommendation: "Title: 'Book an Appointment in Fernley, NV'; surface phone + online-form CTA above the fold." },
  { url: "/services/", impressions: 60, clicks: 0, position: 6.72, recommendation: "Add benefit-driven title + condition→service grid; internal links to programmatic /{service}-in-{city}-nv/ pages." },
  { url: "/joint-pain/", impressions: 55, clicks: 0, position: 3.71, recommendation: "Already page-1 — rewrite title to 'Joint Pain Treatment in Fernley, NV' + add FAQ schema. Highest-leverage win." },
  { url: "/conditions-treated/", impressions: 55, clicks: 0, position: 8.42, recommendation: "Restructure as condition hub with intro + grid linking each condition→city programmatic page." },
  { url: "/pain-relief/", impressions: 43, clicks: 1, position: 16.79, recommendation: "Re-target 'natural pain relief nevada' (we already rank #72.86 for that). Add NV-region H2 + supporting copy." },
];
