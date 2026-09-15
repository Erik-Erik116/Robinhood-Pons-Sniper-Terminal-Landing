"use client";

import { useState } from "react";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { DocsTopNav } from "@/components/docs/DocsTopNav";
import { DocsSearch } from "@/components/docs/DocsSearch";

export function DocsShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <DocsTopNav />

      <div className="mx-auto flex max-w-[1800px]">
        {/* Desktop sidebar */}
        <aside className="docs-sidebar hidden w-[280px] shrink-0 lg:block xl:w-[300px]">
          <div className="docs-scrollbar sticky top-14 flex h-[calc(100vh-3.5rem)] flex-col overflow-y-auto px-6 py-8">
            <div className="mb-8">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                Documentation
              </p>
              <DocsSearch />
            </div>
            <DocsSidebar />
          </div>
        </aside>

        {/* Main column */}
        <div className="docs-main min-w-0 flex-1">
          {/* Mobile controls */}
          <div className="border-b border-border bg-primary-bg/40 px-4 py-4 lg:hidden">
            <DocsSearch />
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="mt-3 flex w-full items-center justify-between rounded-lg border border-border bg-card/60 px-4 py-3 text-sm font-medium text-primary"
              aria-expanded={sidebarOpen}
            >
              Browse documentation
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile drawer */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <button
                type="button"
                className="absolute inset-0 bg-background/90 backdrop-blur-sm"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
              />
              <div className="docs-scrollbar absolute left-0 top-0 flex h-full w-[min(100vw-2rem,340px)] flex-col overflow-y-auto border-r border-border bg-primary-bg p-6 pt-20 shadow-2xl">
                <DocsSidebar onNavigate={() => setSidebarOpen(false)} />
              </div>
            </div>
          )}

          <main className="docs-main-inner">{children}</main>

          <footer className="mt-16 border-t border-border px-6 py-10 lg:px-12 xl:px-16">
            <p className="max-w-2xl text-xs leading-relaxed text-muted">
              Pons Sniper Terminal documentation describes a product under active
              development. Feature availability may change as the project evolves.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
