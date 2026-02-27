function setupMobileNav() {
  const menuButton = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");

  if (!menuButton || !nav) {
    return;
  }

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

function setupRevealAnimation() {
  const revealItems = document.querySelectorAll(".reveal");
  document.body.classList.add("js-reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

function setupPaperAccordion() {
  const accordions = Array.from(document.querySelectorAll(".paper-accordion"));
  if (accordions.length === 0) {
    return;
  }

  // Keep a single paper expanded to avoid long stacked PDF embeds.
  accordions.forEach((accordion) => {
    accordion.addEventListener("toggle", () => {
      if (!accordion.open) {
        return;
      }

      accordions.forEach((other) => {
        if (other !== accordion) {
          other.open = false;
        }
      });
    });
  });
}

function setupInteractions() {
  // Centralized client-side behavior setup.
  setupMobileNav();
  setupRevealAnimation();
  setYear();
  setupPaperAccordion();
}

window.setupInteractions = setupInteractions;

