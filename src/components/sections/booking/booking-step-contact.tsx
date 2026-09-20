import { ArrowRight, ArrowLeft } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { bookingContent } from "@/lib/content/booking";
import type { BookingState } from "./booking-types";

interface BookingStepContactProps {
  locale: Locale;
  state: BookingState;
  onChange: (updates: Partial<BookingState>) => void;
  onNext: () => void;
  onBack: () => void;
}

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-canvas border border-line focus:outline-none focus:ring-2 focus:ring-primary text-ink placeholder:text-dim/60 text-sm";

export function BookingStepContact({ locale, state, onChange, onNext, onBack }: BookingStepContactProps) {
  const { contact } = bookingContent;

  const handleContactChange = (field: keyof BookingState["contact"], val: string) => {
    onChange({
      contact: { ...state.contact, [field]: val },
    });
  };

  const isFormValid =
    state.contact.firstName.trim() !== "" &&
    state.contact.lastName.trim() !== "" &&
    state.contact.email.trim() !== "" &&
    state.contact.phone.trim() !== "";

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-ink">{t(contact.title, locale)}</h2>
        <p className="text-xs sm:text-sm text-dim mt-1">{t(contact.subtitle, locale)}</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-ink">{t(contact.firstNameLabel, locale)} *</label>
            <input
              type="text"
              required
              value={state.contact.firstName}
              onChange={(e) => handleContactChange("firstName", e.target.value)}
              placeholder="e.g. John"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-ink">{t(contact.lastNameLabel, locale)} *</label>
            <input
              type="text"
              required
              value={state.contact.lastName}
              onChange={(e) => handleContactChange("lastName", e.target.value)}
              placeholder="e.g. Doe"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-ink">{t(contact.emailLabel, locale)} *</label>
            <input
              type="email"
              required
              value={state.contact.email}
              onChange={(e) => handleContactChange("email", e.target.value)}
              placeholder="john@example.com"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-ink">{t(contact.phoneLabel, locale)} *</label>
            <input
              type="tel"
              required
              value={state.contact.phone}
              onChange={(e) => handleContactChange("phone", e.target.value)}
              placeholder="(972) 555-0199"
              className={inputClass}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-ink">{t(contact.occasionLabel, locale)}</label>
          <input
            type="text"
            value={state.contact.occasion}
            onChange={(e) => handleContactChange("occasion", e.target.value)}
            placeholder={t(contact.occasionPlaceholder, locale)}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-ink">{t(contact.notesLabel, locale)}</label>
          <textarea
            rows={3}
            value={state.contact.notes}
            onChange={(e) => handleContactChange("notes", e.target.value)}
            placeholder={t(contact.notesPlaceholder, locale)}
            className={`${inputClass} resize-y`}
          />
        </div>
      </div>

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
          disabled={!isFormValid}
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
