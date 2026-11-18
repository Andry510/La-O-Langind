import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { getDictionary, type Locale } from "@/lib/i18n";
import { reviews } from "@/lib/content";
import { business, ratings } from "@/lib/site";
import { ButtonLink, SectionTitle } from "./ui";

export function Reviews({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).reviews;

  return (
    <section id="opiniones" aria-labelledby="opiniones-title" className="border-y border-line bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle id="opiniones-title" className="max-w-2xl">
          {t.title}
        </SectionTitle>
      </div>

      {/* Fila deslizable en móvil; cuadrícula en escritorio */}
      <ul className="no-scrollbar mx-auto mt-12 flex max-w-7xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-8">
        {reviews.map((r) => (
          <li key={r.author} className="reveal w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto">
            <figure className="flex h-full flex-col justify-between gap-6 rounded-[var(--radius-media)] bg-bg p-7">
              <blockquote lang={r.lang} className="text-lg leading-relaxed">
                <p>“{r.quote}”</p>
              </blockquote>
              <figcaption className="text-sm text-ink-soft">
                <span className="block font-semibold text-ink">{r.author}</span>
                {t.original} {r.source}
                {r.date ? `, ${r.date}` : ""}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap gap-3 px-4 md:px-8">
        <ButtonLink href={business.reviewUrl} external variant="secondary" data-track="click_leave_review">
          {t.leave}
        </ButtonLink>
        <ButtonLink
          href={business.tripadvisorUrl}
          external
          variant="secondary"
          icon={<ArrowUpRight size={18} weight="bold" aria-hidden />}
          aria-label={`${t.seeAll} (${ratings.tripadvisor.count})`}
        >
          {t.seeAll}
        </ButtonLink>
      </div>
    </section>
  );
}
