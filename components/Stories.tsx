import { Bread, Cake, Coffee, Confetti, EggCrack, Hamburger, MapPin } from "@phosphor-icons/react/ssr";
import { getDictionary, type Locale } from "@/lib/i18n";
import { tones, type Tone } from "@/lib/palette";

// Navegación tipo "historias destacadas" de Instagram: cada círculo pastel lleva a una categoría del menú o a una sección.
const items: { key: keyof ReturnType<typeof getDictionary>["stories"]["items"]; href: string; tone: Tone; Icon: typeof Cake }[] = [
  { key: "dulces", href: "#menu-dulces", tone: "rosa", Icon: Cake },
  { key: "huevos", href: "#menu-huevos", tone: "durazno", Icon: EggCrack },
  { key: "comidas", href: "#menu-comidas", tone: "salvia", Icon: Hamburger },
  { key: "bebidas", href: "#menu-bebidas", tone: "lavanda", Icon: Coffee },
  { key: "panaderia", href: "#menu-panaderia", tone: "coral", Icon: Bread },
  { key: "celebra", href: "#celebra", tone: "rosa", Icon: Confetti },
  { key: "visita", href: "#visitanos", tone: "lima", Icon: MapPin },
];

export function Stories({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).stories;
  return (
    <nav aria-label={t.label} className="mx-auto max-w-7xl">
      {/* pt-3: el contenedor deslizable recorta en vertical; deja sitio al anillo y al salto del hover */}
      <ul className="no-scrollbar flex snap-x gap-4 overflow-x-auto px-4 pb-3 pt-3 md:justify-center md:gap-6 md:px-8">
        {items.map(({ key, href, tone, Icon }) => (
          <li key={key} className="snap-start">
            <a href={href} className="group flex w-[4.75rem] flex-col items-center gap-2 text-center md:w-24">
              <span className="rounded-full p-[3px] ring-2 ring-lima transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-active:scale-95">
                <span className={`flex size-[4.25rem] items-center justify-center rounded-full ${tones[tone].bg} ${tones[tone].ink} md:size-20`}>
                  <Icon size={30} weight="duotone" aria-hidden />
                </span>
              </span>
              <span className="text-sm font-extrabold leading-tight">{t.items[key]}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
