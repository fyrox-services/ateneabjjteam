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
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,eligendi.",
    img: gi,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur labore. At hic odit maxime maiores culpa reprehenderit molestiae totam repellendus perferendis, blanditiis sapiente iusto amet, tempore voluptas ipsa exercitationem.",
  },
  {
    heading: "grappling - nogi",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,eligendi.",
    img: nogi,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur labore. At hic odit maxime maiores culpa reprehenderit molestiae totam repellendus perferendis, blanditiis sapiente iusto amet, tempore voluptas ipsa exercitationem.",
  },
  {
    heading: "niños",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,eligendi.",
    img: kids,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur labore. At hic odit maxime maiores culpa reprehenderit molestiae totam repellendus perferendis, blanditiis sapiente iusto amet, tempore voluptas ipsa exercitationem.",
  },
];

export const programs: Classes[] = [
  {
    heading: "competición",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,eligendi.",
    img: competition,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur labore. At hic odit maxime maiores culpa reprehenderit molestiae totam repellendus perferendis, blanditiis sapiente iusto amet, tempore voluptas ipsa exercitationem.",
    wa: WHATSAPP_MSG.COMPETITION,
  },
  {
    heading: "sesiones privadas",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,eligendi.",
    img: privateSessions,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur labore. At hic odit maxime maiores culpa reprehenderit molestiae totam repellendus perferendis, blanditiis sapiente iusto amet, tempore voluptas ipsa exercitationem.",
    wa: WHATSAPP_MSG.PRIVATE_SESSIONS,
  },
  {
    heading: "empresas",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,eligendi.",
    img: bjjCompanies,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur labore. At hic odit maxime maiores culpa reprehenderit molestiae totam repellendus perferendis, blanditiis sapiente iusto amet, tempore voluptas ipsa exercitationem.",
    wa: WHATSAPP_MSG.COMPANIES,
  },
  {
    heading: "discapacidad",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,eligendi.",
    img: disca,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur labore. At hic odit maxime maiores culpa reprehenderit molestiae totam repellendus perferendis, blanditiis sapiente iusto amet, tempore voluptas ipsa exercitationem.",
    wa: WHATSAPP_MSG.DISCA,
  },
];
