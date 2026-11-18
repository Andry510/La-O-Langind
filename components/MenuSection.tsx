"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { FilePdf } from "@phosphor-icons/react";
import { menu, formatPrice } from "@/lib/menu";
import { business } from "@/lib/site";
import { getDictionary, type Locale } from "@/lib/i18n";

export function MenuSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).menu;
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();

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
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section id="menu" aria-labelledby="menu-title" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <h2 id="menu-title" className="font-display text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
        {t.title}
      </h2>

      <div
        role="tablist"
        aria-label={t.tabsLabel}
        className="no-scrollbar -mx-4 mt-10 flex snap-x gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:px-0"
      >
        {menu.map((c, i) => {
          const selected = i === active;
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
              onClick={() => setActive(i)}
              onKeyDown={onKeyDown}
              data-track="menu_category"
              className={`min-h-11 shrink-0 snap-start rounded-full px-5 text-[0.95rem] font-semibold transition-colors ${
                selected ? "bg-selva text-selva-ink" : "bg-surface text-ink-soft hover:text-ink"
              }`}
            >
              {c.label[locale]}
            </button>
          );
        })}
      </div>

      {/* Todas las categorías van en el HTML (indexables); solo la activa es visible. */}
      {menu.map((c, i) => (
      <div
        key={c.id}
        role="tabpanel"
        id={`${uid}-panel-${c.id}`}
        aria-labelledby={`${uid}-tab-${c.id}`}
        hidden={i !== active}
        tabIndex={0}
        className="mt-8 rounded-[var(--radius-media)] bg-surface p-6 md:p-10"
      >
        {c.note && <p className="mb-8 text-sm font-medium text-ink-soft">{c.note[locale]}</p>}
        <ul className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {c.items.map((item) => (
            <li key={item.id}>
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-lg font-bold tracking-tight">{item.name[locale]}</h3>
                <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-ink/25" />
                {item.price && (
                  <span className="shrink-0 font-semibold tabular-nums">
                    {item.price.from && <span className="mr-1 text-sm font-normal text-ink-soft">{t.from}</span>}
                    {formatPrice(item.price.amount, locale)}
                  </span>
                )}
              </div>
              {item.desc && <p className="mt-1.5 max-w-[56ch] leading-relaxed text-ink-soft">{item.desc[locale]}</p>}
            </li>
          ))}
        </ul>
      </div>
      ))}

      <div className="mt-6 flex flex-col gap-3 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p>{t.priceNote}</p>
        <a
          href={business.menuPdf[locale]}
          target="_blank"
          rel="noopener noreferrer"
          data-track="download_menu_pdf"
          className="inline-flex items-center gap-2 font-semibold text-ink underline-offset-4 hover:underline"
        >
          <FilePdf size={20} aria-hidden />
          {t.pdf} <span className="font-normal text-ink-soft">({t.pdfSize})</span>
        </a>
      </div>
    </section>
  );
}
