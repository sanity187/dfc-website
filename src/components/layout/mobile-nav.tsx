"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Plane,
} from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { megaMenuContent } from "@/lib/content/mega-menu";
import { commonActions } from "@/lib/content/common";
import { siteConfig } from "@/lib/site-config";
import { BrandLockup } from "@/components/brand/brand-lockup";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";

interface MobileNavProps {
  locale: Locale;
}

export function MobileNav({ locale }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>("experiences");
  const isSpanish = locale === "es";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleDrawer = useCallback((e?: React.SyntheticEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setIsOpen((prev) => !prev);
  }, []);

  const closeDrawer = useCallback((e?: React.SyntheticEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setIsOpen(false);
  }, []);

  const toggleCategory = useCallback((id: string, e?: React.SyntheticEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setExpandedCategory((prev) => (prev === id ? null : id));
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeDrawer();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeDrawer]);

  return (
    <div className="lg:hidden">
      {/* Mobile Menu Trigger Button */}
      <button
        type="button"
        onClick={toggleDrawer}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label={isOpen ? t(commonActions.close, locale) : t(commonActions.menu, locale)}
        className="relative z-40 inline-flex h-11 w-11 min-h-[44px] min-w-[44px] cursor-pointer touch-manipulation select-none items-center justify-center rounded-xl border border-line bg-panel text-ink shadow-xs transition-all active:scale-95 active:bg-muted hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Fullscreen Mobile Navigation Drawer Mounted to Body via Portal */}
      {isOpen &&
        isMounted &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex h-[100dvh] w-screen flex-col bg-canvas text-ink overscroll-contain overflow-hidden shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            style={{ backgroundColor: "var(--canvas)" }}
          >
            {/* Top Header Bar: Clean Logo + Close Button */}
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-line px-4 sm:px-6 bg-panel">
              <BrandLockup locale={locale} compact />

              <button
                type="button"
                onClick={closeDrawer}
                className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] cursor-pointer touch-manipulation select-none items-center justify-center rounded-xl border border-line bg-canvas text-ink shadow-xs transition-all active:scale-95 active:bg-muted hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={t(commonActions.close, locale)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-5 overscroll-contain bg-canvas">
              {/* Dedicated Mobile Preferences Strip */}
              <div className="flex items-center justify-between rounded-xl border border-line bg-panel p-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-dim">
                  <Plane className="h-4 w-4 text-secondary" />
                  <span>{isSpanish ? "14,000 Pies Abierto" : "14,000 FT Daily"}</span>
                </div>

                <div className="flex items-center gap-2">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
              </div>

              {/* Accordion Categories */}
              <div className="flex flex-col divide-y divide-line/70 rounded-2xl border border-line bg-panel shadow-xs overflow-hidden">
                {megaMenuContent.categories.map((category) => {
                  const isExpanded = expandedCategory === category.id;
                  const label = t(category.label, locale);

                  return (
                    <div key={category.id} className="flex flex-col">
                      <button
                        type="button"
                        onClick={(e) => toggleCategory(category.id, e)}
                        className="flex items-center justify-between p-4 text-left font-bold text-ink cursor-pointer touch-manipulation hover:bg-muted/40 transition-colors"
                      >
                        <span className="text-base">{label}</span>
                        <ChevronDown
                          className={`h-4 w-4 text-dim transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-secondary" : ""
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="flex flex-col gap-2 p-3 bg-muted/30 border-t border-line/40">
                          {category.links.map((link, idx) => {
                            const title = t(link.title, locale);
                            const description = t(link.description, locale);
                            const badge = link.badge ? t(link.badge, locale) : undefined;

                            return (
                              <Link
                                key={idx}
                                href={localizedPath(locale, link.href)}
                                onClick={closeDrawer}
                                className="flex flex-col rounded-xl border border-line/50 bg-panel p-3 transition-colors hover:bg-muted/70 touch-manipulation"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-bold text-ink">{title}</span>
                                  {badge && (
                                    <span className="rounded-full bg-secondary/15 px-2 py-0.5 text-[10px] font-bold text-secondary">
                                      {badge}
                                    </span>
                                  )}
                                </div>
                                <span className="text-xs text-dim mt-1 leading-relaxed">
                                  {description}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Direct Links */}
                {megaMenuContent.directLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={localizedPath(locale, link.href)}
                    onClick={closeDrawer}
                    className="flex items-center justify-between p-4 text-base font-bold text-ink hover:bg-muted/40 transition-colors touch-manipulation"
                  >
                    <span>{t(link.label, locale)}</span>
                    <ArrowRight className="h-4 w-4 text-dim" />
                  </Link>
                ))}
              </div>

              {/* Baked-in Booking Panel */}
              <div className="rounded-2xl border border-secondary/30 bg-linear-to-br from-primary/10 via-panel to-secondary/10 p-5 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>14,000 FT Tandem Jumps</span>
                </div>

                <h4 className="text-lg font-black text-ink">
                  {t(megaMenuContent.quickBookPanel.title, locale)}
                </h4>
                <p className="mt-1 text-xs text-dim leading-relaxed">
                  {t(megaMenuContent.quickBookPanel.subtitle, locale)}
                </p>

                <a
                  href={siteConfig.bookingUrl}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-secondary py-3.5 text-sm font-black text-secondary-foreground shadow-md transition-transform active:scale-[0.98] touch-manipulation"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{t(commonActions.bookNow, locale)}</span>
                </a>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-panel py-3 text-xs font-bold text-ink transition-colors hover:bg-muted touch-manipulation"
                >
                  <Phone className="h-3.5 w-3.5 text-secondary" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-dim pt-2 pb-6">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Official USPA Certified Dropzone</span>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
