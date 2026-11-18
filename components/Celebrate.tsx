import Image from "next/image";
import { Coffee } from "@phosphor-icons/react/ssr";
import { getDictionary, type Locale } from "@/lib/i18n";
import { promotions } from "@/lib/content";
import { whatsappLink } from "@/lib/site";
import { ButtonLink, Script, SectionTitle } from "./ui";

export function Celebrate({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).celebrate;
  if (!promotions.birthday && !promotions.catering) return null;

  return (
    <section id="celebra" aria-labelledby="celebra-title" className="mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28">
      <SectionTitle id="celebra-title">{t.title}</SectionTitle>
      <div className="mt-10 grid gap-5 md:grid-cols-5 md:gap-6">
        {promotions.birthday && (
          // Póster de cumpleaños, como su pieza "El cumpleañero come gratis"
          <article className="reveal relative overflow-hidden rounded-[2rem] border-2 border-oro/30 bg-papel p-8 md:col-span-3 md:p-12">
            <Image src="/brand/flor-morada.webp" alt="" width={640} height={640} sizes="240px" className="pointer-events-none absolute -bottom-10 -right-8 w-44 md:w-60" />
            <Image src="/brand/flor-naranja.webp" alt="" width={480} height={480} sizes="120px" className="pointer-events-none absolute -left-6 -top-6 w-24 opacity-90" />
            <div className="relative flex max-w-md flex-col items-start gap-4">
              <Script className="-rotate-3">{t.birthday.script}</Script>
              <h3 className="display text-5xl text-oro md:text-6xl">{t.birthday.title}</h3>
              <p className="text-lg font-semibold leading-relaxed">{t.birthday.body}</p>
              <p className="text-sm font-semibold text-ink-soft">{t.birthday.terms}</p>
              <ButtonLink href={whatsappLink(t.birthday.message)} external data-track="click_whatsapp_birthday" className="mt-2">
                {t.birthday.cta}
              </ButtonLink>
            </div>
          </article>
        )}
        {promotions.catering && (
          <article className="reveal flex flex-col items-start gap-4 rounded-[2rem] bg-durazno p-8 md:col-span-2 md:p-10">
            <span className="flex size-14 items-center justify-center rounded-full bg-papel text-durazno-ink">
              <Coffee size={30} weight="duotone" aria-hidden />
            </span>
            <h3 className="display text-4xl md:text-5xl">{t.catering.title}</h3>
            <p className="text-lg font-semibold leading-relaxed">{t.catering.body}</p>
            <ButtonLink href={whatsappLink(t.catering.message)} external variant="dark" data-track="click_whatsapp_catering" className="mt-auto">
              {t.catering.cta}
            </ButtonLink>
          </article>
        )}
      </div>
    </section>
  );
}
