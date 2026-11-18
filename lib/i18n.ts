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
  nav: { menu: "Menú", favorites: "Favoritos", reviews: "Opiniones", visit: "Visítanos", switchLang: "EN", switchLangLabel: "View this page in English" },
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
    subtitle: (open: string, close: string) =>
      `Chilaquiles, hotcakes y pan de la casa en la Av. 10. Todos los días de ${open} a ${close}.`,
    sticker: "¡come deli!",
    photos: {
      main: "Hotcakes con blueberries y miel",
      side: "Chilaquiles con queso y cebolla",
      cup: "Café de olla en tazas de barro",
    },
  },
  stories: {
    label: "Explora La O",
    items: {
      dulces: "Hotcakes",
      huevos: "Chilaquiles",
      comidas: "Comidas",
      bebidas: "Bebidas",
      panaderia: "Panadería",
      celebra: "Celebra",
      visita: "Visítanos",
    },
  },
  marquee: {
    tripadvisor: (score: string) => `${score} en Tripadvisor`,
    google: (count: string) => `${count} reseñas en Google`,
    hours: (open: string, close: string) => `Todos los días de ${open} a ${close}`,
    items: ["Salón con aire acondicionado",
    "Pet friendly",
    "Panadería de la casa"],
  },
  favorites: {
    title: "Lo que todos vienen a probar",
    subtitle: "Los platillos que más mencionan nuestros clientes en sus reseñas.",
    combo: "Paquete del día",
  },
  about: {
    title: "Amantes de la buena comida y los buenos momentos",
    body: "Desayunos, brunch y comidas en un lugar fresco de la Av. 10, con un equipo que nuestros clientes destacan por su amabilidad.",
    amenities: [
      { icon: "snow", label: "Aire acondicionado" },
      { icon: "plant", label: "Terraza" },
      { icon: "paw", label: "Pet friendly" },
      { icon: "wifi", label: "Wifi gratis" },
      { icon: "baby", label: "Menú infantil" },
      { icon: "wheelchair", label: "Accesible" },
      { icon: "card", label: "Pago con tarjeta" },
      { icon: "car", label: "Estacionamiento en la calle" },
    ],
    photos: { interior: "Salón con plantas y lámparas de mimbre", terrace: "Terraza con plantas", bakery: "Concha de la panadería" },
  },
  menu: {
    title: "El menú",
    tabsLabel: "Categorías del menú",
    from: "desde",
    priceNote: "Precios en pesos mexicanos (MXN), sujetos a cambio.",
    pdf: "Menú completo en PDF",
    pdfSize: "11 MB",
  },
  reviews: {
    title: "Lo que dicen de La O",
    leave: "Déjanos tu reseña",
    tripadvisor: (count: string) => `en Tripadvisor, ${count} opiniones`,
    google: (count: string) => `en Google, ${count} reseñas`,
    original: "Reseña en",
    footnote: "Calificaciones públicas a noviembre de 2026.",
  },
  celebrate: {
    title: "Celebra en La O",
    birthday: {
      script: "¡Feliz cumple!",
      title: "El cumpleañero come gratis",
      body: "En el mes de tu cumpleaños, ven con tres acompañantes: tu platillo y un postre especial van por nuestra cuenta.",
      terms: "Válido durante el mes de cumpleaños, en compañía de 3 personas. No incluye bebidas.",
      cta: "Reservar mi cumple",
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
    street: "Av. 10 entre calle 34 y 38",
    reference: "Centro de Playa del Carmen, cerca del Estadio Mario Villanueva Madrid.",
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
    title: "¿Se te antojó?",
    script: "te guardamos mesa",
    body: "En horas pico se llena rápido. Escríbenos por WhatsApp y te confirmamos.",
  },
  footer: {
    tagline: "Amantes de la buena comida y los buenos momentos.",
    otherBranch: "También en Cancún",
    otherBranchMenu: "Menú de Cancún",
    invoice: "Facturación",
    follow: "Síguenos",
    visit: "Encuéntranos",
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
  nav: { menu: "Menu", favorites: "Favorites", reviews: "Reviews", visit: "Visit us", switchLang: "ES", switchLangLabel: "Ver esta página en español" },
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
    subtitle: (open: string, close: string) =>
      `Chilaquiles, pancakes and fresh bakery on 10th Avenue. Open every day from ${open} to ${close}.`,
    sticker: "¡come deli!",
    photos: {
      main: "Pancakes with blueberries and honey",
      side: "Chilaquiles with cheese and onion",
      cup: "Café de olla in clay cups",
    },
  },
  stories: {
    label: "Explore La O",
    items: {
      dulces: "Pancakes",
      huevos: "Chilaquiles",
      comidas: "Lunch",
      bebidas: "Drinks",
      panaderia: "Bakery",
      celebra: "Celebrate",
      visita: "Visit us",
    },
  },
  marquee: {
    tripadvisor: (score: string) => `${score} on Tripadvisor`,
    google: (count: string) => `${count} Google reviews`,
    hours: (open: string, close: string) => `Open daily ${open} to ${close}`,
    items: ["Air-conditioned dining room",
    "Dog friendly",
    "House bakery"],
  },
  favorites: {
    title: "What everyone comes for",
    subtitle: "The dishes our guests mention most in their reviews.",
    combo: "Daily combo",
  },
  about: {
    title: "Lovers of good food and good times",
    body: "Breakfast, brunch and lunch in a cool spot on 10th Avenue, with a team our guests praise for its warmth.",
    amenities: [
      { icon: "snow", label: "Air conditioning" },
      { icon: "plant", label: "Terrace" },
      { icon: "paw", label: "Dog friendly" },
      { icon: "wifi", label: "Free wifi" },
      { icon: "baby", label: "Kids menu" },
      { icon: "wheelchair", label: "Accessible" },
      { icon: "card", label: "Cards accepted" },
      { icon: "car", label: "Street parking" },
    ],
    photos: { interior: "Dining room with plants and wicker lamps", terrace: "Terrace with plants", bakery: "Concha from the bakery" },
  },
  menu: {
    title: "The menu",
    tabsLabel: "Menu categories",
    from: "from",
    priceNote: "Prices in Mexican pesos (MXN), subject to change.",
    pdf: "Full menu (PDF)",
    pdfSize: "11 MB",
  },
  reviews: {
    title: "What people say about La O",
    leave: "Leave us a review",
    tripadvisor: (count: string) => `on Tripadvisor, ${count} reviews`,
    google: (count: string) => `on Google, ${count} reviews`,
    original: "Review on",
    footnote: "Public ratings as of November 2026.",
  },
  celebrate: {
    title: "Celebrate at La O",
    birthday: {
      script: "Happy birthday!",
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
    street: "Av. 10 between 34th and 38th St.",
    reference: "Downtown Playa del Carmen, near the Mario Villanueva Madrid stadium.",
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
    title: "Hungry yet?",
    script: "we'll save you a table",
    body: "It fills up fast at peak hours. Message us on WhatsApp and we'll confirm your booking.",
  },
  footer: {
    tagline: "Lovers of good food and good times.",
    otherBranch: "Also in Cancún",
    otherBranchMenu: "Cancún menu",
    invoice: "Invoicing",
    follow: "Follow us",
    visit: "Find us",
    rights: "All rights reserved.",
  },
  photoPending: "Photo pending",
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
