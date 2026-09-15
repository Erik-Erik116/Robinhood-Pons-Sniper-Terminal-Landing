import { DocsPage } from "@/components/docs/DocsPage";
import {
  DocsProse,
  DocsHeading,
  WorkflowSteps,
} from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Trading",
  "The intended wallet-connected trading workflow for Pons Sniper Terminal.",
);

const sections = [
  { id: "overview", title: "Overview" },
  { id: "workflow", title: "Intended Workflow" },
  { id: "security", title: "Wallet Security" },
];

export default function TradingPage() {
  return (
    <DocsPage
      title="Trading"
      description="The long-term vision includes a streamlined interface for interacting with supported markets through user-controlled wallet signing."
      status="planned"
      sections={sections}
    >
      <DocsProse>
        <DocsHeading id="overview" level={2}>
          Overview
        </DocsHeading>
        <p>
          Trading tools are part of the long-term product roadmap. The intended
          model is non-custodial — users connect their own wallet and approve
          each transaction independently.
        </p>

        <DocsHeading id="workflow" level={2}>
          Intended Workflow
        </DocsHeading>
        <WorkflowSteps
          steps={[
            "Connect Wallet",
            "Select Token",
            "Review Market Information",
            "Configure Transaction",
            "Review",
            "Approve in Wallet",
            "Transaction Submitted",
            "Confirmation",
          ]}
        />

        <DocsHeading id="security" level={2}>
          Wallet Security
        </DocsHeading>
        <Callout variant="security">
          Users should never provide their private keys or seed phrases to the
          platform. All transactions should be reviewed and approved through the
          user&apos;s own wallet.
        </Callout>
        <Callout variant="planned">
          Trading functionality is not live. This page describes the intended
          workflow for a future release.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
