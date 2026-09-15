"use client";

import { motion } from "framer-motion";
import { problemTools } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function ProblemSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative py-24 md:py-32" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
        <ScrollReveal>
          <SectionLabel>The Problem</SectionLabel>
          <h2
            id="problem-heading"
            className="mt-4 max-w-3xl text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em] text-primary"
          >
            Trading shouldn&apos;t require ten different tabs.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-8 max-w-2xl space-y-4 text-lg text-secondary">
            <p>Finding a new token is only the beginning.</p>
            <p>
              Traders often need to move between launchpads, explorers, charts, wallet
              trackers, alerts, and trading tools just to understand what is happening.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 flex flex-col items-center gap-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {problemTools.map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="rounded-lg border border-border bg-secondary-card px-4 py-3 text-[11px] font-medium uppercase tracking-[0.12em] text-muted transition-colors duration-300 hover:border-white/15 hover:text-secondary"
                >
                  {tool}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-2 text-muted"
              aria-hidden
            >
              <span className="text-2xl">↓</span>
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="rounded-xl border border-accent/20 bg-card px-8 py-6 text-center shadow-[0_0_60px_rgba(110,231,255,0.08)]"
            >
              <span className="text-2xl" aria-hidden>
                🏹
              </span>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Pons Sniper Terminal
              </p>
            </motion.div>

            <p className="max-w-lg text-center text-secondary">
              One focused environment for discovering, analyzing, monitoring, and
              eventually interacting with the Pons ecosystem.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
