import { Sparkle } from "@phosphor-icons/react/ssr";
import { getDictionary, type Locale } from "@/lib/i18n";
import { formatTime } from "@/lib/hours";
import { hours, ratings } from "@/lib/site";

// Única franja animada de la página. Con movimiento reducido queda fija y se puede desplazar.
export function Marquee({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).marquee;
  const nf = new Intl.NumberFormat(locale === "es" ? "es-MX" : "en-US");
  const items = [
    t.tripadvisor(String(ratings.tripadvisor.score)),
    ratings.tripadvisor.award,
    t.google(nf.format(ratings.google.count)),
    ...t.items,
    t.hours(formatTime(hours.opens, locale), formatTime(hours.closes, locale)),
  ];
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-6 px-6">
          <span className="display whitespace-nowrap text-3xl md:text-4xl">{item}</span>
          <Sparkle size={22} weight="fill" className="text-verde" aria-hidden />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee overflow-hidden bg-lima py-4 text-ink motion-reduce:overflow-x-auto">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
