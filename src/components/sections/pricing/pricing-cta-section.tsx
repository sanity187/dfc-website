import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { siteConfig } from "@/lib/site-config";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { pricingContent } from "@/lib/content/pricing";

interface PricingCtaSectionProps {
  locale: Locale;
}

export function PricingCtaSection({ locale }: PricingCtaSectionProps) {
  const phoneClean = siteConfig.phone.replace(/[^0-9]/g, "");

  return (
    <section
      aria-label="Book Your Jump"
      className="relative overflow-hidden rounded-3xl border border-line bg-panel p-8 sm:p-12 text-center shadow-xl"
    >
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-4">
        <Eyebrow>{t(pricingContent.cta.eyebrow, locale)}</Eyebrow>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-ink">
          {t(pricingContent.cta.title, locale)}
        </h2>

        <p className="text-sm sm:text-base text-dim max-w-xl">
          {t(pricingContent.cta.subtitle, locale)}
        </p>

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href={`/${locale}/book`}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-3.5 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-secondary-hover shadow-lg shadow-secondary/20 transition-all"
          >
            <span>{t(pricingContent.cta.primaryBtn, locale)}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <a
            href={`tel:${phoneClean}`}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-line bg-canvas px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-ink hover:border-secondary hover:text-secondary transition-all"
          >
            <Phone className="h-4 w-4 text-secondary" />
            <span>{t(pricingContent.cta.phoneBtn, locale)}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
