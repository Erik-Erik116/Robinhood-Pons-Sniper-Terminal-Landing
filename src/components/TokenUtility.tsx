import { tokenUtilityItems } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function TokenUtility() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="utility-heading">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
        <ScrollReveal>
          <SectionLabel>Future Ecosystem</SectionLabel>
          <h2
            id="utility-heading"
            className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-primary"
          >
            Product first. Utility second.
          </h2>
          <p className="mt-6 max-w-2xl text-secondary">
            A native ecosystem token is part of the long-term vision for Pons Sniper
            Terminal. Any future token utility will be connected to the actual product
            and ecosystem rather than existing only as a speculative asset.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex flex-col gap-3">
              {tokenUtilityItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-secondary"
                >
                  <span className="text-muted">+</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <StatusBadge status="future" className="md:ml-8" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
