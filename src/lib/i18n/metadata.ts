import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { isLocale, locales, ogLocales, defaultLocale, type Locale } from "./config";
import { localizedPath } from "./paths";
import { t } from "./resolve";
import { siteMeta } from "@/lib/content/common";

export async function constructLocalizedMetadata(
  langPromise: Promise<{ lang: string }>
): Promise<Metadata> {
  const { lang } = await langPromise;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const descriptor = t(siteMeta.descriptor, locale);
  const description = t(siteMeta.description, locale);

  return {
    title: {
      default: `${siteConfig.name} — ${descriptor}`,
      template: `%s — ${siteConfig.name}`,
    },
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: localizedPath(locale, "/"),
      languages: {
        en: localizedPath("en", "/"),
        es: localizedPath("es", "/"),
      },
    },
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png" }],
      shortcut: "/favicon.png",
      apple: "/images/logo.png",
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: `${siteConfig.name} — ${descriptor}`,
      description,
      url: localizedPath(locale, "/"),
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
    },
  };
}
