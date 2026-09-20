import { MapPin, Navigation, ExternalLink, Compass } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { contactContent } from "@/lib/content/contact";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/primitives/section-heading";

interface ContactMapSectionProps {
  locale: Locale;
}

export function ContactMapSection({ locale }: ContactMapSectionProps) {
  const { map } = contactContent;

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACES_ID || "ChIJ4a3yQTf7S4YRt9hH2-vRF7A";

  const mapEmbedSrc = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${placeId}&zoom=14`
    : `https://maps.google.com/maps?q=Dallas+Skydive+Center,+3517+County+Road+2615,+Caddo+Mills,+TX+75135&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  const navLinks = [
    {
      name: t(map.openGoogleMaps, locale),
      url: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.address.formatted)}`,
      badge: "Google Maps",
    },
    {
      name: t(map.openAppleMaps, locale),
      url: `https://maps.apple.com/?daddr=${siteConfig.coordinates.latitude},${siteConfig.coordinates.longitude}&q=${encodeURIComponent(siteConfig.name)}`,
      badge: "Apple Maps",
    },
    {
      name: t(map.openWaze, locale),
      url: `https://waze.com/ul?ll=${siteConfig.coordinates.latitude},${siteConfig.coordinates.longitude}&navigate=yes`,
      badge: "Waze",
    },
  ];

  return (
    <section id="map" className="flex flex-col gap-8 scroll-mt-24">
      <SectionHeading
        eyebrow={t(map.eyebrow, locale)}
        title={t(map.title, locale)}
        subtitle={t(map.subtitle, locale)}
        align="center"
      />

      <div className="flex flex-wrap items-center justify-center gap-3">
        {navLinks.map((nav) => (
          <a
            key={nav.badge}
            href={nav.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-surface border border-line hover:border-primary/40 hover:bg-primary/5 transition-all text-ink group shadow-xs"
          >
            <Navigation className="w-4 h-4 text-primary transition-transform group-hover:rotate-45" />
            <span>{nav.name}</span>
            <ExternalLink className="w-3.5 h-3.5 text-dim" />
          </a>
        ))}
      </div>

      <div className="relative w-full rounded-3xl overflow-hidden border border-line/80 shadow-md bg-surface">
        <div className="relative w-full h-[400px] sm:h-[500px]">
          <iframe
            title="Dallas Skydive Center Map Location"
            src={mapEmbedSrc}
            width="100%"
            height="100%"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="p-4 sm:p-6 bg-surface/95 backdrop-blur-xs border-t border-line/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-ink text-sm sm:text-base">{siteConfig.address.formatted}</p>
              <p className="text-xs text-dim">Caddo Mills Municipal Airport (FAA: 7F3) · Only 36 Miles from Dallas</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-dim px-3 py-1.5 rounded-lg bg-canvas border border-line">
            <Compass className="w-3.5 h-3.5 text-secondary" />
            <span>{map.coordinates}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
