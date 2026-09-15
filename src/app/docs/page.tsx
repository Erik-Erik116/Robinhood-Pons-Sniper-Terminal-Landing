import Link from "next/link";
import { DocsHero, DocsCard } from "@/components/docs/DocsPage";
import {
  DocsProse,
  WorkflowSteps,
  StatusTable,
  FeatureStatus,
} from "@/components/docs/DocsContent";
import { createDocsMetadata } from "@/lib/docs/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = createDocsMetadata(
  "Documentation",
  "Understand the terminal, the product architecture, and the vision behind the Pons trading ecosystem.",
);

export default function DocsHomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8 lg:px-12 xl:px-16 xl:py-12">
      <DocsHero
        title="Pons Sniper Terminal"
        description="Understand the terminal, the product architecture, and the vision behind the Pons trading ecosystem."
        status="building"
      />

      <div className="mb-12 grid gap-4 md:grid-cols-3">
        <DocsCard
          icon="📖"
          title="Start Here"
          description="Understand the product, the problem it aims to solve, and who it is for."
          href="/docs/overview"
        />
        <DocsCard
          icon="⚙"
          title="Explore the Product"
          description="Learn about discovery, analytics, wallet intelligence, and trading workflows."
          href="/docs/product"
        />
        <DocsCard
          icon="◎"
          title="Understand the Vision"
          description="Explore the roadmap, ecosystem model, and long-term development plan."
          href="/docs/ecosystem/vision"
        />
      </div>

      <DocsProse>
        <h2 className="docs-h2">What are we building?</h2>
        <p className="docs-lead">{siteConfig.description}</p>
        <p>
          Instead of requiring users to move between multiple tools, the long-term
          goal is to bring discovery, analysis, tracking, execution, and position
          management into one focused interface.
        </p>

        <WorkflowSteps
          steps={["Discover", "Analyze", "Track", "Execute", "Manage"]}
        />

        <h2 className="docs-h2">Current Status</h2>
        <p>
          The project is under active development. The landing page and
          documentation are available now. Product features are being designed and
          built progressively.
        </p>

        <StatusTable
          items={[
            { name: "Landing Page", status: "available" },
            { name: "Documentation", status: "building" },
            { name: "Token Discovery", status: "building" },
            { name: "Market Intelligence", status: "building" },
            { name: "Wallet Intelligence", status: "planned" },
            { name: "Trading Tools", status: "planned" },
            { name: "Automation & API", status: "future" },
          ]}
        />

        <div className="flex flex-wrap gap-3">
          <Link
            href="/docs/overview"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(110,231,255,0.2)]"
          >
            Read Overview →
          </Link>
          <Link
            href="/docs/roadmap"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-white/15 hover:bg-card"
          >
            View Roadmap
          </Link>
        </div>

        <hr />

        <h2 className="docs-h2">Developers</h2>
        <p>
          API, WebSocket, SDK, and integration documentation are planned for future
          releases.
        </p>
        <FeatureStatus status="coming-soon" />
      </DocsProse>
    </div>
  );
}
