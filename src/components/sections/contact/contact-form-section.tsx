"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { contactContent } from "@/lib/content/contact";
import { SectionHeading } from "@/components/primitives/section-heading";
import { ContactFormSuccess } from "./contact-form-success";
import { ContactFormFields, type ContactFormData } from "./contact-form-fields";

interface ContactFormSectionProps {
  locale: Locale;
}

export function ContactFormSection({ locale }: ContactFormSectionProps) {
  const { form } = contactContent;
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    interest: "tandem",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 800);
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData({ name: "", email: "", phone: "", interest: "tandem", message: "" });
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact-form" className="flex flex-col gap-10 scroll-mt-24">
      <SectionHeading
        eyebrow={t(form.eyebrow, locale)}
        title={t(form.title, locale)}
        subtitle={t(form.subtitle, locale)}
        align="center"
      />

      <div className="max-w-3xl mx-auto w-full bg-surface border border-line/70 rounded-3xl p-6 sm:p-10 shadow-sm">
        {status === "success" ? (
          <ContactFormSuccess locale={locale} onReset={handleReset} />
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <ContactFormFields locale={locale} formData={formData} onChange={handleChange} />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 w-full sm:w-auto self-start inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold bg-secondary hover:bg-secondary/90 text-canvas shadow-sm transition-transform active:scale-95 disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t(form.sendingBtn, locale)}</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>{t(form.submitBtn, locale)}</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
