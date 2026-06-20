type ResumeSectionProps = {
  label: string;
  children: React.ReactNode;
};

export function ResumeSection({ label, children }: ResumeSectionProps) {
  return (
    <section className="resume-section">
      <p className="eyebrow">{label}</p>
      {children}
    </section>
  );
}
