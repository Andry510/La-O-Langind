# 06 — Auditoría de presencia digital

> Revisión del 17-nov-2026. Leyenda: ✅ verificado · ⚠️ limitación o sin verificar · 💡 recomendación.

## 1. Inventario de canales

| Canal | Estado | Observación clave | Fuente |
|---|---|---|---|
| **Sitio web** laorestaurante.com | Activo, mínimo | Solo selector de menú, sin información del negocio | [S1] |
| **Menú PDF** (S3 AWS) | Activo | ES 10.7 MB (modif. 1-may-2026) · EN 10.8 MB (modif. 28-oct-2026) | [S2][S2b] |
| **Google Business Profile** | Activo, sólido | 4.6★ (1,229), horario, teléfono, web, fotos, "Pedir en línea", atributos completos | [S4] |
| **Instagram** @laoplaya | Activo, frecuente | 9,219 seguidores, 471 publicaciones, publica casi a diario (11 a 17 de nov. de 2026) | [S3] |
| **Facebook** "La O Playa del Carmen" | Existe (enlazado desde Instagram) | ⚠️ Contenido no revisado | [S3] |
| **Tripadvisor** | Activo (gestión del propietario no confirmada) | 4.8 (698), Travellers' Choice 2026. **Teléfono distinto** (+52 984 317 3751) | [S5] |
| **TikTok** | ⚠️ No encontrado | — | [S16] |
| **OpenTable u otra plataforma de reservas** | No encontrado | — | búsquedas [S16] |
| **Apps de entrega** | Google muestra "Pedir en línea". La sucursal de Cancún aparece en Rappi y Uber Eats como "La Orgánica" | ⚠️ Plataforma de Playa no identificada | [S4][S14] |
| **Dominio anterior** laorganica.mx | **A la venta** (estacionado en un marketplace de dominios) | Riesgo reputacional y de SEO | [S12] |
| **Sitio de terceros** la-o-playa-del-carmen.menu-world.com | Existe (devolvió 403 al consultarlo) | ⚠️ No oficial; puede mostrar información desactualizada | [S9] |

## 2. Sitio web actual: auditoría técnica

Revisión de HTML, CSS y cabeceras [S1]:

| Aspecto | Hallazgo | Impacto |
|---|---|---|
| Contenido | La home solo muestra tres botones ("🍳 Desayunos", "🍽️ Comidas", "English Menu") sobre fondo neutro oscuro. `/menu/playa/` muestra "Ver menú" (enlace al PDF) y "English Menu" | ❌ No hay dirección, horario, teléfono, WhatsApp, mapa, fotos, reseñas ni historia |
| `<title>` | "Menú" (home); `/menu/playa/` **sin `<title>`** | ❌ SEO: el título no menciona ni la marca ni la ciudad |
| Meta description y Open Graph | Ausentes | ❌ Fragmentos pobres en Google y vistas previas vacías al compartir por WhatsApp |
| Datos estructurados (Schema.org) | Ausentes | ❌ No hay `Restaurant`/`LocalBusiness` |
| `robots.txt` / `sitemap.xml` | 404 | ⚠️ Menor en un sitio pequeño, pero conviene tenerlos |
| Menú | PDF de **~10.7 MB** alojado en S3, `target="_blank"` | ❌ Muy pesado en móvil con datos. Google no lo indexa como contenido de la web. No es accesible. Difícil de actualizar |
| Sincronía de idiomas | PDF ES de mayo y PDF EN de octubre de 2026 | ⚠️ Riesgo de precios distintos según el idioma |
| Botones de la home | `<button>` sin enlace (navegación por JS) | ⚠️ Los rastreadores no siguen los enlaces. Accesibilidad mejorable |
| Stack | Astro + Tailwind CSS, Google Tag Manager (GTM-MMH424GZ) | ✅ Base técnica moderna y ligera. ✅ Ya hay medición instalada (hay que confirmar qué mide) |
| Idioma | `lang="es"`, con PDF EN aparte | ⚠️ No hay versión web en inglés ni `hreflang` |
| Rutas | `/menu/playa/`, `/menu/playa/en` (301), `/menu/cancun/` | ✅ Ya contempla multisucursal |

💡 **Diagnóstico**: hoy el sitio funciona como **destino de un código QR de mesa**, no como landing de captación. Para quien llega desde Google, la web no responde ninguna pregunta clave (¿dónde?, ¿a qué hora?, ¿cómo reservo?, ¿cómo es?).

