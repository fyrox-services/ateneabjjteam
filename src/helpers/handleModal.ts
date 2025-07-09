import { isModalActive, modalContent } from "@/stores";

const btnMainCta = document.querySelectorAll(".btn-main-cta");
const btnHours = document.querySelectorAll(".btn-hours");

btnMainCta.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalContent.set("form");
    isModalActive.set(true);
    document.body.classList.add('not-scrollable')
  });
});

btnHours.forEach((btn) => {
  btn.addEventListener("click", () => {
    isModalActive.set(true);
    modalContent.set("hours");
  });
});
