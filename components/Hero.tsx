"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";

const ROLES = [
  "Senior SDET",
  "QA Automation Engineer",
  "Playwright Specialist",
  "AI-Assisted Test Engineer",
];

function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="text-xl sm:text-2xl text-gray-300 font-medium mb-3 font-mono h-8 flex items-center justify-center gap-2">
      <span key={index} className="role-fade">{ROLES[index]}</span>
      <span className="w-[2px] h-6 bg-teal-400 animate-pulse" aria-hidden="true" />
    </p>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-3xl text-center">
        <Reveal>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to on-site, hybrid & remote — relocation OK
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Tajveed Aslam</span>
          </h1>

          <RoleRotator />

          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            9 years in software — 6 in QA and test automation, built on 3 as a C#/.NET developer.
            Playwright, real-time ML-systems testing, and full-stack AI tooling with Next.js,
            FastAPI, and LLM APIs.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl font-semibold text-gray-950 text-sm"
              style={{ background: "linear-gradient(135deg, #2dd4bf, #38bdf8)" }}
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-sm border border-white/10 text-gray-300 hover:bg-white/5 transition-colors"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-tajveed-aslam-07769968/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-sm border border-white/10 text-gray-300 hover:bg-white/5 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tajveed-aslam"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-sm border border-white/10 text-gray-300 hover:bg-white/5 transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Scroll hint */}
          <div className="mt-20 flex flex-col items-center gap-2 text-gray-600">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
