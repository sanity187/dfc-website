import { Zap, DoorOpen, Compass, Radio, Wrench, CheckCircle2 } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { SectionHeading } from "@/components/primitives/section-heading";
import { safetyContent } from "@/lib/content/safety";

interface SafetyAircraftShowcaseProps {
  locale: Locale;
}

export function SafetyAircraftShowcase({ locale }: SafetyAircraftShowcaseProps) {
  const { fleet, maintenance } = safetyContent;

  const iconMap: Record<string, typeof Zap> = {
    Zap,
    DoorOpen,
    Compass,
    Radio,
  };

  return (
    <section aria-label="Super Cessna 182 Jump Fleet" className="flex flex-col gap-10">
      <SectionHeading
        eyebrow={t(fleet.eyebrow, locale)}
        title={t(fleet.title, locale)}
        subtitle={t(fleet.subtitle, locale)}
        align="center"
      />

      {/* Fleet Narrative Banner */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm text-dim leading-relaxed">
          {t(fleet.fleetDescription, locale)}
        </p>
      </div>

      {/* 4 Super 182 Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fleet.features.map((feature, idx) => {
          const IconComponent = iconMap[feature.icon] || CheckCircle2;
          return (
            <div
              key={idx}
              className="flex flex-col rounded-2xl border border-line bg-panel/50 p-6 sm:p-7 transition-all hover:border-secondary/40 hover:bg-panel/80 hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary shrink-0">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-ink">
                  {t(feature.title, locale)}
                </h3>
              </div>
              <p className="text-xs text-dim leading-relaxed">
                {t(feature.description, locale)}
              </p>
            </div>
          );
        })}
      </div>

      {/* Maintenance Inspection Assurance Box */}
      <div className="rounded-3xl border border-secondary/30 bg-secondary/10 p-6 sm:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-slate-950 shrink-0 shadow-md">
              <Wrench className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-ink">
                {t(maintenance.title, locale)}
              </h4>
              <p className="text-xs text-dim mt-1 leading-relaxed max-w-2xl">
                {t(maintenance.description, locale)}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6 pt-6 border-t border-secondary/20">
          {maintenance.points.map((point, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-ink/90 font-medium">
              <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
              <span className="leading-snug">{t(point, locale)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
