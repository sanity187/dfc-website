import { I18nString } from "./types";

export interface LocalizedLevelItem {
  category: I18nString;
  name: I18nString;
  description: I18nString;
}

export const learnContent = {
  eyebrow: {
    en: "SOLO CERTIFICATION & LICENSING",
    es: "CERTIFICACIÓN INDIVIDUAL Y LICENCIAS",
  },
  title: {
    en: "Learn to Skydive (AFF Program)",
    es: "Aprende a Saltar Solo (Programa AFF)",
  },
  subtitle: {
    en: "Earn your USPA 'A' License and become a certified solo skydiver.",
    es: "Obtén tu Licencia 'A' de la USPA y conviértete en paracaidista certificado.",
  },
  intro: {
    en: "Our Accelerated Freefall (AFF) curriculum is the world-recognized gold standard for solo skydiving instruction. Progress through structured ground school, in-air coached jumps, canopy flight piloting, and solo graduation.",
    es: "Nuestro plan de estudios de Caída Libre Acelerada (AFF) es el estándar de oro mundial para la instrucción de paracaidismo individual. Avanza a través de clases teóricas, saltos con instructores en el aire y graduación en solitario.",
  },
  affCategoriesHeading: {
    en: "The AFF Progression Path",
    es: "Ruta de Progresión AFF",
  },
  levels: [
    {
      category: {
        en: "Ground School",
        es: "Escuela en Tierra",
      },
      name: {
        en: "First Jump Course (FJC)",
        es: "Curso del Primer Salto (FJC)",
      },
      description: {
        en: "6 to 8 hours of intensive classroom training covering aerodynamics, gear operation, emergency procedures, and landing techniques.",
        es: "De 6 a 8 horas de entrenamiento intensivo en aula sobre aerodinámica, equipo, procedimientos de emergencia y técnicas de aterrizaje.",
      },
    },
    {
      category: {
        en: "Category A–C",
        es: "Categorías A–C",
      },
      name: {
        en: "Dual Instructor Freefall",
        es: "Caída Libre con Dos Instructores",
      },
      description: {
        en: "Jump with two dedicated USPA AFF instructors holding your harness while you practice altitude awareness and stable body flight.",
        es: "Salta con dos instructores certificados que te sostienen en el aire mientras practicas conciencia de altitud y vuelo corporal estable.",
      },
    },
    {
      category: {
        en: "Category D–E",
        es: "Categorías D–E",
      },
      name: {
        en: "Single Instructor & Aerobatics",
        es: "Instructor Único y Maniobras",
      },
      description: {
        en: "Release into solo stability, practice 360-degree turns, backflips, track maneuvers, and independent canopy deployment.",
        es: "Vuelo libre independiente, giros de 360 grados, mortales hacia atrás, desplazamiento y apertura de paracaídas por cuenta propia.",
      },
    },
    {
      category: {
        en: "Category F–H",
        es: "Categorías F–H",
      },
      name: {
        en: "Solo Graduation & USPA A-License",
        es: "Graduación y Licencia 'A' USPA",
      },
      description: {
        en: "Clear check-dives, solo canopy accuracy landings, gear inspection certification, and receive your internationally recognized USPA license.",
        es: "Supera los saltos de evaluación, aterrizajes de precisión, inspección de equipo y recibe tu licencia oficial reconocida en todo el mundo.",
      },
    },
  ] as LocalizedLevelItem[],
  cta: {
    en: "Enroll in AFF Ground School",
    es: "Inscribirse en el Curso AFF",
  },
};
