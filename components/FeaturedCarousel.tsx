"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, ExternalIcon, GitHubIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { prefersReducedMotion, useSnapCarousel } from "@/components/ui/useSnapCarousel";
import { FEATURED } from "@/lib/projects";

const AUTOPLAY_MS = 7000;

export function FeaturedCarousel() {
  const { trackRef, index, goTo, next, prev } = useSnapCarousel(FEATURED.length);
  const sectionRef = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [userStopped, setUserStopped] = useState(false);

  // Only auto-advance while visible, not hovered/focused, and never after the visitor takes control.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.4 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const autoplay = inView && !paused && !userStopped && FEATURED.length > 1;
  useEffect(() => {
    if (!autoplay || prefersReducedMotion()) return;
    const id = window.setTimeout(() => goTo(index + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [autoplay, index, goTo]);

  const takeControl = (action: () => void) => {
    setUserStopped(true);
    action();
  };

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="section"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") takeControl(next);
        if (e.key === "ArrowLeft") takeControl(prev);
      }}
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured work"
          title={<>Things I&apos;ve built, <span className="text-accent">running live</span></>}
          lead="Every project here has a working demo you can open right now. Swipe through, or jump straight to one."
        >
          <div className="flex gap-2">
            <button type="button" className="icon-btn" aria-label="Previous project" onClick={() => takeControl(prev)}>
              <ChevronLeftIcon />
            </button>
            <button type="button" className="icon-btn" aria-label="Next project" onClick={() => takeControl(next)}>
              <ChevronRightIcon />
            </button>
          </div>
        </SectionHeading>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onPointerDown={() => setUserStopped(true)}
        >
          <div ref={trackRef} className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-3xl">
            {FEATURED.map((p, i) => (
              <article
                key={p.slug}
                className="w-full shrink-0 snap-center"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${FEATURED.length}: ${p.title}`}
                aria-hidden={i !== index}
              >
                <div className="panel grid h-full gap-0 overflow-hidden lg:grid-cols-[1.45fr_1fr]">
                  {/* Browser-framed screenshot */}
                  <div className="relative min-w-0 border-b border-white/[0.06] bg-ink-850 p-3 sm:p-5 lg:border-b-0 lg:border-r">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-950 shadow-2xl">
                      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        <span className="ml-3 truncate font-mono text-[11px] text-slate-500">
                          {p.demo?.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        </span>
                      </div>
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={p.gallery[0].src}
                          alt={p.gallery[0].alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 680px"
                          className="object-cover object-top"
                          priority={i === 0}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex min-w-0 flex-col justify-center gap-5 p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl" aria-hidden>{p.icon}</span>
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                        {p.badge}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold leading-tight text-white sm:text-3xl text-balance">{p.title}</h3>
                      <p className="mt-3 text-base leading-relaxed text-slate-300 text-pretty">{p.tagline}</p>
                    </div>
                    <ul className="flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 6).map((t) => <li key={t} className="chip">{t}</li>)}
                    </ul>
                    <div className="flex flex-wrap gap-2.5 pt-1">
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" tabIndex={i === index ? 0 : -1}>
                          Live demo <ExternalIcon width={15} height={15} />
                        </a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" tabIndex={i === index ? 0 : -1}>
                          <GitHubIcon width={16} height={16} /> Code
                        </a>
                      )}
                      <a href={`#project-${p.slug}`} className="btn px-3 text-slate-400 hover:text-white" tabIndex={i === index ? 0 : -1}>
                        Details ↓
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Project tabs double as pagination and show autoplay progress. */}
          {/* Flexible row: stays balanced however many projects are featured. */}
          <div className="mt-6 flex flex-wrap gap-2 [&>*]:min-w-[150px] [&>*]:flex-1" aria-label="Choose a featured project">
            {FEATURED.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                aria-current={i === index ? "true" : undefined}
                onClick={() => takeControl(() => goTo(i))}
                className={`group relative overflow-hidden rounded-xl border px-3 py-2.5 text-left transition-colors ${
                  i === index ? "border-accent/40 bg-accent/[0.06]" : "border-white/[0.06] hover:border-white/15"
                }`}
              >
                <span className={`block truncate text-xs font-medium ${i === index ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}>
                  {p.icon} {p.title.split(" — ")[0]}
                </span>
                {i === index && (
                  <span
                    key={`${index}-${autoplay}`}
                    className="absolute bottom-0 left-0 h-0.5 bg-accent"
                    style={{
                      width: autoplay ? undefined : "100%",
                      animation: autoplay ? `fc-progress ${AUTOPLAY_MS}ms linear forwards` : undefined,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes fc-progress { from { width: 0 } to { width: 100% } }`}</style>
    </section>
  );
}
