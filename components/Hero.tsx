import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowDown, Star, Trophy, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { getDictionary, type Locale } from "@/lib/i18n";
import { formatTime } from "@/lib/hours";
import { business, hours, ratings, whatsappLink } from "@/lib/site";
import { OpenStatus } from "./OpenStatus";
import { Photo } from "./Photo";
import { ButtonLink } from "./ui";

export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const nf = new Intl.NumberFormat(locale === "es" ? "es-MX" : "en-US");

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:px-8 md:pb-20 md:pt-16 lg:min-h-[calc(100dvh-4.5rem)]">
        <div className="flex flex-col items-start gap-6">
          <div className="rise" style={{ "--i": 0 } as CSSProperties}>
            <OpenStatus locale={locale} />
          </div>
          <h1
            id="hero-title"
            className="rise font-display text-[2.6rem] font-extrabold leading-[1] tracking-tight text-balance sm:text-6xl lg:text-7xl"
            style={{ "--i": 1 } as CSSProperties}
          >
            {t.hero.title}
          </h1>
          <p className="rise max-w-[34ch] text-lg leading-relaxed text-ink-soft md:text-xl" style={{ "--i": 2 } as CSSProperties}>
            {t.hero.subtitle(formatTime(hours.opens, locale), formatTime(hours.closes, locale))}
          </p>
          <div className="rise flex flex-wrap gap-3" style={{ "--i": 3 } as CSSProperties}>
            <ButtonLink
              href={whatsappLink(t.whatsappMessage)}
              external
              data-track="click_whatsapp_hero"
              icon={<WhatsappLogo size={20} weight="bold" aria-hidden />}
            >
              {t.cta.book}
            </ButtonLink>
            <ButtonLink href="#menu" variant="secondary" data-track="view_menu_hero" icon={<ArrowDown size={18} weight="bold" aria-hidden />}>
              {t.cta.menu}
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] md:max-w-none">
          <Photo
            slot="hero"
            alt={t.hero.photoAlt}
            pendingLabel={t.photoPending}
            sizes="(min-width: 768px) 45vw, 90vw"
            critical
            className="aspect-[4/5] rounded-[50%]"
          />
          <Image
            src="/brand/flor-naranja.webp"
            alt=""
            width={480}
            height={480}
            sizes="(min-width: 768px) 160px, 112px"
            loading="eager"
            data-critical=""
            className="pointer-events-none absolute -bottom-6 -left-6 w-28 md:-left-10 md:w-40"
          />
          <Image
            src="/brand/flor-morada.webp"
            alt=""
            width={640}
            height={640}
            sizes="(min-width: 768px) 112px, 80px"
            loading="eager"
            data-critical=""
            className="pointer-events-none absolute -right-3 -top-4 w-20 md:-right-6 md:w-28"
          />
        </div>
      </div>

      {/* Prueba social: datos públicos con enlace a la fuente */}
      <div className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:grid-cols-3 md:px-8">
          <a href={business.tripadvisorUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
            <span className="font-display text-4xl font-extrabold tracking-tight">{ratings.tripadvisor.score}</span>
            <span className="text-sm leading-snug text-ink-soft">
              <span className="font-semibold text-ink group-hover:underline">{t.trust.tripadvisor}</span>
              <br />
              {t.trust.tripadvisorDetail(nf.format(ratings.tripadvisor.count), ratings.tripadvisor.rank, nf.format(ratings.tripadvisor.of))}
            </span>
          </a>
          <a href={business.tripadvisorUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-selva text-lima">
              <Trophy size={22} weight="fill" aria-hidden />
            </span>
            <span className="text-sm leading-snug text-ink-soft">
              <span className="font-semibold text-ink group-hover:underline">{ratings.tripadvisor.award}</span>
              <br />
              {t.trust.award}
            </span>
          </a>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-display text-4xl font-extrabold tracking-tight">
              {ratings.google.score}
              <Star size={22} weight="fill" className="text-[#d9a400]" aria-hidden />
            </span>
            <span className="text-sm leading-snug text-ink-soft">
              <span className="font-semibold text-ink group-hover:underline">{t.trust.google}</span>
              <br />
              {t.trust.googleDetail(nf.format(ratings.google.count))}
            </span>
          </a>
        </div>
        <p className="mx-auto max-w-7xl px-4 pb-4 text-xs text-ink-soft md:px-8">{t.trust.footnote}</p>
      </div>
    </section>
  );
}