## 3. Google Business Profile: el canal más fuerte
- ✅ Completo: categoría, horario detallado (desayunos y comidas por separado), teléfono, web, plus code, atributos (accesibilidad, mascotas, wifi, pagos, ambiente), "Pedir en línea" y fotos del propietario.
- ⚠️ **Inconsistencias que corregir**:
  1. Google marca alcohol (cerveza, vino, cócteles) y el menú de mayo de 2026 no lo incluye.
  2. El enlace "Menú" apunta a laorestaurante.com, que obliga a un clic extra y a un PDF pesado.
  3. **No hay "Reservar" en Google.** La Cueva del Chango sí tiene "Buscar mesa".
- 💡 La landing debe **reforzar** el perfil de Google, no competir con él: mismos datos NAP (nombre, dirección, teléfono), enlace a "Cómo llegar" y botón para dejar reseña.

## 4. Instagram
- ✅ **Fortalezas**:
  - Frecuencia alta.
  - Tono propio y humor local.
  - Promociones claras (cumpleaños, aniversario).
  - CTA de reservas con WhatsApp en cada publicación.
  - Historias destacadas organizadas por categoría.
- ⚠️ **Debilidades observadas**:
  - Estilo gráfico heterogéneo: tipografías y colores variados sin sistema.
  - Bio con horario, pero **sin enlace a la web** visible en el texto extraído.
  - El número aparece como "+52 1 984…": el formato antiguo con "1" funciona en WhatsApp, pero no es el formato E.164 recomendado (+52 984…).
- ⚠️ **Limitación**: no se pudo evaluar visualmente la calidad fotográfica en alta resolución (las capturas del navegador fallaron).

## 5. Consistencia de datos NAP

| Dato | Google | Instagram | Tripadvisor | Web |
|---|---|---|---|---|
| Nombre | La O | La O Playa del Carmen | La O Playa del Carmen (alias La Orgánica) | — (no aparece en el texto) |
| Dirección | Av. 10 entre 34 y 38, Centro, 77710 | Av. 10 entre calle 34 y 38 | Avenida 10 entre Calle 34 y 38, 77710 | ❌ Ausente |
| Teléfono | 984 209 2549 | +52 1 984 209 2549 | **+52 984 317 3751** ❌ | ❌ Ausente |
| Horario | 8–16 diario | 8:00–16:00 | ⚠️ variable | ❌ Ausente |

💡 Corregir el teléfono en Tripadvisor (si el +52 984 317 3751 ya no se usa) y publicar los datos NAP en la web con Schema.org.

## 6. Presencia en buscadores (observaciones)
- ✅ Al buscar la marca, Google Maps muestra la ficha. Hay sugerencias de autocompletado para "la o playa del carmen" y "la o playa del carmen menú" [S17]: **hay demanda de búsqueda de marca y de su menú**.
- ⚠️ En la búsqueda web genérica (el motor de búsqueda usado para esta investigación), "La O" se confunde con otros negocios ("Oh Lala", "La Orgánica" Cancún, etc.). El nombre corto es **ambiguo**, y por eso es crítico tener una web con la entidad bien definida (Schema, títulos con "La O Playa del Carmen").
- ⚠️ No se midieron posiciones en Google para términos genéricos ("desayunos playa del carmen"). Requiere Search Console o una herramienta SEO.

## 7. Qué falta y qué resuelve la landing 💡
| Falta hoy | Solución en la landing |
|---|---|
| Información básica (dónde, cuándo, cómo) | Hero y bloque de información con horario, dirección, mapa y botones |
| Menú rápido y buscable | Menú HTML por categorías, ES/EN, con precios y etiquetas dietéticas (PDF como respaldo) |
| Reserva simple | WhatsApp con mensaje prellenado y llamada; más adelante, una plataforma con integración en Google |
| Fotos que vendan | Galería optimizada (AVIF/WebP) con fotos propias |
| Confianza | Calificaciones con fuente, premio Travellers' Choice, reseñas reales |
| Historia | Sección "De La Orgánica a La O" (si el restaurante quiere contarla) |
| Catering y eventos | Bloque con CTA a WhatsApp o formulario |
| Facturación | Enlace al portal de facturación funcional (confirmar proveedor) |
| SEO local | Títulos y metas, Schema `Restaurant`, `hreflang`, sitemap, OG |
| Dominio anterior a la venta | Valorar recuperar laorganica.mx y redirigirlo con 301 (decisión de negocio) |
