import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-5 py-10 sm:px-8">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold text-slate-300">{SITE.name}</span> · Built with Next.js &amp; Tailwind CSS
        </p>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">GitHub</a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">LinkedIn</a>
          <a href={SITE.fiverr} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Fiverr</a>
          <a href={SITE.upwork} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Upwork</a>
          <a href={SITE.cvUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">CV</a>
          <a href="#top" className="transition-colors hover:text-white">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
