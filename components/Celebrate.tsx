import Image from "next/image";
import { Cake, Coffee } from "@phosphor-icons/react/ssr";
import { getDictionary, type Locale } from "@/lib/i18n";
import { promotions } from "@/lib/content";
import { whatsappLink } from "@/lib/site";
import { ButtonLink, SectionTitle } from "./ui";

export function Celebrate({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).celebrate;
  if (!promotions.birthday && !promotions.catering) return null;

  return (
    <section aria-labelledby="celebra-title" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <SectionTitle id="celebra-title">{t.title}</SectionTitle>
      <div className="mt-12 grid gap-6 md:grid-cols-5">
        {promotions.birthday && (
          <article className="reveal relative overflow-hidden rounded-[var(--radius-media)] bg-lima p-8 text-lima-ink md:col-span-3 md:p-12">
            <Image
              src="/brand/flor-morada.webp"
              alt=""
              width={640}
              height={640}
              className="pointer-events-none absolute -bottom-10 -right-10 w-44 opacity-90 md:w-56"
            />
            <div className="relative flex max-w-md flex-col items-start gap-5">
              <Cake size={36} weight="duotone" aria-hidden />
              <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{t.birthday.title}</h3>
              <p className="text-lg leading-relaxed">{t.birthday.body}</p>
              <p className="text-sm opacity-80">{t.birthday.terms}</p>
              <a
                href={whatsappLink(t.birthday.message)}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_whatsapp_birthday"
                className="mt-2 inline-flex min-h-12 items-center rounded-full bg-lima-ink px-6 font-semibold text-lima transition-transform active:scale-[0.98]"
              >
                {t.birthday.cta}
              </a>
            </div>
          </article>
        )}
        {promotions.catering && (
          <article className="reveal relative flex flex-col items-start gap-5 overflow-hidden rounded-[var(--radius-media)] border border-line p-8 md:col-span-2 md:p-10">
            <Image
              src="/brand/flor-naranja.webp"
              alt=""
              width={480}
              height={480}
              className="pointer-events-none absolute -right-8 -top-8 w-32 opacity-90 md:w-40"
            />
            <Coffee size={36} weight="duotone" className="text-selva dark:text-lima" aria-hidden />
            <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{t.catering.title}</h3>
            <p className="text-lg leading-relaxed text-ink-soft">{t.catering.body}</p>
            <ButtonLink href={whatsappLink(t.catering.message)} external variant="secondary" data-track="click_whatsapp_catering" className="mt-auto">
              {t.catering.cta}
            </ButtonLink>
          </article>
        )}
      </div>
    </section>
  );
}
