"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function ClientPill({
  href,
  title,
  delay = 0,
}: {
  href: string;
  title: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease }}
    >
      <Link
        href={href}
        className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800 hover:shadow-md"
      >
        <span>{title}</span>
        <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-colors group-hover:text-brand-700" />
      </Link>
    </motion.div>
  );
}
