import { PSEO_CONDITIONS, PSEO_SERVICES } from "@/lib/pSEO-data";
import { PSEO_TARGET_CITIES, PSEO_TREATMENT_PAGES, SITE_URL } from "@/lib/pSEO-routing";

type Entry = { path: string; priority: number; changefreq: string };

/** Core / brand pages — top priority. */
const CORE_ENTRIES: Entry[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/about/", priority: 1.0, changefreq: "monthly" },
  { path: "/our-team/", priority: 1.0, changefreq: "monthly" },
  { path: "/appointments/", priority: 1.0, changefreq: "monthly" },
  { path: "/contact/", priority: 1.0, changefreq: "monthly" },
  { path: "/new-patients/", priority: 1.0, changefreq: "monthly" },
  { path: "/new-patients/online-forms/", priority: 0.6, changefreq: "yearly" },
  { path: "/conditions-treated/", priority: 1.0, changefreq: "monthly" },
  { path: "/areas-we-serve/", priority: 0.9, changefreq: "weekly" },
  { path: "/sitemap/", priority: 0.3, changefreq: "yearly" },
];

/** Top-level service pages. */
const SERVICE_ENTRIES: Entry[] = [
  "/services/",
  "/services/chiropractic-care/",
  "/services/spinal-decompression/",
  "/physical-therapy/",
  "/joint-injections/",
  "/trigger-point-injections/",
  "/nutritional-ivs/",
  "/bioidentical-hormone-replacement-therapy/",
  "/medical-weight-loss/",
  "/gainswave/",
  "/pain-relief/",
  "/joint-pain/",
  "/knee-pain/",
  "/neuropathy/",
  "/hormonal-imbalance/",
  "/sexual-dysfunction/",
  "/sports-injuries/",
  "/spinal-decompression/",
].map((path) => ({ path, priority: 0.9, changefreq: "monthly" }));

/** Top-level condition pages. */
const CONDITION_ENTRIES: Entry[] = [
  "/conditions-treated/back-pain/",
  "/conditions-treated/carpal-tunnel/",
  "/conditions-treated/headaches-migraines/",
  "/conditions-treated/intersegmental-traction/",
  "/conditions-treated/myofascial-release/",
  "/conditions-treated/neck-pain/",
  "/conditions-treated/sciatica/",
  "/conditions-treated/scoliosis/",
  "/conditions-treated/shoulder-pain/",
  "/conditions-treated/whiplash/",
  "/conditions-treated/work-injury/",
].map((path) => ({ path, priority: 0.7, changefreq: "monthly" }));

/** City hub pages (e.g. /fernley-nv/) — high priority entry points into each city silo. */
const CITY_HUB_ENTRIES: Entry[] = PSEO_TARGET_CITIES.map((c) => ({
  path: `/${c.slug}-nv/`,
  priority: 0.9,
  changefreq: "monthly",
}));

/** Build all programmatic SEO entries from the pSEO data set. */
function buildPseoEntries(): Entry[] {
  const entries: Entry[] = [];

  // Service + city  (e.g. /chiropractic-care/reno-nv/)  — priority 0.8
  for (const s of PSEO_SERVICES) {
    for (const c of PSEO_TARGET_CITIES) {
      entries.push({
        path: `/${s.slug}/${c.slug}-nv/`,
        priority: 0.8,
        changefreq: "monthly",
      });
    }
  }

  // Service near city  (e.g. /chiropractic-care/near-reno/)  — priority 0.7
  for (const s of PSEO_SERVICES) {
    for (const c of PSEO_TARGET_CITIES) {
      entries.push({
        path: `/${s.slug}/near-${c.slug}/`,
        priority: 0.7,
        changefreq: "monthly",
      });
    }
  }

  // Condition + city  (e.g. /back-pain/reno-nv/)  — priority 0.7
  for (const cond of PSEO_CONDITIONS) {
    for (const c of PSEO_TARGET_CITIES) {
      entries.push({
        path: `/${cond.slug}/${c.slug}-nv/`,
        priority: 0.7,
        changefreq: "monthly",
      });
    }
  }

  // Treatment detail pages  (e.g. /treatments/lower-back-pain-relief-nevada/)
  for (const t of PSEO_TREATMENT_PAGES) {
    entries.push({
      path: `/treatments/${t.treatmentSlug}/`,
      priority: 0.6,
      changefreq: "monthly",
    });
  }

  return entries;
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const dynamic = "force-static";

export function GET() {
  const lastmod = new Date().toISOString();

  // De-duplicate by path; keep the higher priority on collision.
  const seen = new Map<string, Entry>();
  for (const e of [
    ...CORE_ENTRIES,
    ...SERVICE_ENTRIES,
    ...CONDITION_ENTRIES,
    ...CITY_HUB_ENTRIES,
    ...buildPseoEntries(),
  ]) {
    const prev = seen.get(e.path);
    if (!prev || e.priority > prev.priority) seen.set(e.path, e);
  }
  const entries = [...seen.values()];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${escapeXml(`${SITE_URL}${e.path}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(1)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
