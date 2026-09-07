import { BLOG_POSTS, type BlogBlock } from "@/lib/blog"
import { DEFAULT_CTA } from "./config"
import type { BlogPostData } from "./types"

function coverSrc(src: BlogPostData["coverImage"] | { src: string }): string {
  return typeof src === "string" ? src : src.src
}

function blocksToSections(content: BlogBlock[]): { heading: string; body: string[] }[] {
  const sections: { heading: string; body: string[] }[] = []
  let current = { heading: "Article", body: [] as string[] }

  for (const block of content) {
    if (block.type === "heading") {
      if (current.body.length) sections.push(current)
      current = { heading: block.text, body: [] }
    } else if (block.type === "paragraph") {
      current.body.push(block.text)
    } else if (block.type === "quote") {
      current.body.push(block.text)
    } else if (block.type === "callout") {
      current.body.push([block.title, block.body].filter(Boolean).join(" — "))
    } else if (block.type === "list") {
      current.body.push(...block.items)
    }
  }

  if (current.body.length) sections.push(current)
  return sections.length
    ? sections
    : [{ heading: "Article", body: ["Read this article on Ascension Health."] }]
}

/** Existing compiled posts win on slug collision. */
export function getLocalBlogPosts(): BlogPostData[] {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
    title: post.title,
    metaDescription: post.excerpt,
    h1: post.title,
    publishDate: post.publishedAt.slice(0, 10),
    intro: post.lede || post.excerpt,
    coverImage: coverSrc(post.cover.src),
    coverAlt: post.cover.alt,
    sections: blocksToSections(post.content),
    cta: DEFAULT_CTA,
  }))
}
