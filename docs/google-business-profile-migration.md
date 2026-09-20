# Google Business Profile API — Migration Guide & Full Review Sync

This document outlines how to transition from the **Google Places API** (which limits review responses to 5 items) to the **Google Business Profile API (My Business API)** to access and sync **all 1,700+ authentic reviews** directly into [`src/lib/reviews/google-reviews.json`](../src/lib/reviews/google-reviews.json).

---

## 1. Architectural Overview

| Feature | Google Places API (Current) | Google Business Profile API (Target) |
| :--- | :--- | :--- |
| **Review Limit** | **Maximum 5 reviews** (hard Google cap) | **All reviews (1,700+)** |
| **Pagination** | ❌ No pagination supported | ✅ Supports `pageSize: 50` & `pageToken` |
| **Authentication** | Simple API Key (`GOOGLE_PLACES_API_KEY`) | OAuth 2.0 / Service Account with Google Business Profile Owner access |
| **Data Ingestion** | Runtime / ISR Fetch | Build-time or cron sync to `src/lib/reviews/google-reviews.json` |

---

## 2. Prerequisites & Google Cloud Console Setup

### Step 1: Enable APIs in Google Cloud Console
1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Select or create the project associated with Dallas Skydive Center.
3. Enable the following APIs:
   - **My Business Account Management API**
   - **My Business Business Information API**
   - **Google My Business API (v4)**

### Step 2: Ensure Ownership of Google Business Profile
The Google account used for authorization must have **Owner** or **Manager** permissions for the **Dallas Skydive Center** listing on Google Maps / Business Profile.

### Step 3: Create OAuth Credentials / Service Account
1. Under **APIs & Services > Credentials**, create an **OAuth 2.0 Client ID** (Desktop Application or Web Application).
2. Authorized redirect URI: `http://localhost:3000/oauth2callback` (or your domain).
3. Download the client secret JSON or note:
   - `CLIENT_ID`
   - `CLIENT_SECRET`

---

## 3. Obtaining Account ID & Location ID

Using the OAuth token:

### 1. List Accounts:
```http
GET https://mybusinessaccountmanagement.googleapis.com/v1/accounts
Authorization: Bearer <ACCESS_TOKEN>
```
Response:
```json
{
  "accounts": [
    {
      "name": "accounts/10293847561029384",
      "accountName": "Dallas Skydive Center",
      "type": "LOCATION_GROUP"
    }
  ]
}
```

### 2. List Locations:
```http
GET https://mybusinessbusinessinformation.googleapis.com/v1/accounts/10293847561029384/locations
Authorization: Bearer <ACCESS_TOKEN>
```
Note the resulting `locationId` (e.g. `locations/9876543210987654`).

---

## 4. Querying All Reviews with Pagination

Endpoint:
```http
GET https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews?pageSize=50&pageToken={pageToken}
Authorization: Bearer <ACCESS_TOKEN>
```

### Response Schema:
```json
{
  "reviews": [
    {
      "reviewId": "AbCdEf12345",
      "reviewer": {
        "displayName": "Maximo Aguinaga",
        "profilePhotoUrl": "https://lh3.googleusercontent.com/..."
      },
      "starRating": "FIVE",
      "comment": "Came to do my first jump for my 21st...",
      "createTime": "2024-05-12T15:20:00Z",
      "updateTime": "2024-05-12T15:20:00Z"
    }
  ],
  "averageRating": 4.9,
  "totalReviewCount": 1713,
  "nextPageToken": "CiAKGjB4ODY..."
}
```

---

## 5. Automated Review Ingestion Script

Create a Node.js sync script (e.g., `scripts/sync-google-reviews.mjs`) to automate paginating through all 1,700+ reviews and saving them into `google-reviews.json`:

```javascript
import fs from "fs";
import path from "path";

const ACCOUNT_ID = process.env.GOOGLE_BUSINESS_ACCOUNT_ID;
const LOCATION_ID = process.env.GOOGLE_BUSINESS_LOCATION_ID;
const ACCESS_TOKEN = process.env.GOOGLE_OAUTH_ACCESS_TOKEN;

const RATING_MAP = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

async function fetchAllReviews() {
  let allReviews = [];
  let pageToken = "";

  console.log("Fetching all reviews from Google Business Profile API...");

  do {
    const url = new URL(
      `https://mybusiness.googleapis.com/v4/accounts/${ACCOUNT_ID}/locations/${LOCATION_ID}/reviews`
    );
    url.searchParams.set("pageSize", "50");
    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
    });

    if (!res.ok) {
      throw new Error(`Google API returned status ${res.status}: ${await res.text()}`);
    }

    const data = await res.json();
    const reviews = data.reviews || [];

    for (const r of reviews) {
      allReviews.push({
        id: r.reviewId,
        authorName: r.reviewer?.displayName || "Google Reviewer",
        authorPhotoUrl: r.reviewer?.profilePhotoUrl,
        rating: RATING_MAP[r.starRating] || 5,
        text: r.comment || "",
        relativeTime: new Date(r.createTime).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        }),
        publishTime: r.createTime,
      });
    }

    pageToken = data.nextPageToken;
    console.log(`Synced ${allReviews.length} reviews...`);
  } while (pageToken);

  const outputPath = path.resolve("src/lib/reviews/google-reviews.json");
  fs.writeFileSync(outputPath, JSON.stringify(allReviews, null, 2), "utf8");
  console.log(`Successfully saved ${allReviews.length} reviews to ${outputPath}`);
}

fetchAllReviews().catch(console.error);
```

---

## 6. How the Next.js Frontend Works with the Exported Data

Once `google-reviews.json` is generated:
1. [`src/lib/reviews/verified-reviews.ts`](../src/lib/reviews/verified-reviews.ts) automatically loads the full JSON dataset at build time.
2. The UI in [`ReviewFilter`](../src/components/sections/home/reviews/review-filter.tsx) will seamlessly paginate through all hundreds of reviews (6 at a time with "Load More (+6)").
3. Star filtering ("All", "5 Stars", "4 Stars") operates across the entire archive instantly.
4. Googlebot indexes the pre-rendered reviews directly for rich search snippet indexing.

---

## 7. Alternative: Third-Party One-Time Bulk Export (Outscraper)

If OAuth setup is too complex or delayed:
1. Run a one-time export using [Outscraper Google Maps Reviews](https://outscraper.com/google-maps-reviews-scraper/) for Place ID `ChIJ4a3yQTf7S4YRt9hH2-vRF7A`.
2. Download the JSON results.
3. Map the fields to `{ id, authorName, authorPhotoUrl, rating, text, relativeTime, publishTime }` and overwrite [`src/lib/reviews/google-reviews.json`](../src/lib/reviews/google-reviews.json).
