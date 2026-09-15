import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export function createDocsMetadata(
  title: string,
  description: string,
): Metadata {
  return {
    title: `${title} — ${siteConfig.name} Docs`,
    description,
  };
}
