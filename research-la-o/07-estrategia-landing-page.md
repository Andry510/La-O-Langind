# 07 — Estrategia para la landing page

> Todo este documento es **propuesta** (💡), basada en los hallazgos de los documentos 01–06. Los textos de ejemplo son borradores para validar con el restaurante.

## 1. Posicionamiento

### Cómo presentar La O
**El desayuno y brunch favorito de Playa del Carmen**: cocina mexicana de desayuno hecha con cariño, hotcakes y panadería de la casa, en un espacio fresco (literalmente, con aire acondicionado) y con un servicio que la gente recuerda por su nombre.

Lo que **no** debe ser: un restaurante de lujo o *fine dining*. Contradice el precio ($200–300), el tono de marca ("come deli", humor local) y lo que valoran las reseñas. La "alta calidad" se comunica con **fotografía excelente, frescura y cuidado del detalle**, no con lenguaje de lujo.

### Propuesta de valor principal
> **"Desayunos y brunch que se vuelven tu favorito"**: chilaquiles La O, hotcakes blueberry, café de olla y pan de la casa, todos los días de 8:00 a 16:00 en la Av. 10.

Se apoya en la propia frase del restaurante: *"En Playa hay muchos lugares para comer, pero solo uno se convierte en tu favorito"* [S3].

### Los primeros 5 segundos (encima del pliegue, en móvil)
El usuario debe saber, sin hacer scroll:
1. **Qué es**: desayunos, brunch y comidas.
2. **Por qué confiar**: 4.8★ en Tripadvisor · Travellers' Choice 2026.
3. **Si está abierto**: estado "Abierto ahora · hasta 16:00" calculado en zona horaria America/Cancun.
4. **Qué hacer**: botón **Reservar por WhatsApp** (primario) y **Ver menú** (secundario).

Hero de ejemplo:
- **H1**: "Desayunos y brunch en Playa del Carmen"
- **Subtítulo**: "Chilaquiles, hotcakes y pan de la casa en la Av. 10. Todos los días de 8:00 a 16:00."
- **Fila de confianza**: ★ 4.8 Tripadvisor · Travellers' Choice 2026 · +1,200 reseñas en Google

### Emociones que debe generar
Antojo (fotografía cercana y apetitosa) → calidez (gente, staff, tono cercano) → frescura (verde, luz, aire acondicionado) → confianza (reseñas reales, datos claros) → facilidad (un toque para reservar o llegar).

## 2. Arquitectura de información

Orden recomendado (una sola página con anclas). ✔ = imprescindible · ○ = opcional, según los materiales disponibles.

| # | Sección | Contenido | Prioridad |
|---|---|---|---|
| 0 | **Barra superior y barra fija inferior en móvil** | Logotipo · ES/EN · [Reservar]. En móvil, barra inferior fija: **WhatsApp · Llamar · Cómo llegar** | ✔ |
| 1 | **Hero** | Foto o vídeo corto (≤ 6 s, sin audio, con póster) del platillo estrella o del salón · H1 · fila de confianza · estado abierto/cerrado · 2 CTA | ✔ |
| 2 | **Favoritos de la casa** | 4–6 platillos ancla con foto, descripción corta y precio (Chilaquiles La O, Hotcakes blueberry, Hotcakes Dubai, Café de olla, Mollequiles, Pinky matcha) | ✔ |
| 3 | **Concepto y experiencia** | 2–3 líneas sobre la marca + iconos: ❄️ Salón con aire acondicionado · 🌿 Terraza · 🐶 Pet friendly · 📶 Wifi · 👨‍👩‍👧 Menú infantil · ♿ Accesible | ✔ |
| 4 | **Menú** | Menú HTML con pestañas (Desayunos · Comidas · Bebidas · Panadería), búsqueda o filtro dietético, precios y enlace al PDF como respaldo | ✔ |
| 5 | **Reseñas y reputación** | Calificaciones con logotipo y enlace a la fuente + 3–6 reseñas reales con nombre y fecha. CTA "Déjanos tu reseña" | ✔ |
| 6 | **Galería y ambiente** | 6–10 fotos (platillos, salón, terraza, panadería, equipo) | ✔ (si hay fotos de calidad) |
| 7 | **Promociones vigentes** | Cumpleañero come gratis (con condiciones textuales) y la promo del mes | ○ |
| 8 | **Nuestra historia** | De La Orgánica a La O, 4 años en Playa, sucursal en Cancún | ○ (si el restaurante quiere contarla) |
| 9 | **Catering y eventos** | Coffee break y catering con CTA a WhatsApp | ○ |
| 10 | **Ubicación y horario** | Mapa (carga diferida), dirección, referencias, estacionamiento de pago en la calle, horario por servicio, botón "Cómo llegar" | ✔ |
| 11 | **CTA final** | "Te guardamos mesa" + WhatsApp + llamar | ✔ |
| 12 | **Pie** | NAP, redes, facturación, otra sucursal (Cancún), aviso de privacidad | ✔ |

> Sobre la lista propuesta en el brief: "Presentación" y "Concepto" se fusionan (3), igual que "Ambiente" y "Galería" (6), para reducir el scroll en móvil. "Información de contacto" vive en la barra fija, en la sección 10 y en el pie.

## 3. Conversión

### Acción principal
- **Primaria**: iniciar una reserva por **WhatsApp** (`https://wa.me/529842092549?text=…`) con mensaje prellenado: "Hola, quiero reservar en La O Playa para __ personas el __ a las __".
- **Secundarias**: "Cómo llegar" (Google Maps), "Llamar" (`tel:+529842092549`), "Ver menú".

