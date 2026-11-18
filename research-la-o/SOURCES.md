# Fuentes consultadas

Todas las fuentes se consultaron el **17-nov-2026**, salvo que se indique otra fecha. "Método" indica cómo se accedió: fetch = descarga HTTP o WebFetch; navegador = Chrome con sesión del usuario; búsqueda = motor de búsqueda web (los resúmenes del buscador no se usaron como dato final sin verificarlos en la fuente cuando fue posible).

## Fuentes primarias u oficiales del restaurante
| ID | Fuente | URL | Método | Qué se obtuvo |
|---|---|---|---|---|
| S1 | Sitio oficial La O | https://laorestaurante.com/ · /menu/playa/ · /menu/cancun/ | fetch (HTML, CSS, favicon, imágenes) | Estructura del sitio, `<title>`, ausencia de metadatos, stack (Astro + Tailwind, GTM-MMH424GZ), favicon "la O" (color lima muestreado `#B7D456`), `fondo.jpg` (verde `#1A5632`), ilustraciones de flores en acuarela, existencia de la ruta Cancún, robots y sitemap con 404 |
| S2 | Menú oficial PDF (ES), Playa | https://la-o-restaurante.s3.us-east-2.amazonaws.com/Playa/Menu/MenuEspPlaya.pdf | fetch + extracción de texto (pdftotext) | Platillos, descripciones y precios. Texto de concepto ("La O Playa es el rincón perfecto…"). Catering y coffee break. "¡Conoce nuestra otra sucursal!". Última modificación: 1-may-2026. Tamaño ~10.7 MB |
| S2b | Menú oficial PDF (EN), Playa | https://la-o-restaurante.s3.us-east-2.amazonaws.com/Playa/Menu/MenuEnPlaya.pdf | fetch (solo cabeceras) | Existe. Última modificación: 28-oct-2026. ~10.8 MB. **Contenido no revisado** |
| S3 | Instagram @laoplaya | https://www.instagram.com/laoplaya/ | navegador (texto y `alt` de publicaciones) | Nombre, bio, horario 8:00–16:00, dirección, 9,219 seguidores y 471 publicaciones, historias destacadas, avatar con insignia, teléfono de reservas +52 1 984 209 2549, promociones (cumpleañero, aniversario de "4 añotes en playita", concurso de calaveritas), tono de voz, enlace a Facebook |

## Plataformas de reseñas y directorios
| ID | Fuente | URL | Método | Qué se obtuvo |
|---|---|---|---|---|
| S4 | Google Maps, ficha "La O" | https://www.google.com/maps/place/La+O/@20.6349567,-87.0680066,17z (ftid 0x8f4e43fa89dc399f:0x3625ba10a6d6445d) | navegador | 4.6★ (1,229) y desglose por estrellas, $200–300 (517 reportes), dirección, teléfono 984 209 2549, web, plus code, horario diario 8–16 (desayunos 8–13 y comidas 13–16), atributos ("Acerca de"), resumen de Gemini, temas (chilaquiles 55, etc.), unas 20 reseñas relevantes y unas 30 de menor calificación, populares (Wrap de pollo, Waffles de ahuevo), "También se buscó" |
| S5 | Tripadvisor MX, La O Playa del Carmen | https://www.tripadvisor.com.mx/Restaurant_Review-g150812-d25067123-Reviews-La_O_Playa_Del_Carmen-Playa_del_Carmen_Yucatan_Peninsula.html | navegador (WebFetch devolvió 403) | 4.8 (698), #43 de 1,714, Travellers' Choice 2026, alias "La Orgánica Playa Del Carmen", subcalificaciones (Servicio 4.8, Comida 4.8, Calidad/precio 4.7, Ambiente 4.8), 393 fotos, teléfono +52 984 317 3751, reseñas de oct–nov 2026 |
| S6 | Tripadvisor (otras versiones e instantáneas) | tripadvisor.com / .ca / .co.uk (mismo d25067123) | búsqueda | Instantáneas anteriores (4.8–4.9, de 408 a 674 reseñas), Travellers' Choice 2025 según un resumen de búsqueda (⚠️ no verificado directamente) |
| S7 | Tripadvisor, reseñas individuales | https://www.tripadvisor.com.mx/ShowUserReviews-g150812-d25067123-r1060864855-… · https://www.tripadvisor.co/ShowUserReviews-g150812-d25067123-r1055230048-… | búsqueda (solo títulos) | Títulos "DESAYUNÉ DELI", "Nice Breakfast Spot!" |
| S8 | Wanderlog, La O | https://wanderlog.com/place/details/7378396/la-o | WebFetch | Nombre "La O (La Orgánica)", teléfono, web laorestaurante.com/menu/playa/, horario 8–16, Google 4.6 (1,193) y Tripadvisor 4.8 (322) en instantánea anterior, platillos y reseñas en inglés con autor y fecha, aire acondicionado, rosas en las mesas |
| S9 | menu-world (tercero no oficial) | https://la-o-playa-del-carmen.menu-world.com/ | búsqueda (WebFetch 403) | Solo fragmentos del buscador. **No se usó como fuente de datos** |
| S10 | Restaurant Guru | https://restaurantguru.com/Playa-del-Carmen | búsqueda | Etiquetas (latinoamericana, mexicana, contemporánea, saludable), según el resumen de búsqueda. Uso menor |

