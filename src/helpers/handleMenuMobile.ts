const btnMenuMobile = document.getElementById("btn-menu-mobile");
const headerNav = document.getElementById("header-nav");
const businessName = document.getElementById("business-name");

function closeMenu() {
  btnMenuMobile?.classList.remove("active");
  headerNav?.classList.remove("active");
  businessName?.classList.remove("active");
  document.body.classList.remove("not-scrollable");
}

btnMenuMobile?.addEventListener("click", () => {
  btnMenuMobile.classList.toggle("active");
  headerNav?.classList.toggle("active");
  businessName?.classList.toggle("active");
  document.body.classList.toggle("not-scrollable");
});

headerNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
