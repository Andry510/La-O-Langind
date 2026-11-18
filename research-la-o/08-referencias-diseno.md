# 08 — Referencias de diseño

> ⚠️ **Limitación del método**: estas referencias se analizaron por **estructura, contenido y flujo** (texto y DOM del sitio, verificados el 17-nov-2026). **No** por inspección visual: las capturas de pantalla del navegador fallaron de forma intermitente. Antes de la fase 2 conviene revisarlas visualmente (escritorio y móvil) para confirmar que la calidad estética corresponde a lo descrito.
> Se usan como inspiración de **patrones**, no para copiar el diseño.

## Criterio de selección
Se priorizaron restaurantes **casuales de desayuno, brunch o panadería con marca fuerte** (afines a La O), más un referente mexicano de restaurante clásico por su gestión de reservas y menú. Se descartaron referencias de alta cocina por no encajar con el posicionamiento (ver 07).

---

### 1. Granger & Co. (Londres): grangerandco.com [S24]
- **Qué es**: brunch de "espíritu australiano" con varias sucursales.
- **Patrones observados**:
  - Las sucursales se presentan como tarjetas con foto, nombre y dirección.
  - Intro "All day, every day".
  - Sección "Our story".
  - Tono "sunny, light, vibrant, and always generous".
  - Mensaje de *walk-in* explícito ("Just turn up and we'll happily find you a table").
- **Inspiración para La O**:
  - El tono soleado y generoso encaja con "come deli".
  - El patrón de **tarjetas de sucursal** sirve para Playa y Cancún.
  - Comunicar con honestidad la política de reservas o *walk-in*.

### 2. Tartine Bakery (San Francisco / LA / Corea): tartinebakery.com [S25]
- **Qué es**: panadería y café de culto.
- **Patrones observados**:
  - Eslogan breve y evocador ("Rise each day. Warm every table").
  - CTA en mayúsculas con flecha.
  - Ubicaciones agrupadas por región.
  - Panel de pedidos separado.
  - Imágenes de panaderos y pan que refuerzan lo artesanal.
- **Inspiración para La O**:
  - Usar la **panadería** como prueba de oficio (la insignia ya dice "PANADERÍA").
  - Un eslogan corto y memorable.
  - CTA claros y escasos.

### 3. Panadería Rosetta (CDMX): panaderiarosetta.mx [S26]
- **Qué es**: panadería mexicana de referencia (colonia Roma, desde 2012).
- **Patrones observados**:
  - Una sola página.
  - Relato breve sobre el oficio (masa madre, fermentación lenta).
  - Fotos de producto separando bloques de texto.
  - Enlaces directos a pedir a domicilio (Rappi) y a **Facturación**.
  - Copy en español con orgullo de identidad mexicana.
- **Inspiración para La O**:
  - Demuestra que una página sencilla, centrada en la imagen, basta.
  - **El enlace de facturación en la navegación** resuelve una queja real de La O.
  - Un relato breve y orgulloso de lo mexicano.

### 4. Contramar (CDMX): contramar.com.mx [S27]
- **Qué es**: restaurante mexicano icónico (casual-premium).
- **Patrones observados**:
  - Menú completo en HTML por categorías, con precios en MXN y notas (IVA incluido, temporalidad).
  - Horario y dirección visibles.
  - Reservas por OpenTable más teléfono y **WhatsApp**, con horario de atención de la línea de reservas.
  - Grupos grandes por email.
  - Versión EN.
- **Inspiración para La O**:
  - Es el **modelo de menú y reservas**: menú HTML con precios, varias vías de reserva y reglas claras para grupos.

### 5. Bluestone Lane (EE. UU.): bluestonelane.com [S28]
- **Qué es**: cadena de cafés de estilo australiano.
- **Patrones observados**:
  - Tono de voz con humor en el pie ("Why are you still scrolling?… Go.").
  - Navegación agrupada (Shop / Visit / Learn).
- **Inspiración para La O**:
  - La marca ya usa humor en Instagram. Se puede trasladar con mesura a **microcopy** (pie, estados vacíos, 404).
  - ⚠️ No conviene copiar su home, muy orientada a e-commerce.

### 6. Anti-referencia local: La Cueva del Chango: lacuevadelchango.com [S21]
- **Por qué incluirla**: es el competidor más cercano y fuerte.
- **Lo que hace bien**: menús HTML por categoría (incluido vegano), página de reservas, ES/EN.
- **Lo que no hay que repetir**:
  - Cabecera duplicada.
  - Enlaces muertos (`#`).
  - URLs inconsistentes.
  - Cortes de palabra erróneos.
  - Sin datos de contacto en el pie.

---

## Síntesis: qué tomar de cada una
| Patrón | Referencia | Aplicación en La O |
|---|---|---|
| Tono cálido, soleado y generoso | Granger & Co. | Copy del hero y de las secciones |
| Oficio de panadería como prueba de calidad | Tartine, Rosetta | Sección o tarjeta "Pan de la casa" |
| Menú HTML con precios y notas | Contramar | Sección de menú (en lugar del PDF de 10 MB) |
| Varias vías de reserva y reglas para grupos | Contramar | WhatsApp, llamada y nota para grupos o celebraciones |
| Facturación en la navegación o el pie | Rosetta | Enlace en el pie |
| Tarjetas de sucursal | Granger & Co., Tartine | Pie o bloque "Visítanos también en Cancún" |
| Humor en el microcopy | Bluestone Lane | Pie, 404, mensajes de estado |
| Qué evitar | La Cueva del Chango | QA de enlaces, contacto visible, consistencia |

## Propuestas creativas propias 💡
1. **"La O" como sistema gráfico**: fotos de platillos en máscaras circulares u ovaladas, y el *badge* de estado "Abierto ahora" dentro de una "O".
2. **Acuarelas botánicas** (flor morada, flor naranja y palma, que ya existen en laorestaurante.com) como acentos en las esquinas de las secciones. Dan continuidad entre el QR de mesa actual y la nueva web.
3. **"El reloj del antojo"**: el hero cambia el platillo destacado según la hora (desayunos 8–13 h: hotcakes y chilaquiles; comidas 13–16 h: burrito La O o ensaladas). Coincide con el horario dividido que Google ya muestra. Debe ser ligero (sin vídeo) y con un respaldo estático.
4. **Menú con filtros dietéticos** (vegetariano, sin gluten, ligero) para atender a turistas internacionales y responder a la crítica sobre opciones veganas. Depende de que el restaurante confirme qué platillos califican.
