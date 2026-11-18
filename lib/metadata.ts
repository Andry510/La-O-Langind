import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { getDictionary, type Locale } from "./i18n";
import { SITE_URL } from "./site";

export const displayFont = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display-face", display: "swap" });
export const bodyFont = Figtree({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1a13" },
  ],
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
