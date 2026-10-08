import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import { ExternalIcon, GitHubIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS, type Project } from "@/lib/projects";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary py-2.5">
          Live demo <ExternalIcon width={15} height={15} />
        </a>
      )}
      {project.github ? (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary py-2.5">
          <GitHubIcon width={16} height={16} /> Code
        </a>
      ) : (
        <span className="btn cursor-default border border-white/[0.06] py-2.5 text-slate-500">🔒 Private repo</span>
      )}
    </div>
  );
}

function ProjectHeader({ project }: { project: Project }) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-3">
        <span className="text-2xl" aria-hidden>{project.icon}</span>
        <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
          {project.badge}
        </span>
      </div>
      <h3 className="font-display text-2xl font-semibold leading-tight text-white text-balance">{project.title}</h3>
      <p className="mt-1.5 font-mono text-xs text-slate-500">{project.subtitle}</p>
    </div>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((h) => (
        <li key={h} className="flex gap-3 text-sm leading-relaxed text-slate-400">
          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
          <span>{h}</span>
        </li>
      ))}
    </ul>
  );
}

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
      {tech.map((t) => <li key={t} className="chip">{t}</li>)}
    </ul>
  );
}

/** Projects with screenshots: gallery beside the write-up, alternating sides. */
function ShowcaseProject({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article id={`project-${project.slug}`} className="panel scroll-mt-24 p-5 sm:p-8">
      {/* min-w-0 on the columns: grid items otherwise refuse to shrink below the gallery track's width. */}
      <div className={`grid gap-8 lg:grid-cols-2 lg:gap-10 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <Gallery shots={project.gallery} title={project.title} />
        </div>
        <div className="flex min-w-0 flex-col gap-6">
          <ProjectHeader project={project} />
          <p className="leading-relaxed text-slate-300 text-pretty">{project.description}</p>
          <div>
            <h4 className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">How it&apos;s built</h4>
            <Highlights items={project.highlights} />
          </div>
          <TechList tech={project.tech} />
          <ProjectLinks project={project} />
          {project.note && (
            <p className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-xs leading-relaxed text-slate-400">
              {project.note}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

/** Code-only projects (no screenshots): compact cards. */
function CompactProject({ project }: { project: Project }) {
  return (
    <article id={`project-${project.slug}`} className="panel flex scroll-mt-24 flex-col gap-5 p-6 sm:p-7">
      <ProjectHeader project={project} />
      <p className="text-sm leading-relaxed text-slate-300 text-pretty">{project.description}</p>
      <Highlights items={project.highlights} />
      <div className="mt-auto flex flex-col gap-5">
        <TechList tech={project.tech} />
        <ProjectLinks project={project} />
        {project.note && <p className="text-xs italic text-slate-500">{project.note}</p>}
      </div>
    </article>
  );
}

export function Projects() {
  const showcase = PROJECTS.filter((p) => p.gallery.length > 0);
  const compact = PROJECTS.filter((p) => p.gallery.length === 0);

  return (
    <section id="projects" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title={<>The details, <span className="text-accent">and how they&apos;re built</span></>}
          lead="Every project covers the full lifecycle: design, build, automate, document. Click any screenshot to enlarge it."
        />

        <div className="space-y-8">
          {showcase.map((p, i) => (
            <Reveal key={p.slug}>
              <ShowcaseProject project={p} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>

        {compact.length > 0 && (
          <>
            <h3 className="mb-6 mt-20 font-display text-2xl font-semibold text-white">Test automation suites</h3>
            <div className="grid gap-6 lg:grid-cols-2">
              {compact.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <CompactProject project={p} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
