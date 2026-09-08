import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { projects } from "./data";

export const metadata: Metadata = {
	title: "Projects | Ellen Grace Sinday",
	description:
		"A showcase of my frontend and full-stack projects built with Next.js, React, TypeScript, and more.",
	openGraph: {
		title: "Projects | Ellen Grace Sinday",
		description:
			"A showcase of my frontend and full-stack projects built with Next.js, React, TypeScript, and more.",
		type: "website",
	},
};

export default function ProjectsPage() {
	return (
		<div className="min-h-screen bg-background text-foreground transition-colors duration-300">
			<ScrollToTop />

			{/* ── Page header ── */}
			<div className="px-4 sm:px-8 pt-10 sm:pt-14 pb-8 sm:pb-12 border-b border-border">
				<h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-none text-center">
					My{" "}
					<span className="gradient-text">Projects</span>
				</h1>
				<p className="text-center text-sm text-muted-foreground mt-3 max-w-xl mx-auto">
					A collection of projects I've built — from full-stack platforms to frontend experiences.
				</p>
			</div>

			{/* ── Alternating project list ── */}
			<div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-16 flex flex-col gap-20 sm:gap-28">
				{projects.map((project, index) => {
					const isEven = index % 2 === 0;
					const num = String(index + 1).padStart(2, "0");

					return (
						<div
							key={project.slug}
							className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 sm:gap-12 group`}
						>
							{/* Image side */}
							<div className="w-full lg:w-1/2 shrink-0">
								<Link href={`/projects/${project.slug}`} className="block">
									<div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-brand-primary/20 hover:border-brand-primary/60 transition-all duration-500 shadow-xl hover:shadow-brand-primary/15 hover:shadow-2xl">
										<Image
											src={project.imageUrl}
											alt={project.title}
											fill
											sizes="(max-width: 768px) 100vw, 50vw"
											className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
											priority={index < 2}
										/>
										{/* Soft overlay */}
										<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
										{/* Number badge */}
										<span className="absolute top-3 left-4 text-5xl font-black text-white/10 select-none pointer-events-none leading-none">
											{num}
										</span>
									</div>
								</Link>
							</div>

							{/* Content side */}
							<div className={`flex-1 flex flex-col gap-4 ${isEven ? "lg:items-start" : "lg:items-start"}`}>
								{/* Category pill */}
								<span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
									{project.category}
								</span>

								{/* Title */}
								<Link href={`/projects/${project.slug}`}>
									<h2 className="text-xl sm:text-2xl font-black leading-snug text-foreground hover:text-brand-primary transition-colors duration-200">
										{project.title}
									</h2>
								</Link>

								{/* Description */}
								<p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
									{project.description}
								</p>

								{/* Tags */}
								<div className="flex flex-wrap gap-1.5 mt-1">
									{project.tags.slice(0, 5).map((tag) => (
										<span
											key={tag}
											className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-muted text-muted-foreground border border-border"
										>
											{tag}
										</span>
									))}
									{project.tags.length > 5 && (
										<span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-muted text-muted-foreground border border-border">
											+{project.tags.length - 5}
										</span>
									)}
								</div>

								{/* Metrics */}
								{project.metrics.length > 0 && (
									<div className="flex gap-5 mt-1">
										{project.metrics.map((m) => (
											<div key={m.label} className="flex flex-col">
												<span className="text-base font-black text-brand-primary leading-none">
													{m.value}
												</span>
												<span className="text-[9px] uppercase tracking-widest text-muted-foreground font-semibold mt-0.5">
													{m.label}
												</span>
											</div>
										))}
									</div>
								)}

								{/* Links */}
								<div className="flex items-center gap-3 mt-2">
									<Link
										href={`/projects/${project.slug}`}
										className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-brand-primary text-black hover:bg-brand-primary/90 transition-all duration-200 hover:scale-105"
									>
										View Details
										<svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
											<title>Arrow</title>
											<path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
										</svg>
									</Link>
									{project.demoUrl && (
										<a
											href={project.demoUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border-2 border-brand-primary/40 text-brand-primary hover:border-brand-primary hover:bg-brand-primary/10 transition-all duration-200 hover:scale-105"
										>
											Live Demo
											<svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
												<title>External link</title>
												<path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
											</svg>
										</a>
									)}
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border-2 border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-all duration-200 hover:scale-105"
										>
											GitHub
											<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
												<title>GitHub</title>
												<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
											</svg>
										</a>
									)}
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<Footer />
		</div>
	);
}
