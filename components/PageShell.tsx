import { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="site-shell">
      <SiteHeader />
      {children}
    </main>
  );
}
