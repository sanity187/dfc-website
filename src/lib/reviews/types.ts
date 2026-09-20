export interface GoogleReviewItem {
  id: string;
  authorName: string;
  authorPhotoUrl?: string;
  authorUrl?: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime?: string;
}

export interface GooglePhotoItem {
  name: string;
  photoUrl: string;
  authorName?: string;
}

export interface GooglePlacesSummary {
  rating: number;
  userRatingCount: number;
  reviews: GoogleReviewItem[];
  photos: GooglePhotoItem[];
  googleMapsUri: string;
}
