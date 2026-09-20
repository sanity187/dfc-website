import type { Locale } from "@/lib/i18n/config";
import type { BlogPost } from "@/lib/blog/types";
import { InsightLeadCard } from "./insight-lead-card";
import { InsightCompactCard } from "./insight-compact-card";

interface InsightsGridProps {
  posts: BlogPost[];
  locale: Locale;
}

export function InsightsGrid({ posts, locale }: InsightsGridProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const [leadPost, ...secondaryPosts] = posts;

  if (secondaryPosts.length === 0) {
    return (
      <div className="max-w-2xl mx-auto w-full">
        <InsightLeadCard post={leadPost} locale={locale} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
      {/* Lead Article (Left 7 columns on desktop) */}
      <div className="lg:col-span-7 flex flex-col">
        <InsightLeadCard post={leadPost} locale={locale} />
      </div>

      {/* Secondary Articles (Right 5 columns on desktop) */}
      <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
        {secondaryPosts.slice(0, 2).map((post) => (
          <InsightCompactCard key={post.id} post={post} locale={locale} />
        ))}
      </div>
    </div>
  );
}
