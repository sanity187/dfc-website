import { LocalizedStatItem, LocalizedFaqItem } from "./types";

export const homeContent = {
  hero: {
    eyebrow: {
      en: "DFW’S PREMIER SKYDIVING DESTINATION",
      es: "EL DESTINO LÍDER DE PARACAIDISMO EN DFW",
    },
    titlePrimary: {
      en: "Experience 14,000 FT",
      es: "Vive la Emoción a 14,000 Pies",
    },
    titleSecondary: {
      en: "Over North Texas",
      es: "Sobre el Norte de Texas",
    },
    subtitle: {
      en: "Feel the rush of 120 MPH freefall paired with dual-certified USPA instructors. Modern aircraft, panoramic skyline views, and memory-making tandem skydives.",
      es: "Siente la adrenalina de caer a 120 MPH junto a instructores certificados por la USPA. Aviones modernos, vistas panorámicas y la mejor experiencia de salto tándem.",
    },
    ctaPrimary: {
      en: "Book Your Jump",
      es: "Reserva Tu Salto",
    },
    ctaSecondary: {
      en: "Explore Tandem Skydive",
      es: "Conoce el Salto Tándem",
    },
    altitudeCallout: {
      en: "14,000 FT Jump Altitude · 60s Freefall",
      es: "Altitud de 14,000 Pies · 60s Caída Libre",
    },
  },
  stats: [
    {
      value: { en: "14,000 FT", es: "14,000 Pies" },
      label: { en: "Jump Altitude", es: "Altitud de Salto" },
      description: {
        en: "Highest tandem exit altitude in North Texas",
        es: "La mayor altitud de salida tándem en el norte de Texas",
      },
    },
    {
      value: { en: "120+ MPH", es: "120+ MPH" },
      label: { en: "Freefall Speed", es: "Velocidad de Caída Libre" },
      description: {
        en: "60 full seconds of pure terminal velocity adrenaline",
        es: "60 segundos completos de pura adrenalina a velocidad terminal",
      },
    },
    {
      value: { en: "75,000+", es: "75,000+" },
      label: { en: "Safe Jumps Logged", es: "Saltos Seguros Registrados" },
      description: {
        en: "Over 25 years of dropzone excellence",
        es: "Más de 25 años de excelencia en paracaidismo",
      },
    },
    {
      value: { en: "100%", es: "100%" },
      label: { en: "USPA Certified", es: "Certificado por USPA" },
      description: {
        en: "Master tandem instructors with dual-parachute safety gear",
        es: "Instructores maestros con sistemas de paracaídas doble y tecnología AAD",
      },
    },
  ] as LocalizedStatItem[],
  overview: {
    eyebrow: {
      en: "THE DALLAS SKYDIVE EXPERIENCE",
      es: "LA EXPERIENCIA DALLAS SKYDIVE",
    },
    title: {
      en: "Built for First-Timers & Seasoned Jumpers Alike",
      es: "Diseñado para Principiantes y Paracaidistas Experimentados",
    },
    description: {
      en: "Located just minutes outside Dallas, our full-service dropzone provides top-tier aircraft, private video debrief suites, spectator viewing lounges, and unmatched Texas skies.",
      es: "Ubicada a solo minutos de Dallas, nuestra zona de salto completa ofrece aeronaves de primer nivel, salas de video, áreas para espectadores y los cielos más impresionantes de Texas.",
    },
  },
  faqs: [
    {
      question: {
        en: "How high do we jump from?",
        es: "¿Desde qué altura saltamos?",
      },
      answer: {
        en: "We jump from up to 14,000 feet above ground level, giving you a full 60 seconds of thrilling 120 MPH freefall before a scenic 5-minute canopy ride.",
        es: "Saltamos desde hasta 14,000 pies de altura, lo que te brinda 60 segundos de emocionante caída libre a 120 MPH antes de un planeo panorámico de 5 minutos en paracaídas.",
      },
    },
    {
      question: {
        en: "Is this safe for first-time jumpers?",
        es: "¿Es seguro para quien salta por primera vez?",
      },
      answer: {
        en: "Yes! You will be securely harnessed to a USPA-certified Master Tandem Instructor with thousands of jumps. All rigs feature dual parachutes and automated computer backup activation devices (AAD).",
        es: "¡Totalmente! Estarás sujeto a un instructor tándem certificado por la USPA con miles de saltos. Todo el equipo cuenta con paracaídas de reserva y activadores automáticos computarizados (AAD).",
      },
    },
    {
      question: {
        en: "What are the age and weight requirements?",
        es: "¿Cuáles son los requisitos de edad y peso?",
      },
      answer: {
        en: "Jumpers must be at least 18 years old with a valid government photo ID. The weight limit is 240 lbs, subject to height-to-weight proportion and gear fitting.",
        es: "Debes tener al menos 18 años con identificación oficial con fotografía. El límite de peso es de 240 libras (108 kg), sujeto a proporción corporal y ajuste del arnés.",
      },
    },
  ] as LocalizedFaqItem[],
};
