"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/app/projects/data";

interface ProjectCardProps {
	project: Project;
	index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
	const cardRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const el = cardRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(el);
				}
			},
			{ threshold: 0.1, rootMargin: "50px" },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<article
			ref={cardRef}
			className={`group flex flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--card-bg)] shadow-[color:var(--card-shadow)] overflow-hidden card-hover ${
				isVisible ? "animate-fade-in-up" : "opacity-0"
			}`}
			style={{ animationDelay: `${index * 0.07}s` }}
		>
			{/* Thumbnail */}
			<div className="relative aspect-[16/10] w-full overflow-hidden bg-[color:var(--badge-bg)] border-b border-[color:var(--border)]">
				<Image
					src={project.imageUrl}
					alt={`${project.title} Preview`}
					fill
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
					className="object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				{/* Category pill */}
				{project.category && (
					<span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[color:var(--background)]/80 backdrop-blur-sm border border-[color:var(--border)] text-[color:var(--muted)]">
						{project.category}
					</span>
				)}
			</div>

			{/* Content */}
			<div className="flex flex-col flex-1 p-5 sm:p-6">
				<h3 className="text-base sm:text-lg font-bold tracking-tight group-hover:text-brand-primary transition-colors duration-200 line-clamp-1">
					{project.title}
				</h3>

				<p className="text-sm text-[color:var(--muted)] mt-2 line-clamp-2 leading-relaxed flex-1">
					{project.description}
				</p>

				{/* Tech badges */}
				<div className="flex flex-wrap gap-1.5 mt-4">
					{project.tags.slice(0, 3).map((tag) => (
						<span
							key={tag}
							className="text-[11px] px-2.5 py-0.5 rounded-full border border-brand-secondary/20 bg-brand-secondary/5 font-semibold text-brand-secondary"
						>
							{tag}
						</span>
					))}
					{project.tags.length > 3 && (
						<span className="text-[11px] px-2.5 py-0.5 rounded-full border border-[color:var(--border)] bg-[color:var(--badge-bg)] font-medium text-[color:var(--muted)]">
							+{project.tags.length - 3}
						</span>
					)}
				</div>

				{/* Actions */}
				<div className="mt-5 pt-4 border-t border-[color:var(--border)] flex items-center justify-between">
					<Link
						href={`/projects/${project.slug}`}
						className="text-xs font-semibold text-brand-primary hover:text-brand-primary/80 transition-colors flex items-center gap-1.5"
					>
						View Details
						<span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
							→
						</span>
					</Link>

					<div className="flex items-center gap-3">
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
							title="GitHub Repository"
							aria-label="GitHub Repository"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-4 h-4"
								aria-label="GitHub"
							>
								<title>GitHub</title>
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
						<a
							href={project.demoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
							title="Live Demo"
							aria-label="Live Demo"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round"
								className="w-4 h-4"
								aria-label="External Link"
							>
								<title>Live Demo</title>
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
								<polyline points="15 3 21 3 21 9" />
								<line x1="10" y1="14" x2="21" y2="3" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</article>
	);
}
