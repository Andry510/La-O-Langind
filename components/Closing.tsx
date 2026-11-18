import Image from "next/image";
import { InstagramLogo, FacebookLogo, Phone, WhatsappLogo, MapTrifold } from "@phosphor-icons/react/ssr";
import { getDictionary, type Locale } from "@/lib/i18n";
import { formatTime } from "@/lib/hours";
import { business, hours, whatsappLink } from "@/lib/site";
import { Badge, ButtonLink, Script } from "./ui";
import { Year } from "./Year";

export function FinalCta({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section aria-labelledby="final-title" className="px-4 py-20 md:px-8 md:py-28">
      <div className="reveal relative mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
        <Image src="/brand/flor-morada.webp" alt="" width={640} height={640} sizes="112px" className="pointer-events-none absolute -left-2 -top-10 w-20 md:-left-16 md:w-28" />
        <Image src="/brand/flor-naranja.webp" alt="" width={480} height={480} sizes="112px" className="pointer-events-none absolute -right-2 bottom-24 w-20 md:-right-16 md:w-28" />
        <h2 id="final-title" className="display text-[4.5rem] sm:text-8xl lg:text-[9rem]">
          {t.final.title}
        </h2>
        <Script className="-mt-2 -rotate-2 text-[2.4rem] sm:text-5xl">{t.final.script}</Script>
        <p className="max-w-[42ch] text-lg font-semibold text-ink-soft">{t.final.body}</p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <ButtonLink href={whatsappLink(t.whatsappMessage)} external data-track="click_whatsapp_final" icon={<WhatsappLogo size={20} weight="bold" aria-hidden />}>
            {t.cta.book}
          </ButtonLink>
          <ButtonLink href={`tel:${business.phoneE164}`} variant="secondary" data-track="click_call_final" icon={<Phone size={20} weight="bold" aria-hidden />}>
            {t.cta.call}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const a = business.address;
  const f = (s: string) => formatTime(s, locale);
  const social = "flex size-11 items-center justify-center rounded-full bg-crema/10 transition-colors hover:bg-lima hover:text-ink";

  return (
    <footer className="rounded-t-[2.5rem] bg-ink pb-28 text-crema md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-8 md:py-16">
        <div className="flex flex-col items-start gap-4">
          <Badge className="size-24" />
          <p className="display max-w-[16ch] text-3xl text-lima">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm font-semibold leading-relaxed">
          <p className="text-base font-extrabold">{t.footer.visit}</p>
          <p className="text-crema/80">
            {a.street}
            <br />
            {a.postalCode} {a.locality}, {a.region}
          </p>
          <p className="text-crema/80">
            {t.visit.everyDay}, {f(hours.opens)} {t.visit.to} {f(hours.closes)}
          </p>
          <a href={`tel:${business.phoneE164}`} className="font-extrabold text-lima underline-offset-4 hover:underline">
            {business.phoneDisplay}
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm font-semibold">
          <p className="text-base font-extrabold">{t.footer.follow}</p>
          <div className="flex gap-2">
            <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram @laoplaya" className={social}>
              <InstagramLogo size={22} weight="bold" aria-hidden />
            </a>
            {business.facebookUrl && (
              <a href={business.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={social}>
                <FacebookLogo size={22} weight="bold" aria-hidden />
              </a>
            )}
          </div>
          <a href={business.tripadvisorUrl} target="_blank" rel="noopener noreferrer" className="mt-2 text-crema/80 underline-offset-4 hover:underline">
            Tripadvisor
          </a>
          {business.invoiceUrl && (
            <a href={business.invoiceUrl} target="_blank" rel="noopener noreferrer" className="text-crema/80 underline-offset-4 hover:underline">
              {t.footer.invoice}
            </a>
          )}
          <p className="mt-2 text-crema/80">
            {t.footer.otherBranch}.{" "}
            <a href={locale === "es" ? "/menu/cancun" : "/menu/cancun/en"} className="text-crema underline underline-offset-4">
              {t.footer.otherBranchMenu}
            </a>
          </p>
        </div>
      </div>
      <p className="mx-auto max-w-7xl border-t border-crema/15 px-5 py-6 text-xs font-semibold text-crema/70 md:px-8">
        © <Year /> {business.name}. {t.footer.rights}
      </p>
    </footer>
  );
}

export function MobileActionBar({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const item = "flex flex-1 flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-extrabold transition-transform active:scale-[0.96]";
  return (
    <nav
      aria-label={locale === "es" ? "Acciones rápidas" : "Quick actions"}
      className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 flex gap-1 rounded-full bg-ink p-1.5 text-crema shadow-[0_12px_30px_-8px_rgb(31_58_26/0.55)] md:hidden"
    >
      <a href={whatsappLink(t.whatsappMessage)} target="_blank" rel="noopener noreferrer" data-track="click_whatsapp_bar" className={`${item} rounded-full bg-lima text-ink`}>
        <WhatsappLogo size={22} weight="bold" aria-hidden />
        {t.cta.book}
      </a>
      <a href={`tel:${business.phoneE164}`} data-track="click_call_bar" className={item}>
        <Phone size={22} weight="bold" aria-hidden />
        {t.cta.call}
      </a>
      <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" data-track="click_directions_bar" className={item}>
        <MapTrifold size={22} weight="bold" aria-hidden />
        {t.cta.directions}
      </a>
    </nav>
  );
}
