import "../../globals.css";
import { bodyFont, buildMetadata, displayFont } from "@/lib/metadata";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata("en");

export default function EnglishLayout({ children }: LayoutProps<"/en">) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
