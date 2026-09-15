import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  showArrow?: boolean;
  className?: string;
  ariaLabel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-background hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(110,231,255,0.25)]",
  secondary:
    "border border-border bg-transparent text-primary hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.03]",
  ghost:
    "border border-border/60 bg-white/[0.02] text-secondary hover:border-white/15 hover:text-primary",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  showArrow = false,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span
          aria-hidden
          className="inline-block transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </>
  );

  if (external || href.startsWith("http") || href === "#") {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        aria-label={ariaLabel}
        {...(external || href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      aria-label={ariaLabel}
    >
      {content}
    </Link>
  );
}
