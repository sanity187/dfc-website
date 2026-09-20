import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { homeContent } from "@/lib/content/home";
import { HeroBackground, type HeroBackgroundOptions } from "./hero-background";
import { HeroBadge } from "./hero-badge";
import { HeroHeadline } from "./hero-headline";
import { HeroActions } from "./hero-actions";
import { HeroStats } from "./hero-stats";

interface HomeHeroProps {
  locale: Locale;
  tintAmount?: number;
  backgroundOptions?: Partial<HeroBackgroundOptions>;
}

export function HomeHero({
  locale,
  tintAmount,
  backgroundOptions,
}: HomeHeroProps) {
  const { hero, stats } = homeContent;

  return (
    <section
      aria-label="Dallas Skydive Center Home Introduction"
      className="relative min-h-[calc(100svh-7.5rem)] w-full flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 border-b border-black/10 dark:border-transparent"
    >
      {/* 1. Full-bleed Ambient & Video Background Layer */}
      <HeroBackground
        videoEnabled={backgroundOptions?.videoEnabled ?? true}
        videoId={backgroundOptions?.videoId ?? "j2ie9XfyRr0"}
        startTime={backgroundOptions?.startTime ?? 1}
        endTime={backgroundOptions?.endTime ?? 900}
        playbackRate={backgroundOptions?.playbackRate ?? 1.5}
        loop={backgroundOptions?.loop ?? true}
        muted={backgroundOptions?.muted ?? true}
        tintAmount={tintAmount ?? backgroundOptions?.tintAmount ?? 0.65}
        tintClassName={backgroundOptions?.tintClassName}
      />

      {/* 2. Main Hero Interactive & Scannable Content Container */}
      <div className="relative z-10 mx-auto max-w-5xl w-full flex flex-col items-center justify-center gap-4 sm:gap-5 lg:gap-6 my-auto">
        <HeroBadge
          eyebrow={t(hero.eyebrow, locale)}
          altitudeCallout={t(hero.altitudeCallout, locale)}
        />

        <HeroHeadline
          titlePrimary={t(hero.titlePrimary, locale)}
          titleSecondary={t(hero.titleSecondary, locale)}
          subtitle={t(hero.subtitle, locale)}
        />

        <HeroActions
          primaryCtaText={t(hero.ctaPrimary, locale)}
          secondaryCtaText={t(hero.ctaSecondary, locale)}
          locale={locale}
        />

        <HeroStats stats={stats} locale={locale} />
      </div>
    </section>
  );
}
