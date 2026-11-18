import { hours, TIME_ZONE } from "./site";
import type { Locale } from "./i18n";

export type OpenState = { kind: "open" } | { kind: "closedToday" } | { kind: "closedTomorrow" };

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

/** Minutos transcurridos del día en la zona horaria del restaurante. */
export function minutesInTimeZone(date: Date, timeZone = TIME_ZONE) {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(date);
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? 0);
  return get("hour") * 60 + get("minute");
}

// Abre todos los días con el mismo horario; si eso cambia, este cálculo debe considerar el día de la semana.
export function getOpenState(date: Date): OpenState {
  const now = minutesInTimeZone(date);
  if (now >= toMinutes(hours.opens) && now < toMinutes(hours.closes)) return { kind: "open" };
  return now < toMinutes(hours.opens) ? { kind: "closedToday" } : { kind: "closedTomorrow" };
}

export function formatTime(hhmm: string, locale: Locale) {
  const [h, m] = hhmm.split(":").map(Number);
  if (locale === "es") return `${h}:${String(m).padStart(2, "0")}`;
  const suffix = h >= 12 ? "pm" : "am";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${h12}${suffix}` : `${h12}:${String(m).padStart(2, "0")}${suffix}`;
}
