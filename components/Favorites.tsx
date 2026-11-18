import { getDictionary, type Locale } from "@/lib/i18n";
import { comboDeal, findItem, formatPrice } from "@/lib/menu";
import { favoriteIds, type PhotoKey } from "@/lib/content";
import { Photo } from "./Photo";
import { SectionTitle } from "./ui";

// Celdas del bento (5 platillos): grande, dos medianas, dos anchas.
const cells = [
  "md:col-span-4 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-3",
];
const media = ["aspect-[4/3] md:aspect-auto md:h-full md:min-h-[26rem]", "aspect-square md:aspect-[4/3]", "aspect-square md:aspect-[4/3]", "aspect-[16/10]", "aspect-[16/10]"];

export function Favorites({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const items = favoriteIds.map((id) => ({ id, item: findItem(id) })).filter((x) => x.item);

  return (
    <section id="favoritos" aria-labelledby="favoritos-title" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-2xl">
        <SectionTitle id="favoritos-title">{t.favorites.title}</SectionTitle>
        <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-ink-soft">{t.favorites.subtitle}</p>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-6 md:grid-rows-[auto_auto_auto]">
        {items.map(({ id, item }, i) => (
          <li key={id} className={`reveal flex flex-col gap-4 ${cells[i] ?? "md:col-span-3"}`}>
            <Photo
              slot={id as PhotoKey}
              alt={item!.name[locale]}
              pendingLabel={t.photoPending}
              sizes={i === 0 ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 30vw, 100vw"}
              className={`rounded-[var(--radius-media)] ${media[i] ?? "aspect-[4/3]"} ${i === 0 ? "md:flex-1" : ""}`}
            />
            <div className="flex items-baseline justify-between gap-4">
              <h3 className={`font-display font-bold tracking-tight ${i === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}>{item!.name[locale]}</h3>
              {item!.price && <span className="shrink-0 font-semibold tabular-nums text-ink-soft">{formatPrice(item!.price.amount, locale)}</span>}
            </div>
            {item!.desc && <p className="-mt-2 max-w-[60ch] leading-relaxed text-ink-soft">{item!.desc[locale]}</p>}
          </li>
        ))}
      </ul>

      <p className="mt-12 flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-full bg-surface px-6 py-4 text-ink-soft">
        <span className="font-display font-bold text-ink">{t.favorites.combo}</span>
        <span>{comboDeal.desc[locale]}</span>
        <span className="font-semibold tabular-nums text-ink">{formatPrice(comboDeal.price, locale)}</span>
      </p>
    </section>
  );
}
