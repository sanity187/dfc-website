import Link from "next/link";
import { Clock, ArrowRight, Play } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { insightsContent } from "@/lib/content/insights";
import type { BlogPost } from "@/lib/blog/types";
import { getAuthorDisplayName } from "@/lib/blog/author";
import { resolvePostThumbnail } from "@/lib/media/video-utils";

interface InsightCompactCardProps {
  post: BlogPost;
  locale: Locale;
}

export function InsightCompactCard({ post, locale }: InsightCompactCardProps) {
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
    <article className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-line bg-panel p-4 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
      {/* Thumbnail Container */}
      <Link
        href={postUrl}
        className="relative aspect-16/10 sm:aspect-square sm:w-44 shrink-0 overflow-hidden rounded-xl bg-muted/30 block"
      >
        {thumbnailUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnailUrl}
            alt={post.featured_image_alt || post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary/10 to-secondary/10 text-xs font-bold text-dim">
            Dallas Skydive
          </div>
        )}

        {hasVideo && (
          <span className="absolute bottom-2 right-2 flex items-center justify-center h-6 w-6 rounded-full bg-black/80 text-secondary shadow-xs">
            <Play className="h-3 w-3 fill-current" />
          </span>
        )}
      </Link>

      {/* Content Area */}
      <div className="flex flex-1 flex-col justify-between pt-4 sm:pt-0 sm:pl-5">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-dim mb-2">
            {primaryCategory && (
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-bold text-primary">
                {primaryCategory.name}
              </span>
            )}
            {formattedDate && <span>{formattedDate}</span>}
            <span aria-hidden="true">•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-secondary" />
              <span>
                {post.reading_time_minutes || 5} {t(insightsContent.minRead, locale)}
              </span>
            </span>
          </div>

          <h4 className="text-base sm:text-lg font-bold tracking-tight text-ink group-hover:text-primary transition-colors line-clamp-2 leading-snug">
            <Link href={postUrl}>{post.title}</Link>
          </h4>

          {post.excerpt && (
            <p className="mt-1.5 text-xs text-dim line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-line/60 pt-2.5 text-xs">
          <span className="text-dim font-medium">{authorName}</span>
          <Link
            href={postUrl}
            className="inline-flex items-center gap-1 font-bold text-primary transition-all group-hover:gap-1.5"
          >
            <span>{t(insightsContent.readArticle, locale)}</span>
            <ArrowRight className="h-3.5 w-3.5 text-secondary" />
          </Link>
        </div>
      </div>
    </article>
  );
}
