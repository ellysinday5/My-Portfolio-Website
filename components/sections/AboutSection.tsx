import Image from "next/image";
// import Link from "next/link";
import {
	certificates,
	type Education,
	type Experience,
	education,
	experiences,
	hobbies,
	type Skill,
	softSkills,
	technicalSkills,
} from "@/app/about/data";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { HobbiesSection } from "@/components/sections/HobbiesSection";

export function AboutSection() {
	return (
		<section
			id="about"
			className="relative w-full scroll-mt-20 border-t border-border"
		>
			{/* ── BIO ── */}
			<div className="relative w-full px-4 sm:px-6 py-14 sm:py-20 lg:px-16 overflow-hidden">
				{/* Subtle ambient glow background */}
				<div
					className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] -z-0 opacity-30"
					style={{
						background:
							"radial-gradient(ellipse at top right, rgba(236,72,153,0.18) 0%, transparent 65%)",
					}}
				/>
				<div
					className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] -z-0 opacity-20"
					style={{
						background:
							"radial-gradient(ellipse at bottom left, rgba(168,85,247,0.15) 0%, transparent 65%)",
					}}
				/>

				<div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center z-10">
					{/* Left — Portrait Photo with premium frame */}
					<div className="lg:col-span-5 flex justify-center lg:justify-start animate-fade-in-up delay-150ms">
						<div className="relative group/photo">
							{/* Outer ambient glow */}
							<div
								className="absolute -inset-6 rounded-2xl opacity-50 group-hover/photo:opacity-80 transition-opacity duration-700 -z-10"
								style={{
									background:
										"radial-gradient(ellipse at center, rgba(236,72,153,0.22) 0%, transparent 70%)",
								}}
							/>

							{/* Corner accent brackets */}
							<div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-brand-primary/70 rounded-tl-lg z-20 transition-all duration-500 group-hover/photo:border-brand-primary group-hover/photo:-top-3 group-hover/photo:-left-3" />
							<div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-brand-primary/70 rounded-tr-lg z-20 transition-all duration-500 group-hover/photo:border-brand-primary group-hover/photo:-top-3 group-hover/photo:-right-3" />
							<div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-brand-primary/70 rounded-bl-lg z-20 transition-all duration-500 group-hover/photo:border-brand-primary group-hover/photo:-bottom-3 group-hover/photo:-left-3" />
							<div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-brand-primary/70 rounded-br-lg z-20 transition-all duration-500 group-hover/photo:border-brand-primary group-hover/photo:-bottom-3 group-hover/photo:-right-3" />

							{/* Floating accent dots */}
							<div className="absolute -top-3 -right-3 w-2.5 h-2.5 rounded-full bg-brand-primary/70 animate-pulse" style={{ animationDuration: "2s" }} />
							<div className="absolute -bottom-3 -left-3 w-2 h-2 rounded-full bg-brand-primary/50 animate-pulse" style={{ animationDelay: "0.7s", animationDuration: "2.5s" }} />
							<div className="absolute top-1/3 -left-4 w-1.5 h-1.5 rounded-full bg-brand-accent/70 animate-pulse" style={{ animationDelay: "1.3s", animationDuration: "3s" }} />

							{/* Photo — portrait rectangle with rounded corners */}
							<div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] xl:w-[420px] aspect-[3/4] rounded-2xl overflow-hidden border border-brand-primary/25 shadow-[0_0_0_1px_rgba(236,72,153,0.1),0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(236,72,153,0.12)] group-hover/photo:border-brand-primary/50 group-hover/photo:shadow-[0_0_0_1px_rgba(236,72,153,0.2),0_24px_70px_rgba(0,0,0,0.5),0_0_60px_rgba(236,72,153,0.2)] transition-all duration-500">
								<Image
									src="/assets/profile/sinday-elly.jpg"
									alt="Ellen Grace Sinday"
									fill
									sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 420px"
									priority
									className="object-cover object-top transition-transform duration-700 group-hover/photo:scale-[1.03]"
								/>
								{/* Bottom gradient fade into dark */}
								<div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
							</div>

							{/* Floating badge — bottom right of photo */}
							<div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-background/90 backdrop-blur-md border border-brand-primary/30 rounded-xl px-3 py-2 shadow-lg shadow-brand-primary/10">
								<div className="flex items-center gap-2">
									<span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse shrink-0" />
									<span className="text-[10px] sm:text-xs font-bold text-brand-primary tracking-wide whitespace-nowrap">
										Available for work
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Right — Bio content */}
					<div className="lg:col-span-7 flex flex-col gap-7 animate-fade-in-up">
						{/* Section label */}
						<div className="flex items-center gap-3">
							<span className="w-1 h-6 bg-brand-primary rounded-full" />
							<span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
								About Me
							</span>
						</div>

						{/* Headline */}
						<div className="flex flex-col gap-1">
							<h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.95]">
								Hi! I'm{" "}
								<span className="gradient-text">Ellen Grace</span>
							</h2>
							<p className="text-sm sm:text-base font-semibold text-muted-foreground/80 tracking-widest uppercase mt-2">
								Aspiring Software Engineer · Frontend Developer
							</p>
						</div>

						{/* Bio paragraphs */}
						<div className="flex flex-col gap-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed border-l-2 border-brand-primary/20 pl-4">
							<p>
								I have a passion for building{" "}
								<span className="text-foreground font-semibold">clean, user-friendly</span>,
								and functional web applications. I enjoy transforming ideas into
								interactive digital experiences while continuously learning new
								technologies and improving my development skills.
							</p>
							<p>
								Currently expanding my knowledge in{" "}
								<span className="text-foreground font-semibold">full-stack development</span>,{" "}
								<span className="text-foreground font-semibold">UI/UX design</span>, and
								modern frameworks through hands-on projects and self-learning. I value
								writing organized code, paying attention to detail, and creating
								solutions that are both efficient and visually appealing.
							</p>
						</div>

						{/* Stat cards — glassy */}
						<div className="grid grid-cols-3 gap-3 sm:gap-4">
							{[
								{ value: "9", label: "Months\nLearning", suffix: "" },
								{ value: "8", label: "Projects\nBuilt", suffix: "+" },
								{ value: "5", label: "Tech\nStacks", suffix: "+" },
							].map(({ value, label, suffix }) => (
								<div
									key={label}
									className="group/stat relative flex flex-col items-start gap-1 p-3.5 sm:p-4 rounded-xl border border-brand-primary/15 bg-brand-primary/5 backdrop-blur-sm hover:border-brand-primary/35 hover:bg-brand-primary/10 transition-all duration-300 overflow-hidden"
								>
									{/* Subtle corner glow on hover */}
									<div className="absolute top-0 right-0 w-12 h-12 bg-brand-primary/5 rounded-full blur-xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 -translate-y-4 translate-x-4" />
									<span className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-primary leading-none">
										{value}
										<span className="text-brand-primary/70">{suffix}</span>
									</span>
									<span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-muted-foreground whitespace-pre-line leading-tight">
										{label}
									</span>
								</div>
							))}
						</div>

						{/* Download CV button */}
						<div className="flex items-center gap-4 pt-1">
							<a
								href="/assets/profile/Ellen_Sinday_Resume.docx.pdf"
								aria-label="Download Resume"
								className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-brand-primary text-[#0c0a09] font-bold text-sm tracking-wide transition-all duration-300 hover:bg-brand-secondary hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(236,72,153,0.4)]"
							>
								Download CV
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
									className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* ── SKILLS ── */}
			<div className="w-full px-4 sm:px-6 py-12 sm:py-16 lg:px-16 border-t border-border">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col gap-3 mb-10">
						<div className="flex items-center gap-3">
							<span className="w-1 h-6 bg-brand-primary rounded-full" />
							<span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
								Skills & Tools
							</span>
						</div>
					</div>

					{/* Technical Skills */}
					<div className="mb-10">
						<h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
							Technical Skills
						</h4>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
							{technicalSkills.map((skill: Skill) => (
								<div
									key={skill.name}
									className="corner-box group flex flex-col items-center gap-2.5 p-4 rounded-xl cursor-default select-none"
								>
									<div className="corner-bracket corner-bracket-tl" />
									<div className="corner-bracket corner-bracket-tr" />
									<div className="corner-bracket corner-bracket-bl" />
									<div className="corner-bracket corner-bracket-br" />
									<span className="text-xs font-semibold text-center text-foreground group-hover:text-brand-primary transition-colors duration-300">
										{skill.name}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Soft Skills */}
					<div>
						<h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
							Soft Skills
						</h4>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
							{softSkills.map((skill: Skill) => (
								<div
									key={skill.name}
									className="corner-box group flex flex-col items-center gap-2.5 p-4 rounded-xl cursor-default select-none"
								>
									<div className="corner-bracket corner-bracket-tl" />
									<div className="corner-bracket corner-bracket-tr" />
									<div className="corner-bracket corner-bracket-bl" />
									<div className="corner-bracket corner-bracket-br" />
									<span className="text-xs font-semibold text-center text-foreground group-hover:text-brand-primary transition-colors duration-300">
										{skill.name}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* ── CERTIFICATES / ACHIEVEMENTS ── */}
			<div className="w-full px-4 sm:px-6 py-12 sm:py-16 lg:px-16 border-t border-border">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col gap-3 mb-10">
						<div className="flex items-center gap-3">
							<span className="w-1 h-6 bg-brand-primary rounded-full" />
							<span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
								Achievements
							</span>
						</div>
						<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
							<h3 className="text-3xl sm:text-4xl font-black tracking-tight">
								Certificates and Badges
							</h3>
						</div>
					</div>

					{/* Carousel + gallery */}
					<CertificatesSection certificates={certificates} previewOnly />
				</div>
			</div>

			{/* ── HOBBIES ── */}
			<div className="w-full px-4 sm:px-6 py-12 sm:py-16 lg:px-16 border-t border-border">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col gap-3 mb-10">
						<div className="flex items-center gap-3">
							<span className="w-1 h-6 bg-brand-primary rounded-full" />
							<span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
								Beyond Code
							</span>
						</div>
						<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
							<h3 className="text-3xl sm:text-4xl font-black tracking-tight">
								Hobbies & Interests
							</h3>
							{/* <Link
								href="/hobbies"
								className="group inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-secondary transition-colors duration-300 shrink-0"
							>
								Explore more
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
									aria-hidden="true"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</Link> */}
						</div>
					</div>

					<HobbiesSection hobbies={hobbies} previewOnly />
				</div>
			</div>
			<div className="w-full px-4 sm:px-6 py-12 sm:py-16 lg:px-16 border-t border-border">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col gap-3 mb-12">
						<div className="flex items-center gap-3">
							<span className="w-1 h-6 bg-brand-primary rounded-full" />
							<span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
								Education
							</span>
						</div>
						<h3 className="text-3xl sm:text-4xl font-black tracking-tight">
							Academic Background
						</h3>
					</div>

					{/* Horizontal stepper */}
					<div className="relative">
						{/* Connecting line — visible on md+ */}
						<div className="hidden md:block absolute top-5 left-0 right-0 h-0.5 bg-linear-to-r from-brand-primary via-brand-primary/40 to-transparent z-0" />

						<div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
							{education.map((edu: Education, index: number) => (
								<div
									key={`${edu.school}-${edu.period}`}
									className="relative flex flex-col items-center md:items-start gap-4 z-10"
								>
									{/* Step dot */}
									<div className="flex items-center gap-3 md:flex-col md:items-center md:gap-0 w-full">
										<div className="shrink-0 w-10 h-10 rounded-full border-2 border-brand-primary bg-background flex items-center justify-center text-brand-primary font-black text-sm shadow-[0_0_0_4px_var(--background)]">
											{index + 1}
										</div>
										{/*
										  Mobile connector line — this used to rely on the
										  `last:hidden` CSS variant, but that checks whether
										  this div is the last child of *its own* wrapper,
										  which it always is (it's the 2nd of 2 children in
										  every iteration). That made the connector invisible
										  on every item, always. Driving it off the actual
										  `index` against the array length is what makes it
										  render for every step except the final one.
										*/}
										{index < education.length - 1 && (
											<div className="md:hidden flex-1 h-0.5 bg-linear-to-r from-brand-primary/60 to-transparent" />
										)}
									</div>

									{/* Card */}
									<div className="w-full h-full group corner-box rounded-xl p-4 flex flex-col gap-2 transition-all duration-300 hover:-translate-y-1">
										<div className="corner-bracket corner-bracket-tl" />
										<div className="corner-bracket corner-bracket-tr" />
										<div className="corner-bracket corner-bracket-bl" />
										<div className="corner-bracket corner-bracket-br" />
										<span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary self-start">
											{edu.type}
										</span>
										<h4 className="text-sm font-extrabold text-foreground leading-snug group-hover:text-brand-primary transition-colors duration-300">
											{edu.school}
										</h4>
										<p className="text-xs text-muted-foreground leading-relaxed">
											{edu.degree}
										</p>
										<span className="text-[11px] font-semibold text-brand-primary mt-1">
											{edu.period}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* ── EXPERIENCE ── */}
			<div className="w-full px-4 sm:px-6 py-12 sm:py-16 lg:px-16 border-t border-border">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col gap-3 mb-10">
						<div className="flex items-center gap-3">
							<span className="w-1 h-6 bg-brand-primary rounded-full" />
							<span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
								Experience
							</span>
						</div>
						<h3 className="text-3xl sm:text-4xl font-black tracking-tight">
							My Career Path
						</h3>
					</div>
					<div className="relative flex flex-col gap-0">
						<div className="absolute left-4.75 top-6 bottom-6 w-0.5 bg-linear-to-b from-brand-primary via-brand-primary/40 to-transparent hidden sm:block" />
						{experiences.map((exp: Experience, index: number) => (
							<div
								key={exp.company}
								className="relative flex gap-6 sm:gap-10 pb-12 last:pb-0"
							>
								<div className="hidden sm:flex flex-col items-center shrink-0">
									<div className="w-10 h-10 rounded-full border-2 border-brand-primary bg-background flex items-center justify-center text-brand-primary font-black text-sm z-10">
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
											<h4 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
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
											<span className="text-xs text-muted-foreground font-medium">
												{exp.period}
											</span>
										</div>
									</div>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{exp.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{exp.highlights.map((tag: string) => (
											<span
												key={tag}
												className="text-[11px] font-bold tracking-wide px-3 py-1 rounded-full border border-border bg-(--badge-bg) text-foreground transition-all duration-300 hover:border-brand-primary hover:text-brand-primary hover:-translate-y-0.5"
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
	);
}
