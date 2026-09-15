import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Security",
  "Security principles for Pons Sniper Terminal.",
);

const sections = [
  { id: "wallet", title: "Wallet Security" },
  { id: "approval", title: "Transaction Approval" },
  { id: "permissions", title: "Permissions" },
  { id: "transparency", title: "Transparency" },
  { id: "infrastructure", title: "Infrastructure" },
];

export default function SecurityPage() {
  return (
    <DocsPage
      title="Security"
      description="Security principles guiding the design and development of Pons Sniper Terminal."
      sections={sections}
    >
      <DocsProse>
        <DocsHeading id="wallet" level={2}>
          Wallet Security
        </DocsHeading>
        <Callout variant="security">
          Users should never share private keys or seed phrases with Pons Sniper
          Terminal or any third party. Legitimate platforms will never request
          this information.
        </Callout>

        <DocsHeading id="approval" level={2}>
          Transaction Approval
        </DocsHeading>
        <p>
          Transactions should be reviewed and approved through the user&apos;s own
          wallet. The platform is designed to be non-custodial — it does not hold
          user funds.
        </p>

        <DocsHeading id="permissions" level={2}>
          Permissions
        </DocsHeading>
        <p>
          The platform should request only the permissions required for its
          functionality. Users should review wallet connection permissions carefully
          before approving.
        </p>

        <DocsHeading id="transparency" level={2}>
          Transparency
        </DocsHeading>
        <p>
          Contract addresses and important technical information will be published
          when applicable. Users should verify contract addresses independently
          before interacting with them.
        </p>

        <DocsHeading id="infrastructure" level={2}>
          Infrastructure
        </DocsHeading>
        <p>
          Future documentation will describe RPC infrastructure, data indexing, API
          security, rate limiting, authentication, and monitoring as these systems
          are deployed.
        </p>
        <Callout variant="info">
          No security certifications or third-party audits have been completed at
          this stage of development.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
