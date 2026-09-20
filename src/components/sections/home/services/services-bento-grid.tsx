import type { Locale } from "@/lib/i18n/config";
import type { ServicesContent } from "@/lib/content/services";
import { ServiceTandemCard } from "./service-tandem-card";
import { ServiceSubCard } from "./service-sub-card";

interface ServicesBentoGridProps {
  content: ServicesContent;
  locale: Locale;
}

export function ServicesBentoGrid({ content, locale }: ServicesBentoGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Flagship: 14,000 FT Tandem Jump (Spans 2 columns) */}
      <ServiceTandemCard item={content.tandem} locale={locale} />

      {/* Learn to Skydive: AFF Solo Training (1 column) */}
      <ServiceSubCard item={content.aff} locale={locale} />

      {/* 4K Video & Photo Packages (1 column) */}
      <ServiceSubCard item={content.media} locale={locale} />

      {/* Cessna 182 Fleet & Safety Standards (Spans 2 columns on lg for visual balance) */}
      <div className="md:col-span-2 lg:col-span-2">
        <ServiceSubCard item={content.fleet} locale={locale} />
      </div>
    </div>
  );
}
