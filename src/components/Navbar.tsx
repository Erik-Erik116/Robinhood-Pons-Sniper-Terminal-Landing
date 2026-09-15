"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/siteConfig";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/90 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10 lg:px-12"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={32}
                height={32}
                className="h-full w-full object-cover"
                priority
              />
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-primary sm:inline">
              {siteConfig.name}
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-secondary transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <Link
              href={siteConfig.communityUrl}
              className="text-sm text-secondary transition-colors duration-200 hover:text-primary"
            >
              Community
            </Link>
            <Link
              href={siteConfig.launchAppUrl}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-2 text-sm text-primary transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              aria-label={`Launch App — ${siteConfig.launchAppLabel}`}
            >
              <span>Launch App</span>
              <span className="text-[10px] uppercase tracking-wider text-muted">
                {siteConfig.launchAppLabel}
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-border text-primary md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-opacity duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-start justify-center gap-8 px-8 pt-20">
          {[...navLinks, { label: "Community", href: siteConfig.communityUrl }].map(
            (link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="text-2xl font-medium text-primary"
              >
                {link.label}
              </Link>
            ),
          )}
          <Link
            href={siteConfig.launchAppUrl}
            onClick={handleNavClick}
            className="mt-4 inline-flex items-center gap-3 rounded-full border border-border px-6 py-3 text-lg text-primary"
          >
            Launch App
            <span className="text-xs uppercase tracking-wider text-muted">
              {siteConfig.launchAppLabel}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
