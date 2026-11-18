"use client";

import { useState } from "react";
import Image from "next/image";
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
        className="h-full min-h-[22rem] w-full rounded-[var(--radius-media)] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="relative isolate flex h-full min-h-[22rem] flex-col items-center justify-center gap-4 overflow-hidden rounded-[var(--radius-media)] bg-selva p-8 text-center text-selva-ink">
      <Image src="/brand/palma.webp" alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="-z-10 object-cover opacity-60" />
      <span className="flex size-14 items-center justify-center rounded-full bg-lima text-lima-ink">
        <MapPin size={28} weight="fill" aria-hidden />
      </span>
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-track="open_map"
        className="inline-flex min-h-12 items-center rounded-full border border-selva-ink/40 px-6 font-semibold transition-[transform,border-color] hover:border-selva-ink active:scale-[0.98]"
      >
        {cta}
      </button>
      <p className="max-w-[30ch] text-xs text-selva-ink/75">{privacy}</p>
    </div>
  );
}
