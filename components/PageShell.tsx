import { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";

type PageShellProps = {
  eyebrow?: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, children }: PageShellProps) {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="page-heading">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      </section>

      {children}
    </main>
  );
}
