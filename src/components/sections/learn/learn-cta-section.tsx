import Link from "next/link";
import { ArrowRight, PhoneCall, GraduationCap } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { learnContent } from "@/lib/content/learn";

interface LearnCtaSectionProps {
  locale: Locale;
}

export function LearnCtaSection({ locale }: LearnCtaSectionProps) {
  const { cta } = learnContent;

  return (
    <section aria-label="Enroll in AFF Ground School" className="my-8">
      <div className="relative overflow-hidden rounded-3xl border border-secondary/40 bg-gradient-to-br from-panel via-secondary/5 to-panel p-8 sm:p-12 shadow-2xl text-center">
        {/* Subtle Ambient Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/15 rounded-full blur-3xl -z-10" />

        <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-secondary">
            <GraduationCap className="h-3.5 w-3.5" />
            {t(cta.eyebrow, locale)}
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-ink tracking-tight">
            {t(cta.title, locale)}
          </h2>

          <p className="text-xs sm:text-sm text-dim leading-relaxed">
            {t(cta.subtitle, locale)}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 w-full">
            <Link
              href={`/${locale}/book`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-4 text-xs font-black uppercase tracking-wider text-slate-950 transition-all hover:bg-secondary-hover shadow-lg hover:shadow-secondary/20 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>{t(cta.primaryBtn, locale)}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="tel:+19725527790"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-canvas px-8 py-4 text-xs font-black uppercase tracking-wider text-ink transition-all hover:border-secondary hover:text-secondary w-full sm:w-auto"
            >
              <PhoneCall className="h-4 w-4 text-secondary" />
              <span>{t(cta.phoneBtn, locale)}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
