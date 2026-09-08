import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectImageCarousel } from "@/components/sections/ProjectDetailsImages";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "../data";

interface Props {
	params: Promise<{ slug: string }>;
}

const tagColors: Record<number, string> = {
	0: "bg-blue-500",
	1: "bg-purple-500",
	2: "bg-emerald-500",
	3: "bg-orange-500",
};

function TagDots({ tags }: { tags: string[] }) {
	return (
		<div className="flex items-center gap-1.5">
			{tags.slice(0, 4).map((tag: string, i: number) => (
				<span
					key={tag}
					className={`w-4 h-4 rounded-full flex items-center justify-center text-[6px] font-black uppercase ${tagColors[i] ?? "bg-zinc-500"}`}
					title={tag}
				>
					{tag.charAt(0)}
				</span>
			))}
			{tags.length > 4 && (
				<span className="text-[9px] text-white/30 font-bold">
					+{tags.length - 4}
				</span>
			)}
		</div>
	);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		return { title: "Project Not Found" };
	}

	return {
		title: `${project.title} | Ellen Grace Sinday`,
		description: project.description,
		openGraph: {
			title: `${project.title} | Ellen Grace Sinday`,
			description: project.description,
			type: "website",
		},
	};
}

export default async function ProjectDetailPage({ params }: Props) {
	const { slug } = await params;

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

	const projectIndex = projects.findIndex((p) => p.slug === slug);
	const displayNumber = String(projectIndex + 1).padStart(2, "0");

	const otherProjects = projects
		.map((p, idx) => ({ ...p, originalIndex: idx }))
		.filter((p) => p.slug !== slug);

	// Prefer imageUrls array; fall back to imageUrl string
	const dynamicImages = (project.imageUrls ?? project.imageUrl) as
		| string
		| string[];

	return (
		<div className="min-h-screen bg-background text-foreground">
			{/* ── Nav ── */}
			<nav className="w-full border-b border-border">
				<div className="max-w-[1600px] mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
					<Link
						href="/projects"
						className="group inline-flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							className="transition-transform duration-200 group-hover:-translate-x-0.5"
						>
							<title>Back</title>
							<path
								d="M10 12L6 8L10 4"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						Back to Projects
					</Link>
				</div>
			</nav>

			{/* ── Hero Header ── */}
			<section className="px-6 sm:px-10 pt-10 max-w-[1600px] mx-auto">
				<div className="flex items-start gap-5 mb-6">
					<span className="text-[clamp(3rem,8vw,5.5rem)] font-black leading-none text-foreground/10 tracking-tighter select-none shrink-0 mt-1">
						{displayNumber}
					</span>
					<div className="flex-1 pt-1">
						<h1 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black tracking-tight leading-[1.1] text-foreground">
							{project.title}
						</h1>
						<p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium mt-2">
							{project.category}
						</p>
					</div>
				</div>

				<div className="flex flex-wrap gap-2 mb-8">
					{project.tags.map((tag: string) => (
						<span
							key={tag}
							className="text-[10px] tracking-widest uppercase font-semibold px-3 py-1 border border-border rounded-sm text-muted-foreground bg-foreground/5"
						>
							{tag}
						</span>
					))}
				</div>
			</section>

			{/* ── Main content ── */}
			<section className="max-w-[1600px] mx-auto px-6 sm:px-10 pt-4 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
				{/* LEFT: Description + Features */}
				<div className="lg:col-span-6 flex flex-col gap-10">
					<div>
						<div className="flex items-center gap-3 mb-4">
							<span className="block w-8 h-px bg-brand-primary" />
							<span className="text-[10px] tracking-[0.15em] uppercase text-brand-primary font-bold">
								Project Overview
							</span>
						</div>
						<p className="text-[15px] leading-[1.8] text-white/70 whitespace-pre-wrap max-w-[65ch]">
							{project.details || project.description}
						</p>
					</div>

					{project.features && project.features.length > 0 && (
						<div>
							<div className="flex items-center gap-3 mb-6">
								<span className="block w-8 h-px bg-brand-primary" />
								<span className="text-[10px] tracking-[0.15em] uppercase text-brand-primary font-bold">
									Features &amp; Functionalities
								</span>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
								{project.features.map((feature) => (
									<div
										key={feature.title}
										className="p-5 rounded-2xl border border-white/5 bg-white/2 hover:border-white/10 hover:bg-white/4 transition-all duration-300"
									>
										<h3 className="text-[13px] font-bold text-white mb-2 flex items-center gap-2">
											<span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
											{feature.title}
										</h3>
										<p className="text-[12px] leading-relaxed text-white/50">
											{feature.description}
										</p>
									</div>
								))}
							</div>
						</div>
					)}
				</div>

				{/* RIGHT: Image Carousel Container + CTA */}
				<div className="lg:col-span-6 flex flex-col gap-6 lg:sticky lg:top-8">
					<div className="w-full rounded-2xl border border-brand-primary bg-[#111] shadow-2xl overflow-hidden group/img">
						<ProjectImageCarousel
							imagesData={dynamicImages}
							title={project.title}
						/>
					</div>

					<Card className="border-2 border-brand-primary bg-white/2 p-6 rounded-2xl shadow-none">
						<CardHeader className="p-0 mb-5">
							<CardTitle className="text-[10px] tracking-[0.15em] uppercase text-white/30 font-semibold">
								Project Links
							</CardTitle>
						</CardHeader>
						<CardContent className="p-0 flex flex-col sm:flex-row lg:flex-col gap-3">
							{project.demoUrl ? (
								<a
									href={project.demoUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-1 items-center justify-center py-4 rounded-xl border-2 border-brand-primary bg-white text-[#0a0a0a] text-[11px] font-bold tracking-widest uppercase hover:bg-white/90 hover:border-brand-secondary transition-all duration-300 hover:scale-[1.01]"
								>
									Visit Live Site ↗
								</a>
							) : (
								<div className="flex flex-1 items-center justify-center py-4 rounded-xl border-2 border-brand-primary/30 bg-white/1 text-white/30 text-[11px] font-bold tracking-widest uppercase">
									Live Demo Private
								</div>
							)}
							{project.githubUrl ? (
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-1 items-center justify-center py-4 rounded-xl border-2 border-brand-primary text-white/70 text-[11px] font-bold tracking-widest uppercase hover:bg-white/5 hover:border-brand-secondary transition-all duration-300 hover:scale-[1.01]"
								>
									View Repository Code ↗
								</a>
							) : (
								<div className="flex flex-1 items-center justify-center py-4 rounded-xl border-2 border-brand-primary/30 bg-white/1 text-white/30 text-[11px] font-bold tracking-widest uppercase">
									Repository Private
								</div>
							)}
						</CardContent>
					</Card>
				</div>
			</section>

			{/* ── More Projects Grid ── */}
			<section className="w-full py-16 border-t border-white/5">
				<div className="max-w-[1600px] mx-auto px-6 sm:px-10">
					<div className="flex items-center gap-3 mb-8">
						<span className="block w-8 h-px bg-brand-primary" />
						<span className="text-[10px] tracking-[0.15em] uppercase text-brand-primary font-bold">
							Other Projects
						</span>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
						{otherProjects.map((proj) => {
							const num = String(proj.originalIndex + 1).padStart(2, "0");

							const coverSrc = Array.isArray(proj.imageUrls)
								? proj.imageUrls[0]
								: (proj.imageUrl ?? undefined);

							return (
								<Link key={proj.slug} href={`/projects/${proj.slug}`}>
									<Card className="group relative flex flex-col overflow-hidden h-55 bg-[#111] rounded-2xl border-2 border-brand-primary hover:border-brand-secondary hover:scale-[1.02] transition-all duration-300 shadow-none">
										<div className="absolute inset-0">
											{coverSrc && (
												<Image
													src={coverSrc}
													alt={proj.title}
													fill
													sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
													className="object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-35"
												/>
											)}
											<div className="absolute inset-0 bg-[#111]/70" />
										</div>

										<span className="absolute top-3 left-5 text-7xl font-black tracking-tighter text-white/10 select-none pointer-events-none z-0">
											{num}
										</span>

										<div className="absolute inset-x-0 bottom-0 z-10 p-5 pt-12 bg-linear-to-t from-[#111] via-[#111]/90 to-transparent">
											<div className="mb-2">
												<CardTitle className="text-[14px] font-bold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
													{proj.title}
												</CardTitle>
												<p className="text-[9px] tracking-[0.15em] uppercase text-white/40 font-semibold mt-0.5">
													{proj.category}
												</p>
											</div>
											<div className="flex flex-col gap-3">
												<p className="text-[11px] leading-relaxed text-white/45 line-clamp-2">
													{proj.description}
												</p>
												<TagDots tags={proj.tags} />
											</div>
										</div>
										<div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/15 transition-all duration-300 pointer-events-none z-20" />
									</Card>
								</Link>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
}
