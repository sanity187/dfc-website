import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { contactContent } from "@/lib/content/contact";
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
    title: t(contactContent.title, locale),
    description: t(contactContent.subtitle, locale),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = t(contactContent.title, locale);
  const breadcrumbs = generateBreadcrumbJsonLd(locale, [
    { name: title, path: "/contact" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageShell
        eyebrow={t(contactContent.eyebrow, locale)}
        title={<span className="text-primary">{title}</span>}
        subtitle={t(contactContent.subtitle, locale)}
        badge="DFW Metroplex Location"
      />
    </>
  );
}
