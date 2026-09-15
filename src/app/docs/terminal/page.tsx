import Link from "next/link";
import { DocsPage, DocsLinkGrid } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading, FlowDiagram } from "@/components/docs/DocsContent";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "The Terminal",
  "Conceptual overview of the Pons Sniper Terminal interface.",
);

export default function TerminalPage() {
  return (
    <DocsPage
      title="The Terminal"
      description="The terminal is the unified interface through which users access discovery, analytics, wallet intelligence, and future trading tools."
      status="planned"
    >
      <DocsProse>
        <p className="docs-lead">
          The terminal is being designed as a single focused environment rather
          than a collection of disconnected pages. Main areas include:
        </p>

        <FlowDiagram>{`Dashboard
Discover
Trending
Watchlist
Wallets
Portfolio
Alerts`}</FlowDiagram>

        <DocsLinkGrid
          links={[
            {
              title: "Dashboard",
              description: "High-level overview of market and wallet activity.",
              href: "/docs/terminal/dashboard",
            },
            {
              title: "Token View",
              description: "Deep research view for individual tokens.",
              href: "/docs/terminal/token-view",
            },
            {
              title: "Wallet View",
              description: "Structured overview of address activity.",
              href: "/docs/terminal/wallet-view",
            },
            {
              title: "Portfolio",
              description: "Positions, balances, and P/L tracking.",
              href: "/docs/terminal/portfolio",
            },
          ]}
        />

        <DocsHeading id="discover" level={2}>
          Additional Areas
        </DocsHeading>
        <ul>
          <li>
            <strong>Discover</strong> — New and active tokens
          </li>
          <li>
            <strong>Trending</strong> — Tokens with notable activity
          </li>
          <li>
            <strong>Watchlist</strong> — User-selected tokens and wallets
          </li>
          <li>
            <strong>Alerts</strong> — Configured notifications
          </li>
        </ul>
        <p>
          Learn about the underlying product modules in the{" "}
          <Link href="/docs/product">Product documentation</Link>.
        </p>
      </DocsProse>
    </DocsPage>
  );
}
