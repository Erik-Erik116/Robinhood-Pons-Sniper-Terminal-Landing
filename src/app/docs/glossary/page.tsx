import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { createDocsMetadata } from "@/lib/docs/metadata";

export const metadata = createDocsMetadata(
  "Glossary",
  "Definitions of common terms used in Pons Sniper Terminal documentation.",
);

const terms = [
  {
    term: "Pons",
    definition:
      "The token launch and trading ecosystem built on Robinhood Chain. Users can discover, launch, and trade tokens within this environment.",
  },
  {
    term: "Robinhood Chain",
    definition:
      "The blockchain network on which the Pons ecosystem operates. On-chain activity such as transactions and token launches occur on this network.",
  },
  {
    term: "Token",
    definition:
      "A blockchain-based digital asset represented by a smart contract. Tokens can be traded, held, and transferred on-chain.",
  },
  {
    term: "Liquidity",
    definition:
      "The available funds in a trading pool that support buying and selling. Higher liquidity generally means easier execution with less slippage.",
  },
  {
    term: "Market Cap",
    definition:
      "A commonly used measure calculated from token price and circulating supply. It provides a rough sense of market size but has limitations.",
  },
  {
    term: "Wallet",
    definition:
      "A blockchain account used to hold assets and submit transactions. Wallets are controlled by private keys that should never be shared.",
  },
  {
    term: "On-Chain",
    definition:
      "Activity that is recorded and verifiable on the blockchain, such as transactions, token transfers, and liquidity events.",
  },
  {
    term: "Transaction",
    definition:
      "An action submitted to the blockchain, such as buying or selling a token, adding liquidity, or transferring assets.",
  },
  {
    term: "Slippage",
    definition:
      "The difference between the expected price of a trade and the actual executed price. Slippage can increase in low-liquidity markets.",
  },
  {
    term: "Gas",
    definition:
      "The fee required to execute transactions on a blockchain network. Gas costs vary based on network congestion and transaction complexity.",
  },
];

export default function GlossaryPage() {
  return (
    <DocsPage
      title="Glossary"
      description="Definitions of terms used throughout the documentation."
    >
      <DocsProse>
        {terms.map(({ term, definition }) => (
          <div key={term}>
            <DocsHeading id={term.toLowerCase().replace(/\s+/g, "-")} level={2}>
              {term}
            </DocsHeading>
            <p>{definition}</p>
          </div>
        ))}
      </DocsProse>
    </DocsPage>
  );
}
