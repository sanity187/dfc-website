import Link from "next/link";
import { ChevronRight, Clock, Calendar, User } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { blogContent } from "@/lib/content/blog";
import type { BlogPost } from "@/lib/blog/types";

import { AuthorAvatar } from "./author-avatar";
import { getAuthorDisplayName } from "@/lib/blog/author";
import { MediaPlayer } from "@/components/media/media-player";

interface ArticleHeaderProps {
  post: BlogPost;
  locale: Locale;
  videoUrl?: string | null;
}

export function ArticleHeader({ post, locale, videoUrl }: ArticleHeaderProps) {
  const primaryCategory = post.categories?.[0];
  const authorName = getAuthorDisplayName(post.author, post.author_name);
  const formattedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <header className="mb-10">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-dim">
        <Link href={localizedPath(locale, "/")} className="hover:text-ink transition-colors">
          {t(blogContent.article.breadcrumbsHome, locale)}
        </Link>
        <ChevronRight className="h-3 w-3 text-dim/60" />
        <Link href={localizedPath(locale, "/articles")} className="hover:text-ink transition-colors">
          {t(blogContent.article.breadcrumbsBlog, locale)}
        </Link>
        {primaryCategory && (
          <>
            <ChevronRight className="h-3 w-3 text-dim/60" />
            <Link
              href={localizedPath(locale, `/articles?category=${primaryCategory.slug}`)}
              className="hover:text-ink transition-colors"
            >
              {primaryCategory.name}
            </Link>
          </>
        )}
      </nav>

      {/* Category Tag */}
      {primaryCategory && (
        <div className="mb-4">
          <Link
            href={localizedPath(locale, `/articles?category=${primaryCategory.slug}`)}
            className="inline-flex items-center rounded-full bg-secondary/15 px-3.5 py-1 text-xs font-bold text-secondary border border-secondary/20 hover:bg-secondary/25 transition-colors"
          >
            {primaryCategory.name}
          </Link>
        </div>
      )}

      {/* Article Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink leading-tight">
        {post.title}
      </h1>

      {/* Excerpt / Subtitle */}
      {post.excerpt && (
        <p className="mt-4 text-base sm:text-lg text-dim leading-relaxed">
          {post.excerpt}
        </p>
      )}

      {/* Metadata Bar */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-line py-4 text-xs sm:text-sm text-dim">
        <div className="flex items-center gap-3">
          <AuthorAvatar author={post.author} name={authorName} size="md" />
          <div>
            <span className="block font-bold text-ink">{authorName}</span>
            <span className="text-xs text-dim">{t(blogContent.article.writtenBy, locale)}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          {formattedDate && (
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-secondary" />
              <span>{formattedDate}</span>
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-secondary" />
            <span>{post.reading_time_minutes || 5} {t(blogContent.card.minRead, locale)}</span>
          </span>
        </div>
      </div>

      {/* Hero Media: Video Player (if video present & active) OR Featured Image */}
      {videoUrl ? (
        <div className="mt-8">
          <MediaPlayer
            src={videoUrl}
            title={post.title}
            poster={post.featured_image_url || undefined}
          />
        </div>
      ) : (
        post.featured_image_url && (
          <div className="relative mt-8 aspect-16/9 w-full overflow-hidden rounded-3xl border border-line shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.featured_image_url}
              alt={post.featured_image_alt || post.title}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        )
      )}
    </header>
  );
}
