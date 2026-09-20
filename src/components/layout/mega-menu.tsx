"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Plane,
  Camera,
  Sun,
  Users,
  Award,
  ShieldCheck,
  MapPin,
  Compass,
  GraduationCap,
  Wind,
  ArrowRight,
  Sparkles,
  Phone,
  Calendar,
  BookOpen,
  HelpCircle,
} from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { megaMenuContent, LocalizedMegaMenuLink } from "@/lib/content/mega-menu";
import { commonActions } from "@/lib/content/common";
import { siteConfig } from "@/lib/site-config";

interface MegaMenuProps {
  locale: Locale;
  content: typeof megaMenuContent;
}

function getIcon(name: LocalizedMegaMenuLink["iconName"]) {
  const props = { className: "h-4 w-4 shrink-0 text-primary" };
  switch (name) {
    case "plane":
      return <Plane {...props} />;
    case "camera":
      return <Camera {...props} />;
    case "sun":
      return <Sun {...props} />;
    case "users":
      return <Users {...props} />;
    case "award":
      return <Award {...props} />;
    case "shield":
      return <ShieldCheck {...props} />;
    case "map":
      return <MapPin {...props} />;
    case "compass":
      return <Compass {...props} />;
    case "graduation":
      return <GraduationCap {...props} />;
    case "wind":
      return <Wind {...props} />;
    case "book-open":
      return <BookOpen {...props} />;
    case "help-circle":
      return <HelpCircle {...props} />;
    default:
      return <Sparkles {...props} />;
  }
}

export function MegaMenu({ locale, content }: MegaMenuProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveTab(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveTab(null);
    }, 180);
  };

  const closeMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveTab(null);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const skydivingCat = content.categories.find((c) => c.id === "skydiving") || content.categories[0];
  const otherCats = content.categories.filter((c) => c.id !== skydivingCat?.id);

  const renderTrigger = (category: (typeof content.categories)[0]) => {
    const isOpen = activeTab === category.id;
    const label = t(category.label, locale);

    return (
      <div
        key={category.id}
        onMouseEnter={() => handleMouseEnter(category.id)}
        className="relative"
      >
        <button
          type="button"
          onClick={() => setActiveTab(isOpen ? null : category.id)}
          className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold whitespace-nowrap cursor-pointer transition-all ${
            isOpen
              ? "bg-primary text-primary-foreground shadow-xs"
              : "text-ink hover:bg-muted/70"
          }`}
          aria-expanded={isOpen}
        >
          <span>{label}</span>
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-secondary" : "text-dim"
            }`}
          />
        </button>
      </div>
    );
  };

  const pricingLink = content.directLinks.find((l) => l.href === "/pricing");
  const contactLink = content.directLinks.find((l) => l.href === "/contact");

  return (
    <div
      ref={menuRef}
      onMouseLeave={handleMouseLeave}
      className="hidden lg:flex items-center gap-1.5 xl:gap-2.5"
    >
      {/* 1. Skydiving Category */}
      {skydivingCat && renderTrigger(skydivingCat)}

      {/* 2. Direct Nav Link: Pricing */}
      {pricingLink && (
        <Link
          key={pricingLink.href}
          href={localizedPath(locale, pricingLink.href)}
          className="rounded-lg px-3.5 py-2 text-sm font-semibold whitespace-nowrap text-ink transition-colors hover:bg-muted/70"
        >
          {t(pricingLink.label, locale)}
        </Link>
      )}

      {/* 3. The Dropzone & Articles Categories */}
      {otherCats.map(renderTrigger)}

      {/* 4. Direct Nav Link: Contact */}
      {contactLink && (
        <Link
          key={contactLink.href}
          href={localizedPath(locale, contactLink.href)}
          className="rounded-lg px-3.5 py-2 text-sm font-semibold whitespace-nowrap text-ink transition-colors hover:bg-muted/70"
        >
          {t(contactLink.label, locale)}
        </Link>
      )}

      {/* Floating Mega Dropdown Canvas */}
      {activeTab && (
        <div
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          className="absolute left-0 top-full w-full border-b border-line bg-panel/95 backdrop-blur-xl shadow-2xl transition-all animate-in fade-in-10 slide-in-from-top-2 duration-200 z-50"
        >
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {content.categories
              .filter((c) => c.id === activeTab)
              .map((category) => (
                <div
                  key={category.id}
                  className="grid grid-cols-12 gap-8 items-stretch"
                >
                  {/* Left Column: 2x2 Links Grid */}
                  <div className="col-span-8 grid grid-cols-2 gap-4">
                    {category.links.map((link, idx) => {
                      const title = t(link.title, locale);
                      const description = t(link.description, locale);
                      const badge = link.badge ? t(link.badge, locale) : undefined;

                      return (
                        <Link
                          key={idx}
                          href={localizedPath(locale, link.href)}
                          onClick={closeMenu}
                          className="group flex flex-col justify-between rounded-xl border border-line/60 bg-background/50 p-4 transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-sm"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2.5 mb-1.5">
                              <div className="flex items-start gap-2.5 min-w-0 flex-1">
                                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-panel shadow-xs border border-line shrink-0 mt-0.5">
                                  {getIcon(link.iconName)}
                                </div>
                                <span className="text-sm font-bold text-ink group-hover:text-primary transition-colors leading-snug">
                                  {title}
                                </span>
                              </div>
                              {badge && (
                                <span className="shrink-0 whitespace-nowrap rounded-full bg-secondary/15 border border-secondary/30 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-secondary leading-none mt-0.5">
                                  {badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-dim leading-relaxed pl-9.5">
                              {description}
                            </p>
                          </div>

                          <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100 pl-9.5">
                            <span>Explore</span>
                            <ArrowRight className="h-3 w-3" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Right Column: Featured Hero Card with Visual Accent */}
                  <div className="col-span-4 rounded-2xl border border-primary/20 bg-linear-to-br from-primary/10 via-background to-secondary/10 p-5 flex flex-col justify-between shadow-xs relative overflow-hidden">
                    <div
                      className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-secondary/10 blur-2xl pointer-events-none"
                      aria-hidden="true"
                    />

                    <div>
                      {category.featured.imageUrl && (
                        <div className="relative mb-3 h-32 w-full overflow-hidden rounded-xl border border-line shadow-xs">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={category.featured.imageUrl}
                            alt={category.featured.imageAlt || "Featured Article"}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      )}

                      <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[10px] font-black uppercase tracking-widest text-secondary-foreground">
                        <Sparkles className="h-3 w-3" />
                        <span>{t(category.featured.tag, locale)}</span>
                      </div>

                      <h4 className="mt-3 text-lg font-black tracking-tight text-ink leading-snug">
                        {t(category.featured.title, locale)}
                      </h4>

                      <p className="mt-1.5 text-xs text-dim leading-relaxed line-clamp-2">
                        {t(category.featured.description, locale)}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                      <Link
                        href={localizedPath(locale, category.featured.href)}
                        onClick={closeMenu}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-bold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span>{t(category.featured.cta, locale)}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>

                      <div className="flex items-center justify-between border-t border-line/60 pt-3 text-xs text-dim">
                        <a
                          href={`tel:${siteConfig.phoneRaw}`}
                          className="flex items-center gap-1.5 font-semibold hover:text-ink"
                        >
                          <Phone className="h-3.5 w-3.5 text-secondary" />
                          <span>{siteConfig.phone}</span>
                        </a>
                        <Link
                          href={`/${locale}/book`}
                          onClick={closeMenu}
                          className="flex items-center gap-1.5 font-bold text-secondary hover:underline"
                        >
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{t(commonActions.bookNow, locale)}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
