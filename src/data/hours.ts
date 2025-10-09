import type { AllHours, Hours } from "@/types";

export const giHours: Hours[] = [
  {
    day: "de lunes a viernes",
    hour: "11:30 - 12:30",
  },
  {
    day: "lunes, miércoles y viernes",
    hour: "14:00 - 15:15",
  },
  {
    day: "lunes y miércoles",
    hour: "20:30 - 22:00",
  },
];

export const nogiHours: Hours[] = [
  {
    day: "de lunes a viernes",
    hour: "10:30 - 11:30",
  },
  {
    day: "martes, jueves y viernes",
    hour: "14:00 - 15:15",
  },
  {
    day: "lunes y miércoles",
    hour: "19:15 - 20:30",
  },
];

export const kidsHours: Hours[] = [
  {
    day: "de lunes a viernes, de 11 a 15 años",
    hour: "18:00 - 19:15",
  },
  {
    day: "lunes, de 4 a 7 años",
    hour: "17:15 - 18:00",
  },
  {
    day: "martes, de 8 a 10 años",
    hour: "17:15 - 18:00",
  },
  {
    day: "miércoles, de 4 a 7 años",
    hour: "17:15 - 18:00",
  },
  {
    day: "jueves, de 8 a 10 años",
    hour: "17:15 - 18:00",
  },
  {
    day: "viernes, de 4 a 7 años",
    hour: "17:15 - 18:00",
  },
];

// para el select del formulario de reservar una clase
export const allHours: AllHours = {
  gi: [
    {
      label: "de lunes a viernes",
      hours: ["11:30 - 12:30"],
    },
    {
      label: "lunes, miércoles y viernes",
      hours: ["14:00 - 15:15"],
    },
    {
      label: "lunes y miércoles",
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
      hours: ["10:30 - 11:30"],
    },

    {
      label: "martes y jueves",
      hours: ["14:00 - 15:15"],
    },
    {
      label: "lunes y miércoles",
      hours: ["19:15 - 20:30"],
    },
  ],
  kids: [
    {
      label: "de 4 a 7 años",
      hours: [
        "lunes, 17:15 - 18:00",
        "miércoles, 17:15 - 18:00",
        "viernes, 17:15 - 18:00",
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
    classes: ["10:30 - 11:30", "19:15 - 20:30"],
  },
  {
    day: "martes",
    color: "var(--secondary-rgb)",
    classes: [
      "7:00 - 8:00",
      "10:30 - 11:30",
      "14:00 - 15:15",
      "19:15 - 20:30 | Competición*",
    ],
  },
  {
    day: "miércoles",
    color: "var(--primary-rgb)",

    classes: ["10:30 - 11:30", "19:15 - 20:30"],
  },
  {
    day: "jueves",
    color: "var(--secondary-rgb)",
    classes: [
      "7:00 - 8:00",
      "10:30 - 11:30",
      "14:00 - 15:15",
      "19:15 - 20:30 | Competición*",
    ],
  },
  {
    day: "viernes",
    color: "var(--black-rgb)",
    classes: ["10:30 - 11:30", "19:15 - 21:00 | Open Mat*"],
  },
  {
    day: "sábado",
    color: "var(--black-rgb)",
    classes: ["12:00 - 13:30 | Open Mat*"],
  },
];
