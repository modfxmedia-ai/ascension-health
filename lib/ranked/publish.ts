import { listRankedContent, resolveThisSiteProject } from "./client"
import { getRankedCoverImage } from "./cover"
import { isBlogContentType, isRankedPostLive, slugFromTitle } from "./html-to-post"
import { isThisSiteArticle } from "./site-filter"

export async function generateLiveRankedCovers(projectId: string): Promise<string[]> {
  const resolved = await resolveThisSiteProject()
  const id = resolved.project?.id
  if (!id) return []
  if (projectId && projectId !== id) {
    console.error("[ranked] refused cover generation for another project")
    return []
  }
  const projectConfirmed = true

  const items = await listRankedContent(id)
  const slugs: string[] = []
  const reservedUrls = new Set<string>()

  for (const item of items) {
    if (
      !isBlogContentType(item.content_type) ||
      !isRankedPostLive(item.status, item.scheduled_date) ||
      !isThisSiteArticle(item.title, item.description, projectConfirmed)
    ) {
      continue
    }
    const slug = slugFromTitle(item.title)
    await getRankedCoverImage({
      contentId: item.id,
      title: item.title,
      slug,
      generate: true,
      reservedUrls,
    })
    slugs.push(slug)
  }

  return slugs
}
