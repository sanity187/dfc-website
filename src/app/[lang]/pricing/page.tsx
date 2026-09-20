import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { pricingContent } from "@/lib/content/pricing";
import { PageHeroHeader } from "@/components/primitives/page-hero-header";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbJsonLd } from "@/lib/i18n/structured-data";
import { siteConfig } from "@/lib/site-config";
import { PricingTierGrid } from "@/components/sections/pricing/pricing-tier-grid";
import { PricingMediaSection } from "@/components/sections/pricing/pricing-media-section";
import { PricingPoliciesSurcharges } from "@/components/sections/pricing/pricing-policies-surcharges";
import { PricingQuoteBanner } from "@/components/sections/pricing/pricing-quote-banner";
import { PricingRestrictionsSection } from "@/components/sections/pricing/pricing-restrictions-section";
import { PricingCtaSection } from "@/components/sections/pricing/pricing-cta-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  return {
    title: t(pricingContent.header.title, locale),
    description: t(pricingContent.header.subtitle, locale),
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = t(pricingContent.header.title, locale);
  const breadcrumbItems = [{ label: title, href: "/pricing" }];
  const breadcrumbSchema = generateBreadcrumbJsonLd(locale, [
    { name: title, path: "/pricing" },
  ]);

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    name: "Dallas Tandem Skydiving Packages",
    description: t(pricingContent.header.subtitle, locale),
    minPrice: "199.00",
    maxPrice: "339.00",
    priceCurrency: "USD",
    seller: {
      "@type": "SportsActivityLocation",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: "US",
      },
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={pricingSchema} />

      <PageHeroHeader
        breadcrumbs={breadcrumbItems}
        locale={locale}
        eyebrow={t(pricingContent.header.eyebrow, locale)}
        title={<span className="text-primary">{title}</span>}
        subtitle={t(pricingContent.header.subtitle, locale)}
        badge={t(pricingContent.header.badge, locale)}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 flex flex-col gap-16 sm:gap-24">
        <PricingTierGrid locale={locale} />
        <PricingMediaSection locale={locale} />
        <PricingQuoteBanner locale={locale} />
        <PricingPoliciesSurcharges locale={locale} />
        <PricingRestrictionsSection locale={locale} />
        <PricingCtaSection locale={locale} />
      </div>
    </>
  );
}
