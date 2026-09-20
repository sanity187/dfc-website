import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t, tList } from "@/lib/i18n/resolve";
import { SectionHeading } from "@/components/primitives/section-heading";
import { learnContent } from "@/lib/content/learn";

interface LearnPackagesSectionProps {
  locale: Locale;
}

export function LearnPackagesSection({ locale }: LearnPackagesSectionProps) {
  const { packages } = learnContent;

  return (
    <section aria-label="AFF Tuition and Packages" className="flex flex-col gap-10">
      <SectionHeading
        eyebrow={t(packages.eyebrow, locale)}
        title={t(packages.title, locale)}
        subtitle={t(packages.subtitle, locale)}
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {packages.items.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative flex flex-col justify-between rounded-3xl p-7 transition-all ${
              pkg.popular
                ? "border-2 border-secondary bg-panel shadow-xl shadow-secondary/10 ring-1 ring-secondary/40"
                : "border border-line bg-panel/50 hover:border-line-focus hover:bg-panel/80 hover:shadow-md"
            }`}
          >
            {pkg.badge && (
              <div className="absolute -top-3.5 right-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[11px] font-black uppercase tracking-wider text-slate-950 shadow-md">
                  <Sparkles className="h-3 w-3" />
                  {t(pkg.badge, locale)}
                </span>
              </div>
            )}

            <div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-ink tracking-tight">
                  {t(pkg.name, locale)}
                </h3>
                <span className="text-xs font-semibold text-secondary">
                  {t(pkg.subtitle, locale)}
                </span>
              </div>

              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-black text-ink">{pkg.price}</span>
              </div>

              <p className="text-xs text-dim leading-relaxed mb-6">
                {t(pkg.description, locale)}
              </p>

              <ul className="space-y-2.5 text-xs text-ink/90 mb-8 border-t border-line/60 pt-5">
                {tList(pkg.features, locale).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-secondary mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={`/${locale}/book`}
              className={`inline-flex items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-black uppercase tracking-wider transition-all ${
                pkg.popular
                  ? "bg-secondary text-slate-950 hover:bg-secondary-hover shadow-md"
                  : "border border-line bg-canvas hover:border-secondary hover:text-secondary text-ink"
              }`}
            >
              <span>{locale === "es" ? "Comenzar Entrenamiento" : "Start AFF Training"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
