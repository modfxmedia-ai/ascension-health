import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  CalendarCheck,
} from "lucide-react";
import { PageHero, AppointmentSidebar, BottomCTA } from "@/components/InteriorPage";
import { SectionEyebrow } from "@/components/InteriorMotion";
import { Reveal } from "@/components/Motion";
import { SITE } from "@/lib/navigation";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Appointments in Fernley, NV | Ascension Health",
  description:
    "Request an appointment with Ascension Health in Fernley, NV. Call (775) 575-9922 or use our online form to schedule chiropractic care, physical therapy or wellness services.",
  alternates: { canonical: "/appointments/" },
  openGraph: {
    title: "Appointments in Fernley, NV | Ascension Health",
    description:
      "Request an appointment with Ascension Health in Fernley, NV — chiropractic, physical therapy and wellness services.",
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

              <div className="mt-8">
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
              </div>

              <div className="mt-10">
                <div className="mb-6 flex items-center gap-3">
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
                
                {/* Embedded Form */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-slate-50/30 shadow-2xl shadow-brand-900/10 ring-1 ring-slate-200/60 transition-all duration-300 hover:shadow-3xl hover:shadow-brand-900/15">
                  {/* Decorative gradient border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-600/10 via-transparent to-accent/10 pointer-events-none" />
                  
                  <div className="relative p-1">
                    <div className="relative overflow-hidden rounded-3xl bg-white">
                      <div className="relative" style={{ minHeight: '808px' }}>
                        <iframe
                          src="https://api.leadconnectorhq.com/widget/form/LNDeeKsvO3hsDU3zIbLQ"
                          style={{ width: '100%', height: '100%', border: 'none', minHeight: '808px' }}
                          id="inline-LNDeeKsvO3hsDU3zIbLQ"
                          data-layout='{"id":"INLINE"}'
                          data-trigger-type="alwaysShow"
                          data-trigger-value=""
                          data-activation-type="alwaysActivated"
                          data-activation-value=""
                          data-deactivation-type="neverDeactivate"
                          data-deactivation-value=""
                          data-form-name=" 🟢 Ascension Health website form"
                          data-height="808"
                          data-layout-iframe-id="inline-LNDeeKsvO3hsDU3zIbLQ"
                          data-form-id="LNDeeKsvO3hsDU3zIbLQ"
                          title=" 🟢 Ascension Health website form"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Script
                  src="https://link.msgsndr.com/js/form_embed.js"
                  strategy="lazyOnload"
                />
              </div>
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


