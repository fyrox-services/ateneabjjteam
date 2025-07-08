const btnMenuMobile = document.getElementById("btn-menu-mobile");
const headerNav = document.getElementById("header-nav");

btnMenuMobile?.addEventListener("click", () => {
  btnMenuMobile.classList.toggle("active");
  headerNav?.classList.toggle("active");
});
