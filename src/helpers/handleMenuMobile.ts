const btnMenuMobile = document.getElementById("btn-menu-mobile");
const headerNav = document.getElementById("header-nav");
const businessName = document.getElementById("business-name");

btnMenuMobile?.addEventListener("click", () => {
  btnMenuMobile.classList.toggle("active");
  headerNav?.classList.toggle("active");
  businessName?.classList.toggle("active");
  document.body.classList.toggle("not-scrollable");
});
