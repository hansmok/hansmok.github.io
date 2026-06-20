import { PageShell } from "@/components/PageShell";
import { ResumeSection } from "@/components/ResumeSection";
import { education, experience, skills } from "@/content/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return (
    <PageShell eyebrow="resume">
      <ResumeSection title="Experience">
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.role}`}>
              <div className="timeline-heading">
                <div>
                  <h3>{item.company}</h3>
                  <p>
                    {item.role} · {item.location}
                  </p>
                </div>
                <span>{item.dates}</span>
              </div>
              <p className="stack">{item.stack.join(" / ")}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Education">
        <div className="education-grid">
          {education.map((item) => (
            <article key={item.school}>
              <h3>{item.school}</h3>
              <p>
                {item.location} · {item.dates}
              </p>
              {item.details.map((detail) => (
                <span key={detail}>{detail}</span>
              ))}
            </article>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Technical Skills">
        <ul className="tag-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </ResumeSection>
    </PageShell>
  );
}
