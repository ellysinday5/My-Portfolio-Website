import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./data";

export const metadata: Metadata = {
	title: "Projects | Ellen Grace Sinday",
	description:
		"Browse my engineering projects, web applications, and design systems built using modern technologies.",
	openGraph: {
		title: "Projects | Ellen Grace Sinday",
		description:
			"Browse my engineering projects, web applications, and design systems built using modern technologies.",
		type: "website",
	},
};

export default async function ProjectsPage() {
	// Simulating an async load (e.g. database query or file read)
	const allProjects = await new Promise<typeof projects>((resolve) => {
		setTimeout(() => resolve(projects), 100);
	});

	return (
		<div className="relative w-full min-h-screen bg-[color:var(--background)] px-6 py-16 lg:px-16">
			{/* Background visual element */}
			<div className="absolute top-1/3 left-10 -z-10 h-[250px] w-[250px] rounded-full bg-brand-primary/5 blur-[90px]"></div>

			<main className="w-full max-w-7xl mx-auto flex flex-col gap-16">
				{/* Header */}
				<div className="flex flex-col gap-4">
					<h1 className="text-5xl sm:text-6xl font-black tracking-tight text-[var(--foreground)]">
						Selected <span className="gradient-text">Projects</span>
					</h1>
					<p className="text-lg text-[color:var(--muted)] max-w-3xl leading-relaxed">
						A curated showcase of applications highlighting my capabilities in
						full-stack development, UI design, and modern web technologies.
					</p>
				</div>

				{/* Projects Grid - Numbered Layout */}
				<section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{allProjects.map((project, index) => {
						const projectNumber = String(index + 1).padStart(2, "0");

						return (
							<Link
								key={project.slug}
								href={`/projects/${project.slug}`}
								className="group relative overflow-hidden rounded-2xl border border-(--border) bg-(--card-bg) shadow-(--card-shadow) transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/50 hover:shadow-lg"
							>
								{/* Card Container */}
								<div className="relative h-full min-h-96 flex flex-col overflow-hidden">
									{/* Image Background */}
									<div className="absolute inset-0 w-full h-full">
										<Image
											src={project.imageUrl}
											alt={project.title}
											fill
											sizes="(max-width: 1024px) 100vw, 50vw"
											className="object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										{/* Dark overlay */}
										<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
									</div>

									{/* Number Badge - Top Left */}
									<div className="absolute top-6 left-6 z-20 flex items-center justify-center">
										<span className="text-6xl sm:text-7xl font-black text-white/20 group-hover:text-white/30 transition-colors duration-300">
											{projectNumber}
										</span>
									</div>

									{/* Content - Bottom */}
									<div className="relative z-10 mt-auto p-8 flex flex-col gap-4">
										{/* Category */}
										{project.category && (
											<div className="flex items-center gap-2">
												<span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
													{project.category}
												</span>
												<span className="w-1 h-1 rounded-full bg-brand-primary" />
											</div>
										)}

										{/* Title */}
										<div className="flex flex-col gap-2">
											<h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-brand-primary transition-colors duration-200">
												{project.title}
											</h3>

											{/* Description */}
											<p className="text-sm text-(--muted) leading-relaxed line-clamp-2">
												{project.description}
											</p>
										</div>

										{/* Tech Tags */}
										<div className="flex flex-wrap gap-2 pt-4">
											{project.tags.slice(0, 2).map((tag) => (
												<span
													key={tag}
													className="text-xs px-2 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 font-semibold text-brand-primary"
												>
													{tag}
												</span>
											))}
											{project.tags.length > 2 && (
												<span className="text-xs px-2 py-1 rounded-full border border-(--border) bg-(--badge-bg) font-semibold text-(--muted)">
													+{project.tags.length - 2}
												</span>
											)}
										</div>

										{/* Arrow Indicator */}
										<div className="flex items-center gap-2 pt-2">
											<span className="text-xs font-bold uppercase tracking-widest text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												View Project
											</span>
											<span className="inline-block text-brand-primary text-xl transition-transform duration-300 group-hover:translate-x-1">
												→
											</span>
										</div>
									</div>
								</div>
							</Link>
						);
					})}
				</section>
			</main>
		</div>
	);
}
