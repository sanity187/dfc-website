import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { homeContent } from "@/lib/content/home";
import { HomeHero } from "@/components/sections/home/home-hero";
import { HomeReviewsSection } from "@/components/sections/home/reviews/reviews-section";
import { JsonLd } from "@/components/seo/json-ld";
import { generateFaqJsonLd } from "@/lib/i18n/structured-data";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const faqSchema = generateFaqJsonLd(homeContent.faqs, locale);

  return (
    <>
      <JsonLd data={faqSchema} />
      <HomeHero
        locale={locale}
        backgroundOptions={{ startTime: 80, endTime: 120, tintAmount: 0.85 }}
      />
      <HomeReviewsSection locale={locale} />
    </>
  );
}
