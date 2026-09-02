import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import {
  getPostBySlug,
  getAllPostSlugs,
  getRelatedPosts,
  getAuthorRecentPosts,
} from "@/lib/blog/queries";
import { extractFirstVideoUrl, parseVideoUrl } from "@/lib/media/video-utils";
import { ArticleHeader } from "@/components/blog/article-header";
import { ArticleBody } from "@/components/blog/article-body";
import { ArticleAuthorCard } from "@/components/blog/article-author-card";
import { ArticleCta } from "@/components/blog/article-cta";
import { RelatedPosts } from "@/components/blog/related-posts";
import { siteConfig } from "@/lib/site-config";

interface ArticlePageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
  searchParams?: Promise<{
    video?: string;
    main?: string;
  }>;
}

// Ensure Next.js allows rendering dynamic slugs not present at build time
export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();
    const paramsList: { lang: string; slug: string }[] = [];

    for (const lang of locales) {
      for (const slug of slugs) {
        paramsList.push({ lang, slug });
      }
    }

    return paramsList;
  } catch (error) {
    console.error("Error generating static params for articles:", error);
    return [];
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const title = post.meta_title || post.title;
  const description = post.meta_description || post.excerpt || `${post.title} — Dallas Skydive Center`;
  const canonicalPath = localizedPath(locale, `/articles/${post.slug}`);
  const ogImage = post.og_image_url || post.featured_image_url || undefined;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: localizedPath("en", `/articles/${post.slug}`),
        es: localizedPath("es", `/articles/${post.slug}`),
      },
    },
    openGraph: {
      type: "article",
      title: `${title} — ${siteConfig.name}`,
      description,
      url: canonicalPath,
      publishedTime: post.published_at || undefined,
      modifiedTime: post.updated_at || undefined,
      authors: post.author_name ? [post.author_name] : undefined,
      images: ogImage ? [{ url: ogImage, alt: post.featured_image_alt || post.title }] : undefined,
    },
  };
}

export default async function ArticlePage({ params, searchParams }: ArticlePageProps) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale: Locale = lang;

  const { video: videoQuery, main: mainQuery } = (await searchParams) || {};

  // Query database dynamically for slug
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  // Detect if article contains a video
  const detectedVideoUrl = extractFirstVideoUrl(post.body_markdown || post.body_html);
  const isVideoDisabled = videoQuery === "false" || mainQuery === "false";
  const isVideoHero = Boolean(detectedVideoUrl) && !isVideoDisabled;
  const videoDetails = isVideoHero && detectedVideoUrl ? parseVideoUrl(detectedVideoUrl) : null;

  const [relatedPosts, authorPosts] = await Promise.all([
    getRelatedPosts(post.id, 3),
    getAuthorRecentPosts(post.author_id, post.id, 3),
  ]);

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || post.meta_description,
    image: post.featured_image_url || videoDetails?.thumbnailUrl || undefined,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: {
      "@type": "Person",
      name: post.author_name || siteConfig.name,
      url: post.author?.website || undefined,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${localizedPath(locale, `/articles/${post.slug}`)}`,
    },
  };

  // If video is main hero, add Google-compliant VideoObject schema for rich search results
  if (isVideoHero && videoDetails) {
    jsonLd.video = {
      "@type": "VideoObject",
      name: post.title,
      description: post.excerpt || post.meta_description || post.title,
      thumbnailUrl: videoDetails.thumbnailUrl || post.featured_image_url,
      uploadDate: post.published_at || post.created_at,
      embedUrl: videoDetails.embedUrl || videoDetails.src,
      contentUrl: videoDetails.src,
    };
  }

  return (
    <article className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHeader
        post={post}
        locale={locale}
        videoUrl={isVideoHero ? detectedVideoUrl : null}
      />
      <ArticleBody
        markdown={post.body_markdown}
        html={post.body_html}
        isMainVideo={isVideoHero}
      />
      <ArticleAuthorCard
        author={post.author}
        authorName={post.author_name}
        authorPosts={authorPosts}
        locale={locale}
      />
      <ArticleCta locale={locale} />
      <RelatedPosts posts={relatedPosts} locale={locale} />
    </article>
  );
}
