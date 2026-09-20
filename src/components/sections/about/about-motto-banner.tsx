import { Flame } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { aboutContent } from "@/lib/content/about";

interface AboutMottoBannerProps {
  locale: Locale;
}

export function AboutMottoBanner({ locale }: AboutMottoBannerProps) {
  const { motto } = aboutContent;

  return (
    <section
      aria-label="Dallas Skydive Center Motto"
      className="relative overflow-hidden rounded-3xl border border-secondary/30 bg-panel px-6 py-10 sm:py-14 sm:px-12 text-center shadow-lg"
    >
      {/* Background glow and subtle ambient accents */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-r from-secondary/5 via-primary/5 to-secondary/5 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center gap-4">
        {/* Top Emblem Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-secondary-foreground backdrop-blur-md">
          <Flame className="h-4 w-4 text-secondary animate-pulse" />
          <span>{t(motto.subphrase, locale)}</span>
        </div>

        {/* The Signature Motto */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-ink uppercase drop-shadow-xs">
          <span>&ldquo;</span>
          <span className="text-secondary bg-linear-to-r from-amber-500 via-secondary to-amber-400 bg-clip-text text-transparent">
            {t(motto.phrase, locale)}
          </span>
          <span>&rdquo;</span>
        </h2>

        {/* Supporting Philosophy */}
        <p className="max-w-2xl text-base sm:text-lg text-dim leading-relaxed font-medium">
          {t(motto.callout, locale)}
        </p>
      </div>
    </section>
  );
}
