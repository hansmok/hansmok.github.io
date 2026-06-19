type WorkFrameProps = {
  source: string;
  title: string;
  year: string;
  summary: string;
  href: string;
};

export function WorkFrame({ source, title, year, summary, href }: WorkFrameProps) {
  const content = (
    <>
      <div className="frame-meta">
        <span>{source}</span>
        <span>{year}</span>
      </div>
      <h2>{title}</h2>
      <p>{summary}</p>
      <span className="frame-link">{href ? "open article" : "link pending"}</span>
    </>
  );

  if (!href) {
    return <article className="work-frame pending">{content}</article>;
  }

  return (
    <a className="work-frame" href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
}
