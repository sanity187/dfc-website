export const siteConfig = {
  name: "Dallas Skydive Center",
  legalName: "Dallas Skydive Center, LLC",
  shortName: "Dallas Skydive",
  acronym: "DSC",
  slogan: "The Closest Dropzone to Dallas — You Live Here, You Jump Here!",
  url: "https://www.dallasskydivecenter.com",
  landingUrl: "https://landing.dallasskydivecenter.com",
  bookingUrl: "https://www.dallasskydivecenter.com/book-your-skydive-today/",
  phone: "(972) 552-7790",
  phoneRaw: "+19725527790",
  email: "info@dallasskydivecenter.com",
  address: {
    street: "3517 Co Rd 2615",
    city: "Caddo Mills",
    state: "TX",
    zip: "75135",
    country: "US",
    formatted: "3517 Co Rd 2615, Caddo Mills, TX 75135",
    metroArea: "Dallas–Fort Worth Metroplex",
    distanceFromDallas: "36 miles",
  },
  coordinates: {
    latitude: 33.0392216,
    longitude: -96.2468034,
  },
  mapUrl: "https://maps.google.com/?q=33.0392216,-96.2468034",
  hours: {
    weekday: "8:00 AM – Sunset",
    weekend: "7:00 AM – Sunset",
  },
  stats: {
    altitude: "14,000 FT",
    freefallSpeed: "120+ MPH",
    freefallDuration: "60 SEC",
    experienceYears: "25+ YRS",
    jumpsLogged: "75,000+",
    uspaCertified: "100%",
  },
  social: {
    instagram: "https://www.instagram.com/dallasskydivecenter/",
    facebook: "https://www.facebook.com/DallasSkydiveCenter/",
    twitter: "https://twitter.com/dallasskydive",
    youtube: "https://www.youtube.com/channel/UCz6i12_Pw0Z5KluO9pmjAIA",
  },
} as const;

export type SiteConfig = typeof siteConfig;
