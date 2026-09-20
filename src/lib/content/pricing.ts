import { I18nString } from "./types";

export interface PricingTierItem {
  id: string;
  name: I18nString;
  altitude: string;
  prepaidPrice: number;
  depositPrice: number;
  savings: string;
  tagline: I18nString;
  features: I18nString[];
  popular?: boolean;
  badge?: I18nString;
  bookingNote?: I18nString;
  isPhoneOnly?: boolean;
}

export interface PricingMediaPackage {
  id: string;
  name: I18nString;
  price: string;
  postPrice: string;
  popular?: boolean;
  badge?: I18nString;
  description: I18nString;
  features: I18nString[];
}

export interface PricingPolicyItem {
  id: string;
  title: I18nString;
  amount: string;
  description: I18nString;
  highlight?: boolean;
  badge?: I18nString;
}

export interface PricingRestrictionItem {
  title: I18nString;
  detail: I18nString;
  icon: string;
  highlight?: boolean;
  badge?: I18nString;
}

export interface PricingContent {
  header: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    badge: I18nString;
  };
  switcher: {
    prepayLabel: I18nString;
    depositLabel: I18nString;
    depositNotice: I18nString;
    prepayBadge: I18nString;
  };
  tiers: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    perPerson: I18nString;
    prepaidNotice: I18nString;
    depositNotice: I18nString;
    dueToday: I18nString;
    dueAtDropzone: I18nString;
    ctaPrepay: I18nString;
    ctaDeposit: I18nString;
    ctaPhone: I18nString;
    items: PricingTierItem[];
  };
  media: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    postJumpNotice: I18nString;
    addMediaBtn: I18nString;
    packages: PricingMediaPackage[];
  };
  policies: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    items: PricingPolicyItem[];
  };
  quote: {
    text: I18nString;
    author: string;
  };
  restrictions: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    items: PricingRestrictionItem[];
  };
  cta: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    primaryBtn: I18nString;
    phoneBtn: I18nString;
  };
}

