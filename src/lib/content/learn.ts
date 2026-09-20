import type { I18nString } from "./types";

export interface LearnStatItem {
  value: string;
  label: I18nString;
  detail: I18nString;
}

export interface LearnProgressionStage {
  stage: string;
  category: I18nString;
  title: I18nString;
  subtitle: I18nString;
  description: I18nString;
  skills: I18nString[];
  highlight: I18nString;
  icon: string;
}

export interface LearnFundamentalItem {
  id: string;
  title: I18nString;
  subtitle: I18nString;
  description: I18nString;
  tip: I18nString;
  icon: string;
}

export interface LearnRequirementItem {
  id: string;
  title: I18nString;
  detail: I18nString;
  icon: string;
  highlight?: boolean;
  badge?: I18nString;
}

export interface LearnPackageItem {
  id: string;
  name: I18nString;
  price: string;
  subtitle: I18nString;
  description: I18nString;
  features: I18nString[];
  popular?: boolean;
  badge?: I18nString;
}

export interface LearnFaqItem {
  question: I18nString;
  answer: I18nString;
}

export interface LearnContent {
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
    mentorQuote: I18nString;
    mentorName: string;
    mentorTitle: I18nString;
    stats: LearnStatItem[];
  };
  progression: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    stages: LearnProgressionStage[];
  };
  fundamentals: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    items: LearnFundamentalItem[];
  };
  requirements: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    items: LearnRequirementItem[];
  };
  packages: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    items: LearnPackageItem[];
  };
  faq: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    items: LearnFaqItem[];
  };
  cta: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    primaryBtn: I18nString;
    phoneBtn: I18nString;
  };
}

