import { CheckCircle2 } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { contactContent } from "@/lib/content/contact";

interface ContactFormSuccessProps {
  locale: Locale;
  onReset: () => void;
}

export function ContactFormSuccess({ locale, onReset }: ContactFormSuccessProps) {
  const { form } = contactContent;

  return (
    <div className="py-12 px-4 flex flex-col items-center text-center gap-4 animate-in fade-in zoom-in-95 duration-300">
      <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
        <CheckCircle2 className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold text-ink">{t(form.successTitle, locale)}</h3>
      <p className="text-dim max-w-md text-base leading-relaxed">{t(form.successMessage, locale)}</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-4 px-6 py-2.5 rounded-full text-sm font-semibold bg-primary/10 text-primary dark:bg-primary/20 hover:bg-primary/20 transition-colors"
      >
        {locale === "es" ? "Enviar Otro Mensaje" : "Send Another Message"}
      </button>
    </div>
  );
}
