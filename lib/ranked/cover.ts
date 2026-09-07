import { BlobNotFoundError, head, put } from "@vercel/blob"
import { COMMITTED_COVER_SLUGS, coverPrompt } from "./config"

/** Topic-keyed Unsplash IDs so fallback covers match the article title. */
const TOPIC_UNSPLASH: Record<string, readonly string[]> = {
  sciatica: [
    "photo-1519824145371-296894a0daa9",
    "photo-1571019613454-1cb2f99b2d8b",
    "photo-1544367567-0f2fcb009e0b",
    "photo-1434682881345-7d6e06f0d5c4",
  ],
  back: [
    "photo-1559757175-0eb30cd8c063",
    "photo-1600880292203-757bb62b4baf",
    "photo-1576091160399-112ba8d25d1d",
    "photo-1579684385127-1ef15d508118",
  ],
  spine: [
    "photo-1559757148-5c350d0d3c56",
    "photo-1582750433449-648ed127bb54",
    "photo-1576091160550-2173dba999ef",
    "photo-1631815588090-d4bfec5b1ccb",
  ],
  neck: [
    "photo-1515378791036-0648a3ef77b2",
    "photo-1544168190-79c17527004f",
    "photo-1518611013918-baad583adc05",
  ],
  shoulder: [
    "photo-1517836357463-d25dfeac3438",
    "photo-1571019614242-c5c5dee9f50b",
    "photo-1599058917212-d750089bc07e",
  ],
  knee: [
    "photo-1571019614242-c5c5dee9f50b",
    "photo-1461896836934-ffe607ba6851",
    "photo-1552674605-db6ffd4facb5",
  ],
  joint: [
    "photo-1581595220892-b0739db3ba8c",
    "photo-1576091160399-112ba8d25d1d",
    "photo-1579684385127-1ef15d508118",
  ],
  headache: [
    "photo-1516549655169-df83a0774514",
    "photo-1544367567-0f2fcb009e0b",
    "photo-1506126613408-eca07ce68773",
  ],
  migraine: [
    "photo-1490645935967-10de6ba17061",
    "photo-1516549655169-df83a0774514",
    "photo-1506126613408-eca07ce68773",
  ],
  chiropractic: [
    "photo-1559757148-5c350d0d3c56",
    "photo-1576091160399-112ba8d25d1d",
    "photo-1666214280557-f1b5022eb634",
    "photo-1579684385127-1ef15d508118",
  ],
  decompression: [
    "photo-1576091160550-2173dba999ef",
    "photo-1559757175-0eb30cd8c063",
    "photo-1582750433449-648ed127bb54",
  ],
  hormone: [
    "photo-1576091160550-2173dba999ef",
    "photo-1505576399279-565b52d4ac71",
    "photo-1571019613454-1cb2f99b2d8b",
  ],
  weight: [
    "photo-1490645935967-10de6ba17061",
    "photo-1498837167922-ddd27525d352",
    "photo-1512621776951-a57141f2eefd",
  ],
  nutrition: [
    "photo-1490645935967-10de6ba17061",
    "photo-1498837167922-ddd27525d352",
    "photo-1512621776951-a57141f2eefd",
  ],
  injection: [
    "photo-1581595220892-b0739db3ba8c",
    "photo-1579684385127-1ef15d508118",
    "photo-1631815588090-d4bfec5b1ccb",
  ],
  neuropathy: [
    "photo-1559757148-5c350d0d3c56",
    "photo-1571019613454-1cb2f99b2d8b",
    "photo-1544367567-0f2fcb009e0b",
  ],
  wellness: [
    "photo-1544367567-0f2fcb009e0b",
    "photo-1506126613408-eca07ce68773",
    "photo-1545205597-3d9d02c29597",
    "photo-1518611013918-baad583adc05",
  ],
  pain: [
    "photo-1571019613454-1cb2f99b2d8b",
    "photo-1519824145371-296894a0daa9",
    "photo-1576091160399-112ba8d25d1d",
  ],
  sleep: [
    "photo-1541781774459-bb2af2f05b55",
    "photo-1506126613408-eca07ce68773",
    "photo-1515894203073-3e0b1d7c2288",
  ],
}

