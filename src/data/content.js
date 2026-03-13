export const SKILLS = [
  {
    icon: "⬡",
    title: "Backend Engineering",
    desc: "Designing robust APIs, background jobs, and data-heavy systems built for scale.",
    tags: ["Ruby on Rails", "PostgreSQL", "Sidekiq", "REST APIs"],
  },
  {
    icon: "◈",
    title: "Database Architecture",
    desc: "Schema design, query optimization, and working across relational and analytical stores.",
    tags: ["PostgreSQL", "ClickHouse", "pgvector", "SQL"],
  },
  {
    icon: "△",
    title: "System Design",
    desc: "Distributed architectures, caching strategies, pub/sub systems, and payroll pipelines.",
    tags: ["Redis", "Saga Pattern", "gRPC", "Pub/Sub"],
  },
  {
    icon: "◉",
    title: "AI Integration",
    desc: "Building RAG pipelines, AI tutor backends, and integrating LLMs into production apps.",
    tags: ["OpenAI", "pgvector", "RAG", "LLMs"],
  },
  {
    icon: "□",
    title: "Frontend (Learning)",
    desc: "Growing React skills through hands-on projects, building toward full-stack fluency.",
    tags: ["React", "JavaScript", "Tailwind", "HTML/CSS"],
  },
  {
    icon: "◇",
    title: "Dev Tooling & Ops",
    desc: "CI/CD workflows, Git strategies, deployment pipelines, and developer experience.",
    tags: ["Git", "GitLab", "Docker", "CI/CD"],
  },
];

export const PROJECTS = [
  {
    title: "AI Tutor Platform",
    desc: "Backend for an AI tutor app targeting students in classes 1–8. Built with Rails, OpenAI services, pgvector, and RAG-based content understanding.",
    tech: ["Rails", "OpenAI", "pgvector", "Sidekiq", "RAG"],
    status: "live",
    gradient: "linear-gradient(135deg, #1a1520, #0c1a18)",
  },
  {
    title: "Agent Rankings System",
    desc: "Precomputed agent ranking engine using SQL window functions (ROW_NUMBER, RANK, DENSE_RANK) with background job refresh cycles.",
    tech: ["Rails", "PostgreSQL", "SQL", "Sidekiq"],
    status: "live",
    gradient: "linear-gradient(135deg, #0d1520, #1a150d)",
  },
  {
    title: "Payroll Architecture",
    desc: "End-to-end payroll system with CSV/Excel parsing, currency handling, invoice models, and financial data pipelines.",
    tech: ["Rails", "PostgreSQL", "CSV/Excel", "RSpec"],
    status: "live",
    gradient: "linear-gradient(135deg, #150d1a, #0d1a15)",
  },
  {
    title: "Monorepo Product (WIP)",
    desc: "New product with separate frontend/backend in a monorepo, leveraging Claude Code with optimized CLAUDE.md files.",
    tech: ["Rails", "React", "Claude Code", "Monorepo"],
    status: "wip",
    gradient: "linear-gradient(135deg, #1a1a0d, #0d151a)",
  },
];

export const ARTICLES = [
  {
    title: "Understanding SOLID Principles in Ruby",
    desc: "A deep dive into all five SOLID principles with practical Ruby examples and real-world patterns.",
    category: "Ruby",
    date: "2025",
  },
  {
    title: "SQL Window Functions: A Practical Guide",
    desc: "How ROW_NUMBER, RANK, and DENSE_RANK work and when to use each in production ranking systems.",
    category: "SQL",
    date: "2025",
  },
  {
    title: "Structuring CLAUDE.md for Better AI Output",
    desc: "Lessons learned optimizing Claude Code configuration files to minimize tokens and maximize code quality.",
    category: "AI Tooling",
    date: "2025",
  },
  {
    title: "Ruby Class Hierarchy Deep Dive",
    desc: "Navigating instance variables, class instance variables, and class variables in Ruby inheritance chains.",
    category: "Ruby",
    date: "2025",
  },
];

export const TESTIMONIALS = [
  {
    name: "Team Lead",
    role: "Shuru Tech",
    quote: "Deepak consistently delivers clean, well-tested code. His database optimization skills have significantly improved our query performance across the board.",
    initials: "TL",
  },
  {
    name: "Senior Developer",
    role: "Colleague",
    quote: "Working with Deepak on the payroll system was great. He has a keen eye for edge cases and writes thorough RSpec tests that catch issues early.",
    initials: "SD",
  },
  {
    name: "Product Manager",
    role: "Shuru Tech",
    quote: "Deepak's work on the AI tutor backend exceeded our expectations. He architected the RAG pipeline thoughtfully and delivered ahead of schedule.",
    initials: "PM",
  },
  {
    name: "Engineering Peer",
    role: "Collaborator",
    quote: "His understanding of PostgreSQL and ClickHouse is impressive. He migrated complex queries between the two with minimal downtime.",
    initials: "EP",
  },
];

export const MARQUEE_ITEMS = [
  "Ruby on Rails", "PostgreSQL", "ClickHouse", "Sidekiq", "Redis", "RSpec", "React", "JavaScript",
  "OpenAI", "pgvector", "RAG", "SQL", "Git", "Docker", "REST APIs", "System Design",
];
