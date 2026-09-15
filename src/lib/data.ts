export type FeatureStatus = "building" | "planned" | "coming-soon" | undefined;

export interface Feature {
  number: string;
  title: string;
  description: string;
  keywords: string[];
  status?: FeatureStatus;
  visual?: "chart" | "wallet" | "launch" | "execute" | "automate";
}

export interface WorkflowStage {
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Find newly launched Pons tokens and monitor their activity as markets develop.",
    keywords: ["NEW LAUNCHES", "TOKEN ACTIVITY", "MARKET DISCOVERY"],
    status: "building",
    visual: "launch",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "Understand liquidity, volume, transactions, holders, and other on-chain activity from one interface.",
    keywords: ["LIQUIDITY", "VOLUME", "ON-CHAIN DATA"],
    status: "building",
    visual: "chart",
  },
  {
    number: "03",
    title: "Track",
    description: "Follow wallets and monitor activity across the ecosystem.",
    keywords: ["WALLETS", "ACTIVITY", "WATCHLISTS"],
    status: "building",
    visual: "wallet",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "The long-term vision includes a streamlined interface for interacting with supported markets.",
    keywords: ["TRADING", "MARKETS", "EXECUTION"],
    status: "planned",
    visual: "execute",
  },
  {
    number: "05",
    title: "Automate",
    description:
      "Future versions may include advanced alerts, automation, and developer APIs.",
    keywords: ["ALERTS", "AUTOMATION", "API"],
    status: "coming-soon",
    visual: "automate",
  },
];

export const workflowStages: WorkflowStage[] = [
  {
    title: "Discover",
    description: "Find new market activity.",
  },
  {
    title: "Analyze",
    description: "Understand the data.",
  },
  {
    title: "Track",
    description: "Follow tokens and wallets.",
  },
  {
    title: "Execute",
    description: "Interact with supported markets.",
  },
  {
    title: "Manage",
    description: "Monitor positions and alerts.",
  },
];

export const ecosystemItems = [
  "TOKEN DISCOVERY",
  "MARKET DATA",
  "WALLET INTELLIGENCE",
  "TRADING",
  "ALERTS",
  "AUTOMATION",
  "API",
] as const;

export const tokenUtilityItems = [
  "Premium Features",
  "Terminal Credits",
  "Advanced Analytics",
  "API Access",
  "Ecosystem Incentives",
] as const;

export const problemTools = [
  "PONS EXPLORER",
  "CHARTS",
  "WALLET TRACKER",
  "TELEGRAM",
  "TRADING TOOL",
] as const;

export const terminalMarketData = [
  { symbol: "$ABC", value: "$72K", change: "+18.4%" },
  { symbol: "$XYZ", value: "$43K", change: "+9.2%" },
  { symbol: "$PONSX", value: "$31K", change: "+27.8%" },
] as const;

export const terminalLaunches = [
  { symbol: "$ABC", value: "$72K", time: "02:14" },
  { symbol: "$XYZ", value: "$43K", time: "04:52" },
  { symbol: "$TEST", value: "$31K", time: "07:18" },
] as const;

export const terminalWalletActivity = [
  { wallet: "0x82...A1", action: "BUY", amount: "$1,240" },
  { wallet: "0x19...F4", action: "BUY", amount: "$820" },
  { wallet: "0x71...B2", action: "SELL", amount: "$430" },
] as const;
