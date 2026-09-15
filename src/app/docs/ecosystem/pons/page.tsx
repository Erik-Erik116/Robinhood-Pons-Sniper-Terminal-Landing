import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading, FlowDiagram } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Pons",
  "The relationship between Pons Sniper Terminal and the Pons ecosystem.",
);

export default function PonsPage() {
  return (
    <DocsPage
      title="Pons and the Robinhood Chain"
      description="How Pons Sniper Terminal relates to the broader Pons ecosystem."
    >
      <DocsProse>
        <FlowDiagram>{`Robinhood Chain
       ↓
Pons Ecosystem
       ↓
Pons Launch / Trading Environment
       ↓
Pons Sniper Terminal`}</FlowDiagram>

        <DocsHeading id="relationship" level={2}>
          Relationship
        </DocsHeading>
        <p>
          Pons Sniper Terminal is designed as a complementary trading and
          market-intelligence layer around the Pons ecosystem. It aims to provide
          tools for users who participate in Pons markets on Robinhood Chain.
        </p>

        <DocsHeading id="pons" level={2}>
          What is Pons?
        </DocsHeading>
        <p>
          Pons refers to the token launch and trading ecosystem built on Robinhood
          Chain. Users can discover, launch, and trade tokens within this
          environment. Pons Sniper Terminal is being built to support users
          navigating this ecosystem.
        </p>

        <Callout variant="warning">
          Pons Sniper Terminal is an independent project unless otherwise stated.
          It is not affiliated with, endorsed by, or officially connected to Pons
          or Robinhood unless explicitly confirmed by those entities.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
