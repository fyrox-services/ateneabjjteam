import { isModalActive } from "@/stores";

const btnFloatWrap = document.getElementById("btn-float-wrap");
const btnFloatMobile = document.getElementById("btn-float-mobile");
const hiddenBtns = document.getElementById("hidden-btns");
const btnFreeClass = document.getElementById("btn-free-class");
const btnFreeClassDesktop = document.getElementById("btn-free-class-desktop");

btnFloatMobile?.addEventListener("click", (event) => {
  event.stopPropagation();
  hiddenBtns?.classList.toggle("active");
});

document.body.addEventListener("click", () => {
  hiddenBtns?.classList.remove("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight) {
    btnFloatWrap?.classList.add("active");
  } else {
    btnFloatWrap?.classList.remove("active");
  }
});

btnFreeClass?.addEventListener("click", () => {
  isModalActive.set(true);
});

btnFreeClassDesktop?.addEventListener("click", () => {
  isModalActive.set(true);
});
