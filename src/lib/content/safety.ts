import type { I18nString } from "./types";

export interface SafetyStatItem {
  value: string;
  label: I18nString;
  detail: I18nString;
}

export interface SafetyAircraftFeature {
  title: I18nString;
  description: I18nString;
  icon: string;
}

export interface SafetyGearItem {
  id: string;
  title: I18nString;
  subtitle: I18nString;
  description: I18nString;
  specs: I18nString[];
  badge?: I18nString;
  highlight?: boolean;
}

export interface SafetyProtocolItem {
  id: string;
  title: I18nString;
  subtitle: I18nString;
  description: I18nString;
  icon: string;
  highlight?: boolean;
  badge?: I18nString;
}

export interface SafetyFaqItem {
  question: I18nString;
  answer: I18nString;
}

export interface SafetyContent {
  header: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    badge: I18nString;
  };
  overview: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    p1: I18nString;
    p2: I18nString;
    stats: SafetyStatItem[];
  };
  fleet: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    fleetDescription: I18nString;
    features: SafetyAircraftFeature[];
  };
  maintenance: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    description: I18nString;
    points: I18nString[];
  };
  gear: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    items: SafetyGearItem[];
  };
  loft: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    description: I18nString;
    features: I18nString[];
  };
  protocols: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    items: SafetyProtocolItem[];
  };
  faq: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    items: SafetyFaqItem[];
  };
  cta: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    primaryBtn: I18nString;
    phoneBtn: I18nString;
  };
}

