import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { profile } from "@/content/profile";

export default function ContactPage() {
  return (
    <PageShell command="contact" terminalTitle="mail ~/contact">
      <section className="terminal-block contact-block">
        <p className="prompt">compose --to {profile.publicEmail}</p>
        <ContactForm />
      </section>
    </PageShell>
  );
}
