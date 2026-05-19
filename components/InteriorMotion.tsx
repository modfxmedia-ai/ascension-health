"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Activity, Sparkles, Heart, ShieldCheck } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* -------------------- Hero collage used on interior pages -------------------- */
export function InteriorCollage({
  primary,
  primaryAlt,
  secondary,
  secondaryAlt,
  tertiary,
  tertiaryAlt,
  stat,
  badge,
}: {
  primary: string;
  primaryAlt: string;
  secondary: string;
  secondaryAlt: string;
  tertiary?: string;
  tertiaryAlt?: string;
  stat: { value: string; label: string };
  badge?: { kicker: string; value: string };
}) {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand-100/60 via-transparent to-accent/20 blur-2xl"
      />
      <motion.div
        aria-hidden
        className="absolute -top-6 -right-6 h-32 w-32 rounded-xl opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(rgba(67,86,39,0.35) 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
      />

      <div className="relative grid grid-cols-6 grid-rows-6 gap-4 aspect-square">
        <motion.div
          className="relative col-span-4 row-span-4 overflow-hidden rounded-3xl ring-1 ring-slate-200/60 shadow-2xl shadow-brand-900/15"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={primary}
              alt={primaryAlt}
              fill
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 90vw"
              className="object-cover"
              unoptimized
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/45 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          className="relative col-span-2 row-span-2 col-start-5 row-start-1 overflow-hidden rounded-2xl ring-1 ring-slate-200/60 shadow-xl shadow-brand-900/10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          <Image
            src={secondary}
            alt={secondaryAlt}
            fill
            sizes="180px"
            className="object-cover"
            unoptimized
          />
        </motion.div>

        {tertiary && (
          <motion.div
            className="relative col-span-2 row-span-2 col-start-1 row-start-5 overflow-hidden rounded-2xl ring-1 ring-slate-200/60 shadow-xl shadow-brand-900/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
          >
            <Image
              src={tertiary}
              alt={tertiaryAlt ?? ""}
              fill
              sizes="180px"
              className="object-cover"
              unoptimized
            />
          </motion.div>
        )}

        <motion.div
          className="relative col-span-4 row-span-2 col-start-3 row-start-5 flex items-center justify-between gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200 shadow-xl shadow-brand-900/10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
        >
          <div className="flex items-center gap-3">
            <motion.span
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white shadow-md"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="h-6 w-6" />
            </motion.span>
            <div>
              <p className="font-display text-2xl font-semibold text-slate-900 leading-none">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-slate-500 leading-tight">
                {stat.label}
              </p>
            </div>
          </div>
          {badge && (
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-700">
                {badge.kicker}
              </span>
              <span className="font-display text-lg font-semibold text-slate-900">
                {badge.value}
              </span>
            </div>
          )}
        </motion.div>

        <motion.div
          aria-hidden
          className="absolute -top-5 -left-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-brand-950 shadow-lg shadow-brand-900/20"
          initial={{ opacity: 0, rotate: -20, scale: 0.6 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
        >
          <Sparkles className="h-7 w-7" />
        </motion.div>

        {[0, 1].map((i) => (
          <motion.span
            key={i}
            aria-hidden
            className="pointer-events-none absolute left-[28%] top-[28%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-400/40"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [0.6, 1.8], opacity: [0.5, 0] }}
            transition={{
              duration: 4,
              delay: i * 1.6,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* -------------------- Animated step card -------------------- */
export function StepCard({
  index,
  title,
  body,
  icon,
}: {
  index: number;
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-brand-900/10"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-600 via-accent to-brand-600 transition-transform duration-500 group-hover:scale-x-100"
      />
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
          {icon}
        </span>
        <span className="font-display text-3xl font-semibold text-brand-200 transition-colors group-hover:text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
    </motion.div>
  );
}

/* -------------------- Value pill with icon -------------------- */
export function ValueCard({
  index,
  title,
  body,
  icon,
}: {
  index: number;
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease }}
      className="relative flex gap-4 rounded-2xl bg-white p-6 ring-1 ring-slate-200"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-md shadow-brand-900/20">
        {icon}
      </span>
      <div>
        <h3 className="font-display text-base font-semibold text-slate-900">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">{body}</p>
      </div>
    </motion.div>
  );
}

/* -------------------- Marquee-ish related-conditions strip -------------------- */
export function RelatedChips({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((it, i) => (
        <motion.a
          key={it.href}
          href={it.href}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.04, ease }}
          whileHover={{ y: -3 }}
          className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-brand-600 hover:text-brand-800"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-150" />
          {it.label}
        </motion.a>
      ))}
    </div>
  );
}

/* -------------------- Animated heading underline -------------------- */
export function SectionEyebrow({
  kicker,
  title,
  description,
  align = "center",
}: {
  kicker: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls =
    align === "left" ? "text-left" : "text-center mx-auto items-center";
  return (
    <div
      className={`flex flex-col ${alignCls} max-w-2xl ${
        align === "center" ? "mx-auto" : ""
      }`}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease }}
        className="inline-flex items-center gap-2 self-start rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700"
        style={align === "center" ? { alignSelf: "center" } : undefined}
      >
        <Activity className="h-3.5 w-3.5" /> {kicker}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.05, ease }}
        className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mt-4 text-[15px] leading-relaxed text-slate-600"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

/* -------------------- Floating call-out card -------------------- */
export function CalloutCard({
  title,
  body,
  href,
  cta,
}: {
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease }}
      whileHover={{ y: -4 }}
      className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 p-8 text-white shadow-xl shadow-brand-900/20"
    >
      <div
        aria-hidden
        className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <ShieldCheck className="relative h-9 w-9 text-accent" />
      <h3 className="relative mt-5 font-display text-2xl font-semibold leading-tight">
        {title}
      </h3>
      <p className="relative mt-3 text-sm text-brand-100/85 leading-relaxed">
        {body}
      </p>
      <span className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-brand-950 transition-colors group-hover:bg-accent-soft">
        {cta} →
      </span>
    </motion.a>
  );
}
