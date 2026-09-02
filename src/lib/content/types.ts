import { type Locale } from "@/lib/i18n/config";

// A localized value where translations live side-by-side: { en: "...", es: "..." }
export type I18nString = {
  en: string;
  es?: string;
};

export type I18nField<T> = {
  en: T;
  es?: T;
};

export interface LocalizedNavItem {
  key: string;
  label: I18nString;
  href: string;
  badge?: I18nString;
}

export interface LocalizedFaqItem {
  question: I18nString;
  answer: I18nString;
}

export interface LocalizedStatItem {
  value: I18nString;
  label: I18nString;
  description: I18nString;
}

export interface LocalizedPricingPlan {
  id: string;
  name: I18nString;
  price: I18nString;
  tagline: I18nString;
  popular?: boolean;
  features: I18nString[];
  cta: I18nString;
}
