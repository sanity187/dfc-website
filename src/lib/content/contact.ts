import type { I18nString } from "./types";

export interface ContactCardItem {
  id: string;
  title: I18nString;
  value: string;
  detail: I18nString;
  actionText: I18nString;
  actionHref: string;
  icon: string;
  highlight?: boolean;
}

export interface DirectionRouteItem {
  origin: I18nString;
  time: I18nString;
  distance: string;
  route: I18nString;
  steps: I18nString[];
}

export interface LandmarkItem {
  id: string;
  name: I18nString;
  tagline: I18nString;
  description: I18nString;
  distance: string;
  icon: string;
}

export interface ContactFaqItem {
  question: I18nString;
  answer: I18nString;
}

export interface ContactContent {
  header: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    badge: I18nString;
  };
  cards: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    items: ContactCardItem[];
  };
  form: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    nameLabel: I18nString;
    namePlaceholder: I18nString;
    emailLabel: I18nString;
    emailPlaceholder: I18nString;
    phoneLabel: I18nString;
    phonePlaceholder: I18nString;
    interestLabel: I18nString;
    interests: {
      tandem: I18nString;
      group: I18nString;
      aff: I18nString;
      pricing: I18nString;
      general: I18nString;
    };
    messageLabel: I18nString;
    messagePlaceholder: I18nString;
    submitBtn: I18nString;
    sendingBtn: I18nString;
    successTitle: I18nString;
    successMessage: I18nString;
  };
  map: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    coordinates: string;
    openGoogleMaps: I18nString;
    openAppleMaps: I18nString;
    openWaze: I18nString;
  };
  directions: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    routes: DirectionRouteItem[];
  };
  landmarks: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    items: LandmarkItem[];
  };
  amenities: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    points: I18nString[];
  };
  faq: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    items: ContactFaqItem[];
  };
  cta: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    primaryBtn: I18nString;
    phoneBtn: I18nString;
  };
}

