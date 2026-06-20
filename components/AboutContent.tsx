import { profile } from "@/content/profile";

export function AboutContent() {
  return (
    <div className="about-stack">
      <div className="text-stack">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="about-divider" aria-hidden="true" />

      <section>
        <p className="eyebrow">focus.md</p>
        <ul className="tag-list">
          {profile.interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
