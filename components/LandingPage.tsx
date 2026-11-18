import type { Locale } from "@/lib/i18n";
import { getDictionary, localePath } from "@/lib/i18n";
import { business, hours, SITE_URL } from "@/lib/site";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Favorites } from "./Favorites";
import { Experience } from "./Experience";
import { MenuSection } from "./MenuSection";
import { Reviews } from "./Reviews";
import { Celebrate } from "./Celebrate";
import { Visit } from "./Visit";
import { FinalCta, Footer, MobileActionBar } from "./Closing";
import { PageLoader } from "./PageLoader";

function restaurantJsonLd(locale: Locale) {
  const a = business.address;
  const url = `${SITE_URL}${localePath[locale] === "/" ? "/" : localePath[locale]}`;
  // Sin aggregateRating: las directrices de Google no permiten marcar como propias calificaciones de terceros.
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#playa`,
    name: business.name,
    alternateName: business.alternateNames,
    url,
    inLanguage: getDictionary(locale).htmlLang,
    telephone: business.phoneE164,
    priceRange: business.priceRange,
    servesCuisine: locale === "es" ? ["Mexicana", "Desayunos", "Brunch", "Panadería"] : ["Mexican", "Breakfast", "Brunch", "Bakery"],
    acceptsReservations: true,
    hasMenu: `${url}#menu`,
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.locality,
      addressRegion: a.region,
      postalCode: a.postalCode,
      addressCountry: a.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: business.geo.lat, longitude: business.geo.lng },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: hours.opens,
        closes: hours.closes,
      },
    ],
    sameAs: [business.instagramUrl, business.tripadvisorUrl, business.facebookUrl].filter(Boolean),
  };
}

export function LandingPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd(locale)).replace(/</g, "\\u003c") }}
      />
      <PageLoader label={t.loading} />
      <a
        href="#contenido"
        className="sr-only z-50 rounded-full bg-lima px-4 py-2 font-semibold text-lima-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {t.skip}
      </a>
      <Header locale={locale} />
      <main id="contenido">
        <Hero locale={locale} />
        <Favorites locale={locale} />
        <Experience locale={locale} />
        <MenuSection locale={locale} />
        <Reviews locale={locale} />
        <Celebrate locale={locale} />
        <Visit locale={locale} />
        <FinalCta locale={locale} />
      </main>
      <Footer locale={locale} />
      <MobileActionBar locale={locale} />
    </>
  );
}
