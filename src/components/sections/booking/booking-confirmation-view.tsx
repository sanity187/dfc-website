import { CheckCircle2, MapPin, Calendar, Clock, Users, ArrowRight, ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { bookingContent } from "@/lib/content/booking";
import { siteConfig } from "@/lib/site-config";
import type { BookingState } from "./booking-types";

interface BookingConfirmationViewProps {
  locale: Locale;
  state: BookingState;
  bookingRef: string;
  onReset: () => void;
}

export function BookingConfirmationView({ locale, state, bookingRef, onReset }: BookingConfirmationViewProps) {
  const { confirmation } = bookingContent;

  return (
    <div className="flex flex-col items-center text-center gap-8 py-8 animate-in fade-in zoom-in-95 duration-300 max-w-3xl mx-auto w-full">
      <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-inner">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-secondary">
          {t(confirmation.bookingRef, locale)} {bookingRef}
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-ink">{t(confirmation.title, locale)}</h2>
        <p className="text-xs sm:text-sm text-dim max-w-lg mx-auto">{t(confirmation.subtitle, locale)}</p>
      </div>

      {/* Reservation Details Card */}
      <div className="w-full bg-surface border border-line rounded-3xl p-6 sm:p-8 flex flex-col gap-6 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-line/60 pb-6">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-secondary shrink-0" />
            <div>
              <span className="text-xs text-dim block">Jump Date</span>
              <span className="font-bold text-ink text-sm sm:text-base">{state.date}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-secondary shrink-0" />
            <div>
              <span className="text-xs text-dim block">Check-In Wave</span>
              <span className="font-bold text-ink text-sm sm:text-base">{state.timeSlot} Wave</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-secondary shrink-0" />
            <div>
              <span className="text-xs text-dim block">Jumpers</span>
              <span className="font-bold text-ink text-sm sm:text-base">{state.jumpers} Participant{state.jumpers > 1 ? "s" : ""}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-ink text-sm">{siteConfig.address.formatted}</span>
              <span className="text-xs text-dim block">Caddo Mills Municipal Airport (FAA: 7F3) · Only 36 Miles from Dallas</span>
            </div>
          </div>
          <a
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-secondary hover:underline shrink-0"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>

      {/* What to Wear Checklist */}
      <div className="w-full bg-canvas border border-line rounded-3xl p-6 text-left flex flex-col gap-3">
        <h3 className="font-bold text-ink text-sm sm:text-base">{t(confirmation.whatToWearTitle, locale)}</h3>
        <ul className="flex flex-col gap-2">
          {confirmation.whatToWearItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-dim leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
              <span>{t(item, locale)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={onReset}
          className="px-8 py-3.5 rounded-full font-bold bg-secondary hover:bg-secondary/90 text-canvas shadow-sm transition-transform active:scale-95 text-sm"
        >
          {t(confirmation.bookAnotherBtn, locale)}
        </button>
      </div>
    </div>
  );
}
