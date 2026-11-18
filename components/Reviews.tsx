import type { CSSProperties } from "react";
import { ArrowUpRight, Star } from "@phosphor-icons/react/ssr";
import { getDictionary, type Locale } from "@/lib/i18n";
import { reviews } from "@/lib/content";
import { tones, type Tone } from "@/lib/palette";
import { business, ratings } from "@/lib/site";
import { ButtonLink, SectionTitle } from "./ui";

const cardTones: Tone[] = ["rosa", "lavanda", "durazno", "salvia", "coral", "lima"];
const tilts = [-2, 1.5, -1, 2, -1.5, 1];

export function Reviews({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).reviews;
  const nf = new Intl.NumberFormat(locale === "es" ? "es-MX" : "en-US");

  return (
    <section id="opiniones" aria-labelledby="opiniones-title" className="pb-20 pt-4 md:pb-28 md:pt-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle id="opiniones-title" className="max-w-3xl">
          {t.title}
        </SectionTitle>

        {/* Calificaciones con enlace a la fuente */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={business.tripadvisorUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-papel py-2 pl-2 pr-5">
            <span className="display flex size-12 items-center justify-center rounded-full bg-lima text-2xl">{ratings.tripadvisor.score}</span>
            <span className="text-sm font-bold leading-tight">
              {t.tripadvisor(nf.format(ratings.tripadvisor.count))}
              <br />
              <span className="text-ink-soft group-hover:underline">{ratings.tripadvisor.award}</span>
            </span>
          </a>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-papel py-2 pl-2 pr-5">
            <span className="display flex size-12 items-center justify-center rounded-full bg-durazno text-2xl">{ratings.google.score}</span>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:underline">
              <Star size={16} weight="fill" className="text-durazno-ink" aria-hidden />
              {t.google(nf.format(ratings.google.count))}
            </span>
          </a>
        </div>
        <p className="mt-3 text-xs font-semibold text-ink-soft">{t.footnote}</p>
      </div>

      <ul className="no-scrollbar mx-auto mt-10 flex max-w-7xl snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-8 pt-3 md:grid md:grid-cols-3 md:gap-7 md:overflow-visible md:px-8">
        {reviews.map((r, i) => {
          const tone = tones[cardTones[i % cardTones.length]];
          return (
            <li
              key={r.author}
              className="reveal tilt w-[80%] shrink-0 snap-center sm:w-[55%] md:w-auto"
              style={{ "--tilt": `${tilts[i % tilts.length]}deg` } as CSSProperties}
            >
              <figure className={`relative flex h-full flex-col justify-between gap-6 rounded-[var(--radius-card)] p-7 ${tone.bg}`}>
                <blockquote lang={r.lang} className="text-xl font-bold leading-snug">
                  <p>“{r.quote}”</p>
                </blockquote>
                <figcaption className="text-sm font-semibold text-ink-soft">
                  <span className={`block text-base font-extrabold ${tone.ink}`}>{r.author}</span>
                  {t.original} {r.source}
                  {r.date ? `, ${r.date}` : ""}
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>

      <div className="mx-auto mt-4 flex max-w-7xl flex-wrap gap-3 px-4 md:px-8">
        <ButtonLink href={business.reviewUrl} external variant="secondary" data-track="click_leave_review" icon={<ArrowUpRight size={18} weight="bold" aria-hidden />}>
          {t.leave}
        </ButtonLink>
      </div>
    </section>
  );
}
