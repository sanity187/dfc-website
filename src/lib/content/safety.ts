import { I18nString } from "./types";

export interface LocalizedPillarItem {
  title: I18nString;
  description: I18nString;
}

export const safetyContent = {
  eyebrow: {
    en: "UNCOMPROMISING AVIATION STANDARDS",
    es: "ESTÁNDARES DE AVIACIÓN SIN CONCESIONES",
  },
  title: {
    en: "Safety, Gear & Aircraft Fleet",
    es: "Seguridad, Equipo y Flota Aérea",
  },
  subtitle: {
    en: "Every aircraft, parachute system, and flight protocol meets or exceeds FAA & USPA standards.",
    es: "Cada aeronave, paracaídas y protocolo de vuelo cumple o supera las normas de la FAA y la USPA.",
  },
  aircraftHeading: {
    en: "Dedicated Turbine Jump Aircraft",
    es: "Aeronaves de Salto con Turbina Dedicadas",
  },
  aircraftText: {
    en: "Maintained under strict FAA Part 91/135 continuous inspection programs with certified aviation powerplants.",
    es: "Mantenidas bajo rigurosos programas de inspección continua de la FAA con plantas de poder certificadas.",
  },
  gearHeading: {
    en: "State-of-the-Art Dual Parachute Systems",
    es: "Sistemas de Paracaídas Doble de Última Generación",
  },
  gearText: {
    en: "Every single rig is equipped with a primary canopy, a reserve parachute packed by FAA Certified Master Riggers, and a Cypres 2 Automatic Activation Device (AAD).",
    es: "Cada equipo cuenta con campana principal, paracaídas de reserva empacado por plegadores certificados por la FAA y dispositivo de activación automática Cypres 2 (AAD).",
  },
  pillars: [
    {
      title: {
        en: "USPA Master Instructors",
        es: "Instructores Maestros de la USPA",
      },
      description: {
        en: "Instructors hold multiple instructional ratings, FAA medical clearances, and thousands of logged skydives.",
        es: "Nuestros instructores cuentan con múltiples calificaciones de enseñanza, certificados médicos de la FAA y miles de saltos registrados.",
      },
    },
    {
      title: {
        en: "Cypres 2 AAD Protection",
        es: "Protección AAD Cypres 2",
      },
      description: {
        en: "State-of-the-art computer micro-processors automatically deploy the reserve canopy if altitude and descent speed parameters are triggered.",
        es: "Microprocesadores computarizados de última generación que despliegan automáticamente la reserva si se alcanzan parámetros críticos de altitud y velocidad.",
      },
    },
    {
      title: {
        en: "FAA Certified Master Riggers",
        es: "Plegadores Maestros Certificados por la FAA",
      },
      description: {
        en: "Reserve parachutes undergo rigorous 180-day inspection and repacking by FAA-licensed aviation riggers.",
        es: "Los paracaídas de reserva se someten a inspecciones rigurosas y reempacado cada 180 días por técnicos de aviación con licencia FAA.",
      },
    },
    {
      title: {
        en: "Aviation Grade Meteorology",
        es: "Meteorología de Grado Aeronáutico",
      },
      description: {
        en: "Continuous real-time wind, cloud ceiling, and atmospheric telemetry monitoring ensure every jump operates in optimal weather conditions.",
        es: "Monitoreo continuo de viento, techo de nubes y condiciones atmosféricas en tiempo real para garantizar saltos en condiciones óptimas.",
      },
    },
  ] as LocalizedPillarItem[],
};
