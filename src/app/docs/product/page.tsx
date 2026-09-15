import Link from "next/link";
import { DocsPage, DocsLinkGrid } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Product",
  "Overview of the product modules being developed for Pons Sniper Terminal.",
);

export default function ProductPage() {
  return (
    <DocsPage
      title="Product"
      description="Pons Sniper Terminal is being developed as a collection of tools rather than a single trading screen."
    >
      <DocsProse>
        <p className="docs-lead">
          Each module addresses a specific part of the trading workflow — from
          discovering new tokens to monitoring wallets and eventually executing
          trades. Modules are being built progressively and clearly labeled by
          development status.
        </p>

        <DocsLinkGrid
          links={[
            {
              title: "How It Works",
              description: "Understand the conceptual architecture and data flow.",
              href: "/docs/product/how-it-works",
            },
            {
              title: "Token Discovery",
              description: "Identify newly launched tokens and early market activity.",
              href: "/docs/product/token-discovery",
            },
            {
              title: "Market Intelligence",
              description: "Liquidity, volume, holders, and market metrics.",
              href: "/docs/product/market-intelligence",
            },
            {
              title: "Wallet Intelligence",
              description: "Track wallets, activity, and watchlists.",
              href: "/docs/product/wallet-intelligence",
            },
            {
              title: "Trading",
              description: "Intended wallet-connected trading workflow.",
              href: "/docs/product/trading",
            },
            {
              title: "Position Management",
              description: "Monitor positions, P/L, and exit levels.",
              href: "/docs/product/position-management",
            },
            {
              title: "Alerts",
              description: "Notifications for launches, wallets, and markets.",
              href: "/docs/product/alerts",
            },
            {
              title: "Product Principles",
              description: "The values guiding product development.",
              href: "/docs/product/principles",
            },
          ]}
        />

        <DocsHeading id="terminal" level={2}>
          The Terminal Interface
        </DocsHeading>
        <p>
          Product modules are intended to be accessed through a unified terminal
          interface. Learn more about the{" "}
          <Link href="/docs/terminal">terminal layout and views</Link>.
        </p>
      </DocsProse>
    </DocsPage>
  );
}
