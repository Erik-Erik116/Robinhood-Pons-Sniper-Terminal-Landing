"use client";

import { motion } from "framer-motion";
import {
  terminalLaunches,
  terminalMarketData,
  terminalWalletActivity,
} from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

function PulseDot({ delay = 0 }: { delay?: number }) {
  const reduced = usePrefersReducedMotion();
  if (reduced) {
    return <span className="inline-block h-1.5 w-1.5 rounded-full bg-positive" />;
  }
  return (
    <motion.span
      className="inline-block h-1.5 w-1.5 rounded-full bg-positive"
      animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
      transition={{ duration: 2, repeat: Infinity, delay }}
    />
  );
}

function TerminalRow({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const reduced = usePrefersReducedMotion();
  if (reduced) {
    return <div className="flex items-center justify-between py-1.5 text-xs">{children}</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 + delay * 0.1 }}
      className="flex items-center justify-between py-1.5 text-xs"
    >
      {children}
    </motion.div>
  );
}

export function TerminalPreview() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="relative w-full">
      <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
        Product Concept
      </p>
      <div className="relative overflow-hidden rounded-xl border border-border bg-card/80 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(110,231,255,0.04)_0%,transparent_50%)]" />
        <div className="relative p-5 font-mono text-[11px] sm:p-6 sm:text-xs">
          <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-2">
              <span className="text-accent">🏹</span>
              <span className="font-semibold tracking-wider text-primary">
                PONS TERMINAL
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-muted">
              <PulseDot />
              <span className="text-[10px] uppercase tracking-wider">Concept</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.15em] text-muted">
                Market Overview
              </p>
              {terminalMarketData.map((row, i) => (
                <TerminalRow key={row.symbol} delay={i}>
                  <span className="text-primary">{row.symbol}</span>
                  <span className="text-secondary">{row.value}</span>
                  <span className="text-positive">{row.change}</span>
                </TerminalRow>
              ))}
            </div>

            <div className="h-px bg-border" />

            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.15em] text-muted">
                New Launches
              </p>
              {terminalLaunches.map((row, i) => (
                <TerminalRow key={row.symbol} delay={i + 3}>
                  <span className="text-primary">{row.symbol}</span>
                  <span className="text-secondary">{row.value}</span>
                  <span className="text-muted">{row.time}</span>
                </TerminalRow>
              ))}
            </div>

            <div className="h-px bg-border" />

            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.15em] text-muted">
                Wallet Activity
              </p>
              {terminalWalletActivity.map((row, i) => (
                <TerminalRow key={row.wallet} delay={i + 6}>
                  <span className="text-secondary">{row.wallet}</span>
                  <span
                    className={
                      row.action === "BUY" ? "text-positive" : "text-negative"
                    }
                  >
                    {row.action}
                  </span>
                  <span className="text-primary">{row.amount}</span>
                </TerminalRow>
              ))}
            </div>
          </div>

          {!reduced && (
            <svg
              className="absolute bottom-4 right-4 h-12 w-24 opacity-40"
              viewBox="0 0 96 48"
              fill="none"
              aria-hidden
            >
              <motion.path
                d="M0 40 Q24 36 48 28 T96 8"
                stroke="#6EE7FF"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
