import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { tandemContent } from "@/lib/content/tandem";
import { PageHeroHeader } from "@/components/primitives/page-hero-header";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbJsonLd } from "@/lib/i18n/structured-data";
import { siteConfig } from "@/lib/site-config";

// Section Components
import { TandemOverviewSection } from "@/components/sections/tandem/tandem-overview-section";
import { TandemExperienceTimeline } from "@/components/sections/tandem/tandem-experience-timeline";
import { TandemPrepGuide } from "@/components/sections/tandem/tandem-prep-guide";
import { TandemFaqSection } from "@/components/sections/tandem/tandem-faq-section";
import { TandemCtaSection } from "@/components/sections/tandem/tandem-cta-section";

// Reused Pricing, Policies & Restriction Components (SOLID Single Source of Truth)
import { PricingTierGrid } from "@/components/sections/pricing/pricing-tier-grid";
import { PricingRestrictionsSection } from "@/components/sections/pricing/pricing-restrictions-section";
import { PricingPoliciesSurcharges } from "@/components/sections/pricing/pricing-policies-surcharges";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = `${t(tandemContent.header.title, locale)} — ${siteConfig.name}`;
  const description = t(tandemContent.header.subtitle, locale);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: "/images/services/tandem-jump.jpg",
          width: 1200,
          height: 630,
          alt: t(tandemContent.header.title, locale),
        },
      ],
    },
  };
}

export default async function TandemSkydivingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = t(tandemContent.header.title, locale);

  const breadcrumbItems = [{ label: title, href: "/tandem-skydiving" }];
  const breadcrumbSchema = generateBreadcrumbJsonLd(locale, [
    { name: title, path: "/tandem-skydiving" },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tandem Skydiving",
    serviceType: "Extreme Sports Experience",
    provider: {
      "@type": "SportsActivityLocation",
      name: siteConfig.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: "US",
      },
    },
    areaServed: "Dallas-Fort Worth Metroplex",
    description: t(tandemContent.header.subtitle, locale),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />

      <PageHeroHeader
        breadcrumbs={breadcrumbItems}
        locale={locale}
        eyebrow={t(tandemContent.header.eyebrow, locale)}
        title={<span className="text-primary">{title}</span>}
        subtitle={t(tandemContent.header.subtitle, locale)}
        badge={t(tandemContent.header.badge, locale)}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-20 sm:gap-28">
        {/* 1. Overview Narrative, Key Stats & Hero Imagery */}
        <TandemOverviewSection locale={locale} />

        {/* 2. The 4-Step Jump Day Journey Timeline */}
        <TandemExperienceTimeline locale={locale} />

        {/* 3. First-Timer Preparation Guide (What to wear, time, spectators, weather) */}
        <TandemPrepGuide locale={locale} />

        {/* 4. Tandem Pricing Tiers (Reused Single Source of Truth) */}
        <div className="flex flex-col gap-4">
          <PricingTierGrid locale={locale} />
          <div className="flex justify-center pt-2">
            <Link
              href={`/${locale}/pricing`}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-secondary hover:underline"
            >
              {t(tandemContent.pricingIntro.viewAllPricing, locale)}
            </Link>
          </div>
        </div>

        {/* 5. Jumper Safety Criteria (Reused - includes prominent 18+ ID card) */}
        <PricingRestrictionsSection locale={locale} />

        {/* 6. Dropzone Surcharges & Booking Policies (Reused - includes prominent 48-Hour Notice Policy) */}
        <PricingPoliciesSurcharges locale={locale} />

        {/* 7. Tandem FAQs */}
        <TandemFaqSection locale={locale} />

        {/* 8. Conversion CTA */}
        <TandemCtaSection locale={locale} />
      </div>
    </>
  );
}
