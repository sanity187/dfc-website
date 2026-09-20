import Image from "next/image";
import { Award, ShieldCheck, Quote } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t, tList } from "@/lib/i18n/resolve";
import { aboutContent } from "@/lib/content/about";
import { Eyebrow } from "@/components/primitives/eyebrow";

interface AboutInstructorSpotlightProps {
  locale: Locale;
}

export function AboutInstructorSpotlight({ locale }: AboutInstructorSpotlightProps) {
  const { instructor } = aboutContent;
  const credentials = tList(instructor.credentials, locale);

  return (
    <section
      aria-label="Chief Instructor Leadership Spotlight"
      className="overflow-hidden rounded-3xl border border-line bg-panel p-6 sm:p-10 shadow-xs"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
        {/* Left Column: Authentic Portrait (5 cols) */}
        <div className="relative aspect-4/3 lg:aspect-square w-full overflow-hidden rounded-2xl bg-muted/30 lg:col-span-5 shadow-sm">
          <Image
            src="/images/about/chief-instructor.jpg"
            alt={t(instructor.name, locale)}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/80 p-3 text-white backdrop-blur-md border border-white/10">
            <div className="text-base font-black tracking-tight text-white">
              {t(instructor.name, locale)}
            </div>
            <div className="text-xs font-bold text-secondary">
              {t(instructor.title, locale)}
            </div>
          </div>
        </div>

        {/* Right Column: Bio, Quote, & Credentials (7 cols) */}
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="flex flex-col gap-2">
            <Eyebrow>{t(instructor.eyebrow, locale)}</Eyebrow>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-ink">
              {t(instructor.name, locale)}
            </h2>
            <p className="text-sm font-bold text-secondary uppercase tracking-wider">
              {t(instructor.title, locale)}
            </p>
          </div>

          {/* Quote */}
          <div className="relative rounded-2xl border-l-4 border-secondary bg-background/80 p-4 sm:p-5 italic text-sm sm:text-base text-ink leading-relaxed">
            <Quote className="absolute top-3 right-3 h-6 w-6 text-secondary/20" />
            &ldquo;{t(instructor.quote, locale)}&rdquo;
          </div>

          {/* Bio paragraph */}
          <p className="text-sm sm:text-base text-dim leading-relaxed">
            {t(instructor.bio, locale)}
          </p>

          {/* Credentials Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {credentials.map((cred, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-xl bg-background px-3 py-2 text-xs font-bold text-ink border border-line"
              >
                <Award className="h-4 w-4 shrink-0 text-secondary" />
                <span>{cred}</span>
              </div>
            ))}
          </div>

          {/* 100% Drug-Free Team Pledge */}
          <div className="flex items-center gap-2.5 rounded-xl bg-primary/10 px-4 py-3 text-xs font-semibold text-primary border border-primary/20">
            <ShieldCheck className="h-5 w-5 shrink-0 text-secondary" />
            <span>{t(instructor.staffStandards, locale)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
