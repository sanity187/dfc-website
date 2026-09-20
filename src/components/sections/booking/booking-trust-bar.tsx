import { ShieldCheck, Clock, CloudSun, Award } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";

interface BookingTrustBarProps {
  locale: Locale;
}

export function BookingTrustBar({ locale }: BookingTrustBarProps) {
  const items = [
    {
      icon: ShieldCheck,
      title: locale === "es" ? "100% Certificado USPA" : "100% USPA Certified",
      desc: locale === "es" ? "Instructores maestros con miles de saltos" : "Master instructors with thousands of logged jumps",
    },
    {
      icon: Clock,
      title: locale === "es" ? "Aviso de 48 Horas" : "48-Hour Rescheduling",
      desc: locale === "es" ? "Cambio de fecha sin costo con 48 hrs de aviso" : "Free reservation adjustments with 48 hours notice",
    },
    {
      icon: CloudSun,
      title: locale === "es" ? "Garantía de Clima" : "Weather Protection",
      desc: locale === "es" ? "Válido por 1 año si el clima suspende vuelos" : "100% transferable for 1 full year if weather delays flights",
    },
    {
      icon: Award,
      title: locale === "es" ? "La Mayor Altitud de Texas" : "Highest Altitude in Texas",
      desc: locale === "es" ? "Saltos de hasta 14,000 pies reales garantizados" : "Jumps up to 14,000 FT guaranteed from our Super Cessna fleet",
    },
  ];

  return (
    <div className="w-full py-8 border-t border-line/60">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface border border-line">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary dark:bg-primary/20 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-ink text-sm">{item.title}</h4>
                <p className="text-xs text-dim mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
