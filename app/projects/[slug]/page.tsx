import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../data";

interface Props {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		return {
			title: "Project Not Found",
		};
	}

	return {
		title: `${project.title} | DevPortfolio`,
		description: project.description,
		openGraph: {
			title: `${project.title} | DevPortfolio`,
			description: project.description,
			type: "website",
		},
	};
}

export default async function ProjectDetailPage({ params }: Props) {
	const { slug } = await params;

	// Simulated lookup delay
	const project = await new Promise<(typeof projects)[0] | undefined>(
		(resolve) => {
			setTimeout(() => {
				resolve(projects.find((p) => p.slug === slug));
			}, 50);
		},
	);

	if (!project) {
		notFound();
	}

	return (
		<div className="relative flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-16">
			{/* Background gradients */}
			<div className="absolute top-1/4 left-1/3 -z-10 h-[300px] w-[300px] rounded-full bg-brand-secondary/5 blur-[100px]"></div>

			<main className="w-full max-w-3xl mx-auto flex flex-col gap-10">
				{/* Back Link */}
				<Link
					href="/projects"
					className="self-start text-sm font-medium text-[var(--muted)] hover:text-brand-primary transition-colors flex items-center gap-1.5"
				>
					← Back to Projects
				</Link>

				{/* Title & Info */}
				<div className="flex flex-col gap-4">
					<h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
						{project.title}
					</h1>
					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag) => (
							<span
								key={tag}
								className="text-xs px-3 py-1 rounded-full border border-brand-primary/20 bg-brand-primary/5 font-semibold text-brand-primary"
							>
								{tag}
							</span>
						))}
					</div>
				</div>

				{/* Feature Image */}
				<div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-[var(--border)] bg-brand-primary/5">
					<Image
						src={project.imageUrl}
						alt={project.title}
						fill
						sizes="(max-width: 1024px) 100vw, 768px"
						priority
						className="object-cover"
					/>
				</div>

				{/* Info Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
					<div className="md:col-span-2 flex flex-col gap-6">
						<h2 className="text-xl font-bold tracking-tight">
							Project Overview
						</h2>
						<p className="text-base text-[var(--muted)] leading-relaxed whitespace-pre-wrap">
							{project.details}
						</p>
					</div>

					<div className="flex flex-col gap-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] shadow-[var(--card-shadow)] height-fit">
						<h3 className="text-sm font-semibold tracking-wider uppercase text-brand-primary">
							Project Performance
						</h3>

						<div className="flex flex-col gap-4">
							{project.metrics.map((metric) => (
								<div
									key={metric.label}
									className="flex flex-col border-b border-[var(--border)] pb-2 last:border-0 last:pb-0"
								>
									<span className="text-xs text-[var(--muted)]">
										{metric.label}
									</span>
									<span className="text-lg font-bold">{metric.value}</span>
								</div>
							))}
						</div>

						<div className="flex flex-col gap-2 pt-4 border-t border-[var(--border)]">
							<a
								href={project.demoUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex h-10 items-center justify-center rounded-lg bg-[var(--color-brand-primary)] px-4 text-xs font-semibold text-white transition-all hover:bg-[var(--color-brand-primary)]/90"
							>
								Visit Live Site
							</a>
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex h-10 items-center justify-center rounded-lg border border-[var(--border)] bg-transparent px-4 text-xs font-semibold transition-all hover:border-brand-primary hover:bg-brand-primary/5"
							>
								View Codebase
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
