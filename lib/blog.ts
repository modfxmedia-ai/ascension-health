import type { StaticImageData } from "next/image";
import coverSpinalDecompression from "@/images/blogs-images/spinal-decompression-therapy-in-fernley-for-back-pain.jpg";
import coverShoulderPain from "@/images/blogs-images/spine-related-causes-of-shoulder-pain-in-fernley.jpg";

/* ------------------------------------------------------------------ */
/* Content model                                                       */
/* ------------------------------------------------------------------ */
/**
 * Blog posts are built from a small set of typed content blocks so that
 * copy can be added quickly without touching the templates. Every block
 * renders itself through the `<PostBody />` component on the single-post
 * page.
 */
export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level?: 2 | 3; text: string; id?: string }
  | { type: "list"; style?: "bullet" | "number"; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | {
      type: "callout";
      title?: string;
      body: string;
      variant?: "info" | "tip" | "warning";
    }
  | {
      type: "image";
      src: string | StaticImageData;
      alt: string;
      caption?: string;
    }
  | { type: "divider" }
  | {
      type: "cta";
      heading?: string;
      body?: string;
      buttonLabel?: string;
      buttonHref?: string;
    };

export type BlogAuthor = {
  name: string;
  role?: string;
  bio?: string;
  avatar?: string | StaticImageData;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags?: string[];
  publishedAt: string; // ISO date, e.g. "2025-01-15"
  updatedAt?: string;
  readingMinutes: number;
  cover: {
    src: string | StaticImageData;
    alt: string;
  };
  author: BlogAuthor;
  /** Rendered above the article body as the lead paragraph. */
  lede?: string;
  content: BlogBlock[];
  /** Related post slugs. If omitted, related posts are picked automatically. */
  related?: string[];
  featured?: boolean;
};

/* ------------------------------------------------------------------ */
/* Authors                                                             */
/* ------------------------------------------------------------------ */
export const DEFAULT_AUTHOR: BlogAuthor = {
  name: "Ascension Health",
  role: "Chiropractic & Wellness Team",
  bio: "Fernley’s trusted team for chiropractic care, physical therapy, joint injections, hormone therapy and medical weight loss — helping Northern Nevada live pain-free.",
};

/* ------------------------------------------------------------------ */
/* Posts                                                               */
/* ------------------------------------------------------------------ */
/**
 * Add new posts here. The most recent (top of the array) becomes the
 * featured post on the archive page automatically unless another post is
 * flagged with `featured: true`.
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "spinal-decompression-fernley-back-pain-relief",
    title:
      "Understanding Spinal Decompression in Fernley for Lasting Back Pain Relief",
    excerpt:
      "Learn how spinal decompression in Fernley can ease chronic back pain, relieve pressure, and support long-term healing with personalized chiropractic care.",
    category: "Spinal Decompression",
    tags: [
      "spinal decompression",
      "back pain",
      "sciatica",
      "chiropractic care",
      "Fernley NV",
    ],
    publishedAt: "2026-07-10",
    readingMinutes: 7,
    cover: {
      src: coverSpinalDecompression,
      alt: "Patient receiving spinal decompression therapy in Fernley, NV",
    },
    author: DEFAULT_AUTHOR,
    lede: "Find lasting relief from back pain this summer with a gentle, non-surgical approach that helps your body heal from the inside out.",
    related: ["shoulder-pain-fernley-spine-connection"],
    content: [
      {
        type: "paragraph",
        text: "Back pain can turn even simple plans into a struggle. Gardening in the yard, camping in the desert, heading to the lake, or just playing with kids or grandkids can feel out of reach when every step hurts. When pain keeps coming back, many people feel stuck between living with it and turning to stronger and stronger medications.",
      },
      {
        type: "paragraph",
        text: "Spinal decompression offers another path. It is a gentle, nonsurgical treatment that aims to take pressure off the spine so the body has a better chance to heal. For people who have tried pills, rest, or basic stretching with little success, it can be a helpful part of a bigger care plan.",
      },
      {
        type: "paragraph",
        text: "At our chiropractic and integrative wellness clinic in Fernley, we focus on finding and treating the root cause of pain, not just covering it up. In this article, we will walk through what spinal decompression is, how it works, who it may help, and how care is tailored for people in our Northern Nevada community.",
      },

      { type: "heading", text: "What Spinal Decompression Really Is" },
      {
        type: "paragraph",
        text: "Spinal decompression is a type of gentle traction that uses a special table to slowly and safely stretch the spine. You are strapped in with a padded belt, then the table moves in a controlled way. This creates a small amount of negative pressure in the discs, which are the soft cushions between the bones of your spine.",
      },
      {
        type: "paragraph",
        text: "That negative pressure can help in a few ways:",
      },
      {
        type: "list",
        items: [
          "It can ease pressure on nearby nerves.",
          "It can help draw fluids and nutrients back into the disc.",
          "It can give irritated tissues a calmer place to heal over time.",
        ],
      },
      {
        type: "paragraph",
        text: "Nonsurgical spinal decompression is not the same as basic traction. With regular traction, the pull is often steady and not very specific. With decompression, a computer controls the tension, holds, and releases. The pull can be very targeted and can be changed during the visit based on how your body responds.",
      },
      {
        type: "paragraph",
        text: "It is also very different from back surgery. There are no incisions, no anesthesia, and no cutting or removing tissue. Instead, the goal is to gently create space inside the spine so your body can use its own healing processes more effectively. Many people find it comfortable, and some even relax enough to rest during their sessions.",
      },
      {
        type: "paragraph",
        text: "Common conditions that may be helped by spinal decompression include:",
      },
      {
        type: "list",
        items: [
          "Herniated or bulging discs",
          "Sciatica, or pain that travels down the leg",
          "Degenerative disc disease",
          "Chronic low back pain",
          "Some types of neck pain",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "One tool in a full plan",
        body: "At our clinic, decompression is never presented as a magic fix. It is one tool in a full care plan that can also include chiropractic care, guided rehab exercises, and other wellness services to support lasting change.",
      },

      {
        type: "heading",
        text: "How Spinal Decompression in Fernley Supports Healing",
      },
      {
        type: "paragraph",
        text: "Spinal decompression in Fernley is shaped around how people here live and work. Many of our neighbors spend long days on ranches, in construction, or in warehouses. Others commute into Reno, Fallon, or nearby areas, sitting in a car for long stretches. On top of that, many enjoy hiking, fishing, or riding on weekends. All of this can stress the spine in different ways.",
      },
      {
        type: "paragraph",
        text: "During decompression, here is what we are aiming for inside your back:",
      },
      {
        type: "list",
        items: [
          "Reduced pressure inside the discs, which can take strain off nerves.",
          "Better flow of fluids and nutrients into the disc spaces.",
          "A calmer, more stable environment so irritated tissues have a chance to repair.",
        ],
      },
      {
        type: "paragraph",
        text: "A typical treatment plan often includes a series of visits spread over several weeks. Sessions are usually short, and you stay fully clothed. You lie on the table, get strapped in, and the machine applies a gentle, rhythmic pull that many describe as a stretching or releasing feeling. Relief often builds over time, rather than all at once, especially when combined with:",
      },
      {
        type: "list",
        items: [
          "Chiropractic adjustments when appropriate",
          "Targeted stretches and strengthening",
          "Hands-on therapies or other supportive care",
        ],
      },
      {
        type: "paragraph",
        text: "Comfort and safety are key. The table is computer-controlled, but we adjust the settings based on your feedback. If anything feels too intense, the pull can be changed or stopped right away. Before anyone starts decompression, we screen carefully to make sure it is a good match for their spine and overall health.",
      },

      {
        type: "heading",
        text: "Is Spinal Decompression Right for Your Back Pain?",
      },
      {
        type: "paragraph",
        text: "Spinal decompression may be a good option if you:",
      },
      {
        type: "list",
        items: [
          "Have ongoing low back or neck pain that has not responded well to rest or pills",
          "Have been told you have disc issues, such as bulging or herniated discs",
          "Feel nerve pain that travels into your leg or arm",
          "Want to avoid or delay surgery when possible",
          "Want to reduce your reliance on pain medications",
        ],
      },
      {
        type: "paragraph",
        text: "It is not right for everyone. Some people are not good candidates, including many with:",
      },
      {
        type: "list",
        items: [
          "Certain spinal fractures or severe spinal instability",
          "Advanced osteoporosis",
          "Some types of severe nerve damage",
          "Specific post-surgical spine conditions",
        ],
      },
      {
        type: "paragraph",
        text: "That is why a proper exam is so important. At our clinic, we take time to:",
      },
      {
        type: "list",
        items: [
          "Review your medical history and past tests",
          "Perform orthopedic and neurological checks",
          "Look at imaging, such as X-rays or other scans, when needed",
          "Explain what we find in clear language before suggesting any treatment",
        ],
      },
      {
        type: "paragraph",
        text: "If decompression seems like a good match, we build a plan that fits your body and your goals. Settings on the table, visit frequency, and added therapies are based on:",
      },
      {
        type: "list",
        items: [
          "Where your pain is and how it behaves",
          "Your age, general health, and daily stress on your spine",
          "What you want to get back to doing, such as work tasks, hobbies, or family activities",
        ],
      },

      {
        type: "heading",
        text: "Integrating Decompression with Whole-Body Wellness",
      },
      {
        type: "paragraph",
        text: "Spinal decompression in Fernley works best when it is part of a larger plan for your whole body. At Ascension Health, we blend chiropractic and integrative wellness approaches to support both relief and long-term function.",
      },
      {
        type: "paragraph",
        text: "Along with decompression, a care plan may include:",
      },
      {
        type: "list",
        items: [
          "Chiropractic adjustments to improve joint motion where it is restricted",
          "Physical therapy style rehab to build strength and flexibility",
          "Regenerative wellness services offered at our clinic, when appropriate",
        ],
      },
      {
        type: "paragraph",
        text: "We also coach patients on simple habits that can protect their spine, such as:",
      },
      {
        type: "list",
        items: [
          "Gentle, regular walking to keep joints moving",
          "Posture tips for desk work and long drives",
          "Movement breaks during commutes or long shifts",
          "Hydration and basic lifestyle steps that support joint and disc health",
        ],
      },
      {
        type: "paragraph",
        text: "Our focus is always on the root causes of your pain. That might be muscle imbalances, stiff joints, poor lifting technique, or years of sitting without support. When decompression is combined with better movement patterns and stronger support muscles, many people find they can return to:",
      },
      {
        type: "list",
        items: [
          "Hiking local trails without constant aching",
          "Working full days with fewer flare-ups",
          "Playing with kids or grandkids without paying for it the next day",
        ],
      },
      {
        type: "paragraph",
        text: "By looking at the whole person, not just one part of the spine, we aim to help you move with more ease and confidence, through summer and every other season.",
      },

      {
        type: "heading",
        text: "Take the First Step Toward Lasting Spine Relief",
      },
      {
        type: "paragraph",
        text: "If back or neck pain is limiting your daily life, we are here to help you find a safer, non-surgical path forward. Learn how spinal decompression in Fernley can gently relieve pressure on your spine and support long-term healing. Our team at Ascension Health will walk you through every step so you feel informed, comfortable, and confident in your care.",
      },
      {
        type: "cta",
        heading: "Ready to explore spinal decompression?",
        body: "Get answers to your questions or schedule an appointment with our Fernley team today.",
        buttonLabel: "Contact Ascension Health",
        buttonHref: "/contact/",
      },
    ],
  },

  {
    slug: "shoulder-pain-fernley-spine-connection",
    title: "When Shoulder Pain in Fernley, NV Signals a Bigger Spine Problem",
    excerpt:
      "Learn when shoulder pain in Fernley, NV may be linked to spine issues, and explore chiropractic and wellness options to restore comfort and mobility.",
    category: "Chiropractic Care",
    tags: [
      "shoulder pain",
      "neck pain",
      "cervical spine",
      "chiropractic care",
      "Fernley NV",
    ],
    publishedAt: "2026-07-17",
    readingMinutes: 7,
    cover: {
      src: coverShoulderPain,
      alt: "Chiropractor examining a patient's shoulder and cervical spine in Fernley, NV",
    },
    author: DEFAULT_AUTHOR,
    lede: "Stubborn shoulder pain often starts higher up — in the neck and upper back. Knowing the signs helps you find the real source faster.",
    related: ["spinal-decompression-fernley-back-pain-relief"],
    content: [
      {
        type: "paragraph",
        text: "Shoulder pain can sneak up fast. One weekend, you are pulling weeds, tossing a softball at the park, or working on a home project, and by the evening your shoulder feels tight, sharp, or achy. It is easy to blame the joint itself and hope a little rest or ice will fix it.",
      },
      {
        type: "paragraph",
        text: "But many people are surprised to learn that stubborn shoulder pain in Fernley, NV, often starts higher up, in the neck and upper back. When that pain does not calm down with simple home care, it may be a signal that your spine or nerves need attention. In this article, we will talk about how spine problems can show up as shoulder pain, what warning signs to watch for, and how a careful exam can uncover what is really going on.",
      },

      { type: "heading", text: "How Your Spine Can Cause Shoulder Pain" },
      {
        type: "paragraph",
        text: "Your neck and upper back form the top part of your spine. The cervical spine is the neck area, and the upper thoracic spine is the upper back between your shoulder blades. Nerves exit from between these spinal bones and travel into your shoulders, arms, and hands.",
      },
      {
        type: "paragraph",
        text: "When there is irritation in this area, the pain can show up in surprising places. Common spine issues that can cause shoulder pain include:",
      },
      {
        type: "list",
        items: [
          "Cervical disc irritation or herniation that sends pain up into the neck and out into the shoulder",
          "Arthritis or other wear and tear in the neck that can pinch the nerves feeding the shoulder",
          "Poor posture from desk work, long drives between Fernley and nearby towns, or looking down at phones that leads to muscle tension and knots around the shoulder blade",
        ],
      },
      {
        type: "paragraph",
        text: "These problems often cause what we call referred pain. That means the real source is the neck or upper back, but the brain feels it in the shoulder. This is different from a true shoulder joint problem such as a rotator cuff injury, a labrum tear, or inflammation in the shoulder itself.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Why the distinction matters",
        body: "Treating a spine issue like a simple shoulder strain can leave you stuck in a loop of rest, ice, and repeat discomfort. On the other hand, if the shoulder joint is actually damaged, you want to know that early so the right care can start.",
      },

      {
        type: "heading",
        text: "Red Flags Your Shoulder Pain Is Really a Spine Issue",
      },
      {
        type: "paragraph",
        text: "So how do you tell the difference at home? You cannot make a full diagnosis on your own, but there are clues that your shoulder pain might be coming from your neck or upper back.",
      },
      {
        type: "heading",
        level: 3,
        text: "Symptom-based warning signs",
      },
      {
        type: "list",
        items: [
          "Pain that travels from the shoulder into the arm, forearm, or hand",
          "Numbness, tingling, burning, or a pins-and-needles feeling in the arm or fingers",
          "Weak grip or trouble lifting everyday items",
          "Pain that gets worse when you turn, tilt, or extend your neck, not just when you move your shoulder",
        ],
      },
      { type: "heading", level: 3, text: "Functional signs" },
      {
        type: "list",
        items: [
          "Difficulty falling asleep or staying asleep because your neck and shoulder feel tight or sore",
          "Feeling like you constantly need to stretch, twist, or crack your neck and upper back to get relief",
          "Noticing that turning your head to check blind spots while driving around Fernley, or on the way to Reno or Fallon, is getting harder or more painful",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "When to seek care sooner",
        body: "Sudden, severe shoulder or arm pain with weakness or loss of coordination — or pain that starts after a car accident, sports impact, or a fall — deserves prompt evaluation. Persistent shoulder pain that lasts more than a couple of weeks despite rest and ice also means your spine and nerves deserve a closer look.",
      },

      {
        type: "heading",
        text: "Summer Activities That Stress Your Spine and Shoulders",
      },
      {
        type: "paragraph",
        text: "Around Fernley, summer usually brings more time outside. That is good for your mood and fitness, but it can be tough on your spine and shoulders if your body is not ready.",
      },
      {
        type: "paragraph",
        text: "Common activities that can fire up hidden neck and upper back problems include:",
      },
      {
        type: "list",
        items: [
          "Softball, golf, swimming, and other sports with lots of overhead motion",
          "Camping chores like lifting coolers, hauling gear, and setting up tents",
          "Gardening, yard work, painting, and home repairs that keep your arms up or out in front for long stretches",
          "Ranch or farm work that involves heavy lifting, pulling, or twisting",
        ],
      },
      {
        type: "paragraph",
        text: "Several things make these activities challenging:",
      },
      {
        type: "list",
        items: [
          "Overhead motions can irritate misaligned joints in the neck and upper back",
          "Jumping from a mostly sedentary routine into hard work can strain tight, weak muscles",
          "Hot, dry weather can lead to fatigue and dehydration, which may make muscles cramp and tire faster",
        ],
      },
      {
        type: "paragraph",
        text: "You can lower your risk by building some simple habits into your day:",
      },
      {
        type: "list",
        items: [
          "Warm up with gentle neck turns, shoulder rolls, and arm circles before sports or heavy chores",
          "Take short breaks during long drives or desk work to reset your posture",
          "Keep your phone and screens up closer to eye level to avoid constant head-down positions",
        ],
      },
      {
        type: "paragraph",
        text: "If you notice that your shoulder pain in Fernley, NV keeps coming back after certain activities, or it slowly gets worse each summer, that is a sign your spine might need to be checked rather than just pushing through.",
      },

      {
        type: "heading",
        text: "How Ascension Health Evaluates Shoulder and Spine Pain",
      },
      {
        type: "paragraph",
        text: "At our chiropractic and wellness clinic in Fernley, we look beyond the single spot that hurts. Many shoulder issues are actually a team problem involving the neck, upper back, muscles, and nerves, so our first step is a full, whole-person assessment.",
      },
      { type: "paragraph", text: "That usually includes:" },
      {
        type: "list",
        items: [
          "A detailed history of your work, hobbies, sports, and daily posture",
          "Questions about when your pain started, what makes it better or worse, and what you have tried on your own",
          "A hands-on exam that checks your neck, upper back, shoulder joints, and how your muscles are working together",
        ],
      },
      {
        type: "paragraph",
        text: "We use orthopedic and neurological tests to help separate true shoulder joint problems from issues that are more spine- or nerve-based. In some cases, we may recommend imaging or other studies so we can see the joints and discs more clearly and rule out other concerns.",
      },
      {
        type: "paragraph",
        text: "From there, we build a conservative care plan that fits your life. This may include:",
      },
      {
        type: "list",
        items: [
          "Chiropractic adjustments to improve how the spine moves and to help calm nerve irritation",
          "Targeted soft tissue work for tight or overworked muscles around the neck, shoulder blade, and chest",
          "Corrective exercises to support better posture and shoulder stability",
          "Simple changes to work setup, driving position, or how you approach sports and chores in Fernley",
        ],
      },
      {
        type: "paragraph",
        text: "The goal is not just pain relief, but better movement and less stress on your body so you can stay active with more confidence.",
      },

      {
        type: "heading",
        text: "Your Next Step to Relief From Shoulder Pain in Fernley, NV",
      },
      {
        type: "paragraph",
        text: "Ongoing shoulder pain is not something to shrug off or ignore. Many cases are linked to the spine and nervous system, even when the ache feels like it is only in the shoulder. The sooner the real cause is found, the easier it usually is to calm irritation, restore motion, and keep the problem from turning into a long-term issue that limits your work, sports, or family time.",
      },
      {
        type: "paragraph",
        text: "At Ascension Health, our team in Fernley is focused on finding out whether your shoulder pain is truly a shoulder joint problem, a spine issue, or a mix of both. With a careful exam and a personalized plan, we work to guide you back toward comfortable, confident movement so you can get back to the activities you enjoy.",
      },

      {
        type: "heading",
        text: "Start Relieving Your Shoulder Pain With Personalized Care Today",
      },
      {
        type: "paragraph",
        text: "If shoulder pain in Fernley, NV is limiting your daily activities, we are here to help you find lasting relief. At Ascension Health, we take the time to understand your symptoms, your goals, and your lifestyle so we can create a care plan that fits you.",
      },
      {
        type: "cta",
        heading: "Move with comfort and confidence again",
        body: "Schedule an appointment with our Fernley team today and take the next step toward lasting relief.",
        buttonLabel: "Contact Ascension Health",
        buttonHref: "/contact/",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
export const BLOG_BASE = "/blog";

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.featured) ?? posts[0];
}

export function getAllCategories(): string[] {
  const set = new Set<string>();
  for (const p of BLOG_POSTS) set.add(p.category);
  return [...set].sort();
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  if (post.related && post.related.length) {
    return post.related
      .map((slug) => getPostBySlug(slug))
      .filter((p): p is BlogPost => Boolean(p))
      .slice(0, limit);
  }
  return getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit);
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Estimate reading time from a block list. Useful if you want to omit
 * `readingMinutes` and derive it later — currently posts set it explicitly.
 */
export function estimateReadingMinutes(blocks: BlogBlock[]): number {
  const words = blocks
    .map((b) => {
      switch (b.type) {
        case "paragraph":
        case "heading":
          return b.text;
        case "quote":
          return b.text;
        case "callout":
          return `${b.title ?? ""} ${b.body}`;
        case "list":
          return b.items.join(" ");
        default:
          return "";
      }
    })
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
