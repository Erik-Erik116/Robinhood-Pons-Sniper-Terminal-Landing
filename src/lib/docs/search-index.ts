import { docsNavigation } from "./navigation";

export interface SearchEntry {
  title: string;
  href: string;
  section: string;
  keywords: string[];
}

const extraKeywords: Record<string, string[]> = {
  "/docs/overview": ["introduction", "start", "what is", "terminal"],
  "/docs/why": ["problem", "fragmented", "workflow"],
  "/docs/who-is-it-for": ["traders", "researchers", "builders", "audience"],
  "/docs/product/how-it-works": ["architecture", "data", "blockchain", "flow"],
  "/docs/product/token-discovery": ["launches", "new tokens", "discovery"],
  "/docs/product/market-intelligence": ["liquidity", "volume", "holders", "metrics"],
  "/docs/product/wallet-intelligence": ["wallets", "tracking", "watchlist"],
  "/docs/product/trading": ["buy", "sell", "wallet connect", "execution"],
  "/docs/product/position-management": ["positions", "pnl", "take profit", "stop loss"],
  "/docs/product/alerts": ["notifications", "telegram", "monitoring"],
  "/docs/product/principles": ["transparency", "user control", "data first"],
  "/docs/terminal": ["interface", "dashboard", "ui"],
  "/docs/ecosystem/vision": ["roadmap", "phases", "long term"],
  "/docs/ecosystem/pons": ["ecosystem", "launch"],
  "/docs/ecosystem/robinhood-chain": ["chain", "blockchain", "network"],
  "/docs/token": ["utility", "token economics"],
  "/docs/roadmap": ["phases", "timeline", "development"],
  "/docs/security": ["private key", "seed phrase", "wallet security"],
  "/docs/risk": ["disclaimer", "risk", "financial advice", "volatility"],
  "/docs/faq": ["questions", "answers", "live", "affiliation"],
  "/docs/glossary": ["terms", "definitions", "liquidity", "slippage", "gas"],
};

export const searchIndex: SearchEntry[] = [
  {
    title: "Documentation Home",
    href: "/docs",
    section: "Docs",
    keywords: ["docs", "documentation", "home", "start"],
  },
  ...docsNavigation.flatMap((section) =>
    section.items.map((item) => ({
      title: item.title,
      href: item.href,
      section: section.title,
      keywords: [
        item.title.toLowerCase(),
        section.title.toLowerCase(),
        ...(extraKeywords[item.href] ?? []),
      ],
    })),
  ),
];

export function searchDocs(query: string): SearchEntry[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return searchIndex
    .filter((entry) => {
      const haystack = [
        entry.title,
        entry.section,
        ...entry.keywords,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalized);
    })
    .slice(0, 8);
}
