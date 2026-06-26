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
	const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
	const nextProject =
		projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

	return (
		<div className="min-h-screen bg-[#0a0a0a] text-white">
			{/* ── Nav ── */}
			<nav className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-white/[0.07]">
				<Link
					href="/projects"
					className="text-[11px] tracking-[0.12em] uppercase font-medium text-white/40 hover:text-white transition-colors duration-200 flex items-center gap-2"
				>
					← Back to Projects
				</Link>
			</nav>

			{/* ── Hero ── */}
			<section className="px-6 sm:px-10 pt-10 max-w-7xl mx-auto">
				{/* Number + Title */}
				<div className="flex items-start gap-5 mb-6">
					<span className="text-[clamp(3rem,8vw,5.5rem)] font-black leading-none text-white/6 tracking-tighter select-none shrink-0 mt-1">
						{displayNumber}
					</span>
					<div className="flex-1 pt-1">
						<h1 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black tracking-tight leading-[1.1] text-white">
							{project.title}
						</h1>
						<p className="text-[10px] tracking-[0.15em] uppercase text-white/35 font-medium mt-2">
							{project.category}
						</p>
					</div>
				</div>

				{/* Tags */}
				<div className="flex flex-wrap gap-2 mb-8">
					{project.tags.map((tag: string) => (
						<span
							key={tag}
							className="text-[10px] tracking-widest uppercase font-600 px-3 py-1 border border-white/10 rounded-sm text-white/45 bg-white/2"
						>
							{tag}
						</span>
					))}
				</div>
			</section>

			{/* ── Main content: Features left, Image+CTA right ── */}
			<section className="max-w-7xl mx-auto px-6 sm:px-10 pt-4 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

				{/* LEFT: Overview + Features & Functionalities */}
				<div>
					{/* Overview */}
					<div className="flex items-center gap-3 mb-4">
						<span className="block w-8 h-px bg-white/20" />
						<span className="text-[10px] tracking-[0.15em] uppercase text-white/30 font-semibold">
							Overview
						</span>
					</div>
					<p className="text-[14px] leading-[1.9] text-white/55 whitespace-pre-wrap max-w-[65ch] mb-10">
						{project.details}
					</p>

					{/* Features & Functionalities */}
					<div className="flex items-center gap-3 mb-6">
						<span className="block w-8 h-px bg-white/20" />
						<span className="text-[10px] tracking-[0.15em] uppercase text-white/30 font-semibold">
							Features &amp; Functionalities
						</span>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
						{project.metrics.map((metric) => (
							<div key={metric.label} className="flex gap-3 items-start">
								{/* Icon placeholder */}
								<div className="shrink-0 w-8 h-8 rounded-lg border border-white/10 bg-white/4 flex items-center justify-center mt-0.5">
									<span className="text-white/40 text-[11px] font-black">
										{metric.label.charAt(0)}
									</span>
								</div>
								<div>
									<p className="text-[12px] font-bold text-white leading-snug mb-0.5">
										{metric.label}
									</p>
									<p className="text-[11px] leading-relaxed text-white/40">
										{metric.value}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* RIGHT: Image + CTA + Performance */}
				<div className="flex flex-col gap-6 lg:sticky lg:top-8">
					{/* Feature Image */}
					<div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111]">
						<Image
							src={project.imageUrl}
							alt={project.title}
							fill
							sizes="(max-width: 1280px) 100vw, 640px"
							priority
							className="object-cover opacity-90"
						/>
						<div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0a0a0a]/50" />
					</div>

					{/* Description under image */}
					<p className="text-[13px] leading-relaxed text-white/40">
						{project.description}
					</p>

					{/* CTA buttons */}
					<div className="flex flex-col gap-2">
						<a
							href={project.demoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex h-10 items-center justify-center rounded-lg bg-white text-[#0a0a0a] text-[11px] font-bold tracking-widest uppercase hover:opacity-85 transition-opacity duration-200"
						>
							Visit Live Site ↗
						</a>
						{/* <a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex h-10 items-center justify-center rounded-lg border border-white/10 text-white/55 text-[11px] font-semibold tracking-widest uppercase hover:border-white/25 hover:text-white transition-all duration-200"
						>
							View Codebase
						</a> */}
					</div>

					{/* Performance metrics */}
					{/* <div className="border border-white/[0.07] rounded-2xl p-6 bg-white/2">
						<span className="block text-[10px] tracking-[0.15em] uppercase text-white/25 font-semibold mb-5">
							Performance
						</span>
						<div className="flex flex-col gap-4">
							{project.metrics.map((metric, i: number) => (
								<div
									key={metric.label}
									className={`pb-4 ${i < project.metrics.length - 1 ? "border-b border-white/6" : ""}`}
								>
									<span className="block text-[10px] tracking-widest uppercase text-white/25 mb-1">
										{metric.label}
									</span>
									<span className="text-2xl font-bold text-white tracking-tight">
										{metric.value}
									</span>
								</div>
							))}
						</div>
					</div> */}
				</div>
			</section>

			{/* ── Prev / Next ── */}
			<div className="border-t border-white/[0.07] grid grid-cols-2">
				{prevProject ? (
					<Link
						href={`/projects/${prevProject.slug}`}
						className="px-6 sm:px-10 py-8 border-r border-white/[0.07] hover:bg-white/2 transition-colors duration-200 group"
					>
						<span className="block text-[10px] tracking-[0.12em] uppercase text-white/20 mb-1 group-hover:text-white/35 transition-colors">
							← Previous
						</span>
						<span className="text-sm font-semibold text-white/60 group-hover:text-white/85 transition-colors">
							{prevProject.title}
						</span>
					</Link>
				) : (
					<div />
				)}

				{nextProject ? (
					<Link
						href={`/projects/${nextProject.slug}`}
						className="px-6 sm:px-10 py-8 text-right hover:bg-white/2 transition-colors duration-200 group"
					>
						<span className="block text-[10px] tracking-[0.12em] uppercase text-white/20 mb-1 group-hover:text-white/35 transition-colors">
							Next →
						</span>
						<span className="text-sm font-semibold text-white/60 group-hover:text-white/85 transition-colors">
							{nextProject.title}
						</span>
					</Link>
				) : (
					<div />
				)}
			</div>
		</div>
	);
}