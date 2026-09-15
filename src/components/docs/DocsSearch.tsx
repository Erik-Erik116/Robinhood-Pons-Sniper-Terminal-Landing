"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { searchDocs } from "@/lib/docs/search-index";

export function DocsSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof searchDocs>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    setResults(searchDocs(query));
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setOpen(true);
        containerRef.current?.querySelector("input")?.focus();
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = (href: string) => {
    setOpen(false);
    setQuery("");
    router.push(href);
  };

  return (
    <div ref={containerRef} className="relative">
      <label htmlFor="docs-search" className="sr-only">
        Search documentation
      </label>
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          id="docs-search"
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search docs..."
          className="w-full rounded-lg border border-border bg-background/60 py-2.5 pl-10 pr-14 text-sm text-primary placeholder:text-muted focus:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/15"
        />
        <kbd className="pointer-events-none absolute right-2.5 top-1/2 hidden -translate-y-1/2 rounded border border-border bg-card px-1.5 py-0.5 text-[10px] text-muted sm:inline">
          ⌘K
        </kbd>
      </div>

      {open && query.trim() && (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-xl border border-border bg-card shadow-[0_16px_48px_rgba(0,0,0,0.45)]">
          {results.length === 0 ? (
            <p className="px-4 py-4 text-sm text-muted">No results found.</p>
          ) : (
            <ul className="max-h-72 overflow-y-auto docs-scrollbar">
              {results.map((result) => (
                <li key={result.href}>
                  <button
                    type="button"
                    onClick={() => handleSelect(result.href)}
                    className="flex w-full flex-col items-start border-b border-border/60 px-4 py-3 text-left transition-colors last:border-0 hover:bg-white/[0.04]"
                  >
                    <span className="text-sm font-medium text-primary">
                      {result.title}
                    </span>
                    <span className="text-xs text-muted">{result.section}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
