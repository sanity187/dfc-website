import type { I18nString } from "./types";

export interface TandemStatItem {
  value: string;
  label: I18nString;
  detail: I18nString;
}

export interface TandemTimelineStep {
  step: string;
  title: I18nString;
  subtitle: I18nString;
  description: I18nString;
  highlight: I18nString;
  icon: string;
}

export interface TandemPrepBullet {
  text: I18nString;
  highlight?: boolean;
}

export interface TandemPrepItem {
  id: string;
  title: I18nString;
  tip: I18nString;
  description: I18nString;
  bullets: (I18nString | TandemPrepBullet)[];
  icon: string;
  highlight?: boolean;
  badge?: I18nString;
}

export interface TandemFaqItem {
  question: I18nString;
  answer: I18nString;
}

export interface TandemContent {
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
    stats: TandemStatItem[];
  };
  timeline: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    steps: TandemTimelineStep[];
  };
  prepGuide: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    items: TandemPrepItem[];
  };
  pricingIntro: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    viewAllPricing: I18nString;
  };
  faq: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    items: TandemFaqItem[];
  };
  cta: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    primaryBtn: I18nString;
    phoneBtn: I18nString;
  };
}

export const tandemContent: TandemContent = {
  header: {
    eyebrow: {
      en: "FIRST-TIME SKYDIVERS",
      es: "TU PRIMER SALTO EN PARACAÍDAS",
    },
    title: {
      en: "Tandem Skydiving in Dallas",
      es: "Salto Tándem en Dallas",
    },
    subtitle: {
      en: "The quickest, simplest, and most exhilarating way to experience human flight over the North Texas skyline.",
      es: "La forma más rápida, sencilla y emocionante de experimentar el vuelo humano sobre el horizonte del norte de Texas.",
    },
    badge: {
      en: "14,000 FT Tandem Jump · USPA Certified",
      es: "Salto Tándem a 14,000 Pies · Certificado USPA",
    },
  },

  overview: {
    eyebrow: {
      en: "THE TANDEM EXPERIENCE",
      es: "LA EXPERIENCIA TÁNDEM",
    },
    title: {
      en: "Harnessed to an Expert, Free to Feel the Thrill",
      es: "Asegurado a un Experto, Libre para Sentir la Emoción",
    },
    subtitle: {
      en: "Leave the gear checks, navigation, and altitude calculations to your instructor while you soak in the 120 MPH rush.",
      es: "Deja las revisiones técnicas, la navegación y los cálculos a tu instructor mientras disfrutas la adrenalina a 120 MPH.",
    },
    p1: {
      en: "A tandem jump is the premier gateway into skydiving. Securely attached with a four-point military-grade harness to a dual-certified USPA Tandem Master, you ride as a passenger during the climb, freefall, and parachute flight. Your instructor is in total command of aircraft exit, stability, parachute deployment, and ground touchdown.",
      es: "El salto tándem es la puerta de entrada definitiva al paracaidismo. Conectado de manera segura con un arnés militar de cuatro puntos a un instructor maestro certificado por la USPA, viajas como copiloto durante el ascenso, la caída libre y el planeo en paracaídas. Tu instructor mantiene el control total de la salida, estabilidad, apertura y aterrizaje.",
    },
    p2: {
      en: "From the open ramp at 10,000 to 13,500+ feet, you’ll witness Lake Ray Hubbard, Lake Lavon, and the Downtown Dallas skyline before stepping into crisp Texas air for up to 60 seconds of terminal velocity freefall at 120 MPH.",
      es: "Desde la compuerta abierta entre 10,000 y 13,500+ pies, contemplarás el Lago Ray Hubbard, Lago Lavon y el skyline de Dallas antes de dar el paso al aire texano para hasta 60 segundos de caída libre a 120 MPH.",
    },
    stats: [
      {
        value: "120 MPH",
        label: { en: "Terminal Velocity", es: "Velocidad Terminal" },
        detail: { en: "Pure freefall acceleration", es: "Aceleración en caída libre" },
      },
      {
        value: "13,500 FT",
        label: { en: "Maximum Altitude", es: "Altitud Máxima" },
        detail: { en: "Over 2.5 miles above Texas", es: "Más de 4 km sobre Texas" },
      },
      {
        value: "60 Sec",
        label: { en: "Freefall Time", es: "Tiempo de Caída Libre" },
        detail: { en: "Unfiltered adrenaline rush", es: "Pura descarga de adrenalina" },
      },
      {
        value: "100% USPA",
        label: { en: "Certified Safety", es: "Seguridad Certificada" },
        detail: { en: "Dual backup safety systems", es: "Sistemas de reserva redundantes" },
      },
    ],
  },

  timeline: {
    eyebrow: {
      en: "YOUR JUMP DAY JOURNEY",
      es: "EL CRONOGRAMA DE TU DÍA",
    },
    title: {
      en: "What to Expect from Arrival to Touchdown",
      es: "Qué Esperar Desde Tu Llegada Hasta el Aterrizaje",
    },
    subtitle: {
      en: "Every step is meticulously structured for absolute safety, professional instruction, and unforgettable memories.",
      es: "Cada paso está estructurado para máxima seguridad, instrucción profesional y recuerdos inolvidables.",
    },
    steps: [
      {
        step: "01",
        title: {
          en: "Check-In, Ground Class & Video Interview",
          es: "Registro, Clase en Tierra y Video",
        },
        subtitle: {
          en: "20-minute comprehensive safety orientation",
          es: "Orientación integral de seguridad de 20 minutos",
        },
        description: {
          en: "Upon arrival at Caddo Mills Municipal Airport, you'll complete your digital check-in, meet your certified Tandem Instructor, and fit your custom four-point harness. Your videographer records your pre-jump excitement interview before flight ops manifests your load.",
          es: "Al llegar al aeropuerto de Caddo Mills, realizarás tu registro digital, conocerás a tu instructor certificado y ajustarás tu arnés de cuatro puntos. Tu camarógrafo grabará tu entrevista previa antes de que el manifiesto asigne tu turno de vuelo.",
        },
        highlight: {
          en: "Harness custom-fitted to your body geometry",
          es: "Arnés ajustado a la medida de tu cuerpo",
        },
        icon: "ClipboardCheck",
      },
      {
        step: "02",
        title: {
          en: "Scenic Boarding & High-Altitude Climb",
          es: "Abordaje y Ascenso Panorámico",
        },
        subtitle: {
          en: "15-minute flight over Lake Ray Hubbard & Dallas",
          es: "Vuelo de 15 minutos sobre Lago Ray Hubbard y Dallas",
        },
        description: {
          en: "Board our custom Super Cessna 182 jump plane. As the aircraft climbs to jump altitude, your instructor points out Lake Ray Hubbard, Lake Lavon, and the Downtown Dallas skyline. Minutes before exit, your harness is securely locked to the instructor's parachute system.",
          es: "Aborda nuestro Super Cessna 182 adaptado para paracaidismo. Durante el ascenso, tu instructor te señalará el Lago Ray Hubbard, Lago Lavon y los rascacielos de Dallas. Minutos antes del salto, tu arnés queda asegurado al sistema de paracaídas del instructor.",
        },
        highlight: {
          en: "Breathtaking North Texas panoramic views",
          es: "Vistas panorámicas inolvidables de Texas",
        },
        icon: "PlaneTakeoff",
      },
      {
        step: "03",
        title: {
          en: "The Exit Door & 120 MPH Freefall",
          es: "La Salto al Vacío y Caída Libre a 120 MPH",
        },
        subtitle: {
          en: "Up to 60 seconds of terminal velocity flight",
          es: "Hasta 60 segundos de pura velocidad terminal",
        },
        description: {
          en: "The jump door rolls open. At 10,000 to 13,500 feet, you lean back against your instructor, head up, and step into the slipstream. Within seconds you accelerate to 120 MPH, feeling the absolute weightlessness and sensory explosion of human flight.",
          es: "La compuerta se abre. A 10,000–13,500 pies, te apoyas en el pecho de tu instructor con la cabeza en alto y das el paso. En segundos alcanzas 120 MPH, experimentando la ingravidez total y una explosión de sensaciones única.",
        },
        highlight: {
          en: "60 seconds of adrenaline at terminal velocity",
          es: "60 segundos de adrenalina a velocidad terminal",
        },
        icon: "Wind",
      },
      {
        step: "04",
        title: {
          en: "Canopy Glide, Pilot Toggles & Smooth Landing",
          es: "Vuelo en Paracaídas, Mandos y Aterrizaje Suave",
        },
        subtitle: {
          en: "5 to 7 minutes under an open ram-air parachute",
          es: "5 a 7 minutos bajo un paracaídas rectangular abierto",
        },
        description: {
          en: "At 5,500 feet, your instructor deploys the main parachute for a remarkably soft deceleration. Take the steering toggles yourself for gentle glides or high-g coaster spirals, followed by a tip-toe landing on our manicured 651-acre grass field. Pick up your First Jump Certificate and media download!",
          es: "A 5,500 pies, el instructor despliega el paracaídas principal con una desaceleración suave. Toma los mandos tú mismo para un suave planeo o giros en espiral, antes de un aterrizaje sobre el campo de césped de 651 acres. ¡Recibe tu Certificado Oficial y descarga tus fotos y video!",
        },
        highlight: {
          en: "Hands-on steering & official completion certificate",
          es: "Control de dirección en tus manos y certificado oficial",
        },
        icon: "Award",
      },
    ],
  },

  prepGuide: {
    eyebrow: {
      en: "PRE-FLIGHT ADVICE",
      es: "CONSEJOS PREVIOS AL SALTO",
    },
    title: {
      en: "First-Timer Jump Day Preparation",
      es: "Preparación para Tu Primer Salto",
    },
    subtitle: {
      en: "Essential tips and key requirements covering dress code, arrival timelines, weather contingencies, and spectator guidelines.",
      es: "Consejos clave y requisitos esenciales sobre código de vestimenta, tiempos de llegada, contingencias climáticas e instalaciones.",
    },
    items: [
      {
        id: "attire",
        title: { en: "What to Wear", es: "Qué Ropa Usar" },
        tip: { en: "Athletic & comfortable", es: "Deportiva y cómoda" },
        description: {
          en: "Wear seasonal athletic clothes and secure, lace-up sneakers. **Absolutely no boots with hooks, heels, or slip-ons!**",
          es: "Usa ropa deportiva de temporada y tenis cerrados con agujetas. **¡Prohibido entrar con botas con ganchos, tacones o sandalias!**",
        },
        highlight: true,
        badge: {
          en: "No Boots With Hooks or Slip-Ons!",
          es: "¡Sin Botas con Ganchos ni Sandalias!",
        },
        bullets: [
          {
            text: {
              en: "Sneakers required: Flat-soled lace-up athletic shoes that stay firmly tied",
              es: "Tenis requeridos: Calzado deportivo con agujetas que quede bien atado",
            },
            highlight: true,
          },
          {
            text: {
              en: "Summer: T-shirt & athletic shorts (avoid tank tops to prevent harness pinch)",
              es: "Verano: Playera y shorts (evita camisetas de tirantes por el roce del arnés)",
            },
          },
          {
            text: {
              en: "Winter: Layered fleece or windbreaker and warm gloves (no bulky parkas)",
              es: "Invierno: Capas térmicas, sudadera y guantes (evita chamarras voluminosas)",
            },
          },
        ],
        icon: "Shirt",
      },
      {
        id: "timing",
        title: { en: "Time Commitment", es: "Tiempo Requerido" },
        tip: { en: "Plan for a half-day", es: "Planifica medio día" },
        description: {
          en: "Skydiving operates under FAA flight regulations and dynamic airspace. Expect to spend 2 to 4 hours at the dropzone from check-in to touchdown.",
          es: "El paracaidismo opera bajo regulaciones de la FAA y tráfico aéreo dinámico. Planea entre 2 y 4 horas en el centro de salto.",
        },
        bullets: [
          { en: "Arrive promptly at your booked reservation check-in slot", es: "Llega puntual en el horario asignado a tu reserva" },
          { en: "Includes waiver signing, gear fit, flight climb, and media delivery", es: "Incluye registro, ajuste de arnés, vuelo y entrega de fotos/video" },
          { en: "Weekday appointments generally have faster turnaround", es: "Los saltos entre semana suelen tener menor tiempo de espera" },
        ],
        icon: "Clock",
      },
      {
        id: "spectators",
        title: { en: "Spectators & Grounds", es: "Acompañantes e Instalaciones" },
        tip: { en: "Bring friends & coolers", es: "Trae amigos y hieleras" },
        description: {
          en: "Our 651-acre dropzone features a manicured spectator viewing lawn right next to the landing area where loved ones can watch and cheer.",
          es: "Nuestra zona de 651 acres cuenta con césped de observación junto al área de aterrizaje para que tus acompañantes te aplaudan.",
        },
        bullets: [
          { en: "Coolers, picnic snacks, and camping chairs are welcome", es: "Se permite traer hieleras, bocadillos y sillas de campo" },
          { en: "Clean climate-controlled restrooms and shaded spectator seating", es: "Baños limpios con clima y áreas techadas con sombra" },
          { en: "Zero alcohol permitted until all skydiving flights conclude", es: "Cero alcohol permitido hasta que aterrice el último vuelo del día" },
        ],
        icon: "Users",
      },
      {
        id: "weather",
        title: { en: "Weather Protocols", es: "Políticas Meteorológicas" },
        tip: { en: "Safety-first dispatch", es: "La seguridad es primero" },
        description: {
          en: "Skydiving depends on winds, cloud ceilings, and visibility at 10,000+ feet AGL, not just ground-level conditions in Dallas.",
          es: "El paracaidismo depende del viento y nubosidad a más de 10,000 pies de altura, no solo del clima en tierra en Dallas.",
        },
        bullets: [
          { en: "Flight Ops monitors FAA aviation forecasts continuously", es: "Monitoreo constante de radares y reportes de la FAA" },
          { en: "Weather holds reschedule for free with 1-year voucher validity", es: "Reprogramación gratuita sin costo con validez de 1 año" },
          { en: "Call flight dispatch at (972) 552-7790 on your jump morning", es: "Llama a operaciones al (972) 552-7790 la mañana de tu salto" },
        ],
        icon: "CloudSun",
      },
    ],
  },

  pricingIntro: {
    eyebrow: {
      en: "TRANSPARENT DROPZONE RATES",
      es: "TARIFAS TRANSPARENTES",
    },
    title: {
      en: "Choose Your Tandem Jump Package",
      es: "Elige Tu Paquete de Salto Tándem",
    },
    subtitle: {
      en: "Lock in prepaid savings or reserve your slot today with just a $50 web deposit. All packages include gear, training, and USPA certification.",
      es: "Ahorra pagando por adelantado o aparta tu turno hoy con solo $50 de depósito web. Todos los paquetes incluyen equipo, instrucción y certificado.",
    },
    viewAllPricing: {
      en: "View Full Pricing & Media Packages →",
      es: "Ver Todas las Tarifas y Paquetes Multimedia →",
    },
  },

  faq: {
    eyebrow: {
      en: "COMMON QUESTIONS",
      es: "PREGUNTAS FRECUENTES",
    },
    title: {
      en: "Tandem Skydiving FAQs",
      es: "Preguntas Frecuentes del Salto Tándem",
    },
    subtitle: {
      en: "Get straightforward answers to the most common first-timer questions.",
      es: "Respuestas claras a las dudas más comunes de saltadores novatos.",
    },
    items: [
      {
        question: {
          en: "How hard does the parachute open?",
          es: "¿Qué tan fuerte se siente la apertura del paracaídas?",
        },
        answer: {
          en: "Modern tandem parachutes use rectangular ram-air canopies designed with staged slider deceleration. Most students are surprised by how smooth and gentle the opening feels—it decelerates you from 120 MPH to canopy speed in a controlled, upright posture without sudden jolting.",
          es: "Los paracaídas tándem modernos emplean cúpulas rectangulares con desaceleración progresiva por slider. La mayoría de los saltadores se sorprenden de lo suave que se siente: te frena de 120 MPH a la velocidad de planeo de forma gradual y vertical.",
        },
      },
      {
        question: {
          en: "Can I jump in the same airplane with my friends?",
          es: "¿Puedo subir en el mismo avión con mis amigos?",
        },
        answer: {
          en: "Yes! Our Super Cessna 182 jump aircraft typically carries two tandem pairs per flight load. We make every effort to manifest friends together. For larger groups, loads run back-to-back so your party can watch and record each other from the spectator lawn.",
          es: "¡Sí! Nuestros aviones Super Cessna 182 llevan dos parejas tándem por vuelo. Hacemos todo lo posible para subir a amigos juntos. En grupos mayores, los vuelos salen uno tras otro para que puedan verse y grabarse desde el césped.",
        },
      },
      {
        question: {
          en: "Can I breathe and speak during 120 MPH freefall?",
          es: "¿Se puede respirar y hablar durante la caída libre a 120 MPH?",
        },
        answer: {
          en: "You can breathe normally through your nose and mouth throughout the entire skydive. The 120 MPH relative wind is clean and exhilarating. While you can shout and smile, talking isn't audible due to the rushing air until your parachute opens at 5,500 feet.",
          es: "Puedes respirar con total normalidad por la nariz y boca durante todo el salto. El viento a 120 MPH es fresco y revitalizante. Aunque puedes gritar y sonreír, hablar no es audible por el viento hasta que abre el paracaídas a 5,500 pies.",
        },
      },
      {
        question: {
          en: "Who packs and maintains the parachutes?",
          es: "¿Quién empaca y mantiene los paracaídas?",
        },
        answer: {
          en: "All main parachutes are packed by our certified instructors and on-staff FAA-certificated parachute riggers. Every reserve (auxiliary) parachute is thoroughly inspected and repacked every 180 days by our FAA Master Parachute Riggers in accordance with strict federal aviation regulations.",
          es: "Todos los paracaídas principales son empacados por nuestros instructores certificados y plegadores de la FAA. Cada paracaídas de reserva es inspeccionado y reempacado cada 180 días por nuestros Master Riggers conforme a estrictas normas de la FAA.",
        },
      },
      {
        question: {
          en: "What happens if weather postpones our jump?",
          es: "¿Qué sucede si el mal clima retrasa nuestro salto?",
        },
        answer: {
          en: "Skydiving is weather-dependent. If high winds, rain, or low cloud ceilings prevent jumping, your reservation will be rescheduled to another day of your choice at zero fee. All deposits and prepaid vouchers remain 100% valid for one full year.",
          es: "El paracaidismo depende del clima. Si el viento, lluvia o nubes bajas impiden la actividad, tu salto se reprograma para el día de tu elección sin costo adicional. Todos los depósitos y cupones permanecen 100% vigentes por 1 año.",
        },
      },
    ],
  },

  cta: {
    eyebrow: {
      en: "READY FOR 14,000 FT?",
      es: "¿LISTO PARA LOS 14,000 PIES?",
    },
    title: {
      en: "Take Your Very First Leap with Dallas Skydive Center",
      es: "Da Tu Primer Salto en Dallas Skydive Center",
    },
    subtitle: {
      en: "Join over 13,000 first-time skydivers who trusted our certified team. Prepay online to save up to $30 or reserve your slot with a $50 deposit.",
      es: "Únete a más de 13,000 saltadores novatos que confiaron en nuestro equipo. Paga en línea para ahorrar hasta $30 o aparta con $50 de depósito.",
    },
    primaryBtn: {
      en: "Book Tandem Jump Online",
      es: "Reservar Salto Tándem en Línea",
    },
    phoneBtn: {
      en: "Flight Dispatch Hotline: (972) 552-7790",
      es: "Línea de Operaciones: (972) 552-7790",
    },
  },
};
