# Pons Sniper Terminal — Landing Page

Marketing website for **Pons Sniper Terminal**, a professional trading and market-intelligence platform being built for the Pons ecosystem on Robinhood Chain.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Edit external links and site metadata in `src/lib/siteConfig.ts`:

- `docsUrl`
- `communityUrl`
- `twitterUrl`
- `telegramUrl`
- `githubUrl`

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/           # Pages and layout
  app/docs/      # Documentation pages
  components/    # Landing page and docs components
  lib/docs/      # Docs navigation and search index
  lib/           # Site config and content data
  hooks/         # Shared hooks
public/images/   # Brand assets
```
