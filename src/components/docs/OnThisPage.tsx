"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export interface TocSection {
  id: string;
  title: string;
}

interface OnThisPageProps {
  sections: TocSection[];
}

export function OnThisPage({ sections }: OnThisPageProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <nav aria-label="On this page">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
        On this page
      </p>
      <ul className="space-y-2.5 border-l border-border pl-4">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className={`block text-[13px] leading-snug transition-colors duration-200 ${
                activeId === section.id
                  ? "font-medium text-accent"
                  : "text-muted hover:text-secondary"
              }`}
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function OnThisPageMobile({ sections }: OnThisPageProps) {
  if (sections.length === 0) return null;

  return (
    <details className="mb-8 overflow-hidden rounded-xl border border-border bg-card/40 xl:hidden">
      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-primary [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between">
          On this page
          <span className="text-muted" aria-hidden>
            ▾
          </span>
        </span>
      </summary>
      <ul className="space-y-2 border-t border-border px-4 py-3">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className="text-sm text-secondary hover:text-accent"
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
