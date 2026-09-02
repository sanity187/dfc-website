import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { homeContent } from "@/lib/content/home";
import { PageShell } from "@/components/primitives/page-shell";
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
      <PageShell
        eyebrow={t(homeContent.hero.eyebrow, locale)}
        title={
          <>
            <span className="text-primary">{t(homeContent.hero.titlePrimary, locale)}</span>{" "}
            <span className="text-secondary">{t(homeContent.hero.titleSecondary, locale)}</span>
          </>
        }
        subtitle={t(homeContent.hero.subtitle, locale)}
        badge={t(homeContent.hero.altitudeCallout, locale)}
      />
    </>
  );
}
