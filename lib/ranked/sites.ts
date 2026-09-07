import { SITE_ORIGIN } from "./config"

export type RankedSiteTarget = {
  projectId: string
  name: string
  origin: string
}

export const RANKED_SITES: RankedSiteTarget[] = [
  {
    projectId: process.env.RANKED_PROJECT_ID || "",
    name: "Ascension Health",
    origin: SITE_ORIGIN,
  },
].filter((s) => s.projectId)

function sitesFromEnv(): RankedSiteTarget[] {
  // Intentionally unused unless this cron must ping other origins.
  // Do not add other clients here — this domain only publishes RANKED_PROJECT_ID.
  const raw = process.env.RANKED_SITE_MAP
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw) as RankedSiteTarget[]
    if (!Array.isArray(parsed)) return []
    return parsed.filter((row) => row?.projectId && row?.origin)
  } catch {
    console.error("[ranked] RANKED_SITE_MAP is not valid JSON")
    return []
  }
}

export function getRankedSiteTargets(thisSiteProjectId?: string): RankedSiteTarget[] {
  const allowed = thisSiteProjectId || process.env.RANKED_PROJECT_ID
  const merged = new Map<string, RankedSiteTarget>()
  const seed = thisSiteProjectId
    ? [
        {
          projectId: thisSiteProjectId,
          name: "Ascension Health",
          origin: SITE_ORIGIN,
        },
      ]
    : RANKED_SITES
  for (const site of [...seed, ...sitesFromEnv()]) {
    if (allowed && site.projectId !== allowed) continue
    merged.set(site.projectId, site)
  }
  return [...merged.values()]
}

export function isLocalOrigin(origin: string): boolean {
  try {
    return (
      new URL(origin).host.replace(/^www\./, "") ===
      new URL(SITE_ORIGIN).host.replace(/^www\./, "")
    )
  } catch {
    return origin.replace(/\/$/, "") === SITE_ORIGIN
  }
}
