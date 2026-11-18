import "../../globals.css";
import { buildMetadata, fontVariables } from "@/lib/metadata";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata("en");

export default function EnglishLayout({ children }: LayoutProps<"/en">) {
  return (
    <html lang="en" className={`${fontVariables} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
