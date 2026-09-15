import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Position Management",
  "Planned tools for monitoring open positions and trading activity.",
);

const sections = [
  { id: "overview", title: "Overview" },
  { id: "features", title: "Planned Features" },
];

export default function PositionManagementPage() {
  return (
    <DocsPage
      title="Position Management"
      description="Position management tools are intended to help users organize and monitor their own trading activity."
      status="planned"
      sections={sections}
    >
      <DocsProse>
        <DocsHeading id="overview" level={2}>
          Overview
        </DocsHeading>
        <p>
          Future versions may include tools for tracking open positions, entry
          prices, current values, and configured exit levels. These tools are
          designed to provide informational context — not automated risk
          management.
        </p>

        <DocsHeading id="features" level={2}>
          Planned Features
        </DocsHeading>
        <ul>
          <li>Open positions and position size</li>
          <li>Entry price and current value</li>
          <li>Unrealized profit and loss</li>
          <li>Take-profit levels</li>
          <li>Stop-loss levels</li>
          <li>Position history</li>
        </ul>
        <Callout variant="warning">
          Position management tools do not guarantee exits at configured levels.
          Market conditions, slippage, and network conditions can affect execution.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
