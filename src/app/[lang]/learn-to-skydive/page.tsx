import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { learnContent } from "@/lib/content/learn";
import { PageHeroHeader } from "@/components/primitives/page-hero-header";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbJsonLd } from "@/lib/i18n/structured-data";
import { siteConfig } from "@/lib/site-config";

// Modular Section Components
import { LearnOverviewSection } from "@/components/sections/learn/learn-overview-section";
import { LearnProgressionRoadmap } from "@/components/sections/learn/learn-progression-roadmap";
import { LearnFundamentalsGrid } from "@/components/sections/learn/learn-fundamentals-grid";
import { LearnRequirementsSection } from "@/components/sections/learn/learn-requirements-section";
import { LearnPackagesSection } from "@/components/sections/learn/learn-packages-section";
import { LearnFaqSection } from "@/components/sections/learn/learn-faq-section";
import { LearnCtaSection } from "@/components/sections/learn/learn-cta-section";

// Reused Policies Component (SOLID Single Source of Truth)
import { PricingPoliciesSurcharges } from "@/components/sections/pricing/pricing-policies-surcharges";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = `${t(learnContent.header.title, locale)} — ${siteConfig.name}`;
  const description = t(learnContent.header.subtitle, locale);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: "/images/services/aff-solo.jpg",
          width: 1200,
          height: 630,
          alt: t(learnContent.header.title, locale),
        },
      ],
    },
  };
}

export default async function LearnToSkydivePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = t(learnContent.header.title, locale);

  const breadcrumbItems = [{ label: title, href: "/learn-to-skydive" }];
  const breadcrumbSchema = generateBreadcrumbJsonLd(locale, [
    { name: title, path: "/learn-to-skydive" },
  ]);

  const programSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "Accelerated Freefall (AFF) & USPA A-License Certification",
    description: t(learnContent.header.subtitle, locale),
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
    educationalProgramMode: "full-time, part-time",
    programPrerequisites: "18+ with government ID, under 220 lbs, good physical health",
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={programSchema} />

      <PageHeroHeader
        breadcrumbs={breadcrumbItems}
        locale={locale}
        eyebrow={t(learnContent.header.eyebrow, locale)}
        title={<span className="text-primary">{title}</span>}
        subtitle={t(learnContent.header.subtitle, locale)}
        badge={t(learnContent.header.badge, locale)}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-20 sm:gap-28">
        {/* 1. Overview Narrative, Mentorship & Key Stats */}
        <LearnOverviewSection locale={locale} />

        {/* 2. 4-Stage USPA AFF Progression Roadmap */}
        <LearnProgressionRoadmap locale={locale} />

        {/* 3. Core Flight Fundamentals ("The Arch", Altitude, Radio, Loft) */}
        <LearnFundamentalsGrid locale={locale} />

        {/* 4. Student Prerequisites & Eligibility */}
        <LearnRequirementsSection locale={locale} />

        {/* 5. AFF Tuition & Training Packages */}
        <LearnPackagesSection locale={locale} />

        {/* 6. Dropzone Policies & 48-Hour Notice Policy (Reused) */}
        <PricingPoliciesSurcharges locale={locale} />

        {/* 7. Solo Training FAQs */}
        <LearnFaqSection locale={locale} />

        {/* 8. Enrollment CTA Banner */}
        <LearnCtaSection locale={locale} />
      </div>
    </>
  );
}
