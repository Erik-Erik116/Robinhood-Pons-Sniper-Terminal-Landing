"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";

export function DocsTopNav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isDocsHome = pathname === "/docs";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/95 backdrop-blur-xl"
          : "border-border/60 bg-background/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1800px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </span>
          <div className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-medium text-primary">
              {siteConfig.name}
            </span>
            <span className="hidden text-[11px] text-muted sm:block">Documentation</span>
          </div>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Docs header">
          <Link
            href="/docs"
            className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
              isDocsHome
                ? "bg-accent/10 text-accent"
                : "text-secondary hover:bg-white/[0.04] hover:text-primary"
            }`}
          >
            Docs
          </Link>
          <Link
            href="/"
            className="hidden rounded-lg px-3 py-1.5 text-sm text-secondary transition-colors hover:bg-white/[0.04] hover:text-primary sm:inline"
          >
            Home
          </Link>
          <Link
            href={siteConfig.communityUrl}
            className="rounded-lg border border-border bg-white/[0.02] px-3 py-1.5 text-sm text-primary transition-colors hover:border-white/15 hover:bg-white/[0.04]"
          >
            Community
          </Link>
        </nav>
      </div>
    </header>
  );
}
