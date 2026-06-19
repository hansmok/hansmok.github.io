export const experience = [
  {
    company: "Raylu",
    location: "New York, NY",
    role: "Software Engineer",
    dates: "Jun 2026 - Present",
    stack: ["TypeScript", "agentic tooling", "LLMs"],
    bullets: [
      "Building the future of deal sourcing with agentic systems.",
      "Leading migration work toward model-agnostic LLM architecture.",
      "Leading migration of raw data into accessible data models.",
    ],
  },
  {
    company: "Google",
    location: "Mountain View, CA",
    role: "Software Engineer, YouTube Music",
    dates: "Jun 2021 - Jul 2025",
    stack: ["Java", "C++", "Go", "Python", "SQL"],
    bullets: [
      "Built full-stack features spanning Android clients, backend services, APIs, and data stores.",
      "Built next-generation API infrastructure for scaling YouTube Music integrations.",
      "Launched client-facing features including Apple HomePod support, pinned music entities, and extended Casting support.",
      "Supported second- and third-party integrations for YouTube Music.",
      "Supported YouTube-wide service migration to next-generation platforms.",
      "Experimented with contextual integration signals for recommendations.",
      "Cross-trained as an SRE and joined the on-call rotation for Music infrastructure services.",
    ],
  },
  {
    company: "American Express",
    location: "New York, NY",
    role: "Software Engineer",
    dates: "Mar 2019 - Apr 2021",
    stack: ["Java", "React", "Node", "Python", "Docker", "MongoDB", "CouchDB"],
    bullets: [
      "Built React-based management and analysis software for model versions and configurations.",
      "Converted raw machine learning models into consumer-ready states.",
      "Led migration of a monolithic Java abstraction layer to a horizontally scalable Python microservice architecture.",
      "Led a pivot from monolithic model servicing toward a cloud-deployed Models as a Service architecture.",
      "Helped organize technology events including tech talks and appreciation events.",
    ],
  },
] as const;

export const education = [
  {
    school: "Stevens Institute of Technology",
    location: "Hoboken, NJ",
    dates: "Aug 2014 - Jan 2019",
    details: ["B.E. in Software Engineering", "Presidential Scholarship"],
  },
  {
    school: "Stuyvesant High School",
    location: "New York, NY",
    dates: "Aug 2010 - Jun 2014",
    details: [],
  },
] as const;

export const skills = [
  "Java",
  "C++",
  "Go",
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
  "N1QL",
  "React",
  "Node",
  "Docker",
  "MongoDB",
  "CouchDB",
] as const;
