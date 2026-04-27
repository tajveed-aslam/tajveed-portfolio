export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="gradient-text font-semibold">Tajveed Aslam</span>
          . Built with Next.js 14 & Tailwind CSS.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/tajveed-aslam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-tajveed-aslam-07769968/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
