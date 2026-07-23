import { Reveal } from "@/components/Reveal";

export function About() {
  const stats = [
    { value: "9",     label: "Years in Software"     },
    { value: "2,400+", label: "Automated Tests Authored" },
    { value: "4",     label: "Major Projects"        },
    { value: "4",     label: "AI-Powered Projects"   },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <Reveal>
            <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Quality-first engineer,{" "}
              <span className="gradient-text">full-stack learner</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m a Senior SDET with 9 years in software — 6 in QA and test automation,
                built on 3 as a C#/.NET developer. That developer background bridges dev and QA:
                I read and review code to understand system behavior before I design a test for
                it, rather than treating the app as a black box. At Afiniti, I specialise in
                end-to-end Playwright automation backed by REST API coverage, SQL/backend
                validation, and CI/CD integration — including load and functional testing on a
                real-time, ML-driven decisioning system processing 10,000+ concurrent interactions.
              </p>
              <p>
                To deepen my engineering breadth, I built <strong className="text-white">A&amp;Z Mart</strong> —
                a full-stack e-commerce platform using Next.js 14, FastAPI, and SQLite — entirely
                from scratch, then wrote a production-quality Playwright automation suite for it.
                I also built <strong className="text-white">TestForge</strong>, an AI-powered tool
                that generates test code across 10 frameworks and 8 types of SDLC documentation
                using the Claude API with real-time streaming, and{" "}
                <strong className="text-white">Self-Healing Test Agent</strong>, an agent that
                diagnoses and repairs stale Playwright selectors under two deterministic safety
                gates rather than trusting a model&apos;s judgment alone.
              </p>
              <p>
                Claude Code and GitHub Copilot are a daily part of how I work — for test
                scaffolding, edge-case generation, and refactoring — and I&apos;m currently upskilling
                in Microsoft Power Platform testing. Open to on-site, hybrid, and remote roles,
                with relocation on the table.
              </p>
            </div>
          </Reveal>

          {/* Stats grid */}
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glow-card bg-gray-900/60 rounded-2xl p-6 border border-white/5 text-center"
                >
                  <div className="text-4xl font-extrabold gradient-text mb-1">{s.value}</div>
                  <div className="text-sm text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
