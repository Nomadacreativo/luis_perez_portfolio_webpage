# Luis Pérez · Inox One | Portafolio Web Oficial

[![Website](https://img.shields.io/badge/Website-luisperez.pro-6231f3?style=for-the-badge&logo=googlechrome&logoColor=white)](https://luisperez.pro/)
[![Design](https://img.shields.io/badge/Aesthetics-Neon%20Tokyo-e6ff84?style=for-the-badge&logo=adobeillustrator&logoColor=black)](DESIGN.md)
[![Deployment](https://img.shields.io/badge/Hosting-Hostinger%20Apache-d946ef?style=for-the-badge&logo=apache&logoColor=white)](.htaccess)

Sitio web y portafolio interactivo de **Luis Pérez (Inox One)**, enfocado en Dirección de Arte, Identidad Visual Audaz, Ilustración Digital y Campañas 360° para marcas contemporáneas.

---

## 🎨 Sistema de Diseño & Estética
- **Tema:** *Neon Tokyo — Retro-Futurismo Glassmorphism*.
- **Paleta de Color:**
  - `Electric Indigo` (`#6231F3`): Tonalidad primaria y acentos de resplandor.
  - `Lime Neon` (`#E6FF84`): Focos de atención visual y estados dinámicos.
  - `Light Titanium` (`#C8C6C5`) & `Cyber Surface` (`#0A0A12` - `#1A1C1C`).
- **Tipografía:** Neulis (Extrabold & Display), Syne, Lexend y Space Grotesk.
- **Efectos:** Glassmorphism multinivel, degradados fluidos, carrusel de marcas con loop infinito y animaciones por CSS nativo.

---

## 🚀 Arquitectura Técnica & Rendimiento
- **Frontend Puro:** HTML5 Semántico + CSS3 Moderno (Variables, Container layouts, Backdrop-filter) + JavaScript ES6+ Vanilla (Cero dependencias pesadas).
- **Optimización de Assets:** Nombres web-safe kebab-case para compatibilidad total con servidores Linux/Apache. Reducción de más del 70% del peso en imágenes clave sin pérdida visual.
- **Navegación Responsive:** Menú flotante ultra-ligero para desktop y cajón desplegable (drawer) con botón hamburguesa para pantallas móviles (<768px).
- **SEO & Social Share:** Metadatos completos Open Graph (Facebook/WhatsApp), Twitter Cards, Canonical URL y `sitemap.xml` estandarizado.

---

## 📂 Estructura del Proyecto

```text
├── index.html          # Documento principal y estructura semántica
├── css/
│   └── style.css       # Sistema de diseño completo, variables y media queries
├── js/
│   └── main.js         # Lógica interactiva (planes, filtros, acordeón FAQ, menú móvil)
├── assets/
│   ├── fonts/          # Tipografías locales
│   └── img/
│       ├── hero-surreal.png  # Arte central 3D
│       ├── logos/            # Identidades y marcas colaboradoras
│       └── projects/         # Casos de estudio (Festival Cerveza, Santana, DIF)
├── .htaccess           # Configuración de Apache para Hostinger (HTTPS, Caché, Gzip, Seguridad)
├── robots.txt          # Directivas de indexación y enlace al sitemap
├── sitemap.xml         # Mapa de sitio canónico
├── DESIGN.md           # Especificación de tokens y diseño
└── README.md           # Documentación técnica
```

---

## 🌐 Despliegue en Hostinger

1. **Subida de Archivos:**
   - Subir todo el contenido de este repositorio directamente al directorio `public_html/` de tu cuenta en Hostinger (mediante Git Deployment de Hostinger, SFTP o el Administrador de Archivos).
2. **Configuración de Apache (.htaccess):**
   - El archivo `.htaccess` incluido activa automáticamente:
     - Forzado de protocolo seguro **HTTPS** y redirección limpia sin `www`.
     - Compresión **Gzip/Deflate** de textos, estilos y scripts.
     - Políticas de caché de navegador (**Expires**) de hasta 1 año para imágenes y fuentes.
     - Cabeceras de protección de seguridad (`X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`).
3. **Certificado SSL:**
   - Asegúrate de tener activado el certificado SSL gratuito de por vida que ofrece Hostinger para `luisperez.pro`.
