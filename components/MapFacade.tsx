"use client";

import { useState } from "react";
import { MapPin } from "@phosphor-icons/react";
import { business } from "@/lib/site";

type Props = { title: string; cta: string; privacy: string };

// El iframe de Google Maps (pesado y de terceros) solo se carga cuando el visitante lo pide.
export function MapFacade({ title, cta, privacy }: Props) {
  const [open, setOpen] = useState(false);
  const { lat, lng } = business.geo;

  if (open) {
    return (
      <iframe
        title={title}
        src={`https://www.google.com/maps?q=${lat},${lng}&z=17&output=embed`}
        className="h-full min-h-[22rem] w-full rounded-[2rem] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="relative flex h-full min-h-[22rem] flex-col items-center justify-center gap-4 overflow-hidden rounded-[2rem] bg-papel p-8 text-center [background-image:radial-gradient(var(--color-line)_1.5px,transparent_1.5px)] [background-size:22px_22px]">
      <span className="flex size-16 items-center justify-center rounded-full bg-lima text-ink shadow-[0_4px_0_var(--color-verde)]">
        <MapPin size={32} weight="fill" aria-hidden />
      </span>
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-track="open_map"
        className="inline-flex min-h-12 items-center rounded-full border-2 border-ink/80 px-6 font-extrabold transition-[transform,background-color,color] hover:bg-ink hover:text-crema active:scale-[0.98]"
      >
        {cta}
      </button>
      <p className="max-w-[30ch] text-xs font-semibold text-ink-soft">{privacy}</p>
    </div>
  );
}
