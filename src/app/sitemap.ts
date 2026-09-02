import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { locales } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { getAllPostSlugs } from "@/lib/blog/queries";

// Only indexable main domain routes are included.
// The landing page subdomain (landing.dallasskydivecenter.com) is strictly excluded
// from indexing and sitemaps (paid ads / campaigns only).
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const mainSiteRoutes = [
    "",
    "/tandem-skydiving",
    "/learn-to-skydive",
    "/pricing",
    "/safety-fleet",
    "/about",
    "/articles",
    "/contact",
    "/book",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of mainSiteRoutes) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${siteConfig.url}${localizedPath(locale, route)}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }
  }

  // Include dynamic blog articles
  try {
    const postSlugs = await getAllPostSlugs();
    for (const slug of postSlugs) {
      for (const locale of locales) {
        sitemapEntries.push({
          url: `${siteConfig.url}${localizedPath(locale, `/articles/${slug}`)}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.7,
        });
      }
    }
  } catch (error) {
    console.error("Error generating sitemap for blog articles:", error);
  }

  return sitemapEntries;
}
