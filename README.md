# ASAOSA - Valorización de Residuos

Sitio web oficial de **ASAOSA**, organización sin fines de lucro enfocada en la valorización de residuos sólidos a través del reciclaje y compostaje en la Península de Osa, Costa Rica.

## Tecnologías Utilizadas

El desarrollo del proyecto emplea las siguientes herramientas y frameworks para garantizar el rendimiento y la escalabilidad:

*   **[Eleventy (11ty)](https://www.11ty.dev/)**: Generador de sitios estáticos (SSG) utilizado para optimizar los tiempos de carga y la entrega de contenido.
*   **[Nunjucks](https://mozilla.github.io/nunjucks/)**: Motor de plantillas que facilita la creación de estructuras modulares y reutilizables.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Marco de trabajo CSS orientado a utilidades para la implementación de un diseño responsivo y moderno.
*   **JavaScript (Vanilla)**: Empleado para la gestión de interactividad y animaciones ligeras con **AOS (Animate On Scroll)**.
*   **Fuentes Nativas (System Fonts)**: Implementación de una pila de fuentes del sistema para eliminar dependencias externas y maximizar el rendimiento de renderizado.
*   **Arquitectura Data-Driven**: Uso de archivos JSON en `src/_data/` para la gestión dinámica de contenidos variables (materiales, rutas, junta directiva, etc.).
*   **Optimización SEO**: Configuración avanzada de metadatos (Open Graph, Twitter Cards), Schema.org (JSON-LD) y generación automática de sitemap.
*   **Accesibilidad**: Cumplimiento de estándares mediante atributos ARIA, roles semánticos y títulos descriptivos en todos los elementos interactivos.

## Comandos de Ejecución

El entorno requiere la presencia de Node.js para la ejecución de los siguientes comandos.

### Instalación de Dependencias

Para instalar los paquetes necesarios definidos en el archivo de configuración:

```bash
npm install
```

### Entorno de Desarrollo

Inicio del servidor local con capacidad de recarga automática en tiempo real:

```bash
npm run dev
```

El acceso local se realiza a través de la dirección `http://localhost:8081`.

### Compilación para Producción

Generación de los archivos estáticos definitivos en el directorio `_site`:

```bash
npm run build
```

## Estructura del Proyecto

*   `src/`: Directorio raíz de los archivos de origen.
    *   `_data/`: Contiene los archivos JSON que alimentan el contenido dinámico del sitio.
    *   `_includes/`: Almacena componentes modulares y plantillas de diseño (layouts).
    *   `assets/`: Recursos estáticos como imágenes, documentos, estilos y scripts.
    *   `index.njk`: Punto de entrada y página principal.
    *   `sobre-nosotros.njk`: Información institucional, misión y visión.
    *   `junta-directiva.njk`: Detalle de los miembros de la organización.
    *   `donacion.njk`: Datos bancarios y mecanismos de contribución financiera.
*   `_site/`: Directorio de salida que contiene la versión compilada lista para su despliegue.

## Licencia

Este proyecto se distribuye bajo los términos de la licencia ISC.
