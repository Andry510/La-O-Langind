import { InstagramLogo, FacebookLogo, Phone, WhatsappLogo, MapTrifold } from "@phosphor-icons/react/ssr";
import { getDictionary, type Locale } from "@/lib/i18n";
import { formatTime } from "@/lib/hours";
import { business, hours, whatsappLink } from "@/lib/site";
import { ButtonLink, Wordmark } from "./ui";
import { Year } from "./Year";

export function FinalCta({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section aria-labelledby="final-title" className="px-4 pb-20 md:px-8 md:pb-28">
      <div className="reveal mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h2 id="final-title" className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-balance md:text-6xl">
          {t.final.title}
        </h2>
        <p className="max-w-[46ch] text-lg leading-relaxed text-ink-soft">{t.final.body}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <ButtonLink
            href={whatsappLink(t.whatsappMessage)}
            external
            data-track="click_whatsapp_final"
            icon={<WhatsappLogo size={20} weight="bold" aria-hidden />}
          >
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

  return (
    <footer className="bg-selva pb-28 text-selva-ink md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div className="flex flex-col items-start gap-4">
          <Wordmark className="ring-1 ring-selva-ink/20" />
          <p className="max-w-[32ch] text-selva-ink/80">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm leading-relaxed">
          <p className="font-semibold">{business.name}</p>
          <p className="text-selva-ink/80">
            {a.street}
            <br />
            {a.postalCode} {a.locality}, {a.region}
          </p>
          <p className="text-selva-ink/80">
            {t.visit.everyDay}, {f(hours.opens)} {t.visit.to} {f(hours.closes)}
          </p>
          <a href={`tel:${business.phoneE164}`} className="font-semibold underline-offset-4 hover:underline">
            {business.phoneDisplay}
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="font-semibold">{t.footer.follow}</p>
          <div className="flex gap-2">
            <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram @laoplaya" className="flex size-11 items-center justify-center rounded-full border border-selva-ink/25 hover:border-selva-ink">
              <InstagramLogo size={22} aria-hidden />
            </a>
            {business.facebookUrl && (
              <a href={business.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex size-11 items-center justify-center rounded-full border border-selva-ink/25 hover:border-selva-ink">
                <FacebookLogo size={22} aria-hidden />
              </a>
            )}
          </div>
          <a href={business.tripadvisorUrl} target="_blank" rel="noopener noreferrer" className="mt-2 text-selva-ink/80 underline-offset-4 hover:underline">
            Tripadvisor
          </a>
          {business.invoiceUrl && (
            <a href={business.invoiceUrl} target="_blank" rel="noopener noreferrer" className="text-selva-ink/80 underline-offset-4 hover:underline">
              {t.footer.invoice}
            </a>
          )}
          <p className="mt-2 text-selva-ink/80">
            {t.footer.otherBranch}.{" "}
            <a href={locale === "es" ? "/menu/cancun" : "/menu/cancun/en"} className="underline underline-offset-4">
              {t.footer.otherBranchMenu}
            </a>
          </p>
        </div>
      </div>
      <p className="mx-auto max-w-7xl border-t border-selva-ink/15 px-4 py-6 text-xs text-selva-ink/70 md:px-8">
        © <Year /> {business.name}. {t.footer.rights}
      </p>
    </footer>
  );
}

export function MobileActionBar({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const item = "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-xs font-semibold active:scale-[0.97] transition-transform";
  return (
    <nav
      aria-label={locale === "es" ? "Acciones rápidas" : "Quick actions"}
      className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 flex overflow-hidden rounded-full bg-selva text-selva-ink shadow-[0_10px_30px_rgb(var(--shadow)/0.35)] md:hidden"
    >
      <a href={whatsappLink(t.whatsappMessage)} target="_blank" rel="noopener noreferrer" data-track="click_whatsapp_bar" className={`${item} bg-lima text-lima-ink`}>
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
