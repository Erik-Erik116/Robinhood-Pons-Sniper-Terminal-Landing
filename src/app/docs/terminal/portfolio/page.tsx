import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Portfolio",
  "Planned portfolio tracking and position overview tools.",
);

export default function PortfolioPage() {
  return (
    <DocsPage
      title="Portfolio"
      description="Portfolio tools are intended to help users understand their current positions and trading activity."
      status="planned"
    >
      <DocsProse>
        <DocsHeading id="overview" level={2}>
          Overview
        </DocsHeading>
        <p>Potential portfolio information may include:</p>
        <ul>
          <li>Total portfolio value</li>
          <li>Token balances</li>
          <li>Open positions</li>
          <li>Entry and current prices</li>
          <li>Realized and unrealized profit/loss</li>
          <li>Transaction history</li>
        </ul>
        <Callout variant="warning">
          Portfolio information is informational and does not constitute financial
          advice. Values may be delayed or contain technical inaccuracies.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
