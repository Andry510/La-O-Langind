import Image from "next/image";
import { Baby, Car, CreditCard, PawPrint, Plant, Snowflake, Wheelchair, WifiHigh } from "@phosphor-icons/react/ssr";
import { getDictionary, type Locale } from "@/lib/i18n";
import { Photo } from "./Photo";
import { SectionTitle } from "./ui";

const icons = {
  snow: Snowflake,
  plant: Plant,
  paw: PawPrint,
  wifi: WifiHigh,
  baby: Baby,
  wheelchair: Wheelchair,
  card: CreditCard,
  car: Car,
} as const;

export function Experience({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).experience;
  const pending = getDictionary(locale).photoPending;

  return (
    <section aria-labelledby="experiencia-title" className="relative isolate overflow-hidden bg-selva text-selva-ink">
      <Image src="/brand/palma.webp" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-25" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
        <div className="flex flex-col gap-6">
          <SectionTitle id="experiencia-title">{t.title}</SectionTitle>
          <p className="max-w-[48ch] text-lg leading-relaxed text-selva-ink/85">{t.body}</p>
          <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {t.amenities.map((a) => {
              const Icon = icons[a.icon as keyof typeof icons];
              return (
                <li key={a.label} className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-lima/15 text-lima">
                    <Icon size={20} weight="bold" aria-hidden />
                  </span>
                  <span className="font-medium">{a.label}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mosaico de 3 fotos: interior grande, terraza y panadería */}
        <div className="grid grid-cols-2 gap-4 self-center">
          <Photo
            slot="interior"
            alt={t.photos.interior}
            pendingLabel={pending}
            sizes="(min-width: 768px) 45vw, 100vw"
            className="reveal col-span-2 aspect-[4/3] rounded-[var(--radius-media)] ring-1 ring-selva-ink/15"
          />
          <Photo
            slot="terrace"
            alt={t.photos.terrace}
            pendingLabel={pending}
            sizes="(min-width: 768px) 22vw, 50vw"
            className="reveal aspect-[4/5] rounded-[var(--radius-media)] ring-1 ring-selva-ink/15"
          />
          <Photo
            slot="bakery"
            alt={t.photos.bakery}
            pendingLabel={pending}
            sizes="(min-width: 768px) 22vw, 50vw"
            className="reveal aspect-[4/5] translate-y-8 rounded-[var(--radius-media)] ring-1 ring-selva-ink/15"
          />
        </div>
      </div>
    </section>
  );
}
