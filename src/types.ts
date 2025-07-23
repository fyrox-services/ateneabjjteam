export type ModalContent = "form" | "hours";
export type Modality = "" | "kimono - gi" | "grappling - nogi" | "niños" 
export type Programs = "competición" | "sesiones privadas" | "empresas" | 'discapacidad';

export interface Classes {
  heading: Modality | Programs;
  text: string;
  img: ImageMetadata;
  description: string;
  wa?: string 
}

export interface Hours {
  day: string;
  hour: string;
}

export interface Coach {
  name: string;
  belt: string;
  head: string;
  rol: string;
  photo: ImageMetadata;
  description: string[];
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

export interface Plan {
  name: string;
  price: number;
  link: string;
  monthly?: boolean;
  tagline?: string;
}

export interface Step {
  icon: ImageMetadata;
  name: string;
  description: string;
}

export interface FAQ {
  heading: string;
  text: string[];
}

// Forms

export interface AllFormFields {
  name: string;
  email: string;
  phone: string;
  modality: Modality;
  hours: string;
  msg: string;
  legal: boolean;
}

export type ContactForm = Pick<
  AllFormFields,
  "name" | "email" | "phone" | "msg" | "legal"
>;
