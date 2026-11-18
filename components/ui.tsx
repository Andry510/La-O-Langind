import { useId, type ComponentProps, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "dark";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-base font-extrabold transition-[transform,background-color,border-color,box-shadow,color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] active:translate-y-px active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-lima text-ink shadow-[0_3px_0_var(--color-verde)] hover:bg-[#b3d03f] active:shadow-[0_1px_0_var(--color-verde)]",
  secondary: "border-2 border-ink/80 text-ink hover:bg-ink hover:text-crema",
  dark: "bg-ink text-crema hover:bg-verde",
};

type ButtonLinkProps = ComponentProps<"a"> & { variant?: Variant; icon?: ReactNode; external?: boolean };

export function ButtonLink({ variant = "primary", icon, external, className = "", children, ...props }: ButtonLinkProps) {
  return (
    <a
      {...props}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}

const RING_TEXT = "PANADERÍA • DESAYUNOS • BRUNCH • COMIDAS • SNACKS • ";

/**
 * Insignia circular de La O (crema, "la O" al centro y anillo de texto), reconstruida a partir de su avatar.
 * El tamaño lo define className (size-*); el texto escala con el contenedor.
 * TODO: reemplazar por el logotipo vectorial oficial cuando el restaurante lo entregue.
 */
export function Badge({ className = "", spin = false, ringText = true }: { className?: string; spin?: boolean; ringText?: boolean }) {
  // Id único por instancia: puede haber varias insignias en la página.
  const ringId = `la-o-ring-${useId().replace(/[^a-zA-Z0-9-]/g, "")}`;
  return (
    <span role="img" aria-label="La O" className={`relative inline-block shrink-0 [container-type:inline-size] ${className}`}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 size-full" aria-hidden>
        <circle cx="100" cy="100" r="97" fill="#fffdf8" stroke="#a6c531" strokeWidth="4" />
        {ringText && (
          <g className={spin ? "spin-slow origin-center [transform-box:view-box]" : ""}>
            <defs>
              <path id={ringId} d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
            </defs>
            <text fill="#6f8a17" fontSize="15" fontWeight="800" fontFamily="var(--font-body), sans-serif">
              {/* textLength reparte el texto en toda la circunferencia (2 * PI * 76) */}
              <textPath href={`#${ringId}`} textLength="476" lengthAdjust="spacing">
                {RING_TEXT}
              </textPath>
            </text>
          </g>
        )}
      </svg>
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center font-display text-verde"
        style={{ fontSize: ringText ? "30cqw" : "44cqw" }}
      >
        <span className="font-bold leading-none tracking-tight" style={{ fontSize: "0.6em" }}>
          la
        </span>
        <span className="ml-[0.04em] font-extrabold leading-none text-lima [-webkit-text-stroke:0.012em_#7f9a1f]">O</span>
      </span>
    </span>
  );
}

export function SectionTitle({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <h2 id={id} className={`display text-[2.75rem] text-balance sm:text-6xl lg:text-7xl ${className}`}>
      {children}
    </h2>
  );
}

/** Acento manuscrito (como el script de sus piezas). Uso puntual, nunca para información esencial. */
export function Script({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`font-script text-[2rem] leading-none text-oro sm:text-4xl ${className}`}>{children}</span>;
}
