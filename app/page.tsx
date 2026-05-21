import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  ArrowRight,
  Award,
  Bone,
  Brain,
  Calendar,
  Clock,
  Droplet,
  Dumbbell,
  HeartPulse,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Users,
  Zap,
} from "lucide-react";
import { NAVIGATION, SITE } from "@/lib/navigation";
import {
  ConditionsMarquee,
  Counter,
  HeroVisual,
  MissionCollage,
  Reveal,
  ServiceCard,
  ServicesShowcase,
} from "@/components/Motion";
import ContactForm from "@/components/ContactForm";
import { CityLinkGrid } from "@/components/pSEO/CityLinkGrid";
import imgChiropracticCare from "@/images/chiropractic-care.jpg";
import imgSpinalDecompression from "@/images/spinal-decompression.jpg";
import imgPhysicalTherapy from "@/images/physical-therapy.jpg";
import imgJointInjections from "@/images/joint-injections.jpg";
import imgTriggerPointInjections from "@/images/trigger-point-injections.jpg";
import imgNutritionalIvs from "@/images/nutritional-ivs.jpg";
import imgBHRT from "@/images/bioidentical-hormone-replacement-therapy.jpg";
import imgMedicalWeightLoss from "@/images/medical-weight-loss.jpg";
import imgGainswave from "@/images/gainswave.jpg";
import imgWhyChooseUs from "@/images/neck-pain.jpg";

const services = NAVIGATION.find((n) => n.label === "Services")?.children ?? [];
const conditions =
  NAVIGATION.find((n) => n.label === "Conditions Treated")?.children ?? [];

const SERVICE_META: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string }>;
    tag: string;
    image: import("next/image").StaticImageData;
  }
> = {
  "/services/chiropractic-care/": {
    icon: Bone,
    tag: "Spinal Alignment",
    image: imgChiropracticCare,
  },
  "/services/spinal-decompression/": {
    icon: Activity,
    tag: "Disc Therapy",
    image: imgSpinalDecompression,
  },
  "/physical-therapy/": {
    icon: Dumbbell,
    tag: "Rehab & Recovery",
    image: imgPhysicalTherapy,
  },
  "/joint-injections/": {
    icon: Syringe,
    tag: "Targeted Relief",
    image: imgJointInjections,
  },
  "/trigger-point-injections/": {
    icon: Zap,
    tag: "Muscle Pain",
    image: imgTriggerPointInjections,
  },
  "/nutritional-ivs/": {
    icon: Droplet,
    tag: "Wellness Drips",
    image: imgNutritionalIvs,
  },
  "/bioidentical-hormone-replacement-therapy/": {
    icon: HeartPulse,
    tag: "Hormone Balance",
    image: imgBHRT,
  },
  "/medical-weight-loss/": {
    icon: Scale,
    tag: "Sustainable Results",
    image: imgMedicalWeightLoss,
  },
  "/gainswave/": {
    icon: Sparkles,
    tag: "Men's Wellness",
    image: imgGainswave,
  },
  "/sports-injuries/": {
    icon: Stethoscope,
    tag: "Performance Care",
    image: imgPhysicalTherapy,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Services />
      <Conditions />
      <WhyChooseUs />
      <Appointment />
      <CityLinkGrid
        heading="Serving Nevada Communities"
        intro="Local care, close to home — explore Ascension Health resources for your city. Same-week appointments and most major insurance accepted."
      />
      <BottomCta />
      <LocalBusinessSchema />
    </>
  );
}

/* ============================ HERO ============================ */

