import {
  ClipboardCheck,
  PlaneTakeoff,
  Wind,
  Award,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { SectionHeading } from "@/components/primitives/section-heading";
import { tandemContent } from "@/lib/content/tandem";

interface TandemExperienceTimelineProps {
  locale: Locale;
}

export function TandemExperienceTimeline({ locale }: TandemExperienceTimelineProps) {
  const { timeline } = tandemContent;

  const iconMap: Record<string, typeof ClipboardCheck> = {
    ClipboardCheck,
    PlaneTakeoff,
    Wind,
    Award,
  };

  return (
    <section aria-label="Tandem Jump Timeline" className="flex flex-col gap-10">
      <SectionHeading
        eyebrow={t(timeline.eyebrow, locale)}
        title={t(timeline.title, locale)}
        subtitle={t(timeline.subtitle, locale)}
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {timeline.steps.map((step) => {
          const IconComponent = iconMap[step.icon] || CheckCircle2;
          return (
            <div
              key={step.step}
              className="relative flex flex-col justify-between rounded-2xl border border-line bg-panel/50 p-6 transition-all hover:border-secondary/50 hover:bg-panel/85 hover:shadow-lg"
            >
              {/* Step Number Watermark & Icon Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                    <IconComponent className="h-5 w-5" />
                  </span>
                  <span className="text-3xl font-black text-ink/15 font-mono">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-ink tracking-tight mb-1">
                  {t(step.title, locale)}
                </h3>
                <span className="inline-block text-xs font-semibold text-secondary mb-3">
                  {t(step.subtitle, locale)}
                </span>

                <p className="text-xs text-dim leading-relaxed mb-6">
                  {t(step.description, locale)}
                </p>
              </div>

              {/* Bottom Feature Pill */}
              <div className="pt-4 border-t border-line/60">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-ink/90">
                  <Sparkles className="h-3.5 w-3.5 text-secondary shrink-0" />
                  <span className="leading-snug">{t(step.highlight, locale)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
