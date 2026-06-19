import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { profile } from "@/content/profile";

export default function ContactPage() {
  return (
    <PageShell eyebrow="contact">
      <section className="content-panel contact-block">
        <ContactForm />
      </section>
    </PageShell>
  );
}
