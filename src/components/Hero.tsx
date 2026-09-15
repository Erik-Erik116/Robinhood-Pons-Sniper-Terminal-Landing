"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TerminalPreview } from "@/components/TerminalPreview";
import { siteConfig } from "@/lib/siteConfig";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

function StatusDot() {
  const reduced = usePrefersReducedMotion();
  if (reduced) {
    return (
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-positive" aria-hidden />
    );
  }
  return (
    <motion.span
      className="inline-block h-1.5 w-1.5 rounded-full bg-positive"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
      aria-hidden
    />
  );
}

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const fadeUp = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: "easeOut" as const },
        };

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-robin.png"
          alt=""
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(66,230,164,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(110,231,255,0.05)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-background/40" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 pb-20 pt-16 md:px-10 lg:flex-row lg:items-center lg:gap-16 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="flex-1 lg:max-w-xl">
          <motion.div
            {...fadeUp(0.1)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 backdrop-blur-sm"
          >
            <StatusDot />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-secondary">
              Built for the Pons Ecosystem
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-[clamp(2.75rem,7vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-primary"
          >
            The trading terminal for Pons.
          </motion.h1>

          <motion.p
            {...fadeUp(0.35)}
            className="mt-6 max-w-lg text-lg leading-relaxed text-secondary md:text-xl"
          >
            Discover new launches, understand on-chain activity, track wallets, and
            build a more focused trading workflow for the Pons ecosystem.
          </motion.p>

          <motion.p
            {...fadeUp(0.45)}
            className="mt-4 max-w-lg text-base leading-relaxed text-muted"
          >
            Pons Sniper Terminal is being built as a professional trading and
            market-intelligence layer for Pons on Robinhood Chain.
          </motion.p>

          <motion.div
            {...fadeUp(0.55)}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href={siteConfig.docsUrl} variant="primary" showArrow>
              Read the Docs
            </Button>
            <Button href={siteConfig.communityUrl} variant="secondary">
              Join the Community
            </Button>
          </motion.div>

          <motion.p
            {...fadeUp(0.65)}
            className="mt-8 text-[11px] font-medium uppercase tracking-[0.2em] text-muted"
          >
            Current Status — In Development
          </motion.p>
        </div>

        <motion.div
          {...fadeUp(0.5)}
          className="flex-1 lg:max-w-lg"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-accent/5 blur-2xl" />
            <TerminalPreview />
            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/hero-concept.png"
                alt="Concept illustration of Pons Sniper Terminal targeting a new token launch"
                width={800}
                height={450}
                className="h-auto w-full object-cover opacity-90"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
