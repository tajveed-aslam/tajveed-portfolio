import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Tajveed Aslam — Sr. SDET & Full-Stack Developer",
  description:
    "Portfolio of Tajveed Aslam — Sr. Software Development Engineer in Test with 5+ years of experience in Playwright automation, API testing, CI/CD, and full-stack development with Next.js & FastAPI.",
  keywords: ["QA Automation", "Playwright", "SDET", "Next.js", "FastAPI", "AI Testing", "Remote"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-950 text-gray-100">
        <Nav />
        {children}
      </body>
    </html>
  );
}
