import { HeroCollage } from "@/components/HeroCollage";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { STATS } from "@/lib/projects";
import { SITE } from "@/lib/site";

const stats = [
  { value: `${SITE.yearsInSoftware}`, label: "years in software" },
  { value: SITE.testsAuthored,        label: "automated tests authored" },
  { value: `${STATS.projects}`,       label: "portfolio projects" },
  { value: `${STATS.liveDemos}`,      label: "live demos to try" },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8">
      <HeroCollage />

      <div className="container-page relative">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to on-site, hybrid &amp; remote roles — relocation OK
          </p>

          <p className="mb-4 font-display text-lg text-slate-300 sm:text-xl">
            Hi, I&apos;m <span className="font-semibold text-white">{SITE.name}</span>, {SITE.role}.
          </p>

          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl text-balance">
            Quality engineering, <span className="text-accent">built like software.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg text-pretty">
            9 years in software — 6 in QA and test automation, built on 3 as a C#/.NET developer. I write
            Playwright suites for real-time ML systems by day, and build AI-powered testing tools with
            ASP.NET Core, React, Next.js, FastAPI and LLM APIs.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#featured" className="btn-primary">
              View my work <ArrowRightIcon width={16} height={16} />
            </a>
            <a href="#contact" className="btn-secondary">Get in touch</a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
              <GitHubIcon />
            </a>
          </div>
        </div>

        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] backdrop-blur-md sm:grid-cols-4">
          {stats.map((s) => (
            // Label first in the DOM (dt before dd), value shown on top visually.
            <div key={s.label} className="flex flex-col-reverse bg-ink-950/70 px-5 py-4">
              <dt className="mt-0.5 text-xs text-slate-400">{s.label}</dt>
              <dd className="font-display text-2xl font-bold text-white sm:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
