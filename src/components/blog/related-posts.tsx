import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { blogContent } from "@/lib/content/blog";
import { BlogCard } from "./blog-card";
import type { BlogPost } from "@/lib/blog/types";

interface RelatedPostsProps {
  posts: BlogPost[];
  locale: Locale;
}

export function RelatedPosts({ posts, locale }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="my-16 border-t border-line pt-12">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-ink">
          {t(blogContent.article.relatedArticlesHeading, locale)}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} locale={locale} />
        ))}
      </div>
    </section>
  );
}
