"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { workflowStages } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Workflow() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="vision"
      className="relative py-24 md:py-32"
      aria-labelledby="vision-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
        <ScrollReveal>
          <SectionLabel>The Vision</SectionLabel>
          <h2
            id="vision-heading"
            className="mt-4 max-w-2xl text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em] text-primary"
          >
            From discovery to execution.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative mt-16">
            <div
              className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-border md:block"
              aria-hidden
            />
            {!reduced && (
              <motion.div
                className="absolute left-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0 md:block"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            )}

            <div className="grid gap-6 md:grid-cols-5 md:gap-4">
              {workflowStages.map((stage, index) => (
                <div
                  key={stage.title}
                  className="relative flex flex-col items-center text-center md:items-center"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onFocus={() => setActiveIndex(index)}
                  onBlur={() => setActiveIndex(null)}
                >
                  {index > 0 && (
                    <span
                      className="mb-2 text-muted md:hidden"
                      aria-hidden
                    >
                      ↓
                    </span>
                  )}
                  <div
                    className={`relative z-10 rounded-xl border px-4 py-5 transition-all duration-300 ${
                      activeIndex === index
                        ? "border-accent/40 bg-card shadow-[0_0_30px_rgba(110,231,255,0.1)]"
                        : "border-border bg-secondary-card/50"
                    }`}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                      {stage.title}
                    </p>
                    <p className="mt-2 text-sm text-secondary">{stage.description}</p>
                  </div>
                  {index < workflowStages.length - 1 && (
                    <span
                      className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-muted md:inline"
                      aria-hidden
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="mt-12 max-w-xl text-lg text-secondary">
            The goal is simple: reduce friction between information and action.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
