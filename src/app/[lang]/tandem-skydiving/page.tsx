import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { tandemContent } from "@/lib/content/tandem";
import { PageHeroHeader } from "@/components/primitives/page-hero-header";
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
    title: t(tandemContent.title, locale),
    description: t(tandemContent.intro, locale),
  };
}

export default async function TandemSkydivingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = t(tandemContent.title, locale);
  const breadcrumbItems = [{ label: title, href: "/tandem-skydiving" }];
  const breadcrumbSchema = generateBreadcrumbJsonLd(locale, [
    { name: title, path: "/tandem-skydiving" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PageHeroHeader
        breadcrumbs={breadcrumbItems}
        locale={locale}
        eyebrow={t(tandemContent.eyebrow, locale)}
        title={<span className="text-primary">{title}</span>}
        subtitle={t(tandemContent.subtitle, locale)}
        badge="14,000 FT Tandem Jump"
      />
    </>
  );
}
