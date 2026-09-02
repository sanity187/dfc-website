<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Dallas Skydive Center — Project Guide & Agent Rules

## Product Overview
Dallas Skydive Center is the premier skydiving dropzone serving the Dallas–Fort Worth metroplex, offering tandem skydiving jumps from 14,000+ ft, Accelerated Freefall (AFF) solo licensing courses, media packages, and certified USPA dropzone operations.

## Core Directives & Modularity Rules (STRICT)

1. **Single-Purpose Functions & Components**:
   - Every function and component must have a single, clearly defined responsibility.
   - **One component per file** and **one custom hook per file**.
   - Group related components together in dedicated subfolders (e.g. `src/components/sections/home/`, `src/components/sections/tandem/`).
   - Break out helper utilities, sub-components, and logic instead of bundling them.
   - **Keep files concise (under ~150 lines).** If a component exceeds this, split sub-elements into primitives (`src/components/primitives/`) or sections.

2. **Zero Code Duplication & Reusability**:
   - Avoid rewriting or duplicating code.
   - Extract repeated UI patterns into `src/components/primitives/` (e.g. `SectionHeading`, `DisplayTitle`, `PriceCard`, `Eyebrow`, `StatCounter`).
   - Extract reusable logic into `src/hooks/` or `src/lib/`.

3. **Server Components First (`'use client'` Policy)**:
   - **DO NOT USE `'use client'` unless strictly necessary.**
   - All layouts, pages, and major section wrappers must remain Server Components.
   - Keep `'use client'` boundaries isolated to leaf-level interactive elements only (e.g., `ThemeToggle`, `MobileNav`, interactive modals, dropdowns).

4. **Side-by-Side Multilingual Content Library**:
   - **NO hardcoded copy in JSX/TSX.**
   - All text, headings, button labels, descriptions, and FAQs live in `src/lib/content/` (`common.ts`, `home.ts`, `tandem.ts`, `learn.ts`, `pricing.ts`, `safety.ts`, `contact.ts`, `mega-menu.ts`, `landing.ts`).
   - Translations live side-by-side per field: `{ title: { en: "Experience 14,000 FT", es: "Vive la Emoción a 14,000 Pies" } }`.
   - Resolve strings with `t(field, locale)` or arrays with `tList(list, locale)` from `@/lib/i18n/resolve`. Easily expandable to future languages.

5. **Landing Page Subdomain Isolation**:
   - Subdomain `landing` (e.g. `landing.dallasskydivecenter.com`) is isolated from the main site.
   - Handled via middleware (`src/proxy.ts`) routing directly to `src/app/landing/` with its own independent layout and tracking.
   - Keep the landing pages folder isolated and cleanly separated from main site routes.

6. **Theming & Color Rules**:
   - Primary: `#011982` (Stratosphere Navy)
   - Secondary: `#FBA713` (Parachute Gold / Amber)
   - Colors are defined as CSS variables in `src/app/globals.css` and exposed through Tailwind CSS v4 `@theme inline`.
   - Never hardcode raw hex colors in components; use theme tokens (`bg-primary`, `text-secondary`, `bg-canvas`, `text-ink`, `border-line`, etc.).
   - Support both Light and Dark modes seamlessly.

## Architecture & Directory Layout

```
src/
  app/
    globals.css              # Theme tokens, dark/light CSS variables, Tailwind v4
    icon.svg                 # SVG Brand favicon
    robots.ts                # Dynamic robots.txt
    sitemap.ts               # Localized dynamic sitemap
    [lang]/                  # Localized main site routes
      layout.tsx             # Root layout with <html lang>, ThemeProvider, Header, Footer
      page.tsx               # Home page shell
      tandem-skydiving/      # Tandem jump page shell
      learn-to-skydive/      # AFF & license courses page shell
      pricing/               # Pricing & packages page shell
      safety-fleet/          # Aircraft & safety page shell
      about/                 # About dropzone page shell
      contact/               # Directions & contact page shell
      book/                  # Booking checkout page shell
    landing/                 # Subdomain campaign landing pages
      layout.tsx             # Dedicated minimal landing page layout
      page.tsx               # Campaign landing page shell
  components/
    brand/                   # BrandMark, BrandLockup, SkydivingBadges
    layout/                  # SiteHeader, SiteFooter, DesktopNav, MobileNav, LanguageSwitcher
    primitives/              # Atomic UI elements (Eyebrow, DisplayTitle, SectionHeading, PriceCard, StatCounter)
    sections/                # Route-specific section components (<route>/<section-name>.tsx)
    theme/                   # ThemeProvider, ThemeToggle
    ui/                      # shadcn primitives (button, sheet, dropdown-menu, etc.)
  hooks/                     # Custom single-purpose hooks (use-mounted.ts, etc.)
  lib/
    site-config.ts           # Dropzone coordinates, contact info, altitude specs, booking URLs
    utils.ts                 # cn() class merging utility
    i18n/                    # config.ts, paths.ts, resolve.ts, locale-context.tsx, structured-data.ts
    content/                 # Typed English and Spanish copy dictionaries
```

## Commands
- Dev Server: `yarn dev`
- Production Build: `yarn build`
- Lint: `yarn lint`
