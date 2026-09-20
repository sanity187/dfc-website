import { I18nString } from "./types";

export interface ServiceFeatureItem {
  id: string;
  title: I18nString;
  badge: I18nString;
  description: I18nString;
  tags: I18nString[];
  ctaText: I18nString;
  ctaHref: string;
  priceAnchor?: I18nString;
  image: string;
  imageAlt: I18nString;
}

export interface ServicesContent {
  eyebrow: I18nString;
  title: I18nString;
  subtitle: I18nString;
  tandem: ServiceFeatureItem;
  aff: ServiceFeatureItem;
  media: ServiceFeatureItem;
  fleet: ServiceFeatureItem;
}

export const servicesContent: ServicesContent = {
  eyebrow: {
    en: "SKYDIVING EXPERIENCES & SERVICES",
    es: "EXPERIENCIAS Y SERVICIOS DE PARACAIDISMO",
  },
  title: {
    en: "Explore Your Dropzone Options",
    es: "Explora Nuestras Opciones de Salto",
  },
  subtitle: {
    en: "From your very first tandem freefall at 14,000 feet to earning your solo skydiving license, we deliver safe, unforgettable Texas adventures.",
    es: "Desde tu primer salto tándem a 14,000 pies hasta obtener tu licencia de paracaidista en solitario, te brindamos aventuras inolvidables y seguras en Texas.",
  },
  tandem: {
    id: "tandem",
    title: {
      en: "14,000 FT Tandem Skydive",
      es: "Salto Tándem a 14,000 Pies",
    },
    badge: {
      en: "Most Popular · First-Time Jumpers",
      es: "El Más Popular · Para Principiantes",
    },
    description: {
      en: "Harnessed to a USPA-certified Master Tandem Instructor, plunge into 60 exhilarating seconds of 120 MPH freefall followed by a scenic 5-minute canopy glide over Lake Ray Hubbard and North Texas.",
      es: "Sujeto a un instructor tándem maestro certificado por la USPA, disfruta de 60 segundos de pura adrenalina a 120 MPH en caída libre, seguidos de un planeo panorámico de 5 minutos sobre Lake Ray Hubbard y el norte de Texas.",
    },
    tags: [
      { en: "14,000 FT Altitude", es: "14,000 Pies de Altura" },
      { en: "60s Freefall (120 MPH)", es: "60s Caída Libre (120 MPH)" },
      { en: "Zero Experience Needed", es: "Sin Experiencia Previa" },
      { en: "Dual-Harness Safety", es: "Arnés Doble Certificado" },
    ],
    priceAnchor: {
      en: "From $219",
      es: "Desde $219",
    },
    ctaText: {
      en: "Book Tandem Jump",
      es: "Reservar Salto Tándem",
    },
    ctaHref: "/book",
    image: "/images/services/tandem-jump.jpg",
    imageAlt: {
      en: "Tandem skydive pair smiling in freefall with instructor over Texas skies",
      es: "Pareja de salto tándem sonriendo en caída libre sobre los cielos de Texas",
    },
  },
  aff: {
    id: "aff",
    title: {
      en: "Learn to Skydive (AFF Solo License)",
      es: "Aprende a Saltar Solo (Licencia AFF)",
    },
    badge: {
      en: "Solo Certification",
      es: "Certificación Solitario",
    },
    description: {
      en: "Earn your USPA A-License through our Accelerated Freefall program. Intensive ground school paired with personalized one-on-one freefall coaching from your very first solo jump.",
      es: "Obtén tu licencia A de la USPA con nuestro programa Accelerated Freefall (AFF). Escuela en tierra intensiva y entrenamiento personalizado uno a uno desde tu primer salto individual.",
    },
    tags: [
      { en: "USPA A-License Path", es: "Ruta Licencia A USPA" },
      { en: "7-Category Progression", es: "Progresión de 7 Niveles" },
      { en: "One-on-One Coaching", es: "Entrenamiento Personalizado" },
    ],
    ctaText: {
      en: "Learn About AFF",
      es: "Conoce el Programa AFF",
    },
    ctaHref: "/learn-to-skydive",
    image: "/images/services/aff-solo.jpg",
    imageAlt: {
      en: "Solo skydiving student in stable arch freefall flanked by jumpmaster coaches",
      es: "Estudiante de paracaidismo en arco estable en caída libre guiado por instructores",
    },
  },
  media: {
    id: "media",
    title: {
      en: "4K Video & Photo Packages",
      es: "Paquetes Multimedia 4K y Fotos",
    },
    badge: {
      en: "Professional Freefall Media",
      es: "Contenido Profesional en Vuelo",
    },
    description: {
      en: "Relive every split-second rush. Have a dedicated videographer fly exterior formation with you or choose high-definition hand-cam coverage, fully edited for instant smartphone sharing.",
      es: "Revive cada segundo de pura adrenalina. Un camarógrafo volará en formación externa contigo o puedes elegir tomas en primera persona, listas para compartir en tu teléfono el mismo día.",
    },
    tags: [
      { en: "Ultra-HD 4K Video", es: "Video Ultra-HD 4K" },
      { en: "Dedicated Camera Flyer", es: "Camarógrafo en Formación" },
      { en: "Same-Day Digital Delivery", es: "Entrega Digital el Mismo Día" },
    ],
    ctaText: {
      en: "View Media Packages",
      es: "Ver Paquetes de Video",
    },
    ctaHref: "/pricing",
    image: "/images/services/media-package.jpg",
    imageAlt: {
      en: "Skydiving camera flyer recording video of a tandem skydive in freefall",
      es: "Camarógrafo paracaidista grabando un salto tándem en plena caída libre",
    },
  },
  fleet: {
    id: "fleet",
    title: {
      en: "Cessna 182 Jump Fleet & Safety",
      es: "Flota Cessna 182 y Seguridad",
    },
    badge: {
      en: "FAA & USPA Dropzone",
      es: "Zona Certificada FAA y USPA",
    },
    description: {
      en: "Fly in our dedicated, specially modified Cessna 182 jump planes maintained to rigorous FAA continuous inspection schedules. Every parachute rig is protected by a Cypres 2 computerized AAD.",
      es: "Vuela en nuestros aviones Cessna 182 especialmente adaptados para paracaidismo y mantenidos bajo estrictas inspecciones de la FAA. Cada equipo cuenta con el respaldo computarizado Cypres 2 AAD.",
    },
    tags: [
      { en: "Dedicated Cessna 182s", es: "Flota Exclusiva Cessna 182" },
      { en: "Cypres 2 AAD Computer Backup", es: "Respaldo Computarizado Cypres 2" },
      { en: "FAA Master Riggers", es: "Plegadores Maestros FAA" },
    ],
    ctaText: {
      en: "Explore Safety & Fleet",
      es: "Conoce Nuestra Seguridad",
    },
    ctaHref: "/safety-fleet",
    image: "/images/services/fleet-cessna.jpg",
    imageAlt: {
      en: "Dallas Skydive Center Cessna 182 jump aircraft on the runway under clear skies",
      es: "Aeronave Cessna 182 de Dallas Skydive Center en pista bajo cielo despejado",
    },
  },
};
