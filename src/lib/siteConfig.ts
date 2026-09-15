export const siteConfig = {
  name: "Pons Sniper Terminal",
  shortName: "Pons Terminal",
  description:
    "Pons Sniper Terminal is a professional trading and market-intelligence platform being built for the Pons ecosystem on Robinhood Chain.",
  url: "https://pons-sniper-terminal.com",
  docsUrl: "/docs",
  communityUrl: "#",
  githubUrl: "#",
  twitterUrl: "#",
  telegramUrl: "#",
  launchAppUrl: "#",
  launchAppLabel: "Coming Soon",
} as const;

export const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Vision", href: "#vision" },
  { label: "Docs", href: siteConfig.docsUrl },
] as const;

export const footerLinks = [
  { label: "Product", href: "#product" },
  { label: "Vision", href: "#vision" },
  { label: "Docs", href: siteConfig.docsUrl },
  { label: "Community", href: siteConfig.communityUrl },
] as const;

export const socialLinks = [
  { label: "X", href: siteConfig.twitterUrl },
  { label: "Telegram", href: siteConfig.telegramUrl },
  { label: "GitHub", href: siteConfig.githubUrl },
] as const;
