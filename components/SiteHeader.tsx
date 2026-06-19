"use client";

import Link from "next/link";
import type { ChangeEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { profile, siteLinks } from "@/content/profile";

const primaryLinks = siteLinks;

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextHref = event.target.value;
    const nextLink = siteLinks.find((item) => item.href === nextHref);

    if (!nextLink) return;

    if (nextLink.external) {
      window.location.href = nextLink.href;
      return;
    }

    router.push(nextLink.href);
  }

  return (
    <header className="site-header">
      <Link className="site-brand" href="/" aria-label={`${profile.name} home`}>
        <span className="site-brand-prompt">{profile.handle}@nyc</span>
        <span className="site-brand-lambda">λ</span>
        <span className="site-brand-cursor" aria-hidden="true" />
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        {primaryLinks.map((item) => (
          <Link
            key={item.href}
            className={pathname === item.href ? "is-active" : ""}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <label className="site-nav-select" aria-label="Navigate to page">
        <span className="sr-only">Navigate</span>
        <select value={pathname} onChange={handleChange}>
          {primaryLinks.map((item) => (
            <option key={item.href} value={item.href}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
    </header>
  );
}
