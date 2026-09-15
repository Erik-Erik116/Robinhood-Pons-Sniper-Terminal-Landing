import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Why Pons Sniper Terminal?",
  "The problem Pons Sniper Terminal aims to solve and why a focused terminal is needed.",
);

const sections = [
  { id: "problem", title: "The Problem" },
  { id: "fragmentation", title: "Fragmented Workflows" },
  { id: "solution", title: "Our Approach" },
];

export default function WhyPage() {
  return (
    <DocsPage
      title="Why are we building this?"
      description="Launching or discovering a new token is only the beginning of the trading workflow."
      sections={sections}
    >
      <DocsProse>
        <DocsHeading id="problem" level={2}>
          The Problem
        </DocsHeading>
        <p>
          Finding a newly launched token is often just the first step. To
          understand what is happening in a market, users may need to look at
          many different types of information across multiple tools.
        </p>

        <DocsHeading id="fragmentation" level={2}>
          Fragmented Workflows
        </DocsHeading>
        <p>Users may need to review:</p>
        <ul>
          <li>Token information and contract details</li>
          <li>Liquidity and market depth</li>
          <li>Trading activity and volume</li>
          <li>Holder distribution and changes</li>
          <li>Wallet activity and transaction history</li>
          <li>Charts and price context</li>
          <li>Alerts and notifications</li>
          <li>Execution and trading tools</li>
        </ul>
        <p>
          These workflows are often fragmented across different applications.
          Moving between tabs and tools adds friction and makes it harder to
          maintain focus during fast-moving market conditions.
        </p>

        <DocsHeading id="solution" level={2}>
          Our Approach
        </DocsHeading>
        <p>
          Pons Sniper Terminal aims to provide a focused interface for these
          activities. The long-term goal is to reduce the number of tools a user
          needs to monitor, research, and eventually interact with the Pons
          ecosystem.
        </p>
        <Callout variant="info">
          Features described throughout this documentation reflect the product
          vision. Availability varies by development phase.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
