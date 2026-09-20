import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbTrailProps {
  items: BreadcrumbItem[];
  locale: Locale;
  className?: string;
}

export function BreadcrumbTrail({
  items,
  locale,
  className = "",
}: BreadcrumbTrailProps) {
  const homeLabel = locale === "es" ? "Inicio" : "Home";
  const homeHref = localizedPath(locale, "/");

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-xs font-semibold text-dim ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        <li>
          <Link
            href={homeHref}
            className="flex items-center gap-1.5 transition-colors hover:text-primary text-dim/80"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only sm:not-sr-only sm:inline">{homeLabel}</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const href = item.href ? localizedPath(locale, item.href) : undefined;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5 sm:gap-2">
              <ChevronRight
                className="h-3 w-3 text-dim/40 shrink-0"
                aria-hidden="true"
              />
              {isLast || !href ? (
                <span
                  className="font-bold text-ink truncate max-w-[200px] sm:max-w-none"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="transition-colors hover:text-primary truncate max-w-[160px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
