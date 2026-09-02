import { siteConfig } from "@/lib/site-config";
import { type Locale } from "./config";
import { localizedPath } from "./paths";

// Real verified reviews from dallasskydivecenter.com
const dropzoneReviews = [
  {
    author: "Maximo Aguinaga",
    datePublished: "2024-05-12",
    reviewBody:
      "Came to do my first jump for my 21st, decided to do it by myself. From the time I walked in, to the time we went into the air and back to the ground, I had no nerves due to all of the staff making you feel comfortable and confident. Patricia was my instructor and rocked! Highly recommend jumping here!",
    reviewRating: {
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
  },
  {
    author: "Etienne tenie",
    datePublished: "2024-06-20",
    reviewBody:
      "Most breath taking and life full experience I’ve ever had. The view is unimaginable and unlike any other. For start to finish it was a very safe and well welcomed experience. The guides are well experienced and take care of each rider with the utmost precision. Smooth landing, 1000% would do again!",
    reviewRating: {
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
  },
  {
    author: "Brandon Washington",
    datePublished: "2024-07-15",
    reviewBody:
      "I LOVED IT! A surprise from my amazing wife was a 13,500FT VIP jump. Flips and all. Lucas was great, Jimmy the owner is funny and lighthearted but serious about his business. Truly amazing experience. Will do it again!",
    reviewRating: {
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
  },
];

// Comprehensive multi-layer JSON-LD Graph for Dallas Skydive Center
export function generateRootJsonLd(locale: Locale) {
  const isSpanish = locale === "es";
  const canonicalUrl = `${siteConfig.url}${localizedPath(locale, "")}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      // 1. WebSite Schema
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        alternateName: [siteConfig.shortName, siteConfig.acronym, "Dallas Skydiving"],
        description: isSpanish
          ? "Centro de paracaidismo líder en Dallas-Fort Worth. Saltos tándem desde 14,000 pies, cursos AFF y paquetes multimedia."
          : "Premier skydiving dropzone in Dallas–Fort Worth offering 14,000 ft tandem jumps, AFF solo certification courses, and media packages.",
        inLanguage: isSpanish ? "es-US" : "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.url}/pricing?search={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },

      // 2. Primary Organization / LocalBusiness / SportsActivityLocation
      {
        "@type": ["SportsActivityLocation", "LocalBusiness", "Corporation"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        slogan: siteConfig.slogan,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/icon.svg`,
          width: "512",
          height: "512",
          caption: "Dallas Skydive Center Official Logo",
        },
        image: [
          `${siteConfig.url}/icon.svg`,
        ],
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "$$ - $$$",
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, Credit Card, Debit Card, Visa, Mastercard, American Express, Discover",
        description: isSpanish
          ? "Dallas Skydive Center es la zona de salto más cercana a Dallas (a solo 36 millas). Ofrece saltos tándem desde 14,000 pies, caída libre a 120 MPH, instructores certificados por la USPA y paquetes de fotos/videos 4K."
          : "Dallas Skydive Center is the closest dropzone to Dallas (only 36 miles). Offering tandem skydiving jumps from 14,000 FT, 120 MPH freefall, USPA master instructors, and 4K media packages.",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.zip,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.coordinates.latitude,
          longitude: siteConfig.coordinates.longitude,
        },
        hasMap: siteConfig.mapUrl,
        sameAs: [
          siteConfig.social.instagram,
          siteConfig.social.facebook,
          siteConfig.social.twitter,
          siteConfig.social.youtube,
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "19:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: "07:00",
            closes: "20:00",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.phoneRaw,
            contactType: "customer service",
            contactOption: "TollFree",
            areaServed: [
              "Dallas",
              "Fort Worth",
              "Arlington",
              "Plano",
              "Garland",
              "Irving",
              "Frisco",
              "McKinney",
              "Caddo Mills",
              "Rockwall",
              "Greenville",
              "Denton",
              "Texas",
            ],
            availableLanguage: ["English", "Spanish"],
          },
          {
            "@type": "ContactPoint",
            telephone: siteConfig.phoneRaw,
            contactType: "reservations",
            url: siteConfig.bookingUrl,
            availableLanguage: ["English", "Spanish"],
          },
        ],
        areaServed: [
          { "@type": "City", name: "Dallas", sameAs: "https://en.wikipedia.org/wiki/Dallas" },
          { "@type": "City", name: "Fort Worth", sameAs: "https://en.wikipedia.org/wiki/Fort_Worth,_Texas" },
          { "@type": "City", name: "Caddo Mills", sameAs: "https://en.wikipedia.org/wiki/Caddo_Mills,_Texas" },
          { "@type": "AdministrativeArea", name: "Dallas–Fort Worth metroplex", sameAs: "https://en.wikipedia.org/wiki/Dallas%E2%80%93Fort_Worth_metroplex" },
          { "@type": "AdministrativeArea", name: "North Texas", sameAs: "https://en.wikipedia.org/wiki/North_Texas" },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "350",
          bestRating: "5",
          worstRating: "1",
        },
        review: dropzoneReviews.map((rev) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: rev.author,
          },
          datePublished: rev.datePublished,
          reviewBody: rev.reviewBody,
          reviewRating: {
            "@type": "Rating",
            ratingValue: rev.reviewRating.ratingValue,
            bestRating: rev.reviewRating.bestRating,
            worstRating: rev.reviewRating.worstRating,
          },
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isSpanish ? "Servicios de Paracaidismo" : "Skydiving Services & Packages",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: isSpanish ? "Saltos Tándem" : "Tandem Skydiving Jumps",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: isSpanish ? "Salto Tándem a 14,000 Pies" : "14,000 FT Tandem Skydiving Jump",
                    description: isSpanish
                      ? "Salto en paracaídas tándem con instructor certificado por USPA desde 14,000 pies con 60s de caída libre a 120 MPH."
                      : "First-time tandem skydive harnessed to a USPA master instructor from 14,000 FT with 60 seconds of 120 MPH freefall.",
                    url: `${siteConfig.url}${localizedPath(locale, "/tandem-skydiving")}`,
                    provider: { "@id": `${siteConfig.url}/#organization` },
                  },
                  price: "219.00",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                  validFrom: "2026-01-01",
                  url: siteConfig.bookingUrl,
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: isSpanish ? "Paquete Multimedia Tándem VIP 4K" : "Tandem + Ultimate 4K Media Package",
                    description: isSpanish
                      ? "Salto tándem completo más video 4K profesional en el aire y paquete de fotos digitales de alta resolución."
                      : "Full tandem skydive including dedicated 4K multi-angle video, freefall footage, and high-resolution digital photo album.",
                    url: `${siteConfig.url}${localizedPath(locale, "/pricing")}`,
                    provider: { "@id": `${siteConfig.url}/#organization` },
                  },
                  price: "349.00",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                  validFrom: "2026-01-01",
                  url: siteConfig.bookingUrl,
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: isSpanish ? "Cursos de Certificación Solo" : "Solo Certification Courses (AFF)",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: isSpanish ? "Curso AFF Teórico y Primer Salto Solo" : "AFF Ground School & First Solo Jump Course",
                    description: isSpanish
                      ? "8 horas de curso teórico intensivo más salto de entrenamiento Categoría A con dos instructores en el aire."
                      : "8 hours of ground school plus Category A solo training skydive with two USPA in-air instructors.",
                    url: `${siteConfig.url}${localizedPath(locale, "/learn-to-skydive")}`,
                    provider: { "@id": `${siteConfig.url}/#organization` },
                  },
                  price: "399.00",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                  url: siteConfig.bookingUrl,
                },
              ],
            },
          ],
        },
      },
    ],
  };
}

// Generates BreadcrumbList Schema for any page
export function generateBreadcrumbJsonLd(
  locale: Locale,
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "es" ? "Inicio" : "Home",
        item: `${siteConfig.url}${localizedPath(locale, "")}`,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${siteConfig.url}${localizedPath(locale, item.path)}`,
      })),
    ],
  };
}

// Generates FAQPage Schema for FAQs
export function generateFaqJsonLd(
  faqs: { question: { en: string; es?: string }; answer: { en: string; es?: string } }[],
  locale: Locale = "en"
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question[locale] ?? faq.question.en,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer[locale] ?? faq.answer.en,
      },
    })),
  };
}

// Backward compatibility alias for root layout
export const sportsActivityLocationGraph = generateRootJsonLd;
