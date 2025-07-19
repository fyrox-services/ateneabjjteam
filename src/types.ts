export type ModalContent = "form" | "hours";
export type Modality = "" | "kimono - gi" | "grappling - nogi" | "niños";
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

export interface Coach {
  name: string;
  belt: string;
  head: string;
  rol: string
  photo: ImageMetadata;
  description: string[];
}

// Forms

export interface AllFormFields {
  name: string;
  email: string;
  phone: string;
  modality: Modality;
  hours: string;
}

interface Schedule {
  label: string;
  hours: string[];
}

export interface AllHours {
  gi: Schedule[];
  nogi: Schedule[];
  kids: Schedule[];
}
