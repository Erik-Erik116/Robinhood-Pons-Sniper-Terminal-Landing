import type { ReactNode } from "react";
import Link from "next/link";
import {
  FeatureStatus,
  type FeatureStatusType,
} from "@/components/docs/DocsContent";
import { DocsBreadcrumbs } from "@/components/docs/DocsBreadcrumbs";
import {
  OnThisPage,
  OnThisPageMobile,
  type TocSection,
} from "@/components/docs/OnThisPage";

interface DocsPageProps {
  title: string;
  description?: string;
  status?: FeatureStatusType;
  sections?: TocSection[];
  children: ReactNode;
  wide?: boolean;
}

export function DocsPage({
  title,
  description,
  status,
  sections = [],
  children,
  wide = false,
}: DocsPageProps) {
  const hasToc = sections.length > 0;

  return (
    <div
      className={`mx-auto w-full px-6 py-10 sm:px-8 lg:px-12 xl:px-16 xl:py-12 ${
        wide ? "max-w-6xl" : "max-w-4xl"
      }`}
    >
      <DocsBreadcrumbs />

      <header className="mb-10 border-b border-border pb-8">
        {status && (
          <div className="mb-4">
            <FeatureStatus status={status} className="shrink-0 whitespace-nowrap" />
          </div>
        )}
        <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-primary">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary md:text-lg">
            {description}
          </p>
        )}
      </header>

      <OnThisPageMobile sections={sections} />

      <div
        className={
          hasToc
            ? "xl:grid xl:grid-cols-[minmax(0,1fr)_200px] xl:gap-16"
            : undefined
        }
      >
        <div className="min-w-0">{children}</div>
        {hasToc && (
          <aside className="hidden xl:block">
            <div className="sticky top-24">
              <OnThisPage sections={sections} />
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

interface DocsCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export function DocsCard({ title, description, href, icon }: DocsCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-xl border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/25 hover:bg-card hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
    >
      {icon && (
        <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/60 text-lg">
          {icon}
        </span>
      )}
      <h3 className="text-base font-semibold text-primary group-hover:text-accent">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary">
        {description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        Read more
        <span
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </Link>
  );
}

export function DocsLinkGrid({
  links,
}: {
  links: { title: string; description: string; href: string; icon?: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link) => (
        <DocsCard key={link.href} {...link} />
      ))}
    </div>
  );
}

export function DocsHero({
  eyebrow = "Documentation",
  title,
  description,
  status,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  status?: FeatureStatusType;
}) {
  return (
    <div className="docs-hero mb-10 rounded-2xl border border-border bg-[linear-gradient(135deg,rgba(110,231,255,0.06)_0%,rgba(12,17,24,0.8)_45%,rgba(5,6,8,0.95)_100%)] p-8 md:p-10">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-[clamp(1.875rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-primary">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-secondary md:text-lg">
            {description}
          </p>
        </div>
        {status && (
          <FeatureStatus status={status} className="shrink-0 whitespace-nowrap" />
        )}
      </div>
    </div>
  );
}
