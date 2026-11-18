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

export function OpenStatus({ locale }: { locale: Locale }) {
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

  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-papel px-4 py-2 text-sm font-extrabold shadow-[inset_0_0_0_2px_var(--color-line)]" aria-live="polite">
      {/* Indicador de estado real (abierto/cerrado); el texto lo comunica también para no depender del color. */}
      <span
        aria-hidden
        className={`size-2.5 rounded-full ${state === null ? "bg-ink-soft/40" : isOpen ? "bg-lima ring-4 ring-lima/30" : "bg-coral-ink"}`}
      />
      {label}
    </p>
  );
}
