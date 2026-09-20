import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { aboutContent } from "@/lib/content/about";
import { SectionHeading } from "@/components/primitives/section-heading";

interface AboutAmenitiesSectionProps {
  locale: Locale;
}

export function AboutAmenitiesSection({ locale }: AboutAmenitiesSectionProps) {
  const { amenities } = aboutContent;

  return (
    <section aria-label="Dropzone Amenities and Facility" className="flex flex-col gap-10">
      <SectionHeading
        eyebrow={t(amenities.eyebrow, locale)}
        title={t(amenities.title, locale)}
        subtitle={t(amenities.subtitle, locale)}
        align="center"
        as="h2"
      />

      {/* Facility Visual Banner */}
      <div className="relative aspect-16/9 md:aspect-21/9 w-full overflow-hidden rounded-3xl border border-line bg-muted/30 shadow-md">
        <Image
          src="/images/about/hangar-facility.jpg"
          alt="Dallas Skydive Center hangar and spectator grounds"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 text-white">
          <div>
            <div className="text-lg sm:text-xl font-black text-white">
              Caddo Mills Municipal Airport (7F3)
            </div>
            <div className="text-xs sm:text-sm text-slate-200">
              651-Acre Grass Landing Zone & 3,600 Sq Ft Aircraft Hangar
            </div>
          </div>
          <span className="rounded-full bg-secondary px-3.5 py-1 text-xs font-bold text-secondary-foreground shadow-sm">
            Spectators Welcome
          </span>
        </div>
      </div>

      {/* 4 Amenities Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {amenities.items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-2xl border border-line bg-panel p-5 shadow-xs transition-all hover:border-primary/40 hover:shadow-md"
          >
            <div>
              {item.badge && (
                <span className="inline-block rounded-full bg-secondary/15 px-2.5 py-0.5 text-[11px] font-bold text-secondary-foreground mb-3">
                  {t(item.badge, locale)}
                </span>
              )}
              <h3 className="text-base font-bold text-ink tracking-tight">
                {t(item.title, locale)}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-dim leading-relaxed">
                {t(item.description, locale)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
