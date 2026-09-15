import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading, FlowDiagram } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Future Ecosystem Model",
  "How the token may fit into the broader product ecosystem.",
);

export default function PlannedModelPage() {
  return (
    <DocsPage
      title="Future Ecosystem Model"
      description="A conceptual model for how product, token utility, and ecosystem may interact."
      status="future"
    >
      <DocsProse>
        <FlowDiagram>{`Product
   ↓
Users & Data
   ↓
Terminal Features
   ↓
Token Utility
   ↓
Ecosystem Growth`}</FlowDiagram>

        <DocsHeading id="model" level={2}>
          Product-First Model
        </DocsHeading>
        <p>
          The ecosystem model prioritizes building useful software first. Token
          utility is intended to enhance the product experience — not replace it.
        </p>

        <DocsHeading id="incentives" level={2}>
          Ecosystem Incentives
        </DocsHeading>
        <p>
          Future ecosystem incentives may reward contributors, data providers, or
          active users. Specific mechanisms will be defined when the product reaches
          sufficient maturity.
        </p>

        <Callout variant="planned">
          This page describes a long-term conceptual model. No token has been
          launched and no economics have been finalized.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
