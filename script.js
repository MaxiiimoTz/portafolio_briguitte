// script.js

document.addEventListener("DOMContentLoaded", () => {

  // Fade al aparecer

  const elements = document.querySelectorAll(
    ".sobre, .marcas, .project-section, .social-section"
  );

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";

        }

      });

    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition =
      "all 0.8s ease";

    observer.observe(element);

  });

});