import {
  IdCard,
  Scale,
  ShieldAlert,
  Waves,
  HeartPulse,
  FileCheck,
  CheckCircle2,
} from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { SectionHeading } from "@/components/primitives/section-heading";
import { pricingContent } from "@/lib/content/pricing";

interface PricingRestrictionsProps {
  locale: Locale;
}

export function PricingRestrictionsSection({ locale }: PricingRestrictionsProps) {
  const items = pricingContent.restrictions.items;

  const iconMap: Record<string, typeof IdCard> = {
    IdCard,
    Scale,
    ShieldAlert,
    Waves,
    HeartPulse,
    FileCheck,
  };

  return (
    <section aria-label="Jumper Restrictions and Safety Requirements" className="flex flex-col gap-8">
      <SectionHeading
        eyebrow={t(pricingContent.restrictions.eyebrow, locale)}
        title={t(pricingContent.restrictions.title, locale)}
        subtitle={t(pricingContent.restrictions.subtitle, locale)}
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => {
          const IconComponent = iconMap[item.icon] || CheckCircle2;
          return (
            <div
              key={idx}
              className={`relative flex flex-col gap-3 rounded-2xl p-6 transition-all ${
                item.highlight
                  ? "border-2 border-secondary bg-panel shadow-[0_0_28px_rgba(251,167,19,0.22)] ring-1 ring-secondary/50"
                  : "border border-line bg-panel/50 hover:border-line-focus hover:bg-panel/75"
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
              <p
                className={`text-xs leading-relaxed ${
                  item.highlight ? "text-ink font-medium" : "text-dim"
                }`}
              >
                {t(item.detail, locale)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
