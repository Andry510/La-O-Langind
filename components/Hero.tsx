import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowDown, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { getDictionary, type Locale } from "@/lib/i18n";
import { formatTime } from "@/lib/hours";
import { hours, whatsappLink } from "@/lib/site";
import { OpenStatus } from "./OpenStatus";
import { Photo } from "./Photo";
import { Badge, ButtonLink } from "./ui";

const i = (n: number) => ({ "--i": n }) as CSSProperties;
const tilt = (deg: number) => ({ "--tilt": `${deg}deg` }) as CSSProperties;
const frame = "tilt absolute bg-papel shadow-[0_18px_40px_-18px_rgb(31_58_26/0.45)]";

export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = t.hero.photos;

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-6 md:grid-cols-2 md:gap-10 md:px-8 md:pb-24 md:pt-10">
        <div className="flex flex-col items-start gap-6">
          <div className="rise" style={i(0)}>
            <OpenStatus locale={locale} />
          </div>
          <h1 id="hero-title" className="rise display text-[3.6rem] text-balance sm:text-7xl lg:text-[6.5rem]" style={i(1)}>
            {t.hero.title}
          </h1>
          <p className="rise max-w-[32ch] text-lg font-semibold leading-relaxed text-ink-soft md:text-xl" style={i(2)}>
            {t.hero.subtitle(formatTime(hours.opens, locale), formatTime(hours.closes, locale))}
          </p>
          <div className="rise flex flex-wrap gap-3" style={i(3)}>
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

        {/* Collage tipo sticker: foto principal, dos secundarias y la insignia girando */}
        <div className="relative mx-auto aspect-[1/1.05] w-full max-w-[30rem]">
          <div className={`${frame} left-[10%] top-[4%] w-[72%] rounded-[2rem] p-2.5`} style={tilt(-3)}>
            <Photo slot="hero" alt={p.main} pendingLabel={t.photoPending} sizes="(min-width: 768px) 34vw, 70vw" critical preload className="aspect-[4/5] rounded-[1.6rem]" />
          </div>
          <div className={`${frame} bottom-[2%] left-0 w-[44%] rounded-full p-2`} style={tilt(4)}>
            <Photo slot="chilaquiles-la-o" alt={p.side} pendingLabel={t.photoPending} sizes="(min-width: 768px) 20vw, 42vw" critical className="aspect-square rounded-full" />
          </div>
          <div className={`${frame} right-0 top-[38%] w-[34%] rounded-[1.5rem] p-2`} style={tilt(7)}>
            <Photo slot="cafe-olla" alt={p.cup} pendingLabel={t.photoPending} sizes="(min-width: 768px) 16vw, 32vw" critical className="aspect-[4/5] rounded-[1.1rem]" />
          </div>
          <Badge spin className="absolute -top-2 right-[2%] size-28 drop-shadow-[0_10px_18px_rgb(31_58_26/0.25)] md:size-32" />
          <span
            aria-hidden
            className="tilt absolute bottom-[14%] right-[4%] rounded-full bg-rosa px-5 py-2 font-script text-3xl text-rosa-ink shadow-[0_8px_20px_-10px_rgb(168_50_106/0.6)]"
            style={tilt(-8)}
          >
            {t.hero.sticker}
          </span>
          <Image
            src="/brand/flor-naranja.webp"
            alt=""
            width={480}
            height={480}
            sizes="(min-width: 768px) 120px, 88px"
            loading="eager"
            data-critical=""
            className="pointer-events-none absolute bottom-[34%] left-[-4%] w-22 md:w-30"
          />
          <Image
            src="/brand/flor-morada.webp"
            alt=""
            width={640}
            height={640}
            sizes="(min-width: 768px) 112px, 80px"
            loading="eager"
            data-critical=""
            className="pointer-events-none absolute bottom-[-4%] right-[30%] w-20 md:w-28"
          />
        </div>
      </div>
    </section>
  );
}
