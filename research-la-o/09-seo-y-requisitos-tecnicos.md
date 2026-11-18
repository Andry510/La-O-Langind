# 09 — SEO y requisitos técnicos

## 1. Investigación de palabras clave

### Método y limitaciones
- **Fuente usada**: sugerencias de autocompletado de Google (`hl=es`, `gl=mx`), consultadas el 17-nov-2026 [S17]. Las sugerencias indican que **hay demanda real** del término, pero **no dan volumen**.
- ⚠️ No se tuvo acceso a Google Keyword Planner, Search Console ni herramientas de pago (Semrush o Ahrefs). **Los volúmenes y la dificultad deben validarse** antes de cerrar el plan de contenidos.

### Sugerencias reales observadas (Google Autocomplete)
| Semilla | Sugerencias relevantes |
|---|---|
| desayunos playa del carmen | mejores desayunos playa del carmen · desayunos … cerca de mí · … mejor valorados · … abierto ahora · … quinta avenida · … a domicilio |
| brunch playa del carmen | brunch dominical playa del carmen · restaurantes brunch playa del carmen · fifty brunch playa del carmen (+ menu) · brunch buffet… |
| breakfast playa del carmen | best breakfast playa del carmen · … near me · cheap breakfast… · vegan breakfast… · … reddit |
| best breakfast playa del carmen | best mexican breakfast… · best healthy breakfast… · best breakfast spots… · best vegan breakfast… |
| chilaquiles playa del carmen | mejores chilaquiles playa del carmen · donde comer chilaquiles en playa del carmen · chilaquiles a domicilio… |
| pancakes playa del carmen | fluffy pancakes playa del carmen · best pancakes playa del carmen |
| la o playa del carmen | **la o playa del carmen menú** (demanda de marca y de su menú) |

### Mapa de palabras clave propuesto 💡
| Intención | Español | Inglés | Dónde atacarla |
|---|---|---|---|
| Marca | la o playa del carmen · la o playa menú · la orgánica playa del carmen | la o playa del carmen menu | `<title>`, H1 de marca, Schema `name` y `alternateName` |
| Genérica principal | desayunos playa del carmen · mejores desayunos playa del carmen · brunch playa del carmen | breakfast playa del carmen · best breakfast playa del carmen · brunch playa del carmen | Título, H1, intro, `servesCuisine` |
| Platillo | chilaquiles playa del carmen · hotcakes playa del carmen · café de olla | best pancakes playa del carmen · mexican breakfast | Menú HTML, sección de favoritos y texto alternativo de imágenes |
| Atributo | desayunos abierto ahora · cerca de mí · pet friendly · vegano | vegan / healthy breakfast · near me | Google Business Profile (principal), iconos de servicios, menú con etiquetas |
| Ubicación | desayunos centro playa del carmen · av 10 / calle 38 · cerca de quinta avenida | breakfast near 5th avenue | Bloque de ubicación con referencias |
| Ocasión | brunch dominical playa del carmen · desayuno de cumpleaños | sunday brunch | Promociones |

💡 Las búsquedas "cerca de mí", "abierto ahora" y "near me" se ganan principalmente en **Google Maps** (perfil, reseñas, proximidad). La web apoya con NAP coherente y Schema, pero no sustituye al perfil.

## 2. Metadatos (borradores)
```html
<!-- ES -->
<title>La O Playa del Carmen | Desayunos y brunch en la Av. 10</title>
<meta name="description" content="Chilaquiles, hotcakes blueberry, café de olla y pan de la casa. Abierto todos los días de 8:00 a 16:00 en Av. 10 entre calles 34 y 38. Reserva por WhatsApp.">
<!-- EN -->
<title>La O Playa del Carmen | Breakfast & Brunch on 10th Avenue</title>
<meta name="description" content="Chilaquiles, blueberry pancakes, café de olla and fresh bakery. Open daily 8am–4pm on Av. 10 between 34th & 38th St. Book via WhatsApp.">
```
- Open Graph y Twitter Card con foto del platillo estrella de 1200×630 (importante: **el enlace se compartirá mucho por WhatsApp**).
- `<link rel="alternate" hreflang="es-MX">`, `hreflang="en"` y `x-default`.
- `canonical` en cada idioma.
- ⚠️ El horario de los metadatos debe salir de **una sola fuente de datos** para evitar inconsistencias.

