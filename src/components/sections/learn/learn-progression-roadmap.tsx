import {
  BookOpen,
  Users,
  Compass,
  Award,
  Check,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t, tList } from "@/lib/i18n/resolve";
import { SectionHeading } from "@/components/primitives/section-heading";
import { learnContent } from "@/lib/content/learn";

interface LearnProgressionRoadmapProps {
  locale: Locale;
}

export function LearnProgressionRoadmap({ locale }: LearnProgressionRoadmapProps) {
  const { progression } = learnContent;

  const iconMap: Record<string, typeof BookOpen> = {
    BookOpen,
    Users,
    Compass,
    Award,
  };

  return (
    <section aria-label="USPA AFF Progression Path" className="flex flex-col gap-10">
      <SectionHeading
        eyebrow={t(progression.eyebrow, locale)}
        title={t(progression.title, locale)}
        subtitle={t(progression.subtitle, locale)}
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {progression.stages.map((stage) => {
          const IconComponent = iconMap[stage.icon] || CheckCircle2;
          return (
            <div
              key={stage.stage}
              className="relative flex flex-col justify-between rounded-2xl border border-line bg-panel/50 p-6 transition-all hover:border-secondary/50 hover:bg-panel/85 hover:shadow-lg"
            >
              <div>
                {/* Header with Stage Number & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                    <IconComponent className="h-5 w-5" />
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-[10px] font-black uppercase text-secondary">
                      {t(stage.category, locale)}
                    </span>
                    <span className="text-2xl font-black text-ink/15 font-mono">
                      {stage.stage}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-ink tracking-tight mb-1">
                  {t(stage.title, locale)}
                </h3>
                <span className="inline-block text-xs font-semibold text-secondary mb-3">
                  {t(stage.subtitle, locale)}
                </span>

                <p className="text-xs text-dim leading-relaxed mb-5">
                  {t(stage.description, locale)}
                </p>

                {/* Core Learning Skills List */}
                <ul className="space-y-2 text-xs text-ink/90 mb-6">
                  {tList(stage.skills, locale).map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 shrink-0 text-secondary mt-0.5" />
                      <span className="leading-snug text-[11px]">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Milestone Highlight */}
              <div className="pt-4 border-t border-line/60">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-ink/90">
                  <Sparkles className="h-3.5 w-3.5 text-secondary shrink-0" />
                  <span className="leading-snug">{t(stage.highlight, locale)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
