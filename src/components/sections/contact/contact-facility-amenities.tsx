import { CheckCircle2, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { contactContent } from "@/lib/content/contact";
import { SectionHeading } from "@/components/primitives/section-heading";

interface ContactFacilityAmenitiesProps {
  locale: Locale;
}

export function ContactFacilityAmenities({ locale }: ContactFacilityAmenitiesProps) {
  const { amenities } = contactContent;

  return (
    <section className="flex flex-col gap-10">
      <SectionHeading
        eyebrow={t(amenities.eyebrow, locale)}
        title={t(amenities.title, locale)}
        subtitle={t(amenities.subtitle, locale)}
        align="center"
      />

      <div className="bg-surface border border-line/70 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.points.map((point, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-4 rounded-2xl bg-canvas/70 border border-line/50 hover:border-primary/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-ink leading-relaxed">
                {t(point, locale)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-line/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-dim">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-primary" />
            <span>
              {locale === "es"
                ? "Instalaciones abiertas al público los 7 días de la semana"
                : "Facility open to spectators and jumpers 7 days a week"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>
              {locale === "es"
                ? "100% Certificado por la USPA · Caddo Mills (FAA: 7F3)"
                : "100% USPA Certified Dropzone · Caddo Mills (FAA: 7F3)"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
