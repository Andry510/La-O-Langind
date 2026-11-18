// Contenido editable sin tocar componentes.

/**
 * Fotos. `src: null` muestra un espacio reservado con la marca.
 *
 * PROVISIONALES: las fotos actuales de /public/photos son de stock de Unsplash (licencia Unsplash,
 * uso comercial gratuito; ids de origen abajo) y NO son platillos ni instalaciones de La O.
 * Sustituirlas por fotografía propia antes de publicar: reemplazar el archivo con el mismo nombre
 * (WebP, tamaño indicado en `size`). No usar fotos de clientes de Google o Tripadvisor sin licencia.
 */
export type PhotoSlot = { src: string | null; size: string; stock?: boolean };

export const photos = {
  hero: { src: "/photos/hero.webp", size: "1600x2000 (4:5)", stock: true }, // unsplash 1620991565081-82743a5a499c
  "chilaquiles-la-o": { src: "/photos/chilaquiles-la-o.webp", size: "1600x1200 (4:3)", stock: true }, // 1780283210587-29e03acf30d9
  "hotcakes-blueberry": { src: "/photos/hotcakes-blueberry.webp", size: "1200x1200", stock: true }, // 1650134973809-d8c3a2da59ba
  "hotcakes-dubai": { src: "/photos/hotcakes-dubai.webp", size: "1200x1200", stock: true }, // 1641262008879-866da86b9aec
  "cafe-olla": { src: "/photos/cafe-olla.webp", size: "1200x1500 (4:5)", stock: true }, // 1735590624263-1c0e0d24f7de
  mollequiles: { src: "/photos/mollequiles.webp", size: "1200x1200", stock: true }, // 1633372363856-f2fe2669a26e
  interior: { src: "/photos/interior.webp", size: "1600x1200 (4:3)", stock: true }, // 1600093463592-8e36ae95ef56
  terrace: { src: "/photos/terrace.webp", size: "1200x1500 (4:5)", stock: true }, // 1514053026555-49ce8886ae41
  bakery: { src: "/photos/bakery.webp", size: "1200x1200", stock: true }, // 1617859047277-9f47d2bd9696
} satisfies Record<string, PhotoSlot>;

/**
 * Qué espera la pantalla de carga antes de mostrar la página:
 * - "critical": imágenes de la primera pantalla y fuentes (recomendado: no retrasa a quien llega desde Google).
 *   El resto de imágenes aparece con un fundido solo cuando ya cargó.
 * - "all": todas las imágenes de la página (más lento, sobre todo en móvil).
 * En ambos casos hay un tope de seguridad para no bloquear la página si una imagen falla o tarda.
 */
export const loaderConfig = {
  waitFor: "critical" as "critical" | "all",
  maxWaitMs: 4500,
  minVisibleMs: 700,
};

export type PhotoKey = keyof typeof photos;

/** Platillos destacados (ids de lib/menu.ts) en orden de aparición. El primero ocupa la celda grande. */
export const favoriteIds = ["chilaquiles-la-o", "hotcakes-blueberry", "cafe-olla", "mollequiles", "hotcakes-dubai"] as const;

/**
 * Reseñas reales, citadas textualmente (incluidas erratas) desde Google y Tripadvisor (17-nov-2026).
 * TODO: confirmar con el restaurante que desea mostrarlas, o sustituir por un widget oficial.
 */
export const reviews = [
  {
    quote: "El café del olla está espectacular. El mejor que he probado en Playa del Carmen.",
    author: "Ingrid Miranda",
    source: "Tripadvisor",
    date: "nov. 2026",
    lang: "es",
  },
  {
    quote: "Los mollequiles en verdad fueron los mejores del desayuno",
    author: "Malina Hernández",
    source: "Google",
    date: null,
    lang: "es",
  },
  {
    quote: "the pancakes were seriously to die for",
    author: "Jumping W",
    source: "Google",
    date: "Apr 2026",
    lang: "en",
  },
  {
    quote: "Un lugar donde tienen desayunos muy ricos, se llena rápidamente por lo rico que está.",
    author: "Shunashy R",
    source: "Tripadvisor",
    date: "nov. 2026",
    lang: "es",
  },
  {
    quote: "Exelente servicio, la atención de 10, me encanta el concepto fresco y el ambiente relajado",
    author: "Lourdes Elias",
    source: "Google",
    date: null,
    lang: "es",
  },
  {
    quote: "The fresh juices are absolutely incredible",
    author: "Paulo S",
    source: "Google",
    date: "Jun 2026",
    lang: "en",
  },
] as const;

/** Promociones visibles. Poner `false` para ocultarlas cuando dejen de estar vigentes. */
export const promotions = {
  birthday: true,
  catering: true,
};
