import { PageShell } from "@/components/PageShell";
import { AboutContent } from "@/components/AboutContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="resume-section about-collection">
        <p className="eyebrow">profile.txt</p>
        <AboutContent />
      </section>
    </PageShell>
  );
}
