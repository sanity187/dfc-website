import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

interface BrandLockupProps {
  locale?: Locale;
  className?: string;
  compact?: boolean;
  variant?: "header" | "footer";
}

export function BrandLockup({
  locale = "en",
  className = "",
  compact = false,
  variant = "header",
}: BrandLockupProps) {
  const href = localizedPath(locale, "/");
  const isFooter = variant === "footer";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 sm:gap-3 transition-all duration-300 hover:opacity-95 max-w-full ${className}`}
      aria-label="Dallas Skydive Center Home"
    >
      {/* Brand Mark Emblem */}
      <div className="relative shrink-0 flex items-center justify-center">
        <BrandMark
          className={`object-contain transition-all duration-300 ease-in-out group-hover:scale-105 drop-shadow-sm ${
            isFooter
              ? "h-11 w-11 sm:h-12 sm:w-12"
              : compact
              ? "h-11 w-11 sm:h-12 sm:w-12"
              : "h-14 w-14 sm:h-[66px] sm:w-[66px]"
          }`}
          size={isFooter || compact ? 48 : 72}
          priority={!isFooter}
        />
      </div>

      {/* Brand Text Lockup */}
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 leading-none">
          <span
            className={`font-black tracking-tight text-ink uppercase transition-all duration-300 ${
              isFooter
                ? "text-base sm:text-lg"
                : compact
                ? "text-base sm:text-lg"
                : "text-lg sm:text-xl"
            }`}
          >
            Dallas Skydive
          </span>
          <span
            className={`font-black tracking-tight text-secondary uppercase transition-all duration-300 ${
              isFooter
                ? "text-base sm:text-lg"
                : compact
                ? "text-base sm:text-lg"
                : "text-lg sm:text-xl"
            }`}
          >
            Center
          </span>
        </div>

        <div
          className={`flex items-center gap-1.5 font-bold tracking-wider text-dim uppercase transition-all duration-300 ${
            isFooter || compact
              ? "mt-0.5 text-[9px] sm:text-[10px]"
              : "mt-1 text-[10px] sm:text-[11px]"
          }`}
        >
          <span className="inline-block h-1 w-1 rounded-full bg-secondary shrink-0" />
          <span className="truncate">DFW · 14,000 FT DROPZONE</span>
        </div>
      </div>
    </Link>
  );
}
