import { I18nString } from "./types";

export interface LocalizedAmenityItem {
  title: I18nString;
  description: I18nString;
}

export const aboutContent = {
  eyebrow: {
    en: "OUR HERITAGE & MISSION",
    es: "NUESTRA HISTORIA Y MISIÓN",
  },
  title: {
    en: "About Dallas Skydive Center",
    es: "Acerca de Dallas Skydive Center",
  },
  subtitle: {
    en: "Over 25 years of aviation passion, safety culture, and pure Texas hospitality.",
    es: "Más de 25 años de pasión aeronáutica, cultura de seguridad y auténtica hospitalidad texana.",
  },
  storyHeading: {
    en: "North Texas’ Leading Skydiving Facility",
    es: "Las Mejores Instalaciones de Paracaidismo del Norte de Texas",
  },
  storyText: {
    en: "Founded by veteran military and commercial aviators, Dallas Skydive Center was built with one vision: provide the safest, highest, and most exhilarating skydiving experience in the Southwest. From our turbine fleet to our climate-controlled packing hangar and spectator lounge, every detail is engineered for unforgettable memories.",
    es: "Fundado por aviadores militares y comerciales veteranos, Dallas Skydive Center nació con una visión clara: brindar la experiencia de paracaidismo más segura, a mayor altura y más emocionante del suroeste. Desde nuestra flota de turbina hasta nuestro hangar climatizado y zona para espectadores, cada detalle está pensado para crear momentos inolvidables.",
  },
  amenitiesHeading: {
    en: "Dropzone Amenities",
    es: "Instalaciones y Servicios",
  },
  amenities: [
    {
      title: {
        en: "Spectator Viewing Deck",
        es: "Terraza de Observación para Espectadores",
      },
      description: {
        en: "Shaded outdoor and indoor viewing areas with open sightlines of parachutes touching down on our lush grass landing area.",
        es: "Áreas con sombra interiores y exteriores con vista despejada de los paracaídas aterrizando en nuestro campo.",
      },
    },
    {
      title: {
        en: "Climate-Controlled Briefing Suites",
        es: "Salas de Entrenamiento Climatizadas",
      },
      description: {
        en: "Comfortable air-conditioned training rooms with video debrief monitors and locker facilities.",
        es: "Aulas cómodas con aire acondicionado, pantallas para análisis en video y casilleros de seguridad.",
      },
    },
    {
      title: {
        en: "Pro Shop & Gear Rigging",
        es: "Tienda y Taller de Mantenimiento",
      },
      description: {
        en: "Full-service parachute rigging loft, altimeters, custom jump gear, and commemorative DSC apparel.",
        es: "Taller completo de plegado de paracaídas, altímetros, equipo de salto y ropa conmemorativa oficial de DSC.",
      },
    },
  ] as LocalizedAmenityItem[],
};
