import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { BrandLockup } from "@/components/brand/brand-lockup";
import "../../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: "Dallas Skydive Center — Special Tandem Skydiving Offer",
  description: "Special limited-time skydiving offer for Dallas–Fort Worth. Jump from 14,000 FT.",
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#040817" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

export default async function LandingLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale: Locale = lang;

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider locale={locale}>
            {/* Minimal Subdomain Top Bar with Language Switcher and Theme Toggle */}
            <header className="w-full border-b border-line bg-background/80 backdrop-blur-md py-3 px-4 sm:px-6">
              <div className="mx-auto flex max-w-5xl items-center justify-between">
                <BrandLockup locale={locale} compact />
                <div className="flex items-center gap-2">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
              </div>
            </header>

            {/* Main Landing Campaign Area */}
            <main className="flex-1">{children}</main>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
