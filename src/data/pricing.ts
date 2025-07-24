import type { Plan } from "@/types";
import { WHATSAPP_MSG } from "@/vars";

export const mainClasses: Plan[] = [
  {
    name: "Gi y NoGi",
    price: 110,
    link: "https://checkout.joinmaat.com/?gymId=atenea_bjj_team&priceId=price_1QnFv2KuXaFCDXDnul14YlEp",
    monthly: true,
    buy: true,
  },
  {
    name: "Solo Gi",
    price: 90,
    link: "https://checkout.joinmaat.com/?gymId=atenea_bjj_team&priceId=price_1QnFvGKuXaFCDXDnzeXlHsJ3",
    monthly: true,
    buy: true,
  },
  {
    name: "Solo NoGi",
    price: 90,
    link: "https://checkout.joinmaat.com/?gymId=atenea_bjj_team&priceId=price_1QnFvYKuXaFCDXDnhGS3H4pF",
    monthly: true,
    buy: true,
  },
];

export const kids: Plan[] = [
  {
    name: "4 a 7 años",
    price: 75,
    link: "https://checkout.joinmaat.com/?gymId=atenea_bjj_team&priceId=price_1RdZqUKuXaFCDXDnaW0THNHo",
    monthly: true,
    buy: true,
  },
  {
    name: "8 a 10 años",
    price: 75,
    link: "https://checkout.joinmaat.com/?gymId=atenea_bjj_team&priceId=price_1RdZppKuXaFCDXDnTrsBmC2F",
    monthly: true,
    buy: true,
  },
  {
    name: "11 a 15 años",
    price: 75,
    link: "https://checkout.joinmaat.com/?gymId=atenea_bjj_team&priceId=price_1RdZqwKuXaFCDXDnK2fFMf0A",
    monthly: true,
    tagline: "3 días por semana",
    buy: true,
  },
  {
    name: "11 a 15 años",
    price: 80,
    link: "https://checkout.joinmaat.com/?gymId=atenea_bjj_team&priceId=price_1QnFxoKuXaFCDXDnFRaWhz2a",
    monthly: true,
    tagline: "5 días por semana",
    buy: true,
  },
];

export const oneTime: Plan[] = [
  {
    name: "clase suelta",
    price: 15,
    link: "https://checkout.joinmaat.com/?gymId=atenea_bjj_team&priceId=price_1QnFuVKuXaFCDXDnst9Utw0f",
    buy: true,
  },
  {
    name: "pase de día",
    price: 20,
    link: "https://checkout.joinmaat.com/?gymId=atenea_bjj_team&priceId=price_1QnFuKKuXaFCDXDnmdIg9XOU",
    buy: true,
  },
  {
    name: "pase semanal",
    price: 50,
    link: "https://checkout.joinmaat.com/?gymId=atenea_bjj_team&priceId=price_1QnFu3KuXaFCDXDncmOlu1yb",
    buy: true,
  },
];

export const privateSessions: Plan[] = [
  {
    name: "cinturón marrón",
    price: 70,
    link: WHATSAPP_MSG.BUY_PRIVATE_SESSION,
    tagline: "1 clase",
    buy: false,
  },
  {
    name: "profesor Renzo Martínez",
    price: 80,
    link: WHATSAPP_MSG.BUY_PRIVATE_SESSION,
    tagline: "1 clase",
    buy: false,
  },
  {
    name: "cinturón marrón",
    price: 220,
    link: WHATSAPP_MSG.BUY_PRIVATE_SESSION,
    tagline: "8 clases",
    buy: false,
  },
  {
    name: "profesor Renzo Martínez",
    price: 250,
    link: WHATSAPP_MSG.BUY_PRIVATE_SESSION,
    tagline: "8 clases",
    buy: false,
  },
];
