export const profile = {
  name: "Hans Mok",
  handle: "hans",
  prompt: "hans@nyc λ",
  role: "Senior Software Engineer",
  company: "Raylu",
  location: "New York City",
  previous: ["Google", "American Express"],
  dotfiles: "https://github.com/hansmok/dotfiles",
  email: "mok_hans@yahoo.com",
  publicEmail: "me@hansmok.com",
  bio:
    "Senior software engineer at Raylu, previously at Google and American Express, focused on product engineering, platform migrations, integrations, and practical AI tooling.",
  about: [
    "My name is Hans Mok. I was born and raised in New York City and studied Software Engineering at Stevens Institute of Technology.",
    "I am currently a senior software engineer at Raylu, and previously worked at Google and American Express.",
    "My primary areas of focus are building scalable distributed systems, resilient platforms, and infrastructure that can support real product usage over time.",
    "Outside of programming, I make time for basketball, pool, and travel.",
  ],
  interests: [
    "agentic systems",
    "product engineering",
    "platform engineering",
    "api infrastructure",
  ],
} as const;

export const commandLinks = [
  { command: "main", label: "main", href: "/", external: false },
  { command: "about", label: "about", href: "/about", external: false },
  { command: "resume", label: "resume", href: "/resume", external: false },
  { command: "works", label: "works", href: "/works", external: false },
  { command: "dotfiles", label: "dotfiles", href: profile.dotfiles, external: true }, 
  { command: "contact", label: "contact", href: "/contact", external: false },
] as const;
