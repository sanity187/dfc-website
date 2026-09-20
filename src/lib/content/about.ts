import { I18nString } from "./types";

export interface AboutPillarItem {
  id: string;
  title: I18nString;
  tagline: I18nString;
  description: I18nString;
  specs: I18nString[];
  icon: string;
}

export interface AboutAmenityItem {
  title: I18nString;
  description: I18nString;
  badge?: I18nString;
}

export interface AboutContent {
  header: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    badge: I18nString;
  };
  motto: {
    phrase: I18nString;
    subphrase: I18nString;
    callout: I18nString;
  };
  story: {
    eyebrow: I18nString;
    title: I18nString;
    paragraphs: I18nString[];
    stats: {
      acres: I18nString;
      acresLabel: I18nString;
      jumpsLead: I18nString;
      jumpsLeadLabel: I18nString;
      hangarSize: I18nString;
      hangarSizeLabel: I18nString;
      distance: I18nString;
      distanceLabel: I18nString;
    };
  };
  pillars: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    items: AboutPillarItem[];
  };
  instructor: {
    eyebrow: I18nString;
    name: I18nString;
    title: I18nString;
    bio: I18nString;
    quote: I18nString;
    credentials: I18nString[];
    staffStandards: I18nString;
  };
  amenities: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    items: AboutAmenityItem[];
  };
  cta: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    primaryBtn: I18nString;
    phoneText: I18nString;
  };
}

