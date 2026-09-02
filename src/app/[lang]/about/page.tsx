import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { aboutContent } from "@/lib/content/about";
import { PageShell } from "@/components/primitives/page-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbJsonLd } from "@/lib/i18n/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  return {
    title: t(aboutContent.title, locale),
    description: t(aboutContent.subtitle, locale),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = t(aboutContent.title, locale);
  const breadcrumbs = generateBreadcrumbJsonLd(locale, [
    { name: title, path: "/about" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageShell
        eyebrow={t(aboutContent.eyebrow, locale)}
        title={<span className="text-primary">{title}</span>}
        subtitle={t(aboutContent.subtitle, locale)}
        badge="25+ Years of Aviation Excellence"
      />
    </>
  );
}
