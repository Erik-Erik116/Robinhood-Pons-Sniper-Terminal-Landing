import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Future Ecosystem",
  "The long-term ecosystem vision beyond the core terminal.",
);

export default function FutureEcosystemPage() {
  return (
    <DocsPage
      title="Future Ecosystem"
      description="The long-term vision extends beyond the terminal into a broader trading infrastructure layer."
      status="future"
    >
      <DocsProse>
        <DocsHeading id="overview" level={2}>
          Overview
        </DocsHeading>
        <p>
          Beyond the core terminal, the long-term vision includes premium tools, a
          developer platform, ecosystem integrations, and token utility connected
          to product functionality.
        </p>

        <DocsHeading id="components" level={2}>
          Potential Components
        </DocsHeading>
        <ul>
          <li>Token Discovery</li>
          <li>Market Data</li>
          <li>Wallet Intelligence</li>
          <li>Trading Tools</li>
          <li>Alerts & Automation</li>
          <li>Developer API</li>
          <li>Ecosystem Incentives</li>
        </ul>

        <Callout variant="planned">
          These components represent long-term ambitions. They are being designed
          incrementally and will be released as they are developed and validated.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
