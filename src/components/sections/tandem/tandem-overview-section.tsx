import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { SectionHeading } from "@/components/primitives/section-heading";
import { tandemContent } from "@/lib/content/tandem";

interface TandemOverviewSectionProps {
  locale: Locale;
}

export function TandemOverviewSection({ locale }: TandemOverviewSectionProps) {
  const { overview } = tandemContent;

  return (
    <section aria-label="Tandem Skydiving Overview" className="flex flex-col gap-12">
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

          {/* Quick Value Callout Box */}
          <div className="rounded-2xl border border-secondary/30 bg-secondary/10 p-5 flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-slate-950 shadow-sm">
              <Zap className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-bold text-ink">
                {locale === "es"
                  ? "Vistas Exclusivas del Norte de Texas"
                  : "North Texas Skyline & Lake Views"}
              </h4>
              <p className="text-xs text-dim leading-relaxed">
                {locale === "es"
                  ? "Sube sobre el Lago Ray Hubbard y el skyline de Dallas antes del salto a 14,000 pies."
                  : "Take in breathtaking aerial vistas of Lake Ray Hubbard, Lake Lavon, and Downtown Dallas before exit."}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href={`/${locale}/book`}
              className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3.5 text-xs font-black uppercase tracking-wider text-slate-950 transition-all hover:bg-secondary-hover shadow-md"
            >
              {t(tandemContent.cta.primaryBtn, locale)}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/${locale}/pricing`}
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-canvas px-6 py-3.5 text-xs font-black uppercase tracking-wider text-ink transition-all hover:border-secondary hover:text-secondary"
            >
              {locale === "es" ? "Ver Tarifas y Paquetes" : "View Packages & Pricing"}
            </Link>
          </div>
        </div>

        {/* Right Image + Stats Column */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-line shadow-xl bg-panel">
            <Image
              src="/images/services/tandem-jump.jpg"
              alt="Tandem Skydiving over Dallas Texas"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2 rounded-full bg-slate-950/70 backdrop-blur-md px-3.5 py-1.5 border border-white/10 text-xs font-bold">
                <ShieldCheck className="h-4 w-4 text-secondary" />
                <span>Sigma Tandem · Cypres 2 AAD</span>
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
