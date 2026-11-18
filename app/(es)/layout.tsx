import "../globals.css";
import { buildMetadata, fontVariables } from "@/lib/metadata";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata("es");

export default function SpanishLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${fontVariables} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
