interface StatusBadgeProps {
  status: "building" | "planned" | "coming-soon" | "future";
  className?: string;
}

const statusLabels: Record<StatusBadgeProps["status"], string> = {
  building: "BUILDING",
  planned: "PLANNED",
  "coming-soon": "COMING SOON",
  future: "FUTURE / PLANNED",
};

const statusColors: Record<StatusBadgeProps["status"], string> = {
  building: "border-positive/30 text-positive bg-positive/10",
  planned: "border-secondary-accent/30 text-secondary-accent bg-secondary-accent/10",
  "coming-soon": "border-accent/30 text-accent bg-accent/10",
  future: "border-muted/30 text-muted bg-white/[0.03]",
};

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] ${statusColors[status]} ${className}`}
    >
      {statusLabels[status]}
    </span>
  );
}
