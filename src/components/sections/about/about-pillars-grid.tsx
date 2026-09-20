import { Plane, ShieldCheck, Wrench, MapPin, CheckCircle2 } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t, tList } from "@/lib/i18n/resolve";
import { aboutContent, type AboutPillarItem } from "@/lib/content/about";
import { SectionHeading } from "@/components/primitives/section-heading";

interface AboutPillarsGridProps {
  locale: Locale;
}

const iconMap = {
  Plane,
  ShieldCheck,
  Wrench,
  MapPin,
};

function PillarCard({ item, locale }: { item: AboutPillarItem; locale: Locale }) {
  const Icon = iconMap[item.icon as keyof typeof iconMap] || ShieldCheck;
  const specs = tList(item.specs, locale);

  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-panel p-6 sm:p-7 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1">
      <div className="flex flex-col gap-4">
        {/* Top Icon and Tagline */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-6 w-6" />
          </div>
          <span className="rounded-full bg-background px-3 py-1 text-[11px] font-bold text-dim border border-line">
            {t(item.tagline, locale)}
          </span>
        </div>

        {/* Title and Description */}
        <div>
          <h3 className="text-xl font-bold tracking-tight text-ink group-hover:text-primary transition-colors">
            {t(item.title, locale)}
          </h3>
          <p className="mt-2 text-sm text-dim leading-relaxed">
            {t(item.description, locale)}
          </p>
        </div>
      </div>

      {/* Bulleted Specs */}
      <div className="mt-6 flex flex-col gap-2 border-t border-line/60 pt-4">
        {specs.map((spec, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-ink">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" />
            <span>{spec}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AboutPillarsGrid({ locale }: AboutPillarsGridProps) {
  const { pillars } = aboutContent;

  return (
    <section aria-label="Dropzone Operational Pillars" className="flex flex-col gap-10">
      <SectionHeading
        eyebrow={t(pillars.eyebrow, locale)}
        title={t(pillars.title, locale)}
        subtitle={t(pillars.subtitle, locale)}
        align="center"
        as="h2"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {pillars.items.map((item) => (
          <PillarCard key={item.id} item={item} locale={locale} />
        ))}
      </div>
    </section>
  );
}
