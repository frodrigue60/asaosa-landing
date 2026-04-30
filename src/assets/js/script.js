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
      navMenu.classList.toggle("hidden");
      const icon = mobileMenuToggle.querySelector(".material-symbols-outlined");
    if (icon) {
      icon.textContent = navMenu.classList.contains("hidden")
        ? "menu"
        : "close";
    }
    // Accessibility: reflect state in aria-expanded
    const isHidden = navMenu.classList.contains("hidden");
    mobileMenuToggle.setAttribute("aria-expanded", String(!isHidden));
    // Accessibility: reflect state in aria-expanded
    const isHidden = navMenu.classList.contains("hidden");
    mobileMenuToggle.setAttribute("aria-expanded", String(!isHidden));
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.add("hidden");
        const icon = mobileMenuToggle.querySelector(
          ".material-symbols-outlined",
        );
        if (icon) {
          icon.textContent = "menu";
        }
        mobileMenuToggle.setAttribute("aria-expanded", "false");
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
});