## 3. Datos estructurados (Schema.org JSON-LD)
Borrador con **solo datos verificados**. Los campos marcados `TODO` requieren confirmación del restaurante.
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://laorestaurante.com/#playa",
  "name": "La O Playa del Carmen",
  "alternateName": ["La O", "La O Playa", "La Orgánica Playa del Carmen"],
  "url": "https://laorestaurante.com/",
  "telephone": "+52-984-209-2549",
  "priceRange": "$200–300 MXN",
  "servesCuisine": ["Mexicana", "Desayunos", "Brunch", "Panadería"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Avenida 10 entre calle 34 y 38, Centro",
    "addressLocality": "Playa del Carmen",
    "addressRegion": "Q.R.",
    "postalCode": "77710",
    "addressCountry": "MX"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 20.6349567, "longitude": -87.0680066 },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "08:00", "closes": "16:00"
  }],
  "acceptsReservations": true,
  "hasMenu": "https://laorestaurante.com/#menu",
  "image": ["TODO: URLs de fotos propias"],
  "sameAs": ["https://www.instagram.com/laoplaya/", "TODO: URL de Facebook", "TODO: URL de Tripadvisor"],
  "logo": "TODO"
}
```
- **No** incluir `aggregateRating` con calificaciones de Google o Tripadvisor: las directrices de Google para reseñas de terceros no permiten marcarlas como propias, y hacerlo puede generar una acción manual. Mostrarlas solo visualmente, con su fuente.
- Si se publica la sucursal de Cancún, debe ir en un `Restaurant` separado con su propio `@id`, y opcionalmente con una `Organization` padre.

## 4. Requisitos técnicos

### Rendimiento (objetivo: Core Web Vitals en "bueno" en móvil 4G)
| Métrica | Objetivo |
|---|---|
| LCP | < 2.5 s (ideal < 1.8 s) |
| CLS | < 0.1 |
| INP | < 200 ms |
| Peso inicial | < 500 KB sin contar imágenes diferidas |

- Imagen del hero en AVIF/WebP, `srcset` responsive, `fetchpriority="high"` y precarga. **Sin vídeo en el hero en móvil** salvo que sea muy ligero (< 1 MB) y tenga póster.
- Resto de imágenes en `loading="lazy"`, con dimensiones explícitas (para evitar CLS).
- **Google Maps diferido**: imagen estática o *facade* con el botón "Ver mapa / Cómo llegar". El iframe solo se carga al hacer clic (ahorra ~500 KB+ de JS de terceros).
- Fuentes autoalojadas, 2 familias como máximo, subconjunto latino.
- **Menú en HTML**: sustituye al PDF de ~10.7 MB como experiencia principal. El PDF queda como descarga opcional, idealmente comprimido por debajo de 2 MB.
- GTM: revisar qué etiquetas carga y evitar scripts que bloqueen el render.

### Mobile first y responsive
- Diseñar a 360–390 px primero.
- Barra de acción fija inferior (WhatsApp · Llamar · Cómo llegar) con `env(safe-area-inset-bottom)`.
- Objetivos táctiles ≥ 44×44 px.
- Pestañas del menú desplazables horizontalmente con *scroll-snap*, sin carruseles automáticos.

### Accesibilidad (WCAG 2.2 AA)
- HTML semántico (`header`, `nav`, `main`, `section` con encabezados jerárquicos, `footer`).
- Contraste: **no usar `#B7D456` (lima) como color de texto sobre crema o blanco**; sobre `#1A5632` sí funciona como acento.
- Texto alternativo descriptivo en fotos de platillos (con nombre del platillo: ayuda también al SEO).
- Navegación por teclado y `:focus-visible`, enlace "Saltar al contenido".
- `prefers-reduced-motion` respetado.
- El estado "Abierto/Cerrado" no puede depender solo del color.
- Precios legibles (no solo dentro de imágenes).

### Internacionalización
- ES (por defecto) y EN como rutas (`/` y `/en/`), no un cambio solo en el cliente, para que ambas se indexen.
- Precios en MXN. 💡 Opcional: aproximación en USD marcada como referencial.

### Integraciones y enlaces
| Elemento | Implementación |
|---|---|
| WhatsApp | `https://wa.me/529842092549?text=<mensaje codificado>` (sin el "1" tras el +52, que es el formato actual de los móviles mexicanos; probar el enlace en un dispositivo antes de publicar) |
| Teléfono | `tel:+529842092549` |
| Cómo llegar | `https://www.google.com/maps/dir/?api=1&destination=La+O+Playa+del+Carmen&destination_place_id=<place_id>` (obtener el `place_id` oficial) |
| Dejar reseña | Enlace "write review" del perfil de Google (lo obtiene el propietario desde GBP) |
| Redes | Instagram @laoplaya, Facebook y Tripadvisor (con `rel="noopener"`) |
| Facturación | Enlace al portal vigente (confirmar proveedor: hay una queja de que no funciona) |

### Seguridad y privacidad
- Sitio estático o casi estático: superficie de ataque mínima. HTTPS con HSTS y cabeceras de seguridad (CSP que permita solo los dominios necesarios: GTM, Maps al hacer clic).
- Si se añade un formulario (catering): validación en el servidor, protección antispam (honeypot o *rate limit*), sin exponer correos en texto plano y con **aviso de privacidad** conforme a la LFPDPPP (México).
- Consentimiento de cookies si GTM carga analítica o publicidad que lo requiera.

### SEO técnico adicional
- `robots.txt` y `sitemap.xml` (hoy dan 404).
- Una URL canónica por idioma. Título, meta y H1 únicos.
- Enlaces reales (`<a href>`) en lugar de `<button>` con JS para la navegación.
- 💡 **Dominio anterior**: valorar comprar `laorganica.mx` (está a la venta) y redirigirlo con 301 a la nueva landing. Así se recupera el posible valor de enlaces y se evita que un tercero lo use con la marca antigua. Es una decisión de coste y beneficio del negocio: no se pudo medir el perfil de enlaces del dominio.

### Stack (a decidir en la fase 2)
- El sitio actual usa **Astro + Tailwind** [S1]. Este repositorio (`la-o-landing`) se inició con **Next.js** (`create-next-app`).
- Ambas opciones sirven para una landing estática de alto rendimiento. Lo decisivo es **dónde se despliega y quién la mantiene**.
- ⚠️ Hay que confirmar con el restaurante quién controla `laorestaurante.com` (DNS y hosting) y si la nueva landing debe **reemplazar** la home sin romper las rutas `/menu/playa/` y `/menu/cancun/`, que probablemente usan los QR de las mesas (mantenerlas o redirigirlas).
