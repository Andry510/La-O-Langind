import { photos, type PhotoKey } from "@/lib/content";
import { FadeImage } from "./FadeImage";

type PhotoProps = {
  slot: PhotoKey;
  alt: string;
  pendingLabel: string;
  sizes: string;
  /** Imagen de la primera pantalla: carga inmediata y la pantalla de carga la espera. */
  critical?: boolean;
  /** Precarga en <head>. Solo para la imagen principal (LCP). */
  preload?: boolean;
  className?: string;
};

/**
 * Muestra la foto configurada en lib/content.ts. Mientras carga se ve un fondo pastel del mismo tamaño
 * (sin saltos de diseño); si no hay foto, un espacio reservado rotulado.
 */
export function Photo({ slot, alt, pendingLabel, sizes, critical, preload, className = "" }: PhotoProps) {
  const src = photos[slot].src;

  return (
    <div className={`relative overflow-hidden bg-salvia ${className}`}>
      {src ? (
        <FadeImage
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          {...(preload ? { preload: true } : critical ? { loading: "eager" as const } : {})}
          {...(critical ? { "data-critical": "" } : {})}
          className="object-cover"
        />
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-6 text-center">
          <span className="text-xs font-extrabold text-salvia-ink">{pendingLabel}</span>
          <span className="max-w-[24ch] text-sm font-semibold leading-snug">{alt}</span>
        </div>
      )}
    </div>
  );
}
