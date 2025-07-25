const headings = document.querySelectorAll(
  "h2[id], h3[id], h4[id], h5[id], h6[id]"
);

const links = document.querySelectorAll(".toc a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      const a = document.querySelector(`.toc a[href="#${entry.target.id}"]`);

      const next = headings[i + 1] || null;

      // a?.classList.remove("active");

        console.log(`Heading actual: ${entry.target.id}, siguiente: ${next?.id}`);

      if (entry.isIntersecting === entry.isIntersecting.valueOf()) {
        // a?.classList.add("active");
        // TODO: HACER QUE NO SE ACTIVE EL SIGUIENTE HASTA QUE APAREZCA Y QUE EL ACTUAL NO SE DESACTIVE
      }

      // a?.classList.remove("active");
    });
  },
  {
    rootMargin: "0px 0px -50% 0px", // activa cuando el h2 entra en la parte superior
    threshold: 0.1,
  }
);

headings.forEach((h) => observer.observe(h));
