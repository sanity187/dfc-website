import Link from "next/link";
import { ShieldCheck, ArrowRight, BookOpen, Clock } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { blogContent } from "@/lib/content/blog";
import { getAuthorDisplayName } from "@/lib/blog/author";
import { AuthorAvatar } from "./author-avatar";
import type { BlogAuthor, BlogPost } from "@/lib/blog/types";

interface ArticleAuthorCardProps {
  author?: BlogAuthor | null;
  authorName?: string | null;
  authorPosts?: BlogPost[];
  locale: Locale;
}

export function ArticleAuthorCard({
  author,
  authorName,
  authorPosts = [],
  locale,
}: ArticleAuthorCardProps) {
  const displayName = getAuthorDisplayName(author, authorName);
  const displayRole = author?.role || "Dropzone Editorial Staff";
  const displayBio =
    author?.bio ||
    "USPA Certified Skydiving Instructors & Jump Masters dedicated to safety, high-altitude tandem freefall, and world-class solo pilot licensing in Texas.";

  return (
    <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8 shadow-xs my-10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-secondary">
          {t(blogContent.article.authorBioHeading, locale)}
        </h3>

        <Link
          href={localizedPath(locale, `/articles?author=${encodeURIComponent(displayName)}`)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary transition-colors"
        >
          <span>{t(blogContent.article.viewAllAuthorArticles, locale)}</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-4">
        <AuthorAvatar author={author} name={displayName} size="lg" />

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-lg font-black text-ink">{displayName}</h4>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
              <ShieldCheck className="h-3 w-3" />
              <span>{displayRole}</span>
            </span>
          </div>

          <p className="mt-2 text-sm text-dim leading-relaxed">{displayBio}</p>
        </div>
      </div>

      {/* Other Articles by this Author */}
      {authorPosts && authorPosts.length > 0 && (
        <div className="mt-6 border-t border-line/60 pt-5">
          <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink mb-3">
            <BookOpen className="h-3.5 w-3.5 text-secondary" />
            <span>
              {t(blogContent.article.authorRecentArticles, locale)} {displayName}
            </span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {authorPosts.map((otherPost) => {
              const postUrl = localizedPath(locale, `/articles/${otherPost.slug}`);
              return (
                <Link
                  key={otherPost.id}
                  href={postUrl}
                  className="group flex flex-col justify-between rounded-xl border border-line/60 bg-background/50 p-3.5 transition-all hover:border-primary/40 hover:bg-primary/5 shadow-2xs"
                >
                  <div>
                    <h5 className="text-xs font-bold text-ink group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {otherPost.title}
                    </h5>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-dim border-t border-line/40 pt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="h-2.5 w-2.5 text-secondary" />
                      <span>
                        {otherPost.reading_time_minutes || 5} {t(blogContent.card.minRead, locale)}
                      </span>
                    </span>
                    <span className="font-semibold text-primary group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      <span>Read</span>
                      <ArrowRight className="h-2.5 w-2.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
