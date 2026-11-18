import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { cancunMenus } from "@/lib/site";
import { Wordmark } from "./ui";

const copy = {
  es: { title: "La O Cancún", breakfast: "Menú de desayunos", lunch: "Menú de comidas", switch: "English menu", switchHref: "/menu/cancun/en", playa: "Conoce La O Playa del Carmen", playaHref: "/" },
  en: { title: "La O Cancún", breakfast: "Breakfast menu", lunch: "Lunch menu", switch: "Menú en español", switchHref: "/menu/cancun", playa: "Visit La O Playa del Carmen", playaHref: "/en" },
} as const;

export function CancunMenu({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const links = cancunMenus[locale];
  return (
    <main lang={locale === "en" ? "en" : undefined} className="relative isolate flex min-h-[100dvh] items-center justify-center bg-selva px-4 text-selva-ink">
      <Image src="/brand/palma.webp" alt="" fill sizes="100vw" preload className="-z-10 object-cover opacity-40" />
      <div className="flex w-full max-w-xs flex-col items-center gap-4">
        <Wordmark className="size-20 text-[1.4rem] ring-1 ring-selva-ink/25" />
        <h1 className="mb-4 font-display text-3xl font-bold tracking-tight">{t.title}</h1>
        {[
          { href: links.breakfast, label: t.breakfast },
          { href: links.lunch, label: t.lunch },
        ].map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 w-full items-center justify-center rounded-full bg-lima text-lg font-semibold text-lima-ink active:scale-[0.98]"
          >
            {l.label}
          </a>
        ))}
        <a href={t.switchHref} className="mt-4 font-semibold underline underline-offset-4">
          {t.switch}
        </a>
        <a href={t.playaHref} className="text-sm text-selva-ink/80 underline underline-offset-4">
          {t.playa}
        </a>
      </div>
    </main>
  );
}
