type ResumeSectionProps = {
  label: string;
  children: React.ReactNode;
};

export function ResumeSection({ label, children }: ResumeSectionProps) {
  return (
    <section className="resume-section">
      <h2 className="eyebrow">{label}</h2>
      {children}
    </section>
  );
}
