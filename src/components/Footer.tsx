import Link from "next/link";
import { footerLinks, siteConfig, socialLinks } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 text-sm font-medium text-primary">
              <span aria-hidden>🏹</span>
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-muted">
              Trading intelligence for the Pons ecosystem.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social links">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary transition-colors hover:text-primary"
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 space-y-3 border-t border-border pt-8">
          <p className="text-xs text-muted">
            © 2026 Pons Sniper Terminal
          </p>
          <p className="max-w-2xl text-xs leading-relaxed text-muted">
            Pons Sniper Terminal is a software and analytics project. Nothing on this
            website constitutes financial advice. Digital asset trading involves
            significant risk.
          </p>
        </div>
      </div>
    </footer>
  );
}
