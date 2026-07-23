import { Reveal } from "@/components/Reveal";

interface SkillGroup {
  title:  string;
  icon:   string;
  items:  string[];
  accent: string;
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title:  "Test Automation",
    icon:   "🧪",
    items:  ["Playwright (TypeScript, POM)", "pytest", "Test Framework Design", "Data-Driven Testing", "C# / .NET Code Comprehension"],
    accent: "rgba(45,212,191,0.15)",
  },
  {
    title:  "API & Backend Testing",
    icon:   "🔌",
    items:  ["REST API Testing & Validation", "Postman", "SQL / Backend Validation"],
    accent: "rgba(56,189,248,0.15)",
  },
  {
    title:  "Systems & Performance",
    icon:   "⚙️",
    items:  ["Real-Time / ML-Driven Systems Testing", "Load & Performance Testing (10K+ concurrent)"],
    accent: "rgba(245,158,11,0.15)",
  },
  {
    title:  "AI Tooling",
    icon:   "🤖",
    items:  ["Claude Code", "GitHub Copilot", "Claude / LLM APIs", "AI-Assisted Test Generation", "Prompt Engineering"],
    accent: "rgba(52,211,153,0.15)",
  },
  {
    title:  "CI/CD & DevOps",
    icon:   "🚀",
    items:  ["Jenkins", "GitHub Actions", "Docker", "Git", "Bitbucket"],
    accent: "rgba(14,165,233,0.15)",
  },
  {
    title:  "Development",
    icon:   "💻",
    items:  ["C# / .NET", "ASP.NET", "REST APIs", "React.js", "Next.js", "FastAPI"],
    accent: "rgba(45,212,191,0.15)",
  },
  {
    title:  "Languages & Databases",
    icon:   "🗄️",
    items:  ["C#", "TypeScript", "Python", "JavaScript", "SQL", "SQL Server", "MySQL", "PostgreSQL", "SQLite"],
    accent: "rgba(245,158,11,0.15)",
  },
];

const SUPPLEMENTARY: { label: string; items: string[] }[] = [
  { label: "Testing Types",  items: ["Functional", "Regression", "Smoke", "Integration", "E2E", "Cross-Browser", "API", "Load"] },
  { label: "Methodologies",  items: ["Agile", "Scrum", "Kanban", "TDD", "BDD"] },
  { label: "Also Familiar",  items: ["Cypress", "Selenium WebDriver"] },
];

function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <div className="glow-card bg-gray-900/60 rounded-2xl p-6 border border-white/5">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0"
          style={{ background: group.accent }}
        >
          {group.icon}
        </div>
        <h3 className="text-sm font-bold text-white">{group.title}</h3>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {group.items.map((item) => (
          <span
            key={item}
            className="px-2.5 py-1 text-xs rounded-lg bg-gray-800/80 border border-white/5 text-gray-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Skills
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What I bring to the{" "}
              <span className="gradient-text">table</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 80}>
              <SkillGroupCard group={group} />
            </Reveal>
          ))}
        </div>

        {/* Supplementary context rows */}
        <Reveal delay={200}>
          <div className="mt-10 space-y-4">
            {SUPPLEMENTARY.map((row) => (
              <div key={row.label} className="flex flex-wrap items-center gap-2 justify-center">
                <span className="text-xs text-gray-600 uppercase tracking-widest font-semibold mr-1">
                  {row.label}:
                </span>
                {row.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs rounded-full bg-gray-800/60 border border-white/5 text-gray-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
