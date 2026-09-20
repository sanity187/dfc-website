import { Quote } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { pricingContent } from "@/lib/content/pricing";

interface PricingQuoteBannerProps {
  locale: Locale;
}

export function PricingQuoteBanner({ locale }: PricingQuoteBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-secondary/30 bg-gradient-to-r from-secondary/15 via-secondary/10 to-primary/15 p-8 text-center shadow-lg">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-slate-950 shadow-md">
          <Quote className="h-6 w-6" />
        </div>
        <blockquote className="text-lg sm:text-xl font-bold italic tracking-tight text-ink">
          {t(pricingContent.quote.text, locale)}
        </blockquote>
        <p className="text-xs font-black uppercase tracking-widest text-secondary">
          — {pricingContent.quote.author}
        </p>
      </div>
    </div>
  );
}
