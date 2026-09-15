"use client";

import { motion } from "framer-motion";
import { ecosystemItems } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const positions = [
  "top-0 left-1/2 -translate-x-1/2 -translate-y-2",
  "top-[18%] right-0 translate-x-2",
  "top-[50%] right-0 translate-x-4 translate-y-[-50%]",
  "bottom-[18%] right-0 translate-x-2",
  "bottom-0 left-1/2 -translate-x-1/2 translate-y-2",
  "bottom-[18%] left-0 -translate-x-2",
  "top-[50%] left-0 -translate-x-4 translate-y-[-50%]",
];

export function Ecosystem() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative py-24 md:py-32" aria-labelledby="ecosystem-heading">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
        <ScrollReveal>
          <SectionLabel>Long-Term Vision</SectionLabel>
          <h2
            id="ecosystem-heading"
            className="mt-4 max-w-2xl text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em] text-primary"
          >
            More than a terminal.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-secondary">
            The long-term goal is to build a trading infrastructure layer around the
            Pons ecosystem.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative mx-auto mt-16 flex min-h-[420px] max-w-2xl flex-col items-center justify-center md:min-h-[480px]">
            {!reduced && (
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 400 400"
                aria-hidden
              >
                {ecosystemItems.map((_, i) => {
                  const angle = (i / ecosystemItems.length) * Math.PI * 2 - Math.PI / 2;
                  const x = 200 + Math.cos(angle) * 140;
                  const y = 200 + Math.sin(angle) * 140;
                  return (
                    <motion.line
                      key={i}
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke="rgba(110,231,255,0.15)"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
                    />
                  );
                })}
              </svg>
            )}

            <div className="relative z-10 rounded-xl border border-accent/20 bg-card px-8 py-6 text-center shadow-[0_0_40px_rgba(110,231,255,0.06)]">
              <span className="text-2xl" aria-hidden>
                🏹
              </span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Pons Sniper Terminal
              </p>
            </div>

            <div className="relative mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:absolute md:inset-0 md:mt-0 md:grid-cols-1">
              {ecosystemItems.map((item, i) => (
                <div
                  key={item}
                  className={`rounded-lg border border-border bg-secondary-card/80 px-3 py-2 text-center text-[10px] font-medium uppercase tracking-[0.12em] text-muted transition-colors duration-300 hover:border-accent/30 hover:text-secondary md:absolute md:w-auto md:whitespace-nowrap ${positions[i]}`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="mt-8 text-center text-secondary">Built one layer at a time.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
