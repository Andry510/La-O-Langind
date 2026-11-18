import "../globals.css";
import { bodyFont, buildMetadata, displayFont } from "@/lib/metadata";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata("es");

export default function SpanishLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
