import { Shirt, Clock, Users, CloudSun, Check, CheckCircle2 } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { SectionHeading } from "@/components/primitives/section-heading";
import { tandemContent, type TandemPrepBullet } from "@/lib/content/tandem";
import type { I18nString } from "@/lib/content/types";

interface TandemPrepGuideProps {
  locale: Locale;
}

function formatHighlightedText(text: string) {
  if (!text.includes("**")) return text;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span
          key={i}
          className="font-black text-amber-600 dark:text-secondary underline decoration-secondary/50 underline-offset-2"
        >
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
}

export function TandemPrepGuide({ locale }: TandemPrepGuideProps) {
  const { prepGuide } = tandemContent;

  const iconMap: Record<string, typeof Shirt> = {
    Shirt,
    Clock,
    Users,
    CloudSun,
  };

  return (
    <section aria-label="First-Timer Preparation Guide" className="flex flex-col gap-10">
      <SectionHeading
        eyebrow={t(prepGuide.eyebrow, locale)}
        title={t(prepGuide.title, locale)}
        subtitle={t(prepGuide.subtitle, locale)}
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {prepGuide.items.map((item) => {
          const IconComponent = iconMap[item.icon] || CheckCircle2;
          return (
            <div
              key={item.id}
              className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all ${
                item.highlight
                  ? "border-2 border-secondary bg-panel shadow-[0_0_28px_rgba(251,167,19,0.22)] ring-1 ring-secondary/50"
                  : "border border-line bg-panel/50 hover:border-line-focus hover:bg-panel/80 hover:shadow-md"
              }`}
            >
              {item.highlight && (
                <>
                  {/* Slow flash breathing glow aura */}
                  <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-secondary/50 via-amber-400/35 to-secondary/50 blur-sm opacity-75 animate-pulse" />
                  {/* Floating eye-catching badge with live pulse indicator */}
                  {item.badge && (
                    <div className="absolute -top-3.5 right-4 z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[11px] font-black uppercase tracking-wider text-slate-950 shadow-md ring-2 ring-canvas">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950" />
                        </span>
                        {t(item.badge, locale)}
                      </span>
                    </div>
                  )}
                </>
              )}

              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all ${
                        item.highlight
                          ? "bg-secondary text-slate-950 shadow-md ring-2 ring-secondary/40"
                          : "bg-secondary/15 text-secondary"
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-ink">
                        {t(item.title, locale)}
                      </h3>
                      <span className="text-xs font-semibold text-secondary">
                        {t(item.tip, locale)}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-dim leading-relaxed mb-5">
                  {formatHighlightedText(t(item.description, locale))}
                </p>

                <ul className="space-y-2 text-xs">
                  {item.bullets.map((rawBullet, idx) => {
                    const isBulletObj = typeof rawBullet === "object" && "text" in rawBullet;
                    const bulletText = t(
                      isBulletObj ? (rawBullet as TandemPrepBullet).text : (rawBullet as I18nString),
                      locale
                    );
                    const isHighlighted = isBulletObj && (rawBullet as TandemPrepBullet).highlight;

                    return (
                      <li
                        key={idx}
                        className={`flex items-start gap-2.5 rounded-xl p-1.5 transition-all ${
                          isHighlighted
                            ? "bg-secondary/10 border border-secondary/30 text-ink font-semibold"
                            : "text-ink/90"
                        }`}
                      >
                        <Check className="h-4 w-4 shrink-0 text-secondary mt-0.5" />
                        <span className="leading-snug">{formatHighlightedText(bulletText)}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
