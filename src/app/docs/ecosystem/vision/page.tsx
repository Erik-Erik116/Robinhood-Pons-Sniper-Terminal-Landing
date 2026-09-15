import { DocsPage } from "@/components/docs/DocsPage";
import {
  DocsProse,
  DocsHeading,
  FlowDiagram,
  WorkflowSteps,
} from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Long-Term Vision",
  "The phased evolution of Pons Sniper Terminal from discovery to ecosystem platform.",
);

const sections = [
  { id: "evolution", title: "Product Evolution" },
  { id: "goal", title: "The Goal" },
  { id: "diagram", title: "Ecosystem Diagram" },
];

export default function VisionPage() {
  return (
    <DocsPage
      title="The Long-Term Vision"
      description="The long-term goal is to develop a trading infrastructure layer for the Pons ecosystem."
      sections={sections}
    >
      <DocsProse>
        <DocsHeading id="evolution" level={2}>
          Product Evolution
        </DocsHeading>
        <WorkflowSteps
          steps={[
            "Phase 1 — Discovery",
            "Phase 2 — Market Intelligence",
            "Phase 3 — Wallet Intelligence",
            "Phase 4 — Trading Tools",
            "Phase 5 — Automation",
            "Phase 6 — Developer Platform",
            "Phase 7 — Ecosystem",
          ]}
        />

        <DocsHeading id="goal" level={2}>
          The Goal
        </DocsHeading>
        <p>
          The long-term goal is not simply to build another token scanner. The
          goal is to develop a trading infrastructure layer that helps users
          discover, understand, monitor, and interact with the Pons ecosystem.
        </p>

        <DocsHeading id="diagram" level={2}>
          Ecosystem Diagram
        </DocsHeading>
        <FlowDiagram>{`                 PONS ECOSYSTEM
                       │
                       ↓
              Blockchain Activity
                       │
                       ↓
                 Data Layer
                       │
                       ↓
             Market Intelligence
                       │
                       ↓
             PONS SNIPER TERMINAL
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
       Discover      Track       Execute`}</FlowDiagram>

        <Callout variant="info">
          Each phase builds on the previous one. The project is currently in the
          early foundation and discovery phases.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
