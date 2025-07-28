import proof from "@/assets/icons/prueba.png";
import chose from "@/assets/icons/elegir.png";
import progress from "@/assets/icons/progreso.png";

import wave from "@/assets/icons/ola.png";
import puzzle from "@/assets/icons/puzzle.png";
import community from "@/assets/icons/comunidad.png";

import type { Step } from "@/types";

export const howStart: Step[] = [
  {
    icon: proof,
    name: "rellena el formulario",
    description:
      "Completa nuestro formulario de inscripción con tus datos básicos, el horario que mejor se adapte a ti y la modalidad en la que deseas realizar tu clase de prueba: con kimono (Gi), sin kimono (No-Gi) o clases infantiles. Esto nos permitirá reservar tu plaza y prepararlo todo para tu primer día.",
  },
  {
    icon: chose,
    name: "confirma tu clase",
    description:
      "Una vez recibido tu formulario, nos pondremos en contacto contigo para confirmar tu clase de prueba gratuita y resolver cualquier duda que puedas tener antes de tu primer entrenamiento.",
  },
  {
    icon: progress,
    name: "empieza a entrenar",
    description:
      "El día acordado, solo necesitas presentarte con ropa cómoda y muchas ganas. Si no cuentas con kimono, te facilitaremos uno para tu clase de prueba. A partir de ahí, comenzarás tu camino en el Jiu-Jitsu acompañado por un equipo comprometido con tu proceso deportivo y personal.",
  },
];

export const principles: Step[] = [
  {
    icon: wave,
    name: "nuestra ola",
    description:
      "Simboliza nuestra forma de vivir el jiu-jitsu a través de la adaptabilidad, el aprendizaje y la superación. No se trata de resistir, sino de fluir con los retos y superarlos con resiliencia. Más que un arte marcial es un estilo de vida",
  },
  {
    icon: puzzle,
    name: "metodología",
    description:
      "Te ofrecemos un programa especializado garantizando el aprendizaje y la integración de contenidos. Nuestro equipo de profesores estará acompañándote durante todo tu camino para afianzar tu progreso y atender tus necesidades.",
  },
  {
    icon: community,
    name: "comunidad",
    description:
      "Creemos en el poder del jiu-jitsu para unir a las personas. En Atenea cultivamos un ambiente cercano y familiar, donde cada alumno forma parte de una comunidad que se apoya dentro y fuera del tatami. Crecemos juntos, sin importar el nivel o la experiencia.",
  },
];
