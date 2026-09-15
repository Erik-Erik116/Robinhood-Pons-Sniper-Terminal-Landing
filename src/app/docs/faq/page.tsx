import Link from "next/link";
import { DocsPage } from "@/components/docs/DocsPage";
import { DocsProse, DocsHeading } from "@/components/docs/DocsContent";
import { createDocsMetadata } from "@/lib/docs/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = createDocsMetadata(
  "FAQ",
  "Frequently asked questions about Pons Sniper Terminal.",
);

const faqs = [
  {
    id: "what-is",
    question: "What is Pons Sniper Terminal?",
    answer:
      "A trading and market-intelligence platform being built for the Pons ecosystem on Robinhood Chain.",
  },
  {
    id: "trading-bot",
    question: "Is it a trading bot?",
    answer:
      "Not primarily. The initial vision focuses on discovery, analytics, wallet intelligence, and trading tools. Automation may become a future component.",
  },
  {
    id: "live",
    question: "Is it live?",
    answer:
      "The project is currently under development. Features will be released progressively. See the roadmap for current status.",
  },
  {
    id: "private-key",
    question: "Do I need to share my private key?",
    answer:
      "No. Users should never share private keys or seed phrases. The intended model is user-controlled wallet signing.",
  },
  {
    id: "profits",
    question: "Does the platform guarantee profits?",
    answer:
      "No. It provides software and information, not guaranteed trading outcomes.",
  },
  {
    id: "token",
    question: "Is there a token?",
    answer:
      "A native ecosystem token is part of the long-term vision. Details will be published separately when finalized.",
  },
  {
    id: "affiliation",
    question: "Is Pons Sniper Terminal affiliated with Pons?",
    answer:
      "Pons Sniper Terminal is an independent project unless otherwise stated. It is not affiliated with, endorsed by, or officially connected to Pons or Robinhood unless explicitly confirmed.",
  },
  {
    id: "follow",
    question: "Where can I follow development?",
    answer: `Follow development through the project's official community channels.`,
  },
];

export default function FAQPage() {
  return (
    <DocsPage title="FAQ" description="Common questions about Pons Sniper Terminal.">
      <DocsProse>
        {faqs.map((faq) => (
          <div key={faq.id} className="scroll-mt-28">
            <DocsHeading id={faq.id} level={2}>
              {faq.question}
            </DocsHeading>
            <p>{faq.answer}</p>
            {faq.id === "follow" && (
              <p>
                <Link
                  href={siteConfig.communityUrl}
                  className="text-accent hover:underline"
                >
                  Join the Community →
                </Link>
              </p>
            )}
            {faq.id === "live" && (
              <p>
                <Link href="/docs/roadmap" className="text-accent hover:underline">
                  View Roadmap →
                </Link>
              </p>
            )}
          </div>
        ))}
      </DocsProse>
    </DocsPage>
  );
}
