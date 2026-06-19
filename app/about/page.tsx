import { PageShell } from "@/components/PageShell";
import { AboutContent } from "@/components/AboutContent";

export default function AboutPage() {
  return (
    <PageShell eyebrow="about">
      <AboutContent />
    </PageShell>
  );
}
