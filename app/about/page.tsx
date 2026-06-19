import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "About Me | DevPortfolio",
	description:
		"Learn more about my background, technical expertise, and my philosophy as a full-stack engineer.",
	openGraph: {
		title: "About Me | DevPortfolio",
		description:
			"Learn more about my background, technical expertise, and my philosophy as a full-stack engineer.",
		type: "profile",
	},
};

export default function AboutPage() {
	const skills = [
		{
			category: "Frontend",
			items: [
				"React 19",
				"Next.js 16 (App Router)",
				"TypeScript",
				"Tailwind CSS v4",
				"HTML5 & CSS3",
			],
		},
		{
			category: "Backend & DB",
			items: ["Node.js", "Express", "Server Actions", "PostgreSQL", "MongoDB"],
		},
		{
			category: "Tools & Quality",
			items: [
				"Biome (Linter/Formatter)",
				"Git",
				"pnpm",
				"Vercel",
				"Jest / Vitest",
			],
		},
	];

	return (
		<div className="relative flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-16">
			{/* Background decoration */}
			<div className="absolute top-10 right-10 -z-10 h-[200px] w-[200px] rounded-full bg-brand-secondary/5 blur-[80px]"></div>

			<main className="w-full max-w-3xl mx-auto flex flex-col gap-12">
				<section className="flex flex-col md:flex-row items-center md:items-start gap-8">
					<div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-lg border border-[var(--border)] shrink-0 bg-brand-primary/5">
						<Image
							src="/profile.png"
							alt="Alex Chen Profile Picture"
							fill
							sizes="(max-width: 768px) 192px, 256px"
							priority
							className="object-cover"
						/>
					</div>

					<div className="flex flex-col gap-4 text-center md:text-left">
						<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
							About <span className="gradient-text">Me</span>
						</h1>
						<p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
							I am a web engineer dedicated to creating interactive, robust, and
							clean web applications. With a focus on modern architectures, I
							build user experiences that load instantly, handle data
							reactively, and look premium.
						</p>
						<p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
							When I'm not writing code, I love contributing to open-source
							software, writing technical articles about modern React patterns,
							and experimenting with standard CSS micro-animations.
						</p>
					</div>
				</section>

				{/* Skill section */}
				<section className="flex flex-col gap-6 border-t border-[var(--border)] pt-10">
					<h2 className="text-2xl font-bold tracking-tight">
						Technical Skillset
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
						{skills.map((skillGroup) => (
							<div
								key={skillGroup.category}
								className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] shadow-[var(--card-shadow)] transition-all hover:-translate-y-1 hover:border-brand-primary/30"
							>
								<h3 className="text-sm font-semibold tracking-wider uppercase text-brand-primary mb-3">
									{skillGroup.category}
								</h3>
								<ul className="flex flex-wrap sm:flex-col gap-2">
									{skillGroup.items.map((item) => (
										<li
											key={item}
											className="text-sm px-2.5 py-1 sm:px-0 sm:py-0 rounded-md border border-[var(--border)] sm:border-0 bg-[var(--background)] sm:bg-transparent font-medium"
										>
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>

				{/* Methodology / Philosophy */}
				<section className="flex flex-col gap-4 border-t border-[var(--border)] pt-10">
					<h2 className="text-2xl font-bold tracking-tight">
						My Engineering Principles
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div className="flex flex-col gap-2 p-5 rounded-xl bg-brand-primary/5 border border-brand-primary/10">
							<h4 className="font-bold text-brand-primary">
								Strict Quality Rules
							</h4>
							<p className="text-sm text-[var(--muted)]">
								Leveraging strict TypeScript and toolchains like Biome to ensure
								high code readability, stability, and zero runtime surprises.
							</p>
						</div>
						<div className="flex flex-col gap-2 p-5 rounded-xl bg-brand-secondary/5 border border-brand-secondary/10">
							<h4 className="font-bold text-brand-secondary">
								Modern UI Architecture
							</h4>
							<p className="text-sm text-[var(--muted)]">
								Emphasizing React 19's server action model and Tailwind CSS v4's
								native design tokens to build dynamic, responsive experiences.
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
