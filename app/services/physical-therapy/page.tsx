import type { Metadata } from "next";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import {
  Dumbbell,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Phone,
} from "lucide-react";
import { PageHero, BottomCTA } from "@/components/InteriorPage";
import { CityLinkGrid } from "@/components/pSEO/CityLinkGrid";
import { ServicesSidebar } from "@/components/ServicesSidebar";
import { SectionEyebrow, RelatedChips, ValueCard } from "@/components/InteriorMotion";
import { Reveal } from "@/components/Motion";
import { SITE } from "@/lib/navigation";
import ptImage from "@/images/physical-therapy.jpg";

export const metadata: Metadata = {
  title: "Physical Therapy in Fernley, NV | Ascension Health",
  description:
    "Physical therapy in Fernley, NV. Personalized rehabilitation after personal injury, auto accident or fall — therapeutic exercises that restore strength, mobility and balance.",
  alternates: { canonical: "/services/physical-therapy/" },
  openGraph: {
    title: "Physical Therapy in Fernley, NV | Ascension Health",
    description:
      "Personalized physical therapy and therapeutic exercise in Fernley, NV.",
    url: "https://ascensionhealthnv.com/services/physical-therapy/",
    type: "article",
    siteName: "Ascension Health",
  },
  twitter: {
    title: "Physical Therapy in Fernley, NV | Ascension Health",
    description:
      "Personalized physical therapy and therapeutic exercise in Fernley, NV.",
  },
};

const benefits = [
  {
    icon: <HeartPulse className="h-5 w-5" />,
    title: "Reduce & Prevent Pain",
    body: "Targeted therapies relieve current pain and help stop it from coming back.",
  },
  {
    icon: <Dumbbell className="h-5 w-5" />,
    title: "Restore Mobility",
    body: "Improve balance, walking and everyday function — no matter your age.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Avoid Surgery",
    body: "PT has been shown to help patients sidestep surgery and recover from injury.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Whole-Person Recovery",
    body: "Support for sports injury, stroke recovery, vertigo and pre/postnatal care.",
  },
];

const relatedConditions = [
  { label: "Back Pain", href: "/conditions-treated/back-pain/" },
  { label: "Neck Pain", href: "/conditions-treated/neck-pain/" },
  { label: "Shoulder Pain", href: "/conditions-treated/shoulder-pain/" },
  { label: "Sciatica", href: "/conditions-treated/sciatica/" },
  { label: "Knee Pain", href: "/conditions-treated/knee-pain/" },
  { label: "Joint Pain", href: "/conditions-treated/joint-pain/" },
];

export default function PhysicalTherapyPage() {
  return (
    <main className="bg-slate-50">
      <ServiceSchema
        name="Physical Therapy"
        description="Personalized rehabilitation and therapeutic exercise that restores strength, mobility and balance after injury, surgery or chronic pain."
        pagePath="/services/physical-therapy/"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services/" },
          { name: "Physical Therapy", url: "/services/physical-therapy/" },
        ]}
      />
      <PageHero title="Physical Therapy" />

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-xl shadow-brand-900/10">
                <Image
                  src={ptImage}
                  alt="Therapeutic exercise and physical therapy at Ascension Health"
                  fill
                  sizes="(min-width: 1024px) 720px, 100vw"
                  className="object-cover"
                  priority
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mt-8 text-[16px] leading-relaxed text-slate-700">
                At Ascension Health, we specialize in helping you receive the
                right care after a personal injury, auto accident or fall.
                Our team is committed to comprehensive treatment that gets you
                back to the activities you enjoy. If you&apos;ve recently been
                injured, you may be eligible for injury rehabilitation in the
                form of physical therapy.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 text-[15.5px] leading-relaxed text-slate-700">
                Physical therapy delivers real, lasting health benefits. It
                doesn&apos;t just reduce or eliminate pain — many techniques
                and technologies can help prevent it from returning. PT has
                helped patients avoid surgery, recover from sports injuries
                and even regain function after a stroke. If standing, walking
                or moving has become difficult, physical therapy can improve
                mobility, restore balance and reduce the risk of falls.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-[15.5px] leading-relaxed text-slate-700">
                Targeted exercises can quickly restore proper vestibular
                function — relieving dizziness and vertigo. Physical therapy
                also supports women&apos;s health concerns such as pregnancy
                and postpartum care, and helps with pulmonary issues through
                breathing exercises and lung-clearance techniques.
              </p>
            </Reveal>

            <div className="mt-12">
              <Reveal>
                <SectionEyebrow
                  kicker="What PT can do"
                  title="A program built around your recovery."
                  align="left"
                />
              </Reveal>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {benefits.map((b, i) => (
                  <ValueCard
                    key={b.title}
                    index={i}
                    title={b.title}
                    body={b.body}
                    icon={b.icon}
                  />
                ))}
              </div>
            </div>

            <Reveal delay={0.2}>
              <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="font-display text-2xl font-semibold text-slate-900">
                  From injury to everyday ease.
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
                  Whether you&apos;re improving mobility or building a
                  treatment plan after an injury, we&apos;re here to make
                  recovery — and everyday life — easier. To discuss your
                  situation with an experienced specialist, please contact us
                  today at{" "}
                  <a
                    href={SITE.phoneHref}
                    className="font-semibold text-brand-700 hover:text-brand-800"
                  >
                    {SITE.phone}
                  </a>
                  .
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-12">
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Related conditions we treat
                </h3>
                <div className="mt-5">
                  <RelatedChips items={relatedConditions} />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-brand-800 transition-colors"
                >
                  <Phone className="h-4 w-4" /> Call {SITE.phone}
                </a>
                <Link
                  href={SITE.appointmentsHref}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-700 px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
                >
                  Request Appointment <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <ServicesSidebar currentSlug="physical-therapy" />
          </div>
        </div>
      </section>

      <CityLinkGrid
        heading="Serving These Nevada Cities"
        intro="Outpatient physical therapy at our Fernley clinic — same-week new patient appointments for cities across Nevada."
        topic={{ slug: "physical-therapy", name: "Physical Therapy", kind: "service" }}
      />

      <BottomCTA />
    </main>
  );
}
