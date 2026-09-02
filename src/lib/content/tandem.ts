import { I18nString } from "./types";

export interface LocalizedStepItem {
  step: string;
  title: I18nString;
  description: I18nString;
}

export const tandemContent = {
  eyebrow: {
    en: "FIRST-TIME SKYDIVERS",
    es: "PRIMERA VEZ SALTANDO",
  },
  title: {
    en: "Tandem Skydiving in Dallas",
    es: "Salto Tándem en Dallas",
  },
  subtitle: {
    en: "The simplest, safest, and most exhilarating way to take your very first leap.",
    es: "La manera más fácil, segura y emocionante de dar tu primer salto.",
  },
  intro: {
    en: "Harnessed securely to an expert USPA Master Tandem Instructor, you'll climb to 14,000 feet, step into the open sky for 60 seconds of 120 MPH freefall, and float under canopy with stunning Texas views.",
    es: "Asegurado a un instructor maestro certificado por la USPA, subirás a 14,000 pies, saltarás al vacío para 60 segundos de caída libre a 120 MPH y planearás en paracaídas con vistas increíbles de Texas.",
  },
  stepsHeading: {
    en: "Your Jump Day Timeline",
    es: "Cronograma del Día de Tu Salto",
  },
  steps: [
    {
      step: "01",
      title: {
        en: "Check-In & Briefing",
        es: "Registro y Orientación",
      },
      description: {
        en: "Arrive at the dropzone, complete your digital waiver, and undergo a 20-minute safety orientation with your instructor.",
        es: "Llega a la zona de salto, completa la exención digital y recibe una charla de seguridad de 20 minutos con tu instructor.",
      },
    },
    {
      step: "02",
      title: {
        en: "Gearing Up & Boarding",
        es: "Colocación de Equipo y Abordaje",
      },
      description: {
        en: "Get fitted into custom safety harnesses and board our high-performance jump aircraft for a 15-minute scenic ascent to 14,000 ft.",
        es: "Ajuste de arnés de seguridad profesional y abordaje de nuestra aeronave para un ascenso de 15 minutos hasta los 14,000 pies.",
      },
    },
    {
      step: "03",
      title: {
        en: "The 14,000 FT Exit & Freefall",
        es: "Salto y Caída Libre",
      },
      description: {
        en: "Exit into the sky and experience 60 seconds of breathtaking 120 MPH freefall over the Texas skyline.",
        es: "Salto al aire para experimentar 60 segundos de impresionante caída libre a 120 MPH sobre el horizonte de Texas.",
      },
    },
    {
      step: "04",
      title: {
        en: "Canopy Flight & Soft Touchdown",
        es: "Vuelo en Paracaídas y Aterrizaje",
      },
      description: {
        en: "Enjoy 5 to 7 minutes under an open parachute with hands-on steering control before a smooth landing on our manicured dropzone field.",
        es: "Disfruta de 5 a 7 minutos de vuelo en paracaídas con control de maniobra antes de un aterrizaje suave en nuestro campo.",
      },
    },
  ] as LocalizedStepItem[],
  cta: {
    en: "Book Tandem Jump",
    es: "Reservar Salto Tándem",
  },
};
