import { type Locale } from "@/lib/i18n/config";
import { megaMenuContent } from "@/lib/content/mega-menu";
import { MegaMenu } from "./mega-menu";

interface DesktopNavProps {
  locale: Locale;
}

export function DesktopNav({ locale }: DesktopNavProps) {
  return (
    <nav className="hidden items-center lg:flex" aria-label="Main Mega Navigation">
      <MegaMenu locale={locale} content={megaMenuContent} />
    </nav>
  );
}
