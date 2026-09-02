# Coding Standards & Architecture Rules

## 1. Modularity & Single Responsibility
- **One component per file.**
- **One hook per file.**
- **One utility function / small set of closely related functions per file.**
- Keep all files under **150 lines**. Break complex sections into sub-primitives.
- Group components by route in `src/components/sections/<route>/`.
- Common UI atoms belong in `src/components/primitives/`.

## 2. Server Components First
- Default to React Server Components.
- Only add `'use client'` to leaf components that require event listeners, React state, or browser APIs.
- Pass data/content from Server Components down into Client Components via props.

## 3. Localization & Content Rules
- Never hardcode user-facing copy in JSX.
- Place all copy in `src/lib/content/` with typed translations for English (`en`) and Spanish (`es`).
- Use `pick(dictionary, lang)` in Server Components or `useLocale()` in Client Components.

## 4. Theme & Styling
- Use Tailwind CSS v4 CSS variables defined in `src/app/globals.css`.
- Use semantic utility classes: `bg-canvas`, `bg-panel`, `text-ink`, `text-dim`, `border-line`, `bg-primary`, `text-secondary`.
- Support both Light and Dark modes.

## 5. Landing Page Isolation
- Landing pages live under `src/app/landing/` and must not share the main navigation header/footer unless explicitly designed.
- Routed via middleware based on `landing.` subdomain.
