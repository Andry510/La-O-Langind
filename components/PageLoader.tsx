"use client";

import { useEffect, useRef, useState } from "react";
import { loaderConfig } from "@/lib/content";
import { Wordmark } from "./ui";

type Phase = "loading" | "leaving" | "done";

function waitForImage(img: HTMLImageElement) {
  if (img.complete) return Promise.resolve();
  // Un error también cuenta como "terminado" para no bloquear la página.
  return new Promise<void>((resolve) => {
    img.addEventListener("load", () => resolve(), { once: true });
    img.addEventListener("error", () => resolve(), { once: true });
  });
}

function collectImages(): HTMLImageElement[] {
  if (loaderConfig.waitFor === "critical") {
    return Array.from(document.querySelectorAll<HTMLImageElement>("img[data-critical]"));
  }
  const all = Array.from(document.querySelectorAll<HTMLImageElement>("main img"));
  // Las imágenes diferidas no empiezan a descargarse hasta acercarse a la pantalla: se fuerzan.
  all.forEach((img) => {
    if (img.loading === "lazy") img.loading = "eager";
  });
  return all;
}

export function PageLoader({ label }: { label: string }) {
  const [phase, setPhase] = useState<Phase>("loading");
  const lottieRef = useRef<HTMLDivElement>(null);

  // Animación Lottie: se carga en diferido; mientras tanto se ve el logotipo estático.
  useEffect(() => {
    if (!lottieRef.current) return;
    let anim: { destroy: () => void } | undefined;
    let cancelled = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    Promise.all([import("lottie-web/build/player/lottie_light"), import("@/lib/lottie/loader.json")]).then(
      ([{ default: lottie }, { default: animationData }]) => {
        if (cancelled || !lottieRef.current) return;
        const instance = lottie.loadAnimation({
          container: lottieRef.current,
          renderer: "svg",
          loop: !reduce,
          autoplay: !reduce,
          animationData,
        });
        if (reduce) instance.goToAndStop(45, true);
        anim = instance;
      },
    );

    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, []);

  // Espera imágenes y fuentes, con un mínimo visible (evita parpadeo) y un máximo (nunca bloquea).
  useEffect(() => {
    const start = performance.now();
    let finished = false;
    document.documentElement.style.overflow = "hidden";

    const finish = () => {
      if (finished) return;
      finished = true;
      const remaining = Math.max(0, loaderConfig.minVisibleMs - (performance.now() - start));
      setTimeout(() => setPhase("leaving"), remaining);
    };

    const timeout = setTimeout(finish, loaderConfig.maxWaitMs);
    Promise.all([document.fonts?.ready, ...collectImages().map(waitForImage)]).then(finish);

    return () => {
      clearTimeout(timeout);
      finished = true;
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase !== "leaving") return;
    document.documentElement.style.overflow = "";
    const t = setTimeout(() => setPhase("done"), 600);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <>
      {/* Sin JavaScript no hay pantalla de carga y las imágenes se muestran directamente */}
      <noscript>
        <style>{`#page-loader{display:none!important}img[data-fade]{opacity:1!important}`}</style>
      </noscript>
      <div
        id="page-loader"
        role="status"
        aria-live="polite"
        className={`fixed inset-0 z-50 flex items-center justify-center bg-bg transition-opacity duration-500 ease-out motion-reduce:transition-none ${
          phase === "leaving" ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <span className="sr-only">{label}</span>
        <div className="relative flex size-36 items-center justify-center">
          <Wordmark className="size-24 text-[1.7rem]" />
          <div ref={lottieRef} aria-hidden className="pointer-events-none absolute inset-0" />
        </div>
      </div>
    </>
  );
}
