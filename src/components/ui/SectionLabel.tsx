interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-[11px] font-medium uppercase tracking-[0.2em] text-muted ${className}`}
    >
      {children}
    </p>
  );
}
