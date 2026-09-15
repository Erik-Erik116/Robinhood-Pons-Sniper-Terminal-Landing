import { DocsPage } from "@/components/docs/DocsPage";
import {
  DocsProse,
  DocsHeading,
  FlowDiagram,
} from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "How It Works",
  "Conceptual explanation of how Pons Sniper Terminal is designed to operate.",
);

const sections = [
  { id: "architecture", title: "Architecture" },
  { id: "blockchain", title: "Blockchain Activity" },
  { id: "data", title: "Data Collection" },
  { id: "intelligence", title: "Market Intelligence" },
  { id: "terminal", title: "Terminal" },
  { id: "user", title: "User" },
];

export default function HowItWorksPage() {
  return (
    <DocsPage
      title="How does Pons Sniper Terminal work?"
      description="A conceptual overview of the data flow from on-chain activity to the terminal interface."
      sections={sections}
    >
      <DocsProse>
        <DocsHeading id="architecture" level={2}>
          Architecture
        </DocsHeading>
        <FlowDiagram>{`Pons / Robinhood Chain
        ↓
Blockchain Activity
        ↓
Data Collection
        ↓
Market Intelligence
        ↓
Pons Sniper Terminal
        ↓
User`}</FlowDiagram>

        <DocsHeading id="blockchain" level={2}>
          Blockchain Activity
        </DocsHeading>
        <p>
          Transactions, token activity, liquidity events, and wallet activity
          occur on-chain within the Pons ecosystem on Robinhood Chain.
        </p>

        <DocsHeading id="data" level={2}>
          Data Collection
        </DocsHeading>
        <p>
          The platform is designed to collect and organize relevant blockchain
          activity. This may include indexing transactions, tracking token
          launches, and aggregating wallet interactions.
        </p>

        <DocsHeading id="intelligence" level={2}>
          Market Intelligence
        </DocsHeading>
        <p>
          Raw on-chain activity can be transformed into useful information such
          as token statistics, transaction activity, liquidity metrics, and wallet
          behavior patterns.
        </p>

        <DocsHeading id="terminal" level={2}>
          Terminal
        </DocsHeading>
        <p>
          The information is presented in a focused interface designed for
          research, monitoring, and eventually trading workflows.
        </p>

        <DocsHeading id="user" level={2}>
          User
        </DocsHeading>
        <p>
          Users can research markets, monitor activity, configure alerts, and
          eventually interact with supported markets through wallet-connected
          transactions.
        </p>

        <Callout variant="planned">
          Specific infrastructure implementations — including RPC providers, data
          indexing, and API design — will be documented as they are finalized and
          deployed.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
