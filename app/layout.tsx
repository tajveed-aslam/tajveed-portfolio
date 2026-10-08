import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tajveed-portfolio.vercel.app"),
  title: "Tajveed Aslam — Senior SDET & AI-Assisted QA Engineer",
  description:
    "Portfolio of Tajveed Aslam — Senior SDET with 9 years in software (6 in QA automation, 3 as a C#/.NET developer). Playwright, real-time ML-systems testing, and AI-powered developer tools built with ASP.NET Core, React, Next.js, FastAPI and LLM APIs.",
  keywords: ["QA Automation", "Playwright", "SDET", "ASP.NET Core", "React", "Next.js", "FastAPI", "AI Testing", "Gemini API", "Claude Code", "Remote"],
  openGraph: {
    title: "Tajveed Aslam — Senior SDET",
    description: "Quality engineering, built like software. Live demos of AI-powered testing tools.",
    images: ["/projects/fitcheck/3-score.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
