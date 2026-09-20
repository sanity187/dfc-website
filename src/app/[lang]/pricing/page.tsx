import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { pricingContent } from "@/lib/content/pricing";
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
    title: t(pricingContent.title, locale),
    description: t(pricingContent.subtitle, locale),
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = t(pricingContent.title, locale);
  const breadcrumbItems = [{ label: title, href: "/pricing" }];
  const breadcrumbSchema = generateBreadcrumbJsonLd(locale, [
    { name: title, path: "/pricing" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PageHeroHeader
        breadcrumbs={breadcrumbItems}
        locale={locale}
        eyebrow={t(pricingContent.eyebrow, locale)}
        title={<span className="text-primary">{title}</span>}
        subtitle={t(pricingContent.subtitle, locale)}
        badge="No Hidden Fees · Highest Altitude Guaranteed"
      />
    </>
  );
}
