const headings = document.querySelectorAll(
  "h2[id], h3[id], h4[id], h5[id], h6[id]"
);

const links = document.querySelectorAll(".toc a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      const a = document.querySelector(`.toc a[href="#${entry.target.id}"]`);

      if (entry.isIntersecting) return a?.classList.add("active");

      a?.classList.remove("active");
    });
  },
  {
    rootMargin: "0px 0px -50% 0px", // activa cuando el h2 entra en la parte superior
    threshold: 0.1,
  }
);

headings.forEach((h) => observer.observe(h));
