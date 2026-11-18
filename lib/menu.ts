import type { Locale } from "./i18n";

// Menú de La O Playa. Textos tomados de los PDF oficiales (ES y EN).
// PRECIOS: se usa el PDF en español (modificado el 01-may-2026). El PDF en inglés (28-oct-2026)
// muestra precios distintos en varios platillos. TODO: confirmar con el restaurante qué precios están vigentes.
// ETIQUETAS DIETÉTICAS: el menú oficial no las incluye; no se infieren aquí. TODO: pedirlas al restaurante.

type L = Record<Locale, string>;

export type MenuItem = {
  id: string;
  name: L;
  desc?: L;
  /** Precio en MXN. `from: true` indica "desde". */
  price?: { amount: number; from?: boolean };
};

export type MenuCategory = {
  id: string;
  label: L;
  note?: L;
  items: MenuItem[];
};

const same = (s: string): L => ({ es: s, en: s });

export const menu: MenuCategory[] = [
  {
    id: "dulces",
    label: { es: "Hotcakes y dulces", en: "Pancakes & sweets" },
    items: [
      {
        id: "hotcakes-blueberry",
        name: { es: "Hotcakes blueberry", en: "Pancakes blueberry" },
        desc: {
          es: "Receta de la casa con crema batida, blueberries, coulis y chocolate blanco.",
          en: "Homemade recipe with whipped cream, blueberries, coulis and white chocolate chips.",
        },
        price: { amount: 221 },
      },
      {
        id: "hotcakes-dubai",
        name: { es: "Hotcakes estilo Dubai", en: "Dubai style pancakes" },
        desc: {
          es: "Salsa de pistacho con chocolate blanco, frutos rojos y almendra.",
          en: "Pistachio sauce with white chocolate, red berries and almond.",
        },
        price: { amount: 266 },
      },
      {
        id: "hotcakes-frutos-rojos",
        name: { es: "Hotcakes de frutos rojos", en: "Red fruits pancakes" },
        desc: {
          es: "Mermelada casera de frutos rojos, crema batida y azúcar glass.",
          en: "Homemade red berry jam, whipped cream and powdered sugar.",
        },
        price: { amount: 242 },
      },
      {
        id: "hotcakes",
        name: { es: "Hotcakes", en: "Pancakes" },
        desc: {
          es: "Torre de tres piezas con crema batida y frutos del bosque.",
          en: "Stack of three with whipped cream and forest fruits.",
        },
        price: { amount: 200 },
      },
      {
        id: "waffles-ahuevo",
        name: { es: "Waffles de ahuevo", en: "Ahuevo waffles" },
        desc: { es: "Receta tradicional con huevo y tocino.", en: "Traditional recipe topped with egg and bacon." },
        price: { amount: 231 },
      },
      {
        id: "waffle-natural",
        name: { es: "Waffle natural", en: "Natural waffle" },
        desc: { es: "Con crema batida y frutos del bosque.", en: "With whipped cream and forest fruits." },
        price: { amount: 191 },
      },
      {
        id: "roll-chocorompope",
        name: { es: "Roll francés chocorompope", en: "Chocorompope cinnamon roll" },
        desc: { es: "Chocolate, plátano, nuez y salsa de rompope.", en: "Chocolate, banana, nuts and eggnog sauce." },
        price: { amount: 272 },
      },
      {
        id: "pudin-chia",
        name: { es: "Pudín de chía", en: "Chia pudding" },
        desc: {
          es: "Avena con leche, chía orgánica, plátano, fresa y arándanos.",
          en: "Milk-based oatmeal with organic chia, banana, strawberry and blueberries.",
        },
        price: { amount: 196 },
      },
      {
        id: "plato-fruta",
        name: { es: "Plato de fruta", en: "Fruit plate" },
        desc: { es: "Fruta de temporada, granola y yogurt griego.", en: "Seasonal fruit with granola and greek yogurt." },
        price: { amount: 150 },
      },
    ],
  },
  {
    id: "huevos",
    label: { es: "Chilaquiles y huevos", en: "Chilaquiles & eggs" },
    items: [
      {
        id: "chilaquiles-la-o",
        name: { es: "Chilaquiles La O", en: "Chilaquiles La O" },
        desc: {
          es: "Dúo de salsa verde y roja, huevo frito, carne y longaniza ahumada de Temozón, crema, queso y aguacate.",
          en: "Duo of green and red sauces with fried egg, smoked meat and longaniza, cream, cheese and avocado.",
        },
        price: { amount: 280 },
      },
      {
        id: "chilaquiles",
        name: same("Chilaquiles"),
        desc: {
          es: "Salsa verde, roja o morita, con crema, queso y cebolla morada. Agrega la proteína que prefieras.",
          en: "Green, red or morita sauce with cream, cheese and red onion. Add the protein you like.",
        },
        price: { amount: 163, from: true },
      },
      {
        id: "mollequiles",
        name: same("Mollequiles"),
        desc: {
          es: "Pan crujiente con frijoles, chilaquiles verdes gratinados, cochinita y cebolla curtida.",
          en: "Crispy bread with beans, gratinated green chilaquiles, cochinita and pickled onion.",
        },
        price: { amount: 214 },
      },
      {
        id: "cazuela-amor",
        name: same("Cazuela del amor"),
        desc: {
          es: "Tres huevos en salsa de molcajete con chicharrón, queso, nopal asado y aguacate.",
          en: "Three eggs in molcajete salsa with pork cracklings, cheese, roasted cactus and avocado.",
        },
        price: { amount: 214 },
      },
      {
        id: "molcajeteados",
        name: same("Molcajeteados"),
        desc: {
          es: "Huevos estrellados sobre tocino, jamón y tortilla, con trilogía de salsas.",
          en: "Sunny-side-up eggs on bacon, ham and tortilla with three sauces.",
        },
        price: { amount: 225 },
      },
      {
        id: "motulenos",
        name: { es: "Motuleños tradicionales", en: "Motuleño eggs" },
        desc: {
          es: "Huevos sobre tortilla frita con frijol, salsa roja, jamón, chícharos, queso y plátano macho.",
          en: "Eggs on fried tortillas with beans, red sauce, ham, peas, cheese and fried plantain.",
        },
        price: { amount: 219 },
      },
      {
        id: "benedictinos",
        name: { es: "Benedictinos", en: "Eggs benedict" },
        desc: {
          es: "Huevos pochados en pan brioche con salsa holandesa. Jamón ahumado o salmón.",
          en: "Poached eggs on brioche with hollandaise. Smoked ham or salmon.",
        },
        price: { amount: 214, from: true },
      },
      {
        id: "encacahuatadas",
        name: { es: "Encacahuatadas", en: "Peanut sauce enchiladas" },
        desc: {
          es: "Rellenas de chamorro, en salsa de cacahuate, crema, queso fresco y aguacate.",
          en: "Filled with pork shank, topped with peanut sauce, cream, fresh cheese and avocado.",
        },
        price: { amount: 243 },
      },
      {
        id: "enchiladas",
        name: same("Enchiladas"),
        desc: {
          es: "Verdes, rojas, morita o enmoladas, con la proteína de tu elección.",
          en: "Green, red, morita or mole, with your choice of protein.",
        },
        price: { amount: 173, from: true },
      },
      {
        id: "omelette-suizo",
        name: { es: "Omelette suizo", en: "Swiss omelette" },
        desc: {
          es: "Relleno de pollo a la mexicana y quesos fundidos, con aguacate.",
          en: "Filled with mexican style chicken and melted cheeses, topped with avocado.",
        },
        price: { amount: 231 },
      },
    ],
  },
  {
    id: "comidas",
    label: { es: "Toasts y comidas", en: "Toasts & lunch" },
    note: {
      es: "Servicio de comidas a partir de las 13:00.",
      en: "Lunch is served from 1 pm.",
    },
    items: [
      {
        id: "toast-casa",
        name: { es: "Toast de la casa", en: "House toast" },
        desc: {
          es: "Pan de masa madre, guacamole, jamón ahumado, huevo revuelto con feta y aceite de chiles.",
          en: "Sourdough with guacamole, smoked ham, scrambled eggs with feta and chili oil.",
        },
        price: { amount: 259 },
      },
      {
        id: "toast-salmon",
        name: { es: "Toast de salmón ahumado", en: "Smoked salmon toast" },
        desc: {
          es: "Pan de la casa con jocoque, tomate deshidratado, salmón y arúgula.",
          en: "House bread with labneh, sun-dried tomato, smoked salmon and arugula.",
        },
        price: { amount: 248 },
      },
      {
        id: "toast-poche",
        name: { es: "Toast de huevo poché", en: "Poached egg toast" },
        desc: {
          es: "Guacamole, huevo poché y tomate cherry, con ensalada de la casa.",
          en: "Guacamole, poached egg and cherry tomatoes, with house salad.",
        },
        price: { amount: 208 },
      },
      {
        id: "burrito-la-o",
        name: { es: "Burrito La O", en: "La O burrito" },
        desc: {
          es: "Arrachera o pollo, arroz, frijol, manchego y pimientos, con papas a la francesa.",
          en: "Skirt steak or chicken, rice, beans, manchego and peppers, with french fries.",
        },
        price: { amount: 263 },
      },
      {
        id: "wrap-pollo",
        name: { es: "Wrap de pollo", en: "Chicken wrap" },
        desc: {
          es: "Pollo a la plancha gratinado con manchego, lechuga, aguacate y aderezo de ajo parmesano.",
          en: "Grilled chicken with melted manchego, lettuce, avocado and garlic parmesan dressing.",
        },
        price: { amount: 226 },
      },
      {
        id: "sandwich-arqui",
        name: { es: "Sándwich el arqui", en: "Sandwich el arqui" },
        desc: {
          es: "Manchego, suizo y arrachera a la plancha, con papas de la casa.",
          en: "Manchego and swiss cheese with grilled skirt steak, with house potatoes.",
        },
        price: { amount: 260 },
      },
      {
        id: "ensalada-invierno",
        name: { es: "Ensalada invierno", en: "Invierno salad" },
        desc: {
          es: "Espinaca, pollo, fresas, queso de cabra, arándanos y nuez con aderezo de maracuyá.",
          en: "Spinach, chicken, strawberries, goat cheese, cranberries and walnuts with passion fruit dressing.",
        },
        price: { amount: 272 },
      },
      {
        id: "huarache",
        name: same("Huarache de carnitas"),
        desc: {
          es: "Masa de maíz con frijol, carnitas de la casa, panela, crema y aguacate.",
          en: "Corn masa with beans, house carnitas, panela cheese, cream and avocado.",
        },
        price: { amount: 243 },
      },
    ],
  },
  {
    id: "bebidas",
    label: { es: "Café y bebidas", en: "Coffee & drinks" },
    note: {
      es: "Jugos y aguas en dos tamaños. Pregunta por los precios en tu mesa.",
      en: "Juices come in two sizes. Ask your server for prices.",
    },
    items: [
      {
        id: "cafe-olla",
        name: same("Café de olla"),
        desc: { es: "El clásico de la casa.", en: "The house classic." },
        price: { amount: 68 },
      },
      { id: "americano", name: same("Americano"), price: { amount: 68 } },
      { id: "latte", name: same("Latte"), price: { amount: 79 } },
      { id: "capuchino", name: { es: "Capuchino", en: "Cappuccino" }, price: { amount: 84 } },
      {
        id: "pinky-matcha",
        name: same("Pinky matcha"),
        desc: {
          es: "Puré de fresa con matcha frappé y crema batida.",
          en: "Sweet strawberry purée blended with matcha frappé, topped with whipped cream.",
        },
        price: { amount: 105 },
      },
      { id: "matcha", name: { es: "Matcha", en: "Matcha" }, price: { amount: 75 } },
      { id: "taro", name: { es: "Taro frozen", en: "Frozen taro" }, price: { amount: 110 } },
      {
        id: "mal-querida",
        name: same("La mal querida"),
        desc: {
          es: "Pero todos la quieren: maracuyá, piña y fresa.",
          en: "But everybody wants her: passion fruit, pineapple and strawberry.",
        },
      },
      {
        id: "detox",
        name: { es: "Detox (jugo verde)", en: "Detox (green juice)" },
        desc: {
          es: "Espinaca, nopal, apio y piña con base de naranja o toronja.",
          en: "Spinach, cactus, celery and pineapple with orange or grapefruit base.",
        },
      },
      {
        id: "limonada-electrica",
        name: { es: "Limonada eléctrica", en: "Limonada eléctrica" },
        desc: { es: "Limonada frapeada con pepino y menta.", en: "Lemonade blended with cucumber and mint." },
      },
    ],
  },
  {
    id: "panaderia",
    label: { es: "Panadería", en: "Bakery" },
    items: [
      { id: "concha", name: { es: "Concha de vainilla o chocolate", en: "Vanilla or chocolate concha" }, price: { amount: 53 } },
      { id: "concha-tentacion", name: { es: "Concha tentación", en: "Temptation concha" }, price: { amount: 100 } },
      { id: "roll-canela", name: { es: "Roll de canela", en: "Cinnamon roll" }, price: { amount: 79 } },
      { id: "croissant", name: same("Croissant"), price: { amount: 68 } },
      { id: "croissant-almendra", name: { es: "Croissant de almendra", en: "Almond croissant" }, price: { amount: 89 } },
      { id: "chocolatin", name: { es: "Chocolatín", en: "Pain au chocolat" }, price: { amount: 68 } },
      { id: "panque-platano", name: { es: "Panqué de plátano", en: "Banana bread" }, price: { amount: 63 } },
      { id: "pastel-elote", name: { es: "Pastel de elote", en: "Corn cake" }, price: { amount: 147 } },
      { id: "cheesecake", name: { es: "Cheesecake New York", en: "New York cheesecake" }, price: { amount: 189 } },
    ],
  },
];

export const comboDeal = {
  name: { es: "Paquete chilaquiles", en: "Chilaquiles combo" } as L,
  desc: {
    es: "Chilaquiles con 2 huevos, jugo de 8 oz o fruta, y café o té.",
    en: "Chilaquiles with 2 eggs, 8 oz juice or fruit, and coffee or tea.",
  } as L,
  price: 326,
};

export function findItem(id: string): MenuItem | undefined {
  for (const c of menu) {
    const item = c.items.find((i) => i.id === id);
    if (item) return item;
  }
  return undefined;
}

export function findCategoryId(itemId: string): string | undefined {
  return menu.find((c) => c.items.some((i) => i.id === itemId))?.id;
}

export function formatPrice(amount: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "es" ? "es-MX" : "en-US", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
    currencyDisplay: "narrowSymbol",
  }).format(amount);
}
