// Single source of truth for every project shown on the site: the hero collage, the featured
// carousel, the project galleries and the headline stats are all derived from this list.

export interface Shot {
  src:     string;
  alt:     string;
  caption: string;
}

export interface Project {
  slug:        string;
  title:       string;
  /** One-line pitch used on the featured carousel. */
  tagline:     string;
  /** "Category · Stack" */
  subtitle:    string;
  description: string;
  tech:        string[];
  /** 3–4 concrete, technical bullets. */
  highlights:  string[];
  github:      string | null;
  demo:        string | null;
  badge:       string;
  icon:        string;
  /** Uses an LLM in the product itself (counts toward the "AI-powered" stat). */
  ai:          boolean;
  /** Shown in the featured carousel (needs at least one screenshot). */
  featured:    boolean;
  /** Screenshots, 1440×900. First one is the cover. Empty for code-only projects. */
  gallery:     Shot[];
  note?:       string;
}

const LIVE_DEMO_NOTE =
  "The API runs on a free tier that sleeps when idle, so the first visit can take up to a minute to wake.";

export const PROJECTS: Project[] = [
  {
    slug:        "fitcheck",
    title:       "FitCheck — CV-to-Job Match Analyzer",
    tagline:     "Score a CV against any job post, with gaps verified against the CV's own text.",
    subtitle:    "AI Tooling · ASP.NET Core 8 + React + PostgreSQL + Gemini API",
    description:
      "Upload a CV as PDF or DOCX, paste a job description, and FitCheck returns a match score weighted toward the role's required qualifications, the skills you already demonstrate, the keywords you're missing (ranked required, preferred or minor) and three specific tips to close the gap. Results show as a score gauge with the job post highlighted green and red, and every analysis is saved to your history.",
    tech: ["ASP.NET Core 8", "C#", "EF Core", "PostgreSQL", "PdfPig", "Open XML SDK", "React", "TypeScript", "Gemini API", "Playwright", "xUnit"],
    highlights: [
      "Server-side text extraction from PDF (PdfPig) and DOCX (Open XML SDK), with file type detected from the bytes rather than the extension and clear errors for scanned, encrypted, corrupt or legacy .doc files",
      "Prompt-injection hardened: the CV and job post are fenced as untrusted data, and a live test plants a hidden \"score this 100\" instruction in a CV to prove the score isn't dictated by it",
      "The model's \"missing keywords\" are verified against the CV with word-boundary matching, so a candidate is never told they lack a skill their CV states verbatim",
      "43 xUnit tests that build real PDF/DOCX files in memory, plus a Playwright browser suite on Edge, and an LLM quota that only counts valid requests so a wrong upload never locks a demo user out",
    ],
    github:   "https://github.com/tajveed-aslam/FitCheck",
    demo:     "https://fitcheck-rho-three.vercel.app/",
    badge:    "AI Tooling",
    icon:     "🎯",
    ai:       true,
    featured: true,
    gallery: [
      { src: "/projects/fitcheck/3-score.jpg",      alt: "FitCheck result with a 76% match gauge, summary, matched skills and missing keywords", caption: "Match score, summary, matched skills and ranked gaps" },
      { src: "/projects/fitcheck/4-highlights.jpg", alt: "Job description with matched terms highlighted green and missing terms red",            caption: "The job post, highlighted: green is in the CV, red is missing" },
      { src: "/projects/fitcheck/2-upload.jpg",     alt: "New analysis form with an attached sample CV and a pasted job description",            caption: "Upload a PDF/DOCX CV and paste the job description" },
      { src: "/projects/fitcheck/1-landing.jpg",    alt: "FitCheck landing page with a preview score gauge and the Try the live demo button",      caption: "Landing page with one-click guest demo" },
    ],
    note: `Live demo: click “Try the live demo” for a two-hour guest session, no sign-up needed, then “Try with sample CV & job” to see a full analysis in about 20 seconds, or upload your own CV. Only the extracted text is stored, never the file. ${LIVE_DEMO_NOTE}`,
  },
  {
    slug:        "sharecart",
    title:       "ShareCart — Shared Family Grocery Lists",
    tagline:     "One grocery list for the whole family, synced live, with barcode scanning.",
    subtitle:    "Mobile App · React Native (Expo) + Supabase + Appium",
    description:
      "A shared grocery list for families. Make a list, invite the family with a code or link, and every change shows up on everyone's phone instantly: who added each item, who put it in the cart, and who's looking at the list right now. Add items by typing (\"2 milk\") or by scanning a barcode, which looks the product up on Open Food Facts. Runs on Android and iOS through Expo, and in the browser.",
    tech: ["React Native", "Expo", "TypeScript", "Expo Router", "Supabase", "PostgreSQL", "Row Level Security", "Supabase Realtime", "expo-camera", "Jest", "Appium", "Playwright"],
    highlights: [
      "Postgres Row Level Security makes every list visible only to its members, and database triggers stamp who added or checked each item from the caller's JWT, so a client can't claim someone else did it",
      "One Supabase Realtime channel per open list carries row changes and presence; edits are optimistic and reconciled by id and updated_at, with a refetch once the database listener confirms after every (re)connect",
      "Barcode scanning with expo-camera: misreads are rejected by the GS1 check digit before any lookup, products are named from Open Food Facts, and duplicates already on the list are flagged",
      "An integration suite of three real users (owner, member, outsider) attacks the database rules and checks realtime reaches only members; a two-browser Playwright run checks live sync on the deployed app, plus an Appium suite",
    ],
    github:   "https://github.com/tajveed-aslam/ShareCart",
    demo:     "https://sharecart-omega.vercel.app/",
    badge:    "Mobile",
    icon:     "🛒",
    ai:       false,
    featured: false,
    gallery: [
      { src: "/projects/sharecart/1-realtime.jpg", alt: "The same ShareCart list on two phones, showing who added and checked each item, with a barcode scan in the middle", caption: "Two people, one list: every add and check-off shows up on both phones live" },
      { src: "/projects/sharecart/2-sharing.jpg",  alt: "The share screen with an invite code and members, next to the join screen saying Ayesha invited you to Weekly shop",  caption: "Invite by code or link; the join screen shows the list and who sent it" },
      { src: "/projects/sharecart/3-dark.jpg",     alt: "ShareCart's lists screen and a shared list on two phones in dark mode",                                              caption: "Dark mode, with presence avatars for who has the list open" },
      { src: "/projects/sharecart/4-start.jpg",    alt: "ShareCart's sign-in screen with guest, sign in and create account options, next to the lists screen",                 caption: "Try it as a guest in one step; guests start with a sample list" },
    ],
    note: "Live demo: continue as a guest, open Share and copy the invite link, then open it in a private window (or on your phone) to watch two people edit the same list in real time. Barcode scanning uses the camera on phones; on a computer, type a barcode such as 3017624010701.",
  },
  {
    slug:        "salahcompanion",
    title:       "SalahCompanion — Prayer Times, Qibla & Ramadan Tracker",
    tagline:     "A React Native prayer companion: GPS prayer times, a live Qibla compass and a fasting tracker.",
    subtitle:    "Mobile App · React Native (Expo) + TypeScript + Appium",
    description:
      "A cross-platform mobile app for daily prayer. It finds you by GPS and shows the day's prayer times from the AlAdhan API with a live countdown to the next one, points a compass at the Kaaba using the phone's magnetometer, tracks Ramadan fasts with streaks and fasts still to make up, and sends a notification at each prayer time. It runs on Android and iOS through Expo, and as a web app in the browser.",
    tech: ["React Native", "Expo", "TypeScript", "React Navigation", "expo-location", "expo-sensors", "expo-notifications", "AsyncStorage", "Jest", "Appium", "WebdriverIO"],
    highlights: [
      "Qibla from the great-circle bearing to the Kaaba, driven by the OS heading API (tilt-compensated, true north) with a raw-magnetometer fallback, smoothed on the unit circle so 359°→1° doesn't spin the dial, plus a haptic tick when you're aligned",
      "Prayer times in the location's own time zone, the calculation method and Asr school picked automatically by region, and offline fallback to the last fetch; a week of local notifications is re-queued every time the app opens",
      "Ramadan tracker uses the real Hijri calendar (29 or 30 days), locks upcoming days, and persists per year in AsyncStorage; current streak, best streak and fasts to make up",
      "41 Jest unit tests for the maths and parsing, plus an Appium (WebdriverIO + UiAutomator2) suite that mocks GPS, grants and denies permissions, and checks a real notification in the Android shade",
    ],
    github:   "https://github.com/tajveed-aslam/SalahCompanion",
    demo:     "https://salahcompanion.vercel.app/",
    badge:    "Mobile",
    icon:     "🕌",
    ai:       false,
    featured: true,
    gallery: [
      { src: "/projects/salahcompanion/1-overview.jpg", alt: "Three phones showing SalahCompanion's prayer times, the Qibla compass facing Mecca and the Ramadan tracker", caption: "Prayer times with a live countdown, the Qibla compass and the Ramadan tracker" },
      { src: "/projects/salahcompanion/2-qibla.jpg",    alt: "The Qibla compass in light and dark mode, showing 'You are facing the Qibla'",                               caption: "Qibla compass: turns green with a haptic tick when you face the Kaaba" },
      { src: "/projects/salahcompanion/3-dark.jpg",     alt: "Prayer times, Ramadan tracker and settings in dark mode",                                                     caption: "Follows the phone's light or dark mode" },
      { src: "/projects/salahcompanion/4-settings.jpg", alt: "Calculation method settings, the location-declined screen and the prayer times list",                         caption: "Regional calculation methods, and a sample city if location is declined" },
    ],
    note: "Live demo: the web version of the app. Allow location (or pick the sample city) to see your prayer times; open it on a phone for the live Qibla compass. Prayer notifications need the mobile app, which runs in Expo Go on Android and iOS.",
  },
  {
    slug:        "liveboard",
    title:       "LiveBoard — Real-Time Collaborative Kanban",
    tagline:     "Drag cards with your team and watch every change appear live, over SignalR.",
    subtitle:    "Full-Stack Real-Time · ASP.NET Core 8 + SignalR + React + PostgreSQL",
    description:
      "A Kanban board built for simultaneous editing. Boards, columns and cards support full drag-and-drop (mouse, touch or keyboard), and every change is broadcast over SignalR to everyone on the board the moment it is saved. Share a board with a link, see who's online, see which card a teammate is editing, and follow a live activity feed. If the connection drops, it reconnects and resyncs on its own.",
    tech: ["ASP.NET Core 8", "SignalR", "C#", "EF Core", "PostgreSQL", "React", "TypeScript", "dnd-kit", "JWT Auth", "xUnit", "Playwright"],
    highlights: [
      "Writes go through REST and are broadcast over SignalR only after they're saved; each event carries the resulting state (e.g. the final card order of every column a move touched), so concurrent edits converge on every screen",
      "Per-board write serialisation, proven by an integration test that fires 40 random moves from two users at once and asserts no card is lost, duplicated or mis-ordered",
      "Collaboration awareness: presence avatars, an \"editing\" badge on cards a teammate has open, and a \"someone else saved, load their version?\" prompt instead of silent overwrites",
      "37 xUnit tests including real-time tests with two live SignalR clients, plus a Playwright suite that drives two separate users in two browser sessions against the deployed app",
    ],
    github:   "https://github.com/tajveed-aslam/LiveBoard",
    demo:     "https://liveboard-tajveed.vercel.app/",
    badge:    "Real-Time",
    icon:     "🗂️",
    ai:       false,
    featured: true,
    gallery: [
      { src: "/projects/liveboard/1-board.jpg",       alt: "LiveBoard board with two people online, an 'editing' badge on a card and the live activity feed",          caption: "Two people on one board: presence, an 'editing' badge and the live activity feed" },
      { src: "/projects/liveboard/2-card-editor.jpg", alt: "Card editor showing a notice that someone else just saved changes, with a Load their version link",        caption: "No silent overwrites: \"Someone else just saved, load their version?\"" },
      { src: "/projects/liveboard/3-share.jpg",       alt: "Share dialog with the board's invite link, copy button and reset link option",                              caption: "Share by link; the owner can reset it to cut off old links" },
      { src: "/projects/liveboard/4-landing.jpg",     alt: "LiveBoard landing page with a preview board and the Try the live demo button",                                caption: "Landing page with one-click guest demo" },
    ],
    note: "Live demo: click “Try the live demo” for a guest session with a sample board, then click Share and open the link in a private window to see two people editing the same board in real time. The API runs on a free tier that sleeps when idle, so the first visit can take up to a minute to wake.",
  },
  {
    slug:        "apitestgen",
    title:       "APITestGen — AI API Test Generator",
    tagline:     "OpenAPI spec in; test cases, a Postman collection and a pytest suite out.",
    subtitle:    "AI Tooling · ASP.NET Core 8 + React + PostgreSQL + Gemini API",
    description:
      "A full-stack tool that turns an OpenAPI/Swagger spec, or just a sample API response, into a complete API test suite: positive and negative test cases, an importable Postman collection, and a ready-to-run pytest module. The model designs the test cases once as structured data, and both runnable outputs are derived from that same design, so the three artefacts never drift apart. Every run is saved to the user's history, and a one-click guest mode lets anyone try it live without signing up.",
    tech: ["ASP.NET Core 8", "C#", "EF Core", "PostgreSQL", "React", "TypeScript", "Vite", "Gemini API", "JWT Auth", "xUnit"],
    highlights: [
      "Two-step pipeline: the LLM returns structured test cases that are validated and normalised server-side (bad methods, status codes and paths are dropped, ids re-assigned) before anything else is built from them",
      "Postman v2.1 collection is generated deterministically in C# from the validated cases rather than by the model, so it always imports cleanly, with baseUrl/authToken variables and a status assertion per request",
      "Provider-agnostic LLM layer (Gemini or OpenAI via config) with retry and backoff on 429/5xx, plus per-user and per-IP rate limiting so the public demo can't exhaust the API quota",
      "37 xUnit tests covering the parser, Postman builder, input validation and the full pipeline against a fake LLM, plus an opt-in live smoke test against the real Gemini API",
    ],
    github:   "https://github.com/tajveed-aslam/APITestGen",
    demo:     "https://apitestgen-eight.vercel.app/",
    badge:    "AI Tooling",
    icon:     "🧬",
    ai:       true,
    featured: true,
    gallery: [
      { src: "/projects/apitestgen/3-test-cases.jpg", alt: "Generated positive and negative API test cases with an expanded case showing query, headers and expected status", caption: "Positive and negative test cases, each with an expected status and assertions" },
      { src: "/projects/apitestgen/4-postman.jpg",    alt: "Generated Postman v2.1 collection JSON with copy and download buttons",                                      caption: "Importable Postman v2.1 collection, built in C# from the same cases" },
      { src: "/projects/apitestgen/5-pytest.jpg",     alt: "Generated pytest module using requests with a shared session fixture",                                     caption: "Ready-to-run pytest suite" },
      { src: "/projects/apitestgen/2-input.jpg",      alt: "New generation form with a sample OpenAPI spec loaded",                                                    caption: "Paste an OpenAPI spec or a sample response" },
      { src: "/projects/apitestgen/1-landing.jpg",    alt: "APITestGen landing page with the Try the live demo button",                                                caption: "Landing page with one-click guest demo" },
    ],
    note: `Live demo: click “Try the live demo” for a two-hour guest session, no sign-up needed, then use “Load sample” to generate a full suite in about 15 seconds. ${LIVE_DEMO_NOTE}`,
  },
  {
    slug:        "self-healing-test-agent",
    title:       "Self-Healing Test Agent",
    tagline:     "An agent that repairs stale Playwright selectors, behind two deterministic safety gates.",
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
    github:   "https://github.com/tajveed-aslam/Self-healing-test-agent",
    demo:     "https://self-healing-test-agent.vercel.app/",
    badge:    "AI Agent",
    icon:     "🩹",
    ai:       true,
    featured: true,
    gallery: [
      { src: "/projects/self-healing/1-overview.jpg", alt: "Self-Healing Test Agent overview: an agent that fixes its own stale selectors",            caption: "What the agent does and why selector rot matters" },
      { src: "/projects/self-healing/2-section.jpg",  alt: "The two safety gates: error-type classification and diff-shape validation, plus a real run", caption: "Two deterministic gates the model can't override, and a real run" },
    ],
  },
  {
    slug:        "az-mart",
    title:       "A&Z Mart — E-Commerce Platform",
    tagline:     "Full-stack e-commerce with a catalogue-bounded, injection-guarded Gemini shopping assistant.",
    subtitle:    "Full-Stack Development · Next.js 14 + FastAPI + Gemini API",
    description:
      "A production-quality e-commerce application built from scratch with full multi-role support, headlined by a live AI shopping assistant powered by Google's Gemini API. Customers browse a 25-item product catalogue with real-time search and category filters, manage a persistent shopping cart, complete Cash-on-Delivery checkout, and track live order status through an animated timeline. Sellers receive email notifications on new orders. An admin dashboard provides full CRUD for products, categories, orders, and users.",
    tech: ["Next.js 14", "FastAPI", "Gemini API", "SQLite", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query", "JWT Auth"],
    highlights: [
      "Live AI shopping assistant (Gemini API), strictly bounded to A&Z Mart's own catalogue — deterministic prompt-injection guarding rejects jailbreak attempts before they ever reach the model, with a rule-based fallback if the LLM call fails",
      "The assistant doesn't just recommend — it can add a product straight to your cart on request, with the actual mutation validated and executed server-side rather than trusted from the model's own reply text",
      "Multi-role system: customer, seller, admin — each with separate dashboards",
      "14-currency converter with live exchange rates and localStorage persistence",
    ],
    github:   "https://github.com/tajveed-aslam/AZMartDev",
    demo:     "https://azmartdev.vercel.app/",
    badge:    "Full-Stack",
    icon:     "🛒",
    ai:       true,
    featured: true,
    gallery: [
      { src: "/projects/azmart/1-home.jpg",     alt: "A&Z Mart homepage hero for premium imported fragrances",     caption: "Storefront home with category hero" },
      { src: "/projects/azmart/2-products.jpg", alt: "Product catalogue with search, category filters and sorting", caption: "Catalogue with real-time search and filters" },
      { src: "/projects/azmart/3-product.jpg",  alt: "Product detail page with price, quantity and Add to Cart",    caption: "Product page with cart and Cash-on-Delivery" },
    ],
  },
  {
    slug:        "testforge",
    title:       "TestForge — AI Test & SDLC Generator",
    tagline:     "Test code for 10 frameworks and 8 SDLC document types, streamed as it's written.",
    subtitle:    "AI Tooling · Next.js 14 + FastAPI + Gemini API",
    description:
      "An AI-powered developer tool that generates production-ready test automation code and complete SDLC documentation from a plain-English feature description. Supports 10 test frameworks across 5 languages, 3 code patterns, and 8 professional document types. Responses stream in real-time via Server-Sent Events so output appears as it is generated — with copy-to-clipboard and file download on completion.",
    tech: ["Next.js 14", "FastAPI", "Gemini API", "TypeScript", "Playwright", "Python", "SSE Streaming", "Tailwind CSS"],
    highlights: [
      "10 frameworks: Playwright, Cypress, Selenium (Java/Python/C#), WebdriverIO, pytest, Robot Framework",
      "8 SDLC document types: Test Strategy, Test Plan, RTM, User Stories, Bug Reports, Release Notes, and more",
      "Live streaming output via SSE, JSON-framed per chunk so multi-line output from the model can't break the stream",
      "Mock mode for zero-cost demos — no API key required, plus a graceful fallback message if the live API ever fails mid-stream",
    ],
    github:   "https://github.com/tajveed-aslam/TestForge",
    demo:     "https://testforge-alpha.vercel.app/",
    badge:    "AI Tooling",
    icon:     "⚡",
    ai:       true,
    featured: true,
    gallery: [
      { src: "/projects/testforge/1-landing.jpg",  alt: "TestForge landing: generate test code and SDLC docs in seconds",     caption: "Landing page" },
      { src: "/projects/testforge/2-generate.jpg", alt: "Test code generator with framework, language and pattern selectors", caption: "Test code generator: framework, language and pattern" },
      { src: "/projects/testforge/3-docs.jpg",     alt: "SDLC document generator with eight document types",                  caption: "SDLC document generator" },
    ],
  },
  {
    slug:        "azmart-qa",
    title:       "AZMart — Playwright Automation Suite",
    tagline:     "~107 UI and API tests for A&Z Mart, with Page Objects and security payloads.",
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
    github:   "https://github.com/tajveed-aslam/AZMartQA",
    demo:     null,
    badge:    "QA Automation",
    icon:     "🧪",
    ai:       false,
    featured: false,
    gallery:  [],
  },
  {
    slug:        "enterprise-qa",
    title:       "Enterprise Web Portal — QA Automation Suite",
    tagline:     "Dockerised Playwright + pytest suite in Jenkins, including MFA/OTP login flows.",
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
    github:   null,
    demo:     null,
    badge:    "Enterprise QA",
    icon:     "🏢",
    ai:       false,
    featured: false,
    gallery:  [],
    note:     "Private repository — corporate project",
  },
];

export const FEATURED = PROJECTS.filter((p) => p.featured && p.gallery.length > 0);

export const STATS = {
  projects:   PROJECTS.length,
  aiProjects: PROJECTS.filter((p) => p.ai).length,
  liveDemos:  PROJECTS.filter((p) => p.demo).length,
};

/** Every screenshot, for the hero collage. */
export const ALL_SHOTS: string[] = PROJECTS.flatMap((p) => p.gallery.map((g) => g.src));
