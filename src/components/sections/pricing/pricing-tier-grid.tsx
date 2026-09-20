"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { SectionHeading } from "@/components/primitives/section-heading";
import { pricingContent } from "@/lib/content/pricing";
import { PricingTierCard } from "./pricing-tier-card";
import { Sparkles, Info } from "lucide-react";

interface PricingTierGridProps {
  locale: Locale;
}

export function PricingTierGrid({ locale }: PricingTierGridProps) {
  const [mode, setMode] = useState<"prepay" | "deposit">("prepay");

  const prepayLabel = t(pricingContent.switcher.prepayLabel, locale);
  const depositLabel = t(pricingContent.switcher.depositLabel, locale);
  const depositNotice = t(pricingContent.switcher.depositNotice, locale);
  const prepayBadge = t(pricingContent.switcher.prepayBadge, locale);

  const perPersonLabel = t(pricingContent.tiers.perPerson, locale);
  const dueTodayLabel = t(pricingContent.tiers.dueToday, locale);
  const dueAtDropzoneLabel = t(pricingContent.tiers.dueAtDropzone, locale);
  const ctaPrepayLabel = t(pricingContent.tiers.ctaPrepay, locale);
  const ctaDepositLabel = t(pricingContent.tiers.ctaDeposit, locale);
  const ctaPhoneLabel = t(pricingContent.tiers.ctaPhone, locale);

  return (
    <section aria-label="Skydiving Pricing Packages" className="flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-3">
        <SectionHeading
          eyebrow={t(pricingContent.tiers.eyebrow, locale)}
          title={t(pricingContent.tiers.title, locale)}
          subtitle={t(pricingContent.tiers.subtitle, locale)}
          align="center"
        />

        {/* Rate Switcher Controls */}
        <div className="mt-4 inline-flex items-center rounded-full border border-line bg-panel p-1 shadow-inner">
          <button
            type="button"
            onClick={() => setMode("prepay")}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black transition-all ${
              mode === "prepay"
                ? "bg-secondary text-slate-950 shadow-sm"
                : "text-dim hover:text-ink"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>{prepayLabel}</span>
            <span className="hidden sm:inline-block rounded-full bg-slate-950/20 px-2 py-0.5 text-[10px] font-bold text-slate-950">
              {prepayBadge}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMode("deposit")}
            className={`rounded-full px-4 py-2 text-xs font-black transition-all ${
              mode === "deposit"
                ? "bg-secondary text-slate-950 shadow-sm"
                : "text-dim hover:text-ink"
            }`}
          >
            {depositLabel}
          </button>
        </div>

        {/* Informational Sub-banner */}
        {mode === "deposit" && (
          <div className="inline-flex items-center gap-2 rounded-lg bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 text-xs text-amber-500">
            <Info className="h-3.5 w-3.5 shrink-0" />
            <span>{depositNotice}</span>
          </div>
        )}
      </div>

      {/* Grid of 4 Pricing Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {pricingContent.tiers.items.map((item) => (
          <PricingTierCard
            key={item.id}
            item={item}
            mode={mode}
            locale={locale}
            perPersonLabel={perPersonLabel}
            dueTodayLabel={dueTodayLabel}
            dueAtDropzoneLabel={dueAtDropzoneLabel}
            ctaPrepayLabel={ctaPrepayLabel}
            ctaDepositLabel={ctaDepositLabel}
            ctaPhoneLabel={ctaPhoneLabel}
          />
        ))}
      </div>
    </section>
  );
}
