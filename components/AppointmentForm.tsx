"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function AppointmentForm() {
  const [status, setStatus] = React.useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Stub submit — replace with real endpoint or Gravity Forms proxy
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 4000);
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-brand-50 border border-brand-200 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto h-10 w-10 text-brand-600" />
        <h3 className="mt-3 font-display text-2xl text-brand-900">
          Request received
        </h3>
        <p className="mt-2 text-sm text-brand-800">
          Thank you. Our team will reach out shortly to confirm your appointment.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field label="Name" name="name" />
      <Field label="Phone" name="phone" type="tel" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Preferred Date" name="date" type="date" required />

      <div>
        <label
          htmlFor="time"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
        >
          Preferred Time
        </label>
        <select
          id="time"
          name="time"
          defaultValue="Morning"
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition"
        >
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="nature"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
        >
          Nature of Visit
        </label>
        <textarea
          id="nature"
          name="nature"
          rows={3}
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-800 transition-all disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit Request"}
      </button>

      <p className="text-xs text-slate-500 text-center">
        We will respond during our business hours (Mon–Thu · 9am – 6pm).
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
      >
        {label}
        {required && <span className="ml-1 text-brand-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition"
      />
    </div>
  );
}
