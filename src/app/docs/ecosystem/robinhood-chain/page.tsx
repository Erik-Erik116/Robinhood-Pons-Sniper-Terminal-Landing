import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Robinhood Chain",
  "The blockchain network where the Pons ecosystem operates.",
);

export default function RobinhoodChainPage() {
  return (
    <DocsPage
      title="Robinhood Chain"
      description="The blockchain infrastructure supporting the Pons ecosystem."
    >
      <DocsProse>
        <DocsHeading id="overview" level={2}>
          Overview
        </DocsHeading>
        <p>
          Robinhood Chain is the blockchain network on which the Pons ecosystem
          operates. On-chain activity — including token launches, transactions,
          and wallet interactions — occurs on this network.
        </p>

        <DocsHeading id="role" level={2}>
          Role in the Ecosystem
        </DocsHeading>
        <p>
          Pons Sniper Terminal is designed to read and organize activity from
          Robinhood Chain to provide market intelligence and trading tools for
          Pons ecosystem participants.
        </p>

        <Callout variant="info">
          Technical details about Robinhood Chain infrastructure, RPC endpoints,
          and network specifications should be referenced from official Robinhood
          Chain documentation when integrating with the network.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
