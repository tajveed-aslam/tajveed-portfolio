const QA_SKILLS = [
  { name: "Playwright",           level: 95 },
  { name: "pytest",               level: 88 },
  { name: "API Testing",          level: 92 },
  { name: "AI-Assisted Testing",  level: 88 },
  { name: "CI/CD (Jenkins)",      level: 80 },
  { name: "Docker",               level: 75 },
  { name: "Page Object Model",    level: 95 },
  { name: "Test Planning / SDLC", level: 90 },
];

const DEV_SKILLS = [
  { name: "Claude / LLM APIs",  level: 85 },
  { name: "AI Prompt Engineering", level: 82 },
  { name: "TypeScript",         level: 78 },
  { name: "Next.js 14",         level: 75 },
  { name: "FastAPI",            level: 70 },
  { name: "Python",             level: 82 },
  { name: "Tailwind CSS",       level: 80 },
  { name: "REST APIs",          level: 88 },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${level}%`,
            background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
          }}
        />
      </div>
    </div>
  );
}

function SkillColumn({
  title,
  icon,
  skills,
  accent,
}: {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
  accent: string;
}) {
  return (
    <div className="glow-card bg-gray-900/60 rounded-2xl p-8 border border-white/5">
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
          style={{ background: accent }}
        >
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((s) => (
          <SkillBar key={s.name} name={s.name} level={s.level} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What I bring to the{" "}
            <span className="gradient-text">table</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillColumn
            title="QA & AI-Assisted Testing"
            icon="🧪"
            skills={QA_SKILLS}
            accent="rgba(99,102,241,0.15)"
          />
          <SkillColumn
            title="Development & AI Tooling"
            icon="⚡"
            skills={DEV_SKILLS}
            accent="rgba(139,92,246,0.15)"
          />
        </div>

        {/* Tool badges */}
        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {["Claude API","AI Prompt Engineering","LLM Integration","Playwright","pytest","Next.js","FastAPI","TypeScript","Python","Docker","Jenkins","GitHub Actions","SQLite","Tailwind CSS","SSE Streaming","JWT Auth"].map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 text-xs rounded-full bg-gray-800/80 border border-white/5 text-gray-400"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
