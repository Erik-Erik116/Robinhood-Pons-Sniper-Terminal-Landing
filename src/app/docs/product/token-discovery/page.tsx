import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading, ConceptPanel } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Token Discovery",
  "How Token Discovery is designed to help users identify newly launched Pons tokens.",
);

const sections = [
  { id: "overview", title: "Overview" },
  { id: "metrics", title: "Potential Metrics" },
  { id: "example", title: "Example Interface" },
];

export default function TokenDiscoveryPage() {
  return (
    <DocsPage
      title="Token Discovery"
      description="Token Discovery is designed to help users identify newly launched tokens and understand their early market activity."
      status="building"
      sections={sections}
    >
      <DocsProse>
        <DocsHeading id="overview" level={2}>
          Overview
        </DocsHeading>
        <p>
          The discovery module aims to surface new token launches within the Pons
          ecosystem and provide enough context for initial research. This is
          intended to be the entry point of the trading workflow.
        </p>

        <DocsHeading id="metrics" level={2}>
          Potential Metrics
        </DocsHeading>
        <ul>
          <li>Token name and symbol</li>
          <li>Token contract address</li>
          <li>Launch time and token age</li>
          <li>Liquidity and market capitalization</li>
          <li>Volume and transaction count</li>
          <li>Buy and sell activity</li>
          <li>Holder information</li>
        </ul>
        <Callout variant="warning">
          These metrics are intended to help users research markets. They should
          not be interpreted as predictions or guarantees of future performance.
        </Callout>

        <DocsHeading id="example" level={2}>
          Example Interface
        </DocsHeading>
        <ConceptPanel>
          {`NEW LAUNCHES

$ABC
Age: 2m
Liquidity: $8.2K
Volume: $18.4K

$XYZ
Age: 5m
Liquidity: $6.7K
Volume: $11.3K`}
        </ConceptPanel>
      </DocsProse>
    </DocsPage>
  );
}
