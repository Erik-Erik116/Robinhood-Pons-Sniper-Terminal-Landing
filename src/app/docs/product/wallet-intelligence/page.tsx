import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading, ConceptPanel } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Wallet Intelligence",
  "Wallet tracking and activity monitoring for the Pons ecosystem.",
);

const sections = [
  { id: "overview", title: "Overview" },
  { id: "features", title: "Potential Features" },
  { id: "example", title: "Example View" },
];

export default function WalletIntelligencePage() {
  return (
    <DocsPage
      title="Wallet Intelligence"
      description="On-chain markets are driven by wallet activity. Understanding who is interacting with a token can provide additional research context."
      status="planned"
      sections={sections}
    >
      <DocsProse>
        <DocsHeading id="overview" level={2}>
          Overview
        </DocsHeading>
        <p>
          Wallet Intelligence is designed to help users track and analyze address
          activity across the Pons ecosystem. This module aims to complement token
          research with wallet-level context.
        </p>

        <DocsHeading id="features" level={2}>
          Potential Features
        </DocsHeading>
        <ul>
          <li>Wallet profiles and address lookup</li>
          <li>Transaction history</li>
          <li>Buy and sell activity summaries</li>
          <li>Watchlists for tracked addresses</li>
          <li>Wallet activity alerts</li>
          <li>Optional wallet labels for research</li>
        </ul>

        <DocsHeading id="example" level={2}>
          Example View
        </DocsHeading>
        <ConceptPanel>
          {`WALLET

0x8A...91

Buy Volume     $84,200
Sell Volume    $62,100
Transactions   143

Recent Activity

$ABC    BUY     $2,100
$XYZ    BUY     $1,400
$TEST   SELL      $900`}
        </ConceptPanel>
        <Callout variant="planned">
          Wallet Intelligence is planned for a future development phase. Example
          data shown above is conceptual.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
