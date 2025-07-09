export type ModalContent = "form" | "hours";
export type Modality = "kimono - gi" | "grappling - nogi" | "niños";

export interface Classes {
  heading: Modality;
  text: string;
  img: ImageMetadata;
  description: string;
}

export interface Hours {
  day: string;
  hour: string;
}
