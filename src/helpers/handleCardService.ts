const card = document.querySelectorAll(".card");

card.forEach((card) => {
  const btnMoreInfo = card.querySelector(".btn-more-info");
  const cardBack = card.querySelector(".card-back");

  btnMoreInfo?.addEventListener("click", () => {
    card?.classList.toggle("flip");
  });

  cardBack?.addEventListener("click", () => {
    card?.classList.toggle("flip");
  });
});
