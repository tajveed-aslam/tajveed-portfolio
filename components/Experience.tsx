import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
    period:   "Aug 2020 – Aug 2026",
    location: "Pakistan · AI-powered enterprise software",
    note:     "Promoted from SDET to Senior SDET, Feb 2022",
    points: [
      "Authored 2,400+ automated tests across enterprise workflows — 1,600+ in Playwright and pytest, 800+ on a proprietary simulation framework — cutting manual QA effort by ~40%",
      "Ran end-to-end, integration, and load testing on a real-time, call-center decisioning system — simulating 10,000+ concurrent interactions and validating outcomes against shared-memory and SQL data stores",
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
    <section id="experience" className="section bg-ink-900/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title={<>9 years, <span className="text-accent">two disciplines</span></>}
          lead="Three years building the software, six years making sure it works."
        />

        <ol className="relative space-y-6 border-l border-white/[0.08] pl-6 sm:pl-10">
          {ROLES.map((role, i) => (
            <li key={role.org} className="relative">
              <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-accent bg-ink-950 sm:-left-[47px]" aria-hidden />
              <Reveal delay={i * 100}>
                <div className="panel p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{role.title}</h3>
                      <p className="mt-0.5 text-sm text-slate-400">
                        <span className="font-medium text-slate-200">{role.org}</span> · {role.location}
                      </p>
                    </div>
                    <span className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-accent">
                      {role.period}
                    </span>
                  </div>
                  {role.note && (
                    <p className="mt-4 inline-flex rounded-md bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                      ↑ {role.note}
                    </p>
                  )}
                  <ul className="mt-5 grid gap-3 md:grid-cols-2">
                    {role.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}

          <li className="relative">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-slate-600 bg-ink-950 sm:-left-[47px]" aria-hidden />
            <Reveal delay={ROLES.length * 100}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-1">
                <h3 className="font-display text-base font-semibold text-slate-200">
                  B.S. Computer Science <span className="font-normal text-slate-500">— KIET, Pakistan</span>
                </h3>
                <span className="font-mono text-xs text-slate-500">Aug 2011 – Aug 2016</span>
              </div>
            </Reveal>
          </li>
        </ol>
      </div>
    </section>
  );
}
