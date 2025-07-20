const ulFaqs = document.querySelectorAll(".ul-faqs");

ulFaqs.forEach((ul) => {
  const items = ul?.querySelectorAll("li");

  items?.forEach((item) => {
    const header = item.querySelector("header");
    const p = item.querySelector("p");

    if (!header) return;

    const headerHeight = header.scrollHeight;
    const fullHeight = item.scrollHeight;

    // Establecer altura inicial
    const isInitiallyActive = item.classList.contains("active");
    item.style.height = isInitiallyActive
      ? `${fullHeight}px`
      : `${headerHeight}px`;
    item.style.overflow = "hidden";

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      const expandedHeight = item.scrollHeight;
      const collapsedHeight = header.scrollHeight;

      // Altura final: al contrario del estado actual
      const fromHeight = isActive ? expandedHeight : collapsedHeight;
      const toHeight = isActive ? collapsedHeight : expandedHeight;

      item.animate(
        [{ height: `${fromHeight}px` }, { height: `${toHeight}px` }],
        {
          duration: 500,
          fill: "forwards",
          easing: "ease",
        }
      );

      p?.animate(
        [{ opacity: isActive ? 1 : 0 }, { opacity: isActive ? 0 : 1 }],
        {
          duration: 500,
          fill: "forwards",
          easing: "ease",
        }
      );

      item.classList.toggle("active");
    });
  });
});