function Hero() {
  return (
    <section className="relative overflow-hidden isolate">
      {/* Background video */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlays for legibility — deeper, more contrast */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/95 via-brand-950/80 to-brand-900/55"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent"
        aria-hidden="true"
      />
      {/* Subtle texture */}
      <div
        className="absolute inset-0 -z-10 bg-grid opacity-[0.12] mix-blend-overlay"
        aria-hidden="true"
      />
      {/* Drifting glow blobs */}
      <div
        aria-hidden="true"
        className="absolute -z-10 -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-brand-500/25 blur-3xl animate-floaty"
      />
      <div
        aria-hidden="true"
        className="absolute -z-10 bottom-[-120px] right-[-80px] h-[460px] w-[460px] rounded-full bg-accent/15 blur-3xl animate-floaty"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-24 lg:pt-32 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white uppercase backdrop-blur-md ring-1 ring-white/25">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Medical Center · Fernley, NV
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[4.25rem] font-semibold leading-[1.02] text-white tracking-tight">
                Personalized care to{" "}
                <span className="relative inline-block">
                  <span className="text-shimmer">live pain-free</span>
                  <svg
                    aria-hidden
                    viewBox="0 0 300 14"
                    preserveAspectRatio="none"
                    className="absolute left-0 right-0 -bottom-3 h-3 w-full text-accent/70"
                  >
                    <path
                      d="M2 9 C 60 2, 140 14, 298 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-brand-50/90">
                Welcome to Ascension Health. We treat the source of your pain
                using a variety of specialized techniques — from chiropractic
                care to physical therapy and wellness — so you can get back to
                living the active life you deserve.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href={SITE.appointmentsHref}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-brand-950 shadow-lg shadow-brand-950/30 ring-1 ring-accent-strong/40 hover:bg-accent-soft hover:shadow-xl hover:shadow-accent/20 transition-all"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">Request Appointment</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/20 hover:border-white/40 transition-all"
                >
                  <Phone className="h-4 w-4 text-accent transition-transform group-hover:rotate-12" />
                  {SITE.phone}
                </a>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.4}>
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/15 pt-8 max-w-lg">
                <Stat value={9} label="Years caring for Fernley" />
                <Stat
                  value={1000}
                  suffix="+"
                  label="Patients treated"
                />
                <Stat value={4.9} decimals={1} suffix="★" label="Patient rating" />
              </dl>
            </Reveal>
          </div>

          {/* Right column — animated graphic */}
          <Reveal delay={0.2} y={0}>
            <div className="relative hidden lg:block">
              <HeroVisual />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix,
  label,
  decimals,
}: {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}) {
  return (
    <div>
      <dt className="font-display text-3xl font-semibold text-white">
        <Counter to={value} suffix={suffix} decimals={decimals} />
      </dt>
      <dd className="mt-1 text-xs text-brand-100/70 leading-tight">{label}</dd>
    </div>
  );
}

/* =========================== MISSION =========================== */

function Mission() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Subtle background ornaments */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-brand-100/70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 h-[480px] w-[480px] rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Image collage */}
          <Reveal y={32} className="lg:col-span-6">
            <MissionCollage />
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
                <span className="h-px w-8 bg-brand-400" />
                Welcome to Ascension Health
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-slate-900 leading-[1.1]">
                Effective, efficient care that{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">treats the source</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 z-0 h-3 bg-accent/40 rounded"
                  />
                </span>{" "}
                of your pain.
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 text-base sm:text-lg leading-relaxed text-slate-600">
                At Ascension Health our goal is to provide the most effective
                and efficient care to correct the source of your problem and
                get you back to living the pain-free life you deserve. We
                understand everyone is different so we utilize a variety of
                techniques to offer personalized care that is comfortable for
                each individual.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
                At Ascension Health we offer a variety of specialized
                techniques that we have learned over years that help us relieve
                more than just neck and back pain. This additional training has
                given us the skills to treat musculoskeletal dysfunctions from
                your head to your fingers and toes.
              </p>
            </Reveal>

            {/* Feature row */}
            <Reveal delay={0.3}>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: HeartPulse, text: "Personalized treatment plans" },
                  { icon: ShieldCheck, text: "Gentle, evidence-based methods" },
                  { icon: Award, text: "Years of specialized training" },
                  { icon: Sparkles, text: "Whole-body, lasting results" },
                ].map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="group flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white px-4 py-3 shadow-sm hover:border-brand-300 hover:shadow-md transition-all"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.38}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  href="/about/"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-900/15 hover:bg-brand-800 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Learn more about us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-700"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================== SERVICES =========================== */

