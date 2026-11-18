export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const localePath: Record<Locale, string> = { es: "/", en: "/en" };

const es = {
  htmlLang: "es-MX",
  meta: {
    title: "La O Playa del Carmen | Desayunos y brunch en la Av. 10",
    description:
      "Chilaquiles, hotcakes blueberry, café de olla y pan de la casa. Abierto todos los días de 8:00 a 16:00 en Av. 10 entre calles 34 y 38. Reserva por WhatsApp.",
  },
  skip: "Saltar al contenido",
  loading: "Cargando La O",
  nav: { menu: "Menú", favorites: "Favoritos", reviews: "Opiniones", visit: "Visítanos", switchLang: "English", switchLangLabel: "View this page in English" },
  cta: { book: "Reservar", menu: "Ver menú", call: "Llamar", directions: "Cómo llegar" },
  whatsappMessage: "Hola, quiero reservar en La O Playa. Somos __ personas, el día __ a las __.",
  status: {
    open: (close: string) => `Abierto ahora, hasta las ${close}`,
    closedToday: (open: string) => `Cerrado, abre hoy a las ${open}`,
    closedTomorrow: (open: string) => `Cerrado, abre mañana a las ${open}`,
    fallback: (open: string, close: string) => `Todos los días de ${open} a ${close}`,
  },
  hero: {
    title: "Desayunos y brunch en Playa del Carmen",
    subtitle: (open: string, close: string) => `Chilaquiles, hotcakes y pan de la casa en la Av. 10. Todos los días de ${open} a ${close}.`,
    photoAlt: "Hotcakes blueberry de La O con crema batida y blueberries",
  },
  trust: {
    tripadvisor: "en Tripadvisor",
    tripadvisorDetail: (count: string, rank: number, of: string) => `${count} opiniones. Lugar ${rank} de ${of} en Playa del Carmen`,
    award: "Premio de los viajeros",
    google: "en Google",
    googleDetail: (count: string) => `${count} reseñas`,
    footnote: "Calificaciones públicas a noviembre de 2026.",
  },
  favorites: {
    title: "Lo que todos vienen a probar",
    subtitle: "Los platillos que más mencionan nuestros clientes en sus reseñas.",
    combo: "Paquete del día",
  },
  experience: {
    title: "Un lugar fresco para empezar el día",
    body: "Salón con aire acondicionado, terraza para quien prefiere el aire libre y un equipo que nuestros clientes destacan por su amabilidad.",
    amenities: [
      { icon: "snow", label: "Salón con aire acondicionado" },
      { icon: "plant", label: "Terraza al aire libre" },
      { icon: "paw", label: "Pet friendly, dentro y fuera" },
      { icon: "wifi", label: "Wifi gratis" },
      { icon: "baby", label: "Menú infantil" },
      { icon: "wheelchair", label: "Acceso para silla de ruedas" },
      { icon: "card", label: "Pago con tarjeta" },
      { icon: "car", label: "Estacionamiento en la calle" },
    ],
    photos: { interior: "Salón interior de La O con plantas y madera", terrace: "Terraza de La O", bakery: "Panadería de la casa: conchas y roll de canela" },
  },
  menu: {
    title: "El menú",
    tabsLabel: "Categorías del menú",
    from: "desde",
    priceNote: "Precios en pesos mexicanos (MXN), sujetos a cambio.",
    pdf: "Menú completo en PDF",
    pdfSize: "11 MB",
    combo: "Paquete",
  },
  reviews: {
    title: "Lo que dicen de La O",
    leave: "Déjanos tu reseña",
    seeAll: "Ver todas en Tripadvisor",
    original: "Reseña original en",
  },
  celebrate: {
    title: "Celebra en La O",
    birthday: {
      title: "El cumpleañero come gratis",
      body: "En el mes de tu cumpleaños, ven con tres acompañantes: tu platillo y un postre especial van por nuestra cuenta.",
      terms: "Válido durante el mes de cumpleaños, en compañía de 3 personas. No incluye bebidas.",
      cta: "Reservar mi cumpleaños",
      message: "Hola, quiero reservar en La O Playa para celebrar un cumpleaños. Somos __ personas, el día __ a las __.",
    },
    catering: {
      title: "Catering y coffee break",
      body: "Llevamos el sabor de La O a tu oficina o evento.",
      cta: "Pedir cotización",
      message: "Hola, quiero cotizar catering o coffee break de La O para un evento.",
    },
  },
  visit: {
    title: "Visítanos",
    reference: "Cerca del Estadio Mario Villanueva Madrid, en el centro de Playa del Carmen.",
    hoursTitle: "Horario",
    everyDay: "Todos los días",
    breakfast: "Desayunos",
    lunch: "Comidas",
    to: "a",
    parking: "Estacionamiento de pago en la calle.",
    mapCta: "Ver mapa",
    mapTitle: "Mapa de ubicación de La O Playa del Carmen",
    mapPrivacy: "Al abrir el mapa se carga contenido de Google Maps.",
  },
  final: {
    title: "¿Se te antojó? Te guardamos mesa.",
    body: "En horas pico se llena rápido. Escríbenos por WhatsApp y te confirmamos.",
  },
  footer: {
    tagline: "Amantes de la buena comida y los buenos momentos.",
    otherBranch: "También en Cancún",
    otherBranchMenu: "Menú de Cancún",
    invoice: "Facturación",
    follow: "Síguenos",
    rights: "Todos los derechos reservados.",
  },
  photoPending: "Foto pendiente",
};

