import { Reveal } from "@/components/Reveal";
import { FileIcon, FiverrIcon, GitHubIcon, LinkedInIcon, MailIcon, UpworkIcon } from "@/components/ui/Icons";
import { SITE } from "@/lib/site";

const LINKS = [
  { icon: <MailIcon />,     label: "Email",    value: SITE.email,                href: `mailto:${SITE.email}` },
  { icon: <LinkedInIcon />, label: "LinkedIn", value: "muhammad-tajveed-aslam",  href: SITE.linkedin },
  { icon: <FiverrIcon />,   label: "Fiverr",   value: "Hire me for a gig",       href: SITE.fiverr },
  { icon: <UpworkIcon />,   label: "Upwork",   value: "Hire me for a contract",  href: SITE.upwork },
  { icon: <GitHubIcon />,   label: "GitHub",   value: "tajveed-aslam",           href: SITE.github },
  { icon: <FileIcon />,     label: "CV",       value: "View online",             href: SITE.cvUrl },
];

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-ink-900 px-6 py-14 sm:px-14 sm:py-20">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/15 blur-[100px]" />
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:28px_28px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <p className="eyebrow mb-4">Contact</p>
                <h2 className="heading text-balance">
                  Let&apos;s build something <span className="text-accent">that works.</span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg text-pretty">
                  I&apos;m open to full-time roles, contract work, and consulting, especially positions that
                  blend QA expertise with full-stack development. The fastest way to reach me is email; for
                  freelance projects you can also hire me directly on Fiverr or Upwork.
                </p>
                <a href={`mailto:${SITE.email}`} className="btn-primary mt-8">
                  <MailIcon width={16} height={16} /> {SITE.email}
                </a>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-ink-950/60 px-5 py-4 transition-colors hover:border-accent/40"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.05] text-slate-300 transition-colors group-hover:bg-accent group-hover:text-ink-950">
                        {link.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-slate-500">{link.label}</span>
                        <span className="block truncate text-sm font-medium text-white">{link.value}</span>
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
