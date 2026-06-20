import type { Metadata } from "next";
import Image from "next/image";
import { ContactSection } from "./components/sections/ContactSection";
import ScrollToTop from "./components/layout/ScrollToTop";

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
	const developSkills = [
		"Next.js",
		"Tailwind",
		"React",
		"Javascript",
		"CSS",
		"Node.js",
		"Python",
		"SpringBoot",
		"FlutterFlow",
		"Firebase",
		"Supabase",
		"MySQL",
	];

	const createSkills = [
		"Figma",
		"Canva",
		"Capcut",
		"Adobe Premiere Pro",
		"Adobe Illustrator",
	];

	return (
		<div className="relative w-full overflow-hidden bg--background">
			<ScrollToTop />
			{/* ───────── HERO SECTION (Image 1) ───────── */}
			<section className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col justify-between px-6 py-12 md:py-20 lg:px-16 overflow-hidden">
				{/* Skyscrapers background image with dark mask overlay */}
				<div className="absolute inset-0 -z-10 bg-black">
					<Image
						src="/skyscrapers_hero.png"
						alt="Skyscrapers Background"
						fill
						priority
						className="object-cover opacity-35 mix-blend-luminosity scale-105 animate-pulse-slow"
						style={{ animationDuration: "12s" }}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-black/60" />
					<div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/85 via-transparent to-transparent" />
				</div>

				{/* Floating subtle ambient glows */}
				<div className="absolute top-1/4 right-1/4 -z-5 h-[350px] w-[350px] rounded-full bg-brand-primary/10 blur-[120px] animate-float" />
				<div className="absolute bottom-1/3 left-1/3 -z-5 h-[250px] w-[250px] rounded-full bg-brand-accent/5 blur-[90px]" />

				{/* Empty spacer to align content nicely in center-bottom */}
				<div />

				{/* Main Headline Text */}
				<div className="w-full max-w-7xl mx-auto flex flex-col items-start gap-4 z-10 select-none">
					<div className="flex items-center gap-6 md:gap-10 flex-wrap">
						<h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-widest text-white leading-none">
							SINDAY
						</h1>
						{/* Circle Arrow Action Button */}
						<a
							href="#what-i-do"
							className="circle-arrow-btn flex items-center justify-center w-14 h-14 rounded-full border-2 border-brand-primary text-brand-primary bg-transparent focus:outline-none"
							aria-label="Scroll down to What I Do section"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2.5"
								className="w-6 h-6"
								aria-label="Down arrow"
							>
								<title>Scroll Down</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								/>
							</svg>
						</a>
					</div>

					<h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-widest text-brand-primary leading-none uppercase">
						ELLEN GRACE
					</h1>

					{/* Vertical Bar Subtitle Block */}
					<div className="flex items-center gap-4 mt-6">
						<span className="w-[4px] h-8 bg-brand-primary rounded-full" />
						<p className="text-lg md:text-xl font-medium tracking-widest text-white/90">
							Software Engineering Intern
						</p>
					</div>
				</div>

				{/* Hero Bottom Bar - Social Links (Image 1) */}
				<div className="w-full max-w-7xl mx-auto flex items-center justify-between mt-12 z-10">
					{/* Scroll prompt on left */}
					<div className="hidden sm:flex items-center gap-3">
						<span className="h-px w-12 bg-var(--muted) opacity-50" />
						<span className="text-[10px] uppercase font-bold tracking-widest text-var(--muted) animate-pulse">
							Scroll for details
						</span>
					</div>

					{/* Social Icons at bottom right */}
					<div className="flex items-center gap-4 ml-auto">
						<a
							href="https://github.com"
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
							href="https://linkedin.com"
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
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full border-2 border-brand-primary/40 text-brand-primary hover:border-brand-primary hover:bg-brand-primary/10 transition-all duration-300 hover:scale-110 shadow-lg shadow-brand-primary/10 hover:shadow-brand-primary/20"
							aria-label="Facebook Profile"
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-label="Facebook"
							>
								<title>Facebook</title>
								<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
							</svg>
						</a>
					</div>
				</div>
			</section>

			{/* ───────── WHAT I DO SECTION (Image 2) ───────── */}
			<section
				id="what-i-do"
				className="relative w-full py-24 md:py-32 px-6 lg:px-16 border-t border-[var(--border)] scroll-mt-20"
			>
				{/* Section grid containing DEVELOP/CREATE cards on left and image on right */}
				<div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
					{/* Left column: DEVELOP & CREATE sections (Image 2 layout) */}
					<div className="lg:col-span-7 flex flex-col gap-16">
						{/* DEVELOP Box */}
						<div className="corner-box rounded-xl p-8 flex flex-col gap-5 border border-[var(--border)]/30">
							{/* Corner notches */}
							<div className="corner-bracket corner-bracket-tl" />
							<div className="corner-bracket corner-bracket-tr" />
							<div className="corner-bracket corner-bracket-bl" />
							<div className="corner-bracket corner-bracket-br" />

							<h3 className="text-xl font-extrabold tracking-widest text-brand-primary uppercase">
								DEVELOP
							</h3>
							<p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
								Started creating mobile applications using Flutter, FlutterFlow,
								and Firebase and eventually switched to Web Development using
								Next.js, React, and Tailwind.
							</p>
							<div className="flex flex-col gap-3">
								<span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] opacity-60">
									Skillset & tools
								</span>
								<div className="flex flex-wrap gap-2">
									{developSkills.map((skill) => (
										<span
											key={skill}
											className="text-[11px] font-bold tracking-wide px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--badge-bg)] text-[var(--foreground)] opacity-95 transition-all duration-300 hover:border-brand-primary hover:text-brand-primary hover:-translate-y-[2px]"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</div>

						{/* CREATE Box */}
						<div className="corner-box rounded-xl p-8 flex flex-col gap-5 border border-[var(--border)]/30">
							{/* Corner notches */}
							<div className="corner-bracket corner-bracket-tl" />
							<div className="corner-bracket corner-bracket-tr" />
							<div className="corner-bracket corner-bracket-bl" />
							<div className="corner-bracket corner-bracket-br" />

							<h3 className="text-xl font-extrabold tracking-widest text-brand-primary uppercase">
								CREATE
							</h3>
							<p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
								My content creation journey evolved from a sole hustle to
								serving other creators, achieving an average reach of
								1.5-million within 90 days.
							</p>
							<div className="flex flex-col gap-3">
								<span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] opacity-60">
									Skillset & tools
								</span>
								<div className="flex flex-wrap gap-2">
									{createSkills.map((skill) => (
										<span
											key={skill}
											className="text-[11px] font-bold tracking-wide px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--badge-bg)] text-[var(--foreground)] opacity-95 transition-all duration-300 hover:border-brand-primary hover:text-brand-primary hover:-translate-y-[2px]"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Right column: Title & Portrait Display (Image 2 layout) */}
					<div className="lg:col-span-5 flex flex-col gap-8 items-center lg:items-start">
						<h2 className="text-4xl md:text-5xl font-black tracking-tight text-white select-none">
							What I do
						</h2>

						{/* Portrait Card */}
						<div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--card-bg)] shadow-[var(--card-shadow)] group/profile cursor-pointer hover:border-brand-primary/60 transition-all duration-500">
							{/* Soft neon golden overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 via-transparent to-transparent opacity-0 group-hover/profile:opacity-100 transition-opacity duration-500 z-10" />

							{/* Vector profile display */}
							<Image
								src="/profile.svg"
								alt="Ellen Grace Portrait"
								fill
								className="object-cover transition-transform duration-500 group-hover/profile:scale-105"
							/>

							{/* Corner overlay badges for premium touch */}
							<div className="absolute bottom-6 left-6 z-20 bg-background/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[var(--border)]">
								<p className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">
									Intern @ Stratpoint
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Floating Vertical Social Panel on side edge (Image 2 detail) - REMOVED */}
			</section>

			{/* ───────── CONTACT SECTION ───────── */}
			<ContactSection />
		</div>
	);
}
