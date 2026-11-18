import { WhatsappLogo } from "@phosphor-icons/react/ssr";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";
import { ButtonLink, Wordmark } from "./ui";

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
    <header className="sticky top-0 z-30 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-4 md:px-8">
        <a href="#inicio" className="shrink-0" aria-label="La O, inicio">
          <Wordmark className="size-12" />
        </a>
        <nav aria-label={locale === "es" ? "Principal" : "Main"} className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.95rem] font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-ink-soft transition-colors hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href={localePath[other]}
            hrefLang={other}
            lang={other}
            aria-label={t.nav.switchLangLabel}
            className="rounded-full px-3 py-2 text-sm font-semibold text-ink-soft underline-offset-4 hover:text-ink hover:underline"
          >
            {t.nav.switchLang}
          </a>
          <a href="#menu" className="rounded-full px-3 py-2 text-sm font-semibold text-ink-soft hover:text-ink lg:hidden">
            {t.nav.menu}
          </a>
          {/* En móvil la reserva vive en la barra inferior fija */}
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
