import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./data";

export const metadata: Metadata = {
	title: "Projects | DevPortfolio",
	description:
		"Browse my engineering projects, web applications, and experiment boards built using modern technologies.",
	openGraph: {
		title: "Projects | DevPortfolio",
		description:
			"Browse my engineering projects, web applications, and experiment boards built using modern technologies.",
		type: "website",
	},
};

export default async function ProjectsPage() {
	// Simulating an async load (e.g. database query or file read)
	const allProjects = await new Promise<typeof projects>((resolve) => {
		setTimeout(() => resolve(projects), 100);
	});

	return (
		<div className="relative flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-16">
			{/* Background visual element */}
			<div className="absolute top-1/3 left-10 -z-10 h-[250px] w-[250px] rounded-full bg-brand-primary/5 blur-[90px]"></div>

			<main className="w-full max-w-5xl mx-auto flex flex-col gap-10">
				<div className="flex flex-col gap-4 text-center sm:text-left">
					<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
						Selected <span className="gradient-text">Projects</span>
					</h1>
					<p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl">
						A curated showcase of applications highlighting my capabilities in
						performance, UI styling, and robust modern state handling.
					</p>
				</div>

				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{allProjects.map((project) => (
						<article
							key={project.slug}
							className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] shadow-[var(--card-shadow)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-primary/40 hover:shadow-lg"
						>
							<div className="relative aspect-video w-full overflow-hidden bg-brand-primary/5 border-b border-[var(--border)]">
								<Image
									src={project.imageUrl}
									alt={`${project.title} Preview`}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>

							<div className="flex flex-col flex-1 p-6">
								<h3 className="text-lg font-bold group-hover:text-brand-primary transition-colors">
									{project.title}
								</h3>

								<p className="text-sm text-[var(--muted)] mt-2 line-clamp-3 leading-relaxed flex-1">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-1.5 mt-4">
									{project.tags.slice(0, 3).map((tag) => (
										<span
											key={tag}
											className="text-xs px-2.5 py-0.5 rounded-full border border-brand-secondary/20 bg-brand-secondary/5 font-semibold text-brand-secondary"
										>
											{tag}
										</span>
									))}
									{project.tags.length > 3 && (
										<span className="text-xs px-2.5 py-0.5 rounded-full border border-[var(--border)] bg-[var(--background)] font-medium text-[var(--muted)]">
											+{project.tags.length - 3} more
										</span>
									)}
								</div>

								<div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between">
									<Link
										href={`/projects/${project.slug}`}
										className="text-xs font-semibold text-brand-primary hover:text-brand-primary/80 transition-colors flex items-center gap-1"
									>
										View Details
										<span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
											→
										</span>
									</Link>

									<div className="flex items-center gap-3">
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
											title="GitHub Repository"
										>
											Code
										</a>
										<a
											href={project.demoUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
											title="Live Demo"
										>
											Demo
										</a>
									</div>
								</div>
							</div>
						</article>
					))}
				</section>
			</main>
		</div>
	);
}
