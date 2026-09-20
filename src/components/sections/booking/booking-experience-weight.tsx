import { AlertTriangle } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { bookingContent } from "@/lib/content/booking";

interface BookingExperienceWeightProps {
  locale: Locale;
  jumpers: number;
  heavyJumpers: number;
  onChange: (count: number) => void;
}

export function BookingExperienceWeight({
  locale,
  jumpers,
  heavyJumpers,
  onChange,
}: BookingExperienceWeightProps) {
  const { experience } = bookingContent;

  return (
    <div className="p-4 rounded-2xl bg-surface border border-line flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-ink text-sm sm:text-base">{t(experience.weightTitle, locale)}</h4>
          <p className="text-xs text-dim mt-0.5">{t(experience.weightQuestion, locale)}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            disabled={heavyJumpers <= 0}
            onClick={() => onChange(Math.max(0, heavyJumpers - 1))}
            className="w-10 h-10 rounded-xl bg-canvas border border-line flex items-center justify-center font-bold text-ink hover:bg-panel disabled:opacity-40"
          >
            -
          </button>
          <span className="w-8 text-center font-bold text-lg text-ink">{heavyJumpers}</span>
          <button
            type="button"
            disabled={heavyJumpers >= jumpers}
            onClick={() => onChange(Math.min(jumpers, heavyJumpers + 1))}
            className="w-10 h-10 rounded-xl bg-canvas border border-line flex items-center justify-center font-bold text-ink hover:bg-panel disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>
      <p className="text-xs text-dim leading-relaxed">{t(experience.weightHelp, locale)}</p>
      <div className="flex items-start gap-2 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300">
        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
        <span>{t(experience.weightLimitWarning, locale)}</span>
      </div>
    </div>
  );
}
