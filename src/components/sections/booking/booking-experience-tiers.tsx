import { Check } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { JumpTier } from "./booking-types";

interface BookingExperienceTiersProps {
  locale: Locale;
  selectedTier: JumpTier;
  onSelectTier: (tier: JumpTier) => void;
}

export function BookingExperienceTiers({ locale, selectedTier, onSelectTier }: BookingExperienceTiersProps) {
  const tiers: { id: JumpTier; title: string; subtitle: string; badge?: string }[] = [
    {
      id: "tandem-10k",
      title: locale === "es" ? "Salto Tándem Clásico (10,000 Pies)" : "Classic Tandem Skydive (10,000 FT)",
      subtitle: locale === "es" ? "50s de caída libre a 120 MPH · Vuelo panorámico de 20 min" : "50s freefall at 120 MPH · 20 min scenic ascent over DFW",
      badge: locale === "es" ? "Más Elegido" : "Most Popular",
    },
    {
      id: "tandem-vip",
      title: locale === "es" ? "Tándem VIP Extreme (13,500 Pies)" : "VIP Extreme Tandem (13,500 FT)",
      subtitle: locale === "es" ? "60–70s de caída libre (+20s extra) · Abordaje prioritario" : "60–70s freefall (+20s extra) · VIP priority manifest boarding",
      badge: locale === "es" ? "+$30 / Saltador" : "+$30 / Jumper",
    },
    {
      id: "aff-solo",
      title: locale === "es" ? "Curso de Licencia Solo AFF (Categoría A)" : "AFF Solo Certification Course (Cat A)",
      subtitle: locale === "es" ? "8 hrs de escuela en tierra + salto solo con 2 instructores" : "8 hrs intensive ground school + first solo jump with 2 instructors",
      badge: "$399",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {tiers.map((tier) => {
        const isSelected = selectedTier === tier.id;
        return (
          <button
            key={tier.id}
            type="button"
            onClick={() => onSelectTier(tier.id)}
            className={`flex flex-col justify-between p-4 rounded-2xl border text-left transition-all ${
              isSelected
                ? "bg-primary/5 dark:bg-primary/15 border-secondary ring-2 ring-secondary/40 shadow-sm"
                : "bg-surface border-line hover:border-line-focus"
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-secondary/15 text-secondary">{tier.badge}</span>
                {isSelected && <Check className="w-4 h-4 text-secondary" />}
              </div>
              <h3 className="font-bold text-ink text-sm sm:text-base mt-2">{tier.title}</h3>
              <p className="text-xs text-dim mt-1 leading-relaxed">{tier.subtitle}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
