import { ShieldCheck, Cpu, Check, Sparkles } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t, tList } from "@/lib/i18n/resolve";
import { SectionHeading } from "@/components/primitives/section-heading";
import { safetyContent } from "@/lib/content/safety";

interface SafetyGearSystemsProps {
  locale: Locale;
}

export function SafetyGearSystems({ locale }: SafetyGearSystemsProps) {
  const { gear } = safetyContent;

  return (
    <section aria-label="Dual Parachute Systems and Gear" className="flex flex-col gap-10">
      <SectionHeading
        eyebrow={t(gear.eyebrow, locale)}
        title={t(gear.title, locale)}
        subtitle={t(gear.subtitle, locale)}
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {gear.items.map((item) => (
          <div
            key={item.id}
            className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all ${
              item.highlight
                ? "border-2 border-secondary bg-panel shadow-xl shadow-secondary/10 ring-1 ring-secondary/40"
                : "border border-line bg-panel/50 hover:border-line-focus hover:bg-panel/80 hover:shadow-md"
            }`}
          >
            {item.badge && (
              <div className="absolute -top-3.5 right-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-slate-950 shadow-md">
                  <Sparkles className="h-3 w-3" />
                  {t(item.badge, locale)}
                </span>
              </div>
            )}

            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary shrink-0">
                  {item.id === "sigma" ? (
                    <ShieldCheck className="h-6 w-6" />
                  ) : (
                    <Cpu className="h-6 w-6" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink tracking-tight">
                    {t(item.title, locale)}
                  </h3>
                  <span className="text-xs font-semibold text-secondary">
                    {t(item.subtitle, locale)}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-dim leading-relaxed mb-6">
                {t(item.description, locale)}
              </p>

              <div className="border-t border-line/60 pt-5 mb-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-ink/70 mb-3 block">
                  {locale === "es" ? "Especificaciones de Seguridad" : "Safety Specifications"}
                </span>
                <ul className="space-y-2.5 text-xs text-ink/90">
                  {tList(item.specs, locale).map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-secondary mt-0.5" />
                      <span className="leading-snug">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
