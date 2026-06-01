"use client";

import Script from "next/script";
import { CalendarCheck, ShieldCheck, Sparkles } from "lucide-react";

const FORM_ID = "flo7dcg5mTX6oZqddV3w";
const FORM_NAME = "Website NP Form";
const FORM_HEIGHT = 947;
const EMBED_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

type LeadFormProps = {
  /** Optional unique suffix when multiple instances render on the same page */
  instanceId?: string;
  className?: string;
  height?: number;
  /** Toggle the decorative header strip (eyebrow + badges). Defaults to true. */
  showHeader?: boolean;
  /** Override the eyebrow heading shown above the form. */
  title?: string;
  /** Override the supporting copy below the heading. */
  subtitle?: string;
};

export default function LeadForm({
  instanceId = "default",
  className,
  height = FORM_HEIGHT,
  showHeader = true,
  title = "Request your appointment",
  subtitle = "Tell us a little about your visit and our team will get back to confirm a time that works for you.",
}: LeadFormProps) {
  const iframeId = `inline-${FORM_ID}-${instanceId}`;
  return (
    <div className={"relative " + (className ?? "")}>
      {/* Animated gradient glow halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-2 rounded-[32px] bg-[conic-gradient(from_120deg_at_50%_50%,#698137,#e5e25e,#8ca450,#698137)] opacity-30 blur-2xl"
      />

      {/* Outer gradient ring */}
      <div className="relative rounded-[28px] bg-[linear-gradient(135deg,#698137,#8ca450_45%,#e5e25e_70%,#698137)] p-[2px] shadow-2xl shadow-brand-900/20">
        <div className="relative overflow-hidden rounded-[26px] bg-white">
          {/* Top brand accent bar */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-700 via-accent to-brand-700"
          />

          {/* Decorative dotted corners */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-6 -left-6 h-32 w-32 rounded-full opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(rgba(105,129,55,0.45) 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-full opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(rgba(229,226,94,0.55) 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          />

          {/* Soft corner gradient blooms */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 right-0 h-52 w-52 rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 left-0 h-52 w-52 rounded-full bg-brand-300/30 blur-3xl"
          />

          <div className="relative px-6 pt-7 pb-6 sm:px-8 sm:pt-8">
            {showHeader && (
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
                    <span className="h-px w-6 bg-brand-400" />
                    Book online
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-brand-950 leading-tight sm:text-[26px]">
                    {title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm text-slate-600 leading-relaxed">
                    {subtitle}
                  </p>
                </div>
                <span className="hidden sm:inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-900 ring-1 ring-accent/60">
                  <Sparkles className="h-3.5 w-3.5" />
                  Quick reply
                </span>
              </div>
            )}

            {/* Iframe surface */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-brand-50/40 ring-1 ring-brand-100/80">
              <div className="relative" style={{ minHeight: height }}>
                <iframe
                  src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: 12,
                    minHeight: height,
                    background: "transparent",
                  }}
                  id={iframeId}
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name={FORM_NAME}
                  data-height={String(height)}
                  data-layout-iframe-id={iframeId}
                  data-form-id={FORM_ID}
                  title={FORM_NAME}
                />
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-800 ring-1 ring-brand-100">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-700" />
                Secure & private
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-800 ring-1 ring-brand-100">
                <CalendarCheck className="h-3.5 w-3.5 text-brand-700" />
                Same-week appointments
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/30 px-3 py-1 font-medium text-brand-900 ring-1 ring-accent/60">
                <Sparkles className="h-3.5 w-3.5" />
                Most insurance accepted
              </span>
            </div>
          </div>
        </div>
      </div>

      <Script src={EMBED_SCRIPT_SRC} strategy="lazyOnload" />
    </div>
  );
}
