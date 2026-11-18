"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

/**
 * Imagen que aparece con un fundido solo cuando terminó de cargar (nunca se ve a medias).
 * Sin JavaScript, la regla de <noscript> en PageLoader la hace visible.
 */
export function FadeImage({ className = "", onLoad, alt, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      {...props}
      alt={alt}
      data-fade=""
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      onError={() => setLoaded(true)}
      className={`${className} transition-opacity duration-700 ease-out motion-reduce:transition-none ${loaded ? "opacity-100" : "opacity-0"}`}
    />
  );
}