export type Dictionary = typeof es;

const en: Dictionary = {
  htmlLang: "en",
  meta: {
    title: "La O Playa del Carmen | Breakfast & Brunch on 10th Avenue",
    description:
      "Chilaquiles, blueberry pancakes, café de olla and fresh bakery. Open daily 8am to 4pm on Av. 10 between 34th and 38th St. Book via WhatsApp.",
  },
  skip: "Skip to content",
  loading: "Loading La O",
  nav: { menu: "Menu", favorites: "Favorites", reviews: "Reviews", visit: "Visit us", switchLang: "Español", switchLangLabel: "Ver esta página en español" },
  cta: { book: "Book a table", menu: "See the menu", call: "Call", directions: "Directions" },
  whatsappMessage: "Hi! I'd like to book a table at La O Playa. We are __ people, on __ at __.",
  status: {
    open: (close: string) => `Open now, until ${close}`,
    closedToday: (open: string) => `Closed, opens today at ${open}`,
    closedTomorrow: (open: string) => `Closed, opens tomorrow at ${open}`,
    fallback: (open: string, close: string) => `Open daily from ${open} to ${close}`,
  },
  hero: {
    title: "Breakfast and brunch in Playa del Carmen",
    subtitle: (open: string, close: string) => `Chilaquiles, pancakes and fresh bakery on 10th Avenue. Open every day from ${open} to ${close}.`,
    photoAlt: "La O blueberry pancakes with whipped cream and blueberries",
  },
  trust: {
    tripadvisor: "on Tripadvisor",
    tripadvisorDetail: (count: string, rank: number, of: string) => `${count} reviews. #${rank} of ${of} in Playa del Carmen`,
    award: "Travellers' award",
    google: "on Google",
    googleDetail: (count: string) => `${count} reviews`,
    footnote: "Public ratings as of November 2026.",
  },
  favorites: {
    title: "What everyone comes for",
    subtitle: "The dishes our guests mention most in their reviews.",
    combo: "Daily combo",
  },
  experience: {
    title: "A cool place to start your day",
    body: "An air-conditioned dining room, a terrace for open-air fans and a team our guests praise for its warmth.",
    amenities: [
      { icon: "snow", label: "Air-conditioned dining room" },
      { icon: "plant", label: "Outdoor terrace" },
      { icon: "paw", label: "Dog friendly, inside and out" },
      { icon: "wifi", label: "Free wifi" },
      { icon: "baby", label: "Kids menu" },
      { icon: "wheelchair", label: "Wheelchair accessible" },
      { icon: "card", label: "Cards accepted" },
      { icon: "car", label: "Street parking" },
    ],
    photos: { interior: "La O dining room with plants and wood", terrace: "La O terrace", bakery: "House bakery: conchas and cinnamon rolls" },
  },
  menu: {
    title: "The menu",
    tabsLabel: "Menu categories",
    from: "from",
    priceNote: "Prices in Mexican pesos (MXN), subject to change.",
    pdf: "Full menu (PDF)",
    pdfSize: "11 MB",
    combo: "Combo",
  },
  reviews: {
    title: "What people say about La O",
    leave: "Leave us a review",
    seeAll: "See all on Tripadvisor",
    original: "Original review on",
  },
  celebrate: {
    title: "Celebrate at La O",
    birthday: {
      title: "Birthdays eat free",
      body: "During your birthday month, come with three friends: your dish and a special dessert are on us.",
      terms: "Valid during your birthday month, with 3 companions. Drinks not included.",
      cta: "Book my birthday",
      message: "Hi! I'd like to book a table at La O Playa for a birthday. We are __ people, on __ at __.",
    },
    catering: {
      title: "Catering and coffee break",
      body: "We bring La O to your office or event.",
      cta: "Request a quote",
      message: "Hi! I'd like a quote for La O catering or coffee break for an event.",
    },
  },
  visit: {
    title: "Visit us",
    reference: "Near the Mario Villanueva Madrid stadium, in downtown Playa del Carmen.",
    hoursTitle: "Hours",
    everyDay: "Every day",
    breakfast: "Breakfast",
    lunch: "Lunch",
    to: "to",
    parking: "Paid street parking.",
    mapCta: "Show map",
    mapTitle: "Map showing La O Playa del Carmen",
    mapPrivacy: "Opening the map loads content from Google Maps.",
  },
  final: {
    title: "Hungry yet? We'll save you a table.",
    body: "It fills up fast at peak hours. Message us on WhatsApp and we'll confirm your booking.",
  },
  footer: {
    tagline: "Lovers of good food and good times.",
    otherBranch: "Also in Cancún",
    otherBranchMenu: "Cancún menu",
    invoice: "Invoicing",
    follow: "Follow us",
    rights: "All rights reserved.",
  },
  photoPending: "Photo pending",
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
