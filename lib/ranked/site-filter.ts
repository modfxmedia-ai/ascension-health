import { SITE_ORIGIN } from "./config"
import type { RankedProject } from "./types"

const THIS_HOST = "ascensionhealthnv.com"

const THIS_SITE_RE =
  /ascension health|fernley|northern nevada|\bnv\b|reno|sparks|fallon|yerington|dayton|silver springs|lovelock|winnemucca|elko/i

const OTHER_SITE_RE =
  /orange county|huntington beach|costa mesa|newport beach|santa ana|irvine|laguna|anaheim|tustin|fountain valley|\bla\b|los angeles|san diego|california|\bca\b|houston|austin|dallas|justin healthcare|living light|cool pools/i

function hostOf(url: string | null | undefined): string | null {
  if (!url) return null
  try {
    return new URL(url).host.replace(/^www\./, "").toLowerCase()
  } catch {
    return null
  }
}

export function thisSiteHost(): string {
  return hostOf(SITE_ORIGIN) || THIS_HOST
}

export function projectBelongsToThisSite(project: RankedProject): boolean {
  const website = project.websiteUrl || project.website_url
  const host = hostOf(website)
  if (host) return host === thisSiteHost()
  return /ascension/i.test(project.name || "") && !OTHER_SITE_RE.test(project.name || "")
}

export function isForeignProject(project: RankedProject): boolean {
  const website = project.websiteUrl || project.website_url
  const host = hostOf(website)
  if (host && host !== thisSiteHost()) return true
  return OTHER_SITE_RE.test(project.name || "")
}

/** Drop calendar items written for another clinic or city. */
export function isThisSiteArticle(
  title: string,
  description: string | null | undefined,
  projectConfirmed: boolean,
): boolean {
  const text = `${title} ${description ?? ""}`
  if (OTHER_SITE_RE.test(text)) return false
  if (projectConfirmed) return true
  return THIS_SITE_RE.test(text)
}
