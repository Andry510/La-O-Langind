import { MapTrifold, Phone } from "@phosphor-icons/react/ssr";
import { getDictionary, type Locale } from "@/lib/i18n";
import { formatTime } from "@/lib/hours";
import { business, hours } from "@/lib/site";
import { MapFacade } from "./MapFacade";
import { ButtonLink, SectionTitle } from "./ui";

export function Visit({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const v = t.visit;
  const f = (s: string) => formatTime(s, locale);
  const a = business.address;
  const rows = [
    { label: v.everyDay, value: `${f(hours.opens)} ${v.to} ${f(hours.closes)}`, strong: true },
    { label: v.breakfast, value: `${f(hours.breakfast.from)} ${v.to} ${f(hours.breakfast.to)}` },
    { label: v.lunch, value: `${f(hours.lunch.from)} ${v.to} ${f(hours.lunch.to)}` },
  ];

  return (
    <section id="visitanos" aria-labelledby="visitanos-title" className="px-3 md:px-6">
      <div className="mx-auto grid max-w-[88rem] gap-10 rounded-[2.5rem] bg-salvia px-5 py-14 md:grid-cols-2 md:gap-12 md:px-12 md:py-20">
        <div className="flex flex-col gap-7">
          <SectionTitle id="visitanos-title">{v.title}</SectionTitle>
          <address className="not-italic">
            <p className="display text-3xl md:text-4xl">{v.street}</p>
            <p className="mt-2 font-bold">
              {a.postalCode} {a.locality}, {a.region}
            </p>
            <p className="mt-2 max-w-[42ch] font-semibold text-ink-soft">{v.reference}</p>
          </address>

          <div>
            <h3 className="text-lg font-extrabold">{v.hoursTitle}</h3>
            <dl className="mt-3 grid max-w-md gap-2">
              {rows.map((r) => (
                <div key={r.label} className="flex items-center justify-between gap-4 rounded-full bg-papel px-5 py-2.5">
                  <dt className="font-semibold text-ink-soft">{r.label}</dt>
                  <dd className={`tabular-nums ${r.strong ? "font-extrabold" : "font-bold"}`}>{r.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-sm font-semibold text-ink-soft">{v.parking}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href={business.directionsUrl} external data-track="click_directions" icon={<MapTrifold size={20} weight="bold" aria-hidden />}>
              {t.cta.directions}
            </ButtonLink>
            <ButtonLink href={`tel:${business.phoneE164}`} variant="secondary" data-track="click_call" icon={<Phone size={20} weight="bold" aria-hidden />}>
              {business.phoneDisplay}
            </ButtonLink>
          </div>
        </div>
        <MapFacade title={v.mapTitle} cta={v.mapCta} privacy={v.mapPrivacy} />
      </div>
    </section>
  );
}
