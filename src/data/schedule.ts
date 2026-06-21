export interface ScheduleDay {
  day: string;
  classes: {
    modality: string;
    start: string;
    end: string;
  }[];
}

// ─── HORARIO NORMAL ───────────────────────────────────────────────────────────

const normal = {
  nogi7_8: { modality: "nogi", start: "7:00", end: "8:00" },
  nogiMorning: { modality: "nogi", start: "10:00", end: "11:30" },
  nogiMid: { modality: "nogi", start: "14:00", end: "15:15" },
  kimono7_8: { modality: "kimono", start: "7:00", end: "8:00" },
  kimonoMorning: { modality: "kimono", start: "11:30", end: "12:45" },
  kimonoMid: { modality: "kimono", start: "14:00", end: "15:15" },
  kids4_7: { modality: "kids de 4 a 7 años", start: "17:15", end: "18:00" },
  kids3_7: { modality: "kids de 3 a 7 años", start: "17:15", end: "18:00" },
  kids8_15: { modality: "kids de 8 a 15 años", start: "18:00", end: "19:15" },
  kids8_10: { modality: "kids de 8 a 10 años", start: "17:15", end: "18:00" },
  kids11_15: { modality: "kids de 11 a 15 años", start: "18:00", end: "19:15" },
  nogiEven: { modality: "nogi", start: "19:15", end: "20:30" },
  kimonoEven: { modality: "kimono", start: "20:30", end: "22:00" },
  openFriday: { modality: "Open Mat", start: "19:15", end: "20:30" },
  openSaturday: { modality: "Open Mat", start: "12:00", end: "13:30" },
  free: { modality: "free", start: "-", end: "-" },
};

export const days: ScheduleDay[] = [
  {
    day: "lunes",
    classes: [
      normal.kimono7_8,
      normal.nogiMorning,
      normal.kimonoMorning,
      normal.nogiMid,
      normal.kids4_7,
      normal.kids11_15,
      normal.nogiEven,
      normal.kimonoEven,
    ],
  },
  {
    day: "martes",
    classes: [
      normal.nogi7_8,
      normal.nogiMorning,
      normal.kimonoMorning,
      normal.kimonoMid,
      normal.kids8_10,
      normal.kids11_15,
      normal.nogiEven,
      normal.kimonoEven,
    ],
  },
  {
    day: "miércoles",
    classes: [
      normal.kimono7_8,
      normal.nogiMorning,
      normal.kimonoMorning,
      normal.nogiMid,
      normal.kids4_7,
      normal.kids11_15,
      normal.nogiEven,
      normal.kimonoEven,
    ],
  },
  {
    day: "jueves",
    classes: [
      normal.nogi7_8,
      normal.nogiMorning,
      normal.kimonoMorning,
      normal.kimonoMid,
      normal.kids8_10,
      normal.kids11_15,
      normal.nogiEven,
      normal.kimonoEven,
    ],
  },
  {
    day: "viernes",
    classes: [
      normal.free,
      normal.nogiMorning,
      normal.kimonoMorning,
      normal.free,
      normal.kids3_7,
      normal.kids8_15,
      normal.openFriday,
      normal.free,
    ],
  },
  {
    day: "sábado",
    classes: [normal.openSaturday],
  },
];

// ─── HORARIO VERANO (22 jun – 28 ago) ────────────────────────────────────────

const verano = {
  nogi7_8: { modality: "nogi", start: "7:00", end: "8:00" },
  kimono7_8: { modality: "kimono", start: "7:00", end: "8:00" },
  nogiKimonoMorning: { modality: "nogi/kimono", start: "10:30", end: "12:00" },
  nogiMid: { modality: "nogi", start: "14:00", end: "15:15" },
  kids: { modality: "kids", start: "17:15", end: "18:00" },
  nogiEven: { modality: "nogi", start: "18:00", end: "19:15" },
  kimonoEven: { modality: "kimono", start: "18:00", end: "19:15" },
  nogiLate: { modality: "nogi", start: "19:15", end: "20:30" },
  kimonoLate: { modality: "kimono", start: "19:15", end: "20:30" },
  kimonoNight: { modality: "kimono", start: "20:30", end: "22:00" },
  openFriday: { modality: "Open Mat", start: "18:00", end: "19:30" },
  openSaturday: { modality: "Open Mat", start: "11:00", end: "12:30" },
  free: { modality: "free", start: "-", end: "-" },
};

export const daysVerano: ScheduleDay[] = [
  {
    day: "lunes",
    classes: [
      verano.kimono7_8,
      verano.nogiKimonoMorning,
      verano.nogiMid,
      verano.kids,
      verano.nogiEven,
      verano.kimonoLate,
      verano.free,
    ],
  },
  {
    day: "martes",
    classes: [
      verano.nogi7_8,
      verano.nogiKimonoMorning,
      verano.free,
      verano.kids,
      verano.kimonoEven,
      verano.nogiLate,
      verano.kimonoNight,
    ],
  },
  {
    day: "miércoles",
    classes: [
      verano.kimono7_8,
      verano.nogiKimonoMorning,
      verano.nogiMid,
      verano.kids,
      verano.nogiEven,
      verano.kimonoLate,
      verano.free,
    ],
  },
  {
    day: "jueves",
    classes: [
      verano.nogi7_8,
      verano.nogiKimonoMorning,
      verano.free,
      verano.kids,
      verano.kimonoEven,
      verano.nogiLate,
      verano.kimonoNight,
    ],
  },
  {
    day: "viernes",
    classes: [
      verano.free,
      verano.nogiKimonoMorning,
      verano.free,
      verano.kids,
      verano.openFriday,
      verano.free,
      verano.free,
    ],
  },
  {
    day: "sábado",
    classes: [verano.openSaturday],
  },
];
