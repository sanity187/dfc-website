import { Users, ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { bookingContent } from "@/lib/content/booking";
import { BookingExperienceTiers } from "./booking-experience-tiers";
import { BookingExperienceWeight } from "./booking-experience-weight";
import type { BookingState, PaymentType } from "./booking-types";

interface BookingStepExperienceProps {
  locale: Locale;
  state: BookingState;
  onChange: (updates: Partial<BookingState>) => void;
  onNext: () => void;
}

export function BookingStepExperience({ locale, state, onChange, onNext }: BookingStepExperienceProps) {
  const { experience } = bookingContent;

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-ink">{t(experience.title, locale)}</h2>
        <p className="text-xs sm:text-sm text-dim mt-1">{t(experience.subtitle, locale)}</p>
      </div>

      {/* 1. Jump Tier Selection */}
      <div className="flex flex-col gap-3">
        <label className="text-xs sm:text-sm font-bold text-ink uppercase tracking-wider">{t(experience.tiersTitle, locale)}</label>
        <BookingExperienceTiers
          locale={locale}
          selectedTier={state.tier}
          onSelectTier={(tier) => onChange({ tier })}
        />
      </div>

      {/* 2. Payment Preference Toggle */}
      <div className="flex flex-col gap-3">
        <label className="text-xs sm:text-sm font-bold text-ink uppercase tracking-wider">{t(experience.paymentToggleTitle, locale)}</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { id: "prepaid" as PaymentType, title: t(experience.prepayLabel, locale), badge: t(experience.prepayBadge, locale), note: "Best online pricing" },
            { id: "deposit" as PaymentType, title: t(experience.depositLabel, locale), badge: t(experience.depositBadge, locale), note: "Remaining balance due on jump day" },
          ].map((opt) => {
            const isSelected = state.paymentType === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onChange({ paymentType: opt.id })}
                className={`flex items-center justify-between p-4 rounded-2xl border transition-all text-left ${
                  isSelected
                    ? "bg-primary/5 dark:bg-primary/15 border-secondary ring-2 ring-secondary/40 shadow-sm"
                    : "bg-surface border-line hover:border-line-focus"
                }`}
              >
                <div>
                  <p className="font-bold text-ink text-sm sm:text-base">{opt.title}</p>
                  <p className="text-xs text-dim mt-0.5">{opt.note}</p>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-secondary text-canvas shrink-0 ml-2">{opt.badge}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Number of Jumpers */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-surface border border-line">
        <div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <h4 className="font-bold text-ink text-sm sm:text-base">{t(experience.jumpersTitle, locale)}</h4>
          </div>
          <p className="text-xs text-dim mt-1">{t(experience.jumpersHint, locale)}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={state.jumpers <= 1}
            onClick={() => onChange({ jumpers: Math.max(1, state.jumpers - 1), heavyJumpers: Math.min(state.heavyJumpers, state.jumpers - 1) })}
            className="w-10 h-10 rounded-xl bg-canvas border border-line flex items-center justify-center font-bold text-ink hover:bg-panel disabled:opacity-40"
          >
            -
          </button>
          <span className="w-8 text-center font-bold text-lg text-ink">{state.jumpers}</span>
          <button
            type="button"
            disabled={state.jumpers >= 12}
            onClick={() => onChange({ jumpers: state.jumpers + 1 })}
            className="w-10 h-10 rounded-xl bg-canvas border border-line flex items-center justify-center font-bold text-ink hover:bg-panel disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>

      {/* 4. Weight Screening (>200 lbs) */}
      <BookingExperienceWeight
        locale={locale}
        jumpers={state.jumpers}
        heavyJumpers={state.heavyJumpers}
        onChange={(count) => onChange({ heavyJumpers: count })}
      />

      {/* 5. Age Requirement */}
      <label className="flex items-start gap-3 p-4 rounded-2xl bg-canvas border border-line cursor-pointer select-none">
        <input
          type="checkbox"
          checked={state.ageConfirmed}
          onChange={(e) => onChange({ ageConfirmed: e.target.checked })}
          className="w-5 h-5 rounded border-line text-secondary focus:ring-secondary mt-0.5 shrink-0"
        />
        <div className="text-xs sm:text-sm">
          <span className="font-bold text-ink">{t(experience.ageConfirm, locale)}</span>
          <p className="text-xs text-dim mt-1">{t(experience.ageWarning, locale)}</p>
        </div>
      </label>

      {/* Next Button */}
      <button
        type="button"
        disabled={!state.ageConfirmed}
        onClick={onNext}
        className="w-full sm:w-auto self-end inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold bg-secondary hover:bg-secondary/90 text-canvas shadow-sm transition-transform active:scale-95 disabled:opacity-50"
      >
        <span>{t(bookingContent.actions.next, locale)}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
