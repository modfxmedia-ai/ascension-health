import Link from "next/link";
import { ChevronRight, Phone, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/navigation";
import { Reveal } from "@/components/Motion";

export function PageHero({ title, parent }: { title: string; parent?: { label: string; href: string } }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div aria-hidden className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
      <div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-brand-100/80">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            {parent && (
              <>
                <li aria-hidden><ChevronRight className="h-3.5 w-3.5 text-brand-200/60" /></li>
                <li>
                  <Link href={parent.href} className="hover:text-white transition-colors">{parent.label}</Link>
                </li>
              </>
            )}
            <li aria-hidden><ChevronRight className="h-3.5 w-3.5 text-brand-200/60" /></li>
            <li className="text-white font-medium">{title}</li>
          </ol>
        </nav>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">{title}</h1>
        <div className="mt-5 h-1 w-20 rounded-full bg-accent" />
      </div>
    </section>
  );
}

export function AppointmentSidebar() {
  return (
    <aside className="lg:sticky lg:top-28 space-y-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-800 to-brand-900 p-7 text-white shadow-xl shadow-brand-900/20">
        <div aria-hidden className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/20 blur-2xl" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Request Appointment</p>
        <h2 className="mt-3 font-display text-2xl font-semibold leading-tight">Let&apos;s get you feeling better</h2>
        <p className="mt-3 text-sm text-brand-100/80 leading-relaxed">
          Speak with our Fernley team — we&apos;ll find a time that works for your schedule.
        </p>

        <a
          href={SITE.phoneHref}
          className="mt-6 flex items-center gap-3 rounded-xl bg-white/10 p-4 ring-1 ring-white/15 transition-colors hover:bg-white/15"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-brand-950">
            <Phone className="h-5 w-5" />
          </span>
          <span className="flex flex-col">
            <span className="text-[11px] uppercase tracking-widest text-brand-100/70">Call us</span>
            <span className="font-display text-xl font-semibold">{SITE.phone}</span>
          </span>
        </a>

        <Link
          href={SITE.appointmentsHref}
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-brand-950 hover:bg-accent-soft transition-colors"
        >
          Request Appointment Online
        </Link>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Visit us</h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-700">
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 text-brand-700 shrink-0" />
            <a href={SITE.mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-brand-800">
              {SITE.address}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 text-brand-700 shrink-0" />
            <span>{SITE.hours}</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export function PageShell({
  title,
  parent,
  children,
}: {
  title: string;
  parent?: { label: string; href: string };
  children: React.ReactNode;
}) {
  return (
    <main className="bg-slate-50">
      <PageHero title={title} parent={parent} />
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="prose-page space-y-6 text-[15.5px] leading-relaxed text-slate-700">
                {children}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <AppointmentSidebar />
          </div>
        </div>
      </section>
      <BottomCTA />
    </main>
  );
}

export function BottomCTA({
  kicker = "Get started today",
  heading = "Ready to Feel Better?",
  body = "Call our Fernley team and book your visit.",
}: {
  kicker?: string;
  heading?: string;
  body?: string;
} = {}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 to-brand-800 text-white">
      <div aria-hidden className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">{kicker}</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight">
            {heading}
          </h2>
          <p className="mt-3 text-brand-100/80">
            {body}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-brand-950 shadow-lg shadow-black/20 hover:bg-accent-soft transition-colors"
          >
            <Phone className="h-4 w-4" /> Call {SITE.phone}
          </a>
          <Link
            href={SITE.appointmentsHref}
            className="inline-flex items-center rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Request Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
