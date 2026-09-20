import { ChevronDown, HelpCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { SectionHeading } from "@/components/primitives/section-heading";
import { safetyContent } from "@/lib/content/safety";

interface SafetyFaqSectionProps {
  locale: Locale;
}

export function SafetyFaqSection({ locale }: SafetyFaqSectionProps) {
  const { faq } = safetyContent;

  return (
    <section aria-label="Aviation Safety Frequently Asked Questions" className="flex flex-col gap-10">
      <SectionHeading
        eyebrow={t(faq.eyebrow, locale)}
        title={t(faq.title, locale)}
        subtitle={t(faq.subtitle, locale)}
        align="center"
      />

      <div className="max-w-3xl mx-auto w-full flex flex-col gap-4">
        {faq.items.map((item, idx) => (
          <details
            key={idx}
            className="group rounded-2xl border border-line bg-panel/50 p-5 sm:p-6 transition-all hover:border-line-focus open:border-secondary/50 open:bg-panel open:shadow-md"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-sm sm:text-base text-ink list-none select-none">
              <span className="flex items-center gap-3">
                <HelpCircle className="h-4 w-4 text-secondary shrink-0" />
                <span>{t(item.question, locale)}</span>
              </span>
              <ChevronDown className="h-4 w-4 text-dim transition-transform duration-200 group-open:rotate-180 group-open:text-secondary shrink-0" />
            </summary>
            <div className="mt-4 text-xs sm:text-sm text-dim leading-relaxed border-t border-line/60 pt-4 pl-7">
              <p>{t(item.answer, locale)}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
