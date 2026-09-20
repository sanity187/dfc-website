import { Clock } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { bookingContent } from "@/lib/content/booking";

interface BookingTimeSlotsProps {
  locale: Locale;
  selectedSlot: string;
  onSelectSlot: (slotId: string) => void;
}

export function BookingTimeSlots({ locale, selectedSlot, onSelectSlot }: BookingTimeSlotsProps) {
  const { datetime } = bookingContent;

  const timeSlots = [
    { id: "08:30", label: t(datetime.timeSlotMorning, locale), slots: 6 },
    { id: "11:30", label: t(datetime.timeSlotMidday, locale), slots: 4 },
    { id: "14:00", label: t(datetime.timeSlotAfternoon, locale), slots: 8 },
    { id: "17:00", label: t(datetime.timeSlotSunset, locale), slots: 3 },
  ];

  return (
    <div className="flex flex-col gap-3 animate-in fade-in duration-200">
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5 text-primary" />
        <h3 className="text-xs sm:text-sm font-bold text-ink uppercase tracking-wider">
          {t(datetime.timeSlotsTitle, locale)}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {timeSlots.map((slot) => {
          const isSelected = selectedSlot === slot.id;
          return (
            <button
              key={slot.id}
              type="button"
              onClick={() => onSelectSlot(slot.id)}
              className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all text-left ${
                isSelected
                  ? "bg-primary/5 dark:bg-primary/15 border-secondary ring-2 ring-secondary/40 shadow-sm"
                  : "bg-surface border-line hover:border-line-focus"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-base text-ink">{slot.id}</span>
                <span className="text-xs text-dim">{slot.label}</span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full shrink-0">
                {slot.slots} {t(datetime.slotsAvailable, locale)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