export const learnContent: LearnContent = {
  header: {
    eyebrow: {
      en: "SOLO CERTIFICATION & LICENSING",
      es: "CERTIFICACIÓN INDIVIDUAL Y LICENCIAS",
    },
    title: {
      en: "Learn to Skydive — USPA AFF Program",
      es: "Aprende a Saltar Solo — Programa USPA AFF",
    },
    subtitle: {
      en: "Progress from ground school to solo freefall and earn your internationally recognized USPA 'A' License at Dallas Skydive Center.",
      es: "Avanza desde la escuela en tierra hasta el salto libre individual y obtén tu Licencia 'A' de la USPA reconocida en todo el mundo.",
    },
    badge: {
      en: "USPA Certified Dropzone · Integrated Student Program",
      es: "Zona Certificada por la USPA · Programa Oficial para Alumnos",
    },
  },

  overview: {
    eyebrow: {
      en: "ACCELERATED FREEFALL CURRICULUM",
      es: "CURRÍCULO DE CAÍDA LIBRE ACELERADA",
    },
    title: {
      en: "Master Solo Flight Under World-Class Mentorship",
      es: "Domina el Vuelo Individual con Instrucción de Élite",
    },
    subtitle: {
      en: "Learn directly at Dallas–Fort Worth’s dedicated USPA training dropzone with our on-staff FAA Master Parachute Riggers and Examiner instructors.",
      es: "Aprende en la zona de salto especializada de Dallas–Fort Worth con Master Riggers de la FAA e instructores examinadores de la USPA.",
    },
    p1: {
      en: "The Accelerated Freefall (AFF) program is the modern international benchmark for solo skydiving instruction. Instead of relying on static-line training, you begin jumping from 14,000 feet on your very first jump alongside two certified USPA AFF Instructors holding your harness while you practice altitude awareness, body stability, and pilot deployment.",
      es: "El programa de Caída Libre Acelerada (AFF) es el estándar internacional para aprender a saltar solo. En lugar de líneas estáticas, comienzas saltando desde 14,000 pies desde tu primer salto acompañado de dos instructores certificados por la USPA que sostienen tu arnés mientras practicas control de altitud, estabilidad y apertura.",
    },
    p2: {
      en: "Under the direct mentorship of Chief Instructor Jimmy Mendonca (13,000+ logged skydives, FAA Master Parachute Rigger, and USPA Tandem/AFF Examiner), you will master body flight dynamics, emergency protocols, canopy piloting, and parachute packing right in our in-house FAA rigging loft.",
      es: "Bajo la tutoría directa de nuestro instructor jefe Jimmy Mendonca (más de 13,000 saltos registrados, Master Rigger de la FAA y Examinador de la USPA), dominarás la aerodinámica corporal, protocolos de emergencia, pilotaje de cúpula y plegado de paracaídas en nuestro taller certificado.",
    },
    mentorQuote: {
      en: "“We don’t just train you to make a jump—we build confident, disciplined skydivers who understand their gear, master the sky, and can safely fly anywhere in the world.”",
      es: "“No solo te enseñamos a hacer un salto: formamos paracaidistas seguros y disciplinados que dominan su equipo y pueden saltar con confianza en cualquier parte del mundo.”",
    },
    mentorName: "Jimmy Mendonca",
    mentorTitle: {
      en: "Chief Instructor, FAA Master Rigger & USPA Examiner",
      es: "Instructor Jefe, Master Rigger de la FAA y Examinador USPA",
    },
    stats: [
      {
        value: "25 Jumps",
        label: { en: "To 'A' License", es: "Para Licencia 'A'" },
        detail: { en: "Worldwide jump privileges", es: "Validez mundial para saltar solo" },
      },
      {
        value: "100% USPA",
        label: { en: "Official Syllabus", es: "Programa Oficial" },
        detail: { en: "Category A through H curriculum", es: "Categorías A hasta la H completas" },
      },
      {
        value: "14,000 FT",
        label: { en: "Training Altitude", es: "Altitud de Práctica" },
        detail: { en: "Super Cessna 182 fleet", es: "Flota de aviones Super Cessna" },
      },
      {
        value: "FAA Riggers",
        label: { en: "In-House Loft", es: "Taller en Casa" },
        detail: { en: "Full gear inspection & packing", es: "Inspección y plegado certificado" },
      },
    ],
  },

  progression: {
    eyebrow: {
      en: "THE 4-STAGE ROADMAP",
      es: "EL MAPA DE 4 ETAPAS",
    },
    title: {
      en: "Your Path to the USPA 'A' License",
      es: "Tu Camino Hacia la Licencia 'A' de la USPA",
    },
    subtitle: {
      en: "Structured into the USPA Integrated Student Program (ISP), guiding you from initial ground theory to independent solo graduation.",
      es: "Estructurado según el Programa Integrado de Alumnos (ISP) de la USPA, guiándote desde el aula hasta tu graduación en solitario.",
    },
    stages: [
      {
        stage: "01",
        category: { en: "Ground School", es: "Escuela en Tierra" },
        title: { en: "First Jump Course (FJC)", es: "Curso del Primer Salto (FJC)" },
        subtitle: { en: "6–8 Hours of intensive theory & harness drills", es: "6–8 horas de teoría intensiva y simulacros de arnés" },
        description: {
          en: "Comprehensive classroom instruction covering freefall aerodynamics, aircraft exit techniques, the arched body position, altimeter monitoring, emergency decision trees, and radio-guided canopy flight patterns.",
          es: "Instrucción teórica en aula que cubre aerodinámica en caída libre, salidas del avión, la postura de arco, lectura de altímetro, protocolos de emergencia y patrones de vuelo guiados por radio.",
        },
        skills: [
          { en: "Freefall body flight mechanics & 'The Arch'", es: "Mecánica de vuelo corporal y la postura de arco" },
          { en: "Altimeter scans & pull priority at 5,500 FT", es: "Lectura continua de altímetro y apertura a 5,500 pies" },
          { en: "Emergency procedures & reserve deployment drills", es: "Procedimientos de emergencia y simulacros con paracaídas de reserva" },
          { en: "Canopy flight patterns & ground-to-air radio coaching", es: "Patrones de aproximación y guía por radio desde tierra" },
        ],
        highlight: { en: "Hands-on suspended harness emergency simulation", es: "Simulación de emergencias en arnés suspendido" },
        icon: "BookOpen",
      },
      {
        stage: "02",
        category: { en: "Categories A–C", es: "Categorías A–C" },
        title: { en: "Dual-Instructor Freefall", es: "Caída Libre con Dos Instructores" },
        subtitle: { en: "Harness-hold jumps from 14,000 FT", es: "Saltos sujetos del arnés desde 14,000 pies" },
        description: {
          en: "Jump with two dedicated USPA AFF Instructors gripping your harness throughout freefall. You practice heading control, simulated practice ripcord pulls, continuous altitude cross-checking, and main parachute deployment at 5,500 FT.",
          es: "Salta con dos instructores USPA certificados sosteniendo tu arnés durante la caída libre. Practicas rumbo, simulacros de apertura, chequeos de altímetro y despliegue del paracaídas principal a 5,500 pies.",
        },
        skills: [
          { en: "Stable heading hold in 120 MPH freefall", es: "Control de rumbo estable a 120 MPH" },
          { en: "Three successful practice deployment touches", es: "Tres toques de práctica de apertura exitosos" },
          { en: "Solo canopy deployment at assigned altitude", es: "Apertura autónoma a la altitud asignada" },
          { en: "Radio-assisted landing pattern to grass runway", es: "Aterrizaje en pista de césped guiado por radio" },
        ],
        highlight: { en: "Two instructors beside you until stable release", es: "Dos instructores a tu lado hasta la liberación estable" },
        icon: "Users",
      },
      {
        stage: "03",
        category: { en: "Categories D–E", es: "Categorías D–E" },
        title: { en: "Single-Instructor Release Dives", es: "Saltos con Instructor Único" },
        subtitle: { en: "Autonomous maneuvering & aerobatics", es: "Maniobras autónomas y acrobacias" },
        description: {
          en: "Transition to a single instructor who releases you into independent freefall. You demonstrate 90°, 180°, and 360° turns, forward tracking across the sky, backflips with controlled recovery, and unassisted main deployment.",
          es: "Pasas a un solo instructor que te libera en caída libre independiente. Demuestras giros de 90°, 180° y 360°, desplazamiento hacia adelante (tracking), mortales hacia atrás con recuperación y apertura autónoma.",
        },
        skills: [
          { en: "Controlled 360-degree flat turns in freefall", es: "Giros planos controlados de 360 grados" },
          { en: "Backloops and immediate re-stabilization", es: "Mortales hacia atrás y recuperación inmediata" },
          { en: "Forward tracking to create canopy separation", es: "Tracking de avance para separación de paracaídas" },
          { en: "Independent unassisted landing flare", es: "Frenado de aterrizaje independiente sin ayuda" },
        ],
        highlight: { en: "Total freefall autonomy and aerobatic recovery", es: "Autonomía total en el aire y recuperación acrobática" },
        icon: "Compass",
      },
      {
        stage: "04",
        category: { en: "Categories F–H", es: "Categorías F–H" },
        title: { en: "Solo Check-Dives & A-License", es: "Evaluaciones y Licencia 'A'" },
        subtitle: { en: "Hop-and-pops, parachute packing & graduation", es: "Saltos bajos, plegado y graduación oficial" },
        description: {
          en: "Clear low-altitude emergency exits (hop-and-pops from 3,500–5,500 FT), pack your own main parachute under supervision in our FAA loft, master group tracking, pass the USPA written exam, and achieve your official 25-jump 'A' License.",
          es: "Supera salidas de baja altitud (hop-and-pops a 3,500–5,500 pies), empaca tu propio paracaídas en nuestro taller FAA, aprueba el examen escrito de la USPA y alcanza los 25 saltos requeridos para tu Licencia 'A'.",
        },
        skills: [
          { en: "Clear-and-pull low altitude hop-and-pops", es: "Saltos bajos hop-and-pop con apertura inmediata" },
          { en: "Supervised main parachute packing certification", es: "Certificación supervisada de plegado de paracaídas" },
          { en: "Canopy landing accuracy within 20 meters", es: "Precisión de aterrizaje dentro de 20 metros" },
          { en: "USPA A-License stamp & international certification", es: "Sello oficial de Licencia 'A' USPA internacional" },
        ],
        highlight: { en: "Official USPA A-License with worldwide jumping rights", es: "Licencia 'A' oficial con derecho a saltar en todo el mundo" },
        icon: "Award",
      },
    ],
  },

  fundamentals: {
    eyebrow: {
      en: "CORE TRAINING PRINCIPLES",
      es: "PRINCIPIOS FUNDAMENTALES",
    },
    title: {
      en: "The Flight Fundamentals You Will Master",
      es: "Los Fundamentos de Vuelo que Dominarás",
    },
    subtitle: {
      en: "Mastering body flight requires understanding aerodynamic stability, discipline, and gear mechanics.",
      es: "Dominar el vuelo corporal requiere comprender la estabilidad aerodinámica, disciplina y mecánica del equipo.",
    },
    items: [
      {
        id: "arch",
        title: { en: "“The Arch” Body Position", es: "La Postura de “El Arco”" },
        subtitle: { en: "The foundation of freefall stability", es: "La base de la estabilidad en caída libre" },
        description: {
          en: "Resembling the curve of a banana, the arch requires pushing your pelvis forward while keeping your chin up and arms relaxed. This shifts your center of gravity below the airflow, creating natural aerodynamic stability at 120 MPH.",
          es: "Semejante a la curva de un plátano, el arco consiste en proyectar la pelvis hacia adelante con la barbilla en alto y brazos relajados. Esto sitúa tu centro de gravedad por debajo del flujo de aire, creando estabilidad natural a 120 MPH.",
        },
        tip: { en: "Pelvis forward, chin high, relaxed limbs", es: "Pelvis al frente, barbilla alta y extremidades relajadas" },
        icon: "Zap",
      },
      {
        id: "altitude",
        title: { en: "Altitude Awareness & Cross-Checks", es: "Conciencia Continua de Altitud" },
        subtitle: { en: "Altimeter scans every 5 seconds", es: "Chequeo de altímetro cada 5 segundos" },
        description: {
          en: "Altitude is life in skydiving. You will drill the habit of checking your wrist altimeter every 5 seconds, maintaining complete awareness of your 5,500 FT decision altitude and 4,000 FT hard deck.",
          es: "La altitud es vida en el paracaidismo. Practicarás el hábito de consultar tu altímetro de muñeca cada 5 segundos, conociendo con precisión tu altitud de apertura a 5,500 pies y tu límite crítico de decisión.",
        },
        tip: { en: "Altitude, Heading, Instructors scan cycle", es: "Ciclo visual: Altitud, Rumbo, Instructores" },
        icon: "Gauge",
      },
      {
        id: "radio",
        title: { en: "Two-Way Helmet Radio Guidance", es: "Guía por Radio en el Casco" },
        subtitle: { en: "Direct coaching from ground to touchdown", es: "Instrucción directa desde tierra hasta aterrizar" },
        description: {
          en: "After deployment, an instructor on the ground talks directly into your helmet radio, coaching your pattern entry, downwind, base, and final approach until your feet gently touch the grass.",
          es: "Tras la apertura, un instructor en tierra se comunica contigo por radio en tu casco, guiando tu entrada al patrón, tramo con viento, tramo base y aproximación final hasta tocar el césped.",
        },
        tip: { en: "Confidence-building pattern coaching", es: "Orientación precisa para un aterrizaje suave" },
        icon: "Radio",
      },
      {
        id: "rigging",
        title: { en: "In-House FAA Rigging Loft", es: "Taller de Plegado FAA Propio" },
        subtitle: { en: "Learn to inspect and pack your own canopy", es: "Aprende a inspeccionar y empacar tu propio equipo" },
        description: {
          en: "Unlike dropzones that outsource maintenance, DSC operates an on-site rigging loft with two FAA Master Parachute Riggers. You will personally learn gear pre-flight inspection and main parachute packing.",
          es: "A diferencia de otros centros, DSC cuenta con taller propio con dos Master Riggers de la FAA. Aprenderás en persona la inspección previa de seguridad y el plegado correcto de tu paracaídas.",
        },
        tip: { en: "Direct instruction from FAA Master Riggers", es: "Enseñanza directa con plegadores certificados FAA" },
        icon: "Wrench",
      },
    ],
  },

  requirements: {
    eyebrow: {
      en: "STUDENT ELIGIBILITY",
      es: "REQUISITOS PARA ALUMNOS",
    },
    title: {
      en: "AFF Solo Student Prerequisites",
      es: "Requisitos Previos para Alumnos AFF",
    },
    subtitle: {
      en: "Ensure you meet the following safety criteria before enrolling in our First Jump Course.",
      es: "Asegúrate de cumplir con los siguientes criterios de seguridad antes de inscribirte en el curso.",
    },
    items: [
      {
        id: "age",
        title: { en: "Must Be 18 or Older", es: "Mayor de 18 Años Obligatorio" },
        detail: {
          en: "Government-issued photo ID (Driver's License or Passport) is strictly required at check-in. Absolutely no exceptions.",
          es: "Identificación oficial con foto vigente (licencia o pasaporte) obligatoria al registrarte. Sin excepciones.",
        },
        icon: "IdCard",
        highlight: true,
        badge: {
          en: "Mandatory · Bring Government ID!",
          es: "¡Obligatorio · Llevar Identificación!",
        },
      },
      {
        id: "tandem",
        title: { en: "Prior Tandem Jump Recommended", es: "Salto Tándem Previo Recomendado" },
        detail: {
          en: "We strongly recommend making at least one tandem skydive prior to ground school to familiarize yourself with freefall sensory input.",
          es: "Recomendamos encarecidamente realizar al menos un salto tándem antes de la escuela en tierra para adaptarte a la caída libre.",
        },
        icon: "Sparkles",
        highlight: true,
        badge: {
          en: "Recommended First Step",
          es: "Paso Inicial Recomendado",
        },
      },
      {
        id: "weight",
        title: { en: "Weight Limits", es: "Límites de Peso Estrictos" },
        detail: {
          en: "Maximum weight is 220 lbs for solo students in good athletic condition to ensure parachute wing-loading limits.",
          es: "Peso máximo de 220 lbs para alumnos en buena condición física para respetar los límites de carga alar.",
        },
        icon: "Scale",
      },
      {
        id: "health",
        title: { en: "Good Physical Health & Agility", es: "Buena Condición Física y Agilidad" },
        detail: {
          en: "Must have good flexibility, cardio stamina, and the strength to steer toggles and perform parachute landing falls.",
          es: "Buena flexibilidad, condición cardiovascular y fuerza para maniobrar los mandos y aterrizar con seguridad.",
        },
        icon: "HeartPulse",
      },
      {
        id: "drugs",
        title: { en: "Zero Drugs or Alcohol", es: "Cero Alcohol o Sustancias" },
        detail: {
          en: "Strict 100% drug and alcohol-free policy. Zero tolerance for any student training operations.",
          es: "Política estricta de cero alcohol y drogas. Cero tolerancia en todas las operaciones de entrenamiento.",
        },
        icon: "ShieldAlert",
      },
      {
        id: "commitment",
        title: { en: "Time & Weather Patience", es: "Compromiso y Paciencia con el Clima" },
        detail: {
          en: "Solo training requires full days at the dropzone. Cloud cover or high winds may pause flights for safety.",
          es: "El entrenamiento requiere días completos en el aeródromo. Nubes bajas o vientos pueden pausar los vuelos.",
        },
        icon: "Clock",
      },
    ],
  },

  packages: {
    eyebrow: {
      en: "TRANSPARENT TUITION",
      es: "COSTOS DE ENTRENAMIENTO",
    },
    title: {
      en: "AFF Course Training Packages",
      es: "Paquetes del Curso AFF",
    },
    subtitle: {
      en: "Choose between starting with your First Jump Course or enrolling in our comprehensive all-inclusive A-License curriculum.",
      es: "Elige entre iniciar con tu Curso del Primer Salto o inscribirte en el paquete integral hasta la Licencia 'A'.",
    },
    items: [
      {
        id: "fjc",
        name: { en: "First Jump Course (FJC)", es: "Curso del Primer Salto (FJC)" },
        price: "$349",
        subtitle: { en: "Ground School + Category A Jump", es: "Escuela en Tierra + Salto Categoría A" },
        description: {
          en: "The ideal starting point. Complete 6–8 hours of classroom and suspended harness drills, then make your Category A jump with two instructors.",
          es: "El punto de inicio ideal. Completa 6–8 horas de teoría y simulacros de arnés, y realiza tu salto Categoría A con dos instructores.",
        },
        features: [
          { en: "Full 6–8 hour ground school instruction", es: "Instrucción completa de 6–8 horas en aula" },
          { en: "Student logbook & USPA ISP training manual", es: "Bitácora oficial y manual de entrenamiento USPA" },
          { en: "Category A skydive with 2 USPA AFF instructors", es: "Salto Categoría A con 2 instructores certificados" },
          { en: "Solo parachute rig, altimeter, goggles & helmet", es: "Equipo completo: paracaídas, altímetro y casco" },
          { en: "Ground-to-air helmet radio coaching", es: "Guía por radio desde tierra en tu casco" },
        ],
      },
      {
        id: "paygo",
        name: { en: "Pay-As-You-Go AFF Levels", es: "Niveles AFF Pago por Salto" },
        price: "$189–$229",
        subtitle: { en: "Per jump as you advance (Cat B–H)", es: "Por salto conforme avanzas (Cat B–H)" },
        popular: true,
        badge: { en: "Most Flexible", es: "Más Flexible" },
        description: {
          en: "Progress at your own pace. Pay per jump level as you advance from dual-instructor stability through single-instructor maneuvers and solo clears.",
          es: "Avanza a tu propio ritmo. Paga cada nivel conforme progresas desde saltos con dos instructores hasta maniobras acrobáticas y saltos libres.",
        },
        features: [
          { en: "Category B–C: Dual-instructor freefall jumps", es: "Categorías B–C: Saltos con dos instructores" },
          { en: "Category D–E: Single-instructor release dives", es: "Categorías D–E: Saltos con instructor único" },
          { en: "Category F–H: Solo clearance & hop-and-pops", es: "Categorías F–H: Saltos en solitario y hop-and-pops" },
          { en: "Pre-jump briefing and post-jump video debrief", es: "Instrucción previa y análisis en video posterior" },
          { en: "Full student parachute gear rental included", es: "Renta completa del equipo de paracaídas incluida" },
        ],
      },
      {
        id: "full",
        name: { en: "Complete 25-Jump A-License Package", es: "Paquete Completo Licencia 'A' (25 Saltos)" },
        price: "$3,499",
        subtitle: { en: "Zero to Licensed Skydiver", es: "De Cero a Paracaidista Certificado" },
        badge: { en: "Best Value · All-Inclusive", es: "Mejor Valor · Todo Incluido" },
        description: {
          en: "The comprehensive package taking you from complete beginner to certified USPA A-License holder with 25 logged jumps, packing lessons, and test fees.",
          es: "El paquete integral que te lleva de principiante a titular de la Licencia 'A' de la USPA con 25 saltos registrados, clases de plegado y trámites.",
        },
        features: [
          { en: "Ground school + all 8 AFF progression categories", es: "Escuela en tierra + las 8 categorías del programa AFF" },
          { en: "All solo jumps up to official 25-jump graduation", es: "Todos los saltos libres hasta alcanzar los 25 saltos" },
          { en: "All student parachute rentals & professional pack jobs", es: "Renta de equipo y empaques certificados incluidos" },
          { en: "Hands-on parachute packing certification class", es: "Curso práctico de plegado con Master Rigger" },
          { en: "USPA A-License exam fee & membership submission", es: "Trámite y derechos oficiales de la licencia USPA" },
        ],
      },
    ],
  },

  faq: {
    eyebrow: {
      en: "COMMON QUESTIONS",
      es: "PREGUNTAS FRECUENTES",
    },
    title: {
      en: "Solo Skydiving Training FAQs",
      es: "Preguntas Frecuentes del Entrenamiento Solo",
    },
    subtitle: {
      en: "Straightforward answers to help you plan your journey to becoming a licensed skydiver.",
      es: "Respuestas claras para ayudarte a planificar tu camino como paracaidista certificado.",
    },
    items: [
      {
        question: {
          en: "How long does it take to earn a USPA 'A' License?",
          es: "¿Cuánto tiempo toma obtener la Licencia 'A' de la USPA?",
        },
        answer: {
          en: "Dedicated students jumping on weekends can complete their 25 jumps and licensing requirements in 4 to 8 weeks depending on Texas weather. Students who jump multiple days during the week can progress even faster.",
          es: "Alumnos dedicados que saltan los fines de semana pueden completar sus 25 saltos y requisitos de licencia en 4 a 8 semanas, dependiendo del clima. Quienes saltan varios días entre semana pueden avanzar aún más rápido.",
        },
      },
      {
        question: {
          en: "Do I have to do a tandem jump before starting ground school?",
          es: "¿Tengo que hacer un salto tándem antes de iniciar la escuela en tierra?",
        },
        answer: {
          en: "While not legally mandatory by the USPA, we strongly recommend making at least one tandem jump first. Experiencing 120 MPH freefall and canopy flight removes initial sensory shock, allowing you to focus completely on your training tasks during your First Jump Course.",
          es: "Aunque la USPA no lo exige por ley, recomendamos encarecidamente hacer al menos un salto tándem primero. Experimentar la caída libre a 120 MPH elimina la sobrecarga sensorial y te permite concentrarte en tus tareas en el curso.",
        },
      },
      {
        question: {
          en: "What happens if I don't pass an AFF level?",
          es: "¿Qué sucede si no apruebo un nivel de AFF?",
        },
        answer: {
          en: "Safety is our absolute priority. If you do not meet the performance objectives for a specific category (such as stable altitude scans or unassisted deployment), you will simply repeat that specific jump level with your instructor before advancing.",
          es: "La seguridad es nuestra máxima prioridad. Si no se cumplen los objetivos de una categoría (como chequeos estables de altitud o apertura autónoma), simplemente repetirás ese salto específico con tu instructor antes de avanzar.",
        },
      },
      {
        question: {
          en: "Can I jump at any dropzone once I get my USPA 'A' License?",
          es: "¿Puedo saltar en cualquier centro del mundo con la Licencia 'A'?",
        },
        answer: {
          en: "Yes! The USPA 'A' License is recognized worldwide. You will be cleared to jump solo without supervision, jump with licensed friends, pack your own parachute, and jump at virtually any commercial USPA-affiliated dropzone globally.",
          es: "¡Sí! La Licencia 'A' de la USPA tiene reconocimiento internacional. Estarás autorizado para saltar solo sin supervisión, saltar con amigos certificados, plegar tu propio equipo y visitar centros de paracaidismo en todo el mundo.",
        },
      },
      {
        question: {
          en: "Is parachute equipment rental included during training?",
          es: "¿La renta del equipo de paracaídas está incluida durante el curso?",
        },
        answer: {
          en: "Yes. All student training jumps include high-performance student harness and container systems equipped with modern ram-air canopies, Cypres 2 computerized automatic activation devices (AADs), altimeters, goggles, and ground-to-air helmet radios.",
          es: "Sí. Todos los saltos de alumno incluyen equipo moderno con paracaídas rectangular, dispositivos de apertura automática Cypres 2 (AAD), altímetro, gafas protectoras y radio en el casco.",
        },
      },
    ],
  },

  cta: {
    eyebrow: {
      en: "START YOUR SOLO JOURNEY",
      es: "COMIENZA TU VIAJE EN SOLITARIO",
    },
    title: {
      en: "Become a Certified Skydiver at Dallas Skydive Center",
      es: "Conviértete en Paracaidista Certificado en Dallas",
    },
    subtitle: {
      en: "Speak directly with our Chief Instructor Jimmy Mendonca or call flight dispatch to schedule your First Jump Course ground school.",
      es: "Habla directamente con nuestro instructor jefe Jimmy Mendonca o llama a operaciones para agendar tu curso.",
    },
    primaryBtn: {
      en: "Enroll in Ground School",
      es: "Inscribirse en el Curso en Tierra",
    },
    phoneBtn: {
      en: "Flight Dispatch Hotline: (972) 552-7790",
      es: "Línea de Operaciones: (972) 552-7790",
    },
  },
};
