import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { servicesContent } from "@/lib/content/services";
import { SectionHeading } from "@/components/primitives/section-heading";
import { ServicesBentoGrid } from "./services-bento-grid";

interface HomeServicesSectionProps {
  locale: Locale;
}

export function HomeServicesSection({ locale }: HomeServicesSectionProps) {
  return (
    <section
      id="services-overview"
      aria-label={t(servicesContent.title, locale)}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col gap-12"
    >
      <SectionHeading
        eyebrow={t(servicesContent.eyebrow, locale)}
        title={t(servicesContent.title, locale)}
        subtitle={t(servicesContent.subtitle, locale)}
        align="center"
        as="h2"
      />

      <ServicesBentoGrid content={servicesContent} locale={locale} />
    </section>
  );
}
