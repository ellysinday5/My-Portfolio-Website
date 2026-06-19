import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | DevPortfolio",
  description:
    "Welcome to my portfolio. Discover my latest Next.js engineering, React accomplishments, and clean UI design systems.",
  openGraph: {
    title: "Home | DevPortfolio",
    description:
      "Welcome to my portfolio. Discover my latest Next.js engineering, React accomplishments, and clean UI design systems.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 overflow-hidden">
      {/* Background gradients for premium feel */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/10 blur-[100px] sm:h-[400px] sm:w-[400px]"></div>
      <div className="absolute bottom-1/4 left-1/3 -z-10 h-[250px] w-[250px] rounded-full bg-brand-accent/10 blur-[80px] sm:h-[350px] sm:w-[350px]"></div>

      <section className="w-full max-w-3xl mx-auto flex flex-col items-center sm:items-start text-center sm:text-left gap-8 py-20 sm:py-28">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-xs font-semibold text-brand-primary tracking-wide">
          <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
          Available for new opportunities
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="gradient-text">Ellen Grace Sinday</span>
          <br />
          Software Engineering Intern
        </h1>

        <p className="max-w-xl text-lg sm:text-xl text-[var(--muted)] leading-relaxed">
          I am a software engineering intern passionate about building high-performance, beautifully designed web applications.
          Specializing in Next.js 16, React 19, Tailwind CSS v4, and strict
          TypeScript development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/projects"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-[var(--color-brand-primary)] px-6 text-sm font-semibold text-white transition-all hover:bg-[var(--color-brand-primary)]/90 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-brand-primary/25"
          >
            Explore Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card-bg)] px-6 text-sm font-semibold transition-all hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/5"
          >
            Get In Touch
          </Link>
        </div>

        {/* Highlight Section */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 pt-12 border-t border-[var(--border)] mt-6">
          <div>
            <h3 className="text-2xl font-bold text-brand-primary">3+ Years</h3>
            <p className="text-xs text-[var(--muted)]">
              Engineering Experience
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-brand-secondary">
              15+ Projects
            </h3>
            <p className="text-xs text-[var(--muted)]">
              Successfully Completed
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-2xl font-bold text-brand-accent">100% Biome</h3>
            <p className="text-xs text-[var(--muted)]">
              Zero Lint/Format Errors
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
