"use client";

import { useSyncExternalStore } from "react";
import { getOpenState, formatTime, type OpenState } from "@/lib/hours";
import { hours } from "@/lib/site";
import { getDictionary, type Locale } from "@/lib/i18n";

// Recalcula cada minuto. En el servidor no hay estado (la hora del visitante no se conoce al prerenderizar).
function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 60_000);
  return () => clearInterval(id);
}

let cached: { key: string; state: OpenState } | null = null;
function getSnapshot(): OpenState {
  const now = new Date();
  const key = `${now.getUTCHours()}:${now.getUTCMinutes()}`;
  if (!cached || cached.key !== key) cached = { key, state: getOpenState(now) };
  return cached.state;
}

export function OpenStatus({ locale, tone = "light" }: { locale: Locale; tone?: "light" | "dark" }) {
  const state = useSyncExternalStore(subscribe, getSnapshot, () => null);
  const t = getDictionary(locale).status;
  const open = formatTime(hours.opens, locale);
  const close = formatTime(hours.closes, locale);

  const label =
    state === null
      ? t.fallback(open, close)
      : state.kind === "open"
        ? t.open(close)
        : state.kind === "closedToday"
          ? t.closedToday(open)
          : t.closedTomorrow(open);

  const isOpen = state?.kind === "open";
  const surface = tone === "dark" ? "border-selva-ink/25 text-selva-ink" : "border-line text-ink";

  return (
    <p className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium ${surface}`} aria-live="polite">
      {/* Indicador de estado real (abierto/cerrado); el texto lo comunica también para no depender del color. */}
      <span
        aria-hidden
        className={`size-2 rounded-full ${state === null ? "bg-ink-soft/50" : isOpen ? "bg-lima" : "bg-[#d9805b]"}`}
      />
      {label}
    </p>
  );
}
