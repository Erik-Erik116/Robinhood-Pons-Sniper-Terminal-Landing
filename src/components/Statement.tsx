"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const lines = [
  "See the market.",
  "Understand the activity.",
  "Act with precision.",
];

export function Statement() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-32 md:py-40"
      aria-label="Brand statement"
    >
      <div className="absolute inset-0 bg-[#050608]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(110,231,255,0.06)_0%,transparent_60%)]" />

      {!reduced && (
        <>
          <motion.div
            className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent"
            animate={{ x: ["-10%", "10%"] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            aria-hidden
          />
          <motion.div
            className="absolute bottom-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-secondary-accent/15 to-transparent"
            animate={{ x: ["10%", "-10%"] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            aria-hidden
          />
        </>
      )}

      <div
        className="absolute right-8 top-1/2 hidden -translate-y-1/2 opacity-10 md:block"
        aria-hidden
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="50" stroke="#6EE7FF" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="30" stroke="#6EE7FF" strokeWidth="0.5" />
          <line x1="60" y1="10" x2="60" y2="110" stroke="#6EE7FF" strokeWidth="0.5" />
          <line x1="10" y1="60" x2="110" y2="60" stroke="#6EE7FF" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
        <ScrollReveal>
          <div className="space-y-4 md:space-y-6">
            {lines.map((line, i) => (
              <p
                key={line}
                className={`font-bold leading-[1.05] tracking-[-0.03em] text-primary ${
                  i === 0
                    ? "text-[clamp(2.5rem,6vw,5.5rem)]"
                    : "text-[clamp(2rem,5vw,4.5rem)]"
                } ${i === 2 ? "bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent" : ""}`}
              >
                {line}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
