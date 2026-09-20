"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { BookingStepper } from "./booking-stepper";
import { BookingStepExperience } from "./booking-step-experience";
import { BookingStepDateTime } from "./booking-step-datetime";
import { BookingStepMedia } from "./booking-step-media";
import { BookingStepContact } from "./booking-step-contact";
import { BookingStepPayment } from "./booking-step-payment";
import { BookingSummarySidebar } from "./booking-summary-sidebar";
import { BookingConfirmationView } from "./booking-confirmation-view";
import { createDefaultBookingState, type BookingState, type JumpTier } from "./booking-types";

interface BookingModuleProps {
  locale: Locale;
  variant?: "page" | "modal" | "embedded";
  initialTier?: JumpTier;
  onClose?: () => void;
}

export function BookingModule({
  locale,
  variant = "page",
  initialTier = "tandem-10k",
  onClose,
}: BookingModuleProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingRef, setBookingRef] = useState<string | null>(null);
  const [state, setState] = useState<BookingState>(() => createDefaultBookingState(initialTier));

  const handleUpdate = (updates: Partial<BookingState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const handleReset = () => {
    setBookingRef(null);
    setCurrentStep(1);
    setState(createDefaultBookingState("tandem-10k"));
  };

  const isModal = variant === "modal";

  return (
    <div className={`w-full flex flex-col gap-6 ${isModal ? "p-4 sm:p-6 max-h-[85vh] overflow-y-auto" : ""}`}>
      {!bookingRef && (
        <BookingStepper
          locale={locale}
          currentStep={currentStep}
          onStepClick={(step) => setCurrentStep(step)}
        />
      )}

      {bookingRef ? (
        <BookingConfirmationView
          locale={locale}
          state={state}
          bookingRef={bookingRef}
          onReset={handleReset}
        />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 flex flex-col">
            {currentStep === 1 && (
              <BookingStepExperience
                locale={locale}
                state={state}
                onChange={handleUpdate}
                onNext={() => setCurrentStep(2)}
              />
            )}
            {currentStep === 2 && (
              <BookingStepDateTime
                locale={locale}
                state={state}
                onChange={handleUpdate}
                onNext={() => setCurrentStep(3)}
                onBack={() => setCurrentStep(1)}
              />
            )}
            {currentStep === 3 && (
              <BookingStepMedia
                locale={locale}
                state={state}
                onChange={handleUpdate}
                onNext={() => setCurrentStep(4)}
                onBack={() => setCurrentStep(2)}
              />
            )}
            {currentStep === 4 && (
              <BookingStepContact
                locale={locale}
                state={state}
                onChange={handleUpdate}
                onNext={() => setCurrentStep(5)}
                onBack={() => setCurrentStep(3)}
              />
            )}
            {currentStep === 5 && (
              <BookingStepPayment
                locale={locale}
                state={state}
                onBack={() => setCurrentStep(4)}
                onSuccess={(ref) => setBookingRef(ref)}
              />
            )}
          </div>

          <div className="lg:col-span-4">
            <BookingSummarySidebar locale={locale} state={state} />
          </div>
        </div>
      )}
    </div>
  );
}
