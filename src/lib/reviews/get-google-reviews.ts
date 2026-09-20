import type { GoogleReviewItem, GooglePlacesSummary } from "./types";
import { VERIFIED_DROPZONE_REVIEWS } from "./verified-reviews";

export * from "./types";

const DEFAULT_PLACE_ID = "ChIJ4a3yQTf7S4YRt9hH2-vRF7A";
const DEFAULT_MAPS_URI = "https://maps.google.com/?cid=12688841286066100407";

export async function getGooglePlacesReviews(): Promise<GooglePlacesSummary> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID || DEFAULT_PLACE_ID;

  if (!apiKey) {
    return {
      rating: 4.9,
      userRatingCount: 1713,
      reviews: VERIFIED_DROPZONE_REVIEWS,
      photos: [],
      googleMapsUri: DEFAULT_MAPS_URI,
    };
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}`;
    const fieldMask = "id,displayName,rating,userRatingCount,reviews,photos,googleMapsUri";

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": fieldMask,
      },
      next: { revalidate: 172800 }, // 48-hour static ISR cache
    });

    if (!res.ok) {
      console.warn(`[GooglePlaces] API returned status ${res.status}. Using verified dropzone reviews.`);
      return {
        rating: 4.9,
        userRatingCount: 1713,
        reviews: VERIFIED_DROPZONE_REVIEWS,
        photos: [],
        googleMapsUri: DEFAULT_MAPS_URI,
      };
    }

    const data = await res.json();
    const liveReviews: GoogleReviewItem[] = (data.reviews || []).map(
      (rev: {
        name?: string;
        rating?: number;
        text?: { text?: string };
        relativePublishTimeDescription?: string;
        publishTime?: string;
        authorAttribution?: { displayName?: string; photoUri?: string; uri?: string };
      }, index: number) => ({
        id: rev.name || `live-rev-${index}`,
        authorName: rev.authorAttribution?.displayName || "Skydive Adventurer",
        authorPhotoUrl: rev.authorAttribution?.photoUri,
        authorUrl: rev.authorAttribution?.uri,
        rating: rev.rating || 5,
        text: rev.text?.text || "",
        relativeTime: rev.relativePublishTimeDescription || "Recent",
        publishTime: rev.publishTime,
      })
    );

    // Merge live Google reviews with verified dropzone reviews, deduplicating by author name
    const seenAuthors = new Set<string>();
    const mergedReviews: GoogleReviewItem[] = [];

    for (const r of [...liveReviews, ...VERIFIED_DROPZONE_REVIEWS]) {
      const key = r.authorName.toLowerCase().trim();
      if (!seenAuthors.has(key)) {
        seenAuthors.add(key);
        mergedReviews.push(r);
      }
    }

    const photos = (data.photos || []).slice(0, 8).map(
      (photo: { name: string; authorAttributions?: { displayName?: string }[] }) => ({
        name: photo.name,
        photoUrl: `https://places.googleapis.com/v1/${photo.name}/media?maxHeightPx=600&maxWidthPx=800&key=${apiKey}`,
        authorName: photo.authorAttributions?.[0]?.displayName,
      })
    );

    return {
      rating: data.rating || 4.9,
      userRatingCount: data.userRatingCount || 1713,
      reviews: mergedReviews,
      photos,
      googleMapsUri: data.googleMapsUri || DEFAULT_MAPS_URI,
    };
  } catch (error) {
    console.error("[GooglePlaces] Failed to fetch reviews:", error);
    return {
      rating: 4.9,
      userRatingCount: 1713,
      reviews: VERIFIED_DROPZONE_REVIEWS,
      photos: [],
      googleMapsUri: DEFAULT_MAPS_URI,
    };
  }
}
