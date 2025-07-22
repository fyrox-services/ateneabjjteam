const sameClasses = {
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
    modality: "alfombra abierta",
    start: "12:00",
    end: "13:30",
  },
  openFriday: {
    modality: "alfombra abierta",
    start: "19:15",
    end: "21:00",
  },
  kids4_7: {
    modality: "niños de 4 a 7 años",
    start: "17:15",
    end: "18:00",
  },
  kids8_10: {
    modality: "niños de 8 a 10 años",
    start: "17:15",
    end: "18:00",
  },
  kids11_15: {
    modality: "niños de 11 a 15 años",
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
    name: "lunes",
    classes: [
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
    name: "martes",
    classes: [
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
    name: "miércoles",
    classes: [
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
    name: "jueves",
    classes: [
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
    name: "viernes",
    classes: [
      sameClasses.nogiMorning,
      sameClasses.kimonoMorning,
      sameClasses.kimono_nogi,
      sameClasses.kids4_7,
      sameClasses.kids11_15,
      sameClasses.openFriday,
      sameClasses.free
    ],
  },
  {
    name: "sábado",
    classes: [sameClasses.openSaturday],
  },
];
