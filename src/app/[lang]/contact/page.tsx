import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { contactContent } from "@/lib/content/contact";
import { PageHeroHeader } from "@/components/primitives/page-hero-header";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbJsonLd, generateFaqJsonLd } from "@/lib/i18n/structured-data";
import { siteConfig } from "@/lib/site-config";

// Modular Section Components
import { ContactInfoCards } from "@/components/sections/contact/contact-info-cards";
import { ContactFormSection } from "@/components/sections/contact/contact-form-section";
import { ContactMapSection } from "@/components/sections/contact/contact-map-section";
import { ContactDirectionsHub } from "@/components/sections/contact/contact-directions-hub";
import { ContactLandmarksGrid } from "@/components/sections/contact/contact-landmarks-grid";
import { ContactFacilityAmenities } from "@/components/sections/contact/contact-facility-amenities";
import { ContactFaqSection } from "@/components/sections/contact/contact-faq-section";
import { ContactCtaSection } from "@/components/sections/contact/contact-cta-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = `${t(contactContent.header.title, locale)} — ${siteConfig.name}`;
  const description = t(contactContent.header.subtitle, locale);

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
          alt: t(contactContent.header.title, locale),
        },
      ],
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = t(contactContent.header.title, locale);

  const breadcrumbItems = [{ label: title, href: "/contact" }];
  const breadcrumbSchema = generateBreadcrumbJsonLd(locale, [
    { name: title, path: "/contact" },
  ]);

  const faqSchema = generateFaqJsonLd(contactContent.faq.items, locale);

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: `${siteConfig.name} — Caddo Mills Dropzone`,
    description: t(contactContent.header.subtitle, locale),
    url: `${siteConfig.url}/${locale}/contact`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "07:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={locationSchema} />

      <PageHeroHeader
        breadcrumbs={breadcrumbItems}
        locale={locale}
        eyebrow={t(contactContent.header.eyebrow, locale)}
        title={<span className="text-primary">{title}</span>}
        subtitle={t(contactContent.header.subtitle, locale)}
        badge={t(contactContent.header.badge, locale)}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-20 sm:gap-28">
        {/* 1. Direct Contact Channels (Phone, Email, Address, Hours) */}
        <ContactInfoCards locale={locale} />

        {/* 2. Interactive Map Section & GPS Navigation Shortcuts */}
        <ContactMapSection locale={locale} />

        {/* 3. Online Inquiry Form */}
        <ContactFormSection locale={locale} />

        {/* 4. DFW Driving Directions Hub */}
        <ContactDirectionsHub locale={locale} />

        {/* 5. Nearby Landmarks Grid (Buc-ee's, DKC, Dallas Flight Center, Lake Ray Hubbard) */}
        <ContactLandmarksGrid locale={locale} />

        {/* 6. Facility Highlights & Spectator Amenities */}
        <ContactFacilityAmenities locale={locale} />

        {/* 7. Dropzone Location & Arrival FAQs */}
        <ContactFaqSection locale={locale} />

        {/* 8. Call to Action */}
        <ContactCtaSection locale={locale} />
      </div>
    </>
  );
}
