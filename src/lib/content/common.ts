import { LocalizedNavItem, I18nString } from "./types";

export const siteMeta = {
  descriptor: {
    en: "Premier Skydiving Dropzone in Dallas–Fort Worth",
    es: "Centro Líder de Paracaidismo en Dallas–Fort Worth",
  },
  description: {
    en: "Experience the ultimate adrenaline rush with Dallas Skydive Center. 14,000 FT tandem skydives, 120 MPH freefall, USPA certified instructors, and panoramic Texas sky views.",
    es: "Vive la máxima adrenalina con Dallas Skydive Center. Saltos tándem a 14,000 pies, caída libre a 120 MPH, instructores certificados por la USPA y vistas panorámicas de Texas.",
  },
};

export const navItems: LocalizedNavItem[] = [
  {
    key: "tandem",
    label: { en: "Tandem Skydiving", es: "Salto Tándem" },
    href: "/tandem-skydiving",
  },
  {
    key: "learn",
    label: { en: "Learn to Skydive", es: "Aprende a Saltar" },
    href: "/learn-to-skydive",
  },
  {
    key: "pricing",
    label: { en: "Pricing & Packages", es: "Precios y Paquetes" },
    href: "/pricing",
  },
  {
    key: "safety",
    label: { en: "Safety & Fleet", es: "Seguridad y Flota" },
    href: "/safety-fleet",
  },
  {
    key: "about",
    label: { en: "About Us", es: "Nosotros" },
    href: "/about",
  },
  {
    key: "blog",
    label: { en: "Articles & Guides", es: "Artículos y Guías" },
    href: "/articles",
  },
  {
    key: "contact",
    label: { en: "Contact & Location", es: "Contacto y Ubicación" },
    href: "/contact",
  },
];

export const commonActions = {
  bookNow: {
    en: "Book Your Jump",
    es: "Reserva Tu Salto",
  },
  callNow: {
    en: "Call Us",
    es: "Llámanos",
  },
  viewPricing: {
    en: "View Pricing",
    es: "Ver Precios",
  },
  learnMore: {
    en: "Learn More",
    es: "Conoce Más",
  },
  changeLanguage: {
    en: "Language",
    es: "Idioma",
  },
  toggleTheme: {
    en: "Toggle theme",
    es: "Cambiar tema",
  },
  menu: {
    en: "Menu",
    es: "Menú",
  },
  close: {
    en: "Close",
    es: "Cerrar",
  },
  jumpAltitude: {
    en: "14,000 FT Exit",
    es: "Salto a 14,000 Pies",
  },
  freefallSpeed: {
    en: "120 MPH Freefall",
    es: "Caída Libre a 120 MPH",
  },
};

export const footerContent = {
  tagline: {
    en: "The highest altitude, safest aircraft, and most scenic freefall in the Dallas–Fort Worth metro area.",
    es: "La mayor altitud, las aeronaves más seguras y la caída libre más panorámica del área de Dallas–Fort Worth.",
  },
  uspaMember: {
    en: "Official United States Parachute Association (USPA) Group Member Dropzone.",
    es: "Zona de salto miembro oficial de la Asociación de Paracaidismo de los Estados Unidos (USPA).",
  },
  rightsReserved: {
    en: "All rights reserved.",
    es: "Todos los derechos reservados.",
  },
  terms: {
    en: "Terms & Conditions",
    es: "Términos y Condiciones",
  },
  privacy: {
    en: "Privacy Policy",
    es: "Política de Privacidad",
  },
  waiver: {
    en: "Online Safety Waiver",
    es: "Exención de Responsabilidad",
  },
  quickLinks: {
    en: "Quick Links",
    es: "Enlaces Rápidos",
  },
  contactHeader: {
    en: "Get in Touch",
    es: "Contáctanos",
  },
  hoursHeader: {
    en: "Dropzone Hours",
    es: "Horario de Operación",
  },
};
