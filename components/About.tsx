export function About() {
  const stats = [
    { value: "5+",   label: "Years Experience"    },
    { value: "4",    label: "Major Projects"      },
    { value: "150+", label: "Automated Test Cases" },
    { value: "3",    label: "AI-Powered Projects"  },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Quality-first engineer,{" "}
              <span className="gradient-text">full-stack learner</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m a Senior SDET with 5+ years of experience designing and building
                test automation frameworks for enterprise software. My background spans
                end-to-end UI testing with Playwright, REST API validation, CI/CD pipeline
                integration, and Docker-based test environments.
              </p>
              <p>
                To deepen my engineering breadth, I built <strong className="text-white">A&amp;Z Mart</strong> —
                a full-stack e-commerce platform using Next.js 14, FastAPI, and SQLite — entirely
                from scratch, then wrote a production-quality Playwright automation suite for it.
                I also built <strong className="text-white">TestForge</strong>, an AI-powered tool
                that generates test code across 10 frameworks and 8 types of SDLC documentation
                using the Claude API with real-time streaming.
              </p>
              <p>
                I actively integrate AI into both development and testing workflows — from
                AI-assisted test design and prompt engineering to building LLM-powered features
                directly into products. Open to remote roles worldwide.
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glow-card bg-gray-900/60 rounded-2xl p-6 border border-white/5 text-center"
              >
                <div className="text-4xl font-extrabold gradient-text mb-1">{s.value}</div>
                <div className="text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
