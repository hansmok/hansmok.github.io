"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteLinks } from "@/content/profile";

export function SiteHeader() {
  const pathname = usePathname().replace(/\/$/, "") || "/about";
  return (
    <header className="site-header">
      <nav aria-label="Main navigation">
        <p className="nav-heading">INDEX</p>
        <ul>
          {siteLinks.map((item) => (
            <li key={item.href}>
              {item.external ? <a href={item.href}>{item.label}</a> : (
                <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
