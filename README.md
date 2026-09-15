# Pons Sniper Terminal — Landing & Documentation

Marketing website and product documentation for **Pons Sniper Terminal** — a professional trading and market-intelligence platform being built for the **Pons ecosystem on Robinhood Chain**.

<img width="1333" height="941" alt="image" src="https://github.com/user-attachments/assets/450dae10-5f68-4dcb-9a05-34ffcfeb30eb" />


This repository contains:

- A **landing page** that introduces the product vision, features, and roadmap
- A **documentation site** with 30+ pages covering product architecture, terminal UI, ecosystem, security, and FAQ

The project is **in active development**. The site describes planned functionality clearly and does not claim features that are not yet built.

---

## Stack

| Technology | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org/) | App Router, SSR/static pages |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe components and config |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling and design system |
| [Framer Motion](https://www.framer.com/motion/) | Scroll and load animations |

---

## Prerequisites

- **Node.js** 18 or later
- **npm** (or compatible package manager)

---

## Getting Started

```bash
cd /root/Jipred/Robinhood-Pons-Sniper-Terminal-Landing
npm install
npm run dev
```

Open in your browser:

| Route | URL |
|---|---|
| Landing page | http://localhost:3000 |
| Documentation | http://localhost:3000/docs |

### Other scripts

```bash
npm run build   # Production build
npm start       # Run production server (after build)
npm run lint    # ESLint
```

### Custom port

```bash
npm run dev -- -p 3001
```

---

## Site Routes

### Landing page (`/`)

Single-page marketing site with sections for hero, problem statement, product features, workflow, vision, ecosystem, token utility, docs CTA, and footer.

### Documentation (`/docs`)

| Section | Example routes |
|---|---|
| Introduction | `/docs/overview`, `/docs/why`, `/docs/who-is-it-for` |
| Product | `/docs/product`, `/docs/product/token-discovery`, … |
| Terminal | `/docs/terminal`, `/docs/terminal/token-view`, … |
| Ecosystem | `/docs/ecosystem/vision`, `/docs/ecosystem/pons`, … |
| Token | `/docs/token`, `/docs/token/utility` |
| Reference | `/docs/roadmap`, `/docs/security`, `/docs/risk`, `/docs/faq`, `/docs/glossary` |

Docs features:

- Sticky sidebar navigation
- Client-side search (`⌘K` / `Ctrl+K`)
- “On this page” table of contents
- Status badges (Building, Planned, Future, etc.)
- Responsive mobile drawer menu

---

## Configuration

Edit site-wide settings in **`src/lib/siteConfig.ts`**:

```ts
export const siteConfig = {
  name: "Pons Sniper Terminal",
  url: "https://pons-sniper-terminal.com",
  docsUrl: "/docs",
  communityUrl: "#",      // ← update when ready
  githubUrl: "#",
  twitterUrl: "#",
  telegramUrl: "#",
  launchAppUrl: "#",
  launchAppLabel: "Coming Soon",
};
```

Docs sidebar and search index:

| File | Purpose |
|---|---|
| `src/lib/docs/navigation.ts` | Sidebar structure and breadcrumbs |
| `src/lib/docs/search-index.ts` | Search keywords and entries |
| `src/lib/data.ts` | Landing page content (features, workflow, etc.) |

---

## Project Structure

```
Robinhood-Pons-Sniper-Terminal-Landing/
├── public/
│   └── images/              # Logo, hero art, background assets
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout, fonts, SEO metadata
│   │   ├── page.tsx         # Landing page
│   │   ├── globals.css      # Design tokens, docs prose styles
│   │   └── docs/            # Documentation routes
│   ├── components/
│   │   ├── ui/              # Shared UI (Button, badges, scroll reveal)
│   │   ├── docs/            # Docs shell, sidebar, search, callouts
│   │   └── *.tsx            # Landing page sections
│   ├── lib/
│   │   ├── siteConfig.ts    # Site URLs and nav links
│   │   ├── data.ts          # Landing page content arrays
│   │   └── docs/            # Docs navigation and metadata helpers
│   └── hooks/
│       └── usePrefersReducedMotion.ts
├── package.json
├── next.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

---

## Design System

Dark theme aligned with the Pons Sniper Terminal brand:

- Background: `#050608`
- Accent: `#6EE7FF`
- Typography: Inter (body) + Space Grotesk (headings)

Assets live in `public/images/`:

- `logo-mark.png`
- `hero-concept.png`
- `bg-robin.png`

---

## Deployment

Build a static-friendly production bundle:

```bash
npm run build
npm start
```

Set `siteConfig.url` to your production domain before deploying so Open Graph and canonical URLs are correct.

---

## License

Private project. All rights reserved unless otherwise specified.
