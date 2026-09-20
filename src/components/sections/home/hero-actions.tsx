import Link from "next/link";
import { ArrowRight, ShieldCheck, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

interface HeroActionsProps {
  primaryCtaText: string;
  secondaryCtaText: string;
  locale: Locale;
}

export function HeroActions({
  primaryCtaText,
  secondaryCtaText,
  locale,
}: HeroActionsProps) {
  const isSpanish = locale === "es";
  const trustNote = isSpanish
    ? "Confirmación Inmediata · Sin Tarifas Ocultas · Paracaídas Doble"
    : "Instant Online Booking · No Hidden Fees · Dual Reserve Parachutes";

  return (
    <div className="flex flex-col items-center gap-2.5 sm:gap-3 w-full max-w-xl mx-auto">
      {/* Dual CTA Button Row */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full">
        {/* Primary Direct Booking Action */}
        <a
          href={siteConfig.bookingUrl}
          className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[190px] rounded-xl bg-secondary px-6 py-3 sm:py-3.5 text-sm sm:text-base font-extrabold text-secondary-foreground shadow-xl transition-all duration-200 hover:brightness-105 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>{primaryCtaText}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>

        {/* Secondary Informational Link */}
        <Link
          href={localizedPath(locale, "/tandem-skydiving")}
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[190px] rounded-xl border border-white/25 bg-black/40 px-5 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-white/15 hover:border-white/40"
        >
          <span>{secondaryCtaText}</span>
        </Link>
      </div>

      {/* Trust & Guarantee Micro-Indicator */}
      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300/90 text-center">
        <ShieldCheck className="h-3.5 w-3.5 text-secondary shrink-0" />
        <span>{trustNote}</span>
      </div>
    </div>
  );
}
