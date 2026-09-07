import {
  BLOG_POSTS,
  DEFAULT_AUTHOR,
  estimateReadingMinutes,
  type BlogBlock,
  type BlogPost,
} from "@/lib/blog"
import type { BlogPostData } from "./types"

export function inferCategory(title: string): string {
  const t = title.toLowerCase()
  if (/sciatica|piriformis/.test(t)) return "Sciatica"
  if (/headache|migraine/.test(t)) return "Headaches"
  if (/hormone|bhrt/.test(t)) return "Hormone Health"
  if (/weight|diet/.test(t)) return "Weight Loss"
  if (/shoulder/.test(t)) return "Shoulder Pain"
  if (/knee/.test(t)) return "Knee Pain"
  if (/neck/.test(t)) return "Neck Pain"
  if (/chiropractic|adjustment|spine|back|decompression/.test(t)) {
    return "Chiropractic Care"
  }
  return "Wellness"
}

export function rankedToBlogPost(data: BlogPostData): BlogPost {
  const content: BlogBlock[] = []
  for (const section of data.sections) {
    if (section.heading && section.heading !== data.title && section.heading !== data.h1) {
      content.push({ type: "heading", text: section.heading })
    }
    for (const para of section.body) {
      if (para.trim()) content.push({ type: "paragraph", text: para })
    }
  }

  if (content.length === 0 && data.intro) {
    content.push({ type: "paragraph", text: data.intro })
  }

  content.push({
    type: "cta",
    heading: data.cta.label,
    body: "Questions about this topic? Our Fernley team is happy to help.",
    buttonLabel: data.cta.label,
    buttonHref: data.cta.href,
  })

  return {
    slug: data.slug,
    title: data.title,
    excerpt: data.metaDescription,
    category: inferCategory(data.title),
    publishedAt: data.publishDate,
    readingMinutes: estimateReadingMinutes(content),
    cover: { src: data.coverImage, alt: data.coverAlt || data.title },
    author: DEFAULT_AUTHOR,
    lede: data.intro,
    content,
    related: data.relatedPosts?.map((r) => r.slug),
  }
}

export function applyPublishedOverlay(data: BlogPostData): BlogPost {
  const local = BLOG_POSTS.find((p) => p.slug === data.slug)
  if (!local) return rankedToBlogPost(data)

  const date = data.publishDate
  const localDate = local.publishedAt.slice(0, 10)
  const coverSrc = typeof local.cover.src === "string" ? local.cover.src : local.cover.src.src
  const next = { ...local }
  if (date && date !== localDate) next.publishedAt = date
  if (data.coverImage && data.coverImage !== coverSrc) {
    next.cover = { src: data.coverImage, alt: data.coverAlt || local.cover.alt }
  }
  return next
}

export async function getPublishedSitePosts(): Promise<BlogPost[]> {
  const { getPublishedBlogPosts } = await import("./posts")
  const published = await getPublishedBlogPosts()
  return published
    .map(applyPublishedOverlay)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
}

export async function getPublishedSitePost(slug: string): Promise<BlogPost | undefined> {
  const posts = await getPublishedSitePosts()
  return posts.find((p) => p.slug === slug)
}

export function getRelatedFromList(post: BlogPost, all: BlogPost[], limit = 3): BlogPost[] {
  if (post.related?.length) {
    const picked = post.related
      .map((slug) => all.find((p) => p.slug === slug))
      .filter((p): p is BlogPost => Boolean(p))
    if (picked.length) return picked.slice(0, limit)
  }
  return all
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit)
}
