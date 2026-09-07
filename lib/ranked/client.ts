import { isForeignProject, projectBelongsToThisSite } from "./site-filter"
import {
  RANKED_CACHE_TAG,
  type RankedContentDetail,
  type RankedContentListItem,
  type RankedDetailResponse,
  type RankedListResponse,
  type RankedProject,
  type RankedProjectsResponse,
} from "./types"

const RANKED_BASE = "https://app.ranked.ai/api/v1"

function rankedConfig() {
  return {
    apiKey: process.env.RANKED_API_KEY,
    projectId: process.env.RANKED_PROJECT_ID,
  }
}

export function isRankedConfigured(): boolean {
  const { apiKey, projectId } = rankedConfig()
  return Boolean(apiKey && projectId)
}

export function hasRankedApiKey(): boolean {
  return Boolean(rankedConfig().apiKey)
}

function thisProjectId(projectId?: string): string | undefined {
  return projectId || rankedConfig().projectId
}

async function rankedGet<T>(path: string): Promise<T> {
  const { apiKey } = rankedConfig()
  if (!apiKey) throw new Error("RANKED_API_KEY is not set")

  const res = await fetch(`${RANKED_BASE}${path}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
    next: { revalidate: 300, tags: [RANKED_CACHE_TAG] },
  })

  if (!res.ok) {
    const text = await res.text().catch(() => "")
    throw new Error(`Ranked API ${res.status} ${path}: ${text.slice(0, 200)}`)
  }

  return res.json() as Promise<T>
}

export async function listRankedProjects(): Promise<RankedProject[]> {
  if (!hasRankedApiKey()) return []

  const items: RankedProject[] = []
  for (let offset = 0; offset < 500; offset += 50) {
    const json = await rankedGet<RankedProjectsResponse>(
      `/projects?limit=50&offset=${offset}`,
    )
    const page = Array.isArray(json.data) ? json.data : []
    items.push(...page)
    if (page.length < 50) break
  }
  return items
}

export async function listRankedContent(
  projectId?: string,
  limit = 50,
): Promise<RankedContentListItem[]> {
  const id = thisProjectId(projectId)
  if (!id) return []

  const items: RankedContentListItem[] = []
  const pageSize = Math.min(limit, 50)
  for (let offset = 0; offset < 1000; offset += pageSize) {
    const json = await rankedGet<RankedListResponse>(
      `/projects/${id}/content?limit=${pageSize}&offset=${offset}`,
    )
    const page = Array.isArray(json.data) ? json.data : []
    items.push(...page)
    if (page.length < pageSize) break
  }
  return items
}

export async function getRankedContentDetail(
  contentId: string,
  projectId?: string,
): Promise<RankedContentDetail | null> {
  const id = thisProjectId(projectId)
  if (!id) return null

  const json = await rankedGet<RankedDetailResponse>(
    `/projects/${id}/content/${contentId}`,
  )
  return json.data ?? null
}

export async function getConfiguredRankedProject(): Promise<RankedProject | null> {
  const id = thisProjectId()
  if (!id) return null
  const projects = await listRankedProjects()
  return projects.find((p) => p.id === id) ?? null
}

/**
 * True only when RANKED_PROJECT_ID is this domain's project.
 * A foreign website URL or another brand name is refused.
 */
export async function isConfiguredProjectForThisSite(): Promise<{
  ok: boolean
  project: RankedProject | null
  reason?: string
}> {
  const resolved = await resolveThisSiteProject()
  if (!resolved.project) {
    return { ok: false, project: null, reason: resolved.reason }
  }
  return { ok: true, project: resolved.project }
}

/**
 * Resolve the Ranked project for ascensionhealthnv.com only.
 * Never falls back to another client's calendar.
 */
export async function resolveThisSiteProject(): Promise<{
  project: RankedProject | null
  reason?: string
}> {
  if (!hasRankedApiKey()) return { project: null, reason: "missing_key" }

  const projects = await listRankedProjects().catch(() => [])
  const local = projects.filter(projectBelongsToThisSite)
  const configuredId = rankedConfig().projectId
  const configured = configuredId
    ? projects.find((p) => p.id === configuredId) ?? null
    : null

  if (configured && projectBelongsToThisSite(configured)) {
    return { project: configured }
  }

  if (configured && isForeignProject(configured)) {
    console.error(
      `[ranked] RANKED_PROJECT_ID is "${configured.name}" — not Ascension Health.`,
    )
  }

  if (local.length === 1) {
    console.warn(
      `[ranked] using this-site project "${local[0].name}" instead of the foreign env id`,
    )
    return { project: local[0] }
  }

  if (local.length > 1) {
    console.error(
      `[ranked] ${local.length} Ascension-matching projects — set RANKED_PROJECT_ID to the ascensionhealthnv.com one`,
    )
    return { project: null, reason: "ambiguous_local_projects" }
  }

  if (!configured) {
    return { project: null, reason: "project_not_in_key_scope" }
  }

  return { project: null, reason: "foreign_project" }
}

export async function resolveThisSiteProjectId(): Promise<string | null> {
  const { project } = await resolveThisSiteProject()
  return project?.id ?? null
}
