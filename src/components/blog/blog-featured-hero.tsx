import Link from "next/link";
import { Clock, ArrowRight, Sparkles, User, ShieldCheck } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { blogContent } from "@/lib/content/blog";
import type { BlogPost } from "@/lib/blog/types";

import { getAuthorDisplayName } from "@/lib/blog/author";
import { resolvePostThumbnail } from "@/lib/media/video-utils";
import { AuthorAvatar } from "./author-avatar";
import { Play } from "lucide-react";

interface BlogFeaturedHeroProps {
  post: BlogPost;
  locale: Locale;
}

export function BlogFeaturedHero({ post, locale }: BlogFeaturedHeroProps) {
  const postUrl = localizedPath(locale, `/articles/${post.slug}`);
  const primaryCategory = post.categories?.[0];
  const { thumbnailUrl, hasVideo } = resolvePostThumbnail(post);
  const authorName = getAuthorDisplayName(post.author, post.author_name);
  const formattedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <section className="relative overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-br from-primary/10 via-panel to-secondary/10 p-6 sm:p-8 lg:p-10 shadow-sm mb-12">
      {/* Subtle background glow */}
      <div
        className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
        {/* Left Side: Editorial Details */}
        <div className="flex flex-col justify-between lg:col-span-7">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-[11px] font-black uppercase tracking-wider text-secondary-foreground shadow-xs">
                <Sparkles className="h-3 w-3" />
                <span>Featured Guide</span>
              </span>

              {primaryCategory && (
                <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-bold text-primary border border-line">
                  {primaryCategory.name}
                </span>
              )}

              {hasVideo && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/80 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white backdrop-blur-md shadow-xs border border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                  <span>Video</span>
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-ink hover:text-primary transition-colors leading-tight">
              <Link href={postUrl}>{post.title}</Link>
            </h2>

            {post.excerpt && (
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-dim leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-4">
            <div className="flex items-center gap-3 text-xs text-dim">
              <div className="flex items-center gap-2">
                <AuthorAvatar author={post.author} name={authorName} size="sm" />
                <span className="font-bold text-ink">{authorName}</span>
              </div>
              {formattedDate && <span aria-hidden="true">•</span>}
              {formattedDate && <span>{formattedDate}</span>}
              <span aria-hidden="true">•</span>
              <span className="flex items-center gap-1 font-semibold text-secondary">
                <Clock className="h-3.5 w-3.5" />
                <span>{post.reading_time_minutes || 5} {t(blogContent.card.minRead, locale)}</span>
              </span>
            </div>

            <Link
              href={postUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition-transform hover:scale-105 active:scale-95"
            >
              <span>{t(blogContent.card.readArticle, locale)}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right Side: Featured Image / Video Thumbnail */}
        <div className="lg:col-span-5">
          <Link
            href={postUrl}
            className="group relative block aspect-16/10 w-full overflow-hidden rounded-2xl border border-line shadow-md"
          >
            {thumbnailUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={thumbnailUrl}
                alt={post.featured_image_alt || post.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary/20 via-background to-secondary/20">
                <ShieldCheck className="h-12 w-12 text-primary" />
              </div>
            )}

            {hasVideo && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-xl transform scale-95 group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-6 w-6 fill-current translate-x-0.5" />
                </div>
              </div>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
