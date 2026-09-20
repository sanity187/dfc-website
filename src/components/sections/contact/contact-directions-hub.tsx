import { Car, Clock, Compass, CheckCircle2 } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { contactContent } from "@/lib/content/contact";
import { SectionHeading } from "@/components/primitives/section-heading";

interface ContactDirectionsHubProps {
  locale: Locale;
}

export function ContactDirectionsHub({ locale }: ContactDirectionsHubProps) {
  const { directions } = contactContent;

  return (
    <section className="flex flex-col gap-12">
      <SectionHeading
        eyebrow={t(directions.eyebrow, locale)}
        title={t(directions.title, locale)}
        subtitle={t(directions.subtitle, locale)}
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {directions.routes.map((route, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between bg-surface border border-line/70 rounded-3xl p-6 sm:p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between gap-2 border-b border-line/50 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Car className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-ink text-base sm:text-lg">
                    {t(route.origin, locale)}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-primary dark:text-secondary">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-dim" />
                  <span>{t(route.time, locale)}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Compass className="w-4 h-4 text-dim" />
                  <span>{route.distance}</span>
                </div>
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                {t(route.route, locale)}
              </p>

              <ol className="flex flex-col gap-3.5 mt-2">
                {route.steps.map((step, stepIdx) => (
                  <li key={stepIdx} className="flex items-start gap-3 text-xs sm:text-sm text-dim leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-canvas border border-line text-ink font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      {stepIdx + 1}
                    </span>
                    <span>{t(step, locale)}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 pt-4 border-t border-line/40 flex items-center gap-2 text-xs text-dim">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>
                {locale === "es"
                  ? "Pavimentado y señalizado hasta la pista"
                  : "Fully paved access direct to hangar parking"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
