import { I18nString } from "./types";

export interface BlogContent {
  header: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
  };
  filters: {
    allCategories: I18nString;
    allTags: I18nString;
    searchPlaceholder: I18nString;
    searchButton: I18nString;
    clearFilters: I18nString;
    filterByAuthor: I18nString;
    filterByCategory: I18nString;
    activeFilter: I18nString;
  };
  card: {
    readArticle: I18nString;
    minRead: I18nString;
    byAuthor: I18nString;
  };
  article: {
    breadcrumbsHome: I18nString;
    breadcrumbsBlog: I18nString;
    publishedOn: I18nString;
    updatedOn: I18nString;
    writtenBy: I18nString;
    shareArticle: I18nString;
    copiedLink: I18nString;
    tagsHeading: I18nString;
    authorBioHeading: I18nString;
    authorRecentArticles: I18nString;
    viewAllAuthorArticles: I18nString;
    relatedArticlesHeading: I18nString;
    backToAllArticles: I18nString;
  };
  empty: {
    title: I18nString;
    description: I18nString;
    resetButton: I18nString;
  };
}

export const blogContent: BlogContent = {
  header: {
    eyebrow: {
      en: "Skydiving Guides & Dropzone News",
      es: "Guías de Paracaidismo y Noticias",
    },
    title: {
      en: "Expert Insights & Skydiving Articles",
      es: "Guías Expertas y Artículos de Paracaidismo",
    },
    subtitle: {
      en: "Everything you need to know about first-time jumps, safety statistics, AFF training, gear, and freefall tips in Dallas–Fort Worth.",
      es: "Todo lo que necesitas saber sobre primeros saltos, estadísticas de seguridad, cursos AFF, equipo y consejos en Dallas–Fort Worth.",
    },
  },
  filters: {
    allCategories: { en: "All Articles", es: "Todos los Artículos" },
    allTags: { en: "All Topics", es: "Todos los Temas" },
    searchPlaceholder: { en: "Search articles, safety, training...", es: "Buscar artículos, seguridad, cursos..." },
    searchButton: { en: "Search", es: "Buscar" },
    clearFilters: { en: "Clear Filters", es: "Limpiar Filtros" },
    filterByAuthor: { en: "Author:", es: "Autor:" },
    filterByCategory: { en: "Category:", es: "Categoría:" },
    activeFilter: { en: "Filtered by", es: "Filtrado por" },
  },
  card: {
    readArticle: { en: "Read Article", es: "Leer Artículo" },
    minRead: { en: "min read", es: "min de lectura" },
    byAuthor: { en: "By", es: "Por" },
  },
  article: {
    breadcrumbsHome: { en: "Home", es: "Inicio" },
    breadcrumbsBlog: { en: "Articles", es: "Artículos" },
    publishedOn: { en: "Published on", es: "Publicado el" },
    updatedOn: { en: "Updated", es: "Actualizado" },
    writtenBy: { en: "Written by", es: "Escrito por" },
    shareArticle: { en: "Share this article", es: "Compartir este artículo" },
    copiedLink: { en: "Link copied!", es: "¡Enlace copiado!" },
    tagsHeading: { en: "Related Topics", es: "Temas Relacionados" },
    authorBioHeading: { en: "About the Author", es: "Sobre el Autor" },
    authorRecentArticles: { en: "More Articles by", es: "Más Artículos de" },
    viewAllAuthorArticles: { en: "View All by Author", es: "Ver Todos del Autor" },
    relatedArticlesHeading: { en: "Related Skydiving Articles", es: "Artículos Relacionados" },
    backToAllArticles: { en: "Back to all articles", es: "Volver a todos los artículos" },
  },
  empty: {
    title: { en: "No articles found", es: "No se encontraron artículos" },
    description: {
      en: "We couldn't find any articles matching your search criteria. Try adjusting your filters or search keywords.",
      es: "No encontramos ningún artículo que coincida con tus criterios. Intenta cambiar los filtros o términos de búsqueda.",
    },
    resetButton: { en: "View All Articles", es: "Ver Todos los Artículos" },
  },
};
