import { useState } from "react";
import { Lock, Loader2, ArrowLeft } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { bookingContent } from "@/lib/content/booking";
import { calculateBookingPrices, type BookingState } from "./booking-types";
import { BookingPaymentCardFields, type CardFormData } from "./booking-payment-card-fields";

interface BookingStepPaymentProps {
  locale: Locale;
  state: BookingState;
  onBack: () => void;
  onSuccess: (bookingRef: string) => void;
}

export function BookingStepPayment({ locale, state, onBack, onSuccess }: BookingStepPaymentProps) {
  const { payment } = bookingContent;
  const prices = calculateBookingPrices(state);
  const [processing, setProcessing] = useState(false);
  const [cardData, setCardData] = useState<CardFormData>({
    name: `${state.contact.firstName} ${state.contact.lastName}`.trim(),
    number: "",
    expiry: "",
    cvc: "",
    zip: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      const randomRef = `DSC-${Math.floor(100000 + Math.random() * 900000)}`;
      onSuccess(randomRef);
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 animate-in fade-in duration-300">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-ink">{t(payment.title, locale)}</h2>
        <p className="text-xs sm:text-sm text-dim mt-1">{t(payment.subtitle, locale)}</p>
      </div>

      {/* Due Today Banner */}
      <div className="p-5 rounded-2xl bg-primary/5 dark:bg-primary/15 border border-secondary/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            {state.paymentType === "prepaid" ? "Full Online Prepay" : "Deposit Reservation"}
          </span>
          <p className="text-xs text-dim mt-1">
            {state.paymentType === "prepaid"
              ? "All jump fees settled today with online savings applied."
              : `$50 deposit + $5 booking fee per person today. $${prices.dueAtDropzone} balance due at dropzone check-in.`}
          </p>
        </div>
        <div className="text-left sm:text-right shrink-0">
          <span className="text-xs text-dim block">Due Today</span>
          <span className="text-3xl font-black text-secondary">${prices.dueToday}</span>
        </div>
      </div>

      {/* Card Inputs Sub-Component */}
      <BookingPaymentCardFields
        locale={locale}
        cardData={cardData}
        onChange={(field, val) => setCardData({ ...cardData, [field]: val })}
      />

      <p className="text-xs text-dim text-center">{t(payment.cancellationPolicy, locale)}</p>

      {/* Action Buttons */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-line/60">
        <button
          type="button"
          disabled={processing}
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-line bg-surface hover:bg-canvas text-ink transition-colors disabled:opacity-50"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t(bookingContent.actions.back, locale)}</span>
        </button>

        <button
          type="submit"
          disabled={processing}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider bg-secondary hover:bg-secondary/90 text-canvas shadow-lg transition-transform active:scale-95 disabled:opacity-70"
        >
          {processing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>{t(payment.processingBtn, locale)}</span>
            </>
          ) : (
            <>
              <Lock className="w-4 h-4" />
              <span>Pay ${prices.dueToday} & Confirm</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
