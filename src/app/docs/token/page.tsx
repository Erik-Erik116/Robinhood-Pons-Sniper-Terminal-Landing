import Link from "next/link";
import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Ecosystem Token",
  "Overview of the long-term token utility vision for Pons Sniper Terminal.",
);

export default function TokenPage() {
  return (
    <DocsPage
      title="Ecosystem Token"
      description="A native ecosystem token is part of the long-term vision for Pons Sniper Terminal."
      status="future"
    >
      <DocsProse>
        <p className="docs-lead">
          The intention is for token utility to be connected to actual product
          functionality rather than positioning the token purely as a speculative
          asset.
        </p>

        <DocsHeading id="utility" level={2}>
          Potential Future Utility
        </DocsHeading>
        <ul>
          <li>Premium Features</li>
          <li>Terminal Credits</li>
          <li>Advanced Analytics</li>
          <li>API Usage</li>
          <li>Ecosystem Features</li>
        </ul>

        <Callout variant="info">
          Exact token economics, supply, distribution, utility mechanics, and launch
          details will be published separately when finalized.
        </Callout>

        <p>
          Learn more in{" "}
          <Link href="/docs/token/utility">Planned Utility</Link> and the{" "}
          <Link href="/docs/token/planned-model">Future Ecosystem Model</Link>.
        </p>
      </DocsProse>
    </DocsPage>
  );
}
