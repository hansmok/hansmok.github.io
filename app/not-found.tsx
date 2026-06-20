import Link from "next/link";

import { PageShell } from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="content-panel not-found-panel">
        <p className="eyebrow">404</p>
        <p className="lead-copy">Page not found.</p>
        <p>
          The route does not exist. Return to the{" "}
          <Link href="/about">about page</Link> or check the nav above.
        </p>
      </section>
    </PageShell>
  );
}
