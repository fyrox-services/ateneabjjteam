import aitana from "@/assets/coaches/aitana.png";
import renzo from "@/assets/coaches/renzo.png";
import jackson from "@/assets/coaches/jackson.png";
import eibert from "@/assets/coaches/eibert.png";
import type { Coach } from "@/types";

export const coaches: Coach[] = [
  {
    name: "renzo martínez",
    rol: "head coach",
    belt: "negro",
    head: "mathias ribeiro",
    photo: renzo,
    description: [
      "Comenzó a entrenar en su ciudad natal, Caracas, Venezuela, en el año 2010 y desde entonces se ha dedicado 100% al jiu jitsu de competición.",
      "Cuenta con una larga trayectoria deportiva. En 2021, se proclamó campeón de Europa con kimono y sin kimono y se posicionó como número 1 en el ranking mundial AJP en cinturón marrón. En los World Combat Games Riyadh 2023, quedó entre los 7 mejores atletas de Grappling. Además, fue subcampeón de Europa en cinturón negro en el European NoGi Championship 2023 IBJJF.",
      "Renzo es el Head Coach de la academia y responsable de las clases de competición.",
    ],
  },
  {
    name: "Jackson Cariaco",
    belt: "negro",
    rol: "instructor",
    photo: jackson,
    head: "renzo martínez",
    description: [
      "Comenzó a entrenar jiu-jitsu en 2010 en Caracas, Venezuela. En junio de 2024, se unió al equipo Atenea BJJ, donde continúa su formación como cinturón negro, profesor y atleta bajo Renzo Martínez. Ese mismo año, recibió sus primeros grados como instructor. Actualmente, está a cargo de las clases infantiles de entre 4 y 10 años.",
    ],
  },
  {
    name: "aitana moreno",
    belt: "marrón",
    photo: aitana,
    rol: "instructora",
    head: "renzo martínez",
    description: [
      "Empezó a entrenar jiu-jitsu en 2021 y un año después se dedicó profesionalmente como atleta competidora. En octubre de 2023, hizo historia al ser la primera mujer con discapacidad en España en ganar el campeonato mundial de Abu Dhabi World Para Jiu-Jitsu Championship.",
      "Aitana se ha destacado en competiciones para personas con y sin discapacidad, ganando títulos notables en la categoría adulto como el tercer lugar en el campeonato Europeo IBJJF 2024.",
    ],
  },

  {
    name: "eibert rengel",
    belt: "marrón",
    rol: "instructor",
    photo: eibert,
    head: "renzo martínez",
    description: [
      "Es instructor principal de las clases de la mañana con kimono y sin kimono. Comenzó a practicar jiu-jitsu en el año 2016. En el 2023, se proclamó múltiple medallista de Gi y Nogi, a nivel nacional e internacional.",
    ],
  },
  {
    name: "Axhel Molina",
    belt: "marrón",
    rol: "instructor",
    photo: eibert,
    head: "renzo martínez",
    description: [
      "Comenzó a entrenar jiu-jitsu en 2017 y, desde entonces, ha mantenido una actividad competitiva constante. Es uno de los atletas más activos del país, con múltiples medallas tanto en Gi como en Nogi. Entre sus logros más destacados se encuentran el título de campeón de España Nogi por la Federación de Lucha, el subcampeonato europeo en el AJP y el tercer puesto en el Grand Slam de Roma.",
    ],
  },
];
