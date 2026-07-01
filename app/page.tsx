import type { Metadata } from "next";

import ScrollToTop from "@/components/layout/ScrollToTop";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Ellen Grace Sinday | Software Engineering Intern",
	description:
		"Welcome to my portfolio. Discover my latest Next.js engineering, React accomplishments, and clean UI design systems.",
	openGraph: {
		title: "Ellen Grace Sinday | Software Engineering Intern",
		description:
			"Welcome to my portfolio. Discover my latest Next.js engineering, React accomplishments, and clean UI design systems.",
		type: "website",
	},
};

export default function Home() {
	return (
		<div className="relative w-full overflow-hidden bg-background text-foreground transition-colors duration-300">
			<ScrollToTop />

			{/* ───────── HERO SECTION ───────── */}
			<section className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col justify-between px-6 py-12 md:py-20 lg:px-16 overflow-hidden">
				{/* Floating ambient glows */}
				<div className="absolute top-1/4 right-1/4 -z-5 h-87.5 w-87.5 rounded-full bg-brand-primary/10 blur-[120px] animate-float" />
				<div className="absolute bottom-1/3 left-1/3 -z-5 h-62.5 w-62.5 rounded-full bg-brand-accent/5 blur-[90px]" />

				<div />

				{/* Main Headline */}
				<div className="w-full max-w-7xl mx-auto flex flex-col items-start gap-4 z-10 select-none">
					<div className="flex items-center gap-6 md:gap-10 flex-wrap">
						<h1 className="hero-type hero-type-surname text-6xl sm:text-7xl md:text-8xl font-black tracking-widest text-foreground leading-none">
							SINDAY
						</h1>

						{/* using asChild lets us keep it as an anchor link <a> for smooth section jumping */}
						<Button
							asChild
							variant="outline"
							className="group w-14 h-14 rounded-full border-2 border-brand-primary outline outline-offset-5 outline-brand-primary/35 bg-transparent text-brand-primary hover:bg-brand-primary/10 hover:text-brand-primary transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:-translate-y-1 p-0"
						>
							<a href="/#about" aria-label="Open About page">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2.5"
									className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5"
									aria-label="Down arrow"
								>
									<title>Open About</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M14 5l7 7m0 0l-7 7m7-7H3"
									/>
								</svg>
							</a>
						</Button>
					</div>

					<h1 className="hero-type hero-type-given text-6xl sm:text-7xl md:text-8xl font-black tracking-widest text-brand-primary leading-none uppercase">
						ELLEN GRACE
					</h1>

					<div className="hero-role-slide flex items-center gap-4 mt-6">
						<span className="w-1 h-8 bg-brand-primary rounded-full" />
						<p className="text-lg md:text-xl font-medium tracking-widest text-(--foreground)/90">
							Software Engineering Intern
						</p>
					</div>
				</div>

				{/* Hero Bottom Bar */}
				<div className="w-full max-w-7xl mx-auto flex items-center justify-between mt-12 z-10">
					<div className="hidden sm:flex items-center gap-3">
						<span className="h-px w-12 bg-muted opacity-50" />
						<span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground animate-pulse">
							Scroll for details
						</span>
					</div>

					<div className="flex items-center gap-4 ml-auto">
						<a
							href="https://github.com/ellysinday5"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full border-2 border-brand-primary/40 text-brand-primary hover:border-brand-primary hover:bg-brand-primary/10 transition-all duration-300 hover:scale-110 shadow-lg shadow-brand-primary/10 hover:shadow-brand-primary/20"
							aria-label="GitHub Profile"
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-label="GitHub"
							>
								<title>GitHub</title>
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
						<a
							href="https://www.linkedin.com/in/ellen-grace-sinday-7b33793ab/"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full border-2 border-brand-primary/40 text-brand-primary hover:border-brand-primary hover:bg-brand-primary/10 transition-all duration-300 hover:scale-110 shadow-lg shadow-brand-primary/10 hover:shadow-brand-primary/20"
							aria-label="LinkedIn Profile"
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-label="LinkedIn"
							>
								<title>LinkedIn</title>
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
						</a>
						<a
							href="mailto:[EMAIL_ADDRESS]"
							className="p-3 rounded-full border-2 border-brand-primary/40 text-brand-primary hover:border-brand-primary hover:bg-brand-primary/10 transition-all duration-300 hover:scale-110 shadow-lg shadow-brand-primary/10 hover:shadow-brand-primary/20"
							aria-label="Email"
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-label="Email"
							>
								<title>Email</title>
								<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
							</svg>
						</a>
					</div>
				</div>
			</section>

			{/* ───────── ABOUT SECTION ───────── */}
			<AboutSection />

			{/* ───────── CONTACT SECTION ───────── */}
			<ContactSection />
		</div>
	);
}
