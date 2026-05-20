import Link from "next/link";
import { ArrowRight, MapPin, Stethoscope, Activity } from "lucide-react";
import { Reveal } from "@/components/Motion";
import {
  PSEO_CONDITIONS,
  PSEO_SERVICES,
  type PSEOCity,
  type PSEOCondition,
  type PSEOService,
} from "@/lib/pSEO-data";
import {
  relatedConditionsForService,
  relatedServicesForCondition,
} from "@/lib/pSEO-content";

/**
 * Three contextual internal-link blocks rendered on every service+city and
 * condition+city pSEO page. Forms the lateral edges of the silo:
 *
 *   Block A — other services available in the same city
 *   Block B — the same service in 5 nearest cities
 *   Block C — conditions treated by this service in the same city
 *
 * All links are plain `<Link>` / `<a>` tags so Googlebot can crawl them
 * without executing JavaScript. Each block is capped to keep the total
 * contextual link count under ~20 per page.
 */

const MAX_PER_BLOCK = 6;
const NEARBY_CITY_COUNT = 5;

export type InternalLinksTopic =
  | { kind: "service"; service: PSEOService }
  | { kind: "condition"; condition: PSEOCondition };

export type InternalLinksProps = {
  topic: InternalLinksTopic;
  city: PSEOCity;
  /** Cities ranked by proximity / cluster (provided by the page). */
  nearbyCities: PSEOCity[];
};

export function InternalLinks({ topic, city, nearbyCities }: InternalLinksProps) {
  const isService = topic.kind === "service";
  const topicName = isService ? topic.service.name : topic.condition.name;
  const topicSlug = isService ? topic.service.slug : topic.condition.slug;

  // ── Block A — other topics in the same city ───────────────────────────
  // For service pages: other services. For condition pages: other conditions.
  const blockAItems = (
    isService
      ? PSEO_SERVICES.filter((s) => s.slug !== topic.service.slug)
      : PSEO_CONDITIONS.filter((c) => c.slug !== topic.condition.slug)
  )
    .slice(0, MAX_PER_BLOCK)
    .map((t) => ({
      label: isService
        ? `${t.name} in ${city.name}, NV`
        : `${t.name} treatment in ${city.name}, NV`,
      href: `/${t.slug}/${city.slug}-nv/`,
    }));

  const blockAHeading = isService
    ? `Related Services in ${city.name}`
    : `Other Conditions We Treat in ${city.name}`;

  // ── Block B — same topic in nearby cities ─────────────────────────────
  const blockBItems = nearbyCities.slice(0, NEARBY_CITY_COUNT).map((c) => ({
    label: isService
      ? `${topicName} in ${c.name}, NV`
      : `${topicName} treatment in ${c.name}, NV`,
    href: `/${topicSlug}/${c.slug}-nv/`,
  }));

  const blockBHeading = isService
    ? `${topicName} in Nearby Cities`
    : `${topicName} Treatment in Nearby Cities`;

  // ── Block C — cross-silo connector ────────────────────────────────────
  // For service pages: conditions treated by this service in the same city.
  // For condition pages: services we use to treat this condition in the same city.
  const blockCRaw = isService
    ? relatedConditionsForService(topic.service.slug).map((c) => ({
        label: `${c.name} treatment in ${city.name}, NV`,
        href: `/${c.slug}/${city.slug}-nv/`,
      }))
    : relatedServicesForCondition(topic.condition.slug).map((s) => ({
        label: `${s.name} in ${city.name}, NV`,
        href: `/${s.slug}/${city.slug}-nv/`,
      }));

  const blockCItems = blockCRaw.slice(0, MAX_PER_BLOCK);

  const blockCHeading = isService
    ? `Conditions We Treat with ${topicName} in ${city.name}`
    : `Treatments for ${topicName} in ${city.name}`;

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Explore More
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-brand-950">
            Continue your care across {city.name} & {city.region}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Reveal delay={0.05}>
            <LinkCard
              icon={<Stethoscope className="h-5 w-5" />}
              heading={blockAHeading}
              items={blockAItems}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <LinkCard
              icon={<MapPin className="h-5 w-5" />}
              heading={blockBHeading}
              items={blockBItems}
            />
          </Reveal>

          <Reveal delay={0.15}>
            <LinkCard
              icon={<Activity className="h-5 w-5" />}
              heading={blockCHeading}
              items={blockCItems}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LinkCard({
  icon,
  heading,
  items,
}: {
  icon: React.ReactNode;
  heading: string;
  items: { label: string; href: string }[];
}) {
  if (items.length === 0) return null;
  return (
    <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100">
          {icon}
        </span>
        <h3 className="mt-1 font-display text-lg font-semibold text-brand-950 leading-snug">
          {heading}
        </h3>
      </div>
      <ul className="mt-5 space-y-2.5">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="group flex items-start gap-2 rounded-md px-2 py-1.5 -mx-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-900 transition-colors"
            >
              <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-600 transition-transform group-hover:translate-x-0.5" />
              <span className="leading-snug">{it.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
