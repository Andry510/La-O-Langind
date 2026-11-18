import type { Metadata } from "next";
import { CancunMenu } from "@/components/CancunMenu";

export const metadata: Metadata = {
  title: "Menú | La O Cancún",
  robots: { index: false },
  alternates: { canonical: "/menu/cancun" },
};

export default function Page() {
  return <CancunMenu locale="es" />;
}
