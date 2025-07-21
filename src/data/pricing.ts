import type { Plan } from "@/types";

export const mainClasses: Plan[] = [
  {
    name: "Gi y NoGi",
    price: 110,
    link: "https://checkout.stripe.com/c/pay/cs_live_b1sNMjo7OPtNtzLz5V2ubmra6oyIkKAxkKMLPeBT1Xw4UWw6SOKE4Frbkr#fid2cGd2ZndsdXFsamtQa2x0cGBrYHZ2QGtkZ2lgYSc%2FY2RpdmApJ3Zxd2x1YERmZmpwa3EnPydkZmZxWjRUaXFDXE5wXWRDRkFdQWsnKSdkdWxOYHwnPyd1blppbHNgWl13VWJnbEpjNm98Mj1MVlFNYWhid3Z2UjU1MmNDQG9naUgnKSdjd2poVmB3c2B3Jz9xd3BgKSdpZHxqcHFRfHVgJz8naHBpcWxabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
    monthly: true,
  },
  {
    name: "Solo Gi",
    price: 90,
    link: "",
    monthly: true,
  },
  {
    name: "Solo NoGi",
    price: 90,
    link: "",
    monthly: true,
  },
];

export const kids: Plan[] = [
  {
    name: "4 a 7 años",
    price: 75,
    link: "",
    monthly: true,
  },
  {
    name: "8 a 10 años",
    price: 75,
    link: "",
    monthly: true,
  },
  {
    name: "11 a 15 años",
    price: 75,
    link: "",
    monthly: true,
    tagline: "3 días por semana",
  },
  {
    name: "11 a 15 años",
    price: 80,
    link: "",
    monthly: true,
    tagline: "5 días por semana",
  },
];

export const oneTime: Plan[] = [
  {
    name: "clase suelta",
    price: 15,
    link: "",
  },
  {
    name: "pase de día",
    price: 20,
    link: "",
  },
  {
    name: "pase semanal",
    price: 50,
    link: "",
  },
];

export const privateSessions: Plan[] = [
  {
    name: "cinturón marrón",
    price: 70,
    link: "",
    tagline: "1 clase",
  },
  {
    name: "profesor Renzo Martínez",
    price: 80,
    link: "",
    tagline: "1 clase",
  },
  {
    name: "cinturón marrón",
    price: 220,
    link: "",
    tagline: "8 clases",
  },
  {
    name: "profesor Renzo Martínez",
    price: 250,
    link: "",
    tagline: "8 clases",
  },
];
