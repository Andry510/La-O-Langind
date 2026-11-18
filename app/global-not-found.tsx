import "./globals.css";
import type { Metadata } from "next";
import { bodyFont, displayFont } from "@/lib/metadata";
import Link from "next/link";
import { Wordmark } from "@/components/ui";

export const metadata: Metadata = {
  title: "Página no encontrada | La O Playa del Carmen",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="es-MX" className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
      <body>
        <main className="mx-auto flex min-h-[100dvh] max-w-xl flex-col items-start justify-center gap-6 px-4">
          <Wordmark />
          <h1 className="font-display text-4xl font-extrabold tracking-tight">Esta página se nos quemó.</h1>
          <p className="text-lg text-ink-soft">La página que buscas no existe. El menú y las reservas siguen en la página principal.</p>
          <Link href="/" className="inline-flex min-h-12 items-center rounded-full bg-lima px-6 font-semibold text-lima-ink">
            Ir al inicio
          </Link>
          <a href="/en" lang="en" className="text-sm font-semibold text-ink-soft underline underline-offset-4">
            Go to the English page
          </a>
        </main>
      </body>
    </html>
  );
}
