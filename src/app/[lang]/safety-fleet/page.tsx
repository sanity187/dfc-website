import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { safetyContent } from "@/lib/content/safety";
import { PageHeroHeader } from "@/components/primitives/page-hero-header";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbJsonLd } from "@/lib/i18n/structured-data";
import { siteConfig } from "@/lib/site-config";

// Modular Section Components
import { SafetyFleetOverview } from "@/components/sections/safety/safety-fleet-overview";
import { SafetyAircraftShowcase } from "@/components/sections/safety/safety-aircraft-showcase";
import { SafetyGearSystems } from "@/components/sections/safety/safety-gear-systems";
import { SafetyLoftMaintenance } from "@/components/sections/safety/safety-loft-maintenance";
import { SafetyProtocolsGrid } from "@/components/sections/safety/safety-protocols-grid";
import { SafetyFaqSection } from "@/components/sections/safety/safety-faq-section";
import { SafetyCtaSection } from "@/components/sections/safety/safety-cta-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = `${t(safetyContent.header.title, locale)} — ${siteConfig.name}`;
  const description = t(safetyContent.header.subtitle, locale);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: "/images/services/fleet-cessna.jpg",
          width: 1200,
          height: 630,
          alt: t(safetyContent.header.title, locale),
        },
      ],
    },
  };
}

export default async function SafetyFleetPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = t(safetyContent.header.title, locale);

  const breadcrumbItems = [{ label: title, href: "/safety-fleet" }];
  const breadcrumbSchema = generateBreadcrumbJsonLd(locale, [
    { name: title, path: "/safety-fleet" },
  ]);

  const facilitySchema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: `${siteConfig.name} — Flight Operations & Aircraft Fleet`,
    description: t(safetyContent.header.subtitle, locale),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.latitude,
      longitude: siteConfig.coordinates.longitude,
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={facilitySchema} />

      <PageHeroHeader
        breadcrumbs={breadcrumbItems}
        locale={locale}
        eyebrow={t(safetyContent.header.eyebrow, locale)}
        title={<span className="text-primary">{title}</span>}
        subtitle={t(safetyContent.header.subtitle, locale)}
        badge={t(safetyContent.header.badge, locale)}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-20 sm:gap-28">
        {/* 1. Overview Narrative, Aviation Standards & Stats */}
        <SafetyFleetOverview locale={locale} />

        {/* 2. The Super Cessna 182 Fleet Deep-Dive & Maintenance Program */}
        <SafetyAircraftShowcase locale={locale} />

        {/* 3. Military-Grade Dual Parachute Systems (UPT Sigma & Cypres 2) */}
        <SafetyGearSystems locale={locale} />

        {/* 4. In-House FAA Parachute Rigging Loft & Master Riggers */}
        <SafetyLoftMaintenance locale={locale} />

        {/* 5. Dropzone Safety Protocols (Highlighted Zero-Tolerance Policy) */}
        <SafetyProtocolsGrid locale={locale} />

        {/* 6. Safety & Maintenance FAQs */}
        <SafetyFaqSection locale={locale} />

        {/* 7. Safety CTA Banner */}
        <SafetyCtaSection locale={locale} />
      </div>
    </>
  );
}
