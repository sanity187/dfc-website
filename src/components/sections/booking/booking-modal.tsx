"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { BookingModule } from "./booking-module";
import type { JumpTier } from "./booking-types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
  initialTier?: JumpTier;
}

export function BookingModal({ isOpen, onClose, locale, initialTier }: BookingModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-5xl rounded-3xl bg-surface border border-line shadow-2xl z-10 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-line/60 bg-canvas/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
            <span className="text-xs font-bold uppercase tracking-wider text-ink">
              {locale === "es" ? "Reserva Directa de Salto" : "Direct Flight Reservation"}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface border border-line flex items-center justify-center text-dim hover:text-ink hover:bg-canvas transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <BookingModule
          locale={locale}
          variant="modal"
          initialTier={initialTier}
          onClose={onClose}
        />
      </div>
    </div>
  );
}
