import type { CSSProperties } from "react";
import Image from "next/image";
import { Baby, Car, CreditCard, PawPrint, Plant, Snowflake, Wheelchair, WifiHigh } from "@phosphor-icons/react/ssr";
import { getDictionary, type Locale } from "@/lib/i18n";
import { tones, type Tone } from "@/lib/palette";
import { Photo } from "./Photo";

const icons = { snow: Snowflake, plant: Plant, paw: PawPrint, wifi: WifiHigh, baby: Baby, wheelchair: Wheelchair, card: CreditCard, car: Car } as const;
const chipTones: Tone[] = ["rosa", "durazno", "salvia", "coral", "lima", "rosa", "durazno", "salvia"];
const tilt = (deg: number) => ({ "--tilt": `${deg}deg` }) as CSSProperties;

// Bloque tipo póster lavanda (como sus piezas de aniversario) con la frase de su bio.
export function About({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const a = t.about;

  return (
    <section aria-labelledby="about-title" className="px-3 md:px-6">
      <div className="relative mx-auto max-w-[88rem] overflow-hidden rounded-[2.5rem] bg-uva px-5 py-16 text-[#21173f] md:px-12 md:py-24">
        <Image
          src="/brand/flor-naranja.webp"
          alt=""
          width={480}
          height={480}
          sizes="160px"
          className="pointer-events-none absolute -right-6 -top-6 w-32 md:w-44"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 id="about-title" className="display text-[2.75rem] text-balance sm:text-6xl lg:text-[5.25rem]">
              {a.title}
            </h2>
            <p className="mt-6 max-w-[44ch] text-lg font-semibold leading-relaxed">{a.body}</p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {a.amenities.map((item, i) => {
                const Icon = icons[item.icon as keyof typeof icons];
                const tone = tones[chipTones[i % chipTones.length]];
                return (
                  <li key={item.label} className={`tilt inline-flex items-center gap-2 rounded-full px-4 py-2 font-extrabold ${tone.bg} ${tone.ink}`} style={tilt(i % 2 ? 1.5 : -1.5)}>
                    <Icon size={20} weight="bold" aria-hidden />
                    <span className="text-ink">{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Fotos con forma de arco y círculo, tipo recortes */}
          <div className="relative mx-auto aspect-[1/1.1] w-full max-w-md">
            <div className="tilt absolute left-0 top-0 w-[66%] rounded-t-full rounded-b-[2rem] bg-papel p-2" style={tilt(-3)}>
              <Photo slot="interior" alt={a.photos.interior} pendingLabel={t.photoPending} sizes="(min-width: 768px) 24vw, 60vw" className="aspect-[3/4] rounded-t-full rounded-b-[1.6rem]" />
            </div>
            <div className="tilt absolute bottom-0 right-0 w-[52%] rounded-full bg-papel p-2" style={tilt(5)}>
              <Photo slot="bakery" alt={a.photos.bakery} pendingLabel={t.photoPending} sizes="(min-width: 768px) 18vw, 48vw" className="aspect-square rounded-full" />
            </div>
            <div className="tilt absolute right-[4%] top-[6%] w-[34%] rounded-[1.4rem] bg-papel p-1.5" style={tilt(8)}>
              <Photo slot="terrace" alt={a.photos.terrace} pendingLabel={t.photoPending} sizes="(min-width: 768px) 12vw, 30vw" className="aspect-[4/5] rounded-[1.1rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
