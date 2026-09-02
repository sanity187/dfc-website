# Dallas Skydive Center — Official Website & Content Engine

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Database](https://img.shields.io/badge/Turso_DB-libSQL-44cc11?style=flat&logo=sqlite)](https://turso.tech/)

The official website and publishing platform for **Dallas Skydive Center**, the premier USPA-certified skydiving dropzone serving the Dallas–Fort Worth metroplex. The platform offers high-altitude tandem skydiving bookings, solo licensing courses (AFF), fleet safety specifications, bilingual content localization, and an automated database-driven articles engine with embedded media streaming.

---

## 🌟 Key Architecture & Features

### 1. Database-Driven Articles Engine (`/articles`)
- **Zero 404s via Hybrid SSG + Dynamic ISR**: Pre-renders known articles at build time (`generateStaticParams`) while querying TursoDB on-demand for newly published articles (`dynamicParams = true`, `revalidate = 60`).
- **Markdown & HTML Support**: Automatically parses Markdown (`marked`) or raw HTML with responsive typography styles (`.article-prose`).
- **Dynamic Category & Tag Filtering**: Real-time client-side search, category tabs, and active tag filtering.
- **Dynamic Author Profile Hydration**: Resolves author names and bios directly from the `users` profile table, generating sharp brand initials badges (e.g. `TS` for Travis Starks) or displaying custom photo avatars.
- **Author Recent Articles**: Displays other recent articles by that author directly within the author card, with dedicated author directory links (`/articles?author=...`).

### 2. Universal Media Player & Video Hero
- **Multi-Source Video Support**: Supports YouTube URLs (`watch`, `youtu.be`, `embed`, `shorts`) and direct CDN streams (`.mp4`, `.webm`, `.mov`, DigitalOcean Spaces, S3, Cloudinary, Azure Blob).
- **Automatic Article Video Detection**: Automatically detects YouTube and CDN video links within article copy and replaces them with an interactive 16:9 embedded player.
- **SEO-Optimized Video Hero Promotion**:
  - Automatically promotes detected videos to the main top hero banner in place of static images.
  - Automatically deduplicates the video from the body text below.
  - Generates Google-compliant **Schema.org `VideoObject`** structured data in JSON-LD for rich search results.
  - Supports manual override with `?video=false` to view the static image banner.
- **High-Performance Facade Poster**: Renders lightweight, high-res thumbnail posters with a custom gold play button that prevents heavy iframe scripts from loading until the user clicks play.
- **Video Badging & Card Play Overlay**: Articles containing videos display a pulsing `● VIDEO` badge and gold hover play button in the directory grid.

### 3. Side-by-Side Multilingual Localization
- **Zero Hardcoded Copy**: All UI copy, navigation, hero headers, button labels, and FAQs are managed in type-safe content dictionaries (`src/lib/content/`).
- **Side-by-Side Structure**: Translations are stored per field:
  ```ts
  title: {
    en: "Experience 14,000 FT Freefall",
    es: "Vive la Emoción a 14,000 Pies"
  }
  ```
- **Language Switcher**: Seamless language toggling with persistent locale cookies and localized canonical paths (`/en/...` and `/es/...`).

### 4. Subdomain Campaign Landing Isolation
- **Middleware Routing (`src/proxy.ts`)**: Requests from `landing.dallasskydivecenter.com` automatically route to `src/app/landing/` with an independent minimal layout and conversion tracking.

### 5. Automated SEO & Structured Data Engine
- **Schema.org Rich Snippets**:
  - `BlogPosting` and `VideoObject` for article pages.
  - `SportsActivityLocation` and `Organization` for the main dropzone business profile.
- **Dynamic Localized Sitemap (`/sitemap.xml`)**: Automatically queries all published post slugs from TursoDB to dynamically generate indexable XML sitemap entries across all languages.
- **Dynamic Robots (`/robots.txt`)**: Production search engine rules with direct sitemap index pointers.

### 6. Design System & Theme Tokens
- **Brand Palette**:
  - **Stratosphere Navy**: `#011982` (`bg-primary`, `text-primary`)
  - **Parachute Gold / Amber**: `#FBA713` (`bg-secondary`, `text-secondary`)
- **Tailwind CSS v4 `@theme inline`**: CSS variable design tokens supporting seamless Dark and Light modes.

---

## 📁 Project Directory Layout

```
├── .agents/                    # Agent rules and development standards
├── src/
│   ├── app/
│   │   ├── globals.css         # Theme tokens, dark/light CSS variables, article prose styles
│   │   ├── icon.svg            # SVG Brand favicon
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   ├── sitemap.ts          # Localized dynamic sitemap querying TursoDB
│   │   ├── [lang]/             # Localized main site routes
│   │   │   ├── layout.tsx      # Root localized layout (Header, Footer, ThemeProvider)
│   │   │   ├── page.tsx        # Homepage shell
│   │   │   ├── articles/       # Articles directory archive & filter grid
│   │   │   │   └── [slug]/     # Dynamic article view with Video Hero & Author card
│   │   │   ├── tandem-skydiving/
│   │   │   ├── learn-to-skydive/
│   │   │   ├── pricing/
│   │   │   ├── safety-fleet/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   └── book/
│   │   └── landing/            # Subdomain campaign landing pages
│   ├── components/
│   │   ├── blog/               # ArticleHeader, ArticleBody, ArticleAuthorCard, BlogCard, etc.
│   │   ├── brand/              # BrandMark, BrandLockup, SkydivingBadges
│   │   ├── layout/             # SiteHeader, SiteFooter, DesktopNav, MobileNav, LanguageSwitcher
│   │   ├── media/              # Universal MediaPlayer component (YouTube & CDN)
│   │   ├── primitives/         # Atomic UI elements (Eyebrow, DisplayTitle, SectionHeading, PageShell)
│   │   ├── theme/              # ThemeProvider, ThemeToggle
│   │   └── ui/                 # Accessible UI primitives (Button, Card, Badge)
│   ├── hooks/                  # Custom single-purpose hooks (useMounted, etc.)
│   └── lib/
│       ├── blog/               # TursoDB client, typed queries, markdown parser, author helpers
│       ├── content/            # Typed bilingual (EN/ES) dictionaries for all pages
│       ├── i18n/               # Locale configuration, paths, string resolution, structured data
│       ├── media/              # Video detection, thumbnail resolution, and embed injection
│       ├── site-config.ts      # Dropzone coordinates, contact info, altitude specs
│       └── utils.ts            # cn() class merging utility
```

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 + Custom Design Tokens |
| **Database** | TursoDB / libSQL (`@libsql/client`) |
| **Markdown** | Marked (`marked`) |
| **Icons** | Lucide React |
| **Theming** | next-themes (Dark & Light mode) |

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.18+ or Node.js 20+
- Yarn or NPM

### 2. Clone the Repository
```bash
git clone https://github.com/sanity187/dfc-website.git
cd dfc-website
```

### 3. Install Dependencies
```bash
yarn install
```

### 4. Configure Environment Variables
Create a `.env` file in the root directory:
```env
# TursoDB Credentials for Articles Engine
BLOG_URL="libsql://your-database-name.turso.io"
BLOG_API_KEY="your-turso-database-auth-token"
```

### 5. Run the Development Server
```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build & Production

To create an optimized production build:
```bash
yarn build
```

To start the production server locally:
```bash
yarn start
```

To run lint checks:
```bash
yarn lint
```

---

## 📝 Content Management & Adding Articles

Articles are stored dynamically in TursoDB. To publish a new article with embedded video:

1. **Add a Post in `posts` table**:
   - `title`: Article title
   - `slug`: URL slug (e.g. `tandem-jump-experience`)
   - `excerpt`: Summary snippet for search cards and meta descriptions
   - `body_markdown`: Markdown content. Paste any YouTube URL (e.g. `https://www.youtube.com/watch?v=...`) on its own line to automatically render the embedded video player.
   - `author_id`: Auth0 user ID mapping to the `users` table
   - `status`: `'published'`
   - `published_at`: ISO timestamp

2. **Automatic Video Hero**:
   - The first video link in the body is automatically promoted to the main 16:9 hero media at the top of the article.
   - If no custom image is uploaded, the high-definition YouTube poster frame is automatically used as the card thumbnail on `/articles`.

---

## 📄 License
Private repository &copy; 2026 Dallas Skydive Center. All rights reserved.
