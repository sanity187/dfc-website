import { useMemo } from "react";
import { Calendar as CalendarIcon, ArrowRight, ArrowLeft } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { bookingContent } from "@/lib/content/booking";
import { getDayPricing, type BookingState } from "./booking-types";
import { BookingTimeSlots } from "./booking-time-slots";

interface BookingStepDateTimeProps {
  locale: Locale;
  state: BookingState;
  onChange: (updates: Partial<BookingState>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function BookingStepDateTime({ locale, state, onChange, onNext, onBack }: BookingStepDateTimeProps) {
  const { datetime } = bookingContent;

  const calendarDays = useMemo(() => {
    const days: { dateStr: string; dayNum: number; dayName: string; pricing: ReturnType<typeof getDayPricing> }[] = [];
    const today = new Date();

    for (let i = 1; i <= 21; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dateStr = d.toISOString().split("T")[0];
      const dayNum = d.getDate();
      const dayName = d.toLocaleDateString(locale === "es" ? "es-US" : "en-US", { weekday: "short" });
      const pricing = getDayPricing(dateStr, state.paymentType, state.tier);
      days.push({ dateStr, dayNum, dayName, pricing });
    }
    return days;
  }, [state.paymentType, state.tier, locale]);

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-ink">{t(datetime.title, locale)}</h2>
        <p className="text-xs sm:text-sm text-dim mt-1">{t(datetime.subtitle, locale)}</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-secondary" />
            <span className="text-xs sm:text-sm font-bold text-ink uppercase tracking-wider">
              {t(datetime.selectDatePrompt, locale)}
            </span>
          </div>
          <span className="text-xs text-secondary font-bold">
            {state.paymentType === "prepaid" ? "Prepay rates shown" : "Deposit rates shown"}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
          {calendarDays.map((item) => {
            const isSelected = state.date === item.dateStr;
            const isWed = item.pricing.isWednesday;

            return (
              <button
                key={item.dateStr}
                type="button"
                onClick={() => onChange({ date: item.dateStr })}
                className={`relative flex flex-col items-center justify-between p-3 rounded-2xl border transition-all text-center ${
                  isSelected
                    ? "bg-secondary text-canvas border-secondary shadow-md ring-2 ring-secondary/50 font-bold"
                    : isWed
                    ? "bg-secondary/10 border-secondary/40 hover:border-secondary text-ink"
                    : "bg-surface border-line hover:border-line-focus text-ink"
                }`}
              >
                {isWed && !isSelected && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded-full text-[9px] font-black uppercase bg-secondary text-canvas">
                    Save $20
                  </span>
                )}
                <span className={`text-[11px] uppercase ${isSelected ? "text-canvas/80" : "text-dim"}`}>{item.dayName}</span>
                <span className="text-lg font-black my-0.5">{item.dayNum}</span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isSelected ? "bg-canvas/20 text-canvas" : "bg-primary/10 text-primary dark:text-secondary"}`}>
                  ${item.pricing.price}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {state.date && (
        <BookingTimeSlots
          locale={locale}
          selectedSlot={state.timeSlot}
          onSelectSlot={(slotId) => onChange({ timeSlot: slotId })}
        />
      )}

      <div className="flex items-center justify-between gap-4 pt-4 border-t border-line/60">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-line bg-surface hover:bg-canvas text-ink transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t(bookingContent.actions.back, locale)}</span>
        </button>

        <button
          type="button"
          disabled={!state.date || !state.timeSlot}
          onClick={onNext}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold bg-secondary hover:bg-secondary/90 text-canvas shadow-sm transition-transform active:scale-95 disabled:opacity-50"
        >
          <span>{t(bookingContent.actions.next, locale)}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
