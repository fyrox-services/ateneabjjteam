import { isModalActive, modalContent, modality } from "@/stores";
import type { Modality } from "@/types";

const cardsServices = document.querySelectorAll(".card");
const btnMainCta = document.querySelectorAll(".btn-main-cta");

function setModality(card: HTMLElement) {
  const cardElement = card as HTMLElement;
  const modalitySelected = cardElement.dataset.modality as Modality;
  modality.set(modalitySelected);
}

function openModal() {
  isModalActive.set(true);
  document.body.classList.add("not-scrollable");
}

// Lógica para los cta generales
btnMainCta.forEach((btn) => {
  btn.addEventListener("click", openModal);
});


// Lógica para la modal
cardsServices.forEach((card) => {
  const btnHours = card.querySelector(".btn-hours");
  const btnMainCta = card.querySelector(".btn-free-class");

  btnMainCta?.addEventListener("click", () => {
    setModality(card as HTMLElement);
    modalContent.set("form");
    openModal();
  });

  btnHours?.addEventListener("click", () => {
    setModality(card as HTMLElement);
    modalContent.set("hours");
    openModal();
  });
});
