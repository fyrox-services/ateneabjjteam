import { isModalActive, modalContent, modality } from "@/stores";
import type { Modality } from "@/types";

const cardsServices = document.querySelectorAll(".card");
const btnMainCta = document.querySelectorAll(".btn-main-cta");

btnMainCta.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalContent.set("form");
    isModalActive.set(true);
    document.body.classList.add("not-scrollable");
  });
});

cardsServices.forEach((card) => {
  const btnHours = card.querySelector(".btn-hours");

  btnHours?.addEventListener("click", () => {
    const cardElement = card as HTMLElement;

    const modalitySelected = cardElement.dataset.modality as Modality;

    modality.set(modalitySelected);

    isModalActive.set(true);
    modalContent.set("hours");
  });
});
