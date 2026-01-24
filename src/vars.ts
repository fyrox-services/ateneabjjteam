export const siteName = "Laura Buendía - Perito Médico";
const BASE_URL_WS = "https://wa.me/634254179?text=";
const buildMsg = (msg: string) => {
  return `${BASE_URL_WS}${encodeURI(msg)}`;
};

export const GLOBAL_DATA = {
  PHONE_NUMBER: "634254179",
  CALL_LINK: "tel:634254179",
  PHONE_MASK: "634 254 179",
  PHONE_DATA: "+34 634 254 179",
  MAIL_TO: "mailto:info@ateneabjjteam.com",
  MAIL_TEXT: "info@ateneabjjteam.com",
  SITE_NAME: "Atenea Brazilian Jiu Jitsu Team",
  REVIEW: "https://g.page/r/CUP9yqy2hBukEBM/review",
  SITE_DESCRIPTION:
    "Academia de jiu jitsu en Madrid, aprende jiu jitsu de calidad de forma estructurada y profesional. Reserva una primera clase de prueba gratis.",
};

export const WHATSAPP_MSG = {
  GENERAL: buildMsg("Hola, me gustaría tener más información sobre: "),
  COMPETITION: buildMsg(
    "Hola, me gustaría tener más información sobre el programa de competición:",
  ),
  PRIVATE_SESSIONS: buildMsg(
    "Hola, me gustaría tener más información sobre las sesiones privadas:",
  ),
  COMPANIES: buildMsg(
    "Hola, me gustaría tener más información sobre el jiu jitsu para empresas:",
  ),
  DISCA: buildMsg(
    "Hola, me gustaría tener más información sobre el jiu jitsu para personas con discapacidad:",
  ),
  BUY_PRIVATE_SESSION: buildMsg(
    "Hola, me gustaría tener más información para comprar una clase privada:",
  ),
};
