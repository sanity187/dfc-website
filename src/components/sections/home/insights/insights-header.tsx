import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { insightsContent } from "@/lib/content/insights";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { DisplayTitle } from "@/components/primitives/display-title";

interface InsightsHeaderProps {
  locale: Locale;
}

export function InsightsHeader({ locale }: InsightsHeaderProps) {
  const articlesHref = localizedPath(locale, "/articles");

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="flex max-w-2xl flex-col gap-2.5">
        <Eyebrow>{t(insightsContent.eyebrow, locale)}</Eyebrow>
        <DisplayTitle as="h2">{t(insightsContent.title, locale)}</DisplayTitle>
        <p className="text-base sm:text-lg text-dim leading-relaxed">
          {t(insightsContent.subtitle, locale)}
        </p>
      </div>

      <div className="shrink-0">
        <Link
          href={articlesHref}
          className="group inline-flex items-center gap-2 rounded-xl border border-line-strong bg-panel px-5 py-3 text-sm font-bold text-ink shadow-xs transition-all duration-300 hover:border-primary/50 hover:bg-canvas hover:text-primary hover:shadow-md"
        >
          <BookOpen className="h-4 w-4 text-secondary transition-transform group-hover:scale-110" />
          <span>{t(insightsContent.viewAll, locale)}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
