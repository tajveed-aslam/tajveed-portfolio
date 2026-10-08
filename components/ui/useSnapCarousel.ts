"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Carousel state on top of native CSS scroll-snap: swipe/trackpad/keyboard scrolling work for free,
 * and this hook only tracks which slide is in view and scrolls to a slide on request.
 * Slides must be full-width children of the returned track element.
 */
export function useSnapCarousel(count: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const width = track.clientWidth || 1;
        setIndex(Math.max(0, Math.min(count - 1, Math.round(track.scrollLeft / width))));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, [count]);

  const goTo = useCallback(
    (target: number, smooth = true) => {
      const track = trackRef.current;
      if (!track || count === 0) return;
      const next = ((target % count) + count) % count; // wrap around both ends
      track.scrollTo({ left: next * track.clientWidth, behavior: smooth ? "smooth" : "auto" });
    },
    [count],
  );

  return { trackRef, index, goTo, next: () => goTo(index + 1), prev: () => goTo(index - 1) };
}

export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
