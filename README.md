# Dallas Skydive Center — Official Website & Publishing Platform

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Database](https://img.shields.io/badge/Turso_DB-libSQL-44cc11?style=flat&logo=sqlite)](https://turso.tech/)

The official web platform and high-conversion content engine for **Dallas Skydive Center**, serving the Dallas–Fort Worth metroplex with tandem skydiving reservations, solo licensing programs (AFF), safety fleet specifications, bilingual content localization, automated TursoDB article publishing, universal media streaming, and isolated campaign landing pages for Google Ads / PPC marketing.

---

## 🎨 Theme & Styling System

The application features a modern, high-contrast visual design system with seamless **Light and Dark mode** support:

- **Primary / Stratosphere Navy**: `#011982` (`bg-primary`, `text-primary`, `border-primary`)
- **Secondary / Parachute Gold (Amber)**: `#FBA713` (`bg-secondary`, `text-secondary`, `border-secondary`)
- **Theme Tokens**: Defined as CSS variables in `src/app/globals.css` and exposed via Tailwind CSS v4 `@theme inline` (`--canvas`, `--panel`, `--line`, `--ink`, `--dim`).
- **Dark/Light Toggling**: Fully integrated with `next-themes` and a client-side theme switcher that respects system preferences and persists user choices.
- **Typography & Prose**: Custom `.article-prose` typography stylesheet ensuring optimal readability for long-form editorial content across all screen sizes.

---

## 🌐 Centralized Multilingual Content (`src/lib/content/`)

**Strict Policy: Zero hardcoded text in TSX/JSX components.**

All site copy, navigation items, page headings, button labels, descriptions, and FAQs are centralized in typed dictionaries located in `src/lib/content/`:

```
src/lib/content/
├── common.ts          # Global header, footer, navigation items, buttons
├── home.ts            # Homepage hero, stats, reviews, USPA badges
├── tandem.ts          # Tandem jump packages and altitude options
├── learn.ts           # AFF solo pilot course syllabus and progression
├── pricing.ts         # Jump rates, video packages, group discounts
├── safety.ts          # Fleet aircraft specs, gear maintenance, instructor credentials
├── about.ts           # Dropzone history, coordinates, facilities
├── contact.ts         # Contact info, map directions, operating hours
├── mega-menu.ts       # Desktop mega-menu links and preview cards
├── landing.ts         # PPC campaign landing copy and conversion forms
└── blog.ts            # Articles archive, filters, search, and author labels
```

### Side-by-Side Localization Structure
Translations live directly side-by-side per field, allowing straightforward translation updates and future expansion:
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
Strings are resolved cleanly with `t(field, locale)` or `tList(list, locale)` from `@/lib/i18n/resolve`.

---

## 🎯 PPC Campaign Landing Pages (`landing.dallasskydivecenter.com`)

The codebase houses dedicated campaign landing pages built specifically for **Google PPC and Paid Ad Campaigns**:

- **Subdomain Routing**: Handled seamlessly in middleware (`src/proxy.ts`). Requests arriving on the `landing` subdomain (e.g. `landing.dallasskydivecenter.com`) automatically map to the isolated `src/app/landing/` directory.
- **Isolated Layout & High Conversion**: Landing pages operate on their own independent minimal layout (`src/app/landing/[lang]/layout.tsx`), stripping away standard navigation to maximize booking conversion rates and eliminate lead leakage.
- **Sitemap Exclusion**: Campaign landing routes are **strictly excluded** from the organic XML sitemap (`/sitemap.xml`) and indexed search results to protect PPC campaign tracking, prevent duplicate content penalties, and keep ad variations isolated.

---

## 🚀 Articles Engine & Media Streaming (`/articles`)

### 1. Database-Driven Architecture (TursoDB)
- **Zero 404s via Hybrid SSG + Dynamic ISR**: Pre-renders published articles at build time (`generateStaticParams`) while querying TursoDB at runtime for any unbuilt or newly published article slugs (`dynamicParams = true`, `revalidate = 60`).
- **Markdown & HTML Rendering**: Supports both Markdown (`marked`) and raw HTML with automatic link parsing and sanitized output.
- **Author Profiles & Recent Articles**: Hydrates author profiles dynamically from the database, generating brand initials badges or custom avatar photos, and displaying a grid of other recent articles by that author.

### 2. Universal Media Player & Automatic Video Hero
- **Multi-Source Support**: Streams YouTube videos (`watch`, `youtu.be`, `embed`, `shorts`) and direct CDN files (`.mp4`, `.webm`, `.mov`, DigitalOcean Spaces, S3, Cloudinary).
- **Automatic Hero Media Promotion**:
  - If an article contains a YouTube or video stream URL, the platform **automatically promotes the video to the top 16:9 hero media position**.
  - **Deduplication**: Automatically removes the duplicate video from the body text below so it only appears once.
  - **Bypass / Fallback Option**: The video hero can be explicitly bypassed by passing `?video=false` or `?main=false` in the URL to view the static featured image banner instead.
- **Automatic Video Thumbnail Fallback**:
  - If an article has no uploaded image in the database, the system automatically pulls the high-definition YouTube poster frame to use on the article archive grid.
  - Cards containing videos display a pulsing `● VIDEO` badge and an animated gold Play button overlay on hover.
- **SEO-Optimized Schema.org `VideoObject`**:
  - Automatically injects Google-compliant `VideoObject` JSON-LD structured data with video thumbnail, title, description, and embed URL for rich video search results and carousels.

---

## 📁 Architecture & Directory Structure

```
├── .agents/                    # Agent rules and development standards
├── src/
│   ├── app/
│   │   ├── globals.css         # Theme tokens, dark/light CSS variables, article-prose styles
│   │   ├── icon.svg            # SVG Brand favicon
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   ├── sitemap.ts          # Localized dynamic sitemap querying TursoDB
│   │   ├── [lang]/             # Localized main site routes
│   │   │   ├── layout.tsx      # Root layout (Header, Footer, ThemeProvider)
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
│   │   └── landing/            # Subdomain PPC campaign landing pages (excluded from sitemap)
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
| **Styling** | Tailwind CSS v4 + Design Tokens |
| **Database** | TursoDB / libSQL (`@libsql/client`) |
| **Markdown** | Marked (`marked`) |
| **Icons** | Lucide React |
| **Theming** | next-themes (Dark & Light mode) |

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.18+ or Node.js 20+
- Yarn or NPM

### 2. Clone & Install
```bash
git clone https://github.com/sanity187/dfc-website.git
cd dfc-website
yarn install
```

### 3. Configure Environment Variables
Create a `.env` file in the project root:
```env
# TursoDB Credentials for Articles Engine
BLOG_URL="libsql://your-database-name.turso.io"
BLOG_API_KEY="your-turso-database-auth-token"
```

### 4. Development Server
```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build & Production

```bash
# Build optimized production bundle
yarn build

# Start local production server
yarn start

# Run linting checks
yarn lint
```

---

## 📄 License
Private repository &copy; 2026 Dallas Skydive Center. All rights reserved.
