import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { Callout } from "@/components/docs/Callout";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Risk & Disclaimer",
  "Important risk information and legal disclaimers.",
);

const sections = [
  { id: "volatility", title: "Market Volatility" },
  { id: "no-guarantees", title: "No Guarantees" },
  { id: "data", title: "Data Accuracy" },
  { id: "responsibility", title: "User Responsibility" },
  { id: "not-advice", title: "Not Financial Advice" },
];

export default function RiskPage() {
  return (
    <DocsPage
      title="Risk & Disclaimer"
      description="Important information about the risks of digital asset trading and the limitations of this platform."
      sections={sections}
    >
      <DocsProse>
        <DocsHeading id="volatility" level={2}>
          Market Volatility
        </DocsHeading>
        <p>
          Digital asset markets are highly volatile and can result in partial or
          complete loss of capital. Token prices can change rapidly and
          unpredictably.
        </p>

        <DocsHeading id="no-guarantees" level={2}>
          No Guarantees
        </DocsHeading>
        <p>
          Pons Sniper Terminal provides software, data, analytics, and trading
          tools. It does not guarantee trading outcomes, profits, or protection
          against losses.
        </p>

        <DocsHeading id="data" level={2}>
          Data Accuracy
        </DocsHeading>
        <p>
          Information displayed by the platform may contain delays, inaccuracies,
          or technical errors. On-chain data depends on network conditions and
          indexing infrastructure.
        </p>

        <DocsHeading id="responsibility" level={2}>
          User Responsibility
        </DocsHeading>
        <p>
          Users are responsible for their own trading decisions and transactions.
          Always verify contract addresses, transaction details, and market
          information independently.
        </p>

        <DocsHeading id="not-advice" level={2}>
          Not Financial Advice
        </DocsHeading>
        <p>
          Nothing on the website, in the documentation, or in the terminal should
          be interpreted as financial, investment, legal, or tax advice.
        </p>

        <Callout variant="security">
          Never share private keys or seed phrases. No legitimate platform will
          ever request them.
        </Callout>
      </DocsProse>
    </DocsPage>
  );
}
