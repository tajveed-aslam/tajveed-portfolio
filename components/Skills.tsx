import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface SkillGroup {
  title:    string;
  icon:     string;
  items:    string[];
  /** Columns the card spans in the 4-column bento grid (lg and up). */
  span?:    2 | 4;
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Test Automation",
    icon:  "🧪",
    items: ["Playwright (TypeScript, POM)", "pytest", "Test Framework Design", "Data-Driven Testing", "C# / .NET Code Comprehension"],
    span:  2,
  },
  {
    title: "API & Backend Testing",
    icon:  "🔌",
    items: ["REST API Testing & Validation", "Postman", "SQL / Backend Validation"],
  },
  {
    title: "Systems & Performance",
    icon:  "⚙️",
    items: ["Real-Time / Call-Center Systems Testing", "Simulation & Integration Testing", "Load & Performance Testing (10K+ concurrent)"],
  },
  {
    title: "AI Tooling",
    icon:  "🤖",
    items: ["Claude Code", "GitHub Copilot", "Claude / LLM APIs", "AI-Assisted Test Generation", "Prompt Engineering"],
    span:  2,
  },
  {
    title: "CI/CD & DevOps",
    icon:  "🚀",
    items: ["Jenkins", "GitHub Actions", "Docker", "Git", "Bitbucket"],
  },
  {
    title: "Development",
    icon:  "💻",
    items: ["C# / .NET", "ASP.NET", "REST APIs", "React.js", "Next.js", "FastAPI"],
  },
  {
    title: "Languages & Databases",
    icon:  "🗄️",
    items: ["C#", "TypeScript", "Python", "JavaScript", "SQL", "SQL Server", "MySQL", "PostgreSQL", "SQLite"],
    span:  4,
  },
];

const SUPPLEMENTARY: { label: string; items: string[] }[] = [
  { label: "Testing types", items: ["Functional", "Regression", "Smoke", "Integration", "E2E", "Cross-Browser", "API", "Load"] },
  { label: "Methodologies", items: ["Agile", "Scrum", "Kanban", "TDD", "BDD"] },
  { label: "Also familiar", items: ["Cypress", "Selenium WebDriver"] },
];

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionHeading eyebrow="Skills" title={<>What I bring to <span className="text-accent">the table</span></>} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={(i % 4) * 70} className={group.span === 4 ? "sm:col-span-2 lg:col-span-4" : group.span === 2 ? "lg:col-span-2" : ""}>
              <div className="panel h-full p-6 transition-colors hover:border-accent/30">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-lg" aria-hidden>
                    {group.icon}
                  </span>
                  <h3 className="font-display font-semibold text-white">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => <li key={item} className="chip">{item}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <dl className="mt-10 grid gap-4 border-t border-white/[0.06] pt-8 md:grid-cols-3">
            {SUPPLEMENTARY.map((row) => (
              <div key={row.label}>
                <dt className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">{row.label}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {row.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/[0.07] px-3 py-1 text-xs text-slate-400">{item}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
