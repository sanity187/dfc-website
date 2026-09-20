import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { siteConfig } from "@/lib/site-config";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

interface BrandLockupProps {
  locale?: Locale;
  className?: string;
  compact?: boolean;
}

export function BrandLockup({
  locale = "en",
  className = "",
  compact = false,
}: BrandLockupProps) {
  const href = localizedPath(locale, "/");

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3.5 py-1 transition-transform duration-200 hover:opacity-95 ${className}`}
      aria-label="Dallas Skydive Center Home"
    >
      <div className="relative shrink-0">
        <BrandMark
          className="h-10 w-10 sm:h-11 sm:w-11 transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
          size={44}
          priority
        />
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-base font-black tracking-tight text-ink uppercase sm:text-lg whitespace-nowrap">
            Dallas Skydive
          </span>
          <span className="text-base font-black tracking-tight text-secondary uppercase sm:text-lg whitespace-nowrap">
            Center
          </span>
        </div>

        {!compact && (
          <div className="mt-1 flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-dim uppercase">
            <span className="inline-block h-1 w-1 rounded-full bg-secondary" />
            <span>DFW · 14,000 FT DROPZONE</span>
          </div>
        )}
      </div>
    </Link>
  );
}
