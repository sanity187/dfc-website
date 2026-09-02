import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { safetyContent } from "@/lib/content/safety";
import { PageShell } from "@/components/primitives/page-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbJsonLd } from "@/lib/i18n/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  return {
    title: t(safetyContent.title, locale),
    description: t(safetyContent.subtitle, locale),
  };
}

export default async function SafetyFleetPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = t(safetyContent.title, locale);
  const breadcrumbs = generateBreadcrumbJsonLd(locale, [
    { name: title, path: "/safety-fleet" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageShell
        eyebrow={t(safetyContent.eyebrow, locale)}
        title={<span className="text-primary">{title}</span>}
        subtitle={t(safetyContent.subtitle, locale)}
        badge="FAA & USPA Certified Standard"
      />
    </>
  );
}
