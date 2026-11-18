import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Nunito, Yellowtail } from "next/font/google";
import { getDictionary, type Locale } from "./i18n";
import { SITE_URL } from "./site";

// Display condensada (eje wdth), cuerpo redondeado como el anillo de la insignia y script para acentos puntuales.
export const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["wdth", "opsz"],
  variable: "--font-display-face",
  display: "swap",
});
export const bodyFont = Nunito({ subsets: ["latin"], variable: "--font-body", display: "swap" });
export const scriptFont = Yellowtail({ subsets: ["latin"], weight: "400", variable: "--font-script-face", display: "swap" });

export const fontVariables = `${displayFont.variable} ${bodyFont.variable} ${scriptFont.variable}`;

export const viewport: Viewport = {
  themeColor: "#fff7ec",
  colorScheme: "light",
};

export function buildMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  const path = locale === "es" ? "/" : "/en";
  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: path,
      languages: { "es-MX": "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: "La O Playa del Carmen",
      title: t.meta.title,
      description: t.meta.description,
      locale: locale === "es" ? "es_MX" : "en_US",
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description },
  };
}
