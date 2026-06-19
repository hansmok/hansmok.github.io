import { ReactNode } from "react";
import { CommandConsole } from "@/components/CommandConsole";

type PageShellProps = {
  command: string;
  title?: string;
  subtitle?: string;
  terminalTitle?: string;
  children: ReactNode;
};

export function PageShell({
  command,
  title,
  subtitle,
  terminalTitle,
  children,
}: PageShellProps) {
  return (
    <main className="site-shell">
      <CommandConsole compact context={command} />

      <section className="page-heading">
        <p className="eyebrow">{terminalTitle ?? `~/${command}`}</p>
        {title ? <h1>{title}</h1> : null}
        {subtitle ? <p>{subtitle}</p> : null}
      </section>

      {children}
    </main>
  );
}