const FALLBACK_UNSPLASH = [
  "photo-1576091160399-112ba8d25d1d",
  "photo-1559757148-5c350d0d3c56",
  "photo-1579684385127-1ef15d508118",
  "photo-1559757175-0eb30cd8c063",
  "photo-1584982751601-97dcc096659c",
  "photo-1666214280557-f1b5022eb634",
  "photo-1544367567-0f2fcb009e0b",
  "photo-1506126613408-eca07ce68773",
  "photo-1571019613454-1cb2f99b2d8b",
  "photo-1518611013918-baad583adc05",
  "photo-1490645935967-10de6ba17061",
  "photo-1582750433449-648ed127bb54",
  "photo-1631815588090-d4bfec5b1ccb",
  "photo-1551836022-d5d88e9218df",
  "photo-1600880292203-757bb62b4baf",
] as const

const TOPIC_ALIASES: Array<[RegExp, string]> = [
  [/sciatica|piriformis|leg pain|nerve pain/i, "sciatica"],
  [/spinal decompression|decompression/i, "decompression"],
  [/chiropractic|adjustment|chiropractor/i, "chiropractic"],
  [/headache|migraine/i, "headache"],
  [/shoulder/i, "shoulder"],
  [/neck|cervical/i, "neck"],
  [/knee/i, "knee"],
  [/hormone|bhrt|estrogen|testosterone|thyroid/i, "hormone"],
  [/weight|obesity|glp|diet/i, "weight"],
  [/nutrition|iv therapy|vitamin|food/i, "nutrition"],
  [/neuropath/i, "neuropathy"],
  [/inject/i, "injection"],
  [/sleep|insomnia/i, "sleep"],
  [/spine|disc|herniat/i, "spine"],
  [/back pain|low back|lumbar/i, "back"],
  [/joint/i, "joint"],
  [/pain|chronic/i, "pain"],
]

function coverPngPath(contentId: string): string {
  return `blog-covers/${contentId}.png`
}

function coverJpgPath(contentId: string): string {
  return `blog-covers/${contentId}.jpg`
}

function committedCoverUrl(slug?: string): string | null {
  if (!slug) return null
  return COMMITTED_COVER_SLUGS.includes(slug) ? `/images/blog/covers/${slug}.png` : null
}

function hashSlug(slug: string): number {
  let hash = 0
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0
  return hash
}

function unsplashUrl(photoId: string): string {
  return `https://images.unsplash.com/${photoId}?w=1200&q=80&fit=crop`
}

function picsumUrl(slug: string): string {
  return `https://picsum.photos/seed/${encodeURIComponent(`ascension-${slug}`)}/1200/630`
}

export function topicsFromTitle(title: string): string[] {
  const hits: string[] = []
  for (const [pattern, topic] of TOPIC_ALIASES) {
    if (pattern.test(title) && !hits.includes(topic)) hits.push(topic)
  }
  if (!hits.length) hits.push("wellness", "chiropractic")
  return hits
}

function titlePhotoPool(title: string): string[] {
  const topics = topicsFromTitle(title)
  const seen = new Set<string>()
  const pool: string[] = []
  for (const topic of topics) {
    for (const id of TOPIC_UNSPLASH[topic] ?? []) {
      if (!seen.has(id)) {
        seen.add(id)
        pool.push(id)
      }
    }
  }
  for (const id of FALLBACK_UNSPLASH) {
    if (!seen.has(id)) {
      seen.add(id)
      pool.push(id)
    }
  }
  return pool
}

export function uniqueWebCoverUrl(
  slug: string,
  reserved: Set<string> = new Set(),
  title = "",
): string {
  const text = title || slug.replace(/-/g, " ")
  const topics = topicsFromTitle(text)
  const primary = [...(TOPIC_UNSPLASH[topics[0]] ?? [])]
  const start = primary.length ? hashSlug(slug) % primary.length : 0
  for (let i = 0; i < primary.length; i++) {
    const url = unsplashUrl(primary[(start + i) % primary.length])
    if (!reserved.has(url)) return url
  }

  const pool = titlePhotoPool(text)
  const poolStart = pool.length ? hashSlug(slug) % pool.length : 0
  for (let i = 0; i < pool.length; i++) {
    const url = unsplashUrl(pool[(poolStart + i) % pool.length])
    if (!reserved.has(url)) return url
  }
  let seed = slug
  let n = 0
  let url = picsumUrl(seed)
  while (reserved.has(url) && n < 50) {
    n += 1
    seed = `${slug}-${n}`
    url = picsumUrl(seed)
  }
  return url
}

function coverSearchQuery(title: string): string {
  const cleaned = title
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .replace(
      /\b(the|and|for|with|from|your|you|how|what|when|why|this|that|in|of|to|a|an|or|is|are|it|on|at|vs)\b/gi,
      " ",
    )
    .replace(/\s+/g, " ")
    .trim()
  return `${cleaned} chiropractic wellness`.slice(0, 120)
}

