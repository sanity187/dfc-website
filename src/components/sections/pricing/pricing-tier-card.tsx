import Link from "next/link";
import { Check, Phone, ArrowRight, ShieldCheck, Flame } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t, tList } from "@/lib/i18n/resolve";
import { siteConfig } from "@/lib/site-config";
import type { PricingTierItem } from "@/lib/content/pricing";

interface PricingTierCardProps {
  item: PricingTierItem;
  mode: "prepay" | "deposit";
  locale: Locale;
  perPersonLabel: string;
  dueTodayLabel: string;
  dueAtDropzoneLabel: string;
  ctaPrepayLabel: string;
  ctaDepositLabel: string;
  ctaPhoneLabel: string;
}

export function PricingTierCard({
  item,
  mode,
  locale,
  perPersonLabel,
  dueTodayLabel,
  dueAtDropzoneLabel,
  ctaPrepayLabel,
  ctaDepositLabel,
  ctaPhoneLabel,
}: PricingTierCardProps) {
  const isPrepay = mode === "prepay";
  const displayPrice = isPrepay ? item.prepaidPrice : item.depositPrice;
  const balanceAtDropzone = item.depositPrice - 50;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 ${
        item.popular
          ? "border-secondary bg-panel/90 shadow-xl shadow-secondary/10 ring-1 ring-secondary/40"
          : "border-line bg-panel/50 hover:border-line-focus hover:bg-panel/80 hover:shadow-lg"
      }`}
    >
      {/* Badge Banner */}
      {item.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-0.5 text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-950 shadow-md whitespace-nowrap">
            <Flame className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            {t(item.badge, locale)}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <span className="inline-block rounded-md bg-secondary/15 px-2.5 py-1 text-xs font-extrabold uppercase tracking-wide text-secondary mb-2">
            {item.altitude}
          </span>
          <h3 className="text-xl font-bold tracking-tight text-ink">
            {t(item.name, locale)}
          </h3>
        </div>
        {isPrepay && (
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
            Save {item.savings}
          </span>
        )}
      </div>

      <p className="text-xs text-dim leading-relaxed mb-6 min-h-[36px]">
        {t(item.tagline, locale)}
      </p>

      {/* Price Block */}
      <div className="mb-6 rounded-xl bg-canvas/60 p-4 border border-line/60">
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl sm:text-4xl font-black tracking-tight text-ink">
            ${displayPrice}
          </span>
          <span className="text-xs font-semibold text-dim">{perPersonLabel}</span>
        </div>

        {!isPrepay ? (
          <div className="mt-2 text-xs font-medium text-secondary">
            <span className="font-bold">{dueTodayLabel}</span> · {dueAtDropzoneLabel} ${balanceAtDropzone}
          </div>
        ) : (
          <div className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5" />
            Best rate prepaid in full
          </div>
        )}
      </div>

      {/* Features List */}
      <ul className="flex-1 space-y-2.5 mb-6 text-xs text-ink/90">
        {tList(item.features, locale).map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <Check className="h-4 w-4 shrink-0 text-secondary mt-0.5" />
            <span className="leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Booking Note if any */}
      {item.bookingNote && (
        <p className="text-[11px] font-medium text-amber-500/90 mb-4 text-center">
          {t(item.bookingNote, locale)}
        </p>
      )}

      {/* Action Button */}
      {item.isPhoneOnly ? (
        <a
          href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-secondary/40 bg-secondary/15 py-3 text-xs font-black uppercase tracking-wider text-secondary hover:bg-secondary hover:text-slate-950 transition-colors"
        >
          <Phone className="h-4 w-4" />
          {ctaPhoneLabel}
        </a>
      ) : (
        <Link
          href={`/${locale}/book?plan=${item.id}&mode=${mode}`}
          className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-black uppercase tracking-wider transition-all duration-200 ${
            item.popular
              ? "bg-secondary text-slate-950 hover:bg-secondary-hover shadow-md shadow-secondary/20"
              : "border border-line bg-canvas hover:border-secondary hover:text-secondary text-ink"
          }`}
        >
          <span>{isPrepay ? ctaPrepayLabel : ctaDepositLabel}</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
