import type { GoogleReviewItem } from "./types";
import rawReviews from "./google-reviews.json";

export const VERIFIED_DROPZONE_REVIEWS: GoogleReviewItem[] = rawReviews as GoogleReviewItem[];