async function searchTitleRelatedImage(
  title: string,
  reserved: Set<string>,
): Promise<string | null> {
  const query = coverSearchQuery(title)
  if (!query) return null
  try {
    const url = `https://api.openverse.org/v1/images/?q=${encodeURIComponent(query)}&license=cc0,by,by-sa&page_size=20&mature=false`
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "AscensionHealthBlog/1.0 (https://ascensionhealthnv.com)",
      },
    })
    if (!res.ok) return null
    const json = (await res.json()) as {
      results?: Array<{ url?: string }>
    }
    for (const row of json.results ?? []) {
      if (row.url && !reserved.has(row.url)) return row.url
    }
  } catch (err) {
    console.error("[ranked] title image search failed", err)
  }
  return null
}

function imageModels(): string[] {
  const preferred = process.env.OPENAI_IMAGE_MODEL?.trim()
  const models = [preferred, "gpt-image-2", "gpt-image-1"].filter(
    (m): m is string => Boolean(m),
  )
  return [...new Set(models)]
}

async function existingBlobUrl(contentId: string): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL) return null
  for (const pathname of [coverPngPath(contentId), coverJpgPath(contentId)]) {
    try {
      const meta = await head(pathname)
      if (meta.url) return meta.url
    } catch (err) {
      if (!(err instanceof BlobNotFoundError)) return null
    }
  }
  return null
}

async function persistBuffer(
  pathname: string,
  bytes: Buffer,
  contentType: string,
): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL) return null
  const blob = await put(pathname, bytes, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType,
  })
  return blob.url
}

async function generatePng(title: string): Promise<Buffer | null> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) return null
  const prompt = coverPrompt(title)
  let lastError = ""
  for (const model of imageModels()) {
    const res = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model, prompt, size: "1536x1024", quality: "medium", n: 1 }),
    })
    const text = await res.text()
    if (!res.ok) {
      lastError = `${model} ${res.status}: ${text.slice(0, 240)}`
      continue
    }
    const json = JSON.parse(text) as { data?: Array<{ url?: string; b64_json?: string }> }
    const row = json.data?.[0]
    if (row?.b64_json) return Buffer.from(row.b64_json, "base64")
    if (row?.url) {
      const img = await fetch(row.url)
      if (img.ok) return Buffer.from(await img.arrayBuffer())
    }
  }
  console.error(`[ranked] OpenAI cover generation exhausted: ${lastError}`)
  return null
}

export async function getRankedCoverImage(input: {
  contentId: string
  title: string
  generate: boolean
  slug?: string
  reservedUrls?: Set<string>
}): Promise<string> {
  const slug = input.slug ?? input.contentId
  const reserved = input.reservedUrls ?? new Set<string>()

  const committed = committedCoverUrl(input.slug)
  if (committed) {
    reserved.add(committed)
    return committed
  }

  const cached = await existingBlobUrl(input.contentId)
  const shouldRefreshAi = input.generate && Boolean(process.env.OPENAI_API_KEY)
  if (cached && !shouldRefreshAi) {
    reserved.add(cached)
    return cached
  }

  const webUrl = uniqueWebCoverUrl(slug, reserved, input.title)
  if (!input.generate) {
    reserved.add(webUrl)
    return webUrl
  }

  try {
    const png = await generatePng(input.title)
    if (png) {
      const url = await persistBuffer(coverPngPath(input.contentId), png, "image/png")
      if (url) {
        reserved.add(url)
        return url
      }
    }

    const searched = await searchTitleRelatedImage(input.title, reserved)
    const sourceUrl = searched || uniqueWebCoverUrl(slug, reserved, input.title)
    const img = await fetch(sourceUrl)
    if (img.ok) {
      const bytes = Buffer.from(await img.arrayBuffer())
      const persisted = await persistBuffer(coverJpgPath(input.contentId), bytes, "image/jpeg")
      const url = persisted || sourceUrl
      reserved.add(url)
      return url
    }
  } catch (err) {
    console.error(`[ranked] cover failed for ${input.contentId}`, err)
  }

  if (cached) {
    reserved.add(cached)
    return cached
  }

  reserved.add(webUrl)
  return webUrl
}

export function ensureUniqueCoverImages<
  T extends { slug: string; coverImage: string; title?: string },
>(posts: T[]): T[] {
  const used = new Set<string>()
  return posts.map((post) => {
    let cover = post.coverImage
    if (!cover || used.has(cover)) {
      cover = uniqueWebCoverUrl(post.slug, used, post.title ?? "")
    }
    used.add(cover)
    return cover === post.coverImage ? post : { ...post, coverImage: cover }
  })
}