export const contactContent: ContactContent = {
  header: {
    eyebrow: {
      en: "DROPZONE LOCATION & DIRECT CONTACT",
      es: "UBICACIÓN Y CONTACTO DIRECTO",
    },
    title: {
      en: "Connect with Dallas Skydive Center",
      es: "Conéctate con Dallas Skydive Center",
    },
    subtitle: {
      en: "Conveniently located at Caddo Mills Municipal Airport—only 36 miles east of Downtown Dallas with effortless interstate highway access.",
      es: "Convenientemente ubicado en el aeropuerto de Caddo Mills: a solo 36 millas al este del centro de Dallas con fácil acceso por autopista.",
    },
    badge: {
      en: "Only 36 Miles from Dallas · I-30 East",
      es: "A Solo 36 Millas de Dallas · I-30 Este",
    },
  },

  cards: {
    eyebrow: {
      en: "DIRECT CHANNELS",
      es: "CANALES DIRECTOS",
    },
    title: {
      en: "Get in Touch with Flight Operations",
      es: "Comunícate con Operaciones de Vuelo",
    },
    subtitle: {
      en: "Our dispatch and customer support team is available 7 days a week to answer jump questions, book reservations, or provide weather updates.",
      es: "Nuestro equipo de atención está disponible los 7 días de la semana para responder dudas, agendar saltos o informar sobre el clima.",
    },
    items: [
      {
        id: "phone",
        title: { en: "Phone & Text Hotline", es: "Línea Telefónica y Mensajes" },
        value: "(972) 552-7790",
        detail: { en: "Call or text for immediate reservations & weather status", es: "Llama o envía mensaje para reservas e informe meteorológico" },
        actionText: { en: "Call Now", es: "Llamar Ahora" },
        actionHref: "tel:+19725527790",
        icon: "PhoneCall",
        highlight: true,
      },
      {
        id: "email",
        title: { en: "Direct Email", es: "Correo Electrónico" },
        value: "info@dallasskydivecenter.com",
        detail: { en: "Quick replies for group bookings, vouchers & inquiries", es: "Respuesta rápida para grupos, cupones y consultas" },
        actionText: { en: "Send Email", es: "Enviar Correo" },
        actionHref: "mailto:info@dallasskydivecenter.com",
        icon: "Mail",
      },
      {
        id: "address",
        title: { en: "Dropzone Address", es: "Dirección del Centro de Salto" },
        value: "3517 Co Rd 2615, Caddo Mills, TX 75135",
        detail: { en: "Caddo Mills Municipal Airport (FAA: 7F3) · Free parking on site", es: "Aeropuerto de Caddo Mills (FAA: 7F3) · Estacionamiento gratuito" },
        actionText: { en: "Get Driving Directions", es: "Obtener Indicaciones" },
        actionHref: "#map",
        icon: "MapPin",
      },
      {
        id: "hours",
        title: { en: "Flight Hours", es: "Horarios de Vuelo" },
        value: "Open 7 Days a Week",
        detail: { en: "Wed Special flights, Weekend sunrise-to-sunset operations (weather permitting)", es: "Especiales de miércoles y operaciones de fin de semana de sol a sol" },
        actionText: { en: "View Schedule", es: "Ver Horarios" },
        actionHref: "#hours",
        icon: "Clock",
      },
    ],
  },

  form: {
    eyebrow: {
      en: "ONLINE INQUIRY",
      es: "CONSULTA EN LÍNEA",
    },
    title: {
      en: "Send Flight Ops a Message",
      es: "Envía un Mensaje a Operaciones",
    },
    subtitle: {
      en: "Planning a tandem leap, solo licensing course, or corporate group event? Fill out the form below and we’ll reach out promptly.",
      es: "¿Planeas un salto tándem, curso individual o evento grupal? Llena el formulario y te responderemos a la brevedad.",
    },
    nameLabel: { en: "Full Name", es: "Nombre Completo" },
    namePlaceholder: { en: "e.g. John Doe", es: "ej. Juan Pérez" },
    emailLabel: { en: "Email Address", es: "Correo Electrónico" },
    emailPlaceholder: { en: "john@example.com", es: "juan@ejemplo.com" },
    phoneLabel: { en: "Phone Number", es: "Número Telefónico" },
    phonePlaceholder: { en: "(972) 555-0199", es: "(972) 555-0199" },
    interestLabel: { en: "What are you interested in?", es: "¿En qué estás interesado?" },
    interests: {
      tandem: { en: "Tandem Skydiving (First Time)", es: "Salto Tándem (Primera Vez)" },
      group: { en: "Group Skydiving (5+ Jumpers)", es: "Salto Grupal (5 o más personas)" },
      aff: { en: "Learn to Skydive (AFF Solo Program)", es: "Aprender a Saltar Solo (Programa AFF)" },
      pricing: { en: "Pricing & Special Discounts", es: "Tarifas y Descuentos Especiales" },
      general: { en: "General Question / Other", es: "Pregunta General / Otro" },
    },
    messageLabel: { en: "Your Message or Question", es: "Tu Mensaje o Pregunta" },
    messagePlaceholder: {
      en: "Tell us about your preferred jump dates, party size, or specific questions...",
      es: "Cuéntanos sobre tus fechas preferidas, número de personas o dudas...",
    },
    submitBtn: { en: "Send Inquiry to Flight Ops", es: "Enviar Mensaje a Operaciones" },
    sendingBtn: { en: "Sending Message...", es: "Enviando Mensaje..." },
    successTitle: { en: "Inquiry Sent Successfully!", es: "¡Mensaje Enviado con Éxito!" },
    successMessage: {
      en: "Thank you for reaching out to Dallas Skydive Center. A flight coordinator will contact you shortly.",
      es: "Gracias por comunicarte con Dallas Skydive Center. Un coordinador de vuelo te responderá a la brevedad.",
    },
  },

  map: {
    eyebrow: {
      en: "INTERACTIVE MAP",
      es: "MAPA INTERACTIVO",
    },
    title: {
      en: "Find Us at Caddo Mills Airport",
      es: "Encuéntranos en el Aeropuerto de Caddo Mills",
    },
    subtitle: {
      en: "Located directly off Interstate 30 East, just past Rockwall and Royse City. Click below to launch your favorite GPS navigation app.",
      es: "Ubicado junto a la Interestatal 30 Este, pasando Rockwall y Royse City. Da clic para iniciar tu app de GPS favorita.",
    },
    coordinates: "33.0365° N, 96.2422° W (FAA: 7F3)",
    openGoogleMaps: { en: "Open in Google Maps", es: "Abrir en Google Maps" },
    openAppleMaps: { en: "Open in Apple Maps", es: "Abrir en Apple Maps" },
    openWaze: { en: "Open in Waze", es: "Abrir en Waze" },
  },

  directions: {
    eyebrow: {
      en: "HOW TO GET HERE",
      es: "CÓMO LLEGAR",
    },
    title: {
      en: "Easy Driving Routes Across DFW",
      es: "Rutas Cómodas Desde Todo el Metroplex",
    },
    subtitle: {
      en: "A quick, picturesque drive along I-30 East crossing scenic Lake Ray Hubbard.",
      es: "Un viaje rápido y panorámico por la I-30 Este cruzando el pintoresco Lago Ray Hubbard.",
    },
    routes: [
      {
        origin: { en: "From Downtown Dallas", es: "Desde el Centro de Dallas" },
        time: { en: "35–40 Minutes", es: "35–40 Minutos" },
        distance: "36 miles",
        route: { en: "Direct route via Interstate 30 East", es: "Ruta directa por la Interestatal 30 Este" },
        steps: [
          { en: "Take I-30 East past Mesquite and across Lake Ray Hubbard into Rockwall", es: "Toma la I-30 Este pasando Mesquite y cruzando el Lago Ray Hubbard hacia Rockwall" },
          { en: "Continue on I-30 East past Royse City (look for Buc-ee’s on your right)", es: "Continúa por la I-30 Este pasando Royse City (verás Buc-ee’s a la derecha)" },
          { en: "Take Exit 83 for FM 1565 toward Caddo Mills, turn onto County Road 2615", es: "Toma la salida 83 hacia FM 1565 hacia Caddo Mills y gira en County Road 2615" },
          { en: "Arrive at Caddo Mills Municipal Airport; park right in front of the 3,600 sq ft hangar", es: "Llega al aeropuerto de Caddo Mills; estaciónate frente al hangar de 3,600 pies cuadrados" },
        ],
      },
      {
        origin: { en: "From Fort Worth & Mid-Cities", es: "Desde Fort Worth y Arlington" },
        time: { en: "55–65 Minutes", es: "55–65 Minutos" },
        distance: "68 miles",
        route: { en: "Via I-30 East straight through Dallas", es: "Por la I-30 Este cruzando Dallas" },
        steps: [
          { en: "Take I-30 East through Arlington and Downtown Dallas", es: "Toma la I-30 Este cruzando Arlington y el centro de Dallas" },
          { en: "Stay on I-30 East across Lake Ray Hubbard bridge", es: "Mantente en la I-30 Este sobre el puente del Lago Ray Hubbard" },
          { en: "Pass Royse City and take Exit 83 onto FM 1565 to County Road 2615", es: "Pasa Royse City y toma la salida 83 hacia FM 1565 hasta County Road 2615" },
        ],
      },
      {
        origin: { en: "From Plano, Frisco & McKinney", es: "Desde Plano, Frisco y McKinney" },
        time: { en: "40–45 Minutes", es: "40–45 Minutos" },
        distance: "38 miles",
        route: { en: "Via Highway 66 East or President George Bush Turnpike", es: "Por Carretera 66 Este o autopista George Bush" },
        steps: [
          { en: "Take Highway 66 East through Rowlett/Rockwall or PGBT South to I-30 East", es: "Toma la 66 Este por Rowlett/Rockwall o PGBT al sur hacia la I-30 Este" },
          { en: "Merge onto I-30 East past Royse City toward Caddo Mills", es: "Incorpórate a la I-30 Este pasando Royse City hacia Caddo Mills" },
          { en: "Follow airport access signs to County Road 2615", es: "Sigue los señalamientos del aeropuerto hasta County Road 2615" },
        ],
      },
    ],
  },

  landmarks: {
    eyebrow: {
      en: "NEARBY POINTS OF INTEREST",
      es: "PUNTOS DE INTERÉS CERCANOS",
    },
    title: {
      en: "Make a Day of It in East DFW",
      es: "Pasa un Gran Día en el Este de DFW",
    },
    subtitle: {
      en: "Turn your skydive trip into an unforgettable day with famous Texas attractions right down the road.",
      es: "Convierte tu salto en un día memorable con atracciones icónicas de Texas a pocos minutos.",
    },
    items: [
      {
        id: "bucees",
        name: { en: "Buc-ee’s Royse City", es: "Buc-ee’s Royse City" },
        tagline: { en: "The iconic Texas road trip stop", es: "La parada icónica de Texas" },
        description: {
          en: "Grab brisket sandwiches, Beaver Nuggets, and fuel up at the massive Royse City Buc-ee's just minutes before your jump.",
          es: "Disfruta de sándwiches de brisket, Beaver Nuggets y carga gasolina en el enorme Buc-ee's a minutos del centro de salto.",
        },
        distance: "8 mins away",
        icon: "ShoppingBag",
      },
      {
        id: "karting",
        name: { en: "Dallas Karting Complex (DKC)", es: "Dallas Karting Complex (DKC)" },
        tagline: { en: "The fastest go-karts in Texas", es: "Los karts más rápidos de Texas" },
        description: {
          en: "Right next door in Caddo Mills, experience high-speed racing go-karts reaching up to 60+ MPH on a pro outdoor circuit.",
          es: "Justo al lado en Caddo Mills, vive carreras de karts de alta velocidad que alcanzan más de 60 MPH en circuito profesional.",
        },
        distance: "Next door",
        icon: "Gauge",
      },
      {
        id: "flight-center",
        name: { en: "Dallas Flight Center", es: "Dallas Flight Center" },
        tagline: { en: "Discovery flights & pilot training", es: "Vuelos de prueba y escuela de pilotos" },
        description: {
          en: "Our sister flight academy sharing the airfield offers introductory 30-minute discovery flights for aspiring pilots.",
          es: "Nuestra academia hermana que comparte el aeródromo ofrece vuelos introductorios de 30 minutos para futuros pilotos.",
        },
        distance: "Same airfield",
        icon: "Plane",
      },
      {
        id: "lake-ray-hubbard",
        name: { en: "Lake Ray Hubbard", es: "Lago Ray Hubbard" },
        tagline: { en: "Waterfront dining & lakeside sunset views", es: "Restaurantes y atardeceres frente al lago" },
        description: {
          en: "Celebrate your jump at lakeside restaurants, marinas, and patios in Rockwall right on your drive back to Dallas.",
          es: "Celebra tu salto en restaurantes junto al agua, marinas y terrazas en Rockwall de regreso hacia Dallas.",
        },
        distance: "15 mins away",
        icon: "Waves",
      },
    ],
  },

  amenities: {
    eyebrow: {
      en: "FACILITY HIGHLIGHTS",
      es: "INSTALACIONES Y COMODIDADES",
    },
    title: {
      en: "What Awaits You at the Dropzone",
      es: "Qué Te Espera en Nuestras Instalaciones",
    },
    subtitle: {
      en: "Our 651-acre dropzone and 3,600 sq ft hangar are engineered for student comfort and family viewing.",
      es: "Nuestra zona de 651 acres y hangar de 3,600 pies cuadrados están diseñados para tu comodidad y la de tus acompañantes.",
    },
    points: [
      { en: "3,600 sq ft climate-controlled training hangar and comfortable seating", es: "Hangar climatizado de 3,600 pies cuadrados con cómodas salas de estar" },
      { en: "High-speed guest Wi-Fi throughout the hangar and boarding areas", es: "Wi-Fi de alta velocidad para clientes en todo el hangar y áreas de abordaje" },
      { en: "651-acre manicured spectator viewing lawn with shaded picnic tables", es: "Césped de observación de 651 acres con mesas de picnic techadas" },
      { en: "Coolers, family snacks, and camping chairs warmly welcome", es: "Hieleras, bocadillos familiares y sillas de campo son bienvenidos" },
      { en: "Dog-friendly grounds (leashes strictly required for safety)", es: "Instalaciones pet-friendly (correas estrictamente obligatorias)" },
      { en: "Clean indoor restrooms and vending refreshments", es: "Baños interiores limpios y máquinas expendedoras de refrescos" },
    ],
  },

  faq: {
    eyebrow: {
      en: "LOCATION & LOGISTICS FAQS",
      es: "PREGUNTAS FRECUENTES DE UBICACIÓN",
    },
    title: {
      en: "Dropzone Directions & Arrival Questions",
      es: "Preguntas Frecuentes de Llegada y Dirección",
    },
    subtitle: {
      en: "Helpful logistical advice before heading out to Caddo Mills Municipal Airport.",
      es: "Consejos logísticos útiles antes de dirigirte al aeropuerto municipal de Caddo Mills.",
    },
    items: [
      {
        question: {
          en: "How early should I arrive before my scheduled reservation?",
          es: "¿Con cuánta anticipación debo llegar a mi reserva?",
        },
        answer: {
          en: "Please arrive promptly at your scheduled reservation check-in time. Arriving on time ensures you have ample time to complete your digital waiver, undergo harness fitting, and attend the ground briefing without delaying the aircraft manifest.",
          es: "Por favor llega puntual a la hora programada en tu reserva. Llegar a tiempo te asegura margen para llenar la exención digital, ajustarte el arnés y recibir la instrucción previa sin retrasar los vuelos.",
        },
      },
      {
        question: {
          en: "Can my friends and family come watch me skydive?",
          es: "¿Mis amigos y familiares pueden venir a verme saltar?",
        },
        answer: {
          en: "Absolutely! We encourage spectators. Our facility features a dedicated viewing lawn right next to the landing zone with shaded picnic tables. Family members can bring cameras, coolers, and cheer as you touchdown on the grass.",
          es: "¡Por supuesto! Animamos a que vengan acompañantes. Contamos con un área de césped junto a la zona de aterrizaje con mesas con sombra. Pueden traer cámaras, hieleras y aplaudirte al tocar tierra.",
        },
      },
      {
        question: {
          en: "Is parking available and is it free?",
          es: "¿Hay estacionamiento disponible y es gratis?",
        },
        answer: {
          en: "Yes! Dallas Skydive Center has ample, free on-site parking directly in front of our main 3,600 sq ft hangar building at Caddo Mills Municipal Airport.",
          es: "¡Sí! Dallas Skydive Center cuenta con amplio estacionamiento gratuito frente a nuestro hangar principal de 3,600 pies cuadrados en Caddo Mills.",
        },
      },
      {
        question: {
          en: "What should I do if weather looks questionable on my jump morning?",
          es: "¿Qué debo hacer si el clima se ve dudoso la mañana de mi salto?",
        },
        answer: {
          en: "Give our Flight Operations hotline a quick call at (972) 552-7790 before driving out. Ground weather in Dallas is often different from the aviation winds and cloud ceilings at 10,000+ feet in Caddo Mills, and our dispatchers have real-time FAA telemetry.",
          es: "Llama a Operaciones de Vuelo al (972) 552-7790 antes de salir. El clima en Dallas suele ser distinto al viento y nubosidad a 10,000 pies en Caddo Mills, y nuestros operadores tienen telemetría de la FAA en tiempo real.",
        },
      },
    ],
  },

  cta: {
    eyebrow: {
      en: "READY TO VISIT US?",
      es: "¿LISTO PARA VISITARNOS?",
    },
    title: {
      en: "Book Your Jump or Get in Touch Today",
      es: "Reserva Tu Salto o Contáctanos Hoy",
    },
    subtitle: {
      en: "Our flight coordinators are ready to help you plan the adventure of a lifetime just 36 miles east of Dallas.",
      es: "Nuestros coordinadores de vuelo están listos para ayudarte a planear la mejor aventura a 36 millas al este de Dallas.",
    },
    primaryBtn: {
      en: "Book Your Skydive Online",
      es: "Reservar Tu Salto en Línea",
    },
    phoneBtn: {
      en: "Call Dispatch: (972) 552-7790",
      es: "Llamar a Operaciones: (972) 552-7790",
    },
  },
};