function Services() {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 py-20 lg:py-28">
      {/* Decorative ornaments */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header: two-column with visual */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-16">
          <div className="lg:col-span-7 max-w-2xl">
            <Reveal>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
                <span className="h-px w-8 bg-brand-400" />
                Our Services
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
                Specialized care,{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">tailored to you.</span>
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-2.5 w-full rounded bg-accent/50"
                  />
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-slate-600 leading-relaxed">
                From spinal alignment and hands-on therapy to advanced
                injections and whole-body wellness — every plan is built around
                your goals and refined with years of specialized training.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-900/15 transition hover:bg-brand-800"
                >
                  View all services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-900"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 border-t border-slate-200/80 pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  How it works
                </p>
                <ol className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      step: "01",
                      title: "Consult",
                      body: "A focused conversation about your history, pain and goals.",
                    },
                    {
                      step: "02",
                      title: "Assess",
                      body: "Hands-on evaluation to pinpoint the real source — not just the symptom.",
                    },
                    {
                      step: "03",
                      title: "Tailor",
                      body: "A treatment plan built around your body and the life you want back.",
                    },
                    {
                      step: "04",
                      title: "Restore",
                      body: "Progress you can feel, refined visit by visit until you’re moving freely.",
                    },
                  ].map((s) => (
                    <li
                      key={s.step}
                      className="group relative flex gap-3 rounded-xl border border-slate-200/70 bg-white/70 p-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand-600/50 hover:shadow-md hover:shadow-brand-900/5"
                    >
                      <span className="font-display text-2xl font-semibold text-brand-700/80 leading-none transition group-hover:text-brand-700">
                        {s.step}
                      </span>
                      <div className="min-w-0">
                        <p className="text-base font-semibold text-slate-900">
                          {s.title}
                        </p>
                        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                          {s.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal y={32}>
              <ServicesShowcase />
            </Reveal>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => {
            const meta = SERVICE_META[svc.href] ?? {
              icon: HeartPulse,
              tag: "Wellness",
              image: imgChiropracticCare,
            };
            const Icon = meta.icon;
            return (
              <ServiceCard
                key={svc.href}
                href={svc.href}
                label={svc.label}
                tag={meta.tag}
                image={meta.image}
                index={i}
                icon={<Icon className="h-6 w-6" />}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ========================= CONDITIONS ========================= */

function Conditions() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Decorative ornaments */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 -left-24 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
              <span className="h-px w-8 bg-brand-400" />
              Conditions Treated
              <span className="h-px w-8 bg-brand-400" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
              From head to{" "}
              <span className="relative inline-block">
                <span className="relative z-10">fingers and toes.</span>
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-2.5 w-full rounded bg-accent/50"
                />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Chronic pain affects more Americans than diabetes, heart disease
              and cancer combined. We are dedicated to helping patients regain
              pain-free lives — at the onset of symptoms.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14">
            <ConditionsMarquee items={conditions} />
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 px-6">
            <Link
              href="/conditions-treated/"
              className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-900/15 transition hover:bg-brand-800"
            >
              View all conditions
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/appointments/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-900"
            >
              <Calendar className="h-4 w-4" />
              Request an appointment
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ========================= WHY CHOOSE US ========================= */

const FEATURES = [
  {
    icon: Users,
    title: "Personalized Plans",
    body: "Care customized to your body, history and goals — never one-size-fits-all.",
  },
  {
    icon: Award,
    title: "Years of Training",
    body: "Specialized techniques refined over years to treat root causes, not symptoms.",
  },
  {
    icon: ShieldCheck,
    title: "Comfortable Care",
    body: "A variety of gentle, evidence-based methods keep treatment comfortable.",
  },
  {
    icon: Brain,
    title: "Whole-Body Focus",
    body: "Head to toes — musculoskeletal dysfunction wherever it lives.",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 text-brand-50">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={imgWhyChooseUs}
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
        />
      </div>
      {/* Dark overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f1909]/95 via-[#1a2a10]/90 to-[#0a1206]/95"
      />
      {/* Soft glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
      />
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] bg-grid"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end mb-14">
          <div className="lg:col-span-7 max-w-2xl">
            <Reveal>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                <span className="h-px w-8 bg-accent/60" />
                Why Ascension Health
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                Care designed around the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">person in the room.</span>
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-2.5 w-full rounded bg-accent/40"
                  />
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-brand-100/80 leading-relaxed">
                A small, specialized team — pairing years of training with a
                gentle, evidence-based approach so every visit feels personal.
              </p>
            </Reveal>
          </div>

          {/* Stat strip */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2} y={20}>
              <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="text-center">
                  <p className="font-display text-2xl font-semibold text-white">
                    <Counter to={9} />
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-widest text-brand-200/70">
                    Years
                  </p>
                </div>
                <div className="text-center border-x border-white/10">
                  <p className="font-display text-2xl font-semibold text-white">
                    <Counter to={9} suffix="+" />
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-widest text-brand-200/70">
                    Services
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-display text-2xl font-semibold text-white">
                    4.9★
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-widest text-brand-200/70">
                    Rated
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-accent/50 hover:bg-white/10">
                {/* Hover sheen */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/30 transition-colors group-hover:bg-accent group-hover:text-brand-950">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 font-display text-xl font-semibold text-white">
                  {f.title}
                </h3>
                <p className="relative mt-2 text-sm text-brand-100/75 leading-relaxed">
                  {f.body}
                </p>
                <span
                  aria-hidden
                  className="absolute right-5 top-5 font-display text-2xl font-semibold text-white/10 transition-colors group-hover:text-accent/40"
                >
                  0{i + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= APPOINTMENT ========================= */

function Appointment() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    SITE.address
  )}&output=embed`;

  return (
    <section
      id="appointment"
      className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/40 to-white py-20 lg:py-28"
    >
      {/* Decorative ornaments */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-200/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
              <span className="h-px w-8 bg-brand-400" />
              Request an Appointment
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
              Start your path to{" "}
              <span className="relative inline-block">
                <span className="relative z-10">pain-free living.</span>
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-2.5 w-full rounded bg-accent/50"
                />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Tell us a little about your visit and our team will reach out to
              confirm a time that fits your schedule.
            </p>
          </Reveal>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* Left: Contact + Map */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-brand-900/5">
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Get in touch
                </h3>
                <ul className="mt-6 space-y-5 text-sm">
                  <ContactRow Icon={MapPin} title="Visit us">
                    <a
                      href={SITE.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-700"
                    >
                      {SITE.address}
                    </a>
                  </ContactRow>
                  <ContactRow Icon={Phone} title="Call us">
                    <a
                      href={SITE.phoneHref}
                      className="hover:text-brand-700"
                    >
                      {SITE.phone}
                    </a>
                  </ContactRow>
                  <ContactRow Icon={Clock} title="Hours">
                    {SITE.hours}
                  </ContactRow>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-brand-900/5">
                {/* Map overlay header */}
                <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-brand-800 shadow-md backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-700" />
                  </span>
                  Fernley, NV
                </div>
                <a
                  href={SITE.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open in Google Maps"
                  className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-brand-700 px-3 py-1.5 text-xs font-semibold text-white shadow-md transition hover:bg-brand-800"
                >
                  Directions
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <iframe
                  src={mapSrc}
                  title="Ascension Health on Google Maps"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[320px] w-full border-0 grayscale-[15%] transition duration-500 group-hover:grayscale-0"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2} y={32}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-1 shadow-xl shadow-brand-900/10">
                {/* Top brand bar */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-700 via-accent to-brand-700"
                />
                {/* Decorative dotted corner */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-xl opacity-50"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(67,86,39,0.35) 1px, transparent 1px)",
                    backgroundSize: "10px 10px",
                  }}
                />
                <div className="relative rounded-[1.4rem] bg-gradient-to-br from-white to-brand-50/40 p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-slate-900">
                        Book your visit
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        Required fields are marked{" "}
                        <span className="text-brand-700">*</span>
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                      <Sparkles className="h-3.5 w-3.5" />
                      Quick reply
                    </span>
                  </div>
                  <div className="mt-6">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  Icon,
  title,
  children,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {title}
        </p>
        <p className="mt-0.5 text-slate-800">{children}</p>
      </div>
    </li>
  );
}

/* =========================== BOTTOM CTA =========================== */

function BottomCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 py-20">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-brand-400 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-300 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Ready to feel your best?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg text-brand-100/90">
            Book a visit with our Fernley team — or call us today.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={SITE.appointmentsHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-800 hover:bg-brand-50 shadow-lg transition-colors"
            >
              Request Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================== SCHEMA =========================== */

function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Ascension Health",
    url: "https://ascensionhealthnv.com/",
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "415 HWY 95A Suite 503",
      addressLocality: "Fernley",
      addressRegion: "NV",
      postalCode: "89408",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [SITE.social.facebook, SITE.social.twitter, SITE.social.google],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
