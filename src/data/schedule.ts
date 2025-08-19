const sameClasses = {
  nogi7_8: {
    modality: "nogi",
    start: "7:00",
    end: "8:00",
  },
  nogiMorning: {
    modality: "nogi",
    start: "10:30",
    end: "11:30",
  },
  nogiMid: {
    modality: "nogi",
    start: "14:00",
    end: "15:15",
  },
  kimono7_8: {
    modality: "kimono",
    start: "7:00",
    end: "8:00",
  },
  kimonoMorning: {
    modality: "kimono",
    start: "11:30",
    end: "12:30",
  },
  kimonoMid: {
    modality: "kimono",
    start: "14:00",
    end: "15:15",
  },
  kimono_nogi: {
    modality: "kimono/Nogi",
    start: "14:00",
    end: "15:15",
  },
  openSaturday: {
    modality: "Open Mat",
    start: "12:00",
    end: "13:30",
  },
  openFriday: {
    modality: "Open Mat",
    start: "19:15",
    end: "21:00",
  },
  kids4_7: {
    modality: "kids de 4 a 7 años",
    start: "17:15",
    end: "18:00",
  },
  kids3_7: {
    modality: "kids de 3 a 7 años",
    start: "17:15",
    end: "18:00",
  },
  kids8_10: {
    modality: "kids de 8 a 10 años",
    start: "17:15",
    end: "18:00",
  },
  kids11_15: {
    modality: "kids de 11 a 15 años",
    start: "18:00",
    end: "19:15",
  },
  nogiEven: {
    modality: "nogi",
    start: "19:15",
    end: "20:30",
  },
  nogiCompetition: {
    modality: "nogi/competición",
    start: "19:15",
    end: "20:30",
  },
  kimonoEven: {
    modality: "kimono",
    start: "20:30",
    end: "22:00",
  },
  kimonoCompetition: {
    modality: "kimono/competición",
    start: "20:30",
    end: "22:00",
  },
  free: {
    modality: "free",
    start: "-",
    end: "-",
  },
};

export const days = [
  {
    day: "lunes",
    classes: [
      sameClasses.kimono7_8,
      sameClasses.nogiMorning,
      sameClasses.kimonoMorning,
      sameClasses.kimonoMid,
      sameClasses.kids4_7,
      sameClasses.kids11_15,
      sameClasses.nogiEven,
      sameClasses.kimonoEven,
    ],
  },
  {
    day: "martes",
    classes: [
      sameClasses.nogi7_8,
      sameClasses.nogiMorning,
      sameClasses.kimonoMorning,
      sameClasses.nogiMid,
      sameClasses.kids8_10,
      sameClasses.kids11_15,
      sameClasses.nogiCompetition,
      sameClasses.kimonoCompetition,
    ],
  },
  {
    day: "miércoles",
    classes: [
      sameClasses.kimono7_8,
      sameClasses.nogiMorning,
      sameClasses.kimonoMorning,
      sameClasses.kimonoMid,
      sameClasses.kids4_7,
      sameClasses.kids11_15,
      sameClasses.nogiEven,
      sameClasses.kimonoEven,
    ],
  },
  {
    day: "jueves",
    classes: [
      sameClasses.nogi7_8,
      sameClasses.nogiMorning,
      sameClasses.kimonoMorning,
      sameClasses.nogiMid,
      sameClasses.kids8_10,
      sameClasses.kids11_15,
      sameClasses.nogiCompetition,
      sameClasses.kimonoCompetition,
    ],
  },
  {
    day: "viernes",
    classes: [
      sameClasses.free,
      sameClasses.nogiMorning,
      sameClasses.kimonoMorning,
      sameClasses.free,
      sameClasses.kids3_7,
      sameClasses.kids11_15,
      sameClasses.openFriday,
      sameClasses.free,
    ],
  },
  {
    day: "sábado",
    classes: [sameClasses.openSaturday],
  },
];
