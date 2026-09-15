import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading, FeatureStatus } from "@/components/docs/DocsContent";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Roadmap",
  "Development phases for Pons Sniper Terminal.",
);

const sections = [
  { id: "phase-1", title: "Phase 1 — Foundation" },
  { id: "phase-2", title: "Phase 2 — Data" },
  { id: "phase-3", title: "Phase 3 — Intelligence" },
  { id: "phase-4", title: "Phase 4 — Trading" },
  { id: "phase-5", title: "Phase 5 — Automation" },
  { id: "phase-6", title: "Phase 6 — Ecosystem" },
];

export default function RoadmapPage() {
  return (
    <DocsPage
      title="Roadmap"
      description="A realistic view of how Pons Sniper Terminal is intended to evolve over time."
      sections={sections}
    >
      <DocsProse>
        <DocsHeading id="phase-1" level={2}>
          Phase 1 — Foundation
        </DocsHeading>
        <FeatureStatus status="building" className="mb-4" />
        <ul>
          <li>Landing page</li>
          <li>Documentation</li>
          <li>Product architecture</li>
          <li>Pons market research</li>
          <li>Terminal design</li>
        </ul>

        <DocsHeading id="phase-2" level={2}>
          Phase 2 — Data
        </DocsHeading>
        <FeatureStatus status="planned" className="mb-4" />
        <ul>
          <li>Token discovery</li>
          <li>Market data</li>
          <li>Transaction monitoring</li>
          <li>Basic analytics</li>
        </ul>

        <DocsHeading id="phase-3" level={2}>
          Phase 3 — Intelligence
        </DocsHeading>
        <FeatureStatus status="planned" className="mb-4" />
        <ul>
          <li>Wallet tracking</li>
          <li>Watchlists</li>
          <li>Activity indicators</li>
          <li>Advanced analytics</li>
        </ul>

        <DocsHeading id="phase-4" level={2}>
          Phase 4 — Trading
        </DocsHeading>
        <FeatureStatus status="planned" className="mb-4" />
        <ul>
          <li>Wallet connection</li>
          <li>Buy/sell interface</li>
          <li>Position management</li>
        </ul>

        <DocsHeading id="phase-5" level={2}>
          Phase 5 — Automation
        </DocsHeading>
        <FeatureStatus status="future" className="mb-4" />
        <ul>
          <li>Advanced alerts</li>
          <li>Telegram integration</li>
          <li>Automation workflows</li>
          <li>API access</li>
        </ul>

        <DocsHeading id="phase-6" level={2}>
          Phase 6 — Ecosystem
        </DocsHeading>
        <FeatureStatus status="future" className="mb-4" />
        <ul>
          <li>Premium tools</li>
          <li>Developer platform</li>
          <li>Ecosystem integrations</li>
          <li>Token utility</li>
        </ul>

        <p className="text-sm text-muted">
          No specific release dates are provided. Progress will be communicated
          through official community channels as milestones are reached.
        </p>
      </DocsProse>
    </DocsPage>
  );
}
