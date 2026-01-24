import type { AllHours, Hours } from "@/types";

export const giHours: Hours[] = [
  {
    day: "lunes y miércoles",
    hour: "7:00 - 8:00",
  },
  {
    day: "de lunes a viernes",
    hour: "11:30 - 12:45",
  },
  {
    day: "martes y jueves",
    hour: "14:00 - 15:15",
  },
  {
    day: "de lunes a jueves",
    hour: "20:30 - 22:00",
  },
];

export const nogiHours: Hours[] = [
  {
    day: "martes y jueves",
    hour: "7:00 - 8:00",
  },
  {
    day: "de lunes a viernes",
    hour: "10:00 - 11:30",
  },
  {
    day: "lunes y miércoles",
    hour: "14:00 - 15:15",
  },
  {
    day: "de lunes a jueves",
    hour: "19:15 - 20:30",
  },
];

export const kidsHours: Hours[] = [
  {
    day: "de lunes a viernes, de 11 a 15 años",
    hour: "18:00 - 19:15",
  },
  {
    day: "lunes y miércoles, de 4 a 7 años",
    hour: "17:15 - 18:00",
  },
  {
    day: "martes y jueves, de 8 a 10 años",
    hour: "17:15 - 18:00",
  },
  {
    day: "viernes, de 3 a 7 años",
    hour: "18:00 - 19:15",
  },
];

// para el select del formulario de reservar una clase
export const allHours: AllHours = {
  gi: [
    {
      label: "lunes y miércoles",
      hours: ["7:00 - 8:00"],
    },
    {
      label: "de lunes a viernes",
      hours: ["11:30 - 12:45"],
    },
    {
      label: "martes y jueves",
      hours: ["14:00 - 15:15"],
    },
    {
      label: "de lunes a jueves",
      hours: ["20:30 - 22:00"],
    },
  ],
  nogi: [
    {
      label: "martes y jueves",
      hours: ["7:00 - 8:00"],
    },
    {
      label: "de lunes a viernes",
      hours: ["10:00 - 11:30"],
    },
    {
      label: "lunes y miércoles",
      hours: ["14:00 - 15:15"],
    },
    {
      label: "de lunes a jueves",
      hours: ["19:15 - 20:30"],
    },
  ],
  kids: [
    {
      label: "de 4 a 7 años",
      hours: [
        "lunes, 17:15 - 18:00",
        "miércoles, 17:15 - 18:00",
      ],
    },
    {
      label: "de 8 a 10 años",
      hours: ["martes, 17:15 - 18:00", "jueves, 17:15 - 18:00"],
    },
    {
      label: "de 11 a 15 años",
      hours: [
        "lunes, 18:00 - 19:15",
        "martes, 18:00 - 19:15",
        "miércoles, 18:00 - 19:15",
        "jueves, 18:00 - 19:15",
        "viernes, 18:00 - 19:15",
      ],
    },
  ],
};

// Para los horarios de cada página individual

export const grapplingHours = [
  {
    day: "lunes",
    color: "var(--primary-rgb)",
    classes: ["10:00 - 11:30", "14:00 - 15:15", "19:15 - 20:30"],
  },
  {
    day: "martes",
    color: "var(--secondary-rgb)",
    classes: ["7:00 - 8:00", "10:00 - 11:30", "19:15 - 20:30"],
  },
  {
    day: "miércoles",
    color: "var(--primary-rgb)",
    classes: ["10:00 - 11:30", "14:00 - 15:15", "19:15 - 20:30"],
  },
  {
    day: "jueves",
    color: "var(--secondary-rgb)",
    classes: ["7:00 - 8:00", "10:00 - 11:30", "19:15 - 20:30"],
  },
  {
    day: "viernes",
    color: "var(--black-rgb)",
    classes: ["10:00 - 11:30", "19:15 - 20:30 | Open Mat*"],
  },
  {
    day: "sábado",
    color: "var(--black-rgb)",
    classes: ["12:00 - 13:30 | Open Mat*"],
  },
];

export const kimonoHours = [
  {
    day: "lunes",
    color: "var(--primary-rgb)",
    classes: ["7:00 - 8:00", "11:30 - 12:45", "20:30 - 22:00"],
  },
  {
    day: "martes",
    color: "var(--secondary-rgb)",
    classes: ["11:30 - 12:45", "14:00 - 15:15", "20:30 - 22:00"],
  },
  {
    day: "miércoles",
    color: "var(--primary-rgb)",
    classes: ["7:00 - 8:00", "11:30 - 12:45", "20:30 - 22:00"],
  },
  {
    day: "jueves",
    color: "var(--secondary-rgb)",
    classes: ["11:30 - 12:45", "14:00 - 15:15", "20:30 - 22:00"],
  },
  {
    day: "viernes",
    color: "var(--black-rgb)",
    classes: ["11:30 - 12:45"],
  },
  {
    day: "sábado",
    color: "var(--black-rgb)",
    classes: ["12:00 - 13:30 | Open Mat*"],
  },
];

export const infantilHours = [
  {
    day: "lunes",
    color: "var(--primary-rgb)",
    classes: ["4 a 7 años | 17:15 - 18:00", "11 a 15 años | 18:00 - 19:15"],
  },
  {
    day: "martes",
    color: "var(--secondary-rgb)",
    classes: ["8 a 10 años | 17:15 - 18:00", "11 a 15 años | 18:00 - 19:15"],
  },
  {
    day: "miércoles",
    color: "var(--primary-rgb)",
    classes: ["4 a 7 años | 17:15 - 18:00", "11 a 15 años | 18:00 - 19:15"],
  },
  {
    day: "jueves",
    color: "var(--secondary-rgb)",
    classes: ["8 a 10 años | 17:15 - 18:00", "11 a 15 años | 18:00 - 19:15"],
  },
  {
    day: "viernes",
    color: "var(--black-rgb)",
    classes: [
      "3 a 7 años | 18:00 - 19:15",
      "19:15 - 20:30 | Open Mat*",
    ],
  },
  {
    day: "sábado",
    color: "var(--black-rgb)",
    classes: ["12:00 - 13:30 | Open Mat*"],
  },
];
