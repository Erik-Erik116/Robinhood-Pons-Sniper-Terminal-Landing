import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Who Is It For?",
  "The audiences Pons Sniper Terminal is being designed to serve.",
);

const sections = [
  { id: "traders", title: "Pons Traders" },
  { id: "researchers", title: "On-Chain Researchers" },
  { id: "advanced", title: "Advanced Traders" },
  { id: "builders", title: "Web3 Builders" },
  { id: "communities", title: "Pons Communities" },
];

export default function WhoIsItForPage() {
  return (
    <DocsPage
      title="Who is Pons Sniper Terminal for?"
      description="The terminal is being designed for users who need focused market intelligence within the Pons ecosystem."
      sections={sections}
    >
      <DocsProse>
        <DocsHeading id="traders" level={2}>
          Pons Traders
        </DocsHeading>
        <p>
          Users who actively monitor newly launched tokens and markets within the
          Pons ecosystem. These users need fast access to launch activity,
          liquidity context, and early market signals.
        </p>

        <DocsHeading id="researchers" level={2}>
          On-Chain Researchers
        </DocsHeading>
        <p>
          Users who want to understand token and wallet activity in depth. They
          may use the terminal to research market behavior, track addresses, and
          analyze on-chain patterns.
        </p>

        <DocsHeading id="advanced" level={2}>
          Advanced Traders
        </DocsHeading>
        <p>
          Users who want more detailed market information and a focused trading
          workflow. Future versions may support position management, alerts, and
          streamlined execution.
        </p>

        <DocsHeading id="builders" level={2}>
          Web3 Builders
        </DocsHeading>
        <p>
          Developers and ecosystem participants interested in data, APIs, and future
          integrations. A developer platform is part of the long-term vision.
        </p>

        <DocsHeading id="communities" level={2}>
          Pons Communities
        </DocsHeading>
        <p>
          Communities that want better visibility into token and wallet activity
          within their ecosystem. The terminal is intended to support shared
          research and monitoring workflows.
        </p>
      </DocsProse>
    </DocsPage>
  );
}
