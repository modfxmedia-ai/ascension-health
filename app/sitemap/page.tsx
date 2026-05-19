import type { Metadata } from "next";
import Link from "next/link";
import {
  Home as HomeIcon,
  Info,
  UserPlus,
  CalendarCheck,
  Stethoscope,
  Activity,
  PhoneCall,
  ShieldCheck,
  Map as MapIcon,
} from "lucide-react";
import { NAVIGATION, SITE, type NavChild } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Sitemap | Ascension Health",
  description:
    "Browse every page on the Ascension Health website — services, conditions treated, patient resources and contact information for our Fernley, NV practice.",
  alternates: { canonical: "/sitemap/" },
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Home: HomeIcon,
  About: Info,
  "New Patients": UserPlus,
  Appointments: CalendarCheck,
  Services: Stethoscope,
  "Conditions Treated": Activity,
  Contact: PhoneCall,
};

const UTILITY_LINKS: NavChild[] = [
  { label: "Sitemap", href: "/sitemap/" },
  { label: "Accessibility", href: "/accessibility/" },
];

export default function SitemapPage() {
  const sections = NAVIGATION.filter((n) => n.children && n.children.length);
  const standalone = NAVIGATION.filter((n) => !n.children || !n.children.length);

  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div
          aria-hidden
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-100 backdrop-blur">
            <MapIcon className="h-3.5 w-3.5" />
            Sitemap
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl font-semibold leading-tight">
            Every page, in one place
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-brand-100/80 leading-relaxed">
            A complete overview of the Ascension Health website. Find services,
            conditions we treat, patient resources, and ways to reach our
            Fernley, NV team — all neatly organized below.
          </p>
        </div>
      </section>

      {/* Quick top-level grid */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Primary navigation
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {NAVIGATION.map((n) => {
              const Icon = ICONS[n.label] ?? Stethoscope;
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md hover:shadow-brand-900/5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="font-medium text-slate-900">
                        {n.label}
                      </span>
                      <span className="text-xs text-slate-500">{n.href}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Sectioned tree */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {sections.map((section) => {
            const Icon = ICONS[section.label] ?? Stethoscope;
            return (
              <article
                key={section.href}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 via-accent to-brand-600"
                />
                <header className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white shadow-md">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-semibold text-slate-900 leading-tight">
                        {section.label}
                      </h2>
                      <Link
                        href={section.href}
                        className="text-xs font-medium text-brand-700 hover:text-brand-800"
                      >
                        {section.href}
                      </Link>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    {section.children?.length ?? 0} pages
                  </span>
                </header>

                <ul className="mt-6 grid gap-y-2 sm:grid-cols-2">
                  {section.children?.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="group flex items-center gap-2 rounded-md py-1.5 text-sm text-slate-700 transition-colors hover:text-brand-700"
                      >
                        <span
                          aria-hidden
                          className="h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-150"
                        />
                        <span className="border-b border-transparent group-hover:border-brand-300">
                          {child.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Standalone pages + utility */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="font-display text-xl font-semibold text-slate-900">
              Main pages
            </h2>
            <ul className="mt-5 space-y-2 text-sm">
              {standalone.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="group inline-flex items-center gap-2 text-slate-700 hover:text-brand-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span className="border-b border-transparent group-hover:border-brand-300">
                      {n.label}
                    </span>
                    <span className="text-xs text-slate-400">{n.href}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-brand-700" />
              <h2 className="font-display text-xl font-semibold text-slate-900">
                Site information
              </h2>
            </div>
            <ul className="mt-5 space-y-2 text-sm">
              {UTILITY_LINKS.map((u) => (
                <li key={u.href}>
                  <Link
                    href={u.href}
                    className="group inline-flex items-center gap-2 text-slate-700 hover:text-brand-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span className="border-b border-transparent group-hover:border-brand-300">
                      {u.label}
                    </span>
                    <span className="text-xs text-slate-400">{u.href}</span>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-slate-700 hover:text-brand-700"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  <span className="border-b border-transparent group-hover:border-brand-300">
                    Google Business Profile
                  </span>
                </a>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-12 sm:flex-row">
          <div>
            <p className="font-display text-2xl font-semibold text-slate-900">
              Can&apos;t find what you&apos;re looking for?
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Our Fernley team is happy to help — call{" "}
              <a
                href={SITE.phoneHref}
                className="font-semibold text-brand-700 hover:text-brand-800"
              >
                {SITE.phone}
              </a>{" "}
              or request a visit online.
            </p>
          </div>
          <Link
            href={SITE.appointmentsHref}
            className="inline-flex items-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-brand-800 transition-colors"
          >
            Request Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
