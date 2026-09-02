import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t, tList } from "@/lib/i18n/resolve";
import { landingContent } from "@/lib/content/landing";
import { siteConfig } from "@/lib/site-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const formattedSlug = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `${formattedSlug} — ${siteConfig.name}`,
    description: t(landingContent.heroSubheadline, locale),
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function LocalizedCampaignLandingPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const features = tList(landingContent.features, locale);

  const campaignTitle = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="flex min-h-[calc(100vh-65px)] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-subtle rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-secondary-subtle rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-2xl w-full text-center relative z-10 flex flex-col items-center gap-6">
        {/* Campaign Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
          <Zap className="h-3.5 w-3.5 fill-secondary" />
          <span>{campaignTitle}</span>
        </div>

        {/* Dynamic Headline */}
        <h1 className="text-3xl font-black tracking-tight text-ink sm:text-4xl md:text-5xl leading-tight">
          {t(landingContent.heroHeadline, locale)}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-dim leading-relaxed">
          {t(landingContent.heroSubheadline, locale)}
        </p>

        {/* Features Checklist */}
        <div className="w-full rounded-2xl border border-line bg-panel p-6 sm:p-8 shadow-sm text-left flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-dim border-b border-line pb-3">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            <span>USPA Certified Dropzone Advantage</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* High Conversion CTA */}
        <a
          href={`${siteConfig.bookingUrl}?utm_campaign=${slug}`}
          className="w-full rounded-xl bg-secondary py-4 px-6 text-center text-lg font-black text-secondary-foreground shadow-lg transition-all hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]"
        >
          {t(landingContent.ctaText, locale)}
        </a>

        {/* Urgency Footer Note */}
        <p className="text-xs font-medium text-dim">{t(landingContent.offerExpires, locale)}</p>
      </div>
    </div>
  );
}
