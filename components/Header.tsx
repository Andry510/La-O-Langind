import { WhatsappLogo } from "@phosphor-icons/react/ssr";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";
import { Badge, ButtonLink } from "./ui";

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const other: Locale = locale === "es" ? "en" : "es";
  const links = [
    { href: "#favoritos", label: t.nav.favorites },
    { href: "#menu", label: t.nav.menu },
    { href: "#opiniones", label: t.nav.reviews },
    { href: "#visitanos", label: t.nav.visit },
  ];

  return (
    <header className="sticky top-0 z-30 bg-crema/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label={locale === "es" ? "La O Playa, inicio" : "La O Playa, home"}>
          <Badge className="size-12" ringText={false} />
          <span className="display text-2xl leading-none">
            Playa
          </span>
        </a>
        <nav aria-label={locale === "es" ? "Principal" : "Main"} className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[0.95rem] font-bold">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-full px-4 py-2 transition-colors hover:bg-lima-suave">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={localePath[other]}
            hrefLang={other}
            lang={other}
            aria-label={t.nav.switchLangLabel}
            className="flex size-11 items-center justify-center rounded-full border-2 border-ink/15 text-sm font-extrabold hover:border-ink/50"
          >
            {t.nav.switchLang}
          </a>
          <div className="hidden md:block">
            <ButtonLink
              href={whatsappLink(t.whatsappMessage)}
              external
              data-track="click_whatsapp_header"
              icon={<WhatsappLogo size={20} weight="bold" aria-hidden />}
            >
              {t.cta.book}
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
