import { ShoppingBag, Gauge, Plane, Waves, MapPin } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { contactContent } from "@/lib/content/contact";
import { SectionHeading } from "@/components/primitives/section-heading";

const landmarkIcons = {
  ShoppingBag,
  Gauge,
  Plane,
  Waves,
};

interface ContactLandmarksGridProps {
  locale: Locale;
}

export function ContactLandmarksGrid({ locale }: ContactLandmarksGridProps) {
  const { landmarks } = contactContent;

  return (
    <section className="flex flex-col gap-12">
      <SectionHeading
        eyebrow={t(landmarks.eyebrow, locale)}
        title={t(landmarks.title, locale)}
        subtitle={t(landmarks.subtitle, locale)}
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {landmarks.items.map((item) => {
          const Icon = landmarkIcons[item.icon as keyof typeof landmarkIcons] || MapPin;

          return (
            <div
              key={item.id}
              className="flex flex-col justify-between p-6 rounded-3xl bg-surface border border-line/70 hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    {item.distance}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-ink text-base sm:text-lg">
                    {t(item.name, locale)}
                  </h3>
                  <p className="text-xs font-semibold text-secondary mt-0.5">
                    {t(item.tagline, locale)}
                  </p>
                  <p className="text-xs sm:text-sm text-dim leading-relaxed mt-2.5">
                    {t(item.description, locale)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
