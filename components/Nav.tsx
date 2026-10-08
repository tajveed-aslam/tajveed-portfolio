"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { CloseIcon, DownloadIcon, FileIcon, GitHubIcon, LinkedInIcon, MenuIcon } from "@/components/ui/Icons";

const LINKS = [
  { label: "Work",       id: "featured"   },
  { label: "About",      id: "about"      },
  { label: "Experience", id: "experience" },
  { label: "Skills",     id: "skills"     },
  { label: "Projects",   id: "projects"   },
  { label: "Contact",    id: "contact"    },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter((s): s is HTMLElement => !!s);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="group flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent font-display text-sm font-bold text-ink-950 transition-transform group-hover:rotate-6">
            TA
          </span>
          <span className="hidden font-display text-[15px] font-semibold text-white sm:block">{SITE.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`relative block rounded-lg px-3 py-2 text-sm transition-colors ${
                  active === link.id ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
                {/* Overlaid underline, so it doesn't change the link's height or alignment. */}
                <span
                  aria-hidden
                  className={`absolute bottom-1 left-3 right-3 h-px origin-left bg-accent transition-transform duration-300 ${
                    active === link.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hidden h-9 w-9 place-items-center rounded-lg text-slate-400 transition-colors hover:text-white md:grid">
            <GitHubIcon />
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hidden h-9 w-9 place-items-center rounded-lg text-slate-400 transition-colors hover:text-white md:grid">
            <LinkedInIcon />
          </a>

          {/* The CV button lives in the fixed bar, so it stays in the top-right corner on scroll. */}
          <div className={`flex items-center rounded-xl transition-shadow duration-300 ${scrolled ? "shadow-glow" : ""}`}>
            <a
              href={SITE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent py-2 pl-3.5 pr-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-bright sm:rounded-r-none"
            >
              <FileIcon width={16} height={16} />
              View CV
            </a>
            <a
              href={SITE.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume (PDF)"
              title="Download resume (PDF)"
              className="hidden items-center rounded-r-xl border-l border-ink-950/20 bg-accent py-2 px-2.5 text-ink-950 transition-colors hover:bg-accent-bright sm:inline-flex"
            >
              <DownloadIcon width={16} height={16} />
            </a>
          </div>

          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg text-slate-300 hover:text-white lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-white/[0.06] px-5 pb-5 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-base ${active === link.id ? "text-accent" : "text-slate-300"}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex gap-2 px-3">
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub"><GitHubIcon /></a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>
      )}

      {/* Reading progress */}
      <div className="absolute inset-x-0 bottom-0 h-px">
        <div className="h-full origin-left bg-accent/80" style={{ transform: `scaleX(${progress})` }} />
      </div>
    </header>
  );
}
