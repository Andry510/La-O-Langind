import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "onDark";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-[0.95rem] font-semibold transition-[transform,background-color,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-lima text-lima-ink hover:bg-[#c5df6c]",
  secondary: "border border-ink/25 text-ink hover:border-ink/60",
  onDark: "border border-selva-ink/30 text-selva-ink hover:border-selva-ink/70",
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

/** Logotipo tipográfico provisional. TODO: reemplazar por el logotipo vectorial oficial. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="La O"
      className={`inline-flex size-14 items-center justify-center rounded-full bg-selva font-display text-selva-ink ${className}`}
    >
      <span aria-hidden className="translate-y-[-0.06em] text-[1.05em] font-bold leading-none tracking-tight">
        la
      </span>
      <span aria-hidden className="ml-[0.04em] text-[1.6em] font-extrabold leading-none text-lima">
        O
      </span>
    </span>
  );
}

export function SectionTitle({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <h2 id={id} className={`font-display text-3xl font-bold leading-[1.05] tracking-tight text-balance md:text-5xl ${className}`}>
      {children}
    </h2>
  );
}
