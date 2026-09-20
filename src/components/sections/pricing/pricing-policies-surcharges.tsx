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
              className={`flex flex-col rounded-2xl border p-6 transition-all ${
                item.highlight
                  ? "border-amber-500/40 bg-amber-500/5 ring-1 ring-amber-500/20"
                  : "border-line bg-panel/50 hover:bg-panel/80 hover:border-line-focus"
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-ink">
                    {t(item.title, locale)}
                  </h3>
                </div>
                <span className="rounded-full border border-secondary/30 bg-secondary/15 px-3 py-1 text-xs font-black text-secondary shrink-0">
                  {item.amount}
                </span>
              </div>

              <p className="text-xs text-dim leading-relaxed">
                {t(item.description, locale)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
