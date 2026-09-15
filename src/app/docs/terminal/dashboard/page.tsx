import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Dashboard",
  "The intended high-level overview screen of the terminal.",
);

export default function DashboardPage() {
  return (
    <DocsPage
      title="Dashboard"
      description="The Dashboard is intended to provide a high-level overview of market activity, new launches, and tracked items."
      status="planned"
    >
      <DocsProse>
        <DocsHeading id="overview" level={2}>
          Overview
        </DocsHeading>
        <p>
          The Dashboard is designed to be the default view when opening the
          terminal. It aims to surface the most relevant information at a glance
          without requiring users to navigate multiple sections.
        </p>
        <p>Potential Dashboard sections may include:</p>
        <ul>
          <li>Recent new launches</li>
          <li>Market activity summary</li>
          <li>Tracked wallet activity</li>
          <li>Active alerts</li>
          <li>Portfolio summary</li>
        </ul>
        <Callout variant="planned">
          The Dashboard is a planned interface component. Visual design and data
          layout are under development.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
