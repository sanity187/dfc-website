import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { commonActions } from "@/lib/content/common";
import { siteConfig } from "@/lib/site-config";
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
  const bookNow = t(commonActions.bookNow, locale);
  return {
    title: bookNow,
    description: "Book your 14,000 FT tandem skydive or AFF course with Dallas Skydive Center.",
  };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const bookNow = t(commonActions.bookNow, locale);
  const breadcrumbItems = [{ label: bookNow, href: "/book" }];
  const breadcrumbSchema = generateBreadcrumbJsonLd(locale, [
    { name: bookNow, path: "/book" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PageHeroHeader
        breadcrumbs={breadcrumbItems}
        locale={locale}
        eyebrow="RESERVATIONS"
        title={<span className="text-secondary">{bookNow}</span>}
        subtitle="Select your preferred date, jump time, and video package."
        badge="Instant Online Confirmation"
      />
      <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 py-12 flex justify-center">
        <a
          href={siteConfig.bookingUrl}
          className="rounded-xl bg-secondary px-8 py-4 text-lg font-bold text-secondary-foreground shadow-lg transition-opacity hover:opacity-95"
        >
          {bookNow} (External Booking Portal)
        </a>
      </div>
    </>
  );
}
