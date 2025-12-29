// ========================================
// MOBILE MENU TOGGLE
// ========================================
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");

// Toggle mobile menu
mobileMenuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Animate hamburger icon
  if (navMenu.classList.contains("active")) {
    mobileMenuToggle.textContent = "✕";
  } else {
    mobileMenuToggle.textContent = "☰";
  }
});

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    mobileMenuToggle.textContent = "☰";
  });
});

// ========================================
// SMOOTH SCROLLING
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ========================================
// HEADER SCROLL EFFECT
// ========================================
const header = document.getElementById("header");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Add shadow when scrolled
  if (scrollTop > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  lastScrollTop = scrollTop;
});

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // Optional: stop observing after animation
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all fade-in-up elements
const fadeElements = document.querySelectorAll(".fade-in-up");
fadeElements.forEach((element) => {
  observer.observe(element);
});

// ========================================
// STAGGER ANIMATION FOR CARDS
// ========================================
const materialsGrid = document.querySelector(".materials-grid");
if (materialsGrid) {
  const materialCards = materialsGrid.querySelectorAll(".material-card");
  materialCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });
}

const plasticsGrid = document.querySelector(".plastics-grid");
if (plasticsGrid) {
  const plasticCards = plasticsGrid.querySelectorAll(".plastic-card");
  plasticCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
  });
}

const stepsContainer = document.querySelector(".steps-container");
if (stepsContainer) {
  const steps = stepsContainer.querySelectorAll(".step");
  steps.forEach((step, index) => {
    step.style.transitionDelay = `${index * 0.1}s`;
  });
}

// ========================================
// PARALLAX EFFECT FOR HERO
// ========================================
const hero = document.querySelector(".hero");
if (hero) {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const heroContent = hero.querySelector(".hero-content");
    if (heroContent && scrolled < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
      heroContent.style.opacity = 1 - scrolled / 600;
    }
  });
}

// ========================================
// DYNAMIC YEAR IN FOOTER
// ========================================
const updateFooterYear = () => {
  const footer = document.querySelector(".footer p");
  if (footer) {
    const currentYear = new Date().getFullYear();
    footer.textContent = footer.textContent.replace("2025", currentYear);
  }
};

// Call on page load
updateFooterYear();

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Lazy load images if any background images are added later
if ("loading" in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  document.body.appendChild(script);
}

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log(
  "%c♻️ EcoValor - Valorización de Residuos",
  "font-size: 20px; font-weight: bold; color: #4A7C2F;"
);
console.log(
  "%cGracias por visitar nuestro sitio. Juntos construimos un futuro sostenible.",
  "font-size: 14px; color: #7CB342;"
);
