import { profile } from "@/content/profile";

export function AboutContent() {
  return (
    <>
      <section className="content-panel">
        <p className="eyebrow">profile.txt</p>
         <div className="text-stack">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="content-panel">
        <p className="eyebrow">focus</p>
        <ul className="tag-list">
          {profile.interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
