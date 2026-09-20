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
              className="flex flex-col gap-3 rounded-2xl border border-line bg-panel/50 p-6 transition-all hover:border-line-focus hover:bg-panel/75"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-ink">
                  {t(item.title, locale)}
                </h3>
              </div>
              <p className="text-xs text-dim leading-relaxed">
                {t(item.detail, locale)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
