function setupMobileNav() {
  const menuButton = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");

  if (!menuButton || !nav) {
    return;
  }

  const closeMenu = () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

function setupRevealAnimation() {
  const revealItems = document.querySelectorAll(".reveal");
  document.body.classList.add("js-reveal");

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
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
  setupMobileNav();
  setupRevealAnimation();
  setYear();
  setupPaperAccordion();
}

window.setupInteractions = setupInteractions;
