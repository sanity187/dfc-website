import { Check } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { bookingContent } from "@/lib/content/booking";

interface BookingStepperProps {
  locale: Locale;
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export function BookingStepper({ locale, currentStep, onStepClick }: BookingStepperProps) {
  const steps = [
    { number: 1, label: t(bookingContent.stepper.step1, locale) },
    { number: 2, label: t(bookingContent.stepper.step2, locale) },
    { number: 3, label: t(bookingContent.stepper.step3, locale) },
    { number: 4, label: t(bookingContent.stepper.step4, locale) },
    { number: 5, label: t(bookingContent.stepper.step5, locale) },
  ];

  return (
    <div className="w-full py-4 border-b border-line/60">
      <div className="flex items-center justify-between max-w-3xl mx-auto px-2 sm:px-4">
        {steps.map((s, index) => {
          const isCompleted = currentStep > s.number;
          const isActive = currentStep === s.number;
          const isClickable = isCompleted && onStepClick;

          return (
            <div key={s.number} className="flex items-center flex-1 last:flex-none">
              <button
                type="button"
                disabled={!isClickable}
                onClick={() => isClickable && onStepClick(s.number)}
                className={`flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5 transition-all text-left ${
                  isClickable ? "cursor-pointer group" : "cursor-default"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all shrink-0 ${
                    isCompleted
                      ? "bg-emerald-600 text-white"
                      : isActive
                      ? "bg-secondary text-canvas ring-4 ring-secondary/20 shadow-sm"
                      : "bg-surface border border-line text-dim"
                  }`}
                >
                  {isCompleted ? <Check className="w-4 h-4" /> : s.number}
                </div>

                <span
                  className={`text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-colors ${
                    isActive
                      ? "text-ink font-bold"
                      : isCompleted
                      ? "text-ink group-hover:text-primary"
                      : "text-dim"
                  }`}
                >
                  {s.label}
                </span>
              </button>

              {index < steps.length - 1 && (
                <div
                  className={`hidden sm:block flex-1 h-0.5 mx-3 sm:mx-4 transition-colors ${
                    currentStep > s.number ? "bg-emerald-600" : "bg-line"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
