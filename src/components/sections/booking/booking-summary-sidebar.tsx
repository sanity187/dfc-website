import { ShieldCheck, Calendar, Users, Camera, Sparkles } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { bookingContent } from "@/lib/content/booking";
import { calculateBookingPrices, type BookingState } from "./booking-types";

interface BookingSummarySidebarProps {
  locale: Locale;
  state: BookingState;
}

export function BookingSummarySidebar({ locale, state }: BookingSummarySidebarProps) {
  const { summary } = bookingContent;
  const prices = calculateBookingPrices(state);

  const tierNames = {
    "tandem-10k": locale === "es" ? "Salto Tándem Clásico (10k FT)" : "Classic Tandem Skydive (10k FT)",
    "tandem-vip": locale === "es" ? "Tándem VIP Extreme (13.5k FT)" : "VIP Extreme Tandem (13.5k FT)",
    "aff-solo": locale === "es" ? "Curso Solo AFF (Cat A)" : "AFF Solo Course (Cat A)",
  };

  const mediaNames = {
    none: locale === "es" ? "Sin Paquete Multimedia" : "No Media Package",
    single: locale === "es" ? "Video O Fotos ($89/saltador)" : "Video OR Photos ($89/jumper)",
    combo: locale === "es" ? "Combo 4K Video Y Fotos ($120/saltador)" : "4K Video & Photos Combo ($120/jumper)",
  };

  return (
    <div className="bg-surface border border-line rounded-3xl p-6 flex flex-col gap-6 shadow-sm sticky top-24">
      <div className="flex items-center justify-between border-b border-line/60 pb-4">
        <h3 className="font-bold text-ink text-base sm:text-lg">{t(summary.title, locale)}</h3>
        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary">
          {state.paymentType === "prepaid" ? "Prepay" : "$50 Deposit"}
        </span>
      </div>

      <div className="flex flex-col gap-3 text-xs sm:text-sm">
        <div className="flex items-center justify-between">
          <span className="text-dim">{tierNames[state.tier]} ({state.jumpers}x)</span>
          <span className="font-bold text-ink">${prices.baseTotal}</span>
        </div>

        {prices.savingsTotal > 0 && (
          <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t(summary.itemSavings, locale)}</span>
            </span>
            <span className="font-bold">-${prices.savingsTotal}</span>
          </div>
        )}

        {state.mediaPackage !== "none" && (
          <div className="flex items-center justify-between">
            <span className="text-dim">{mediaNames[state.mediaPackage]}</span>
            <span className="font-bold text-ink">${prices.mediaTotal}</span>
          </div>
        )}

        {prices.heavyFeeTotal > 0 && (
          <div className="flex items-center justify-between text-amber-700 dark:text-amber-300">
            <span>{t(summary.itemWeight, locale)} ({state.heavyJumpers}x)</span>
            <span className="font-bold">+${prices.heavyFeeTotal}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-dim">{t(summary.itemBookingFee, locale)}</span>
          <span className="font-bold text-ink">${prices.bookingFeeTotal}</span>
        </div>

        {state.date && (
          <div className="flex items-center gap-2 pt-2 text-xs text-dim border-t border-line/40">
            <Calendar className="w-3.5 h-3.5 text-secondary" />
            <span>
              {state.date} {state.timeSlot ? `· Wave ${state.timeSlot}` : ""}
            </span>
          </div>
        )}
      </div>

      <div className="border-t border-line/60 pt-4 flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs text-dim">
          <span>{t(summary.totalAmount, locale)}</span>
          <span className="font-bold text-ink text-sm">${prices.totalAmount}</span>
        </div>

        <div className="flex items-center justify-between text-base font-bold text-ink">
          <span>{t(summary.dueToday, locale)}</span>
          <span className="text-xl sm:text-2xl font-black text-secondary">${prices.dueToday}</span>
        </div>

        {prices.dueAtDropzone > 0 && (
          <div className="flex items-center justify-between text-xs text-dim">
            <span>{t(summary.dueAtDropzone, locale)}</span>
            <span className="font-bold text-ink">${prices.dueAtDropzone}</span>
          </div>
        )}
      </div>

      <div className="p-3.5 rounded-2xl bg-canvas border border-line flex flex-col gap-2 text-[11px] text-dim">
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>100% USPA Certified Dropzone</span>
        </div>
        <p>• Free reschedule with 48 hours notice</p>
        <p>• 100% Weather transferable for up to 1 year</p>
      </div>
    </div>
  );
}
