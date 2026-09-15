import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Planned Utility",
  "Potential future utility for the Pons Sniper Terminal ecosystem token.",
);

export default function TokenUtilityPage() {
  return (
    <DocsPage
      title="Planned Utility"
      description="How a future ecosystem token may connect to product functionality."
      status="future"
    >
      <DocsProse>
        <DocsHeading id="premium" level={2}>
          Premium Features
        </DocsHeading>
        <p>
          Future premium tiers may unlock advanced analytics, extended watchlist
          capacity, or priority data access within the terminal.
        </p>

        <DocsHeading id="credits" level={2}>
          Terminal Credits
        </DocsHeading>
        <p>
          A credits system may be used for metered features such as API calls or
          advanced alert configurations.
        </p>

        <DocsHeading id="analytics" level={2}>
          Advanced Analytics
        </DocsHeading>
        <p>
          Enhanced market intelligence tools and configurable activity indicators
          may be available to token holders or credit users.
        </p>

        <DocsHeading id="api" level={2}>
          API Usage
        </DocsHeading>
        <p>
          Developer API access may require token utility or credits for rate-limited
          endpoints.
        </p>

        <Callout variant="warning">
          Do not interpret planned utility as a guarantee of value, returns, or
          demand. No token supply, price, allocation, staking APY, or revenue
          sharing has been finalized.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
