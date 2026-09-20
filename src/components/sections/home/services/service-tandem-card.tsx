import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t, tList } from "@/lib/i18n/resolve";
import type { ServiceFeatureItem } from "@/lib/content/services";
import { ServiceSpecBadge } from "./service-spec-badge";

interface ServiceTandemCardProps {
  item: ServiceFeatureItem;
  locale: Locale;
}

export function ServiceTandemCard({ item, locale }: ServiceTandemCardProps) {
  const tags = tList(item.tags, locale);
  const detailHref = localizedPath(locale, "/tandem-skydiving");
  const bookHref = localizedPath(locale, item.ctaHref);

  return (
    <div className="group relative col-span-1 lg:col-span-2 flex flex-col justify-between overflow-hidden rounded-3xl border border-line-strong bg-panel p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
      {/* Background Image with Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={item.image}
          alt={t(item.imageAlt, locale)}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/55 to-black/30" />
      </div>

      {/* Top Bar: Popular Tag & Price Anchor */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1 text-xs font-bold text-secondary-foreground shadow-sm">
          <Sparkles className="h-3.5 w-3.5" />
          {t(item.badge, locale)}
        </span>

        {item.priceAnchor && (
          <span className="inline-flex items-center rounded-full bg-black/50 px-3.5 py-1 text-xs font-extrabold text-white backdrop-blur-md border border-white/20">
            {t(item.priceAnchor, locale)}
          </span>
        )}
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 mt-24 sm:mt-32 flex flex-col gap-5 text-white">
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white drop-shadow-xs">
            {t(item.title, locale)}
          </h3>
          <p className="mt-2.5 max-w-2xl text-sm sm:text-base text-slate-200 leading-relaxed drop-shadow-xs">
            {t(item.description, locale)}
          </p>
        </div>

        {/* Highlight Spec Badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag, idx) => (
            <ServiceSpecBadge key={idx} label={tag} variant={idx === 0 ? "accent" : "default"} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href={bookHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground shadow-md transition-all hover:bg-secondary/90 hover:shadow-lg active:scale-95"
          >
            <span>{t(item.ctaText, locale)}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href={detailHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md border border-white/20 transition-colors hover:bg-white/25"
          >
            <ShieldCheck className="h-4 w-4 text-secondary" />
            <span>{locale === "es" ? "Ver Detalles Tándem" : "Tandem Jump Details"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
