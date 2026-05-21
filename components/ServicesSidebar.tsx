"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { SITE } from "@/lib/navigation";
import { SERVICES } from "@/lib/services";

const ease = [0.22, 1, 0.36, 1] as const;

export function ServicesSidebar({ currentSlug }: { currentSlug?: string }) {
  const others = SERVICES.filter((s) => s.slug !== currentSlug);

  return (
    <aside className="lg:sticky lg:top-28 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-800 to-brand-900 p-7 text-white shadow-xl shadow-brand-900/20"
      >
        <div
          aria-hidden
          className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/20 blur-2xl"
        />
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Request Appointment
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold leading-tight">
          Ready to feel better?
        </h2>
        <p className="mt-3 text-sm text-brand-100/80 leading-relaxed">
          Speak with our Fernley team — we&apos;ll match you with the right care
          plan.
        </p>

        <a
          href={SITE.phoneHref}
          className="mt-6 flex items-center gap-3 rounded-xl bg-white/10 p-4 ring-1 ring-white/15 transition-colors hover:bg-white/15"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-brand-950">
            <Phone className="h-5 w-5" />
          </span>
          <span className="flex flex-col">
            <span className="text-[11px] uppercase tracking-widest text-brand-100/70">
              Call us
            </span>
            <span className="font-display text-xl font-semibold">
              {SITE.phone}
            </span>
          </span>
        </a>

        <Link
          href={SITE.appointmentsHref}
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-brand-950 hover:bg-accent-soft transition-colors"
        >
          Request Appointment Online
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, delay: 0.1, ease }}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          Related Services
        </h3>
        <ul className="mt-4 divide-y divide-slate-100">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={s.href}
                className="group flex items-center justify-between gap-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:text-brand-800"
              >
                <span>{s.title}</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-700" />
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </aside>
  );
}
