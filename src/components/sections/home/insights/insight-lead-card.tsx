import Link from "next/link";
import { Clock, ArrowRight, Play, Sparkles } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { insightsContent } from "@/lib/content/insights";
import type { BlogPost } from "@/lib/blog/types";
import { getAuthorDisplayName } from "@/lib/blog/author";
import { resolvePostThumbnail } from "@/lib/media/video-utils";
import { AuthorAvatar } from "@/components/blog/author-avatar";

interface InsightLeadCardProps {
  post: BlogPost;
  locale: Locale;
}

export function InsightLeadCard({ post, locale }: InsightLeadCardProps) {
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
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-panel shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
      {/* Featured Image Container */}
      <Link href={postUrl} className="relative aspect-16/10 w-full overflow-hidden bg-muted/30 block">
        {thumbnailUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnailUrl}
            alt={post.featured_image_alt || post.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary/10 via-background to-secondary/10 text-xs font-bold text-dim">
            Dallas Skydive Center
          </div>
        )}

        {/* Badges Overlay */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground shadow-xs">
            <Sparkles className="h-3 w-3" />
            {t(insightsContent.featuredBadge, locale)}
          </span>
          {primaryCategory && (
            <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur-md shadow-xs border border-line/60">
              {primaryCategory.name}
            </span>
          )}
        </div>

        {hasVideo && (
          <span className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md shadow-xs border border-white/10">
            <Play className="h-3 w-3 fill-current text-secondary" />
            <span>{t(insightsContent.videoBadge, locale)}</span>
          </span>
        )}
      </Link>

      {/* Content Container */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
        <div>
          {/* Metadata Row */}
          <div className="flex items-center gap-3 text-xs text-dim mb-3">
            {formattedDate && <span>{formattedDate}</span>}
            {formattedDate && <span aria-hidden="true">•</span>}
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-secondary" />
              <span>
                {post.reading_time_minutes || 5} {t(insightsContent.minRead, locale)}
              </span>
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-ink group-hover:text-primary transition-colors leading-snug">
            <Link href={postUrl}>{post.title}</Link>
          </h3>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="mt-3 text-sm text-dim leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Card Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5">
            <AuthorAvatar author={post.author} name={authorName} size="sm" />
            <span className="font-semibold text-ink">{authorName}</span>
          </div>

          <Link
            href={postUrl}
            className="inline-flex items-center gap-1.5 font-bold text-primary transition-all group-hover:gap-2"
          >
            <span>{t(insightsContent.readArticle, locale)}</span>
            <ArrowRight className="h-4 w-4 text-secondary" />
          </Link>
        </div>
      </div>
    </article>
  );
}
