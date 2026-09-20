import { Lock, CreditCard } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { bookingContent } from "@/lib/content/booking";

export interface CardFormData {
  name: string;
  number: string;
  expiry: string;
  cvc: string;
  zip: string;
}

interface BookingPaymentCardFieldsProps {
  locale: Locale;
  cardData: CardFormData;
  onChange: (field: keyof CardFormData, val: string) => void;
}

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-canvas border border-line focus:outline-none focus:ring-2 focus:ring-primary text-ink placeholder:text-dim/60 text-sm";

export function BookingPaymentCardFields({
  locale,
  cardData,
  onChange,
}: BookingPaymentCardFieldsProps) {
  const { payment } = bookingContent;

  return (
    <div className="p-6 rounded-3xl bg-surface border border-line flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-line/60 pb-3">
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-secondary" />
          <span className="text-xs sm:text-sm font-bold text-ink uppercase tracking-wider">
            Credit or Debit Card
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-dim">
          <Lock className="w-3.5 h-3.5 text-emerald-500" />
          <span>256-bit SSL</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-ink">{t(payment.cardholderLabel, locale)}</label>
        <input
          type="text"
          required
          value={cardData.name}
          onChange={(e) => onChange("name", e.target.value)}
          placeholder="Name on card"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-ink">{t(payment.cardNumberLabel, locale)}</label>
        <input
          type="text"
          required
          maxLength={19}
          value={cardData.number}
          onChange={(e) => onChange("number", e.target.value)}
          placeholder="4111 2222 3333 4444"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-ink">{t(payment.expiryLabel, locale)}</label>
          <input
            type="text"
            required
            maxLength={5}
            value={cardData.expiry}
            onChange={(e) => onChange("expiry", e.target.value)}
            placeholder="MM/YY"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-ink">{t(payment.cvcLabel, locale)}</label>
          <input
            type="text"
            required
            maxLength={4}
            value={cardData.cvc}
            onChange={(e) => onChange("cvc", e.target.value)}
            placeholder="CVC"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-ink">{t(payment.zipLabel, locale)}</label>
          <input
            type="text"
            required
            maxLength={10}
            value={cardData.zip}
            onChange={(e) => onChange("zip", e.target.value)}
            placeholder="ZIP"
            className={inputClass}
          />
        </div>
      </div>
    </div>
  );
}