⚠️ **Hay que validar con el restaurante** si realmente quieren reservas a todas horas o si prefieren el modelo de llegar sin reserva (*walk-in*). El volumen de clientes que llegan directamente puede ser alto y una reserva mal gestionada empeora la espera. Si no aceptan reservas en horas pico, el CTA principal cambia a **"Cómo llegar"** y la reserva queda para grupos o celebraciones.

### Ubicación de los CTA
1. Hero (2 botones).
2. Barra fija inferior en móvil (siempre visible).
3. Tras "Favoritos de la casa" ("¿Se te antojó? Reserva").
4. Dentro del menú (botón flotante).
5. Bloque de ubicación.
6. CTA final.

### Integraciones
| Integración | Recomendación |
|---|---|
| WhatsApp | ✔ Fase 1. Enlace `wa.me`, sin widgets pesados de terceros |
| Teléfono | ✔ Fase 1 |
| Plataforma de reservas | ○ Fase 2. Valorar una plataforma con integración "Reservar con Google" (p. ej. OpenTable, CoverManager) solo si el restaurante va a gestionarla. El coste y la operación los decide el restaurante |
| Pedidos o entrega | ○ Enlazar la plataforma que use hoy ("Pedir en línea" en Google). Confirmar cuál es |
| Medición | ✔ Usar el GTM existente. Eventos `click_whatsapp`, `click_call`, `click_directions`, `view_menu`, `menu_category`, `lang_switch` |

### Estrategia para captar desde Google
1. La ficha de Google Business Profile apunta a la nueva landing (con UTM `?utm_source=google&utm_medium=organic&utm_campaign=gbp`) y su enlace "Menú" apunta a `#menu` en HTML.
2. La landing tiene SEO local completo (ver 09): títulos con "Desayunos y brunch en Playa del Carmen", Schema `Restaurant`, ES/EN con `hreflang`.
3. El menú en HTML hace indexables los nombres de platillo ("chilaquiles", "hotcakes blueberry", "café de olla").
4. CTA para dejar reseña en Google después de la visita (por ejemplo, con un QR en la mesa que lleve a `/resena`).
5. Corregir las inconsistencias NAP (Tripadvisor) y los atributos de alcohol en Google.

### Elementos de confianza
- Calificaciones con fuente y fecha de actualización (no números estáticos que se queden viejos).
- Insignia Travellers' Choice 2026 (usar los activos oficiales de Tripadvisor según sus condiciones de uso).
- Reseñas reales (widget oficial o citas con permiso).
- Fotos reales del local y del equipo (sin bancos de imágenes).
- Datos claros: precio medio, métodos de pago, accesibilidad, estacionamiento.
- Horario inequívoco **con última orden** (responde a una crítica recurrente).

## 4. Dirección de arte

### Propuesta estética: "Fresco tropical de barrio"
Editorial pero cálida. Mucho aire, fotografía de comida grande y protagonista, fondos crema, bloques en verde selva y acentos de verde lima y acuarelas botánicas (las flores y la palma que **ya usa la marca**). No debe ser *dark luxury* ni minimalismo frío.

### Paleta (basada en la identidad encontrada; ver 02)
| Token | Valor | Uso |
|---|---|---|
| `--crema` | `#FBF8EF` | Fondo principal |
| `--selva` | `#1A5632` | Secciones de contraste, pie, texto de titular sobre crema |
| `--lima` | `#B7D456` | Acento: botones sobre `--selva`, la "O", subrayados (**no** para texto sobre crema) |
| `--tinta` | `#1D241F` | Texto de cuerpo |
| `--acuarela-morado` / `--acuarela-coral` | por definir con los archivos fuente | Acentos de temporada o promoción |
| `--whatsapp` | verde propio de WhatsApp o `--selva` | Botón de reserva (decidir) |

Hay que verificar el contraste WCAG AA de cada combinación en la fase 2.

### Tipografías recomendadas
- **Titulares**: serif cálida y expresiva con buen soporte de español (p. ej. *Fraunces*, variable, Google Fonts).
- **Interfaz y texto**: sans humanista muy legible (p. ej. *Figtree* o *DM Sans*).
- Máximo dos familias, autoalojadas con `font-display: swap` y subconjunto latino.
- ⚠️ Revisar cuando se obtenga la tipografía real del logotipo.

### Estilo de fotografía
- Platillos en ángulo de 45° o cenital, luz natural cálida, fondos de madera o con verde de plantas, manos en el encuadre (servir, compartir), vapor del café de olla, cortes de hotcakes con blueberries cayendo.
- Ambiente: luz de mañana, gente real (con consentimiento) y el equipo.
- **No** usar fotos de clientes de Google o Tripadvisor sin licencia.
- Si no hay fotos de calidad → **sesión profesional** antes de lanzar (ver 10).

### Animaciones y transiciones
- Sutiles y con propósito: entrada escalonada (*fade-up* de 8–12 px) de las tarjetas de platillos al hacer scroll, *hover* con ligero zoom de la imagen en escritorio, transición suave entre pestañas del menú.
- La "O" del logotipo como micro-animación de carga o de estado "Abierto".
- Respetar `prefers-reduced-motion`. Sin *scroll-jacking*, sin *parallax* pesado y sin carruseles automáticos en el hero.
- Ver referencias en [08-referencias-diseno.md](08-referencias-diseno.md).
