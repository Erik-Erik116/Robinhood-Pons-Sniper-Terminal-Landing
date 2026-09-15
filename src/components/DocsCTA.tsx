import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/siteConfig";

export function DocsCTA() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="docs-cta-heading">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-8 py-12 md:px-16 md:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(110,231,255,0.06)_0%,transparent_50%)]" />
            <div className="relative">
              <h2
                id="docs-cta-heading"
                className="max-w-xl text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-primary"
              >
                Want to understand what we&apos;re building?
              </h2>
              <p className="mt-4 max-w-lg text-secondary">
                Explore the documentation for the product architecture, planned
                features, ecosystem vision, and development progress.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={siteConfig.docsUrl} variant="primary" showArrow>
                  Read the Docs
                </Button>
                <Button href={siteConfig.communityUrl} variant="secondary">
                  Join the Community
                </Button>
              </div>
              <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                Building in Public
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
