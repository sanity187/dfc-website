import { ArrowRight, Phone, Calendar } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { aboutContent } from "@/lib/content/about";
import { siteConfig } from "@/lib/site-config";
import { Eyebrow } from "@/components/primitives/eyebrow";

interface AboutCtaSectionProps {
  locale: Locale;
}

export function AboutCtaSection({ locale }: AboutCtaSectionProps) {
  const { cta } = aboutContent;

  return (
    <section
      aria-label="Ready to Skydive Booking CTA"
      className="relative overflow-hidden rounded-3xl border border-line-strong bg-linear-to-br from-primary/15 via-panel to-secondary/15 p-8 sm:p-12 text-center shadow-lg"
    >
      <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center gap-4">
        <Eyebrow>{t(cta.eyebrow, locale)}</Eyebrow>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink">
          {t(cta.title, locale)}
        </h2>

        <p className="max-w-xl text-sm sm:text-base text-dim leading-relaxed">
          {t(cta.subtitle, locale)}
        </p>

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <a
            href={siteConfig.bookingUrl}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-7 py-3.5 text-base font-extrabold text-secondary-foreground shadow-md transition-all hover:bg-secondary/90 hover:scale-105 active:scale-95"
          >
            <Calendar className="h-5 w-5" />
            <span>{t(cta.primaryBtn, locale)}</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-background/80 px-6 py-3.5 text-sm font-bold text-ink shadow-xs transition-colors hover:bg-background hover:text-primary"
          >
            <Phone className="h-4 w-4 text-secondary" />
            <span>{t(cta.phoneText, locale)}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
