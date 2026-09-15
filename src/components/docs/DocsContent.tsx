import { createElement, type ReactNode } from "react";

export type FeatureStatusType =
  | "available"
  | "building"
  | "planned"
  | "coming-soon"
  | "future";

const labels: Record<FeatureStatusType, string> = {
  available: "AVAILABLE",
  building: "BUILDING",
  planned: "PLANNED",
  "coming-soon": "COMING SOON",
  future: "FUTURE",
};

const colors: Record<FeatureStatusType, string> = {
  available: "border-positive/40 text-positive bg-positive/10",
  building: "border-positive/30 text-positive bg-positive/10",
  planned: "border-secondary-accent/30 text-secondary-accent bg-secondary-accent/10",
  "coming-soon": "border-accent/30 text-accent bg-accent/10",
  future: "border-muted/30 text-muted bg-white/[0.03]",
};

export function FeatureStatus({
  status,
  className = "",
}: {
  status: FeatureStatusType;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] ${colors[status]} ${className}`}
    >
      {labels[status]}
    </span>
  );
}

export function FeatureStatusInline({ status }: { status: FeatureStatusType }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
      {labels[status]}
    </span>
  );
}

interface StatusTableProps {
  items: { name: string; status: FeatureStatusType }[];
}

export function StatusTable({ items }: StatusTableProps) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border bg-card/30">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-card/50">
            <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted">
              Component
            </th>
            <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.name}
              className="border-b border-border/70 transition-colors last:border-0 hover:bg-white/[0.02]"
            >
              <td className="px-5 py-3.5 text-secondary">{item.name}</td>
              <td className="px-5 py-3.5">
                <FeatureStatus status={item.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function WorkflowSteps({ steps }: { steps: string[] }) {
  return (
    <div className="my-8 flex flex-col items-center gap-1 font-mono text-sm text-secondary">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center">
          <span className="rounded border border-border bg-card px-4 py-2 text-primary">
            {step}
          </span>
          {i < steps.length - 1 && (
            <span className="my-1 text-muted" aria-hidden>
              ↓
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export function FlowDiagram({ children }: { children: ReactNode }) {
  return (
    <pre className="my-8 overflow-x-auto rounded-lg border border-border bg-card/50 p-6 font-mono text-xs leading-relaxed text-secondary sm:text-sm">
      {children}
    </pre>
  );
}

export function ConceptPanel({
  label = "Concept / Example",
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <div className="my-6">
      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted">
        {label}
      </p>
      <div className="overflow-x-auto rounded-lg border border-border bg-secondary-card/50 p-4 font-mono text-xs text-secondary sm:text-sm">
        {children}
      </div>
    </div>
  );
}

export function DocsHeading({
  id,
  level = 2,
  children,
}: {
  id: string;
  level?: 2 | 3 | 4;
  children: ReactNode;
}) {
  const className =
    level === 2
      ? "docs-h2 group scroll-mt-28"
      : level === 3
        ? "docs-h3 group scroll-mt-28"
        : "docs-h4 group scroll-mt-28";

  return createElement(
    `h${level}`,
    { id, className },
    children,
    " ",
    createElement(
      "a",
      {
        href: `#${id}`,
        className:
          "ml-2 opacity-0 transition-opacity group-hover:opacity-100 text-accent no-underline",
        "aria-label": `Link to ${id}`,
      },
      "#",
    ),
  );
}

export function DocsProse({ children }: { children: ReactNode }) {
  return <article className="docs-prose">{children}</article>;
}
