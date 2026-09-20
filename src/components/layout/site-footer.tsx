import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { navItems, footerContent, commonActions } from "@/lib/content/common";
import { siteConfig } from "@/lib/site-config";
import { BrandLockup } from "@/components/brand/brand-lockup";

interface SiteFooterProps {
  locale: Locale;
}

export function SiteFooter({ locale }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-panel transition-colors" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <BrandLockup locale={locale} variant="footer" />
            <p className="text-sm text-dim leading-relaxed max-w-sm">
              {t(footerContent.tagline, locale)}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-primary">
              <ShieldCheck className="h-4 w-4 text-secondary shrink-0" aria-hidden="true" />
              <span>{t(footerContent.uspaMember, locale)}</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink">
              {t(footerContent.quickLinks, locale)}
            </h3>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={localizedPath(locale, item.href)}
                    className="text-sm text-dim transition-colors hover:text-primary focus-visible:underline focus-visible:outline-none"
                  >
                    {t(item.label, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Location (3 cols) */}
          <div className="flex flex-col gap-3 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink">
              {t(footerContent.contactHeader, locale)}
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-dim">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" aria-hidden="true" />
                <a
                  href={siteConfig.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${siteConfig.address.formatted} on Google Maps`}
                  className="hover:text-ink transition-colors"
                >
                  {siteConfig.address.formatted}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  aria-label={`Call Dallas Skydive Center at ${siteConfig.phone}`}
                  className="hover:text-ink transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label={`Email Dallas Skydive Center at ${siteConfig.email}`}
                  className="hover:text-ink transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Hours & Booking (3 cols) */}
          <div className="flex flex-col gap-3 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink">
              {t(footerContent.hoursHeader, locale)}
            </h3>
            <div className="flex flex-col gap-2 text-sm text-dim">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                <div>
                  <p>Mon – Fri: {siteConfig.hours.weekday}</p>
                  <p>Sat – Sun: {siteConfig.hours.weekend}</p>
                </div>
              </div>
            </div>
            <a
              href={siteConfig.bookingUrl}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-secondary px-5 py-2.5 text-xs font-extrabold text-secondary-foreground shadow-md transition-all hover:opacity-95 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-secondary focus-visible:outline-none"
            >
              {t(commonActions.bookNow, locale)}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-dim sm:flex-row">
          <p>© {currentYear} {siteConfig.name}. {t(footerContent.rightsReserved, locale)}</p>
          <div className="flex items-center gap-4">
            <Link href={localizedPath(locale, "/contact")} className="hover:text-ink transition-colors">
              {t(footerContent.terms, locale)}
            </Link>
            <Link href={localizedPath(locale, "/contact")} className="hover:text-ink transition-colors">
              {t(footerContent.privacy, locale)}
            </Link>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              {t(footerContent.waiver, locale)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
