import Image from "next/image";
import { Reveal } from "@/components/Reveal";

interface Project {
  title:         string;
  subtitle:      string;
  description:   string;
  tech:          string[];
  highlights:    string[];
  github:        string | null;
  demo?:         string | null;
  gradient:      string;
  badge:         string;
  badgeColor:    string;
  icon:          string;
  screenshot:    string | null;
  screenshotAlt: string | null;
  note?:         string;
}

const PROJECTS: Project[] = [
  {
    title:       "Self-Healing Test Agent",
    subtitle:    "AI Agent · TypeScript + Playwright + Gemini API",
    description:
      "An agent that diagnoses and repairs Playwright tests failing on stale selectors — reading the failing test, inspecting the real DOM at the point of failure, proposing a one-line locator fix, and re-running the test to verify it, capped at three attempts. The core design decision is safety, not capability: two deterministic gates sit between the model and the codebase, so the agent only ever touches failures that look like genuine selector rot, and only via single-line locator edits — anything that looks like a real product or assertion bug is declined and flagged for a human instead of being force-fixed.",
    tech: ["TypeScript", "Playwright", "Gemini API", "Function Calling", "Node.js", "Vitest"],
    highlights: [
      "Two independent safety gates — error-type classification before the model runs, diff-shape validation on every proposed edit — neither trusts the model's own stated diagnosis",
      "Four-tool agentic loop (read_file, inspect_dom, edit_file, run_test) on Gemini's function-calling API, with a hand-rolled paren-balanced scanner so the diff guardrail survives real locator syntax",
      "inspect_dom captures a live accessibility-tree snapshot at the point of failure via a shared Playwright fixture, so fixes are grounded in the actual DOM rather than guessed from the error text alone",
      "36 unit tests covering the safety gates and tool layer against fixture data — no LLM or live browser needed to verify the trust boundary",
    ],
    github:        "https://github.com/tajveed-aslam/Self-healing-test-agent",
    demo:          "https://self-healing-test-agent.vercel.app/",
    gradient:      "from-emerald-500 via-teal-500 to-transparent",
    badge:         "AI Agent",
    badgeColor:    "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    icon:          "🩹",
    screenshot:    null,
    screenshotAlt: null,
  },
  {
    title:       "A&Z Mart — E-Commerce Platform",
    subtitle:    "Full-Stack Development · Next.js 14 + FastAPI",
    description:
      "A production-quality e-commerce application built from scratch with full multi-role support. Customers browse a 25-item product catalogue with real-time search and category filters, manage a persistent shopping cart, complete Cash-on-Delivery checkout, and track live order status through an animated timeline. Sellers receive email notifications on new orders. An admin dashboard provides full CRUD for products, categories, orders, and users.",
    tech: ["Next.js 14", "FastAPI", "SQLite", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query", "JWT Auth"],
    highlights: [
      "Multi-role system: customer, seller, admin — each with separate dashboards",
      "AI product chatbot powered by Claude API for natural language product discovery",
      "14-currency converter with live exchange rates and localStorage persistence",
      "SPA-style animated page transitions, hero carousel, glassmorphism UI",
    ],
    github:        "https://github.com/tajveed-aslam/AZMartDev",
    gradient:      "from-sky-500 via-blue-500 to-transparent",
    badge:         "Full-Stack",
    badgeColor:    "bg-sky-500/20 text-sky-300 border-sky-500/30",
    icon:          "🛒",
    screenshot:    "/screenshots/azmart-home.png",
    screenshotAlt: "A&Z Mart homepage showing the hero section and product catalogue",
  },
  {
    title:       "TestForge — AI Test & SDLC Generator",
    subtitle:    "AI Tooling · Next.js 14 + FastAPI + Claude API",
    description:
      "An AI-powered developer tool that generates production-ready test automation code and complete SDLC documentation from a plain-English feature description. Supports 10 test frameworks across 5 languages, 3 code patterns, and 8 professional document types. Responses stream in real-time via Server-Sent Events so output appears as it is generated — with copy-to-clipboard and file download on completion.",
    tech: ["Next.js 14", "FastAPI", "Claude API", "TypeScript", "Playwright", "Python", "SSE Streaming", "Tailwind CSS"],
    highlights: [
      "10 frameworks: Playwright, Cypress, Selenium (Java/Python/C#), WebdriverIO, pytest, Robot Framework",
      "8 SDLC document types: Test Strategy, Test Plan, RTM, User Stories, Bug Reports, Release Notes, and more",
      "Live streaming output via SSE — output appears word-by-word like ChatGPT",
      "Mock mode for zero-cost demos — no API key required for development",
    ],
    github:        "https://github.com/tajveed-aslam/TestForge",
    gradient:      "from-amber-500 via-orange-500 to-transparent",
    badge:         "AI Tooling",
    badgeColor:    "bg-amber-500/20 text-amber-300 border-amber-500/30",
    icon:          "⚡",
    screenshot:    "/screenshots/testforge-generator.png",
    screenshotAlt: "TestForge test generator showing framework selector and live streaming code output",
  },
  {
    title:       "AZMart — Playwright Automation Suite",
    subtitle:    "QA Automation Framework · Playwright + TypeScript",
    description:
      "A from-scratch Playwright automation framework covering the full AZMart application — both UI end-to-end flows and REST API contracts. Built with TypeScript, Page Object Model, shared auth helpers, and ephemeral test data for full isolation. Includes AI-First SDLC documentation: Test Strategy, Test Plan, Requirements Traceability Matrix, and an AI approach log documenting how Claude was used throughout the framework design.",
    tech: ["Playwright", "TypeScript", "Page Object Model", "API Testing", "dotenv"],
    highlights: [
      "~107 test cases: ~50 UI E2E across 9 specs + ~57 API integration across 7 specs",
      "11 Page Object Models covering all customer, checkout, and admin flows",
      "Security test payloads: SQL injection, XSS, user enumeration, brute-force lockout",
      "Full AI-First SDLC documentation included in the repository",
    ],
    github:        "https://github.com/tajveed-aslam/AZMartQA",
    gradient:      "from-cyan-500 via-teal-500 to-transparent",
    badge:         "QA Automation",
    badgeColor:    "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    icon:          "🧪",
    screenshot:    "/screenshots/testforge-docs.png",
    screenshotAlt: "Playwright SDLC document output panel showing a generated Test Strategy",
  },
  {
    title:       "Enterprise Web Portal — QA Automation Suite",
    subtitle:    "Corporate QA Automation · Playwright + pytest + Docker",
    description:
      "End-to-end Playwright automation suite for a large-scale enterprise web application used across multiple regions. Covers UI regression, sanity, and API test layers with Docker-containerised execution environments. Integrated into a Jenkins CI/CD pipeline with JUnit XML reporting. Includes MFA/OTP support using TOTP secret injection for automated login through multi-factor authentication flows.",
    tech: ["Playwright", "TypeScript", "pytest", "Docker", "Jenkins", "Python"],
    highlights: [
      "23 automated specs: 15 UI regression + 2 sanity + 6 Python API",
      "Docker-containerised test execution — identical environment across dev and CI",
      "Jenkins pipeline with JUnit XML artifacts and HTML reporting",
      "MFA/OTP automation via TOTP secret injection — tests the full auth flow",
    ],
    github:        null,
    gradient:      "from-slate-500 via-gray-500 to-transparent",
    badge:         "Enterprise QA",
    badgeColor:    "bg-slate-500/20 text-slate-300 border-slate-500/30",
    icon:          "🏢",
    screenshot:    null,
    screenshotAlt: null,
    note:          "Private repository — corporate project",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Things I&apos;ve{" "}
              <span className="gradient-text">built & tested</span>
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
              Every project covers the full lifecycle — design, build, automate, document.
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 60}>
            <div
              className="glow-card bg-gray-900/60 rounded-2xl border border-white/5 overflow-hidden"
            >
              {/* Screenshot preview */}
              {project.screenshot && (
                <div className="relative w-full h-52 overflow-hidden border-b border-white/5">
                  <Image
                    src={project.screenshot}
                    alt={project.screenshotAlt ?? project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 960px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/70" />
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.icon}</span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${project.badgeColor}`}>
                          {project.badge}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{project.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
                      >
                        ↗ Live Demo
                      </a>
                    )}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium border border-white/10 text-gray-300 hover:bg-white/5 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        GitHub
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm text-gray-600 border border-white/5">
                        🔒 Private
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-6">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-teal-400 mt-0.5 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-lg bg-gray-800 border border-white/5 text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.note && (
                  <p className="mt-4 text-xs text-gray-600 italic">{project.note}</p>
                )}
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
