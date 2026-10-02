# Cronos Relojería — Landing Page Boutique

Landing page de una sola página para una relojería boutique de alta gama ficticia basada en San José, Costa Rica. Diseñada con estándares de rendimiento editorial, alta conversión a WhatsApp y arquitectura desacoplada para funcionar como pieza de portafolio y plantilla reutilizable.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Astro 5](https://astro.build/) (Compilación 100% estática SSG, cero JS innecesario).
- **Estilos:** [Tailwind CSS 4](https://tailwindcss.com/) vía `@tailwindcss/vite` con tokens centralizados `@theme`.
- **Tipografía:** Self-hosted con `@fontsource` (*Cormorant Garamond 600* para titulares editoriales e *Inter 400/500* para UI y lectura).
- **Optimización de Medios:** Componentes nativos `<Picture />` e `<Image />` de Astro (conversión automática a WebP/AVIF y srcset responsivo).
- **Lenguaje:** TypeScript estricto.

---

## 🚀 Inicio Rápido

### Requisitos
- Node.js `>= 22.12.0`
- Administrador de paquetes `npm`

### Instalación y Ejecución
```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Servidor en segundo plano (regla AGENTS.md)
npx astro dev --background

# Compilar para producción
npm run build

# Previsualizar build estático
npm run preview
```

---

## 📂 Estructura del Proyecto

```text
cronos-relojeria/
├── public/                 # Archivos estáticos (favicon.svg, robots.txt)
├── src/
│   ├── assets/             # Imágenes maestras (hero-watch.jpg, authenticity.jpg)
│   │   └── watches/        # Catálogo de imágenes de piezas (watch-01 a watch-08)
│   ├── components/
│   │   ├── layout/         # Header sticky, MobileMenu accesible y Footer
│   │   ├── sections/       # Hero, TrustBar, Catalog, Brands, Authenticity, Testimonials, Location, Faq, FinalCta
│   │   └── ui/             # Button, SectionHeading, Badge, Reveal, WatchCard, WhatsappFab
│   ├── data/               # Capa de datos desacoplada (site, watches, brands, faq, testimonials)
│   ├── layouts/            # BaseLayout.astro (SEO, OpenGraph, JSON-LD Store, a11y)
│   ├── pages/              # index.astro y 404.astro
│   ├── styles/             # global.css (tokens de color, fuentes y utilidades)
│   ├── types/              # Barrel export de interfaces TypeScript
│   └── utils/              # format.ts (Intl CRC) y whatsapp.ts (constructor tipado de URLs)
├── astro.config.mjs        # Configuración de Astro y plugin Vite de Tailwind 4
├── package.json
└── tsconfig.json
```

---

## 🔄 Cómo Adaptar la Plantilla a Otro Cliente

Toda la lógica de negocio, catálogo y configuración está completamente aislada en [`src/data/`](src/data/). Para personalizar el sitio para una nueva joyería o negocio:

1. **Datos del Negocio ([`src/data/site.ts`](src/data/site.ts))**:
   - Cambie nombre, eslogan, teléfonos, WhatsApp (`whatsapp`), enlaces a redes (`instagram`), dirección física y horarios estructurados.
2. **Catálogo de Productos ([`src/data/watches.ts`](src/data/watches.ts))**:
   - Reemplace las imágenes en `src/assets/watches/` y actualice el arreglo de piezas (marca, modelo, categoría, precio, especificaciones y badges).
3. **Casas y Marcas ([`src/data/brands.ts`](src/data/brands.ts))**:
   - Modifique los nombres y procedencias de los fabricantes asociados.
4. **Preguntas Frecuentes y Garantías ([`src/data/faq.ts`](src/data/faq.ts))**:
   - Ajuste las políticas de pago, entregas locales (ej. GAM / SINPE Móvil) y garantías.
5. **Testimonios ([`src/data/testimonials.ts`](src/data/testimonials.ts))**:
   - Inserte reseñas reales de clientes verificados.

---

## ♿ Accesibilidad y Rendimiento

- **WCAG AA Compliant:** Contraste tipográfico verificado en fondos oscuros (`#0A0A0B`), `focus-visible` con anillo dorado de 2px y áreas táctiles ≥ 44x44px.
- **Progressive Enhancement:** El catálogo y acordeón FAQ funcionan al 100% incluso sin JavaScript habilitado en el navegador.
- **Respeto a Preferencias del Usuario:** Transiciones y microanimaciones desactivadas automáticamente ante `prefers-reduced-motion: reduce`.
- **Zero Heavy JS:** Bundle de JavaScript cliente menor a 5 KB inlined (sin dependencias pesadas de runtime).
