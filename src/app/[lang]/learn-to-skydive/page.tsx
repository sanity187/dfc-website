import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { learnContent } from "@/lib/content/learn";
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
    title: t(learnContent.title, locale),
    description: t(learnContent.intro, locale),
  };
}

export default async function LearnToSkydivePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = t(learnContent.title, locale);
  const breadcrumbs = generateBreadcrumbJsonLd(locale, [
    { name: title, path: "/learn-to-skydive" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageShell
        eyebrow={t(learnContent.eyebrow, locale)}
        title={<span className="text-primary">{title}</span>}
        subtitle={t(learnContent.subtitle, locale)}
        badge="USPA A-License Certification"
      />
    </>
  );
}
