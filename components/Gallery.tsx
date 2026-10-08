"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon, ExpandIcon } from "@/components/ui/Icons";
import { useSnapCarousel } from "@/components/ui/useSnapCarousel";
import type { Shot } from "@/lib/projects";

/** Swipeable screenshot gallery for a project card, with a full-screen lightbox. */
export function Gallery({ shots, title }: { shots: Shot[]; title: string }) {
  const { trackRef, index, goTo, next, prev } = useSnapCarousel(shots.length);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const many = shots.length > 1;

  return (
    <div className="group/gallery">
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-ink-950">
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
          aria-label={`${title} screenshots`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") { e.preventDefault(); next(); }
            if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
          }}
        >
          {shots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              className="relative aspect-[16/10] w-full shrink-0 snap-center cursor-zoom-in"
              onClick={() => setLightbox(i)}
              aria-label={`Enlarge screenshot ${i + 1} of ${shots.length}: ${shot.caption}`}
              tabIndex={i === index ? 0 : -1}
            >
              <Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover object-top" />
            </button>
          ))}
        </div>

        <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-ink-950/80 px-2 py-1 text-[11px] text-slate-300 opacity-0 backdrop-blur transition-opacity group-hover/gallery:opacity-100">
          <ExpandIcon width={12} height={12} /> Click to enlarge
        </span>

        {many && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-ink-950/80 text-white opacity-0 backdrop-blur transition-opacity hover:bg-ink-950 focus-visible:opacity-100 group-hover/gallery:opacity-100"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-ink-950/80 text-white opacity-0 backdrop-blur transition-opacity hover:bg-ink-950 focus-visible:opacity-100 group-hover/gallery:opacity-100"
            >
              <ChevronRightIcon />
            </button>
          </>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between gap-4">
        <p className="min-w-0 truncate text-xs text-slate-400" aria-live="polite">{shots[index]?.caption}</p>
        {many && (
          <div className="flex shrink-0 items-center gap-1.5">
            {shots.map((shot, i) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show screenshot ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-5 bg-accent" : "w-1.5 bg-white/25 hover:bg-white/50"}`}
              />
            ))}
          </div>
        )}
      </div>

      {lightbox !== null && (
        <Lightbox shots={shots} start={lightbox} title={title} onClose={(last) => { setLightbox(null); goTo(last, false); }} />
      )}
    </div>
  );
}

function Lightbox({ shots, start, title, onClose }: { shots: Shot[]; start: number; title: string; onClose: (last: number) => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState(start);
  const step = (delta: number) => setCurrent((c) => (c + delta + shots.length) % shots.length);

  // No close() in cleanup: removing the element ends the modal, and closing here would fire onClose
  // during React's dev double-mount and immediately dismiss the lightbox.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  const shot = shots[current];

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={`${title} screenshots`}
      onClose={() => onClose(current)}
      onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
      }}
    >
      <div className="flex h-full flex-col items-center justify-center gap-4 p-4 sm:p-10" onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}>
        <div className="flex w-full max-w-6xl items-center justify-between gap-4 text-sm">
          <p className="min-w-0 truncate text-slate-300">
            <span className="font-semibold text-white">{title}</span>
            <span className="mx-2 text-slate-600">·</span>
            {shot.caption}
          </p>
          <div className="flex shrink-0 items-center gap-3">
            <span className="font-mono text-xs text-slate-500">{current + 1} / {shots.length}</span>
            <button type="button" className="icon-btn" aria-label="Close" onClick={() => dialogRef.current?.close()} autoFocus>
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-6xl flex-1">
          <Image key={shot.src} src={shot.src} alt={shot.alt} fill sizes="100vw" quality={90} className="animate-fade-up object-contain" />
        </div>

        {shots.length > 1 && (
          <div className="flex gap-2">
            <button type="button" className="icon-btn" aria-label="Previous screenshot" onClick={() => step(-1)}><ChevronLeftIcon /></button>
            <button type="button" className="icon-btn" aria-label="Next screenshot" onClick={() => step(1)}><ChevronRightIcon /></button>
          </div>
        )}
      </div>
    </dialog>
  );
}
