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
        <h2 className="eyebrow">Areas of interest</h2>
        <ul className="tag-list">
          {profile.interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
