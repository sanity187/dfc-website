import Link from "next/link";
import { Camera, Video, Check, AlertCircle, Sparkles } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t, tList } from "@/lib/i18n/resolve";
import { SectionHeading } from "@/components/primitives/section-heading";
import { pricingContent } from "@/lib/content/pricing";

interface PricingMediaSectionProps {
  locale: Locale;
}

export function PricingMediaSection({ locale }: PricingMediaSectionProps) {
  const packages = pricingContent.media.packages;

  return (
    <section aria-label="Media and Video Packages" className="flex flex-col gap-8">
      <SectionHeading
        eyebrow={t(pricingContent.media.eyebrow, locale)}
        title={t(pricingContent.media.title, locale)}
        subtitle={t(pricingContent.media.subtitle, locale)}
        align="center"
      />

      {/* Post Jump Surcharge Warning Pill */}
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/25 px-4 py-2 text-xs text-amber-500 font-medium">
          <AlertCircle className="h-4 w-4 shrink-0 text-amber-500" />
          <span>{t(pricingContent.media.postJumpNotice, locale)}</span>
        </div>
      </div>

      {/* Two Media Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 transition-all ${
              pkg.popular
                ? "border-secondary bg-panel/90 shadow-xl shadow-secondary/10 ring-1 ring-secondary/40"
                : "border-line bg-panel/50 hover:border-line-focus hover:bg-panel/75"
            }`}
          >
            {pkg.badge && (
              <div className="absolute -top-3.5 right-6">
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-black uppercase tracking-wider text-slate-950 shadow-md">
                  <Sparkles className="h-3 w-3" />
                  {t(pkg.badge, locale)}
                </span>
              </div>
            )}

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                {pkg.id === "single" ? (
                  <Camera className="h-5 w-5" />
                ) : (
                  <Video className="h-5 w-5" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-ink tracking-tight">
                  {t(pkg.name, locale)}
                </h3>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-black text-ink">{pkg.price}</span>
                  <span className="text-xs text-dim">({pkg.postPrice})</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-dim leading-relaxed mb-6">
              {t(pkg.description, locale)}
            </p>

            <ul className="space-y-2.5 mb-8 flex-1 text-xs text-ink/90">
              {tList(pkg.features, locale).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-secondary mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/${locale}/book`}
              className={`inline-flex items-center justify-center rounded-xl py-3 text-xs font-black uppercase tracking-wider transition-all ${
                pkg.popular
                  ? "bg-secondary text-slate-950 hover:bg-secondary-hover shadow-md"
                  : "border border-line bg-canvas hover:border-secondary hover:text-secondary text-ink"
              }`}
            >
              {t(pricingContent.media.addMediaBtn, locale)}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
