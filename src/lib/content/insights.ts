import { I18nString } from "./types";

export interface InsightsContent {
  eyebrow: I18nString;
  title: I18nString;
  subtitle: I18nString;
  viewAll: I18nString;
  readArticle: I18nString;
  minRead: I18nString;
  byAuthor: I18nString;
  featuredBadge: I18nString;
  videoBadge: I18nString;
  emptyFallbackTitle: I18nString;
  emptyFallbackSubtitle: I18nString;
}

export const insightsContent: InsightsContent = {
  eyebrow: {
    en: "DROPZONE INTEL & GUIDES",
    es: "GUÍAS Y ARTÍCULOS DE PARACAIDISMO",
  },
  title: {
    en: "Latest Skydiving Guides & Insights",
    es: "Últimas Guías y Consejos de Paracaidismo",
  },
  subtitle: {
    en: "Safety statistics, first-timer jump preparation, AFF training progressions, and Texas skydiving insights written by USPA-certified jumpmasters.",
    es: "Estadísticas de seguridad, preparación para tu primer salto, cursos AFF y consejos de paracaidismo en Texas escritos por instructores certificados por la USPA.",
  },
  viewAll: {
    en: "Explore All Articles",
    es: "Ver Todos los Artículos",
  },
  readArticle: {
    en: "Read Guide",
    es: "Leer Guía",
  },
  minRead: {
    en: "min read",
    es: "min de lectura",
  },
  byAuthor: {
    en: "By",
    es: "Por",
  },
  featuredBadge: {
    en: "Featured Guide",
    es: "Guía Destacada",
  },
  videoBadge: {
    en: "Video Inside",
    es: "Incluye Video",
  },
  emptyFallbackTitle: {
    en: "Fresh Articles Arriving Soon",
    es: "Nuevos Artículos Próximamente",
  },
  emptyFallbackSubtitle: {
    en: "Our jumpmasters are currently authoring new flight debriefs and training walkthroughs.",
    es: "Nuestros instructores están preparando nuevas guías de vuelo y tutoriales.",
  },
};