export const pricingContent: PricingContent = {
  header: {
    eyebrow: {
      en: "TRANSPARENT PRICING & PACKAGES",
      es: "PRECIOS Y PAQUETES TRANSPARENTES",
    },
    title: {
      en: "Dallas Skydiving Rates",
      es: "Tarifas de Paracaidismo en Dallas",
    },
    subtitle: {
      en: "No hidden fuel surcharges or surprise fees. Complete pricing with highest altitudes guaranteed.",
      es: "Sin cargos ocultos por combustible ni sorpresas. Tarifas claras con la máxima altitud garantizada.",
    },
    badge: {
      en: "Best Price Guarantee · DFW Price Match",
      es: "Mejor Precio Garantizado · Igualamos Tarifas en DFW",
    },
  },
  switcher: {
    prepayLabel: {
      en: "Prepay & Save $20–$30",
      es: "Paga por Adelantado y Ahorra $20–$30",
    },
    depositLabel: {
      en: "$50 Web Deposit",
      es: "$50 Depósito Web",
    },
    depositNotice: {
      en: "Pay a $50 deposit now to hold your reservation. Remaining balance is due upon arrival at the dropzone.",
      es: "Paga $50 de depósito ahora para asegurar tu lugar. El saldo restante se liquida al llegar al centro de salto.",
    },
    prepayBadge: {
      en: "Best Value",
      es: "Mejor Precio",
    },
  },
  tiers: {
    eyebrow: {
      en: "TANDEM SKYDIVING OPTIONS",
      es: "OPCIONES DE SALTO TÁNDEM",
    },
    title: {
      en: "Choose Your Jump Experience",
      es: "Elige Tu Experiencia de Salto",
    },
    subtitle: {
      en: "All packages include gear, pre-flight ground briefing, scenic plane ascent, and a USPA certificate of completion.",
      es: "Todos los paquetes incluyen equipo completo, instrucción previa en tierra, vuelo panorámico y certificado oficial de la USPA.",
    },
    perPerson: {
      en: "/ person",
      es: "/ persona",
    },
    prepaidNotice: {
      en: "Full amount prepaid · Best rate",
      es: "Pago total anticipado · Mejor tarifa",
    },
    depositNotice: {
      en: "$50 deposit today",
      es: "$50 depósito hoy",
    },
    dueToday: {
      en: "Due today: $50",
      es: "Pagas hoy: $50",
    },
    dueAtDropzone: {
      en: "Due at dropzone:",
      es: "Restante en zona de salto:",
    },
    ctaPrepay: {
      en: "Book Prepaid & Save",
      es: "Reservar y Ahorrar",
    },
    ctaDeposit: {
      en: "Book with $50 Deposit",
      es: "Reservar con $50 de Depósito",
    },
    ctaPhone: {
      en: "Call to Book (972) 552-7790",
      es: "Llamar al (972) 552-7790",
    },
    items: [
      {
        id: "wednesday",
        name: {
          en: "Wednesday Special",
          es: "Especial de Miércoles",
        },
        altitude: "10,000 FT",
        prepaidPrice: 199,
        depositPrice: 209,
        savings: "$10",
        tagline: {
          en: "Turn your hump day into jump day with our signature midweek rate.",
          es: "Convierte el ombligo de semana en un salto inolvidable con tarifa especial.",
        },
        features: [
          { en: "Up to 10,000 FT Jump Altitude", es: "Altitud de Salto hasta 10,000 Pies" },
          { en: "Up to 50 Seconds Freefall (120 MPH)", es: "Hasta 50 Segundos de Caída Libre (120 MPH)" },
          { en: "20-Minute Scenic Plane Ride", es: "Vuelo Panorámico de 20 Minutos" },
          { en: "4 to 6-Minute Parachute Canopy Ride", es: "Vuelo en Paracaídas de 4 a 6 Minutos" },
          { en: "Personalized Certificate of Completion", es: "Certificado Oficial Personalizado" },
        ],
        bookingNote: {
          en: "Valid Wednesdays only · Phone reservation required",
          es: "Válido solo miércoles · Requiere reserva telefónica",
        },
        isPhoneOnly: true,
        popular: false,
      },
      {
        id: "weekday",
        name: {
          en: "Weekday Tandem",
          es: "Tándem Entre Semana",
        },
        altitude: "10,000 FT",
        prepaidPrice: 219,
        depositPrice: 249,
        savings: "$30",
        tagline: {
          en: "Mon, Tue, Thu & Fri jumps with quick turnarounds and open skies.",
          es: "Saltos lunes, martes, jueves y viernes con cielo despejado y rápida atención.",
        },
        features: [
          { en: "10,000 FT Jump Altitude", es: "Altitud de Salto de 10,000 Pies" },
          { en: "Up to 50 Seconds Freefall (120 MPH)", es: "Hasta 50 Segundos de Caída Libre (120 MPH)" },
          { en: "Dual-Certified USPA Tandem Master", es: "Instructor Maestro Certificado USPA" },
          { en: "Full Training & Goggles Provided", es: "Instrucción Completa y Goggles Incluidos" },
          { en: "Valid for 1 Full Year (Weather Transferable)", es: "Válido por 1 Año Completo (Transferible por Clima)" },
        ],
        popular: false,
      },
      {
        id: "weekend",
        name: {
          en: "Weekend & Holiday Tandem",
          es: "Fin de Semana y Feriados",
        },
        altitude: "10,000 FT",
        prepaidPrice: 239,
        depositPrice: 269,
        savings: "$30",
        tagline: {
          en: "Our most requested prime weekend slots for Saturday & Sunday jumpers.",
          es: "Nuestros horarios más solicitados de sábado, domingo y días feriados.",
        },
        features: [
          { en: "Prime Weekend & Holiday Jump Slots", es: "Horarios Estelares de Fin de Semana" },
          { en: "10,000 FT Jump Altitude", es: "Altitud de Salto de 10,000 Pies" },
          { en: "Up to 50 Seconds Freefall (120 MPH)", es: "Hasta 50 Segundos de Caída Libre (120 MPH)" },
          { en: "Dual-Certified USPA Tandem Master", es: "Instructor Maestro Certificado USPA" },
          { en: "Valid for 1 Full Year (Weather Transferable)", es: "Válido por 1 Año Completo (Transferible por Clima)" },
        ],
        popular: true,
        badge: {
          en: "Most Popular",
          es: "Más Popular",
        },
      },
      {
        id: "vip",
        name: {
          en: "VIP High-Altitude Tandem",
          es: "Tándem VIP Gran Altitud",
        },
        altitude: "12,000–13,500 FT",
        prepaidPrice: 309,
        depositPrice: 339,
        savings: "$30",
        tagline: {
          en: "Skip the manifest line and go all the way up to maximum altitude.",
          es: "Evita filas de abordaje y sube hasta la máxima altitud disponible.",
        },
        features: [
          { en: "12,000 to 13,500 FT Maximum Altitude", es: "Máxima Altitud de 12,000 a 13,500 Pies" },
          { en: "Extra 15–20 Seconds Freefall (60–70s Total)", es: "15–20s Más de Caída Libre (60–70s en Total)" },
          { en: "VIP Priority Manifest Boarding (Skip the Line)", es: "Abordaje Prioritario VIP (Sin Esperas)" },
          { en: "Refundable with 12h Notice (-$25 fee)", es: "Reembolsable con 12h de Aviso (-$25 de tarifa)" },
          { en: "Transferable & Valid for 1 Full Year", es: "Transferible y Válido por 1 Año Completo" },
        ],
        popular: false,
        badge: {
          en: "Max Altitude & Flexibility",
          es: "Máxima Altitud y Flexibilidad",
        },
      },
    ],
  },
  media: {
    eyebrow: {
      en: "RELIVE THE THRILL",
      es: "REVIVE LA EMOCIÓN",
    },
    title: {
      en: "Professional Photo & Video Packages",
      es: "Paquetes Profesionales de Foto y Video",
    },
    subtitle: {
      en: "You only jump for the first time once. Relive the adrenaline over and over and share with friends.",
      es: "Solo saltas por primera vez una vez. Revive la adrenalina una y otra vez y compártela con tus amigos.",
    },
    postJumpNotice: {
      en: "Note: An additional $10 fee applies for media packages purchased after your jump. Save by adding media when booking!",
      es: "Nota: Se aplica un recargo de $10 en paquetes adquiridos después del salto. ¡Ahorra agregándolo al reservar!",
    },
    addMediaBtn: {
      en: "Add to Booking",
      es: "Agregar a la Reserva",
    },
    packages: [
      {
        id: "single",
        name: {
          en: "Video OR Pictures",
          es: "Video O Fotos",
        },
        price: "$89",
        postPrice: "$99 after jump",
        description: {
          en: "Choose between high-definition edited freefall video OR a complete high-res digital photo gallery.",
          es: "Elige entre video editado de alta definición en caída libre O galería digital completa de fotos.",
        },
        features: [
          { en: "Full Freefall & Canopy Capture", es: "Tomas Completas en Caída Libre y Paracaídas" },
          { en: "Aircraft Exit & Ground Landing Shots", es: "Tomas de Salida del Avión y Aterrizaje" },
          { en: "Direct Digital Delivery to Phone & Email", es: "Entrega Digital Directa a Celular y Correo" },
        ],
      },
      {
        id: "combo",
        name: {
          en: "Video AND Pictures Combo",
          es: "Combo de Video Y Fotos",
        },
        price: "$120",
        postPrice: "$130 after jump",
        popular: true,
        badge: {
          en: "Best Value",
          es: "Mejor Valor",
        },
        description: {
          en: "The complete media package. Receive both full-length edited 4K freefall video and high-resolution still images.",
          es: "El paquete multimedia definitivo. Recibe video 4K editado y fotografías de alta resolución.",
        },
        features: [
          { en: "Full 4K Video + High-Res Photo Gallery", es: "Video 4K Completo + Galería de Fotos HD" },
          { en: "Pre-Jump Ground & In-Plane Footage", es: "Tomas Previas en Tierra y Dentro del Avión" },
          { en: "Freefall, Canopy Glide & Landing Moments", es: "Caída Libre, Vuelo en Paracaídas y Aterrizaje" },
          { en: "Instant Digital Download for Social Sharing", es: "Descarga Inmediata para Compartir en Redes" },
        ],
      },
    ],
  },
  policies: {
    eyebrow: {
      en: "TRANSPARENCY & PEACE OF MIND",
      es: "TRANSPARENCIA Y CONFIANZA",
    },
    title: {
      en: "Dropzone Surcharges & Booking Policies",
      es: "Cargos Operativos y Políticas de Reserva",
    },
    subtitle: {
      en: "We believe in 100% upfront clarity—no surprises when you arrive at Caddo Mills Municipal Airport.",
      es: "Creemos en la total claridad desde el primer momento: sin sorpresas al llegar al aeropuerto.",
    },
    items: [
      {
        id: "heavy",
        title: {
          en: "Heavy Student Fee (Over 200 lbs)",
          es: "Tarifa de Peso (Más de 200 lbs)",
        },
        amount: "$35",
        description: {
          en: "Jumpers over 200 lbs pay a $35 heavy student fee. Maximum weight is 240 lbs for males and 220 lbs for females. For safety, students exceeding maximum weight on our official scale will not jump and fees are non-refundable.",
          es: "Cualquier persona que pese más de 200 lbs debe pagar una tarifa de $35. El peso máximo es 240 lbs en hombres y 220 lbs en mujeres. Por seguridad estricta, quien exceda el peso no podrá saltar y no hay reembolsos.",
        },
      },
      {
        id: "booking-fee",
        title: {
          en: "Booking Fee & Fuel Surcharge",
          es: "Tarifa de Reserva y Combustible",
        },
        amount: "$5",
        description: {
          en: "All skydives include a $5 non-refundable booking fee / fuel surcharge in addition to package pricing, securing your reservation slot and fueling the aircraft.",
          es: "Todos los saltos incluyen una tarifa no reembolsable de $5 por reserva y combustible adicional al paquete, asegurando tu turno de vuelo.",
        },
      },
      {
        id: "reschedule",
        title: {
          en: "48-Hour Notice Policy",
          es: "Política de Aviso de 48 Horas",
        },
        amount: "$50 fee if < 48h",
        description: {
          en: "48 hours advance notice is required on all reservation adjustments. Any changes requested with less than 48 hours notice incur a $50 reschedule fee per person.",
          es: "Se requieren al menos 48 horas de anticipación para cualquier cambio. Modificaciones con menos de 48 horas conllevan un cargo de $50 por persona.",
        },
        highlight: true,
        badge: {
          en: "Strict Policy · Plan Ahead",
          es: "Política Estricta · Planifica con Tiempo",
        },
      },
      {
        id: "price-match",
        title: {
          en: "DFW Groupon Price Match",
          es: "Igualación de Tarifas Groupon en DFW",
        },
        amount: "Price Match",
        description: {
          en: "We match competitor Groupon rates in the Dallas–Fort Worth metroplex. Call Flight Ops directly at (972) 552-7790 to book with your matching rate.",
          es: "Igualamos cualquier tarifa de Groupon de la competencia en el área de Dallas–Fort Worth. Llama a Operaciones al (972) 552-7790 para reservar con tarifa igualada.",
        },
      },
    ],
  },
  quote: {
    text: {
      en: "“The bitterness of poor quality remains long after the sweetness of low price is forgotten.”",
      es: "“La amargura de la mala calidad permanece mucho después de haber olvidado la dulzura del precio bajo.”",
    },
    author: "Benjamin Franklin",
  },
  restrictions: {
    eyebrow: {
      en: "BEFORE YOU BOOK",
      es: "ANTES DE RESERVAR",
    },
    title: {
      en: "Jumper Requirements & Safety Guidelines",
      es: "Requisitos del Saltador y Normas de Seguridad",
    },
    subtitle: {
      en: "Ensure all participants meet the following safety standards prior to booking your reservation.",
      es: "Asegúrate de que todos los participantes cumplan con los siguientes requisitos antes de reservar.",
    },
    items: [
      {
        title: { en: "Must Be 18 or Older", es: "Mayor de 18 Años" },
        detail: {
          en: "Government-issued photo ID (Driver's License or Passport) is strictly required at check-in. No exceptions.",
          es: "Se requiere identificación oficial con fotografía vigente (licencia o pasaporte) al registrarte. Sin excepciones.",
        },
        icon: "IdCard",
        highlight: true,
        badge: {
          en: "Mandatory · Bring ID!",
          es: "Obligatorio · Sin Excepciones",
        },
      },
      {
        title: { en: "Weight Limits", es: "Límites de Peso" },
        detail: {
          en: "Max 240 lbs (male) / 220 lbs (female). Jumpers 200+ lbs pay a $35 fee. Weigh-in conducted on-site.",
          es: "Máximo 240 lbs (hombres) / 220 lbs (mujeres). Personas de 200+ lbs pagan $35. Se pesa en báscula oficial.",
        },
        icon: "Scale",
      },
      {
        title: { en: "Zero Drugs or Alcohol", es: "Cero Alcohol o Drogas" },
        detail: {
          en: "Strict 100% drug and alcohol-free policy. Jumpers with alcohol in their system will be grounded.",
          es: "Cero tolerancia a alcohol y sustancias. Quien tenga alcohol en su sistema no podrá saltar por seguridad.",
        },
        icon: "ShieldAlert",
      },
      {
        title: { en: "No Scuba Within 24 Hours", es: "Sin Buceo en 24 Horas" },
        detail: {
          en: "No scuba diving 24 hours prior to jumping to avoid decompression sickness at altitude.",
          es: "No realizar buceo 24 horas antes de saltar para evitar riesgos de descompresión en altitud.",
        },
        icon: "Waves",
      },
      {
        title: { en: "Good Physical Health", es: "Buena Salud Física" },
        detail: {
          en: "Must be in good general health and able to lift legs for landing. Consult your doctor if needed.",
          es: "Buena salud general y capacidad de levantar piernas al aterrizar. Consulta a tu médico si tienes dudas.",
        },
        icon: "HeartPulse",
      },
      {
        title: { en: "Liability Waiver", es: "Firma de Deslinde" },
        detail: {
          en: "All participants must sign the standard legal Release of Liability Waiver during check-in.",
          es: "Todos los participantes deben firmar el formulario legal de deslinde de responsabilidad al registrarse.",
        },
        icon: "FileCheck",
      },
    ],
  },
  cta: {
    eyebrow: {
      en: "READY FOR 10,000–14,000 FT?",
      es: "¿LISTO PARA 10,000–14,000 PIES?",
    },
    title: {
      en: "Lock in Your Jump with Dallas Skydive Center",
      es: "Asegura Tu Salto en Dallas Skydive Center",
    },
    subtitle: {
      en: "Prepay online to save $20–$30 per person, or reserve your slot today with just a $50 deposit.",
      es: "Paga en línea por adelantado y ahorra $20–$30 por persona, o aparta tu lugar hoy con solo $50 de depósito.",
    },
    primaryBtn: {
      en: "Book Tandem Jump Online",
      es: "Reservar Salto Tándem en Línea",
    },
    phoneBtn: {
      en: "Call for Wednesday Special: (972) 552-7790",
      es: "Llama para Especial de Miércoles: (972) 552-7790",
    },
  },
};
