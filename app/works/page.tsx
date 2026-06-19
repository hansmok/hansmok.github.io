import { PageShell } from "@/components/PageShell";
import { WorkFrame } from "@/components/WorkFrame";
import { works } from "@/content/works";

export default function WorksPage() {
  return (
    <PageShell
      command="works"
      title="Selected Works"
      terminalTitle="ls ~/selected-works"
    >
      <section className="works-grid">
        {works.map((work) => (
          <WorkFrame key={work.title} {...work} />
        ))}
      </section>
    </PageShell>
  );
}
