import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";
import { localeFromPath, stripLocalePrefix } from "@/lib/i18n/paths";

// Parse Accept-Language header and detect supported locale
function detectLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    const match = locales.find((locale) => locale === base);
    if (match) return match;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host") || "";
  const searchParams = request.nextUrl.searchParams;

  // 1. Check if request is hitting the 'landing' subdomain
  // Supports landing.dallasskydivecenter.com, landing.localhost:3000, or ?subdomain=landing
  const isLandingSubdomain =
    host.startsWith("landing.") ||
    host.startsWith("landing-") ||
    host.includes("landing.localhost") ||
    searchParams.get("subdomain") === "landing";

  if (isLandingSubdomain) {
    const pathLocale = localeFromPath(pathname);

    // Default locale prefix in URL (/en/...) is redirected to clean path
    if (pathLocale === defaultLocale) {
      const url = request.nextUrl.clone();
      const cleanPath = stripLocalePrefix(pathname, defaultLocale);
      url.pathname = cleanPath === "" ? "/" : cleanPath;
      return NextResponse.redirect(url);
    }

    // Explicit non-default locale prefix (e.g. /es/promo)
    if (pathLocale) {
      const base = stripLocalePrefix(pathname, pathLocale);
      const url = request.nextUrl.clone();
      url.pathname = `/landing/${pathLocale}${base === "/" ? "" : base}`;
      return NextResponse.rewrite(url);
    }

    // No locale prefix on subdomain: detect preferred language
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
    const preferred = isLocale(cookieLocale) ? cookieLocale : detectLocale(request);

    if (preferred === defaultLocale) {
      // Internal rewrite to /landing/en/...
      const url = request.nextUrl.clone();
      url.pathname = `/landing/en${pathname === "/" ? "" : pathname}`;
      return NextResponse.rewrite(url);
    }

    // Redirect to prefixed /es/... on subdomain
    const url = request.nextUrl.clone();
    url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  // 2. Main Site: Block direct access to /landing on apex/www
  if (pathname.startsWith("/landing")) {
    const notFoundUrl = request.nextUrl.clone();
    notFoundUrl.pathname = "/_not-found";
    return NextResponse.rewrite(notFoundUrl);
  }

  // 3. Main Site Locale Routing
  const pathLocale = localeFromPath(pathname);

  // Default locale is clean in URL: redirect /en/* -> /*
  if (pathLocale === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(new RegExp(`^/${defaultLocale}(?=/|$)`), "") || "/";
    return NextResponse.redirect(url);
  }

  // Non-default locale (e.g. /es) is served as-is
  if (pathLocale) {
    return NextResponse.next();
  }

  // No locale in path: check cookie or header
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const preferred = isLocale(cookieLocale) ? cookieLocale : detectLocale(request);

  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;

  // Default locale users keep clean URL via internal rewrite to [lang]
  if (preferred === defaultLocale) {
    return NextResponse.rewrite(url);
  }

  // Spanish users get redirected to /es/*
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next.js internal files, api routes, static assets, and favicon
  matcher: ["/((?!_next|api|favicon\\.ico|icon\\.svg|.*\\..*).*)"],
};
