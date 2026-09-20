import { Camera, Video, Sparkles, Check, ArrowRight, ArrowLeft } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { bookingContent } from "@/lib/content/booking";
import type { BookingState, MediaPackage } from "./booking-types";

interface BookingStepMediaProps {
  locale: Locale;
  state: BookingState;
  onChange: (updates: Partial<BookingState>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function BookingStepMedia({ locale, state, onChange, onNext, onBack }: BookingStepMediaProps) {
  const { media } = bookingContent;

  const packages: { id: MediaPackage; title: string; desc: string; price: string; badge?: string; icon: typeof Camera }[] = [
    {
      id: "combo",
      title: t(media.comboTitle, locale),
      desc: t(media.comboDesc, locale),
      price: "$120",
      badge: t(media.comboBadge, locale),
      icon: Sparkles,
    },
    {
      id: "single",
      title: t(media.singleTitle, locale),
      desc: t(media.singleDesc, locale),
      price: "$89",
      badge: t(media.singleBadge, locale),
      icon: Video,
    },
    {
      id: "none",
      title: t(media.noMediaTitle, locale),
      desc: t(media.noMediaDesc, locale),
      price: "$0",
      icon: Camera,
    },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-ink">{t(media.title, locale)}</h2>
        <p className="text-xs sm:text-sm text-dim mt-1">{t(media.subtitle, locale)}</p>
      </div>

      <div className="p-3.5 rounded-2xl bg-secondary/10 border border-secondary/30 flex items-center gap-3">
        <Sparkles className="w-5 h-5 text-secondary shrink-0" />
        <p className="text-xs sm:text-sm font-semibold text-ink leading-relaxed">{t(media.discountNotice, locale)}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {packages.map((pkg) => {
          const isSelected = state.mediaPackage === pkg.id;
          const Icon = pkg.icon;

          return (
            <button
              key={pkg.id}
              type="button"
              onClick={() => onChange({ mediaPackage: pkg.id })}
              className={`relative flex flex-col justify-between p-5 rounded-3xl border text-left transition-all ${
                isSelected
                  ? "bg-primary/5 dark:bg-primary/15 border-secondary ring-2 ring-secondary/50 shadow-md"
                  : "bg-surface border-line hover:border-line-focus"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? "bg-secondary text-canvas" : "bg-primary/10 text-primary"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {pkg.badge && (
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-secondary text-canvas">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-ink text-base sm:text-lg">{pkg.title}</h3>
                <p className="text-xs text-dim mt-2 leading-relaxed">{pkg.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-line/40 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-black text-ink">{pkg.price}</span>
                  <span className="text-xs text-dim ml-1">/ {locale === "es" ? "saltador" : "jumper"}</span>
                </div>
                {isSelected && <Check className="w-5 h-5 text-secondary" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation Buttons */}
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
          onClick={onNext}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold bg-secondary hover:bg-secondary/90 text-canvas shadow-sm transition-transform active:scale-95"
        >
          <span>{t(bookingContent.actions.next, locale)}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
