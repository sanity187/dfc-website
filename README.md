# Dallas Skydive Center — Web Application Architecture

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Database](https://img.shields.io/badge/Turso_DB-libSQL-44cc11?style=flat&logo=sqlite)](https://turso.tech/)

A Next.js 16 (App Router) web application featuring a bilingual side-by-side content architecture, a headless CMS articles integration consuming from an external Blogger App (via TursoDB libSQL URL and API key), automatic media extraction with video hero promotion, and isolated subdomain routing for PPC campaign landing pages.

---

## 🎨 Theme & Styling System

The application uses Tailwind CSS v4 with design tokens exposed via `@theme inline` and CSS variables in `src/app/globals.css`:

- **Primary**: `#011982` (`bg-primary`, `text-primary`, `border-primary`)
- **Secondary / Accent**: `#FBA713` (`bg-secondary`, `text-secondary`, `border-secondary`)
- **Canvas / Panel Tokens**: `--canvas`, `--panel`, `--line`, `--ink`, `--dim`
- **Dark / Light Mode**: Managed via `next-themes` (`ThemeProvider`, `ThemeToggle`) with system preference detection and localStorage persistence.
- **Article Typography**: Standardized via `.article-prose` in `src/app/globals.css` for rendered Markdown and HTML elements (`h2`, `h3`, `ul`, `ol`, `blockquote`, `table`, `code`).

---

## 🌐 Content Architecture (`src/lib/content/`)

**Architecture Rule: Zero hardcoded copy in TSX/JSX components.**

All UI copy, route labels, navigation links, and descriptions reside in typed bilingual dictionaries in `src/lib/content/`:

```
src/lib/content/
├── common.ts          # Global header, footer, navigation items, buttons
├── home.ts            # Homepage content, statistics, feature blocks
├── tandem.ts          # Tandem jump packages and options
├── learn.ts           # AFF training course syllabus and steps
├── pricing.ts         # Rates, packages, and group pricing
├── safety.ts          # Fleet specifications and safety standards
├── about.ts           # Dropzone information, facilities, and coordinates
├── contact.ts         # Contact info, map coordinates, and operating hours
├── mega-menu.ts       # Desktop mega-menu navigation links and preview cards
├── landing.ts         # Campaign landing page copy and form fields
└── blog.ts            # Articles archive, filters, search, and author UI strings
```

### Bilingual Translation Schema
Translations are structured side-by-side per field:
```ts
export const homeContent = {
  hero: {
    title: {
      en: "Experience 14,000 FT Freefall",
      es: "Vive la Emoción a 14,000 Pies"
    },
    cta: {
      en: "Book Your Jump",
      es: "Reserva Tu Salto"
    }
  }
};
```
Resolved using `t(field, locale)` or `tList(list, locale)` from `@/lib/i18n/resolve`.

---

## 🎯 Subdomain Routing & PPC Campaign Landing Pages

The project contains a separate routing structure for paid advertising (Google Ads / PPC) hosted on the `landing` subdomain (`landing.dallasskydivecenter.com`):

- **Middleware Routing (`src/proxy.ts`)**: Rewrites incoming requests with hostname `landing.*` directly to `src/app/landing/`.
- **Isolated Layout**: Uses an independent, minimal layout (`src/app/landing/[lang]/layout.tsx`) without standard navigation to minimize bounce and increase conversion rates.
- **Excluded from Sitemaps**: Landing pages are explicitly excluded from `/sitemap.xml` and robots indexing to maintain PPC attribution integrity and prevent duplicate content indexing.

---

## 🚀 Headless Articles Consumer & Media Streaming (`/articles`)

### 1. Headless CMS Integration (Blogger App via TursoDB)
- **External Publishing Architecture**: This website does **not** contain an internal admin editor or publishing UI. Content authoring is handled entirely in an external 3rd-party application (**Blogger App**). The Blogger App provisions an organization-specific database endpoint and access key (`BLOG_URL`, `BLOG_API_KEY`).
- **Read-Only Data Consumer**: This Next.js application acts solely as a consumer/renderer, querying the database via `@libsql/client` to fetch published articles, author records, categories, and tags.
- **Hybrid SSG + Dynamic ISR (Zero 404s)**: Pre-renders known slugs via `generateStaticParams()` at build time, while dynamically querying and rendering newly created slugs from the database on-demand (`dynamicParams = true`, `revalidate = 60`).
- **Read-Only Schema Consumed**:
  - `posts`: `id`, `title`, `slug`, `excerpt`, `body_markdown`, `body_html`, `featured_image_url`, `author_id`, `author_name`, `status`, `published_at`, `created_at`, `updated_at`.
  - `users`: `id`, `name`, `email`, `avatar_url`, `role`, `bio`.
- **Author Hydration**: Author data is hydrated dynamically from the `users` table. Names default to `users.name` over legacy snapshot fields; avatars generate brand initials badges when no custom photo is provided.
- **Author Recent Articles**: Queries other published posts by the same author (`getAuthorRecentPosts`), rendered in the author card with deep links to filtered archives (`/articles?author=...`).

### 2. Universal Media Player & Video Hero
- **Component**: `src/components/media/media-player.tsx`
- **Supported Formats**: YouTube (`watch`, `youtu.be`, `embed`, `shorts`) and direct CDN streams (`.mp4`, `.webm`, `.mov`, DigitalOcean Spaces, S3, Cloudinary).
- **Auto-Promotion to Hero**:
  - If a video link exists in the article body (`body_markdown` or `body_html`), it is automatically extracted and rendered in the top 16:9 hero position.
  - The video is automatically stripped from the body text below to prevent duplication.
  - **Bypass Parameter**: Passing `?video=false` or `?main=false` in the URL bypasses the video hero and renders the static featured image banner instead.
- **Thumbnail Fallback**: If `featured_image_url` is null, the system automatically pulls the video poster frame (e.g. YouTube `maxresdefault.jpg` / `hqdefault.jpg`) for the card grid.
- **SEO Structured Data**: Injects Schema.org `VideoObject` structured data in JSON-LD alongside `BlogPosting` for rich video snippets in search engine results.

---

## 📁 Project Structure

```
├── .agents/                    # Agent guidelines and coding standards
├── src/
│   ├── app/
│   │   ├── globals.css         # CSS variables, Tailwind v4 tokens, .article-prose styles
│   │   ├── icon.svg            # SVG favicon
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   ├── sitemap.ts          # Localized dynamic sitemap querying TursoDB
│   │   ├── [lang]/             # Localized application routes
│   │   │   ├── layout.tsx      # Root layout (Header, Footer, ThemeProvider)
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── articles/       # Articles archive and filter grid
│   │   │   │   └── [slug]/     # Dynamic article page with video hero and author module
│   │   │   ├── tandem-skydiving/
│   │   │   ├── learn-to-skydive/
│   │   │   ├── pricing/
│   │   │   ├── safety-fleet/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   └── book/
│   │   └── landing/            # Subdomain PPC landing pages (isolated from sitemap)
│   ├── components/
│   │   ├── blog/               # ArticleHeader, ArticleBody, ArticleAuthorCard, BlogCard, etc.
│   │   ├── brand/              # BrandMark, BrandLockup, Badges
│   │   ├── layout/             # SiteHeader, SiteFooter, DesktopNav, MobileNav, LanguageSwitcher
│   │   ├── media/              # Universal MediaPlayer component
│   │   ├── primitives/         # Reusable UI building blocks (Eyebrow, DisplayTitle, SectionHeading)
│   │   ├── theme/              # ThemeProvider, ThemeToggle
│   │   └── ui/                 # Base UI primitives (Button, Card, Badge)
│   ├── hooks/                  # Custom hooks (useMounted, etc.)
│   └── lib/
│       ├── blog/               # TursoDB client, queries, markdown parser, author helpers
│       ├── content/            # Bilingual EN/ES copy dictionaries
│       ├── i18n/               # Localization config, paths, string resolution, structured data
│       ├── media/              # Video detection, thumbnail resolution, embed injection
│       ├── site-config.ts      # Dropzone coordinates, contact info, altitude specs
│       └── utils.ts            # cn() class merging utility
```

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Database** | TursoDB / libSQL (`@libsql/client`) |
| **Markdown Parsing** | Marked (`marked`) |
| **Icons** | Lucide React |
| **Theming** | next-themes |

---

## 🚀 Environment & Setup

### 1. Requirements
- Node.js 18.18+ or Node.js 20+
- Yarn or NPM

### 2. Installation
```bash
git clone https://github.com/sanity187/dfc-website.git
cd dfc-website
yarn install
```

### 3. Environment Variables
Create `.env` in the root directory:
```env
BLOG_URL="libsql://your-database-name.turso.io"
BLOG_API_KEY="your-turso-database-auth-token"
```

### 4. Development & Build Commands
```bash
# Start development server
yarn dev

# Create optimized production build
yarn build

# Run local production server
yarn start

# Execute ESLint checks
yarn lint
```

---

## 📄 License
Private repository &copy; 2026 Dallas Skydive Center. All rights reserved.
