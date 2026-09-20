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
      id: "skydiving",
      label: { en: "Skydiving", es: "Paracaidismo" },
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
          title: { en: "14,000 FT Tandem Jump", es: "Salto Tándem a 14,000 Pies" },
          description: {
            en: "The essential first-time leap with 60s freefall from 2.5 miles high",
            es: "El salto esencial para principiantes con 60s de caída libre",
          },
          href: "/tandem-skydiving",
          badge: { en: "Popular", es: "Popular" },
          iconName: "plane",
        },
        {
          title: { en: "Learn to Skydive (AFF Solo)", es: "Aprende a Saltar Solo (AFF)" },
          description: {
            en: "8-hour ground school and progression to your official USPA A-license",
            es: "Escuela en tierra y ruta estructurada para tu licencia oficial USPA",
          },
          href: "/learn-to-skydive",
          badge: { en: "A-License", es: "Licencia A" },
          iconName: "graduation",
        },
        {
          title: { en: "4K HD Video & Photos", es: "Video 4K HD y Fotos" },
          description: {
            en: "Dedicated freefall camera flyers and cockpit departure footage",
            es: "Camarógrafos en el aire y tomas en cabina de alta resolución",
          },
          href: "/pricing",
          badge: { en: "Save $10", es: "Ahorra $10" },
          iconName: "camera",
        },
        {
          title: { en: "Groups & Celebrations", es: "Grupos y Celebraciones" },
          description: {
            en: "Birthdays, bachelor/ettes, corporate teams & group rate discounts",
            es: "Cumpleaños, despedidas, empresas y tarifas especiales de grupo",
          },
          href: "/pricing",
          badge: { en: "5+ Jumpers", es: "5+ Personas" },
          iconName: "users",
        },
      ],
    },
    {
      id: "dropzone",
      label: { en: "The Dropzone", es: "La Zona" },
      href: "/about",
      featured: {
        tag: { en: "CLOSEST TO DALLAS", es: "LA MÁS CERCA DE DALLAS" },
        title: { en: "36 Miles East on I-30", es: "A 36 Millas por la I-30" },
        description: {
          en: "Caddo Mills Municipal Airport campus with a 3,600 sq ft AC hangar and 651-acre lawn.",
          es: "Campus en el aeropuerto de Caddo Mills con hangar climatizado y césped de 651 acres.",
        },
        href: "/contact",
        cta: { en: "Get Driving Directions", es: "Cómo Llegar" },
      },
      links: [
        {
          title: { en: "Aviation Safety & Standards", es: "Seguridad y Normas de Aviación" },
          description: {
            en: "100% USPA certified staff, FAA maintenance & Cypres 2 AAD backups",
            es: "100% instructores USPA, mantenimiento FAA y respaldo AAD Cypres 2",
          },
          href: "/safety-fleet",
          badge: { en: "Safety", es: "Seguridad" },
          iconName: "shield",
        },
        {
          title: { en: "Super Cessna Aircraft Fleet", es: "Flota de Aviones Super Cessna" },
          description: {
            en: "High-climb jump planes reaching 14,000 FT in record ascent times",
            es: "Aeronaves de alto rendimiento que alcanzan 14,000 pies rápidamente",
          },
          href: "/safety-fleet",
          iconName: "plane",
        },
        {
          title: { en: "About Our Dropzone & Team", es: "Sobre la Zona y Nuestro Equipo" },
          description: {
            en: "25+ years serving DFW with 75,000+ safe completed skydives",
            es: "Más de 25 años en DFW con más de 75,000 saltos completados",
          },
          href: "/about",
          iconName: "compass",
        },
        {
          title: { en: "Directions & DFW Travel Times", es: "Ubicación e Indicaciones" },
          description: {
            en: "Straight shot on I-30 East past Rockwall and Royse City Buc-ee's",
            es: "Directo por la I-30 Este pasando Rockwall y el Buc-ee's de Royse City",
          },
          href: "/contact",
          badge: { en: "36 Miles", es: "36 Millas" },
          iconName: "map",
        },
      ],
    },
    {
      id: "articles",
      label: { en: "Articles", es: "Artículos" },
      href: "/articles",
      featured: {
        tag: { en: "FEATURED GUIDE", es: "GUÍA DESTACADA" },
        title: { en: "Is Skydiving Safe? Real Risks & Stats", es: "¿Es Seguro el Paracaidismo? Estadísticas Reales" },
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
          title: { en: "Solo Training & Progression", es: "Entrenamiento Solo y Progresión" },
          description: {
            en: "Progression to solo A-license, canopy flying & ground school",
            es: "Progresión a tu licencia A en solitario y escuela en tierra",
          },
          href: "/learn-to-skydive",
          iconName: "graduation",
        },
        {
          title: { en: "Browse All Articles & News", es: "Todos los Artículos y Novedades" },
          description: {
            en: "Explore our complete library of skydiving guides and updates",
            es: "Explora nuestra biblioteca completa de guías e historias",
          },
          href: "/articles",
          badge: { en: "Directory", es: "Directorio" },
          iconName: "book-open",
        },
      ],
    },
  ] as LocalizedMegaMenuCategory[],
  directLinks: [
    { label: { en: "Pricing", es: "Precios" }, href: "/pricing" },
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
