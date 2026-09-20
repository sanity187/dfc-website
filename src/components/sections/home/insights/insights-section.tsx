import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { insightsContent } from "@/lib/content/insights";
import { getPublishedPosts } from "@/lib/blog/queries";
import { InsightsHeader } from "./insights-header";
import { InsightsGrid } from "./insights-grid";

interface HomeInsightsSectionProps {
  locale: Locale;
}

export async function HomeInsightsSection({ locale }: HomeInsightsSectionProps) {
  let posts: Awaited<ReturnType<typeof getPublishedPosts>>["posts"] = [];

  try {
    const result = await getPublishedPosts({ limit: 3 });
    posts = result.posts;
  } catch (error) {
    console.error("Failed to load published posts for HomeInsightsSection:", error);
  }

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section
      id="recent-insights"
      aria-label={t(insightsContent.title, locale)}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col gap-10"
    >
      <InsightsHeader locale={locale} />
      <InsightsGrid posts={posts} locale={locale} />
    </section>
  );
}
