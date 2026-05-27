"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { PSEO_TARGET_CITIES } from "@/lib/pSEO-routing";

/**
 * Renders a grid of links to every target Nevada city for one topic.
 *
 * Used on:
 *   - Top-level service pages  (e.g. /physical-therapy/)        topicKind="service"
 *   - Top-level condition pages (e.g. /conditions-treated/back-pain/)   topicKind="condition"
 *   - Homepage  (omit topicSlug to link to city hubs instead)
 *
 * Every link is a Next.js `<Link>` so Googlebot can crawl the silo down
 * to the per-city pages without executing JavaScript.
 */

export type CityLinkGridProps = {
  /** Heading shown above the grid. */
  heading: string;
  /** Short intro sentence. */
  intro?: string;
  /** Topic to link to. Omit to link to the city hub pages instead. */
  topic?: {
    slug: string;
    /** Used to build anchor text. */
    name: string;
    /** "service" or "condition" affects anchor phrasing. */
    kind: "service" | "condition";
  };
};

export function CityLinkGrid({ heading, intro, topic }: CityLinkGridProps) {
  const items = PSEO_TARGET_CITIES.map((c) => {
    let href = `/${c.slug}-nv/`;
    let label = `${c.name}, NV`;
    if (topic) {
      href = `/${topic.slug}/${c.slug}-nv/`;
      label =
        topic.kind === "condition"
          ? `${topic.name} treatment in ${c.name}, NV`
          : `${topic.name} in ${c.name}, NV`;
    }
    return { href, label, city: c };
  });

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Local Care Across Nevada
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-brand-950">
            {heading}
          </h2>
          {intro && (
            <p className="mt-3 max-w-3xl text-slate-700 leading-relaxed">{intro}</p>
          )}
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((it) => (
              <li key={it.href}>
                <Link
                  href={it.href}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200/70 hover:bg-brand-50 hover:ring-brand-200 transition-colors"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-brand-700 ring-1 ring-brand-100">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-slate-800 group-hover:text-brand-900 leading-snug">
                    {it.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
