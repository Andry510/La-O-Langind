// Pasteles por categoría, como las historias destacadas de @laoplaya.
// Clases completas (no interpoladas) para que Tailwind las detecte.

export type Tone = "rosa" | "durazno" | "salvia" | "lavanda" | "coral" | "lima";

export const tones: Record<Tone, { bg: string; ink: string; ring: string }> = {
  rosa: { bg: "bg-rosa", ink: "text-rosa-ink", ring: "ring-rosa-ink/25" },
  durazno: { bg: "bg-durazno", ink: "text-durazno-ink", ring: "ring-durazno-ink/25" },
  salvia: { bg: "bg-salvia", ink: "text-salvia-ink", ring: "ring-salvia-ink/25" },
  lavanda: { bg: "bg-lavanda", ink: "text-lavanda-ink", ring: "ring-lavanda-ink/25" },
  coral: { bg: "bg-coral", ink: "text-coral-ink", ring: "ring-coral-ink/25" },
  lima: { bg: "bg-lima-suave", ink: "text-verde", ring: "ring-verde/25" },
};

/** Color de cada categoría del menú (ids de lib/menu.ts). */
export const categoryTone: Record<string, Tone> = {
  dulces: "rosa",
  huevos: "durazno",
  comidas: "salvia",
  bebidas: "lavanda",
  panaderia: "coral",
};
