import { LocalizedPricingPlan, I18nString } from "./types";

export interface LocalizedDiscountItem {
  title: I18nString;
  detail: I18nString;
}

export const pricingContent = {
  eyebrow: {
    en: "TRANSPARENT PRICING & PACKAGES",
    es: "PRECIOS Y PAQUETES TRANSPARENTES",
  },
  title: {
    en: "Dallas Skydiving Rates",
    es: "Tarifas de Paracaidismo en Dallas",
  },
  subtitle: {
    en: "No hidden fuel surcharges or surprise fees. Highest altitudes, guaranteed.",
    es: "Sin cargos ocultos por combustible ni sorpresas. La mayor altitud garantizada.",
  },
  plansHeading: {
    en: "Tandem Jump Packages",
    es: "Paquetes de Salto Tándem",
  },
  plans: [
    {
      id: "tandem-jump",
      name: {
        en: "14,000 FT Tandem Jump",
        es: "Salto Tándem a 14,000 Pies",
      },
      price: {
        en: "$219",
        es: "$219",
      },
      tagline: {
        en: "The quintessential first-time jump experience.",
        es: "La experiencia esencial para tu primer salto.",
      },
      popular: false,
      features: [
        { en: "14,000 FT Jump Altitude", es: "Altitud de Salto de 14,000 Pies" },
        { en: "60 Seconds Freefall (120 MPH)", es: "60 Segundos de Caída Libre (120 MPH)" },
        { en: "Dual-Certified USPA Tandem Master", es: "Instructor Tándem Maestro Certificado USPA" },
        { en: "Full Gear & Goggles Provided", es: "Equipo Completo y Goggles Incluidos" },
        { en: "Certificate of First Jump Achievement", es: "Certificado Oficial del Primer Salto" },
      ],
      cta: {
        en: "Book Tandem Jump",
        es: "Reservar Salto Tándem",
      },
    },
    {
      id: "tandem-vip",
      name: {
        en: "Tandem + Ultimate Media",
        es: "Tándem + Paquete Multimedia VIP",
      },
      price: {
        en: "$349",
        es: "$349",
      },
      tagline: {
        en: "Our most popular all-inclusive VIP jump package.",
        es: "Nuestro paquete VIP todo incluido más popular.",
      },
      popular: true,
      features: [
        { en: "14,000 FT Jump Altitude", es: "Altitud de Salto de 14,000 Pies" },
        { en: "Full 4K Video & High-Res Photos", es: "Video 4K Completo y Fotos de Alta Resolución" },
        { en: "Pre-Jump Interview & Boarding Footage", es: "Entrevista Previa y Tomas de Abordaje" },
        { en: "In-Air Freefall & Canopy Video", es: "Video de Caída Libre y Planeo en Paracaídas" },
        { en: "Instant Digital Delivery to Phone/Email", es: "Entrega Digital Inmediata a Celular/Correo" },
        { en: "Dallas Skydive Commemorative T-Shirt", es: "Camiseta Conmemorativa de Dallas Skydive" },
      ],
      cta: {
        en: "Book Ultimate VIP",
        es: "Reservar Paquete VIP",
      },
    },
    {
      id: "aff-course",
      name: {
        en: "AFF Ground School + Jump",
        es: "Curso Teórico AFF + Salto",
      },
      price: {
        en: "$399",
        es: "$399",
      },
      tagline: {
        en: "Step one toward your solo skydiving license.",
        es: "El primer paso para tu licencia de paracaidista.",
      },
      popular: false,
      features: [
        { en: "8 Hours Ground School Instruction", es: "8 Horas de Escuela en Tierra" },
        { en: "Category A Solo Training Jump", es: "Salto de Entrenamiento Categoría A" },
        { en: "Two Dedicated In-Air Instructors", es: "Dos Instructores Dedicados en el Aire" },
        { en: "USPA Logbook & Training Manual", es: "Bitácora y Manual Oficial de la USPA" },
        { en: "Radio Guided Canopy Flight", es: "Guía por Radio Durante el Vuelo en Paracaídas" },
      ],
      cta: {
        en: "Enroll in AFF",
        es: "Inscribirme en AFF",
      },
    },
  ] as LocalizedPricingPlan[],
  mediaHeading: {
    en: "Media & Video Packages",
    es: "Paquetes de Foto y Video",
  },
  mediaNote: {
    en: "Professional 4K multi-angle video and high-resolution digital photography recorded by dedicated camera flyers or instructor hand-cams.",
    es: "Video profesional 4K en múltiples ángulos y fotografía digital de alta resolución grabada por camarógrafos o cámara en mano del instructor.",
  },
  discountsHeading: {
    en: "Group & Special Discounts",
    es: "Descuentos Grupales y Especiales",
  },
  discounts: [
    {
      title: {
        en: "Groups of 5+",
        es: "Grupos de 5 o más",
      },
      detail: {
        en: "$20 off per person for parties, corporate outings, and bachelor/bachelorette groups.",
        es: "$20 de descuento por persona para eventos corporativos, cumpleaños y despedidas.",
      },
    },
    {
      title: {
        en: "Military & First Responders",
        es: "Militares y Primeros Respondientes",
      },
      detail: {
        en: "$20 off every tandem jump with valid active military or first responder ID.",
        es: "$20 de descuento en cualquier salto tándem con credencial militar o de servicio activa.",
      },
    },
    {
      title: {
        en: "College Students",
        es: "Estudiantes Universitarios",
      },
      detail: {
        en: "$15 off on weekdays with a valid university student identification card.",
        es: "$15 de descuento entre semana con credencial universitaria vigente.",
      },
    },
  ] as LocalizedDiscountItem[],
};
