import nogi from "@/assets/classes/nogi.jpg";
import gi from "@/assets/classes/kimono.jpg";
import kids from "@/assets/classes/niños.jpg";
import competition from "@/assets/classes/competicion.jpg";

import bjjCompanies from "@/assets/classes/bjj-para-empresas.jpg";
import privateSessions from "@/assets/classes/sesiones-privadas.jpeg";
import disca from "@/assets/classes/discapacidad.jpg";

import type { Classes } from "@/types";
import { WHATSAPP_MSG } from "@/vars";

export const mainClasses: Classes[] = [
  {
    heading: "kimono - gi",
    text: "El Gi permite un juego más controlado y estratégico gracias a los agarres de tela.",
    img: gi,
    description:
      "El jiu-jitsu con kimono se enfoca en un juego técnico y estratégico basado en los agarres de la tela. Las clases incluyen prácticas de técnicas básicas y avanzadas, ejercicios específicos y sesiones de sparring.",
  },
  {
    heading: "grappling - nogi",
    text: "el No-Gi es más dinámico y explosivo, más orientado al grappling puro.",
    img: nogi,
    description:
      "El NoGi o Grappling es la versión del jiu-jitsu sin kimono, con combates más rápidos y dinámicos por la ausencia de agarres de tela. Las clases incluyen técnicas, ejercicios específicos y sparring.",
  },
  {
    heading: "niños",
    text: "Clases impartidas de una forma segura y divertida, desde los 4 hasta los 15 años.",
    img: kids,
    description:
      "El jiu-jitsu infantil se divide por grupos de edad (4-7, 8-10 y 11-15 años) y ayuda a desarrollar concentración, psicomotricidad y confianza. También enseña defensa ante el bullying, junto con valores como disciplina, respeto y compañerismo.",
  },
];

export const programs: Classes[] = [
  {
    heading: "competición",
    text: "entrenamientos con objetivos específicos.",
    img: competition,
    description:
      "En Atenea somos unos apasionados de la competición y tenemos un objetivo claro: formar campeones. Adaptamos estrategias al estilo de cada alumno y entrenamos según las reglas del torneo para una preparación física y mental óptima.",
    wa: WHATSAPP_MSG.COMPETITION,
  },
  {
    heading: "sesiones privadas",
    text: "aprendizaje rápido y personalizado en un entorno exclusivo.",
    img: privateSessions,
    description:
      "Las clases privadas ofrecen un aprendizaje acelerado y personalizado según el nivel y las necesidades del alumno. Se desarrollan en un entorno exclusivo y totalmente adaptado.",
    wa: WHATSAPP_MSG.PRIVATE_SESSIONS,
  },
  {
    heading: "empresas",
    text: "Team building, charlas formativas y clases de defensa personal.",
    img: bjjCompanies,
    description:
      "Ofrecemos jiu-jitsu para empresas con actividades de team building, clases de defensa personal mixtas y para mujeres, incluyendo charlas sobre deporte, inclusión y prevención. Ideal para fortalecer y sensibilizar equipos.",
    wa: WHATSAPP_MSG.COMPANIES,
  },
  {
    heading: "discapacidad",
    text: "Clases inclusivas y adaptadas para personas con discapacidad.",
    img: disca,
    description:
      "Todas nuestras clases están abiertas y adaptadas para personas con discapacidad, con un enfoque inclusivo que garantiza la participación y progreso de todos los alumnos. En Atenea ya contamos con varios estudiantes con discapacidad.",
    wa: WHATSAPP_MSG.DISCA,
  },
];
