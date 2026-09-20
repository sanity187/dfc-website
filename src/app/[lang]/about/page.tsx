import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { aboutContent } from "@/lib/content/about";
import { PageHeroHeader } from "@/components/primitives/page-hero-header";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbJsonLd } from "@/lib/i18n/structured-data";
import { siteConfig } from "@/lib/site-config";
import { AboutStorySection } from "@/components/sections/about/about-story-section";
import { AboutPillarsGrid } from "@/components/sections/about/about-pillars-grid";
import { AboutInstructorSpotlight } from "@/components/sections/about/about-instructor-spotlight";
import { AboutAmenitiesSection } from "@/components/sections/about/about-amenities-section";
import { AboutCtaSection } from "@/components/sections/about/about-cta-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const pageTitle = aboutContent.header.pageTitle
    ? t(aboutContent.header.pageTitle, locale)
    : "About Dallas Skydive Center";
  const motto = t(aboutContent.header.title, locale);
  return {
    title: `${pageTitle} — “${motto}”`,
    description: t(aboutContent.header.subtitle, locale),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const pageTitle = aboutContent.header.pageTitle
    ? t(aboutContent.header.pageTitle, locale)
    : "About Dallas Skydive Center";
  const motto = t(aboutContent.header.title, locale);
  const breadcrumbItems = [{ label: pageTitle, href: "/about" }];
  const breadcrumbSchema = generateBreadcrumbJsonLd(locale, [
    { name: pageTitle, path: "/about" },
  ]);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: siteConfig.name,
    description: t(aboutContent.header.subtitle, locale),
    url: "https://www.dallasskydivecenter.com/about",
    telephone: siteConfig.phone,
    founder: {
      "@type": "Person",
      name: "Jimmy Mendonca",
      jobTitle: "Chief Instructor",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={organizationSchema} />

      <PageHeroHeader
        breadcrumbs={breadcrumbItems}
        locale={locale}
        eyebrow={t(aboutContent.header.eyebrow, locale)}
        title={
          <span className="flex flex-col gap-1.5">
            <span className="text-xl sm:text-2xl font-bold tracking-normal text-ink/80">
              {pageTitle}
            </span>
            <span className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-secondary uppercase italic">
              “{motto}”
            </span>
          </span>
        }
        subtitle={t(aboutContent.header.subtitle, locale)}
        badge={t(aboutContent.header.badge, locale)}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 flex flex-col gap-14 sm:gap-20">
        <AboutStorySection locale={locale} />
        <AboutPillarsGrid locale={locale} />
        <AboutInstructorSpotlight locale={locale} />
        <AboutAmenitiesSection locale={locale} />
        <AboutCtaSection locale={locale} />
      </div>
    </>
  );
}
