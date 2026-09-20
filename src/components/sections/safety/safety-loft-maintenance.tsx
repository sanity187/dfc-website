import { Wrench, CheckCircle2, ShieldAlert } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t, tList } from "@/lib/i18n/resolve";
import { SectionHeading } from "@/components/primitives/section-heading";
import { safetyContent } from "@/lib/content/safety";

interface SafetyLoftMaintenanceProps {
  locale: Locale;
}

export function SafetyLoftMaintenance({ locale }: SafetyLoftMaintenanceProps) {
  const { loft } = safetyContent;

  return (
    <section aria-label="In-House FAA Parachute Rigging Loft" className="flex flex-col gap-10">
      <SectionHeading
        eyebrow={t(loft.eyebrow, locale)}
        title={t(loft.title, locale)}
        subtitle={t(loft.subtitle, locale)}
        align="center"
      />

      <div className="rounded-3xl border border-line bg-panel/60 p-7 sm:p-10 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 rounded-xl bg-secondary/15 px-3.5 py-1.5 text-xs font-bold text-secondary w-fit">
              <Wrench className="h-4 w-4" />
              <span>FAA Certified Parachute Loft</span>
            </div>

            <p className="text-sm text-dim leading-relaxed">
              {t(loft.description, locale)}
            </p>

            <div className="rounded-2xl border border-line/70 bg-canvas/60 p-4 flex items-center gap-3 mt-2">
              <ShieldAlert className="h-5 w-5 text-secondary shrink-0" />
              <p className="text-xs text-ink/90 font-medium leading-relaxed">
                {locale === "es"
                  ? "Dos Master Riggers en activo supervisan cada empaque de paracaídas y prueba de arnés en nuestras instalaciones."
                  : "Two active FAA Master Riggers inspect every reserve canopy and test all harness assemblies right in our hangar."}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tList(loft.features, locale).map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-2xl border border-line/60 bg-panel/75 p-4 transition-all hover:border-secondary/40"
                >
                  <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-ink/90 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
