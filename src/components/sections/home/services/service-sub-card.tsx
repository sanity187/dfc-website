import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t, tList } from "@/lib/i18n/resolve";
import type { ServiceFeatureItem } from "@/lib/content/services";
import { ServiceSpecBadge } from "./service-spec-badge";

interface ServiceSubCardProps {
  item: ServiceFeatureItem;
  locale: Locale;
}

export function ServiceSubCard({ item, locale }: ServiceSubCardProps) {
  const tags = tList(item.tags, locale);
  const href = localizedPath(locale, item.ctaHref);

  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-panel p-5 sm:p-6 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1">
      <div>
        {/* Card Image Thumbnail */}
        <div className="relative aspect-16/9 w-full overflow-hidden rounded-2xl bg-muted/30">
          <Image
            src={item.image}
            alt={t(item.imageAlt, locale)}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold text-primary backdrop-blur-md shadow-xs border border-line/60">
            {t(item.badge, locale)}
          </span>
        </div>

        {/* Content Details */}
        <div className="mt-5">
          <h3 className="text-xl font-bold tracking-tight text-ink group-hover:text-primary transition-colors">
            {t(item.title, locale)}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-dim leading-relaxed">
            {t(item.description, locale)}
          </p>
        </div>

        {/* Highlight Spec Badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag, idx) => (
            <ServiceSpecBadge key={idx} label={tag} />
          ))}
        </div>
      </div>

      {/* Link Action */}
      <div className="mt-6 border-t border-line/60 pt-4">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all group-hover:gap-2 hover:underline"
        >
          <span>{t(item.ctaText, locale)}</span>
          <ArrowRight className="h-4 w-4 text-secondary" />
        </Link>
      </div>
    </div>
  );
}
