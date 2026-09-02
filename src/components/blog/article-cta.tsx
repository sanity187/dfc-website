import { Calendar, Phone, Sparkles, ShieldCheck } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { commonActions } from "@/lib/content/common";
import { siteConfig } from "@/lib/site-config";

interface ArticleCtaProps {
  locale: Locale;
}

export function ArticleCta({ locale }: ArticleCtaProps) {
  const isSpanish = locale === "es";

  return (
    <aside className="my-12 overflow-hidden rounded-3xl border border-secondary/30 bg-linear-to-br from-primary/10 via-panel to-secondary/15 p-8 sm:p-10 shadow-sm relative">
      <div
        className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-secondary/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-black uppercase tracking-wider text-secondary-foreground shadow-xs mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{isSpanish ? "Vive la Experiencia" : "Ready to Jump?"}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-ink">
            {isSpanish ? "¿Listo para saltar a 14,000 pies?" : "Experience 14,000 FT Freefall Today"}
          </h3>

          <p className="mt-2 text-sm text-dim leading-relaxed">
            {isSpanish
              ? "Reserva tu salto tándem con instructores certificados por la USPA a solo minutos de Dallas."
              : "Book your tandem jump with USPA Master Instructors just 35 minutes from Downtown Dallas."}
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-primary">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            <span>100% Certified USPA Dropzone • Turbine Aircraft</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
          <a
            href={siteConfig.bookingUrl}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3.5 text-sm font-black text-secondary-foreground shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <Calendar className="h-4 w-4" />
            <span>{t(commonActions.bookNow, locale)}</span>
          </a>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-panel px-6 py-3 text-xs font-bold text-ink transition-colors hover:bg-muted"
          >
            <Phone className="h-4 w-4 text-secondary" />
            <span>{siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
