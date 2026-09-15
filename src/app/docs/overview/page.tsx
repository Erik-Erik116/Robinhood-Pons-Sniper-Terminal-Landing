import { DocsPage } from "@/components/docs/DocsPage";
import {
  DocsProse,
  DocsHeading,
  WorkflowSteps,
} from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = createDocsMetadata(
  "Overview",
  "Introduction to Pons Sniper Terminal and its purpose within the Pons ecosystem.",
);

const sections = [
  { id: "overview", title: "Overview" },
  { id: "purpose", title: "Purpose" },
  { id: "workflow", title: "Workflow" },
  { id: "status", title: "Development Status" },
];

export default function OverviewPage() {
  return (
    <DocsPage
      title="Pons Sniper Terminal"
      description={siteConfig.description}
      status="building"
      sections={sections}
    >
      <DocsProse>
        <DocsHeading id="overview" level={2}>
          Overview
        </DocsHeading>
        <p className="docs-lead">{siteConfig.description}</p>
        <p>
          The goal is to give traders a focused environment for discovering new
          launches, understanding on-chain activity, monitoring wallets, managing
          positions, and eventually interacting with supported markets.
        </p>
        <p>
          Instead of requiring users to move between multiple tools to understand
          what is happening in the market, Pons Sniper Terminal is designed to
          bring the most important workflows into one interface.
        </p>

        <DocsHeading id="purpose" level={2}>
          Purpose
        </DocsHeading>
        <p>
          Pons Sniper Terminal is not intended to be another generic token
          scanner. It is being designed as a professional trading and
          market-intelligence layer that helps users move from information to
          action with less friction.
        </p>

        <DocsHeading id="workflow" level={2}>
          Workflow
        </DocsHeading>
        <WorkflowSteps
          steps={["Discover", "Analyze", "Track", "Execute", "Manage"]}
        />

        <DocsHeading id="status" level={2}>
          Development Status
        </DocsHeading>
        <Callout variant="info">
          This product is under active development. Documentation describes the
          intended architecture and roadmap. Not all features described here are
          available yet.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
