import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { commonActions } from "@/lib/content/common";
import { siteConfig } from "@/lib/site-config";
import { PageShell } from "@/components/primitives/page-shell";

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

  return (
    <PageShell
      eyebrow="RESERVATIONS"
      title={<span className="text-secondary">{bookNow}</span>}
      subtitle="Select your preferred date, jump time, and video package."
      badge="Instant Online Confirmation"
    >
      <div className="flex justify-center">
        <a
          href={siteConfig.bookingUrl}
          className="rounded-lg bg-secondary px-8 py-4 text-lg font-bold text-secondary-foreground shadow transition-opacity hover:opacity-95"
        >
          {bookNow} (External Booking Portal)
        </a>
      </div>
    </PageShell>
  );
}
