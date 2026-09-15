import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Product Principles",
  "The core principles guiding Pons Sniper Terminal development.",
);

const sections = [
  { id: "data-first", title: "Data First" },
  { id: "user-control", title: "User Control" },
  { id: "transparency", title: "Transparency" },
  { id: "product-first", title: "Product First" },
];

export default function PrinciplesPage() {
  return (
    <DocsPage
      title="Product Principles"
      description="The values that differentiate Pons Sniper Terminal from speculative token projects."
      sections={sections}
    >
      <DocsProse>
        <DocsHeading id="data-first" level={2}>
          Data First
        </DocsHeading>
        <p>
          Build around measurable on-chain information rather than hype. Product
          decisions should be grounded in data that users can verify and
          understand.
        </p>

        <DocsHeading id="user-control" level={2}>
          User Control
        </DocsHeading>
        <p>
          Users should remain in control of transaction approvals. The platform
          is designed to be non-custodial — users connect their own wallets and
          sign their own transactions.
        </p>

        <DocsHeading id="transparency" level={2}>
          Transparency
        </DocsHeading>
        <p>
          Clearly distinguish live functionality, analytics, estimates, and
          planned features. Documentation and the product interface should never
          overstate what is currently available.
        </p>

        <DocsHeading id="product-first" level={2}>
          Product First
        </DocsHeading>
        <p>
          Build useful software before building an ecosystem around it. Any future
          token utility should be connected to actual product functionality rather
          than existing only as a speculative asset.
        </p>
      </DocsProse>
    </DocsPage>
  );
}
