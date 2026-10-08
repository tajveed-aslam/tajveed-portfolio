import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STATS } from "@/lib/projects";
import { SITE } from "@/lib/site";

const facts = [
  { value: "6 yrs",   label: "QA & test automation"                   },
  { value: "3 yrs",   label: "C# / .NET development"                  },
  { value: "10K+",    label: "concurrent interactions load-tested"    },
  { value: `${STATS.aiProjects}`, label: "AI-powered projects shipped" },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title={<>Quality-first engineer, <span className="text-accent">full-stack builder</span></>}
            />
            <div className="-mt-4 space-y-5 text-base leading-relaxed text-slate-300 text-pretty">
              <p>
                I&apos;m a Senior SDET with 9 years in software — 6 in QA and test automation,
                built on 3 as a C#/.NET developer. That developer background bridges dev and QA:
                I read and review code to understand system behavior before I design a test for
                it, rather than treating the app as a black box. At Afiniti (2020–2026), I specialised in
                end-to-end Playwright automation backed by REST API coverage, SQL/backend
                validation, and CI/CD integration — including load and functional testing on a
                real-time, call-center decisioning system processing 10,000+ concurrent interactions.
              </p>
              <p>
                To deepen my engineering breadth, I built <strong className="font-semibold text-white">A&amp;Z Mart</strong> —
                a full-stack e-commerce platform using Next.js 14, FastAPI, and SQLite — entirely
                from scratch, then wrote a production-quality Playwright automation suite for it.
                I also built <strong className="font-semibold text-white">TestForge</strong>, an AI-powered tool
                that generates test code across 10 frameworks and 8 types of SDLC documentation
                using the Claude API with real-time streaming, and{" "}
                <strong className="font-semibold text-white">Self-Healing Test Agent</strong>, an agent that
                diagnoses and repairs stale Playwright selectors under two deterministic safety
                gates rather than trusting a model&apos;s judgment alone. Most recently, I returned to
                my .NET roots with <strong className="font-semibold text-white">APITestGen</strong>, an ASP.NET Core 8
                and React app that turns an OpenAPI spec into positive and negative test cases, a
                Postman collection and a pytest suite, all derived from one validated test design, and{" "}
                <strong className="font-semibold text-white">FitCheck</strong>, which scores a CV against a job description
                with gaps verified against the CV&apos;s own text rather than taken on the model&apos;s word.
              </p>
              <p>
                Claude Code and GitHub Copilot are a daily part of how I work — for test
                scaffolding, edge-case generation, and refactoring — and I&apos;m currently upskilling
                in Microsoft Power Platform testing. I&apos;m open to on-site, hybrid, and remote roles,
                willing to relocate, and available for freelance projects on{" "}
                <a href={SITE.fiverr} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline-offset-4 hover:underline">Fiverr</a>
                {" "}and{" "}
                <a href={SITE.upwork} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline-offset-4 hover:underline">Upwork</a>.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-3 lg:mt-24">
              {facts.map((f) => (
                <div key={f.label} className="panel group p-6 transition-colors hover:border-accent/30">
                  <div className="font-display text-3xl font-bold text-white transition-colors group-hover:text-accent sm:text-4xl">
                    {f.value}
                  </div>
                  <div className="mt-2 text-sm leading-snug text-slate-400">{f.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
