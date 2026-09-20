import type { LocalizedStatItem } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";

interface HeroStatsProps {
  stats: LocalizedStatItem[];
  locale: Locale;
}

export function HeroStats({ stats, locale }: HeroStatsProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="w-full max-w-5xl mx-auto pt-4 sm:pt-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, idx) => {
          const value = t(stat.value, locale);
          const label = t(stat.label, locale);
          const description = t(stat.description, locale);

          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-3.5 sm:p-4 rounded-xl border border-white/15 bg-black/40 backdrop-blur-md shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-secondary tracking-tight">
                {value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                {label}
              </div>
              <p className="mt-1 hidden sm:block text-[11px] leading-tight text-slate-300 line-clamp-2">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
