import Image from "next/image";
import { ALL_SHOTS } from "@/lib/projects";

const ROWS = 4;
const PER_ROW = 7;

/** Each row starts at a different point in the screenshot list so neighbouring rows don't repeat. */
function rows(): string[][] {
  if (ALL_SHOTS.length === 0) return [];
  return Array.from({ length: ROWS }, (_, r) =>
    Array.from({ length: PER_ROW }, (_, i) => ALL_SHOTS[(r * 4 + i * 3) % ALL_SHOTS.length]),
  );
}

/**
 * Decorative background for the hero: a tilted wall of real project screenshots drifting slowly
 * sideways, under a dark scrim so the headline always has strong contrast. Hidden from assistive
 * tech; motion stops for prefers-reduced-motion via the global rule.
 */
export function HeroCollage() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -inset-x-[30%] -inset-y-[25%] flex -rotate-[8deg] flex-col justify-center gap-5 opacity-[0.55]">
        {rows().map((row, r) => (
          <div
            key={r}
            className="flex w-max animate-marquee gap-5"
            style={{ animationDirection: r % 2 ? "reverse" : "normal", animationDuration: `${80 + r * 15}s` }}
          >
            {/* Two copies back to back so translateX(-50%) loops seamlessly. */}
            {[...row, ...row].map((src, i) => (
              <div
                key={i}
                className="relative h-[170px] w-[272px] shrink-0 overflow-hidden rounded-xl border border-white/10 sm:h-[210px] sm:w-[336px]"
              >
                <Image src={src} alt="" fill sizes="336px" quality={55} className="object-cover object-top" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Scrims: darken the centre for text, fade every edge into the page background. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_35%_50%,rgba(6,10,19,0.94)_0%,rgba(6,10,19,0.78)_55%,rgba(6,10,19,0.55)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-transparent to-ink-950" />
      <div className="absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]" />
    </div>
  );
}
