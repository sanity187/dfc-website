import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { bookingContent } from "@/lib/content/booking";
import { PageHeroHeader } from "@/components/primitives/page-hero-header";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbJsonLd } from "@/lib/i18n/structured-data";
import { siteConfig } from "@/lib/site-config";
import { BookingModule } from "@/components/sections/booking/booking-module";
import { BookingTrustBar } from "@/components/sections/booking/booking-trust-bar";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = `${t(bookingContent.header.title, locale)} — ${siteConfig.name}`;
  const description = t(bookingContent.header.subtitle, locale);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: "/images/hero/hero-aerial.jpg",
          width: 1200,
          height: 630,
          alt: t(bookingContent.header.title, locale),
        },
      ],
    },
  };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = t(bookingContent.header.title, locale);

  const breadcrumbItems = [{ label: title, href: "/book" }];
  const breadcrumbSchema = generateBreadcrumbJsonLd(locale, [
    { name: title, path: "/book" },
  ]);

  const bookingLocationSchema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: `${siteConfig.name} — Online Flight Reservations`,
    description: t(bookingContent.header.subtitle, locale),
    url: `${siteConfig.url}/${locale}/book`,
    telephone: siteConfig.phone,
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
      <JsonLd data={bookingLocationSchema} />

      <PageHeroHeader
        breadcrumbs={breadcrumbItems}
        locale={locale}
        eyebrow={t(bookingContent.header.eyebrow, locale)}
        title={<span className="text-secondary">{title}</span>}
        subtitle={t(bookingContent.header.subtitle, locale)}
        badge={t(bookingContent.header.badge, locale)}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col gap-12">
        <BookingModule locale={locale} variant="page" />
        <BookingTrustBar locale={locale} />
      </div>
    </>
  );
}
