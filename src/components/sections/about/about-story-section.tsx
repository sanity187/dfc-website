import { MapPin, Plane, ShieldCheck, Compass } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t, tList } from "@/lib/i18n/resolve";
import { aboutContent } from "@/lib/content/about";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { DisplayTitle } from "@/components/primitives/display-title";

interface AboutStorySectionProps {
  locale: Locale;
}

export function AboutStorySection({ locale }: AboutStorySectionProps) {
  const { story } = aboutContent;
  const paragraphs = tList(story.paragraphs, locale);

  const stats = [
    {
      value: t(story.stats.acres, locale),
      label: t(story.stats.acresLabel, locale),
      icon: Compass,
    },
    {
      value: t(story.stats.jumpsLead, locale),
      label: t(story.stats.jumpsLeadLabel, locale),
      icon: ShieldCheck,
    },
    {
      value: t(story.stats.hangarSize, locale),
      label: t(story.stats.hangarSizeLabel, locale),
      icon: Plane,
    },
    {
      value: t(story.stats.distance, locale),
      label: t(story.stats.distanceLabel, locale),
      icon: MapPin,
    },
  ];

  return (
    <section aria-label="Our Story and Dropzone Facts" className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
        {/* Left Narrative Column (7 cols) */}
        <div className="flex flex-col gap-5 lg:col-span-7">
          <Eyebrow>{t(story.eyebrow, locale)}</Eyebrow>
          <DisplayTitle as="h2">{t(story.title, locale)}</DisplayTitle>
          <div className="flex flex-col gap-4 text-base text-dim leading-relaxed">
            {paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {/* Right Stats Column (5 cols) */}
        <div className="grid grid-cols-2 gap-4 lg:col-span-5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col gap-2 rounded-2xl border border-line bg-panel p-5 sm:p-6 shadow-xs transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-1 text-2xl sm:text-3xl font-black text-ink tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-dim uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
