import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";
import { PageHero, AppointmentSidebar, BottomCTA } from "@/components/InteriorPage";
import { SectionEyebrow } from "@/components/InteriorMotion";
import { Reveal } from "@/components/Motion";
import { SITE } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Appointments | Ascension Health",
  description: "Appointments -",
  alternates: { canonical: "/appointments/" },
  openGraph: {
    title: "Appointments | Ascension Health",
    description: "Appointments -",
    url: "https://ascensionhealthnv.com/appointments/",
    type: "article",
    siteName: "Ascension Health",
  },
};

export default function AppointmentsPage() {
  return (
    <main className="bg-slate-50">
      <PageHero title="Appointments" />

      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                Request an Appointment
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
                Tell us when works best &mdash; we&rsquo;ll handle the rest.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-700">
                Please use this form for general information purposes only. DO
                NOT send personal health information through this form.
                Specific patient care must be addressed during your
                appointment. Please complete the following form to request an
                appointment. Please also note that availability will vary
                depending on your request. Your appointment will be confirmed
                by phone by a member of our staff. Thank you!
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href={SITE.phoneHref}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-700">
                      Call us
                    </p>
                    <p className="font-display text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                      {SITE.phone}
                    </p>
                  </div>
                </a>
                <a
                  href={SITE.smsHref}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-brand-950">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-700">
                      Text us
                    </p>
                    <p className="font-display text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                      {SITE.sms}
                    </p>
                  </div>
                </a>
              </div>

              <form
                className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-brand-900/5 space-y-6"
                action={SITE.phoneHref}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <CalendarCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-slate-900">
                      Request an Appointment
                    </h3>
                    <p className="text-xs text-slate-500">
                      We&rsquo;ll confirm your visit by phone.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Preferred Date" name="date" type="date" required />
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="time"
                      className="block text-xs font-semibold uppercase tracking-widest text-slate-600"
                    >
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a time
                      </option>
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="nature"
                    className="block text-xs font-semibold uppercase tracking-widest text-slate-600"
                  >
                    Nature of Visit
                  </label>
                  <textarea
                    id="nature"
                    name="nature"
                    rows={4}
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
                    placeholder="Briefly describe what you'd like help with"
                  />
                </div>

                <div className="rounded-xl bg-slate-50 p-4 text-xs leading-relaxed text-slate-600 flex gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                  <p>
                    Do NOT send personal health information through this form.
                    Your appointment will be confirmed by phone by a member of
                    our staff.
                  </p>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-brand-700 px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-brand-800 transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <AppointmentSidebar />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionEyebrow
            kicker="Visit us"
            title="Find us in Fernley, Nevada"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            <Reveal>
              <a
                href={SITE.phoneHref}
                className="block rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-700 text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-700">
                  Call Us
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-slate-900">
                  {SITE.phone}
                </p>
              </a>
            </Reveal>
            <Reveal delay={0.05}>
              <a
                href={SITE.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-700 text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-700">
                  Address
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  415 HWY 95A Suite 503
                  <br />
                  Fernley, NV 89408
                </p>
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-700 text-white">
                  <Clock className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-700">
                  Office Hours
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  Monday – Thursday
                  <br />
                  9:00am – 6:00pm
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/new-patients/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              New patient? Start here →
            </Link>
          </div>
        </div>
      </section>

      <BottomCTA />
    </main>
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
        className="block text-xs font-semibold uppercase tracking-widest text-slate-600"
      >
        {label} {required && <span className="text-brand-700">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
      />
    </div>
  );
}