export const aboutContent: AboutContent = {
  header: {
    eyebrow: {
      en: "OUR HERITAGE & PASSION",
      es: "NUESTRA HISTORIA Y PASIÓN",
    },
    title: {
      en: "About Dallas Skydive Center",
      es: "Acerca de Dallas Skydive Center",
    },
    subtitle: {
      en: "The closest premier dropzone to Dallas–Fort Worth, combining military-grade safety, dedicated Cessna 182 aircraft, and pure Texas skydiving hospitality.",
      es: "La zona de salto más cercana a Dallas–Fort Worth, combinando seguridad de grado militar, flota Cessna 182 y la mejor hospitalidad texana.",
    },
    badge: {
      en: "USPA Certified Dropzone",
      es: "Zona Certificada por USPA",
    },
  },
  motto: {
    phrase: {
      en: "SHUT UP AND JUMP!!",
      es: "¡¡CÁLLATE Y SALTA!!",
    },
    subphrase: {
      en: "The Official Dallas Skydive Center Motto Since Day One",
      es: "El Lema Oficial de Dallas Skydive Center Desde el Primer Día",
    },
    callout: {
      en: "Overcome the noise, trust your training, and feel the ultimate freedom of 14,000 feet.",
      es: "Supera el ruido, confía en tu preparación y siente la libertad absoluta a 14,000 pies.",
    },
  },
  story: {
    eyebrow: {
      en: "THE PREMIER DFW DROPZONE",
      es: "LA ZONA LÍDER DE DFW",
    },
    title: {
      en: "Built for Safety, Freedom & Adventure",
      es: "Diseñada para Seguridad, Libertad y Aventura",
    },
    paragraphs: [
      {
        en: "Dallas Skydive Center is the closest dropzone to the Dallas, Fort Worth, Rockwall, Garland, and Greenville areas. Operating from Caddo Mills Municipal Airport, our goal has always been simple: provide a safe, friendly, and welcoming atmosphere for everyday thrill-seekers to experience the pure joy of human flight.",
        es: "Dallas Skydive Center es la zona de paracaidismo más cercana a Dallas, Fort Worth, Rockwall, Garland y Greenville. Operando desde el Aeropuerto Municipal de Caddo Mills, nuestro objetivo siempre ha sido simple: brindar un ambiente seguro, amigable y acogedor para vivir la emoción del vuelo humano.",
      },
      {
        en: "With a massive 651-acre unobstructed grass landing field and a modern 3,600 sq/ft hangar, our dropzone provides ample space for students, families, and spectators alike. On clear flight days, jumpers enjoy panoramic views spanning the Dallas skyline, Lake Ray Hubbard, Lake Tawakoni, and all the way to Fort Worth.",
        es: "Con una enorme área de aterrizaje en pasto de 651 acres sin obstáculos y un moderno hangar de 3,600 pies cuadrados, nuestras instalaciones ofrecen amplio espacio para alumnos, familias y acompañantes. En días despejados, se aprecian vistas panorámicas del horizonte de Dallas, Lake Ray Hubbard y Fort Worth.",
      },
    ],
    stats: {
      acres: { en: "651 Acres", es: "651 Acres" },
      acresLabel: { en: "Open Landing Area", es: "Área de Aterrizaje Libre" },
      jumpsLead: { en: "13,000+", es: "13,000+" },
      jumpsLeadLabel: { en: "Chief Instructor Jumps", es: "Saltos del Instructor Jefe" },
      hangarSize: { en: "3,600 Sq Ft", es: "3,600 Pies²" },
      hangarSizeLabel: { en: "Training Hangar", es: "Hangar de Instrucción" },
      distance: { en: "36 Miles", es: "36 Millas" },
      distanceLabel: { en: "From Downtown Dallas", es: "De Downtown Dallas" },
    },
  },
  pillars: {
    eyebrow: {
      en: "UNCOMPROMISING STANDARDS",
      es: "ESTÁNDARES SIN CONCESIONES",
    },
    title: {
      en: "What Sets Dallas Skydive Center Apart",
      es: "Lo Que Hace Único a Dallas Skydive Center",
    },
    subtitle: {
      en: "Four operational pillars that make our dropzone the safest and most exhilarating choice in Texas.",
      es: "Cuatro pilares operativos que nos convierten en la opción más segura y emocionante de Texas.",
    },
    items: [
      {
        id: "fleet",
        title: {
          en: "Super Cessna 182 Jump Fleet",
          es: "Flota Super Cessna 182",
        },
        tagline: {
          en: "Fast Climbs & Reliable Performance",
          es: "Ascenso Rápido y Máxima Confiabilidad",
        },
        description: {
          en: "Our dedicated fleet of several Super Cessna 182 jump planes are custom-modified for skydiving operations, climbing quickly to jump altitude and meticulously maintained under strict FAA continuous inspection programs.",
          es: "Nuestra flota de aviones Super Cessna 182 está especialmente adaptada para paracaidismo, ascendiendo rápidamente a altitud de salto y con riguroso mantenimiento continuo bajo normas de la FAA.",
        },
        specs: [
          { en: "Custom Skydiving Doors", es: "Puertas Especiales de Salto" },
          { en: "FAA Part 91/135 Maintenance", es: "Mantenimiento FAA Part 91/135" },
          { en: "Up to 12 Jumpers / Hour", es: "Hasta 12 Saltos por Hora" },
        ],
        icon: "Plane",
      },
      {
        id: "gear",
        title: {
          en: "Special Forces Sigma Rigs",
          es: "Equipos Sigma Fuerzas Especiales",
        },
        tagline: {
          en: "Military-Grade Dual Parachutes",
          es: "Paracaídas de Grado Militar",
        },
        description: {
          en: "We utilize the premium Sigma Tandem Parachute System—the exact same high-performance platform trusted by US Military Special Forces. Equipped with patented dual-release safety systems and computerized Cypres 2 AADs.",
          es: "Utilizamos el prestigioso sistema tándem Sigma, la misma plataforma de alto rendimiento elegida por las Fuerzas Especiales de EE. UU. Equipado con doble sistema de apertura de seguridad y respaldo computarizado Cypres 2 AAD.",
        },
        specs: [
          { en: "Sigma Patented Safety", es: "Seguridad Patentada Sigma" },
          { en: "Cypres 2 Computer AAD", es: "Computadora AAD Cypres 2" },
          { en: "Overbuilt Harnesses", es: "Arneses Reforzados" },
        ],
        icon: "ShieldCheck",
      },
      {
        id: "loft",
        title: {
          en: "In-House FAA Rigging Loft",
          es: "Taller Propio de Plegado FAA",
        },
        tagline: {
          en: "Certified Master Parachute Riggers",
          es: "Plegadores Maestros Certificados",
        },
        description: {
          en: "Unlike dropzones that outsource gear maintenance, Dallas Skydive Center operates its own dedicated parachute repair and rigging loft staffed by two FAA-certified Master Riggers, also servicing dropzones across Texas.",
          es: "A diferencia de otros centros que subcontratan mantenimiento, contamos con taller propio de reparación y plegado con dos Master Riggers certificados por la FAA que dan servicio a paracaidistas de todo Texas.",
        },
        specs: [
          { en: "2 FAA Master Riggers on Staff", es: "2 Plegadores Maestros FAA" },
          { en: "Precision Inspection Standards", es: "Inspección de Máxima Precisión" },
          { en: "Complete In-House Loft", es: "Taller Técnico Integral" },
        ],
        icon: "Wrench",
      },
      {
        id: "facility",
        title: {
          en: "651-Acre Dropzone & 3,600' Hangar",
          es: "Campo de 651 Acres y Hangar de 3,600'",
        },
        tagline: {
          en: "Expansive Safety Margins",
          es: "Espacio y Seguridad Incomparables",
        },
        description: {
          en: "Enjoy an expansive 651-acre open landing area with zero tree or structure obstacles. Our 3,600 sq/ft hangar features padded indoor packing zones, air-conditioned video debrief rooms, spectator decks, and clean restrooms.",
          es: "Disfruta de 651 acres de zona de aterrizaje sin árboles ni obstáculos. Nuestro hangar de 3,600 pies cuadrados cuenta con zona acolchada de plegado, salas climatizadas de video, terraza para acompañantes y baños limpios.",
        },
        specs: [
          { en: "651-Acre Clear Drop Field", es: "651 Acres Despejados" },
          { en: "Air-Conditioned Briefing Suites", es: "Aulas con Aire Acondicionado" },
          { en: "Dogs Welcomed on Leash", es: "Mascotas con Correa Bienvenidas" },
        ],
        icon: "MapPin",
      },
    ],
  },
  instructor: {
    eyebrow: {
      en: "LEADERSHIP & EXPERIENCE",
      es: "LIDERAZGO Y EXPERIENCIA",
    },
    name: {
      en: "Jimmy Mendonca",
      es: "Jimmy Mendonca",
    },
    title: {
      en: "Founder & Chief Instructor",
      es: "Fundador e Instructor Jefe",
    },
    bio: {
      en: "With more than 13,000 logged skydives spanning over two decades, Jimmy leads flight operations with unyielding dedication to aviation safety and authentic dropzone camaraderie. As an FAA Certified Master Parachute Rigger and a USPA Tandem Instructor Examiner, Jimmy personally handpicks, trains, and evaluates all dropzone instructors.",
      es: "Con más de 13,000 saltos registrados a lo largo de más de dos décadas, Jimmy dirige las operaciones aéreas con una devoción inquebrantable por la seguridad y el verdadero espíritu del paracaidismo. Como Master Rigger certificado por la FAA y Examinador de Instructores Tándem de la USPA, Jimmy selecciona, capacita y evalúa personalmente a todo el equipo.",
    },
    quote: {
      en: "Skydiving isn’t just an extreme sport—it is a transformative moment that changes how you see the world. We make sure every jump is safe, unforgettable, and full of joy.",
      es: "El paracaidismo no es solo un deporte extremo: es una experiencia transformadora que cambia tu perspectiva del mundo. Nos aseguramos de que cada salto sea seguro, inolvidable y lleno de emoción.",
    },
    credentials: [
      { en: "13,000+ Logged Skydives", es: "13,000+ Saltos Registrados" },
      { en: "FAA Certified Master Parachute Rigger", es: "Master Parachute Rigger Certificado FAA" },
      { en: "USPA Tandem Instructor Examiner", es: "Examinador de Instructores Tándem USPA" },
      { en: "25+ Years Dropzone Ownership", es: "25+ Años Dirigiendo Centros de Salto" },
    ],
    staffStandards: {
      en: "Our instructional team is 100% drug-free, dual-certified by the USPA, and held to the highest safety and customer-care metrics in North Texas.",
      es: "Nuestro equipo de instructores es 100% libre de drogas, cuenta con doble certificación USPA y mantiene los estándares de seguridad y atención más rigurosos del norte de Texas.",
    },
  },
  amenities: {
    eyebrow: {
      en: "GROUND EXPERIENCE",
      es: "EXPERIENCIA EN TIERRA",
    },
    title: {
      en: "Dropzone Facilities & Amenities",
      es: "Instalaciones y Servicios en Tierra",
    },
    subtitle: {
      en: "Whether you are jumping or cheering on a friend, our dropzone grounds are built for a comfortable day in Texas.",
      es: "Ya sea que saltes o vengas a animar a un ser querido, nuestras instalaciones están diseñadas para disfrutar de un día cómodo en Texas.",
    },
    items: [
      {
        title: {
          en: "Spectator Viewing Area",
          es: "Zona para Espectadores",
        },
        description: {
          en: "Relax on our shaded lawn and observation deck with front-row sightlines of parachutes touching down on the green landing field.",
          es: "Relájate en nuestra terraza techada con vista privilegiada en primera fila para ver los aterrizajes sobre el campo verde.",
        },
        badge: { en: "Family Friendly", es: "Ideal para Familias" },
      },
      {
        title: {
          en: "Air-Conditioned Training Suites",
          es: "Salas de Entrenamiento Climatizadas",
        },
        description: {
          en: "Pre-jump briefing rooms equipped with video review monitors, comfortable seating, and private debrief suites.",
          es: "Aulas de instrucción previa equipadas con pantallas de video, asientos cómodos y salas privadas de análisis.",
        },
        badge: { en: "Climate Controlled", es: "Climatizado" },
      },
      {
        title: {
          en: "Dog-Friendly Grounds",
          es: "Instalaciones Pet-Friendly",
        },
        description: {
          en: "Well-behaved dogs on leashes are always welcome to enjoy the Texas breeze while keeping a safe distance from active aircraft areas.",
          es: "Tus mascotas con correa son siempre bienvenidas para disfrutar del aire libre a una distancia segura de la pista.",
        },
        badge: { en: "Pets on Leash", es: "Mascotas con Correa" },
      },
      {
        title: {
          en: "Clean Facilities & Refreshments",
          es: "Baños Limpios y Refrigerios",
        },
        description: {
          en: "Full indoor modern restrooms, cold drinks, vending machines, and comfortable indoor hangar spaces to relax.",
          es: "Baños interiores limpios y modernos, bebidas frías, máquinas expendedoras y amplios espacios techados.",
        },
        badge: { en: "Full Comfort", es: "Máxima Comodidad" },
      },
    ],
  },
  cta: {
    eyebrow: {
      en: "READY FOR 14,000 FT?",
      es: "¿LISTO PARA 14,000 PIES?",
    },
    title: {
      en: "Shut Up and Jump with Dallas Skydive Center",
      es: "¡Cállate y Salta con Dallas Skydive Center!",
    },
    subtitle: {
      en: "Book online in under 2 minutes with guaranteed altitude, USPA-certified instructors, and memories that last a lifetime.",
      es: "Reserva en línea en menos de 2 minutos con altitud garantizada, instructores certificados por la USPA y recuerdos para toda la vida.",
    },
    primaryBtn: {
      en: "Book Your Jump Now",
      es: "Reserva Tu Salto Ahora",
    },
    phoneText: {
      en: "Have Questions? Call Flight Ops at (972) 552-7790",
      es: "¿Tienes Preguntas? Llama al (972) 552-7790",
    },
  },
};
