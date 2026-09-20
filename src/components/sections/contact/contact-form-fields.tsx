import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { contactContent } from "@/lib/content/contact";

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-canvas border border-line focus:outline-none focus:ring-2 focus:ring-primary text-ink placeholder:text-dim/60 text-sm";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

interface ContactFormFieldsProps {
  locale: Locale;
  formData: ContactFormData;
  onChange: (field: keyof ContactFormData, value: string) => void;
}

export function ContactFormFields({ locale, formData, onChange }: ContactFormFieldsProps) {
  const { form } = contactContent;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-ink">
            {t(form.nameLabel, locale)} <span className="text-secondary">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder={t(form.namePlaceholder, locale)}
            value={formData.name}
            onChange={(e) => onChange("name", e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-ink">
            {t(form.emailLabel, locale)} <span className="text-secondary">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder={t(form.emailPlaceholder, locale)}
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-semibold text-ink">
            {t(form.phoneLabel, locale)}
          </label>
          <input
            id="phone"
            type="tel"
            placeholder={t(form.phonePlaceholder, locale)}
            value={formData.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="interest" className="text-sm font-semibold text-ink">
            {t(form.interestLabel, locale)}
          </label>
          <select
            id="interest"
            value={formData.interest}
            onChange={(e) => onChange("interest", e.target.value)}
            className={inputClass}
          >
            <option value="tandem">{t(form.interests.tandem, locale)}</option>
            <option value="group">{t(form.interests.group, locale)}</option>
            <option value="aff">{t(form.interests.aff, locale)}</option>
            <option value="pricing">{t(form.interests.pricing, locale)}</option>
            <option value="general">{t(form.interests.general, locale)}</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-ink">
          {t(form.messageLabel, locale)} <span className="text-secondary">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={4}
          placeholder={t(form.messagePlaceholder, locale)}
          value={formData.message}
          onChange={(e) => onChange("message", e.target.value)}
          className={`${inputClass} resize-y`}
        />
      </div>
    </>
  );
}
