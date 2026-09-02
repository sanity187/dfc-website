"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";
import { stripLocalePrefix, localizedPath } from "@/lib/i18n/paths";
import { useLocale } from "@/lib/i18n/locale-context";

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitch = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    // Set cookie for browser preference persistence
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000;SameSite=Lax`;

    // Calculate new path
    const basePath = stripLocalePrefix(pathname, currentLocale);
    const newPath = localizedPath(newLocale, basePath);

    router.push(newPath);
  };

  return (
    <nav
      className="inline-flex items-center gap-1 rounded-md border border-line bg-panel p-0.5 text-xs"
      aria-label="Language selection"
    >
      <Globe className="ml-1.5 h-3.5 w-3.5 text-dim shrink-0" aria-hidden="true" />
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => handleSwitch(locale)}
            aria-current={isActive ? "true" : undefined}
            className={`cursor-pointer rounded px-2 py-1 font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-dim hover:text-ink hover:bg-muted/60"
            }`}
            aria-label={`Switch language to ${localeNames[locale]}`}
          >
            {locale}
          </button>
        );
      })}
    </nav>
  );
}
