import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { constructLocalizedMetadata } from "@/lib/i18n/metadata";
import { sportsActivityLocationGraph } from "@/lib/i18n/structured-data";
import "../globals.css";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  return constructLocalizedMetadata(params);
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#040817" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

export default async function RootLayout({
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sportsActivityLocationGraph(locale)),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider locale={locale}>
            <div className="flex min-h-screen flex-col">
              <SiteHeader locale={locale} />
              <main className="flex-1">{children}</main>
              <SiteFooter locale={locale} />
            </div>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
