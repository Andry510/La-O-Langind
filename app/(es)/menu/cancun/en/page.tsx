import type { Metadata } from "next";
import { CancunMenu } from "@/components/CancunMenu";

export const metadata: Metadata = {
  title: "Menu | La O Cancún",
  robots: { index: false },
  alternates: { canonical: "/menu/cancun/en" },
};

export default function Page() {
  return <CancunMenu locale="en" />;
}
