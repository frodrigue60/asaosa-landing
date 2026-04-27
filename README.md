# ASAOSA - Valorización de Residuos

Sitio web oficial de **ASAOSA**, una organización sin fines de lucro dedicada a la valorización de residuos sólidos mediante el reciclaje y el compostaje en la Península de Osa, Costa Rica.

## 🚀 Tecnologías Usadas

Este proyecto está construido con un enfoque moderno y de alto rendimiento utilizando:

*   **[Eleventy (11ty)](https://www.11ty.dev/)**: Generador de sitios estáticos (SSG) para una velocidad de carga óptima.
*   **[Nunjucks](https://mozilla.github.io/nunjucks/)**: Motor de plantillas para la estructura del sitio.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS para un diseño responsivo y moderno (implementado vía CDN con configuración personalizada).
*   **Vanilla JavaScript**: Para interactividad ligera y animaciones.
*   **Google Fonts**: Tipografías Inter y Poppins.

## 🛠️ Comandos de Uso

Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu sistema antes de comenzar.

### 1. Instalación de dependencias

```bash
npm install
```

### 2. Desarrollo (Servidor local)

Ejecuta el servidor de desarrollo con recarga en vivo (browser-sync):

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:8081` (o el puerto que se indique en la terminal).

### 3. Compilación para producción

Genera los archivos estáticos finales en la carpeta `_site`:

```bash
npm run build
```

## 📁 Estructura del Proyecto

*   `src/`: Archivos fuente del proyecto.
    *   `_includes/`: Componentes reutilizables y layouts.
    *   `assets/`: Imágenes, documentos, CSS y scripts globales.
    *   `index.njk`: Página de inicio.
    *   `sobre-nosotros.njk`: Información sobre la misión y visión.
    *   `junta-directiva.njk`: Miembros de la organización.
    *   `donacion.njk`: Información bancaria y canales de apoyo.
*   `_site/`: Directorio generado con el sitio listo para desplegar.

## 📄 Licencia

Este proyecto está bajo la licencia ISC.
