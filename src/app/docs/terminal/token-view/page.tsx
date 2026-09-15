import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading, ConceptPanel } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Token View",
  "The intended deep-research view for individual tokens.",
);

export default function TokenViewPage() {
  return (
    <DocsPage
      title="Token View"
      description="Token View is designed to provide comprehensive research context for a single token."
      status="planned"
    >
      <DocsProse>
        <DocsHeading id="overview" level={2}>
          Overview
        </DocsHeading>
        <p>
          The goal is to allow users to move from discovery to deeper research
          without leaving the terminal. Token View aims to consolidate the most
          important token-level information in one place.
        </p>

        <ConceptPanel>
          {`TOKEN — $ABC

Price          —
Market Cap     —
Liquidity      —
Volume         —
Holders        —
Age            —

Chart
Transactions
Wallet Activity
Buy / Sell`}
        </ConceptPanel>

        <Callout variant="planned">
          Token View is planned for a future release. The layout above is
          conceptual.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
