import { defaultLocale, isLocale, type Locale } from "./config";

// Map an app path to its localized URL. Default locale ('en') is clean (no prefix).
export function localizedPath(locale: Locale, path: string): string {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return normalized === "" ? "/" : normalized;
  }
  return `/${locale}${normalized}`;
}

// Remove locale prefix from a pathname, returning the base path
export function stripLocalePrefix(pathname: string, active: Locale): string {
  if (active === defaultLocale) {
    return pathname === "" ? "/" : pathname;
  }
  const stripped = pathname.replace(new RegExp(`^/${active}(?=/|$)`), "");
  return stripped === "" ? "/" : stripped;
}

// Extracts the first segment if it is a valid locale
export function localeFromPath(pathname: string): Locale | null {
  const segment = pathname.split("/")[1];
  return isLocale(segment) ? segment : null;
}
