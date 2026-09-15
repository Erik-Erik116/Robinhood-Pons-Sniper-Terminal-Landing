"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDocsBreadcrumbs } from "@/lib/docs/navigation";

export function DocsBreadcrumbs() {
  const pathname = usePathname();
  const crumbs = getDocsBreadcrumbs(pathname);

  if (crumbs.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
        {crumbs.map((crumb, index) => (
          <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-border" aria-hidden>
                /
              </span>
            )}
            {crumb.href && index < crumbs.length - 1 ? (
              <Link
                href={crumb.href}
                className="text-muted transition-colors hover:text-secondary"
              >
                {crumb.label}
              </Link>
            ) : (
              <span
                className={
                  index === crumbs.length - 1 ? "text-secondary" : "text-muted"
                }
              >
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
