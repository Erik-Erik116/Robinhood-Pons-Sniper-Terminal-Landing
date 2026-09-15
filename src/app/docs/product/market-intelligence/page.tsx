import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Market Intelligence",
  "Market data and analytics the terminal is designed to aggregate.",
);

const sections = [
  { id: "overview", title: "Overview" },
  { id: "liquidity", title: "Liquidity" },
  { id: "volume", title: "Volume" },
  { id: "activity", title: "Buy & Sell Activity" },
  { id: "holders", title: "Holder Activity" },
  { id: "indicators", title: "Activity Indicators" },
];

export default function MarketIntelligencePage() {
  return (
    <DocsPage
      title="Market Intelligence"
      description="The terminal is intended to aggregate useful market information from on-chain activity."
      status="building"
      sections={sections}
    >
      <DocsProse>
        <DocsHeading id="overview" level={2}>
          Overview
        </DocsHeading>
        <p>
          Market Intelligence aims to transform raw on-chain data into structured
          information that helps users understand what is happening in a market.
        </p>

        <DocsHeading id="liquidity" level={2}>
          Liquidity
        </DocsHeading>
        <p>
          Provides context about available trading liquidity. Liquidity depth can
          affect execution quality and slippage.
        </p>

        <DocsHeading id="volume" level={2}>
          Volume
        </DocsHeading>
        <p>
          Shows trading activity over a selected period. Volume can help users
          understand how actively a market is being traded.
        </p>

        <DocsHeading id="activity" level={2}>
          Buy & Sell Activity
        </DocsHeading>
        <p>
          Provides visibility into recent transaction direction — whether activity
          is predominantly buying, selling, or mixed.
        </p>

        <DocsHeading id="holders" level={2}>
          Holder Activity
        </DocsHeading>
        <p>
          Helps users understand changes in token ownership, including new holders
          and concentration patterns.
        </p>

        <DocsHeading id="indicators" level={2}>
          Activity Indicators
        </DocsHeading>
        <p>
          Future versions may combine multiple signals into configurable market
          activity indicators based on on-chain data.
        </p>
        <Callout variant="info">
          Activity indicators are intended as informational signals — not
          guaranteed trading signals or predictions of future performance.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
