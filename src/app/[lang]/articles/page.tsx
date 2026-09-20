import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Sparkles, HelpCircle } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { blogContent } from "@/lib/content/blog";
import { getPublishedPosts, getAllCategories } from "@/lib/blog/queries";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogFeaturedHero } from "@/components/blog/blog-featured-hero";
import { BlogFilters } from "@/components/blog/blog-filters";
import { BreadcrumbTrail } from "@/components/primitives/breadcrumb-trail";
import { siteConfig } from "@/lib/site-config";

interface ArticlesPageProps {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{
    category?: string;
    tag?: string;
    author?: string;
    search?: string;
  }>;
}

export const revalidate = 60;

export async function generateMetadata({ params }: ArticlesPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const isSpanish = locale === "es";

  const title = isSpanish
    ? "Artículos y Guías de Paracaidismo"
    : "Skydiving Articles & Dropzone Guides";
  const description = isSpanish
    ? "Descubre estadísticas de seguridad, guías para principiantes, cursos AFF y novedades de Dallas Skydive Center."
    : "Explore safety statistics, first-timer jump guides, AFF solo license training, and Texas dropzone news.";

  return {
    title,
    description,
    alternates: {
      canonical: localizedPath(locale, "/articles"),
      languages: {
        en: localizedPath("en", "/articles"),
        es: localizedPath("es", "/articles"),
      },
    },
    openGraph: {
      title: `${title} — ${siteConfig.name}`,
      description,
      url: localizedPath(locale, "/articles"),
    },
  };
}

export default async function ArticlesIndexPage({ params, searchParams }: ArticlesPageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale: Locale = lang;

  const { category, tag, author, search } = await searchParams;

  const [{ posts }, categories] = await Promise.all([
    getPublishedPosts({
      categorySlug: category,
      tagSlug: tag,
      authorName: author,
      search: search,
      limit: 24,
    }),
    getAllCategories(),
  ]);

  const hasFilters = Boolean(category || tag || author || search);
  const featuredPost = !hasFilters && posts.length > 0 ? posts[0] : null;
  const gridPosts = featuredPost ? posts.slice(1) : posts;

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Breadcrumb Navigation Trail */}
      <BreadcrumbTrail
        items={[{ label: t(blogContent.header.title, locale), href: "/articles" }]}
        locale={locale}
        className="mb-8"
      />

      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary/15 px-4 py-1 text-xs font-bold text-secondary mb-4 border border-secondary/20">
          <Sparkles className="h-3.5 w-3.5" />
          <span>{t(blogContent.header.eyebrow, locale)}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink">
          {t(blogContent.header.title, locale)}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-dim leading-relaxed">
          {t(blogContent.header.subtitle, locale)}
        </p>
      </div>

      {/* Featured Lead Post (Only when no search/filters active) */}
      {featuredPost && <BlogFeaturedHero post={featuredPost} locale={locale} />}

      {/* Filters (Search & Categories) */}
      <BlogFilters
        categories={categories}
        locale={locale}
        activeCategory={category}
        activeSearch={search}
        activeTag={tag}
        activeAuthor={author}
      />

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gridPosts.map((post) => (
            <BlogCard key={post.id} post={post} locale={locale} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-3xl border border-line bg-panel p-12 text-center my-8 shadow-xs">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-dim mb-4">
            <HelpCircle className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-black text-ink">{t(blogContent.empty.title, locale)}</h3>
          <p className="mt-2 text-sm text-dim max-w-md mx-auto">
            {t(blogContent.empty.description, locale)}
          </p>
          <div className="mt-6">
            <Link
              href={localizedPath(locale, "/articles")}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm hover:opacity-90"
            >
              {t(blogContent.empty.resetButton, locale)}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
