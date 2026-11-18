import type { CSSProperties } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";
import { comboDeal, findCategoryId, findItem, formatPrice } from "@/lib/menu";
import { favoriteIds, type PhotoKey } from "@/lib/content";
import { categoryTone, tones } from "@/lib/palette";
import { Photo } from "./Photo";
import { SectionTitle } from "./ui";

// Escritorio: tarjeta grande + cuadrícula 2x2. Móvil: carrusel deslizable.
const layout = ["md:col-span-6 md:row-span-2", "md:col-span-3", "md:col-span-3", "md:col-span-3", "md:col-span-3"];
const tilts = [-1.5, 2, -2, 1.5, -1];

export function Favorites({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const items = favoriteIds.flatMap((id) => {
    const item = findItem(id);
    return item ? [{ id, item, tone: tones[categoryTone[findCategoryId(id) ?? ""] ?? "lima"] }] : [];
  });

  return (
    <section id="favoritos" aria-labelledby="favoritos-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle id="favoritos-title" className="max-w-3xl">
          {t.favorites.title}
        </SectionTitle>
        <p className="mt-4 max-w-[46ch] text-lg font-semibold text-ink-soft">{t.favorites.subtitle}</p>
      </div>

      <ul className="no-scrollbar mx-auto mt-10 flex max-w-7xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 pt-2 md:grid md:grid-cols-12 md:gap-6 md:overflow-visible md:px-8">
        {items.map(({ id, item, tone }, i) => {
          const big = i === 0;
          return (
            <li
              key={id}
              className={`reveal tilt w-[78%] shrink-0 snap-center sm:w-[46%] md:w-auto ${layout[i] ?? "md:col-span-3"}`}
              style={{ "--tilt": `${tilts[i] ?? 0}deg` } as CSSProperties}
            >
              <article className={`flex h-full flex-col gap-4 rounded-[var(--radius-card)] p-5 ${tone.bg} ${big ? "md:justify-center md:gap-6 md:p-10" : ""}`}>
                <Photo
                  slot={id as PhotoKey}
                  alt={item.name[locale]}
                  pendingLabel={t.photoPending}
                  sizes={big ? "(min-width: 768px) 40vw, 75vw" : "(min-width: 768px) 20vw, 75vw"}
                  className={`mx-auto aspect-square w-full rounded-full ring-[6px] ring-papel ${big ? "md:w-[94%]" : ""}`}
                />
                <div className={`flex items-end justify-between gap-3 ${big ? "" : "mt-auto"}`}>
                  <h3 className={`display ${big ? "text-4xl md:text-6xl" : "text-[1.9rem]"}`}>{item.name[locale]}</h3>
                  {item.price && (
                    <span className={`shrink-0 rounded-full bg-papel px-3 py-1 font-extrabold tabular-nums ${tone.ink}`}>
                      {formatPrice(item.price.amount, locale)}
                    </span>
                  )}
                </div>
                {item.desc && <p className="font-semibold leading-relaxed text-ink-soft">{item.desc[locale]}</p>}
              </article>
            </li>
          );
        })}
      </ul>

      <div className="mx-auto mt-6 max-w-7xl px-4 md:px-8">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-[var(--radius-card)] border-2 border-dashed border-ink/25 px-6 py-4 font-semibold text-ink-soft">
          <span className="display text-2xl text-ink">{t.favorites.combo}</span>
          <span>{comboDeal.desc[locale]}</span>
          <span className="rounded-full bg-lima px-3 py-0.5 font-extrabold tabular-nums text-ink">{formatPrice(comboDeal.price, locale)}</span>
        </p>
      </div>
    </section>
  );
}
