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

  return (
    <section id="visitanos" aria-labelledby="visitanos-title" className="mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28">
      <div className="grid gap-10 rounded-[var(--radius-media)] bg-surface p-6 md:grid-cols-2 md:gap-14 md:p-12">
        <div className="flex flex-col gap-8">
          <SectionTitle id="visitanos-title">{v.title}</SectionTitle>
          <address className="not-italic">
            <p className="text-xl font-semibold leading-snug">{a.street}</p>
            <p className="text-xl leading-snug">
              {a.postalCode} {a.locality}, {a.region}
            </p>
            <p className="mt-3 max-w-[44ch] leading-relaxed text-ink-soft">{v.reference}</p>
          </address>

          <div>
            <h3 className="font-display text-lg font-bold">{v.hoursTitle}</h3>
            <dl className="mt-3 grid max-w-sm grid-cols-[1fr_auto] gap-x-6 gap-y-2">
              <dt className="text-ink-soft">{v.everyDay}</dt>
              <dd className="font-semibold tabular-nums">
                {f(hours.opens)} {v.to} {f(hours.closes)}
              </dd>
              <dt className="text-ink-soft">{v.breakfast}</dt>
              <dd className="tabular-nums">
                {f(hours.breakfast.from)} {v.to} {f(hours.breakfast.to)}
              </dd>
              <dt className="text-ink-soft">{v.lunch}</dt>
              <dd className="tabular-nums">
                {f(hours.lunch.from)} {v.to} {f(hours.lunch.to)}
              </dd>
            </dl>
            <p className="mt-4 text-sm text-ink-soft">{v.parking}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink
              href={business.directionsUrl}
              external
              data-track="click_directions"
              icon={<MapTrifold size={20} weight="bold" aria-hidden />}
            >
              {t.cta.directions}
            </ButtonLink>
            <ButtonLink
              href={`tel:${business.phoneE164}`}
              variant="secondary"
              data-track="click_call"
              icon={<Phone size={20} weight="bold" aria-hidden />}
            >
              {business.phoneDisplay}
            </ButtonLink>
          </div>
        </div>
        <MapFacade title={v.mapTitle} cta={v.mapCta} privacy={v.mapPrivacy} />
      </div>
    </section>
  );
}
