const btnFloatWrap = document.getElementById("btn-float-wrap");
const btnFloatMobile = document.getElementById("btn-float-mobile");
const hiddenBtns = document.getElementById("hidden-btns");

btnFloatMobile?.addEventListener("click", (event) => {
  event.stopPropagation();
  hiddenBtns?.classList.toggle("active");
});

document.body.addEventListener("click", () => {
  hiddenBtns?.classList.remove("active");
});

window.addEventListener("scroll", (event) => {
  if (window.scrollY >= window.innerHeight) {
    btnFloatWrap?.classList.add("active");
  } else {
    btnFloatWrap?.classList.remove("active");
  }
});