export const safetyContent: SafetyContent = {
  header: {
    eyebrow: {
      en: "UNCOMPROMISING AVIATION STANDARDS",
      es: "ESTÁNDARES DE AVIACIÓN SIN CONCESIONES",
    },
    title: {
      en: "Aircraft Fleet, Gear & Safety Protocols",
      es: "Flota Aérea, Equipamiento y Seguridad",
    },
    subtitle: {
      en: "Every aircraft, parachute system, and flight protocol meets or exceeds FAA & USPA standards. Learn about our dedicated Super Cessna 182 fleet and on-site rigging loft.",
      es: "Cada aeronave, paracaídas y protocolo de vuelo cumple o supera las normas de la FAA y la USPA. Conoce nuestra flota de Super Cessna 182 y taller de plegado.",
    },
    badge: {
      en: "FAA Part 91 Inspected · USPA Gold Standard",
      es: "Inspección FAA Parte 91 · Estándar Oro de la USPA",
    },
  },

  overview: {
    eyebrow: {
      en: "SAFETY IS OUR DNA",
      es: "LA SEGURIDAD ES NUESTRO ADN",
    },
    title: {
      en: "Where Aviation Rigor Meets Freefall Freedom",
      es: "Donde el Rigor Aeronáutico Encuentra la Libertad",
    },
    subtitle: {
      en: "At Dallas Skydive Center, safety isn't a checklist—it is an unyielding philosophy that governs every flight, harness fitting, and parachute pack job.",
      es: "En Dallas Skydive Center, la seguridad no es solo una lista de control: es una filosofía inquebrantable que rige cada vuelo, ajuste de arnés y empaque.",
    },
    p1: {
      en: "From our base at Caddo Mills Municipal Airport, we own, operate, and maintain multiple custom-modified Super Cessna 182 jump planes under rigorous FAA Part 91 continuous maintenance inspection programs. We never compromise on maintenance intervals, engine component life limits, or structural inspections.",
      es: "Desde nuestra base en el aeropuerto municipal de Caddo Mills, operamos y mantenemos múltiples aviones Super Cessna 182 adaptados bajo rigurosos programas de inspección continua FAA Parte 91. Nunca reducimos intervalos de servicio ni límites de vida de componentes.",
    },
    p2: {
      en: "Our tandem equipment is identical to systems deployed by U.S. Military Special Forces—the UPT Sigma Tandem System—equipped with computerized Cypres 2 Automatic Activation Devices (AADs) on 100% of our rigs. Everything is inspected and serviced by our two on-staff FAA Master Parachute Riggers.",
      es: "Nuestro equipo tándem es idéntico al utilizado por las Fuerzas Especiales de EE.UU.: el sistema UPT Sigma, equipado con ordenadores barométricos Cypres 2 (AAD) en el 100% de los equipos. Todo es mantenido por nuestros dos Master Riggers certificados por la FAA.",
    },
    stats: [
      {
        value: "Super 182s",
        label: { en: "Dedicated Jump Fleet", es: "Flota de Salto Dedicada" },
        detail: { en: "Multiple custom-modified aircraft", es: "Múltiples aviones adaptados" },
      },
      {
        value: "100-Hour",
        label: { en: "FAA Phase Inspections", es: "Inspecciones de Fase FAA" },
        detail: { en: "Exceeding federal safety minimums", es: "Superando mínimos federales" },
      },
      {
        value: "100% AAD",
        label: { en: "Cypres 2 Protection", es: "Protección Cypres 2" },
        detail: { en: "Digital backup triggers on every rig", es: "Respaldo digital en cada equipo" },
      },
      {
        value: "2 FAA Riggers",
        label: { en: "In-House Loft", es: "Taller Certificado en Sitio" },
        detail: { en: "Master riggers on active duty", es: "Master Riggers en servicio activo" },
      },
    ],
  },

  fleet: {
    eyebrow: {
      en: "OUR JUMP SHIPS",
      es: "NUESTRAS AERONAVES",
    },
    title: {
      en: "The Super Cessna 182 Jump Fleet",
      es: "La Flota de Super Cessna 182 de Salto",
    },
    subtitle: {
      en: "We operate multiple specifically modified Super Cessna 182s—widely celebrated as the most reliable jump aircraft in sport skydiving history.",
      es: "Operamos varios Super Cessna 182 especialmente adaptados, reconocidos como los aviones de salto más confiables y seguros de la aviación deportiva.",
    },
    fleetDescription: {
      en: "Rather than relying on just one or two airplanes, Dallas Skydive Center maintains a robust fleet of multiple custom Super Cessna 182s. Each aircraft is outfitted with high-horsepower converted powerplants for rapid climbs to 14,000 FT, custom roll-up jump doors, wide external boarding steps, and pilot jump telemetry systems.",
      es: "En lugar de depender de solo uno o dos aviones, Dallas Skydive Center cuenta con una sólida flota de varios Super Cessna 182. Cada aeronave cuenta con motores de alta potencia para ascender rápidamente a 14,000 pies, compuertas enrollables de salto, estribos exteriores amplios y telemetría de salto.",
    },
    features: [
      {
        title: { en: "Upgraded High-Horsepower Powerplants", es: "Motores Potenciados de Alto Rendimiento" },
        description: {
          en: "Modified engines delivering rapid climb rates to 14,000 feet, minimizing in-plane ascent times and maximizing flight efficiency.",
          es: "Motores modificados que ofrecen rápidos regímenes de ascenso hasta 14,000 pies, reduciendo el tiempo de vuelo hacia la altitud de salto.",
        },
        icon: "Zap",
      },
      {
        title: { en: "Custom Skydiving Roll-Up Doors", es: "Compuertas de Salto Especializadas" },
        description: {
          en: "Specially engineered jump doors that roll smoothly overhead in flight, allowing effortless exits for tandem pairs and solo jumpers.",
          es: "Compuertas enrollables diseñadas para abrirse suavemente en vuelo, facilitando salidas cómodas para parejas tándem y saltadores solo.",
        },
        icon: "DoorOpen",
      },
      {
        title: { en: "Extended Jump Steps & Grab Rails", es: "Estribos y Asideros Exteriores Extendidos" },
        description: {
          en: "Wide aerodynamic wing-strut steps and interior grab handles for rock-solid stability during pre-exit poise and student dispatch.",
          es: "Estribos anchos y asideros interiores que proporcionan estabilidad total al colocarse en la puerta antes del salto.",
        },
        icon: "Compass",
      },
      {
        title: { en: "Dual GPS & Aviation Jump Telemetry", es: "Doble GPS y Telemetría Aeronáutica" },
        description: {
          en: "Cockpits equipped with dual aviation GPS and wind-drift calculators to compute pinpoint dropzone exit coordinates every run.",
          es: "Cabinas equipadas con doble GPS aeronáutico y calculadoras de deriva de viento para garantizar lanzamientos de máxima precisión.",
        },
        icon: "Radio",
      },
    ],
  },

  maintenance: {
    eyebrow: {
      en: "MAINTENANCE PROTOCOLS",
      es: "PROTOCOLOS DE MANTENIMIENTO",
    },
    title: {
      en: "Continuous FAA 100-Hour Phase Inspection Program",
      es: "Programa Continuo de Inspección FAA de 100 Horas",
    },
    subtitle: {
      en: "Our aircraft are maintained to standards that exceed federal commercial aviation requirements.",
      es: "Nuestros aviones se mantienen bajo estándares que superan los requisitos federales de aviación comercial.",
    },
    description: {
      en: "Every aircraft in the Dallas Skydive Center fleet undergoes mandatory 100-hour phase inspections conducted by licensed FAA Airframe and Powerplant (A&P) mechanics with Inspection Authorization (IA). Between scheduled phases, our line crew executes comprehensive daily walkarounds, control surface assessments, and engine oil spectrography.",
      es: "Cada aeronave en Dallas Skydive Center se somete a inspecciones obligatorias cada 100 horas realizadas por mecánicos de aviación (A&P) con certificación IA. Entre fases, el equipo efectúa revisiones diarias completas, chequeos de mandos y análisis de laboratorio de aceite.",
    },
    points: [
      { en: "Mandatory 100-hour phase teardowns and airframe structural inspections", es: "Desmontajes y revisiones estructurales obligatorias cada 100 horas" },
      { en: "Daily multi-point pre-flight checklists signed off by pilot-in-command", es: "Listas de verificación diarias firmadas por el piloto al mando" },
      { en: "Routine engine oil spectrographic analysis for early wear detection", es: "Análisis espectrográfico periódico de aceite para detección temprana de desgaste" },
      { en: "Propeller dynamic balancing and avionics certification per FAR 91", es: "Balanceo dinámico de hélices y calibración de aviónica según FAR 91" },
    ],
  },

  gear: {
    eyebrow: {
      en: "DUAL PARACHUTE SYSTEMS",
      es: "SISTEMAS DE PARACAÍDAS DOBLE",
    },
    title: {
      en: "U.S. Special Forces Grade Equipment",
      es: "Equipamiento Utilizado por Fuerzas Especiales",
    },
    subtitle: {
      en: "Every tandem and solo rig features redundant primary and reserve canopies plus automated computerized safety triggers.",
      es: "Cada equipo tándem e individual cuenta con paracaídas principal y reserva redundantes, más sistemas de activación automática computarizados.",
    },
    items: [
      {
        id: "sigma",
        title: { en: "UPT Sigma Tandem Harness & Container", es: "Arnés y Contenedor UPT Sigma Tándem" },
        subtitle: { en: "The gold standard in world military & civilian skydiving", es: "El estándar de oro en el paracaidismo militar y civil" },
        description: {
          en: "We fly the United Parachute Technologies (UPT) Sigma Tandem System—the exact same system trusted by U.S. Military Special Forces. Featuring patented disc-release cutaway systems and dual drogue safety catches.",
          es: "Volamos el sistema UPT Sigma, el mismo utilizado por las Fuerzas Especiales de EE.UU. Incorpora sistema patentado de liberación por disco y doble retén de drogue de seguridad.",
        },
        specs: [
          { en: "Military-grade high-tensile harness webbing (rated to 7,000+ lbs)", es: "Cintas de arnés militar de alta resistencia (soporta más de 7,000 lbs)" },
          { en: "Patented Skyhook RSL (Reserve Static Line) for sub-second reserve deployment", es: "Sistema Skyhook RSL para apertura de reserva en menos de un segundo" },
          { en: "Dual drogue release handles ensuring redundant pilot control", es: "Manijas dobles de liberación para control redundante del instructor" },
        ],
        highlight: true,
        badge: { en: "Special Forces Grade", es: "Grado Fuerzas Especiales" },
      },
      {
        id: "cypres",
        title: { en: "Cypres 2 Automatic Activation Device (AAD)", es: "Dispositivo de Activación Automática Cypres 2" },
        subtitle: { en: "Computerized flight computer backup on 100% of rigs", es: "Computadora de vuelo de respaldo en el 100% de los equipos" },
        description: {
          en: "Every single tandem and student rig is equipped with a digital Cypres 2 AAD. Operating on independent barometric microprocessors, it continuously monitors altitude and descent rate, firing a pyrotechnic cutter to open the reserve if parameters are breached.",
          es: "Cada equipo tándem y de alumno cuenta con un dispositivo digital Cypres 2. Con microprocesadores barométricos independientes, monitorea continuamente la altitud y velocidad, activando la reserva si se cruzan límites críticos.",
        },
        specs: [
          { en: "Failsafe pyrotechnic loop cutter fires in milliseconds", es: "Cortador pirotécnico de seguridad que actúa en milisegundos" },
          { en: "Real-time atmospheric pressure calibration prior to every takeoff", es: "Calibración barométrica en tiempo real antes de cada despegue" },
          { en: "Zero battery drain failure with hermetically sealed electronics", es: "Electrónica sellada herméticamente para máxima confiabilidad" },
        ],
        highlight: true,
        badge: { en: "100% of Fleet Rigs", es: "100% de los Equipos" },
      },
    ],
  },

  loft: {
    eyebrow: {
      en: "IN-HOUSE FAA RIGGING LOFT",
      es: "TALLER DE PLEGADO FAA PROPIO",
    },
    title: {
      en: "On-Site Rigging Loft Staffed by Two FAA Master Riggers",
      es: "Taller Propio con Dos Plegadores Maestros FAA",
    },
    subtitle: {
      en: "Unlike dropzones that outsource parachute packing and harness repairs, DSC maintains a fully equipped FAA rigging loft inside our 3,600 sq ft facility.",
      es: "A diferencia de centros que subcontratan el empaque y mantenimiento, DSC cuenta con taller propio certificado dentro de nuestras instalaciones de 3,600 pies cuadrados.",
    },
    description: {
      en: "Led by Chief Instructor Jimmy Mendonca, our rigging department carries out mandatory 180-day FAA reserve repacks, harness testing, laser line trims, and canopy inspections on-site. We also provide certified rigging and inspection services to sport skydivers throughout the entire Dallas–Fort Worth region.",
      es: "Bajo la dirección de Jimmy Mendonca, nuestro departamento realiza reempacados obligatorios de reserva cada 180 días, pruebas de arnés, trimado de líneas e inspección de cúpulas. Brindamos servicio a saltadores de todo Dallas–Fort Worth.",
    },
    features: [
      { en: "Strict compliance with FAA FAR 105.43 180-day reserve repack cycles", es: "Cumplimiento estricto del ciclo de 180 días de la norma FAA FAR 105.43" },
      { en: "Heavy-duty industrial computerized sewing machines for harness maintenance", es: "Máquinas industriales computarizadas para mantenimiento de arneses" },
      { en: "Climate-controlled clean-room packing tables with zero moisture buildup", es: "Mesas de plegado en ambiente climatizado y libre de humedad" },
      { en: "Comprehensive digital gear logbooks and FAA inspection seals", es: "Bitácoras digitales de equipo y sellos de inspección oficiales de la FAA" },
    ],
  },

  protocols: {
    eyebrow: {
      en: "DROPZONE PROTOCOLS",
      es: "PROTOCOLOS OPERATIVOS",
    },
    title: {
      en: "Rigorous Operating Safety Standards",
      es: "Normas Rigurosas de Seguridad Operativa",
    },
    subtitle: {
      en: "Every operational policy is engineered around participant protection, risk mitigation, and disciplined aviation procedures.",
      es: "Cada política operativa está diseñada para la protección de los saltadores, mitigación de riesgos y disciplina aérea.",
    },
    items: [
      {
        id: "substance-policy",
        title: { en: "Zero Tolerance Drug & Alcohol Policy", es: "Política de Cero Alcohol y Sustancias" },
        subtitle: { en: "100% sober dropzone environment", es: "Ambiente 100% sobrio y seguro" },
        description: {
          en: "Dallas Skydive Center enforces a strict, uncompromising zero-tolerance drug and alcohol policy. Absolutely no alcohol is permitted anywhere on dropzone grounds during flight hours until the final parachute load has touched down. Anyone with alcohol or drugs in their system will be immediately grounded with zero exceptions.",
          es: "Dallas Skydive Center aplica una política estricta e inquebrantable de cero alcohol y drogas. Prohibido el consumo de alcohol en las instalaciones durante horas de salto hasta que aterrice el último vuelo. Cualquier persona con alcohol o sustancias en su sistema quedará suspendida sin excepciones.",
        },
        icon: "ShieldAlert",
        highlight: true,
        badge: {
          en: "Strict Zero Tolerance · Zero Exceptions",
          es: "Tolerancia Cero · Sin Excepciones",
        },
      },
      {
        id: "weather-cutoff",
        title: { en: "Aviation Weather & Wind Cutoffs", es: "Límites Meteorológicos y de Viento" },
        subtitle: { en: "Monitored at 10,000–14,000 FT AGL", es: "Monitoreo en altura a 10,000–14,000 pies" },
        description: {
          en: "We will not fly or jump in conditions deemed unsafe by Flight Operations. This includes surface winds over safety thresholds, low cloud ceilings, thunderstorms, or extreme temperature inversions.",
          es: "No despegamos ni saltamos en condiciones consideradas inseguras por operaciones. Esto incluye vientos que superen los límites, nubes bajas, tormentas o temperaturas extremas.",
        },
        icon: "CloudSun",
      },
      {
        id: "commercial-pilots",
        title: { en: "FAA Commercial Jump Pilots", es: "Pilotos Comerciales Certificados FAA" },
        subtitle: { en: "Specialized jump run flight training", es: "Entrenamiento especializado en paracaidismo" },
        description: {
          en: "Our pilots hold FAA Commercial Pilot Certificates with extensive high-altitude jump-run flight experience, specialized short-field takeoff skills, and instrument flight ratings.",
          es: "Nuestros pilotos cuentan con licencias comerciales de la FAA, amplia experiencia en vuelos de salto en altitud, despegues en pistas cortas y habilitación de instrumentos.",
        },
        icon: "Plane",
      },
      {
        id: "landing-field",
        title: { en: "651-Acre Obstacle-Free Runway", es: "Campo de Aterrizaje de 651 Acres Libre de Obstáculos" },
        subtitle: { en: "Expansive manicured Texas grass buffer", es: "Amplia zona de seguridad de césped" },
        description: {
          en: "Our dropzone operates on over 600 acres of flat, open Texas countryside at Caddo Mills Municipal Airport, giving jumpers massive obstacle-free landing areas with zero power lines or trees.",
          es: "Operamos en más de 600 acres de campo abierto y plano en Caddo Mills, brindando a los saltadores áreas de aterrizaje gigantescas sin cables eléctricos ni árboles.",
        },
        icon: "Compass",
      },
      {
        id: "scale-precision",
        title: { en: "Certified Scale & Weight Limits", es: "Límites de Peso y Báscula Oficial" },
        subtitle: { en: "Calculated for parachute wing loading", es: "Calculado para la carga alar del paracaídas" },
        description: {
          en: "Every tandem student and solo jumper is weighed on our official dropzone scale. Max weight is 240 lbs male / 220 lbs female to ensure manufacturer canopy weight limits are never exceeded.",
          es: "Cada saltador se pesa en nuestra báscula oficial. El peso máximo es 240 lbs en hombres y 220 lbs en mujeres para no superar los límites de carga del fabricante.",
        },
        icon: "Scale",
      },
      {
        id: "harness-fit",
        title: { en: "Body Geometry & Harness Verification", es: "Ajuste Anatómico del Arnés de Seguridad" },
        subtitle: { en: "Quad-point safety lock verification", es: "Verificación de ajuste en cuatro puntos" },
        description: {
          en: "Our instructors physically verify that every harness fits securely across the shoulders, chest, and thighs. If proper adjustment cannot be achieved due to body geometry, the jump is grounded for safety.",
          es: "Nuestros instructores verifican personalmente que el arnés ajuste a la perfección en hombros, pecho y piernas. Si no se logra un ajuste óptimo, el salto no se realiza por seguridad.",
        },
        icon: "UserCheck",
      },
    ],
  },

  faq: {
    eyebrow: {
      en: "SAFETY & FLEET FAQS",
      es: "PREGUNTAS FRECUENTES DE SEGURIDAD",
    },
    title: {
      en: "Frequently Asked Safety Questions",
      es: "Preguntas Frecuentes sobre Seguridad",
    },
    subtitle: {
      en: "Transparent answers regarding our maintenance procedures, backup safety devices, and dropzone protocols.",
      es: "Respuestas claras sobre nuestros procedimientos de mantenimiento, sistemas de respaldo y protocolos.",
    },
    items: [
      {
        question: {
          en: "How many airplanes does Dallas Skydive Center operate?",
          es: "¿Cuántos aviones opera Dallas Skydive Center?",
        },
        answer: {
          en: "Dallas Skydive Center owns and operates a dedicated fleet of multiple custom-modified Super Cessna 182 aircraft (more than two 182s). Having multiple aircraft ensures consistent flight rotation, minimal wait times, and uninterrupted operations even during scheduled maintenance phase inspections.",
          es: "Dallas Skydive Center posee y opera una flota dedicada de múltiples aviones Super Cessna 182 modificados (más de dos 182s). Contar con varias aeronaves asegura rotación de vuelos continua, tiempos mínimos de espera y operaciones ininterrumpidas durante fases de mantenimiento.",
        },
      },
      {
        question: {
          en: "What happens if the main parachute fails to open?",
          es: "¿Qué sucede si el paracaídas principal no abre correctamente?",
        },
        answer: {
          en: "Every parachute system contains two parachutes: a primary main canopy and an auxiliary reserve parachute. If the main has any malfunction, the instructor cuts away the main and deploys the reserve. Additionally, the UPT Sigma Skyhook RSL deploys the reserve within fractions of a second upon release.",
          es: "Cada equipo contiene dos paracaídas: uno principal y uno de reserva. Si el principal tiene alguna falla, el instructor lo libera y abre la reserva. Además, el sistema Skyhook RSL del arnés Sigma abre la reserva en una fracción de segundo de forma automática.",
        },
      },
      {
        question: {
          en: "How does the Cypres 2 Automatic Activation Device (AAD) work?",
          es: "¿Cómo funciona el dispositivo de activación automática Cypres 2?",
        },
        answer: {
          en: "The Cypres 2 is a computerized digital flight instrument installed inside the reserve container. It measures barometric air pressure thousands of times per second. If the computer detects that a jumper is below a critical decision altitude and still traveling at freefall speed, it automatically fires an internal cutter that releases the reserve canopy.",
          es: "El Cypres 2 es un instrumento de vuelo computarizado instalado dentro del contenedor de reserva. Mide la presión barométrica miles de veces por segundo. Si detecta que el saltador está a baja altitud y a velocidad de caída libre, activa un cortador interno que libera la reserva automáticamente.",
        },
      },
      {
        question: {
          en: "What is your policy on alcohol and recreational drugs?",
          es: "¿Cuál es su política sobre alcohol y drogas recreativas?",
        },
        answer: {
          en: "We maintain an absolute, 100% zero-tolerance drug and alcohol policy. No alcoholic beverages are allowed on the dropzone property during flight operations until the final flight of the day has landed. Any jumper or student with alcohol or substances in their system will not be permitted to jump under any circumstances.",
          es: "Mantenemos una política estricta de 100% cero tolerancia al alcohol y sustancias. No se permite ninguna bebida alcohólica en el aeródromo durante las horas de vuelo hasta que aterrice el último paracaídas. Cualquier persona con alcohol en su sistema tiene prohibido saltar.",
        },
      },
      {
        question: {
          en: "Who inspects and certifies your jump aircraft?",
          es: "¿Quién inspecciona y certifica los aviones de salto?",
        },
        answer: {
          en: "All of our Super Cessna 182 aircraft are maintained under strict FAA Part 91 continuous inspection programs by certified Airframe and Powerplant (A&P) mechanics with FAA Inspection Authorization (IA). Teardowns and phase checks occur every 100 flight hours, with complete annual recertifications.",
          es: "Todos nuestros Super Cessna 182 se mantienen bajo rigurosos programas de inspección continua FAA Parte 91 por mecánicos certificados A&P con autorización IA. Se realizan inspecciones completas cada 100 horas de vuelo y recertificaciones anuales oficiales.",
        },
      },
    ],
  },

  cta: {
    eyebrow: {
      en: "EXPERIENCE THE SAFEST SKYDIVE IN TEXAS",
      es: "VIVE EL SALTO MÁS SEGURO DE TEXAS",
    },
    title: {
      en: "Fly with Dallas Skydive Center’s Premier Fleet",
      es: "Vuela con la Flota Líder de Dallas Skydive Center",
    },
    subtitle: {
      en: "Book your tandem skydive or schedule your solo training backed by military-grade gear, certified FAA riggers, and our Super Cessna 182 fleet.",
      es: "Reserva tu salto tándem o agenda tu curso individual con equipo de grado militar, plegadores de la FAA y nuestra flota de Super Cessna 182.",
    },
    primaryBtn: {
      en: "Book Your Skydive Online",
      es: "Reservar Tu Salto en Línea",
    },
    phoneBtn: {
      en: "Flight Dispatch Hotline: (972) 552-7790",
      es: "Línea de Operaciones: (972) 552-7790",
    },
  },
};
