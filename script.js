// ========================================
// DATA LOADING AND RENDERING
// ========================================

const renderData = async () => {
  try {
    const response = await fetch('asaosa.json');
    const data = await response.json();

    // 1. Update Contact & SEO
    document.title = `Valorización de Residuos | ${data.informacion_contacto.nombre}`;
    document.getElementById('org-name-nav').textContent = data.informacion_contacto.nombre;
    document.getElementById('hero-title').textContent = "Transformamos Residuos en Valor";
    document.getElementById('hero-desc').textContent = data.informacion_contacto.descripcion;

    const contactDetails = document.getElementById('contact-details');
    const addressLines = data.informacion_contacto.direccion.split(',').map(line => line.trim()).join('<br>');
    
    contactDetails.innerHTML = `
      <div class="contact-item">
        <span class="contact-label">Cédula Jurídica:</span>
        <span class="contact-value">${data.informacion_contacto.cedula_juridica}</span>
      </div>
      <div class="contact-item highlight">
        <span class="contact-label">Gestor Autorizado / Código de registro:</span>
        <span class="contact-value gestor-code">${data.informacion_contacto.gestor_autorizado}</span>
      </div>
      <div class="contact-item">
        <span class="contact-label">Dirección:</span>
        <span class="contact-value address-value">${addressLines}</span>
      </div>
    `;

    document.getElementById('contact-link').href = `mailto:${data.informacion_contacto.correo}`;
    document.getElementById('footer-text').innerHTML = `&copy; ${new Date().getFullYear()} ${data.informacion_contacto.nombre} - ${data.informacion_contacto.descripcion}`;

    // 2. Render Materials
    const materialsContainer = document.querySelector('.materials-grid');
    const materialIcons = {
      papel_carton: "📄",
      plastico_PET: "🍾",
      plastico_HDPE: "🧴",
      aluminio: "🥫",
      hojalata: "🔧",
      chatarra: "⚙️",
      vidrio: "🍷",
      tetrapak: "🧃"
    };

    const materialNames = {
      papel_carton: "Papel y Cartón",
      plastico_PET: "Plástico PET (#1)",
      plastico_HDPE: "Plástico HDPE (#2)",
      aluminio: "Aluminio",
      hojalata: "Hojalata",
      chatarra: "Chatarra",
      vidrio: "Vidrio",
      tetrapak: "Tetrapak"
    };

    materialsContainer.innerHTML = '';
    Object.keys(data.materiales).forEach((key, index) => {
      const card = document.createElement('div');
      card.className = 'material-card fade-in-up';
      card.style.transitionDelay = `${index * 0.1}s`;
      card.innerHTML = `
        <div class="material-icon">${materialIcons[key] || "♻️"}</div>
        <h3>${materialNames[key] || key}</h3>
        <p>${data.materiales[key]}</p>
      `;
      materialsContainer.appendChild(card);
      observer.observe(card); // Re-observe for animation
    });

    // 3. Render Routes
    const routesContainer = document.getElementById('routes-container');
    const dayLabels = {
      martes: "Todos los Martes",
      primer_jueves: "1er Jueves del Mes",
      segundo_jueves: "2do Jueves del Mes",
      tercer_jueves: "3er Jueves del Mes"
    };

    routesContainer.innerHTML = '';
    Object.keys(data.ruta_recoleccion).forEach((day, index) => {
      const card = document.createElement('div');
      card.className = 'route-card fade-in-up';
      card.style.transitionDelay = `${index * 0.1}s`;
      
      let locationsHtml = data.ruta_recoleccion[day].map(loc => `<li>${loc}</li>`).join('');
      
      card.innerHTML = `
        <span class="route-day">${dayLabels[day]}</span>
        <ul class="route-locations">
          ${locationsHtml}
        </ul>
      `;
      routesContainer.appendChild(card);
      observer.observe(card);
    });

    // 4. Render Board
    const boardContainer = document.getElementById('board-container');
    boardContainer.innerHTML = '';
    data.junta_directiva.forEach((member, index) => {
      const card = document.createElement('div');
      card.className = 'board-member-card fade-in-up';
      card.style.transitionDelay = `${index * 0.15}s`;
      card.innerHTML = `
        <div class="member-role">${member.cargo}</div>
        <h3 class="member-name">${member.nombre}</h3>
        <div class="member-info">Representación: ${member.representacion}</div>
        <div class="member-validity">
          Vigencia: ${member.vigencia.inicio} al ${member.vigencia.vencimiento}
        </div>
      `;
      boardContainer.appendChild(card);
      observer.observe(card);
    });

  } catch (error) {
    console.error('Error cargando los datos:', error);
  }
};

// ========================================
// EXISTING UTILITIES (REFACTORED)
// ========================================

const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");

mobileMenuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  mobileMenuToggle.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    mobileMenuToggle.textContent = "☰";
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  });
});

const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderData();
  
  // Stagger static elements
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

  // Observe all static fade-in-up elements
  document.querySelectorAll(".fade-in-up").forEach((element) => {
    observer.observe(element);
  });
});
