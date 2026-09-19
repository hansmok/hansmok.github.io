import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="resume-section contact-block">
        <h1 className="eyebrow">Contact</h1>
        <ContactForm />
      </section>
    </PageShell>
  );
}
