export type ModalContent = "form" | "hours";
export type Modality = "kimono - gi" | "grappling - nogi" | "niños";
export type Programs = "competición" | "sesiones privadas" | "empresas";

export interface Classes {
  heading: Modality | Programs;
  text: string;
  img: ImageMetadata;
  description: string;
}

export interface Hours {
  day: string;
  hour: string;
}
