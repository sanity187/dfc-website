import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { reviewsContent } from "@/lib/content/reviews";
import { getGooglePlacesReviews } from "@/lib/reviews/get-google-reviews";
import { SectionHeading } from "@/components/primitives/section-heading";
import { ReviewSummaryBadge } from "./review-summary-badge";
import { ReviewFilter } from "./review-filter";
import { ReviewPhotosStrip } from "./review-photos-strip";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

interface HomeReviewsSectionProps {
  locale: Locale;
}

export async function HomeReviewsSection({ locale }: HomeReviewsSectionProps) {
  const { rating, userRatingCount, reviews, photos, googleMapsUri } =
    await getGooglePlacesReviews();

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.toString(),
      reviewCount: userRatingCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.slice(0, 5).map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.authorName,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating.toString(),
        bestRating: "5",
      },
      reviewBody: r.text,
      datePublished: r.publishTime || "2025-01-01",
    })),
  };

  return (
    <section
      aria-label="Customer Reviews and Ratings"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col gap-10"
    >
      <JsonLd data={reviewSchema} />

      {/* Section Header */}
      <SectionHeading
        eyebrow={t(reviewsContent.eyebrow, locale)}
        title={t(reviewsContent.title, locale)}
        subtitle={t(reviewsContent.subtitle, locale)}
        align="center"
        as="h2"
      />

      {/* Google Rating Summary Banner */}
      <ReviewSummaryBadge
        rating={rating}
        totalReviews={userRatingCount}
        mapsUri={googleMapsUri}
        ratingLabel={t(reviewsContent.ratingBadge.label, locale)}
        reviewsLabel={t(reviewsContent.ratingBadge.countSuffix, locale)}
        viewAllLabel={t(reviewsContent.actions.viewAllGoogle, locale)}
      />

      {/* Interactive Filterable Reviews Grid */}
      <ReviewFilter
        reviews={reviews}
        verifiedLabel={t(reviewsContent.badges.verifiedJumper, locale)}
        filterLabels={{
          all: t(reviewsContent.filters.all, locale),
          fiveStars: t(reviewsContent.filters.fiveStars, locale),
          fourStars: t(reviewsContent.filters.fourStars, locale),
        }}
      />

      {/* Google Maps Customer Photos Strip */}
      <ReviewPhotosStrip
        photos={photos}
        title={t(reviewsContent.photosHeading.title, locale)}
        subtitle={t(reviewsContent.photosHeading.subtitle, locale)}
      />
    </section>
  );
}
