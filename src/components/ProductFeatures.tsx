"use client";

import { features, type Feature } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatusBadge } from "@/components/ui/StatusBadge";

function FeatureVisual({ feature }: { feature: Feature }) {
  const visuals: Record<NonNullable<Feature["visual"]>, React.ReactNode> = {
    launch: (
      <div className="space-y-2 font-mono text-xs">
        {["$LEAF", "$SNIPE", "$ROBIN"].map((s) => (
          <div
            key={s}
            className="flex items-center justify-between rounded border border-border/60 bg-background/50 px-3 py-2"
          >
            <span className="text-primary">{s}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-positive animate-pulse" />
          </div>
        ))}
      </div>
    ),
    chart: (
      <svg viewBox="0 0 200 80" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6EE7FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6EE7FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 70 L30 55 L60 60 L90 35 L120 40 L150 20 L180 25 L200 10"
          fill="none"
          stroke="#6EE7FF"
          strokeWidth="1.5"
        />
        <path
          d="M0 70 L30 55 L60 60 L90 35 L120 40 L150 20 L180 25 L200 10 L200 80 L0 80 Z"
          fill="url(#chartGrad)"
        />
      </svg>
    ),
    wallet: (
      <div className="space-y-2 font-mono text-[11px]">
        {[
          { w: "0x7A...9CC2", a: "BUY", c: "text-positive" },
          { w: "0x3F...A1B4", a: "TRACK", c: "text-accent" },
          { w: "0x91...E7D2", a: "ALERT", c: "text-secondary-accent" },
        ].map((row) => (
          <div
            key={row.w}
            className="flex items-center justify-between rounded border border-border/60 bg-background/50 px-3 py-2"
          >
            <span className="text-secondary">{row.w}</span>
            <span className={row.c}>{row.a}</span>
          </div>
        ))}
      </div>
    ),
    execute: (
      <div className="flex flex-col items-center justify-center gap-3 py-4">
        <div className="rounded-lg border border-secondary-accent/30 bg-secondary-accent/5 px-6 py-3 text-center">
          <p className="text-[10px] uppercase tracking-wider text-muted">Order Interface</p>
          <p className="mt-1 text-sm text-secondary-accent">Planned</p>
        </div>
      </div>
    ),
    automate: (
      <div className="space-y-2 font-mono text-[10px] text-muted">
        <p className="rounded border border-border/60 bg-background/50 px-3 py-2">
          IF volume &gt; threshold → alert
        </p>
        <p className="rounded border border-border/60 bg-background/50 px-3 py-2">
          IF wallet activity → notify
        </p>
        <p className="rounded border border-dashed border-border/40 px-3 py-2 text-center">
          API — Coming Soon
        </p>
      </div>
    ),
  };

  return (
    <div className="relative h-40 overflow-hidden rounded-lg border border-border bg-secondary-card/50 p-4 md:h-48">
      {feature.visual ? visuals[feature.visual] : null}
    </div>
  );
}

function getStatusBadge(status: Feature["status"]) {
  if (!status || status === "building") return null;
  return <StatusBadge status={status} />;
}

export function ProductFeatures() {
  return (
    <section
      id="product"
      className="relative py-24 md:py-32"
      aria-labelledby="product-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
        <ScrollReveal>
          <SectionLabel>The Product</SectionLabel>
          <h2
            id="product-heading"
            className="mt-4 max-w-2xl text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em] text-primary"
          >
            One terminal. Multiple workflows.
          </h2>
        </ScrollReveal>

        <div className="relative mt-16 space-y-0">
          <div
            className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-border via-accent/20 to-border md:block"
            aria-hidden
          />

          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <ScrollReveal key={feature.number} delay={index * 0.05}>
                <article
                  className={`relative grid gap-8 border-t border-border py-12 md:grid-cols-2 md:gap-12 md:py-16 ${
                    isEven ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className="md:pl-12">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-muted">
                        {feature.number}
                      </span>
                      <div className="h-px flex-1 bg-border md:hidden" />
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-semibold text-primary md:text-3xl">
                        {feature.title}
                      </h3>
                      {getStatusBadge(feature.status)}
                    </div>
                    <p className="mt-4 max-w-md text-secondary">{feature.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {feature.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="rounded border border-border/60 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-muted"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                  <FeatureVisual feature={feature} />
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
