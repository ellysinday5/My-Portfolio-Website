import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "About Me | Ellen Grace Sinday",
	description:
		"Software Engineering Intern passionate about building clean, user-friendly, and functional web applications.",
	openGraph: {
		title: "About Me | Ellen Grace Sinday",
		description:
			"Software Engineering Intern passionate about building clean, user-friendly, and functional web applications.",
		type: "profile",
	},
};

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
		period: "2026 – Present",
		type: "Internship",
		description:
			"Working on full-stack web development projects using modern frameworks like Next.js, React, and Tailwind CSS. Collaborating with a team to build scalable and user-friendly web applications while applying best practices in code quality and UI/UX design.",
		highlights: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Git"],
	},
	{
		role: "Front-End Developer",
		company: "Software Research Group",
		period: "2025 – Present",
		type: "Member",
		description:
			"IDKDIDKDIDKDKDIDKD",
		highlights: [] as string[],
	},
];

export default function AboutPage() {
	return (
		<div className="relative w-full overflow-hidden bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
			{/* Ambient background glows */}
			<div className="fixed top-1/4 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-brand-primary/8 blur-[140px] pointer-events-none" />
			<div className="fixed bottom-1/3 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-brand-accent/5 blur-[100px] pointer-events-none" />

			{/* ───── HERO / BIO SECTION ───── */}
			<section className="relative w-full min-h-screen flex items-center px-6 py-20 lg:px-16">
				<div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

					{/* Left — Bio */}
					<div className="lg:col-span-7 flex flex-col gap-8 animate-fade-in-up">
						{/* Eyebrow label */}
						<div className="flex items-center gap-3">
							<span className="w-[4px] h-6 bg-brand-primary rounded-full" />
							<span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
								About Me
							</span>
						</div>

						<h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none">
							Hi! I'm{" "}
							<span className="gradient-text">Ellen Grace</span>
						</h1>

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

						{/* Resume Button */}
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
							{/* Decorative glow behind photo */}
							<div className="absolute -inset-4 rounded-3xl bg-brand-primary/15 blur-2xl opacity-0 group-hover/photo:opacity-100 transition-opacity duration-500" />

							{/* Corner bracket decoration */}
							<div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-brand-primary rounded-tl-sm opacity-60 transition-all duration-400 group-hover/photo:opacity-100 group-hover/photo:w-12 group-hover/photo:h-12 group-hover/photo:-top-5 group-hover/photo:-left-5" />
							<div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-brand-primary rounded-tr-sm opacity-60 transition-all duration-400 group-hover/photo:opacity-100 group-hover/photo:w-12 group-hover/photo:h-12 group-hover/photo:-top-5 group-hover/photo:-right-5" />
							<div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-brand-primary rounded-bl-sm opacity-60 transition-all duration-400 group-hover/photo:opacity-100 group-hover/photo:w-12 group-hover/photo:h-12 group-hover/photo:-bottom-5 group-hover/photo:-left-5" />
							<div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-brand-primary rounded-br-sm opacity-60 transition-all duration-400 group-hover/photo:opacity-100 group-hover/photo:w-12 group-hover/photo:h-12 group-hover/photo:-bottom-5 group-hover/photo:-right-5" />

							{/* Photo frame */}
							<div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--border)] shadow-[var(--card-shadow)] group-hover/photo:border-brand-primary/50 group-hover/photo:shadow-[0_20px_60px_rgba(229,154,60,0.2)] transition-all duration-500">
								<Image
									src="/assets/profile/Sinday_ID.jpg"
									alt="Ellen Grace Sinday"
									fill
									sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
									priority
									className="object-cover object-top transition-transform duration-500 group-hover/photo:scale-105"
								/>
								{/* Subtle gradient overlay at bottom */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

								{/* Badge */}
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
			</section>

			{/* ───── SKILLS SECTION ───── */}
			<section className="relative w-full py-20 px-6 lg:px-16 border-t border-[var(--border)]">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col gap-3 mb-12">
						<div className="flex items-center gap-3">
							<span className="w-[4px] h-6 bg-brand-primary rounded-full" />
							<span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
								Skills & Tools
							</span>
						</div>
						<h2 className="text-3xl sm:text-4xl font-black tracking-tight">
							What I Work With
						</h2>
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
			</section>

			{/* ───── EXPERIENCE SECTION ───── */}
			<section className="relative w-full py-20 px-6 lg:px-16 border-t border-[var(--border)]">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col gap-3 mb-12">
						<div className="flex items-center gap-3">
							<span className="w-[4px] h-6 bg-brand-primary rounded-full" />
							<span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
								Experience
							</span>
						</div>
						<h2 className="text-3xl sm:text-4xl font-black tracking-tight">
							Where I've Been
						</h2>
					</div>

					{/* Timeline */}
					<div className="relative flex flex-col gap-0">
						{/* Vertical line */}
						<div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-brand-primary via-brand-primary/40 to-transparent hidden sm:block" />

						{experiences.map((exp, index) => (
							<div key={exp.company} className="relative flex gap-6 sm:gap-10 pb-12 last:pb-0">
								{/* Timeline dot */}
								<div className="hidden sm:flex flex-col items-center shrink-0">
									<div className="w-10 h-10 rounded-full border-2 border-brand-primary bg-[var(--background)] flex items-center justify-center text-brand-primary font-black text-sm z-10">
										{index + 1}
									</div>
								</div>

								{/* Card */}
								<div className="corner-box flex-1 rounded-2xl p-6 sm:p-8 flex flex-col gap-5 transition-all duration-300">
									<div className="corner-bracket corner-bracket-tl" />
									<div className="corner-bracket corner-bracket-tr" />
									<div className="corner-bracket corner-bracket-bl" />
									<div className="corner-bracket corner-bracket-br" />

									{/* Header */}
									<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
										<div>
											<h3 className="text-lg sm:text-xl font-extrabold text-[var(--foreground)] tracking-tight">
												{exp.role}
											</h3>
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

									{/* Description */}
									<p className="text-sm text-[var(--muted)] leading-relaxed">
										{exp.description}
									</p>

									{/* Tech tags */}
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
			</section>
		</div>
	);
}
