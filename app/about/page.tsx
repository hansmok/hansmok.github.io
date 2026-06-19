import { PageShell } from "@/components/PageShell";
import { profile } from "@/content/profile";

export default function AboutPage() {
  return (
    <PageShell
      command="about"
      terminalTitle="cat ~/about.md"
    >
      <section className="terminal-block">
        <p className="prompt">cat profile.txt</p>
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="terminal-block">
        <p className="prompt">ls focus</p>
        <ul className="tag-list">
          {profile.interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
