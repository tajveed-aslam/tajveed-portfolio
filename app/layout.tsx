import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tajveed Aslam — Senior SDET & AI-Assisted QA Engineer",
  description:
    "Portfolio of Tajveed Aslam — Senior SDET with 9 years in software (6 in QA automation, 3 as a C#/.NET developer). Playwright, real-time ML-systems testing, and AI-powered developer tools built with Next.js, FastAPI, and LLM APIs.",
  keywords: ["QA Automation", "Playwright", "SDET", "Next.js", "FastAPI", "AI Testing", "Gemini API", "Claude Code", "Remote"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased bg-gray-950 text-gray-100">
        <Nav />
        {children}
      </body>
    </html>
  );
}
