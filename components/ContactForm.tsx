"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, Send, AlertCircle, Mail } from "lucide-react";
import Link from "next/link";

type Status = "idle" | "submitting" | "error";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string | null>(null);
  const [consent, setConsent] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (typeof data.instagram === "string" && data.instagram.trim() !== "") {
      form.reset();
      router.push("/thank-you/");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, consent }),
      });
      if (!res.ok) throw new Error("Request failed");
      const json = await res.json();
      if (!json.success) throw new Error("Request failed");
      form.reset();
      setConsent(false);
      router.push("/thank-you/");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please call us at (775) 575-9922.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative space-y-7 rounded-2xl bg-white/80 border border-slate-100 shadow-xl px-6 py-8 sm:p-10 backdrop-blur-md"
      noValidate
    >
      {/* Honeypot */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="instagram">Instagram</label>
        <input
          id="instagram"
          name="instagram"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="First Name"
          name="firstName"
          placeholder="First Name"
          autoComplete="given-name"
          className="bg-white/90"
        />
        <Field
          label="Last Name"
          name="lastName"
          placeholder="Last Name"
          autoComplete="family-name"
          className="bg-white/90"
        />
      </div>

      <Field
        label="Phone"
        name="phone"
        type="tel"
        required
        placeholder="Phone"
        autoComplete="tel"
        className="bg-white/90"
      />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        placeholder="Email"
        autoComplete="email"
        icon={Mail}
        className="bg-white/90"
      />
      <Field label="Insurance Provider" name="insurance" className="bg-white/90" />

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-slate-900 mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-600 focus:ring-4 focus:ring-brand-100 outline-none transition-all duration-200 resize-none shadow-sm hover:shadow-md"
        />
      </div>

      <label className="flex items-start gap-3 pt-1 cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-brand-700 focus:ring-brand-500 accent-brand-700 transition-all duration-150"
        />
        <span className="text-xs leading-relaxed text-slate-600">
          Ascension Health is committed to protecting and respecting your
          privacy, and we&apos;ll only use your personal information to
          administer your account and to provide the products and services you
          requested from us.<br />
          I Consent to Receive SMS Notifications, Alerts &amp; Occasional
          Marketing Communication from company. Message frequency varies.
          Message &amp; data rates may apply. Text HELP to (775) 204-4640 for
          assistance. You can reply STOP to unsubscribe at any time.
        </span>
      </label>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand-700 to-brand-800 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-150 disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Submit
          </>
        )}
      </motion.button>

      {/* Footer links removed as requested */}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
  icon: Icon,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-slate-900 mb-1.5"
      >
        {label}
        {required && <span className="ml-0.5 text-brand-700">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        )}
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder ?? label}
          autoComplete={autoComplete}
          className={`w-full rounded-xl border border-slate-200 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-600 focus:ring-4 focus:ring-brand-100 outline-none transition-all duration-200 shadow-sm hover:shadow-md ${
            Icon ? "pl-9 pr-4" : "px-4"
          } ${className || "bg-white"}`}
        />
      </div>
    </div>
  );
}
