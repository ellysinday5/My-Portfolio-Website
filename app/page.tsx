import type { Metadata } from "next";
import Image from "next/image";
import ScrollToTop from "./components/layout/ScrollToTop";
import { ContactSection } from "./components/sections/ContactSection";

const skills = [
	{ name: "Next.js", icon: "⚡" },
	{ name: "React", icon: "⚛️" },
	{ name: "TypeScript", icon: "🔷" },
	{ name: "JavaScript", icon: "🟨" },
	{ name: "Tailwind CSS", icon: "🎨" },
	{ name: "HTML & CSS", icon: "🌐" },
	{ name: "Flutter", icon: "📱" },
	{ name: "FlutterFlow", icon: "🔧" },
	{ name: "Firebase", icon: "🔥" },
	{ name: "Git", icon: "📁" },
	{ name: "Figma", icon: "✏️" },
	{ name: "Canva", icon: "🖼️" },
];

const experiences = [
	{
		role: "Software Engineering Intern",
		company: "Stratpoint Technologies",
		period: "2024 – Present",
		type: "Internship",
		description:
			"Working on full-stack web development projects using modern frameworks like Next.js, React, and Tailwind CSS. Collaborating with a team to build scalable and user-friendly web applications while applying best practices in code quality and UI/UX design.",
		highlights: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Git"],
	},
	{
		role: "Freelance Content Creator",
		company: "Self-Employed",
		period: "2022 – 2023",
		type: "Freelance",
		description:
			"Built and grew a content creation brand from the ground up, eventually expanding to serve other creators. Achieved an average reach of 1.5 million within 90 days through strategic content planning and design using Figma and Canva.",
		highlights: ["Figma", "Canva", "Content Strategy", "Social Media"],
	},
];

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
		<div className="relative w-full overflow-hidden bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
			<ScrollToTop />
			{/* ───────── HERO SECTION (Image 1) ───────── */}
			<section className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col justify-between px-6 py-12 md:py-20 lg:px-16 overflow-hidden">
				{/* Floating subtle ambient glows */}
				<div className="absolute top-1/4 right-1/4 -z-5 h-[350px] w-[350px] rounded-full bg-brand-primary/10 blur-[120px] animate-float" />
				<div className="absolute bottom-1/3 left-1/3 -z-5 h-[250px] w-[250px] rounded-full bg-brand-accent/5 blur-[90px]" />

				{/* Empty spacer to align content nicely in center-bottom */}
				<div />

				{/* Main Headline Text */}
				<div className="w-full max-w-7xl mx-auto flex flex-col items-start gap-4 z-10 select-none">
					<div className="flex items-center gap-6 md:gap-10 flex-wrap">
						<h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-widest text-[var(--foreground)] leading-none">
							SINDAY
						</h1>
						{/* Circle Arrow Action Button */}
						<a
							href="#about"
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
						<p className="text-lg md:text-xl font-medium tracking-widest text-[var(--foreground)]/90">
							Software Engineering Intern
						</p>
					</div>
				</div>

				{/* Hero Bottom Bar - Social Links (Image 1) */}
				<div className="w-full max-w-7xl mx-auto flex items-center justify-between mt-12 z-10">
					{/* Scroll prompt on left */}
					<div className="hidden sm:flex items-center gap-3">
						<span className="h-px w-12 bg-[var(--muted)] opacity-50" />
						<span className="text-[10px] uppercase font-bold tracking-widest text-[var(--muted)] animate-pulse">
							Scroll for details
						</span>
					</div>

					{/* Social Icons at bottom right */}
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
			<section
				id="about"
				className="relative w-full scroll-mt-20 border-t border-[var(--border)]"
			>
				{/* ── BIO ── */}
				<div className="w-full px-6 py-20 lg:px-16">
					<div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

						{/* Left — Bio */}
						<div className="lg:col-span-7 flex flex-col gap-8 animate-fade-in-up">
							<div className="flex items-center gap-3">
								<span className="w-[4px] h-6 bg-brand-primary rounded-full" />
								<span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
									About Me
								</span>
							</div>

							<h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none">
								Hi! I'm{" "}
								<span className="gradient-text">Ellen Grace</span>
							</h2>

							<div className="flex flex-col gap-4 text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-2xl">
								<p>
									A <span className="text-[var(--foreground)] font-semibold">Software Engineering Intern</span> with
									a passion for building clean, user-friendly, and functional web applications. I enjoy
									transforming ideas into interactive digital experiences while continuously learning new
									technologies and improving my development skills.
								</p>
								<p>
									I'm currently expanding my knowledge in{" "}
									<span className="text-[var(--foreground)] font-semibold">full-stack development</span>,{" "}
									<span className="text-[var(--foreground)] font-semibold">UI/UX design</span>, and modern
									frameworks through hands-on projects and self-learning. I value writing organized code,
									paying attention to detail, and creating solutions that are both efficient and visually
									appealing.
								</p>
								<p>
									Outside of coding, I enjoy exploring new tools, taking on challenges that help me grow,
									and continuously improving myself as an aspiring software engineer. My goal is to create
									meaningful applications that make a positive impact while growing into a developer who
									never stops learning.
								</p>
							</div>

							{/* Buttons */}
							<div className="flex items-center gap-4 pt-2">
								<a
									href="#"
									aria-label="View Resume (placeholder)"
									className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-brand-primary text-[#0c0a09] font-bold text-sm tracking-wide transition-all duration-300 hover:bg-brand-secondary hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(229,154,60,0.4)]"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
											clipRule="evenodd"
										/>
									</svg>
									View Resume
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2.5"
										className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
										aria-hidden="true"
									>
										<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
									</svg>
								</a>
								<a
									href="https://www.linkedin.com/in/ellen-grace-sinday-7b33793ab/"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--border)] text-[var(--foreground)] text-sm font-semibold transition-all duration-300 hover:border-brand-primary hover:text-brand-primary hover:-translate-y-1"
								>
									Let's Connect
								</a>
							</div>
						</div>

						{/* Right — Photo */}
						<div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
							<div className="relative group/photo">
								<div className="absolute -inset-4 rounded-3xl bg-brand-primary/15 blur-2xl opacity-0 group-hover/photo:opacity-100 transition-opacity duration-500" />
								<div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-brand-primary rounded-tl-sm opacity-60 transition-all duration-300 group-hover/photo:opacity-100 group-hover/photo:w-12 group-hover/photo:h-12 group-hover/photo:-top-5 group-hover/photo:-left-5" />
								<div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-brand-primary rounded-tr-sm opacity-60 transition-all duration-300 group-hover/photo:opacity-100 group-hover/photo:w-12 group-hover/photo:h-12 group-hover/photo:-top-5 group-hover/photo:-right-5" />
								<div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-brand-primary rounded-bl-sm opacity-60 transition-all duration-300 group-hover/photo:opacity-100 group-hover/photo:w-12 group-hover/photo:h-12 group-hover/photo:-bottom-5 group-hover/photo:-left-5" />
								<div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-brand-primary rounded-br-sm opacity-60 transition-all duration-300 group-hover/photo:opacity-100 group-hover/photo:w-12 group-hover/photo:h-12 group-hover/photo:-bottom-5 group-hover/photo:-right-5" />
								<div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--border)] shadow-[var(--card-shadow)] group-hover/photo:border-brand-primary/50 group-hover/photo:shadow-[0_20px_60px_rgba(229,154,60,0.2)] transition-all duration-500">
									<Image
										src="/assets/profile/Sinday_ID.jpg"
										alt="Ellen Grace Sinday"
										fill
										sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
										priority
										className="object-cover object-top transition-transform duration-500 group-hover/photo:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
									<div className="absolute bottom-5 left-5 right-5 z-10 bg-[var(--background)]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[var(--border)]">
										<p className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">
											Intern @ Stratpoint
										</p>
										<p className="text-xs text-[var(--muted)] mt-0.5">
											Software Engineering
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* ── SKILLS ── */}
				<div className="w-full px-6 py-16 lg:px-16 border-t border-[var(--border)]">
					<div className="mx-auto max-w-7xl">
						<div className="flex flex-col gap-3 mb-10">
							<div className="flex items-center gap-3">
								<span className="w-[4px] h-6 bg-brand-primary rounded-full" />
								<span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
									Skills & Tools
								</span>
							</div>
							<h3 className="text-3xl sm:text-4xl font-black tracking-tight">
								What I Work With
							</h3>
							<p className="text-[var(--muted)] text-sm sm:text-base max-w-xl">
								Technologies and tools I've picked up through projects, internships, and self-study.
							</p>
						</div>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
							{skills.map((skill, index) => (
								<div
									key={skill.name}
									className="corner-box group flex flex-col items-center gap-2.5 p-4 rounded-xl cursor-default select-none"
									style={{ animationDelay: `${index * 0.05}s` }}
								>
									<div className="corner-bracket corner-bracket-tl" />
									<div className="corner-bracket corner-bracket-tr" />
									<div className="corner-bracket corner-bracket-bl" />
									<div className="corner-bracket corner-bracket-br" />
									<span className="text-2xl" role="img" aria-label={skill.name}>
										{skill.icon}
									</span>
									<span className="text-xs font-semibold text-center text-[var(--foreground)] group-hover:text-brand-primary transition-colors duration-300">
										{skill.name}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* ── EXPERIENCE ── */}
				<div className="w-full px-6 py-16 lg:px-16 border-t border-[var(--border)]">
					<div className="mx-auto max-w-7xl">
						<div className="flex flex-col gap-3 mb-10">
							<div className="flex items-center gap-3">
								<span className="w-[4px] h-6 bg-brand-primary rounded-full" />
								<span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
									Experience
								</span>
							</div>
							<h3 className="text-3xl sm:text-4xl font-black tracking-tight">
								Where I've Been
							</h3>
						</div>
						<div className="relative flex flex-col gap-0">
							<div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-brand-primary via-brand-primary/40 to-transparent hidden sm:block" />
							{experiences.map((exp, index) => (
								<div key={exp.company} className="relative flex gap-6 sm:gap-10 pb-12 last:pb-0">
									<div className="hidden sm:flex flex-col items-center shrink-0">
										<div className="w-10 h-10 rounded-full border-2 border-brand-primary bg-[var(--background)] flex items-center justify-center text-brand-primary font-black text-sm z-10">
											{index + 1}
										</div>
									</div>
									<div className="corner-box flex-1 rounded-2xl p-6 sm:p-8 flex flex-col gap-5 transition-all duration-300">
										<div className="corner-bracket corner-bracket-tl" />
										<div className="corner-bracket corner-bracket-tr" />
										<div className="corner-bracket corner-bracket-bl" />
										<div className="corner-bracket corner-bracket-br" />
										<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
											<div>
												<h4 className="text-lg sm:text-xl font-extrabold text-[var(--foreground)] tracking-tight">
													{exp.role}
												</h4>
												<p className="text-brand-primary font-semibold text-sm mt-0.5">
													{exp.company}
												</p>
											</div>
											<div className="flex items-center gap-2 shrink-0">
												<span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary">
													{exp.type}
												</span>
												<span className="text-xs text-[var(--muted)] font-medium">
													{exp.period}
												</span>
											</div>
										</div>
										<p className="text-sm text-[var(--muted)] leading-relaxed">
											{exp.description}
										</p>
										<div className="flex flex-wrap gap-2">
											{exp.highlights.map((tag) => (
												<span
													key={tag}
													className="text-[11px] font-bold tracking-wide px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--badge-bg)] text-[var(--foreground)] transition-all duration-300 hover:border-brand-primary hover:text-brand-primary hover:-translate-y-[2px]"
												>
													{tag}
												</span>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ───────── CONTACT SECTION ───────── */}
			<ContactSection />
		</div>
	);
}
