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
      "El jiu-jitsu con kimono se centra en un estilo técnico y estratégico que aprovecha los agarres de la tela para controlar, inmovilizar o someter al oponente. Esta modalidad permite una gran variedad de posiciones, transiciones y ataques, lo que la convierte en una disciplina más precisa.Las clases incluyen prácticas de técnicas básicas y avanzadas, ejercicios específicos y sesiones de sparring.",
  },
  {
    heading: "grappling - nogi",
    text: "el No-Gi es más dinámico y explosivo, más orientado al grappling puro.",
    img: nogi,
    description:
      "El No-Gi o Grappling es la modalidad del jiu-jitsu sin kimono, lo que da lugar a combates más rápidos, fluidos y con un enfoque más directo en el control corporal. Al no haber agarres de tela, las técnicas se adaptan, priorizando la movilidad, la reacción y el uso eficiente del cuerpo. Las clases incluyen técnica, ejercicios específicos y sparring, todo orientado a mejorar tanto la defensa como el ataque en situaciones de alta intensidad.",
  },
  {
    heading: "niños",
    text: "Clases impartidas de una forma segura y divertida, desde los 4 hasta los 15 años.",
    img: kids,
    description:
      "El jiu-jitsu infantil en nuestra academia se organiza en grupos según la edad (4-7, 8-10 y 11-15 años), lo que nos permite adaptar la enseñanza a cada etapa de desarrollo. A través de juegos, ejercicios y técnica, los niños mejoran su concentración, coordinación motriz y autoconfianza. Además de aprender a defenderse ante situaciones de bullying, el jiu-jitsu les transmite valores esenciales como la disciplina, el respeto, el autocontrol y el compañerismo.",
  },
];

export const programs: Classes[] = [
  {
    heading: "competición",
    text: "entrenamientos con objetivos específicos.",
    img: competition,
    description:
      "En Atenea somos verdaderos apasionados de la competición y trabajamos con un objetivo claro: formar campeones dentro y fuera del tatami. Nos enfocamos en pulir el estilo individual de cada alumno, adaptando estrategias que potencien sus fortalezas. Entrenamos específicamente bajo el reglamento de cada torneo, combinando preparación técnica, física y mental para que lleguen con confianza y enfoque al día de la competición.",
    wa: WHATSAPP_MSG.COMPETITION,
  },
  {
    heading: "sesiones privadas",
    text: "aprendizaje rápido y personalizado en un entorno exclusivo.",
    img: privateSessions,
    description:
      "Las clases privadas son una excelente opción para quienes buscan un aprendizaje más rápido y totalmente personalizado. Se ajustan al nivel, ritmo y objetivos específicos de cada alumno, permitiendo avanzar de forma más eficiente. Estas sesiones se desarrollan en un entorno exclusivo, con atención individualizada y una planificación adaptada que optimiza tanto la técnica como el rendimiento físico y mental.",
    wa: WHATSAPP_MSG.PRIVATE_SESSIONS,
  },
  {
    heading: "empresas",
    text: "Team building, charlas formativas y clases de defensa personal.",
    img: bjjCompanies,
    description:
      "Ofrecemos programas de jiu-jitsu especialmente diseñados para empresas, que incluyen dinámicas de team building, clases de defensa personal (mixtas y exclusivas para mujeres) y charlas formativas sobre deporte, inclusión, autocuidado y prevención de situaciones de riesgo. Estas actividades no solo fortalecen la cohesión y la confianza dentro del equipo, sino que también promueven un entorno laboral más saludable, empático y consciente.",
    wa: WHATSAPP_MSG.COMPANIES,
  },
  {
    heading: "discapacidad",
    text: "Clases inclusivas y adaptadas para personas con discapacidad.",
    img: disca,
    description:
      "En Atenea todas nuestras clases están abiertas y adaptadas para personas con discapacidad, con un enfoque inclusivo y respetuoso que garantiza la participación, el aprendizaje y el progreso de cada alumno. Creemos firmemente que el jiu-jitsu es para todos, y por eso trabajamos para crear un entorno accesible, seguro y motivador. Actualmente ya contamos con varios estudiantes con discapacidad que entrenan de forma regular y forman parte activa de la comunidad.",
    wa: WHATSAPP_MSG.DISCA,
  },
];
