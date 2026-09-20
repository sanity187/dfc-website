import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck, Quote } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { SectionHeading } from "@/components/primitives/section-heading";
import { learnContent } from "@/lib/content/learn";

interface LearnOverviewSectionProps {
  locale: Locale;
}

export function LearnOverviewSection({ locale }: LearnOverviewSectionProps) {
  const { overview } = learnContent;

  return (
    <section aria-label="AFF Program Overview" className="flex flex-col gap-12">
      <SectionHeading
        eyebrow={t(overview.eyebrow, locale)}
        title={t(overview.title, locale)}
        subtitle={t(overview.subtitle, locale)}
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Narrative Column */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-sm text-dim leading-relaxed">
            <p>{t(overview.p1, locale)}</p>
            <p>{t(overview.p2, locale)}</p>
          </div>

          {/* Chief Instructor Quote Card */}
          <div className="relative overflow-hidden rounded-2xl border border-secondary/30 bg-secondary/10 p-5">
            <Quote className="absolute -bottom-2 -right-2 h-16 w-16 text-secondary/10 -z-0" />
            <div className="relative z-10 flex flex-col gap-2">
              <p className="text-xs italic text-ink font-medium leading-relaxed">
                {t(overview.mentorQuote, locale)}
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs font-bold text-secondary">
                  — {overview.mentorName}
                </span>
                <span className="text-[11px] text-dim">
                  · {t(overview.mentorTitle, locale)}
                </span>
              </div>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href={`/${locale}/book`}
              className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3.5 text-xs font-black uppercase tracking-wider text-slate-950 transition-all hover:bg-secondary-hover shadow-md"
            >
              {t(learnContent.cta.primaryBtn, locale)}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+19725527790"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-canvas px-6 py-3.5 text-xs font-black uppercase tracking-wider text-ink transition-all hover:border-secondary hover:text-secondary"
            >
              {locale === "es" ? "Llamar a Operaciones" : "Speak with Flight Ops"}
            </a>
          </div>
        </div>

        {/* Right Imagery + Stats Column */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-line shadow-xl bg-panel">
            <Image
              src="/images/services/aff-solo.jpg"
              alt="Solo skydiver in stable freefall over Texas"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2 rounded-full bg-slate-950/70 backdrop-blur-md px-3.5 py-1.5 border border-white/10 text-xs font-bold">
                <ShieldCheck className="h-4 w-4 text-secondary" />
                <span>USPA Integrated Student Program</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-secondary">
                <Award className="h-4 w-4" />
                <span>A-License</span>
              </div>
            </div>
          </div>

          {/* 4 Key Stats Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {overview.stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center rounded-2xl border border-line bg-panel/60 p-4 text-center transition-all hover:border-secondary/40 hover:bg-panel"
              >
                <span className="text-xl font-black text-secondary tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-ink mt-0.5">
                  {t(stat.label, locale)}
                </span>
                <span className="text-[10px] text-dim mt-0.5 leading-tight">
                  {t(stat.detail, locale)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
