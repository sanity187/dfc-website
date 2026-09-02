import { I18nString } from "./types";

export interface LocalizedMegaMenuLink {
  title: I18nString;
  description: I18nString;
  href: string;
  badge?: I18nString;
  iconName:
    | "plane"
    | "camera"
    | "sun"
    | "users"
    | "award"
    | "shield"
    | "map"
    | "compass"
    | "graduation"
    | "wind"
    | "book-open"
    | "help-circle";
}

export interface LocalizedMegaMenuCategory {
  id: string;
  label: I18nString;
  href?: string;
  featured: {
    tag: I18nString;
    title: I18nString;
    description: I18nString;
    imageUrl?: string;
    imageAlt?: string;
    href: string;
    cta: I18nString;
  };
  links: LocalizedMegaMenuLink[];
}

export const megaMenuContent = {
  categories: [
    {
      id: "experiences",
      label: { en: "Tandem Skydiving", es: "Salto Tándem" },
      href: "/tandem-skydiving",
      featured: {
        tag: { en: "14,000 FT HIGHEST EXIT", es: "14,000 PIES LA MAYOR ALTURA" },
        title: { en: "First-Time Tandem Jump", es: "Primer Salto Tándem" },
        description: {
          en: "Experience 60 seconds of 120 MPH freefall over Dallas with a USPA Master Instructor.",
          es: "Vive 60 segundos de caída libre a 120 MPH sobre Dallas con un instructor maestro de la USPA.",
        },
        href: "/tandem-skydiving",
        cta: { en: "Explore Tandem Jump", es: "Ver Salto Tándem" },
      },
      links: [
        {
          title: { en: "14,000 FT Tandem Skydive", es: "Salto Tándem a 14,000 Pies" },
          description: {
            en: "The ultimate first-timer leap from 2.5 miles up",
            es: "El salto esencial para principiantes desde 2.5 millas de altura",
          },
          href: "/tandem-skydiving",
          badge: { en: "Most Popular", es: "Más Popular" },
          iconName: "plane",
        },
        {
          title: { en: "4K HD Video & Photos", es: "Video 4K HD y Fotos" },
          description: {
            en: "Dedicated camera flyers & multi-angle cockpit footage",
            es: "Camarógrafos en el aire y tomas en cabina de alta resolución",
          },
          href: "/pricing",
          badge: { en: "4K Video", es: "Video 4K" },
          iconName: "camera",
        },
        {
          title: { en: "Sunset Skydiving Jumps", es: "Saltos al Atardecer" },
          description: {
            en: "Golden hour freefall with breathtaking Texas views",
            es: "Caída libre en la hora dorada con vistas impresionantes de Texas",
          },
          href: "/tandem-skydiving",
          iconName: "sun",
        },
        {
          title: { en: "Groups & Corporate Events", es: "Grupos y Eventos Corporativos" },
          description: {
            en: "Bachelor/bachelorette parties, team outings & $20 group discounts",
            es: "Despedidas, cumpleaños, empresas y descuentos de $20 por persona",
          },
          href: "/pricing",
          badge: { en: "Save $20/ea", es: "Ahorra $20 c/u" },
          iconName: "users",
        },
      ],
    },
    {
      id: "learn",
      label: { en: "Learn Solo (AFF)", es: "Aprende Solo (AFF)" },
      href: "/learn-to-skydive",
      featured: {
        tag: { en: "USPA A-LICENSE", es: "LICENCIA 'A' USPA" },
        title: { en: "Accelerated Freefall Course", es: "Curso de Caída Libre Acelerada" },
        description: {
          en: "Graduate from ground school to solo certified skydiver in an 8-category program.",
          es: "Gradúate de la escuela en tierra a paracaidista certificado en 8 categorías.",
        },
        href: "/learn-to-skydive",
        cta: { en: "View AFF Program", es: "Ver Programa AFF" },
      },
      links: [
        {
          title: { en: "First Jump Course (FJC)", es: "Curso del Primer Salto (FJC)" },
          description: {
            en: "8-hour ground school + Category A solo training jump",
            es: "8 horas de clase teórica + salto de entrenamiento Categoría A",
          },
          href: "/learn-to-skydive",
          badge: { en: "Start Here", es: "Empieza Aquí" },
          iconName: "graduation",
        },
        {
          title: { en: "Full 'A' License Path", es: "Ruta a la Licencia 'A'" },
          description: {
            en: "25-jump structured solo progression to world certification",
            es: "25 saltos estructurados para obtener tu licencia internacional",
          },
          href: "/learn-to-skydive",
          iconName: "award",
        },
        {
          title: { en: "Advanced Coaching & Rigging", es: "Entrenamiento Avanzado" },
          description: {
            en: "Canopy flight piloting, formation freefly & FAA packing",
            es: "Vuelo en campana, formaciones y plegado certificado",
          },
          href: "/safety-fleet",
          iconName: "compass",
        },
        {
          title: { en: "Licensed Jumpers & Gear Loft", es: "Paracaidistas Licenciados" },
          description: {
            en: "Turbine load tickets, gear checks & packing facilities",
            es: "Boletos de salto en turbina, revisión de equipo y hangares",
          },
          href: "/about",
          iconName: "wind",
        },
      ],
    },
    {
      id: "dropzone",
      label: { en: "Safety & Fleet", es: "Seguridad y Flota" },
      href: "/safety-fleet",
      featured: {
        tag: { en: "CLOSEST TO DALLAS", es: "LA MÁS CERCA DE DALLAS" },
        title: { en: "36 Miles from Downtown", es: "A 36 Millas del Centro" },
        description: {
          en: "Full-service aviation campus in Caddo Mills with private spectator deck & turbine aircraft.",
          es: "Campus de aviación en Caddo Mills con terraza para espectadores y aviones de turbina.",
        },
        href: "/contact",
        cta: { en: "Get Driving Directions", es: "Cómo Llegar" },
      },
      links: [
        {
          title: { en: "Aviation Safety & Rig Standards", es: "Seguridad y Estándares de Equipo" },
          description: {
            en: "100% USPA certified masters & Cypres 2 AAD computer backups",
            es: "100% instructores USPA y respaldo computarizado AAD Cypres 2",
          },
          href: "/safety-fleet",
          badge: { en: "100% Certified", es: "100% Certificado" },
          iconName: "shield",
        },
        {
          title: { en: "Turbine Jump Aircraft Fleet", es: "Flota de Aeronaves de Turbina" },
          description: {
            en: "High-climb turboprop jump planes reaching 14,000 FT in 15 mins",
            es: "Aviones turbohélice que alcanzan 14,000 pies en solo 15 minutos",
          },
          href: "/safety-fleet",
          iconName: "plane",
        },
        {
          title: { en: "Dropzone Amenities & Lounge", es: "Instalaciones y Terraza" },
          description: {
            en: "Spectator viewing deck, air-conditioned suites & picnic lawns",
            es: "Áreas de observación, salas climatizadas y jardines",
          },
          href: "/about",
          iconName: "compass",
        },
        {
          title: { en: "Location & DFW Driving Times", es: "Ubicación y Tiempos de Viaje" },
          description: {
            en: "35 mins from Dallas, 45 mins from Fort Worth via Interstate",
            es: "35 mins desde Dallas, 45 mins desde Fort Worth por autopista",
          },
          href: "/contact",
          iconName: "map",
        },
      ],
    },
    {
      id: "articles",
      label: { en: "Articles & Guides", es: "Artículos y Guías" },
      href: "/articles",
      featured: {
        tag: { en: "FEATURED ARTICLE", es: "ARTÍCULO DESTACADO" },
        title: { en: "Is Skydiving Safe? Real Risks & Standards", es: "¿Es Seguro el Paracaidismo? Riesgos y Estándares" },
        description: {
          en: "Explore skydiving safety with stats, training protocols, modern equipment checks, and common myths debunked.",
          es: "Descubre estadísticas de seguridad, protocolos de entrenamiento, equipo moderno y mitos desmentidos.",
        },
        imageUrl: "https://blog-image-storage.nyc3.cdn.digitaloceanspaces.com/4aa3dca8-fda0-4c68-8167-b6c1e4f3deaa/blog-images/b9658a86-8b97-4722-805c-e03aaa2f7c26.webp",
        imageAlt: "Bright red parachute fully open in clear blue sky with lone skydiver",
        href: "/articles/is-skydiving-safe",
        cta: { en: "Read Article", es: "Leer Artículo" },
      },
      links: [
        {
          title: { en: "All Articles & News", es: "Todos los Artículos" },
          description: {
            en: "Browse our directory of skydiving guides, stories & dropzone updates",
            es: "Explora nuestro directorio completo de guías, historias y novedades",
          },
          href: "/articles",
          badge: { en: "Browse All", es: "Ver Todos" },
          iconName: "book-open",
        },
        {
          title: { en: "Skydiving Safety & Stats", es: "Seguridad y Estadísticas" },
          description: {
            en: "USPA fatality data, backup parachute technology & certified gear",
            es: "Datos de la USPA, tecnología de reserva y equipo certificado",
          },
          href: "/articles?category=skydiving-safety",
          badge: { en: "Safety", es: "Seguridad" },
          iconName: "shield",
        },
        {
          title: { en: "First-Timer Jump FAQs", es: "Preguntas de Principiantes" },
          description: {
            en: "What to wear, weight limits, freefall speeds & booking guidance",
            es: "Qué vestir, límites de peso, velocidades y consejos para tu salto",
          },
          href: "/articles?category=faq",
          iconName: "help-circle",
        },
        {
          title: { en: "Solo Training & AFF Guides", es: "Entrenamiento Solo y AFF" },
          description: {
            en: "Progression to solo A-license, canopy flying & ground school",
            es: "Progresión a tu licencia A en solitario y escuela en tierra",
          },
          href: "/learn-to-skydive",
          iconName: "graduation",
        },
      ],
    },
  ] as LocalizedMegaMenuCategory[],
  directLinks: [
    { label: { en: "Pricing", es: "Precios" }, href: "/pricing" },
    { label: { en: "Dropzone", es: "Zona" }, href: "/about" },
    { label: { en: "Contact", es: "Contacto" }, href: "/contact" },
  ],
  quickBookPanel: {
    title: { en: "Ready for 14,000 FT?", es: "¿Listo para los 14,000 Pies?" },
    subtitle: {
      en: "Secure your weekend jump slot or ground school seat.",
      es: "Reserva tu salto de fin de semana o lugar en escuela en tierra.",
    },
    jumpTypeLabel: { en: "Choose Experience:", es: "Elige Experiencia:" },
    tandemOption: { en: "14,000 FT Tandem Jump ($219+)", es: "Salto Tándem 14,000 FT ($219+)" },
    vipOption: { en: "Tandem + 4K Media VIP ($349)", es: "Tándem + Paquete VIP 4K ($349)" },
    affOption: { en: "AFF Solo Ground School ($399)", es: "Escuela en Tierra AFF ($399)" },
    cta: { en: "Book Online Now", es: "Reservar en Línea" },
    phoneLabel: { en: "Or call our flight line:", es: "O llama a nuestra línea de vuelo:" },
  },
};
