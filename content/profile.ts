export const profile = {
  name: "Hans Mok",
  handle: "hans",
  role: "Senior Software Engineer",
  company: "Raylu",
  location: "NYC",
  previous: ["Google", "American Express"],
  dotfiles: "https://github.com/hansmok/dotfiles",
  email: "mok_hans@yahoo.com",
  publicEmail: "me@hansmok.com",
  bio:
    "What's this all about?",
  about: [
    "I’m Hans Mok, a software engineer from New York City with a Bachelor's in Software Engineering from Stevens Institute of Technology.",
    "I am currently a senior software engineer at Raylu and was previously at Google and American Express.",
    "My primary areas of interest are building scalable systems, resilient platforms, and performant infrastructure.",
    "Outside of programming, I make time for basketball, pool, and travel with friends and family.",
  ],
  interests: [
    "agentic systems",
    "product engineering",
    "platform engineering",
    "api infrastructure",
  ],
} as const;

export const siteLinks = [
  { label: "about", href: "/about", external: false },
  { label: "resume", href: "/resume", external: false },
  { label: "works", href: "/works", external: false },
  { label: "dotfiles", href: profile.dotfiles, external: true },
  { label: "contact", href: "/contact", external: false },
] as const;

export const commandLinks = siteLinks;
