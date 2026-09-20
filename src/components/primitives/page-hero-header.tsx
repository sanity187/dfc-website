import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import { BreadcrumbTrail, type BreadcrumbItem } from "./breadcrumb-trail";
import { Eyebrow } from "./eyebrow";
import { DisplayTitle } from "./display-title";

interface PageHeroHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  locale: Locale;
  title: ReactNode;
  eyebrow?: string;
  subtitle?: string;
  badge?: string;
  action?: ReactNode;
  className?: string;
}

export function PageHeroHeader({
  breadcrumbs,
  locale,
  title,
  eyebrow,
  subtitle,
  badge,
  action,
  className = "",
}: PageHeroHeaderProps) {
  return (
    <section
      aria-label="Page Introduction"
      className={`relative overflow-hidden border-b border-line bg-panel/60 backdrop-blur-xs py-8 sm:py-12 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {/* Ambient Stratosphere Glow Accents */}
      <div
        className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-primary-subtle blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 right-10 h-64 w-64 rounded-full bg-secondary-subtle blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl w-full relative z-10 flex flex-col gap-5">
        {/* Breadcrumb Navigation Trail */}
        <BreadcrumbTrail items={breadcrumbs} locale={locale} />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-3xl">
            {eyebrow && <Eyebrow className="self-start">{eyebrow}</Eyebrow>}
            <DisplayTitle as="h1">{title}</DisplayTitle>
            {subtitle && (
              <p className="text-base sm:text-lg text-dim leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>

          {(badge || action) && (
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {badge && (
                <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-secondary">
                  {badge}
                </div>
              )}
              {action}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
