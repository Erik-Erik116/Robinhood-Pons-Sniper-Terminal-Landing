import type { ReactNode } from "react";

type CalloutVariant = "info" | "planned" | "warning" | "security";

const variants: Record<
  CalloutVariant,
  { icon: string; label: string; className: string }
> = {
  info: {
    icon: "ℹ",
    label: "Info",
    className: "border-accent/30 bg-accent/5 text-secondary",
  },
  planned: {
    icon: "◈",
    label: "Planned",
    className: "border-secondary-accent/30 bg-secondary-accent/5 text-secondary",
  },
  warning: {
    icon: "⚠",
    label: "Warning",
    className: "border-yellow-500/30 bg-yellow-500/5 text-secondary",
  },
  security: {
    icon: "🔒",
    label: "Security",
    className: "border-negative/30 bg-negative/5 text-secondary",
  },
};

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: ReactNode;
}

export function Callout({ variant = "info", title, children }: CalloutProps) {
  const config = variants[variant];

  return (
    <aside
      className={`my-6 rounded-lg border p-4 ${config.className}`}
      role="note"
    >
      <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
        <span aria-hidden>{config.icon}</span>
        {title ?? config.label}
      </p>
      <div className="text-sm leading-relaxed [&>p]:mt-2 [&>p:first-child]:mt-0">
        {children}
      </div>
    </aside>
  );
}
