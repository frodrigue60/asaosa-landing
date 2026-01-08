// ========================================
// UTILITIES AND ANIMATIONS
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const navMenu = document.getElementById("navMenu");

  if (mobileMenuToggle && navMenu) {
    const navLinks = navMenu.querySelectorAll("a");

    mobileMenuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      mobileMenuToggle.textContent = navMenu.classList.contains("active")
        ? "✕"
        : "☰";
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        mobileMenuToggle.textContent = "☰";
      });
    });
  }

  // 2. Smooth Scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const header = document.querySelector(".header");
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    });
  });

  // 3. Header Scroll Effect
  const header = document.getElementById("header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // 4. Fade-in Animations (Intersection Observer)
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all fade-in-up elements
  document.querySelectorAll(".fade-in-up").forEach((element) => {
    observer.observe(element);
  });

  // Stagger static elements if they exist
  const plasticsGrid = document.querySelector(".plastics-grid");
  if (plasticsGrid) {
    plasticsGrid.querySelectorAll(".plastic-card").forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.15}s`;
    });
  }

  const stepsContainer = document.querySelector(".steps-container");
  if (stepsContainer) {
    stepsContainer.querySelectorAll(".step").forEach((step, index) => {
      step.style.transitionDelay = `${index * 0.1}s`;
    });
  }

  const materialsGrid = document.querySelector(".materials-grid");
  if (materialsGrid) {
    materialsGrid.querySelectorAll(".material-card").forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.05}s`;
    });
  }
});
