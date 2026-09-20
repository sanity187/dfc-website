import type { I18nString } from "./types";

export interface BookingContent {
  header: {
    eyebrow: I18nString;
    title: I18nString;
    subtitle: I18nString;
    badge: I18nString;
  };
  stepper: {
    step1: I18nString;
    step2: I18nString;
    step3: I18nString;
    step4: I18nString;
    step5: I18nString;
  };
  experience: {
    title: I18nString;
    subtitle: I18nString;
    tiersTitle: I18nString;
    paymentToggleTitle: I18nString;
    prepayLabel: I18nString;
    prepayBadge: I18nString;
    depositLabel: I18nString;
    depositBadge: I18nString;
    jumpersTitle: I18nString;
    jumpersHint: I18nString;
    weightTitle: I18nString;
    weightQuestion: I18nString;
    weightHelp: I18nString;
    weightLimitWarning: I18nString;
    ageTitle: I18nString;
    ageConfirm: I18nString;
    ageWarning: I18nString;
  };
  datetime: {
    title: I18nString;
    subtitle: I18nString;
    wednesdayBadge: I18nString;
    weekdayBadge: I18nString;
    weekendBadge: I18nString;
    selectDatePrompt: I18nString;
    timeSlotsTitle: I18nString;
    timeSlotMorning: I18nString;
    timeSlotMidday: I18nString;
    timeSlotAfternoon: I18nString;
    timeSlotSunset: I18nString;
    slotsAvailable: I18nString;
  };
  media: {
    title: I18nString;
    subtitle: I18nString;
    discountNotice: I18nString;
    noMediaTitle: I18nString;
    noMediaDesc: I18nString;
    singleTitle: I18nString;
    singleDesc: I18nString;
    singleBadge: I18nString;
    comboTitle: I18nString;
    comboDesc: I18nString;
    comboBadge: I18nString;
  };
  contact: {
    title: I18nString;
    subtitle: I18nString;
    firstNameLabel: I18nString;
    lastNameLabel: I18nString;
    emailLabel: I18nString;
    phoneLabel: I18nString;
    occasionLabel: I18nString;
    occasionPlaceholder: I18nString;
    notesLabel: I18nString;
    notesPlaceholder: I18nString;
  };
  payment: {
    title: I18nString;
    subtitle: I18nString;
    gatewayNotice: I18nString;
    cardholderLabel: I18nString;
    cardNumberLabel: I18nString;
    expiryLabel: I18nString;
    cvcLabel: I18nString;
    zipLabel: I18nString;
    sslNotice: I18nString;
    payPrepaidBtn: I18nString;
    payDepositBtn: I18nString;
    processingBtn: I18nString;
    cancellationPolicy: I18nString;
  };
  summary: {
    title: I18nString;
    itemBase: I18nString;
    itemMedia: I18nString;
    itemWeight: I18nString;
    itemBookingFee: I18nString;
    itemSavings: I18nString;
    totalAmount: I18nString;
    dueToday: I18nString;
    dueAtDropzone: I18nString;
    manifestNotice: I18nString;
  };
  confirmation: {
    title: I18nString;
    subtitle: I18nString;
    bookingRef: I18nString;
    checkInTimeTitle: I18nString;
    checkInTimeNotice: I18nString;
    locationTitle: I18nString;
    whatToWearTitle: I18nString;
    whatToWearItems: I18nString[];
    printOrSaveBtn: I18nString;
    bookAnotherBtn: I18nString;
  };
  actions: {
    next: I18nString;
    back: I18nString;
    edit: I18nString;
    continue: I18nString;
  };
}

