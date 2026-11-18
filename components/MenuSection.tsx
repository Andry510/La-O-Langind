"use client";

import { useEffect, useId, useRef, useSyncExternalStore, type KeyboardEvent } from "react";
import { Bread, Cake, Coffee, EggCrack, FilePdf, Hamburger } from "@phosphor-icons/react";
import { menu, formatPrice } from "@/lib/menu";
import { categoryTone, tones } from "@/lib/palette";
import { business } from "@/lib/site";
import { getDictionary, type Locale } from "@/lib/i18n";

const icons: Record<string, typeof Cake> = { dulces: Cake, huevos: EggCrack, comidas: Hamburger, bebidas: Coffee, panaderia: Bread };

// La categoría activa vive en el hash (#menu-bebidas): enlazable desde la navegación tipo historias y compartible.
const HASH_EVENT = "lao:hash";
function subscribe(cb: () => void) {
  window.addEventListener("hashchange", cb);
  window.addEventListener(HASH_EVENT, cb);
  return () => {
    window.removeEventListener("hashchange", cb);
    window.removeEventListener(HASH_EVENT, cb);
  };
}
const getHash = () => window.location.hash;
const indexFromHash = (hash: string) => Math.max(0, menu.findIndex((c) => hash === `#menu-${c.id}`));

export function MenuSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).menu;
  const hash = useSyncExternalStore(subscribe, getHash, () => "");
  const active = indexFromHash(hash);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tablistRef = useRef<HTMLDivElement>(null);
  const uid = useId();

  // En móvil las pestañas se desplazan en horizontal: mantener visible la activa (sin mover la página en vertical).
  useEffect(() => {
    const list = tablistRef.current;
    const tab = tabRefs.current[active];
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: tab.offsetLeft - 16, behavior: "smooth" }); // la lista es position:relative (offsetParent)
  }, [active]);

  function select(i: number) {
    history.replaceState(null, "", `#menu-${menu[i].id}`);
    window.dispatchEvent(new Event(HASH_EVENT));
  }

  // Patrón de pestañas WAI-ARIA: flechas, Inicio y Fin mueven el foco y activan la pestaña.
  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const last = menu.length - 1;
    const next =
      e.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : e.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section id="menu" aria-labelledby="menu-title" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      {/* Anclas para los enlaces #menu-<categoría> */}
      {menu.map((c) => (
        <span key={c.id} id={`menu-${c.id}`} aria-hidden className="block scroll-mt-24" />
      ))}
      <h2 id="menu-title" className="display text-[2.75rem] sm:text-6xl lg:text-7xl">
        {t.title}
      </h2>

      <div ref={tablistRef} role="tablist" aria-label={t.tabsLabel} className="no-scrollbar relative -mx-4 mt-8 flex snap-x gap-2.5 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:px-0">
        {menu.map((c, i) => {
          const selected = i === active;
          const tone = tones[categoryTone[c.id] ?? "lima"];
          const Icon = icons[c.id] ?? Cake;
          return (
            <button
              key={c.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              type="button"
              id={`${uid}-tab-${c.id}`}
              aria-selected={selected}
              aria-controls={`${uid}-panel-${c.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={onKeyDown}
              data-track="menu_category"
              className={`inline-flex min-h-12 shrink-0 snap-start items-center gap-2 rounded-full px-5 font-extrabold transition-[background-color,box-shadow,transform] duration-200 active:scale-[0.97] ${
                selected ? `${tone.bg} ${tone.ink} shadow-[inset_0_0_0_2px_currentColor]` : "bg-papel text-ink-soft hover:text-ink"
              }`}
            >
              <Icon size={20} weight={selected ? "fill" : "bold"} aria-hidden />
              <span className={selected ? "text-ink" : ""}>{c.label[locale]}</span>
            </button>
          );
        })}
      </div>

      {/* Todas las categorías van en el HTML (indexables); solo la activa es visible. */}
      {menu.map((c, i) => {
        const tone = tones[categoryTone[c.id] ?? "lima"];
        return (
          <div
            key={c.id}
            role="tabpanel"
            id={`${uid}-panel-${c.id}`}
            aria-labelledby={`${uid}-tab-${c.id}`}
            hidden={i !== active}
            tabIndex={0}
            className={`mt-6 rounded-[2rem] p-3 md:p-4 ${tone.bg}`}
          >
            <div className="rounded-[1.6rem] bg-papel p-6 md:p-10">
              {c.note && <p className={`mb-8 inline-block rounded-full px-4 py-1.5 text-sm font-extrabold ${tone.bg} ${tone.ink}`}>{c.note[locale]}</p>}
              <ul className="grid gap-x-12 gap-y-7 md:grid-cols-2">
                {c.items.map((item) => (
                  <li key={item.id}>
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-lg font-extrabold">{item.name[locale]}</h3>
                      <span aria-hidden className="mb-1 flex-1 border-b-2 border-dotted border-ink/20" />
                      {item.price && (
                        <span className="shrink-0 font-extrabold tabular-nums">
                          {item.price.from && <span className="mr-1 text-sm font-semibold text-ink-soft">{t.from}</span>}
                          {formatPrice(item.price.amount, locale)}
                        </span>
                      )}
                    </div>
                    {item.desc && <p className="mt-1 max-w-[56ch] font-medium leading-relaxed text-ink-soft">{item.desc[locale]}</p>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}

      <div className="mt-6 flex flex-col gap-3 text-sm font-semibold text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p>{t.priceNote}</p>
        <a
          href={business.menuPdf[locale]}
          target="_blank"
          rel="noopener noreferrer"
          data-track="download_menu_pdf"
          className="inline-flex items-center gap-2 font-extrabold text-ink underline-offset-4 hover:underline"
        >
          <FilePdf size={20} aria-hidden />
          {t.pdf} <span className="font-semibold text-ink-soft">({t.pdfSize})</span>
        </a>
      </div>
    </section>
  );
}
