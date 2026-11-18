import Image from "next/image";
import { photos, type PhotoKey } from "@/lib/content";
import { FadeImage } from "./FadeImage";

type PhotoProps = {
  slot: PhotoKey;
  alt: string;
  pendingLabel: string;
  sizes: string;
  /** Imagen de la primera pantalla: se precarga y la pantalla de carga la espera. */
  critical?: boolean;
  className?: string;
};

/**
 * Muestra la foto configurada en lib/content.ts sobre la textura de la marca.
 * Mientras carga se ve la textura (sin saltos de diseño); si no hay foto, un espacio reservado rotulado.
 */
export function Photo({ slot, alt, pendingLabel, sizes, critical, className = "" }: PhotoProps) {
  const src = photos[slot].src;

  return (
    <div className={`relative overflow-hidden bg-selva ${className}`}>
      <Image src="/brand/palma.webp" alt="" fill sizes={sizes} className="object-cover opacity-70" />
      {src ? (
        <FadeImage
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={critical}
          {...(critical ? { "data-critical": "" } : {})}
          className="object-cover"
        />
      ) : (
        // Centrado para que ninguna forma de contenedor (óvalo, tarjeta) recorte la etiqueta
        <div role="img" aria-label={alt} className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-8 text-center text-selva-ink">
          <span className="text-xs font-semibold text-lima">{pendingLabel}</span>
          <span className="max-w-[24ch] text-sm leading-snug opacity-90">{alt}</span>
        </div>
      )}
    </div>
  );
}
