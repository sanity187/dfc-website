import Link from "next/link";
import { Clock, ArrowRight, User } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { blogContent } from "@/lib/content/blog";
import type { BlogPost } from "@/lib/blog/types";

import { getAuthorDisplayName } from "@/lib/blog/author";
import { resolvePostThumbnail } from "@/lib/media/video-utils";
import { AuthorAvatar } from "./author-avatar";
import { Play } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  locale: Locale;
}

export function BlogCard({ post, locale }: BlogCardProps) {
  const primaryCategory = post.categories?.[0];
  const postUrl = localizedPath(locale, `/articles/${post.slug}`);
  const { thumbnailUrl, hasVideo } = resolvePostThumbnail(post);
  const authorName = getAuthorDisplayName(post.author, post.author_name);
  const formattedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1">
      {/* Thumbnail Image Container */}
      <Link href={postUrl} className="relative aspect-16/10 w-full overflow-hidden bg-muted/40 block">
        {thumbnailUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnailUrl}
            alt={post.featured_image_alt || post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary/15 via-background to-secondary/15 text-xs font-bold text-dim">
            Dallas Skydive Center
          </div>
        )}

        {primaryCategory && (
          <span className="absolute top-3 left-3 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-bold text-primary backdrop-blur-md shadow-xs border border-line/60">
            {primaryCategory.name}
          </span>
        )}

        {hasVideo && (
          <>
            <span className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-black/75 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-xs border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              <span>Video</span>
            </span>

            {/* Hover Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                <Play className="h-5 w-5 fill-current translate-x-0.5" />
              </div>
            </div>
          </>
        )}
      </Link>

      {/* Content Container */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          {/* Metadata Row: Date & Reading Time */}
          <div className="flex items-center gap-3 text-xs text-dim mb-2.5">
            {formattedDate && <span>{formattedDate}</span>}
            {formattedDate && <span aria-hidden="true">•</span>}
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-secondary" />
              <span>
                {post.reading_time_minutes || 5} {t(blogContent.card.minRead, locale)}
              </span>
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-black tracking-tight text-ink group-hover:text-primary transition-colors leading-snug">
            <Link href={postUrl}>{post.title}</Link>
          </h3>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="mt-2 text-xs sm:text-sm text-dim leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Footer: Author & Read CTA */}
        <div className="mt-5 flex items-center justify-between border-t border-line/60 pt-3.5 text-xs">
          <div className="flex items-center gap-2">
            <AuthorAvatar author={post.author} name={authorName} size="sm" />
            <span className="font-semibold text-ink">
              {authorName}
            </span>
          </div>

          <Link
            href={postUrl}
            className="flex items-center gap-1 font-bold text-primary transition-all group-hover:gap-1.5"
            aria-label={`${t(blogContent.card.readArticle, locale)}: ${post.title}`}
          >
            <span>{t(blogContent.card.readArticle, locale)}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
