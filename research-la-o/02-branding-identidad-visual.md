# 02 — Marca e identidad visual

> Leyenda: ✅ Identificado (observado en activos oficiales) · ⚠️ Aproximado o sin verificar · 💡 Propuesta creativa (interpretación propia, no es un dato de la marca).
> **No existe un manual de marca público.** Los valores de color salen de muestrear píxeles de archivos oficiales, no de una guía. Hay que pedirle al restaurante los archivos fuente (ver [10-resumen-ejecutivo.md](10-resumen-ejecutivo.md)).

## 1. Logotipo ✅
- **Forma principal**: el texto "**la O**". "la" va en minúsculas con tipografía serif de trazo grueso, y la "**O**" es grande y destacada [S1 favicon][S3 avatar].
- **Variante insignia (avatar de Instagram)**: círculo crema con "la O" al centro y un anillo de texto en verde lima: **PANADERÍA · DESAYUNOS · BRUNCH · COMIDAS · SNACKS** [S3].
- **Variante "la O Playa"**: logotipo con el descriptor "Playa", usado en publicaciones de Instagram [S3].
- **Señalética física**: letras corpóreas verdes "la O" en la fachada, visibles en miniaturas de Instagram [S3].
- **Icono del sitio** (favicon `favicon-la-o_.ico`, 32×32): "la O" en verde sobre fondo blanco o crema [S1].
- ⚠️ No se encontró el logotipo en vector (SVG/AI). Solo hay favicon 32×32 y avatares en baja resolución. **Hay que pedirlo.**

## 2. Colores

| Rol observado | HEX aproximado | Origen | Estado |
|---|---|---|---|
| Verde lima de marca (la "O" y el anillo del logotipo) | `#B7D456` | Píxel muestreado del favicon oficial | ✅ muestreado / ⚠️ no es el valor oficial |
| Verde selva profundo (fondo de la página de menú) | `#1A5632` – `#1A5634` | Píxel muestreado de `fondo.jpg` (hoja de palma sobre verde) en laorestaurante.com | ✅ muestreado |
| Verde hoja (silueta de palma) | ~`#00602A` | Observación de `fondo.jpg` | ⚠️ aproximado |
| Crema o blanco cálido (fondo del favicon e insignia) | ~`#FFFFF8` | Muestreado del favicon | ⚠️ aproximado |
| Morado acuarela y naranja/coral acuarela | sin valor fiable | Ilustraciones `flor morada.svg` y `flor naranja.svg` del sitio | ✅ existen / ⚠️ sin HEX |
| Colores de apoyo en Instagram | amarillo intenso, lila/morado, rosa | Piezas gráficas (p. ej. "PLAYEN…" en amarillo, fondo lila en cumpleaños) | ✅ observado / ⚠️ sin sistema aparente |

💡 **Lectura**: el núcleo de la identidad es el **verde** (lima y profundo) con **crema**. Las acuarelas tropicales (flores moradas y naranjas, palma) dan un acento botánico y mexicano-caribeño. En Instagram se usan además colores saturados (amarillo, lila) **de forma no sistemática**.

## 3. Tipografía
- ✅ El **logotipo** usa una serif robusta en "la" y una "O" de gran peso. ⚠️ No se pudo identificar la familia.
- ✅ El **sitio web** no carga fuentes propias: usa la pila `system-ui`/sans por defecto de Tailwind [S1 CSS]. **No hay tipografía web de marca.**
- ⚠️ Las piezas de Instagram usan tipografías variadas (script tipo "Happy Birthday", sans gruesa tipo display en "PLAYEN…"). No se observa una familia consistente.

## 4. Estilo fotográfico y dirección de arte (observado)
- **Instagram** [S3]: mezcla de foto de producto (hotcakes, bebidas, panadería), reels con personas o staff en tono humorístico ("Así es como hablamos los mexicanos", "No se la esperaban 👀🦁"), gráficos promocionales (cumpleaños, aniversario, Día de Muertos) y foto de fachada.
- **Google Maps** [S4]: foto de portada del interior con luz cálida, madera, plantas grandes, lámparas de fibra y muro de bloque de vidrio. Google tiene categorías de foto "Del propietario", "Comidas y bebidas" y "Ambiente". Tripadvisor tiene 393 fotos de viajeros [S5].
- **Tono de voz**: cercano, juguetón y muy mexicano ("añotes", "playita", "come deli", "chingao", "tantita carrilla"), con mucho emoji [S3][S2].
- ⚠️ **Limitación del análisis**: no se pudieron renderizar las páginas del menú PDF ni descargar fotos en alta resolución. Las capturas del navegador fallaron de forma intermitente. Se analizaron miniaturas y textos alternativos. **La calidad real de las fotos para uso web no está evaluada.**

## 5. Elementos visuales recurrentes ✅
- La "O" como símbolo.
- Verde lima.
- Hoja de palma.
- Flores en acuarela (morada y naranja).
- Íconos de línea en círculos pastel en las historias destacadas de Instagram (Delivery, Familia, Comidas, Bebidas, Desayunos, La O Playa, Panadería) [S3].

## 6. Personalidad de marca
- ✅ **Declarada**: "Amantes de la buena comida y los buenos momentos", "¡Disfruta y come deli!" [S3][S2].
- 💡 **Interpretada**: cálida, familiar, alegre, de barrio y orgullosamente mexicana, con un toque fresco y saludable. **No** es alta cocina ni formal. El brief pedía "restaurante de alta calidad": la calidad debe comunicarse como *cuidado y frescura*, no como lujo. Presentarla como lujo contradeciría las reseñas, los precios y el tono propio.

## 7. Recursos visuales disponibles
| Recurso | Estado | Uso web |
|---|---|---|
| Fotos del perfil de Google "Del propietario" | Existen; no descargadas | Solo con permiso del restaurante |
| Publicaciones de Instagram | Existen; resolución de Instagram (máx. ~1080 px) | Aceptables para tarjetas, insuficientes para un hero a pantalla completa |
| Fotos de clientes (Google, Tripadvisor) | Existen | **No usar** sin licencia: los derechos son de cada autor |
| Ilustraciones de flores en acuarela | En laorestaurante.com (PNG de 1500 px incrustados en SVG) | Reutilizables si el restaurante lo autoriza |
| `fondo.jpg` (palma, 1920×1080) | Disponible | Reutilizable como textura |
| Logotipo vectorial | **No disponible** | **Pedirlo** |

## 8. Propuestas creativas 💡 (no son la identidad actual)
- **Paleta propuesta** (basada en la identificada):
  - Verde selva `#1A5632` para fondos de sección y texto sobre crema.
  - Crema `#FBF8EF` como fondo principal.
  - Verde lima `#B7D456` **solo como acento** (botones sobre verde oscuro, subrayados, la "O"). Sobre crema no alcanza el contraste AA para texto.
  - Morado acuarela y coral como acentos puntuales de temporada o promoción.
  - Tinta casi negra `#1D241F` para cuerpo de texto.
- **Tipografía propuesta** (sin una de marca confirmada): una serif expresiva y cálida para titulares que dialogue con el "la" del logotipo (p. ej. *Fraunces* o *Recoleta*-like) más una sans humanista legible para la interfaz (p. ej. *Inter*, *Figtree* o *DM Sans*). Validar contra la tipografía real del logotipo cuando el restaurante la proporcione.
- **Recurso gráfico**: usar la "O" como forma (marcos circulares para fotos de platillos, *badge* "Abierto ahora", máscara de imagen) y las acuarelas como acentos en las esquinas, igual que ya hace laorestaurante.com.
