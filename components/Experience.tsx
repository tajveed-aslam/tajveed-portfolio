interface Role {
  title:     string;
  org:       string;
  period:    string;
  location:  string;
  note?:     string;
  points:    string[];
}

const ROLES: Role[] = [
  {
    title:    "Senior SDET",
    org:      "Afiniti",
    period:   "Aug 2020 – Present",
    location: "Pakistan · AI-powered enterprise software",
    note:     "Promoted from SDET to Senior SDET, Feb 2022",
    points: [
      "Authored 2,400+ automated tests across enterprise workflows — 1,600+ in Playwright and pytest, 800+ on a proprietary simulation framework — cutting manual QA effort by ~40%",
      "Ran end-to-end, integration, and load testing on a real-time, ML-driven decisioning system — simulating 10,000+ concurrent interactions and validating outcomes against shared-memory and SQL data stores",
      "Validated the production ML pipeline end-to-end, from model configuration through deployment to runtime scoring, in MySQL/PostgreSQL",
      "Built Playwright + pytest suites with Docker-containerised execution, integrated into Jenkins with JUnit XML and HTML reporting",
      "Led defect triage, root cause analysis, and live production debugging during critical releases",
      "Daily use of Claude Code and GitHub Copilot for test scaffolding, edge-case generation, and automation refactoring",
    ],
  },
  {
    title:    "Software Engineer",
    org:      "Masterkey Systems Ltd",
    period:   "May 2017 – Aug 2020",
    location: "Pakistan · Enterprise software development",
    points: [
      "Developed backend services and REST APIs in C# and ASP.NET, owning enterprise features from design through release",
      "Built responsive frontend features in React.js, delivering end to end alongside the backend",
      "Wrote and optimised complex SQL queries, stored procedures, and schemas on data-heavy modules",
      "Authored test cases and ran manual QA during releases — the hands-on exposure that shaped the later move into SDET work",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            9 years,{" "}
            <span className="gradient-text">two disciplines</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
            Three years building the software, six years making sure it works.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent" />

          <div className="space-y-10">
            {ROLES.map((role) => (
              <div key={role.org} className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-indigo-400 bg-gray-950" />

                <div className="glow-card bg-gray-900/60 rounded-2xl p-7 border border-white/5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                    <h3 className="text-lg font-bold text-white">
                      {role.title} <span className="text-gray-500 font-normal">— {role.org}</span>
                    </h3>
                    <span className="text-sm text-indigo-300 font-mono">{role.period}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">{role.location}</p>
                  {role.note && (
                    <p className="text-xs text-violet-300/80 mb-4 italic">{role.note}</p>
                  )}
                  <ul className="space-y-2">
                    {role.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="relative pl-8 sm:pl-10">
              <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-gray-600 bg-gray-950" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-semibold text-gray-300">
                  B.S. Computer Science <span className="text-gray-500 font-normal">— KIET, Pakistan</span>
                </h3>
                <span className="text-sm text-gray-500 font-mono">Aug 2011 – Aug 2016</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
