"use client";

import Link from "next/link";
import type { ChangeEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { profile, siteLinks } from "@/content/profile";

function normalizePathname(pathname: string) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/$/, "");
}

export function SiteHeader() {
  const pathname = usePathname();
  const activePath = normalizePathname(pathname);
  const router = useRouter();
  const activeLabelMap: Record<string, string> = {
    "/about": "profile.txt",
    "/resume": "experience.md",
    "/works": "selected-works.md",
    "/contact": "contact.txt",
    "/": "profile.txt",
  };
  const activeLabel = activeLabelMap[activePath] ?? "profile.txt";

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
      <div className="site-brandline">
        <Link className="site-brand" href="/" aria-label={`${profile.name} home`}>
          <span className="site-brand-prompt">{profile.handle}@nyc</span>
        </Link>
        <span className="site-brand-route">{activeLabel}</span>
        <span className="site-brand-lambda">λ</span>
        <span className="site-brand-cursor" aria-hidden="true" />
      </div>

      <label className="site-nav-select" aria-label="Navigate to page">
        <span className="sr-only">Navigate</span>
        <select value={activePath} onChange={handleChange}>
          {siteLinks.map((item) => (
            <option key={item.href} value={item.href}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
    </header>
  );
}
