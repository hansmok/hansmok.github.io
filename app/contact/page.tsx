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
      <section className="content-panel contact-block">
        <p className="eyebrow">contact.txt</p>
        <ContactForm />
      </section>
    </PageShell>
  );
}
