import { Zap, Gauge, Radio, Wrench, Sparkles, CheckCircle2 } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { SectionHeading } from "@/components/primitives/section-heading";
import { learnContent } from "@/lib/content/learn";

interface LearnFundamentalsGridProps {
  locale: Locale;
}

export function LearnFundamentalsGrid({ locale }: LearnFundamentalsGridProps) {
  const { fundamentals } = learnContent;

  const iconMap: Record<string, typeof Zap> = {
    Zap,
    Gauge,
    Radio,
    Wrench,
  };

  return (
    <section aria-label="Core Flight Fundamentals" className="flex flex-col gap-10">
      <SectionHeading
        eyebrow={t(fundamentals.eyebrow, locale)}
        title={t(fundamentals.title, locale)}
        subtitle={t(fundamentals.subtitle, locale)}
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fundamentals.items.map((item) => {
          const IconComponent = iconMap[item.icon] || CheckCircle2;
          return (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-line bg-panel/50 p-6 sm:p-7 transition-all hover:border-secondary/40 hover:bg-panel/80 hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/15 text-secondary shrink-0">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-ink">
                      {t(item.title, locale)}
                    </h3>
                    <span className="text-xs font-semibold text-secondary">
                      {t(item.subtitle, locale)}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-dim leading-relaxed mb-6">
                  {t(item.description, locale)}
                </p>
              </div>

              {/* Pro-Tip Box */}
              <div className="rounded-xl border border-line/60 bg-canvas/60 p-3.5 flex items-center gap-2 text-xs font-semibold text-ink/90">
                <Sparkles className="h-4 w-4 text-secondary shrink-0" />
                <span className="leading-snug">{t(item.tip, locale)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
