import { PageShell } from "@/components/PageShell";
import { WorkFrame } from "@/components/WorkFrame";
import { works } from "@/content/works";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/works",
  },
};

export default function WorksPage() {
  return (
    <PageShell eyebrow="selected works">
      <section className="works-grid">
        {works.map((work) => (
          <WorkFrame key={work.title} {...work} />
        ))}
      </section>
    </PageShell>
  );
}
