import { Calendar } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { commonActions } from "@/lib/content/common";
import { siteConfig } from "@/lib/site-config";
import { BrandLockup } from "@/components/brand/brand-lockup";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { TopUtilityBar } from "./top-utility-bar";

interface SiteHeaderProps {
  locale: Locale;
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const bookNow = t(commonActions.bookNow, locale);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-background/95 backdrop-blur-xl transition-colors">
      {/* Aviation Top Utility Bar */}
      <TopUtilityBar locale={locale} />

      {/* Main Navigation Bar */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Lockup */}
        <div className="shrink-0">
          <BrandLockup locale={locale} />
        </div>

        {/* Center: Desktop Mega Menu Navigation */}
        <DesktopNav locale={locale} />

        {/* Right: Gold CTA Button */}
        <div className="hidden items-center gap-4 lg:flex shrink-0">
          <a
            href={siteConfig.bookingUrl}
            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-2.5 text-sm font-black whitespace-nowrap text-secondary-foreground shadow-md transition-all hover:opacity-95 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calendar className="h-4 w-4" />
            <span>{bookNow}</span>
          </a>
        </div>

        {/* Mobile Navigation Drawer Trigger */}
        <MobileNav locale={locale} />
      </div>
    </header>
  );
}
