import { PhoneCall, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { contactContent } from "@/lib/content/contact";
import { SectionHeading } from "@/components/primitives/section-heading";

const iconMap = {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
};

interface ContactInfoCardsProps {
  locale: Locale;
}

export function ContactInfoCards({ locale }: ContactInfoCardsProps) {
  const { cards } = contactContent;

  return (
    <section className="flex flex-col gap-12">
      <SectionHeading
        eyebrow={t(cards.eyebrow, locale)}
        title={t(cards.title, locale)}
        subtitle={t(cards.subtitle, locale)}
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.items.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap] || MapPin;
          const isHighlighted = item.highlight;

          return (
            <div
              key={item.id}
              className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                isHighlighted
                  ? "bg-primary/5 dark:bg-primary/10 border-secondary/40 ring-1 ring-secondary/30"
                  : "bg-surface border-line/60 hover:border-line"
              }`}
            >
              {isHighlighted && (
                <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase bg-secondary text-canvas">
                  Hotline
                </span>
              )}

              <div className="flex flex-col gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    isHighlighted
                      ? "bg-secondary text-canvas"
                      : "bg-primary/10 text-primary dark:bg-primary/20"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-ink">
                    {t(item.title, locale)}
                  </h3>
                  <p className="mt-1 font-semibold text-primary dark:text-secondary text-base sm:text-lg break-words">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-dim leading-relaxed">
                    {t(item.detail, locale)}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-line/40">
                <a
                  href={item.actionHref}
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group ${
                    isHighlighted
                      ? "text-secondary hover:underline"
                      : "text-primary dark:text-secondary hover:underline"
                  }`}
                >
                  <span>{t(item.actionText, locale)}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
