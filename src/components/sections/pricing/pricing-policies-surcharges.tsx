import { Scale, Fuel, CalendarClock, Tag } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { SectionHeading } from "@/components/primitives/section-heading";
import { pricingContent } from "@/lib/content/pricing";

interface PricingPoliciesProps {
  locale: Locale;
}

export function PricingPoliciesSurcharges({ locale }: PricingPoliciesProps) {
  const items = pricingContent.policies.items;

  const iconMap: Record<string, typeof Scale> = {
    heavy: Scale,
    "booking-fee": Fuel,
    reschedule: CalendarClock,
    "price-match": Tag,
  };

  return (
    <section aria-label="Dropzone Policies and Surcharges" className="flex flex-col gap-8">
      <SectionHeading
        eyebrow={t(pricingContent.policies.eyebrow, locale)}
        title={t(pricingContent.policies.title, locale)}
        subtitle={t(pricingContent.policies.subtitle, locale)}
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => {
          const IconComponent = iconMap[item.id] || Tag;
          return (
            <div
              key={item.id}
              className={`relative flex flex-col rounded-2xl p-6 transition-all ${
                item.highlight
                  ? "border-2 border-secondary bg-panel shadow-[0_0_28px_rgba(251,167,19,0.22)] ring-1 ring-secondary/50"
                  : "border border-line bg-panel/50 hover:bg-panel/80 hover:border-line-focus"
              }`}
            >
              {item.highlight && (
                <>
                  {/* Slow flash breathing glow aura */}
                  <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-secondary/50 via-amber-400/35 to-secondary/50 blur-sm opacity-75 animate-pulse" />
                  {/* Floating eye-catching badge with live pulse indicator */}
                  {item.badge && (
                    <div className="absolute -top-3.5 right-4 z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[11px] font-black uppercase tracking-wider text-slate-950 shadow-md ring-2 ring-canvas">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950" />
                        </span>
                        {t(item.badge, locale)}
                      </span>
                    </div>
                  )}
                </>
              )}

              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
                      item.highlight
                        ? "bg-secondary text-slate-950 shadow-md ring-2 ring-secondary/40"
                        : "bg-secondary/15 text-secondary"
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3
                    className={`text-base font-bold text-ink ${
                      item.highlight ? "font-black tracking-tight" : ""
                    }`}
                  >
                    {t(item.title, locale)}
                  </h3>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-black shrink-0 transition-all ${
                    item.highlight
                      ? "bg-secondary text-slate-950 shadow-sm"
                      : "border border-secondary/30 bg-secondary/15 text-secondary"
                  }`}
                >
                  {item.amount}
                </span>
              </div>

              <p
                className={`text-xs leading-relaxed ${
                  item.highlight ? "text-ink font-medium" : "text-dim"
                }`}
              >
                {t(item.description, locale)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
