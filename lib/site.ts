// Fuente única de datos del negocio. Verificados en la investigación (research-la-o/, 17-nov-2026).
// Los campos marcados TODO deben confirmarse con el restaurante antes de publicar.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://laorestaurante.com").replace(/\/$/, "");

export const TIME_ZONE = "America/Cancun";

export const business = {
  name: "La O Playa del Carmen",
  shortName: "La O",
  alternateNames: ["La O", "La O Playa", "La Orgánica Playa del Carmen"],
  phoneE164: "+529842092549",
  phoneDisplay: "984 209 2549",
  whatsappNumber: "529842092549",
  address: {
    street: "Avenida 10 entre calle 34 y 38, Centro",
    locality: "Playa del Carmen",
    region: "Q.R.",
    postalCode: "77710",
    country: "MX",
  },
  geo: { lat: 20.6349567, lng: -87.0680066 },
  priceRange: "$200-300 MXN",
  // Google Maps (ficha verificada). TODO: sustituir por el enlace "pedir reseña" del perfil de Google Business.
  // CID derivado del identificador de la ficha (ftid 0x8f4e43fa89dc399f:0x3625ba10a6d6445d).
  mapsUrl: "https://maps.google.com/?cid=3901729232867705949",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=20.6349567%2C-87.0680066",
  reviewUrl: "https://www.google.com/maps/search/?api=1&query=La+O+Playa+del+Carmen",
  tripadvisorUrl:
    "https://www.tripadvisor.com.mx/Restaurant_Review-g150812-d25067123-Reviews-La_O_Playa_Del_Carmen-Playa_del_Carmen_Yucatan_Peninsula.html",
  instagramUrl: "https://www.instagram.com/laoplaya/",
  // TODO: URL exacta de la página de Facebook (el perfil existe, enlazado desde Instagram).
  facebookUrl: null as string | null,
  // TODO: portal de facturación vigente.
  invoiceUrl: null as string | null,
  menuPdf: {
    es: "https://la-o-restaurante.s3.us-east-2.amazonaws.com/Playa/Menu/MenuEspPlaya.pdf",
    en: "https://la-o-restaurante.s3.us-east-2.amazonaws.com/Playa/Menu/MenuEnPlaya.pdf",
  },
} as const;

// Sucursal Cancún: se conservan sus menús (ruta /menu/cancun del sitio actual, usada probablemente por QR).
const S3 = "https://la-o-restaurante.s3.us-east-2.amazonaws.com/Cun/Menu";
export const cancunMenus = {
  es: { breakfast: `${S3}/Esp/MenuEspDesayunoCun.pdf`, lunch: `${S3}/Esp/MenuEspComidaCun.pdf` },
  en: { breakfast: `${S3}/Ingles/MenuEnDesayunoCun.pdf`, lunch: `${S3}/Ingles/MenuEnComidaCun.pdf` },
} as const;

// Horario diario (Google Maps e Instagram). Desayunos 8 a 13 h, comidas 13 a 16 h.
// TODO: confirmar hora de última orden.
export const hours = {
  opens: "08:00",
  closes: "16:00",
  breakfast: { from: "08:00", to: "13:00" },
  lunch: { from: "13:00", to: "16:00" },
} as const;

// Calificaciones públicas, capturadas el 17-nov-2026. Actualizar periódicamente.
export const ratings = {
  capturedAt: "2026-11",
  tripadvisor: { score: 4.8, count: 698, rank: 43, of: 1714, award: "Travellers' Choice 2026" },
  google: { score: 4.6, count: 1229 },
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