export const bookingContent: BookingContent = {
  header: {
    eyebrow: {
      en: "DIRECT FLIGHT MANIFEST RESERVATION",
      es: "RESERVA DIRECTA DE MANIFIESTO DE VUELO",
    },
    title: {
      en: "Book Your Dallas Skydive",
      es: "Reserva Tu Salto en Dallas",
    },
    subtitle: {
      en: "Instant online reservation, guaranteed highest altitudes in Texas, and transparent pricing with zero surprise fees.",
      es: "Reserva en línea inmediata, la mayor altitud garantizada en Texas y precios transparentes sin cargos sorpresa.",
    },
    badge: {
      en: "Best Price Guarantee · Instant Manifest Confirmation",
      es: "Mejor Precio Garantizado · Confirmación Inmediata",
    },
  },

  stepper: {
    step1: { en: "Experience", es: "Experiencia" },
    step2: { en: "Date & Time", es: "Fecha y Hora" },
    step3: { en: "Photos & Video", es: "Fotos y Video" },
    step4: { en: "Jumper Details", es: "Tus Datos" },
    step5: { en: "Payment", es: "Pago Seguro" },
  },

  experience: {
    title: {
      en: "Choose Your Skydiving Experience",
      es: "Elige Tu Experiencia de Paracaidismo",
    },
    subtitle: {
      en: "Select your jump tier, number of participants, and payment option.",
      es: "Selecciona tu paquete de salto, número de participantes y modalidad de pago.",
    },
    tiersTitle: {
      en: "Select Jump Package",
      es: "Seleccionar Paquete de Salto",
    },
    paymentToggleTitle: {
      en: "Choose Your Payment Option",
      es: "Elige Tu Modalidad de Pago",
    },
    prepayLabel: {
      en: "Prepay Online in Full",
      es: "Pagar Total en Línea",
    },
    prepayBadge: {
      en: "Save $20–$30 / Jumper",
      es: "Ahorra $20–$30 por Saltador",
    },
    depositLabel: {
      en: "$50 Deposit Today",
      es: "$50 Depósito Hoy",
    },
    depositBadge: {
      en: "Pay Rest at Dropzone",
      es: "Paga el Resto en el Aeródromo",
    },
    jumpersTitle: {
      en: "Number of Jumpers in Your Party",
      es: "Número de Saltadores en Tu Grupo",
    },
    jumpersHint: {
      en: "Parties of 5+ jump together and receive priority manifest scheduling.",
      es: "Grupos de 5 o más saltan juntos y reciben prioridad de vuelo.",
    },
    weightTitle: {
      en: "Jumper Weight Screening (>200 lbs)",
      es: "Evaluación de Peso (>200 lbs)",
    },
    weightQuestion: {
      en: "How many jumpers in your group weigh between 200 and 240 lbs?",
      es: "¿Cuántos saltadores en tu grupo pesan entre 200 y 240 lbs?",
    },
    weightHelp: {
      en: "Jumpers over 200 lbs incur a +$35 Heavy Student Fee to account for tandem master gear sizing and instructor physical strain.",
      es: "Saltadores de más de 200 lbs tienen un cargo de +$35 por acondicionamiento de arnés y esfuerzo del instructor.",
    },
    weightLimitWarning: {
      en: "Strict Safety Limits: Maximum weight is 240 lbs for males and 220 lbs for females. All jumpers are weighed on arrival.",
      es: "Límites Estrictos: Peso máximo de 240 lbs para hombres y 220 lbs para mujeres. Todos se pesan al llegar.",
    },
    ageTitle: {
      en: "Age & Identification Requirement",
      es: "Requisito de Edad e Identificación",
    },
    ageConfirm: {
      en: "I confirm that all jumpers in my group are at least 18 years old and will present a valid government-issued photo ID.",
      es: "Confirmo que todos los saltadores tienen al menos 18 años y presentarán una identificación oficial con foto.",
    },
    ageWarning: {
      en: "Under Texas law and USPA regulations, no one under 18 may skydive under any circumstances (no parental waivers allowed).",
      es: "Por ley de Texas y normas USPA, menores de 18 años no pueden saltar bajo ninguna circunstancia.",
    },
  },

  datetime: {
    title: {
      en: "Select Your Jump Date & Departure Time",
      es: "Selecciona la Fecha y Horario de Tu Salto",
    },
    subtitle: {
      en: "Check out real-time pricing hints on each day below based on your group size and payment selection.",
      es: "Consulta los precios dinámicos por día según el tamaño de tu grupo y tu método de pago.",
    },
    wednesdayBadge: {
      en: "Wed Special · Extra $20 Off",
      es: "Especial de Miércoles · $20 Menos",
    },
    weekdayBadge: {
      en: "Weekday Rate",
      es: "Tarifa Entre Semana",
    },
    weekendBadge: {
      en: "Weekend Peak",
      es: "Fin de Semana",
    },
    selectDatePrompt: {
      en: "Click a date on the calendar to see available flight departure slots.",
      es: "Haz clic en una fecha del calendario para ver los horarios disponibles.",
    },
    timeSlotsTitle: {
      en: "Select Check-In Flight Wave",
      es: "Selecciona el Turno de Vuelo",
    },
    timeSlotMorning: {
      en: "8:30 AM · Morning Flight (Coolest Air & Smooth Winds)",
      es: "8:30 AM · Vuelo Matutino (Aire Fresco y Viento Calmo)",
    },
    timeSlotMidday: {
      en: "11:30 AM · Midday Ascent (Brightest Sunlight)",
      es: "11:30 AM · Ascenso de Mediodía (Máxima Luz Solar)",
    },
    timeSlotAfternoon: {
      en: "2:00 PM · Afternoon Jump (Open Skies)",
      es: "2:00 PM · Salto de Tarde (Cielo Despejado)",
    },
    timeSlotSunset: {
      en: "5:00 PM · Golden Hour Sunset (Stunning DFW Horizon)",
      es: "5:00 PM · Vuelo al Atardecer (Vistas Espectaculares)",
    },
    slotsAvailable: {
      en: "slots left",
      es: "lugares disponibles",
    },
  },

  media: {
    title: {
      en: "Capture the Memory of a Lifetime",
      es: "Inmortaliza el Recuerdo de Tu Vida",
    },
    subtitle: {
      en: "Professional in-air video and high-resolution photo packages shot by dedicated tandem camera flyers.",
      es: "Video profesional en el aire y fotos en alta resolución capturadas por camarógrafos aéreos dedicados.",
    },
    discountNotice: {
      en: "Save $10 per person by adding media now! Post-jump purchases at the dropzone are $10 higher.",
      es: "¡Ahorra $10 por persona agregándolo ahora! La compra posterior en el aeródromo tiene un recargo de $10.",
    },
    noMediaTitle: {
      en: "Jump Only (No Media)",
      es: "Solo el Salto (Sin Fotos/Video)",
    },
    noMediaDesc: {
      en: "Pure adrenaline. You can still decide to add media at check-in on jump day for an extra $10.",
      es: "Pura adrenalina. Podrás agregarlo el día del salto al registrarte con un cargo de $10.",
    },
    singleTitle: {
      en: "Video OR Photos Package",
      es: "Paquete de Video O Fotos",
    },
    singleDesc: {
      en: "Choose between full-length edited HD freefall video OR a complete digital high-res photo gallery.",
      es: "Elige entre video HD editado de la caída libre O una galería digital completa de fotos.",
    },
    singleBadge: {
      en: "$89 · Save $10 Online",
      es: "$89 · Ahorra $10 en Línea",
    },
    comboTitle: {
      en: "Video AND Photos 4K Combo",
      es: "Combo de Video Y Fotos 4K",
    },
    comboDesc: {
      en: "The ultimate package: 4K multi-angle freefall video, canopy flight, landing, plus 100+ high-res still photos.",
      es: "El paquete definitivo: video 4K en caída libre, vuelo bajo el paracaídas y más de 100 fotos digitales.",
    },
    comboBadge: {
      en: "$120 · Most Popular",
      es: "$120 · Más Popular",
    },
  },

  contact: {
    title: {
      en: "Lead Jumper & Group Contact Info",
      es: "Datos del Saltador Principal y Contacto",
    },
    subtitle: {
      en: "We will send your instant booking confirmation, flight waiver, and driving directions here.",
      es: "Aquí enviaremos tu confirmación inmediata, responsiva digital e indicaciones de llegada.",
    },
    firstNameLabel: { en: "First Name", es: "Nombre" },
    lastNameLabel: { en: "Last Name", es: "Apellido" },
    emailLabel: { en: "Email Address", es: "Correo Electrónico" },
    phoneLabel: { en: "Cell Phone (for weather SMS)", es: "Teléfono Móvil (para alertas de clima)" },
    occasionLabel: { en: "Celebrating a Special Occasion?", es: "¿Celebras Alguna Ocasión Especial?" },
    occasionPlaceholder: {
      en: "Birthday, Anniversary, Graduation, Bucket List, Bachelor/ette...",
      es: "Cumpleaños, Aniversario, Graduación, Despedida de Soltero/a...",
    },
    notesLabel: { en: "Special Requests or Instructor Notes", es: "Peticiones Especiales o Notas para el Instructor" },
    notesPlaceholder: {
      en: "Let us know if you want to jump out of the plane together with a specific friend in your group...",
      es: "Indícanos si deseas abordar en el mismo avión que algún amigo de tu grupo...",
    },
  },

  payment: {
    title: {
      en: "Secure Checkout & Slot Reservation",
      es: "Pago Seguro y Reserva de Vuelo",
    },
    subtitle: {
      en: "Protected by 256-bit bank-grade encryption through the Stripe / Burblesoft Reservation Gateway.",
      es: "Protegido por cifrado bancario de 256 bits mediante la pasarela de reservas Stripe / Burblesoft.",
    },
    gatewayNotice: {
      en: "Official Payment Gateway for Dallas Skydive Center at Caddo Mills Municipal Airport.",
      es: "Pasarela Oficial de Pagos de Dallas Skydive Center en el Aeropuerto de Caddo Mills.",
    },
    cardholderLabel: { en: "Cardholder Name", es: "Nombre del Titular" },
    cardNumberLabel: { en: "Card Number", es: "Número de Tarjeta" },
    expiryLabel: { en: "Expiration (MM/YY)", es: "Vencimiento (MM/AA)" },
    cvcLabel: { en: "CVC / CVV", es: "CVC / CVV" },
    zipLabel: { en: "Billing ZIP Code", es: "Código Postal de Facturación" },
    sslNotice: {
      en: "256-Bit SSL Encrypted · Instant Manifest Placement · Zero Hidden Surcharges",
      es: "Cifrado SSL de 256 Bits · Registro Inmediato en Manifiesto · Sin Cargos Ocultos",
    },
    payPrepaidBtn: {
      en: "Pay Full Balance & Confirm Reservation",
      es: "Pagar Saldo Completo y Confirmar Reserva",
    },
    payDepositBtn: {
      en: "Pay Deposit Now & Hold Slots",
      es: "Pagar Depósito Ahora y Asegurar Lugares",
    },
    processingBtn: {
      en: "Reserving Flight Slots...",
      es: "Reservando Turnos de Vuelo...",
    },
    cancellationPolicy: {
      en: "Rescheduling is 100% free with at least 48 hours notice. Weather postponements are transferable for up to 1 full year.",
      es: "Cambios de fecha 100% gratuitos con 48 horas de anticipación. Reprogramaciones por clima son válidas por 1 año.",
    },
  },

  summary: {
    title: { en: "Reservation Summary", es: "Resumen de Reserva" },
    itemBase: { en: "Base Skydiving Jump", es: "Salto Base de Paracaidismo" },
    itemMedia: { en: "Media Package", es: "Paquete Multimedia" },
    itemWeight: { en: "Heavy Student Fee (>200 lbs)", es: "Tarifa de Peso (>200 lbs)" },
    itemBookingFee: { en: "FAA Fuel Surcharge & Booking Fee", es: "Tarifa de Combustible FAA y Reserva" },
    itemSavings: { en: "Online Prepay Savings", es: "Ahorro por Pago Total Anticipado" },
    totalAmount: { en: "Total Reservation Value", es: "Valor Total de Reserva" },
    dueToday: { en: "Due Today", es: "Total a Pagar Hoy" },
    dueAtDropzone: { en: "Remaining Due at Dropzone", es: "Saldo Restante en el Aeródromo" },
    manifestNotice: {
      en: "Your slots are held on the aircraft manifest once checkout is completed.",
      es: "Tus lugares quedarán asegurados en el manifiesto de vuelo al completar el pago.",
    },
  },

  confirmation: {
    title: {
      en: "You’re Cleared for Takeoff!",
      es: "¡Tu Salto Está Confirmado!",
    },
    subtitle: {
      en: "Your flight reservation has been booked. A confirmation email and digital waiver link have been dispatched.",
      es: "Tu reserva ha sido procesada con éxito. Hemos enviado un correo con tu confirmación y responsiva digital.",
    },
    bookingRef: {
      en: "Reservation Reference #",
      es: "Número de Confirmación #",
    },
    checkInTimeTitle: {
      en: "Important Check-In Reminder",
      es: "Recordatorio Importante de Llegada",
    },
    checkInTimeNotice: {
      en: "Please arrive at Caddo Mills Municipal Airport 30 minutes before your scheduled flight time to complete harness fitting and your USPA ground briefing.",
      es: "Por favor llega al aeropuerto de Caddo Mills 30 minutos antes de tu horario para el ajuste de arnés e instrucción.",
    },
    locationTitle: {
      en: "Dropzone Coordinates",
      es: "Ubicación del Aeródromo",
    },
    whatToWearTitle: {
      en: "What to Wear on Jump Day",
      es: "Qué Vestir el Día de Tu Salto",
    },
    whatToWearItems: [
      { en: "Comfortable athletic clothes suitable for the season (t-shirt, shorts or sweatpants)", es: "Ropa deportiva cómoda según el clima (playera, shorts o pants)" },
      { en: "Snug-fitting lace-up sneakers (strictly NO boots with hooks, NO slip-ons, NO sandals)", es: "Tenis deportivos con agujetas (estrictamente prohibidas botas con ganchos o sandalias)" },
      { en: "Valid government-issued photo ID for all participants (strictly 18+ only)", es: "Identificación oficial con foto vigente para todos los participantes (18+ años obligatorios)" },
      { en: "Eat a light, normal meal and stay hydrated before heading out to Caddo Mills", es: "Come algo ligero y mantente hidratado antes de salir hacia Caddo Mills" },
    ],
    printOrSaveBtn: {
      en: "Download Reservation PDF",
      es: "Descargar Confirmación en PDF",
    },
    bookAnotherBtn: {
      en: "Book Another Experience",
      es: "Reservar Otra Experiencia",
    },
  },

  actions: {
    next: { en: "Continue to Next Step", es: "Continuar al Siguiente Paso" },
    back: { en: "Previous Step", es: "Paso Anterior" },
    edit: { en: "Edit", es: "Editar" },
    continue: { en: "Continue", es: "Continuar" },
  },
};
