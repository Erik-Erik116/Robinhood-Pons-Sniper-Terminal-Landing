export interface DocsNavItem {
  title: string;
  href: string;
  status?: "available" | "building" | "planned" | "coming-soon" | "future";
}

export interface DocsNavSection {
  title: string;
  items: DocsNavItem[];
}

export const docsNavigation: DocsNavSection[] = [
  {
    title: "Introduction",
    items: [
      { title: "Overview", href: "/docs/overview" },
      { title: "Why Pons Sniper Terminal?", href: "/docs/why" },
      { title: "Who Is It For?", href: "/docs/who-is-it-for" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Product Overview", href: "/docs/product" },
      { title: "How It Works", href: "/docs/product/how-it-works" },
      { title: "Token Discovery", href: "/docs/product/token-discovery", status: "building" },
      {
        title: "Market Intelligence",
        href: "/docs/product/market-intelligence",
        status: "building",
      },
      {
        title: "Wallet Intelligence",
        href: "/docs/product/wallet-intelligence",
        status: "planned",
      },
      { title: "Trading", href: "/docs/product/trading", status: "planned" },
      {
        title: "Position Management",
        href: "/docs/product/position-management",
        status: "planned",
      },
      { title: "Alerts", href: "/docs/product/alerts", status: "planned" },
      { title: "Product Principles", href: "/docs/product/principles" },
    ],
  },
  {
    title: "Terminal",
    items: [
      { title: "The Terminal", href: "/docs/terminal" },
      { title: "Dashboard", href: "/docs/terminal/dashboard", status: "planned" },
      { title: "Token View", href: "/docs/terminal/token-view", status: "planned" },
      { title: "Wallet View", href: "/docs/terminal/wallet-view", status: "planned" },
      { title: "Portfolio", href: "/docs/terminal/portfolio", status: "planned" },
    ],
  },
  {
    title: "Ecosystem",
    items: [
      { title: "Long-Term Vision", href: "/docs/ecosystem/vision" },
      { title: "Pons", href: "/docs/ecosystem/pons" },
      { title: "Robinhood Chain", href: "/docs/ecosystem/robinhood-chain" },
      { title: "Future Ecosystem", href: "/docs/ecosystem/future", status: "future" },
    ],
  },
  {
    title: "Token",
    items: [
      { title: "Ecosystem Token", href: "/docs/token" },
      { title: "Planned Utility", href: "/docs/token/utility", status: "future" },
      { title: "Future Model", href: "/docs/token/planned-model", status: "future" },
    ],
  },
  {
    title: "Reference",
    items: [
      { title: "Roadmap", href: "/docs/roadmap" },
      { title: "Security", href: "/docs/security" },
      { title: "Risk & Disclaimer", href: "/docs/risk" },
      { title: "FAQ", href: "/docs/faq" },
      { title: "Glossary", href: "/docs/glossary" },
    ],
  },
];

export function flattenDocsNav(): DocsNavItem[] {
  return docsNavigation.flatMap((section) => section.items);
}

export function getDocsBreadcrumbs(pathname: string): { label: string; href?: string }[] {
  const crumbs: { label: string; href?: string }[] = [
    { label: "Docs", href: "/docs" },
  ];

  for (const section of docsNavigation) {
    for (const item of section.items) {
      if (item.href === pathname) {
        crumbs.push({ label: section.title });
        crumbs.push({ label: item.title });
        return crumbs;
      }
    }
  }

  if (pathname === "/docs") {
    return [{ label: "Docs" }];
  }

  return crumbs;
}
