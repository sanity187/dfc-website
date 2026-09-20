import { MapPin, Phone, Plane } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site-config";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";

interface TopUtilityBarProps {
  locale: Locale;
  collapsed?: boolean;
}

export function TopUtilityBar({ locale, collapsed = false }: TopUtilityBarProps) {
  const isSpanish = locale === "es";

  return (
    <div
      className={`hidden bg-muted/60 text-xs font-medium text-dim overflow-hidden transition-all duration-300 ease-in-out md:block border-b ${
        collapsed
          ? "h-0 opacity-0 -translate-y-2 pointer-events-none border-transparent"
          : "h-9 opacity-100 translate-y-0 border-line/60"
      }`}
      aria-hidden={collapsed}
    >
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Side: Location & Aviation Dropzone Status */}
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dallas Skydive Center dropzone location in Caddo Mills, Texas"
            className="flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            <MapPin className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
            <span>
              {isSpanish
                ? "Caddo Mills, TX · A 36 Millas de Dallas"
                : "Caddo Mills, TX · 36 Miles from Downtown Dallas"}
            </span>
          </a>

          <span className="h-3 w-px bg-line" aria-hidden="true" />

          <div className="flex items-center gap-1.5 text-ink font-semibold">
            <Plane className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>
              {isSpanish
                ? "Operaciones de Salto: 14,000 Pies Abierto"
                : "Dropzone Operations: 14,000 FT Active"}
            </span>
          </div>
        </div>

        {/* Right Side: Hotline Phone, Language Switcher, Theme Toggle */}
        <div className="flex items-center gap-3.5">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            aria-label={`Call Dallas Skydive Center flight line at ${siteConfig.phone}`}
            className="flex items-center gap-1.5 font-bold text-ink transition-colors hover:text-secondary"
          >
            <Phone className="h-3 w-3 text-secondary" aria-hidden="true" />
            <span>{siteConfig.phone}</span>
          </a>

          <span className="h-3.5 w-px bg-line" aria-hidden="true" />

          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