## Marca anterior y sucursal de Cancún
| ID | Fuente | URL | Método | Qué se obtuvo |
|---|---|---|---|---|
| S12 | laorganica.mx | https://www.laorganica.mx/ | fetch | El dominio está **a la venta** ("This domain is for sale – Trust Domains") |
| S13 | Tripadvisor y Wanderlog, La O Cancún | https://www.tripadvisor.com.ve/Restaurant_Review-g150807-d23317904-Reviews-or15-La_Organica-Cancun_Yucatan_Peninsula.html · https://wanderlog.com/es/place/details/1235575/la-o | búsqueda | Sucursal "La O" en Cancún vinculada a "La Orgánica". Plaza Catoche, Av. Bonampak (según un resumen de búsqueda de laorganica.mx/food, ⚠️ hoy inaccesible) |
| S14 | Rappi y Uber Eats, La Orgánica Cancún | https://www.rappi.com.mx/restaurantes/1923250328-laorganica-cancun · https://www.ubereats.com/mx/store/la-organica-cancun/pmjIS7WVUEqfYxdJsakKlg | búsqueda | Cabo Catoche Mz 23, Cancún. Siguen con la marca "La Orgánica" |

## Búsquedas sin resultado relevante
| ID | Búsqueda | Resultado |
|---|---|---|
| S16 | "La O Playa del Carmen" facebook OR tiktok; "La O" … instagram; cambio de nombre La Orgánica → La O | Sin cuenta de TikTok, sin prensa ni entrevistas, sin artículo sobre el cambio de nombre. Los buscadores confunden "La O" con "Oh Lala" y otros |

## SEO
| ID | Fuente | URL | Método | Qué se obtuvo |
|---|---|---|---|---|
| S17 | Google Autocomplete | https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=mx&q=… | fetch | Sugerencias para 8 semillas (desayunos, brunch, breakfast, best breakfast, chilaquiles, pancakes, "la o playa del carmen", "desayunos en playa del carmen centro"). Sin volúmenes |

## Competencia
| ID | Fuente | URL | Método | Qué se obtuvo |
|---|---|---|---|---|
| S18 | Cozymeal, Best Breakfast in Playa del Carmen | https://www.cozymeal.com/magazine/best-breakfast-playa-del-carmen | búsqueda | Choux Choux en guías de 2026 |
| S19 | Things to do in Playa del Carmen, Brunch Guide 2026 | https://thingstodoinplayadelcarmen.com.mx/food-scene/playa-del-carmen-brunch-guide | búsqueda | La Cueva del Chango como "most beloved brunch spot" y servicio lento (según el resumen de búsqueda) |
| S19b | Atly, Gluten-free brunch Playa del Carmen | https://www.atly.com/top/gluten-free/brunch-mexico-quintana-roo-playa-del-carmen | búsqueda | Fifty Brunch como opción sin gluten |
| S20 | Google Maps, fichas de competidores | Búsquedas en Maps: La Cueva del Chango, Lara&Luca de la 10, Que Huevos, Fifty Brunch, Kaxapa Factory, Cuore 34 Wine & Coffee, Choux Choux Café | navegador | Calificación, volumen, precio, dirección, apertura, web y descripción de Google. Kaxapa Factory "Cerrado permanentemente" |
| S21 | La Cueva del Chango (web) | https://lacuevadelchango.com | fetch + WebFetch | Concepto, secciones, reservas, ES/EN, WordPress + Elementor, defectos de UX |
| S22 | Lara&Luca (web) | https://larayluca.com | navegador (curl dio 406) | "Desde el 2016", sucursales Cancún, Playa y Puerto Aventuras, teléfono, Instagram |
| S23 | Fifty Brunch (web) | https://fiftybrunch.mx | navegador | Lista de platillos (contenido mínimo) |

## Referencias de diseño
| ID | Fuente | URL | Método | Qué se obtuvo |
|---|---|---|---|---|
| S24 | Granger & Co. | https://www.grangerandco.com | WebFetch | Estructura, tono, política de *walk-in*, tarjetas de sucursal |
| S25 | Tartine Bakery | https://www.tartinebakery.com | WebFetch | Estructura, eslogan, ubicaciones, pedidos |
| S26 | Panadería Rosetta | https://panaderiarosetta.mx/ | WebFetch | Una página, relato, Rappi y facturación en la navegación |
| S27 | Contramar | https://www.contramar.com.mx | WebFetch | Menú HTML con precios, OpenTable, WhatsApp y teléfono, horario |
| S28 | Bluestone Lane | https://www.bluestonelane.com | WebFetch | Navegación, tono con humor |

## Accesos fallidos o limitaciones
- WebFetch con **403** en Tripadvisor y menu-world: se resolvió con el navegador en Tripadvisor; menu-world no se usó.
- Las **capturas de pantalla** del navegador fallaron de forma intermitente (*timeout* del renderizador): no hay evaluación visual de Instagram en detalle ni de los sitios de referencia.
- No fue posible **renderizar las páginas del PDF** del menú a imagen (falta poppler/pdftoppm): solo se extrajo el texto.
- **Facebook**: no revisado (la cuenta existe según el enlace de Instagram).
- **OpenTable**: sin presencia encontrada.
- Sin acceso a Google Business Profile Insights, Search Console, Meta Insights ni herramientas de palabras clave con volumen.
