import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Wallet View",
  "Structured overview of an address's on-chain activity.",
);

export default function WalletViewPage() {
  return (
    <DocsPage
      title="Wallet View"
      description="Wallet View is designed to provide a structured overview of an address's on-chain activity."
      status="planned"
    >
      <DocsProse>
        <DocsHeading id="overview" level={2}>
          Overview
        </DocsHeading>
        <p>Potential sections of Wallet View may include:</p>
        <ul>
          <li>Wallet address and identification</li>
          <li>Transaction history</li>
          <li>Tokens held or traded</li>
          <li>Buy and sell volume summaries</li>
          <li>Recent activity feed</li>
          <li>Tracked / watchlist status</li>
        </ul>
        <Callout variant="planned">
          Wallet View is part of the Wallet Intelligence module and is planned for
          a future development phase.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
