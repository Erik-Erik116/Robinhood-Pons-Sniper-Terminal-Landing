import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Alerts",
  "Planned notification system for launches, wallets, and market activity.",
);

const sections = [
  { id: "overview", title: "Overview" },
  { id: "types", title: "Alert Types" },
  { id: "delivery", title: "Delivery Channels" },
];

export default function AlertsPage() {
  return (
    <DocsPage
      title="Alerts"
      description="Users should not have to continuously watch the terminal to know when something important happens."
      status="planned"
      sections={sections}
    >
      <DocsProse>
        <DocsHeading id="overview" level={2}>
          Overview
        </DocsHeading>
        <p>
          The alerts system is designed to notify users when configured conditions
          are met — such as a new token launch, wallet activity, or significant
          market changes.
        </p>

        <DocsHeading id="types" level={2}>
          Alert Types
        </DocsHeading>
        <ul>
          <li>
            <strong>New Token</strong> — A newly detected launch within the Pons
            ecosystem
          </li>
          <li>
            <strong>Wallet Activity</strong> — A tracked wallet performs a
            transaction
          </li>
          <li>
            <strong>Market Activity</strong> — A token experiences significant
            changes in configured metrics
          </li>
          <li>
            <strong>Position Alert</strong> — A configured price or position
            condition is reached
          </li>
        </ul>

        <DocsHeading id="delivery" level={2}>
          Delivery Channels
        </DocsHeading>
        <p>Potential future delivery channels include:</p>
        <ul>
          <li>In-terminal notifications</li>
          <li>Browser notifications</li>
          <li>Telegram integration</li>
        </ul>
        <Callout variant="planned">
          Alert delivery integrations are planned for future development phases.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
