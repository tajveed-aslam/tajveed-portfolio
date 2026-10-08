import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon, FiverrIcon, UpworkIcon } from "@/components/ui/Icons";
import { SITE } from "@/lib/site";

const SERVICES = [
  { title: "Playwright test automation", text: "Framework setup with Page Objects, stable selectors and CI integration (Jenkins or GitHub Actions)." },
  { title: "API test suites",             text: "Postman collections and pytest suites covering positive, negative and edge cases for your REST APIs." },
  { title: "Full-stack apps with AI",     text: "ASP.NET Core, Next.js or FastAPI apps with LLM features that are guarded, tested and deployed." },
  { title: "QA audits & test strategy",   text: "Test plans, regression suites and a clear picture of where your product's quality risks are." },
];

const PLATFORMS = [
  {
    name:   "Fiverr",
    href:   SITE.fiverr,
    icon:   FiverrIcon,
    color:  "text-[#1dbf73]",
    border: "hover:border-[#1dbf73]/60",
    glow:   "bg-[#1dbf73]/20",
    cta:    "Order on Fiverr",
    blurb:  "Fixed-price gigs: pick a package, send the brief, get it delivered.",
  },
  {
    name:   "Upwork",
    href:   SITE.upwork,
    icon:   UpworkIcon,
    color:  "text-[#14a800]",
    border: "hover:border-[#14a800]/60",
    glow:   "bg-[#14a800]/20",
    cta:    "Hire on Upwork",
    blurb:  "Hourly or milestone contracts for longer projects and ongoing QA work.",
  },
];

/** "Hire me" promo: advertises the Fiverr and Upwork profiles for freelance work. */
export function Freelance() {
  return (
    <section id="hire" className="section">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-6 sm:p-12">
            <div aria-hidden className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
              <div>
                <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Available for freelance work
                </p>
                <h2 className="heading text-balance">
                  Need tests written or a tool built? <span className="text-accent">Hire me on Fiverr or Upwork.</span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg text-pretty">
                  I take on freelance and contract projects through both platforms, so payments, milestones and
                  reviews are handled securely. Here&apos;s what I can do for you:
                </p>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {SERVICES.map((s) => (
                    <li key={s.title} className="flex gap-3">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-[11px] font-bold text-accent" aria-hidden>✓</span>
                      <span>
                        <span className="block text-sm font-semibold text-white">{s.title}</span>
                        <span className="mt-0.5 block text-sm leading-relaxed text-slate-400">{s.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="grid gap-4">
                {PLATFORMS.map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-white/10 bg-ink-950/70 p-6 transition-all duration-300 hover:-translate-y-0.5 ${p.border}`}
                    >
                      <span aria-hidden className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${p.glow}`} />
                      <p.icon width={48} height={48} className={`shrink-0 ${p.color}`} />
                      <span className="relative min-w-0 flex-1">
                        <span className="block font-display text-xl font-semibold text-white">{p.name}</span>
                        <span className="mt-1 block text-sm leading-snug text-slate-400">{p.blurb}</span>
                        <span className={`mt-3 inline-flex items-center gap-1.5 text-sm font-semibold ${p.color}`}>
                          {p.cta}
                          <ArrowRightIcon width={15} height={15} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
