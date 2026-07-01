"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card, CardTitle } from "@/components/ui/card";
import { projects } from "./data";

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

export default function ProjectsPage() {
	const [current, setCurrent] = useState(0);

	const prev = () =>
		setCurrent((c) => (c - 1 + projects.length) % projects.length);
	const next = () => setCurrent((c) => (c + 1) % projects.length);

	const leftIdx = (current - 1 + projects.length) % projects.length;
	const rightIdx = (current + 1) % projects.length;

	return (
		<div className="min-h-screen bg-[#0a0a0a] text-white">
			{/* ── Page header ── */}
			<div className="px-8 pt-14 pb-10 border-b border-white/8">
				<h1 className="text-4xl sm:text-5xl font-black  tracking-tight leading-none flex items-stretch justify-center gap-4 px-4">
					My <span className="gradient-text">Projects </span>
				</h1>
			</div>

			{/* ── Carousel (custom — preserved exactly) ── */}
			<div className="relative w-full bg-[#0a0a0a] py-10 overflow-hidden">
				{/* 3-slot track */}
				<div className="flex items-stretch justify-center gap-4 px-4">
					{/* LEFT peek */}
					<div
						key={`left-${leftIdx}`}
						className="hidden sm:block shrink-0 relative overflow-hidden rounded-xl opacity-55 transition-all duration-500 animate-carousel-swap"
						style={{ width: "24vw", aspectRatio: "3/4", maxHeight: "420px" }}
					>
						<Image
							src={projects[leftIdx].imageUrl}
							alt={projects[leftIdx].title}
							fill
							sizes="24vw"
							className="object-cover object-center"
						/>
						<div className="absolute inset-0 bg-black/35" />
					</div>

					{/* CENTER */}
					<div
						key={`center-${current}`}
						className="relative shrink-0 overflow-hidden rounded-xl group shadow-2xl z-10 transition-all duration-500 animate-carousel-swap"
						style={{
							width: "44vw",
							aspectRatio: "3/4",
							maxHeight: "480px",
							minWidth: "260px",
						}}
					>
						<Image
							src={projects[current].imageUrl}
							alt={projects[current].title}
							fill
							sizes="44vw"
							priority
							className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
						/>
						<div className="absolute inset-0 bg-black/15" />
						<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-7">
							<div>
								<p className="text-[9px] tracking-[0.18em] uppercase text-white/45 mb-1.5 font-medium">
									{projects[current].category}
								</p>
								<p className="text-white text-4xl  font-black tracking-tight leading-tight">
									{projects[current].title}
								</p>
							</div>
						</div>
					</div>

					{/* RIGHT peek */}
					<div
						key={`right-${rightIdx}`}
						className="hidden sm:block shrink-0 relative overflow-hidden rounded-xl opacity-55 transition-all duration-500 animate-carousel-swap"
						style={{ width: "24vw", aspectRatio: "3/4", maxHeight: "420px" }}
					>
						<Image
							src={projects[rightIdx].imageUrl}
							alt={projects[rightIdx].title}
							fill
							sizes="24vw"
							className="object-cover object-center"
						/>
						<div className="absolute inset-0 bg-black/35" />
					</div>
				</div>

				{/* Prev button */}
				<button
					type="button"
					onClick={prev}
					aria-label="Previous project"
					className="absolute left-[24vw] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#0a0a0a] flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
				>
					<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
						<title>Previous</title>
						<path
							d="M10 12L6 8L10 4"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>

				{/* Next button */}
				<button
					type="button"
					onClick={next}
					aria-label="Next project"
					className="absolute right-[24vw] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#0a0a0a] flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
				>
					<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
						<title>Next</title>
						<path
							d="M6 4L10 8L6 12"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>

				{/* Dot indicators */}
				<div className="flex items-center justify-center gap-2 mt-6">
					{projects.map((project, i) => (
						<button
							key={project.slug}
							type="button"
							onClick={() => setCurrent(i)}
							aria-label={`Go to project ${i + 1}`}
							className={`rounded-full transition-all duration-300 ${
								i === current
									? "w-5 h-1.5 bg-white"
									: "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
							}`}
						/>
					))}
				</div>
			</div>

			{/* ── Cards grid (shadcn Card) ── */}
			<div className="px-8 pb-20">
				<div className="flex items-center gap-3 mb-6 mt-4">
					<span className="block w-8 h-px bg-white/20" />
					<span className="text-[10px] tracking-[0.15em] uppercase text-white/30 font-semibold">
						All Projects
					</span>
				</div>

				<main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
					{projects.map((project, index) => {
						const num = String(index + 1).padStart(2, "0");

						return (
							<Link key={project.slug} href={`/projects/${project.slug}`}>
								<Card className="group relative flex flex-col overflow-hidden h-55 bg-[#111] rounded-2xl border-2 border-brand-primary hover:border-brand-secondary hover:scale-[1.02] transition-all duration-300 shadow-none">
									{/* Dimmed bg image */}
									<div className="absolute inset-0">
										<Image
											src={project.imageUrl}
											alt={project.title}
											fill
											sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
											className="object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-35"
										/>
										<div className="absolute inset-0 bg-[#111]/70" />
									</div>

									{/* ── BACKGROUND NUMBER ── */}
									{/* Placed completely independently at the top left */}
									<span className="absolute top-3 left-5 text-7xl font-black tracking-tighter text-white/10 select-none pointer-events-none z-0">
										{num}
									</span>

									{/* ── LOWERED CONTENT CONTAINER ── */}
									{/* This absolute wrapper anchors everything down to the bottom with built-in padding */}
									<div className="absolute inset-x-0 bottom-0 z-10 p-5 pt-12 bg-gradient-to-t from-[#111] via-[#111]/90 to-transparent">
										{/* Title & Category */}
										<div className="mb-2">
											<CardTitle className="text-[14px] font-bold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
												{project.title}
											</CardTitle>
											<p className="text-[9px] tracking-[0.15em] uppercase text-white/40 font-semibold mt-0.5">
												{project.category}
											</p>
										</div>

										{/* Description & Tags */}
										<div className="flex flex-col gap-3">
											<p className="text-[11px] leading-relaxed text-white/45 line-clamp-2">
												{project.description}
											</p>
											<TagDots tags={project.tags} />
										</div>
									</div>

									{/* Hover glow border */}
									<div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/15 transition-all duration-300 pointer-events-none z-20" />
								</Card>
							</Link>
						);
					})}

					{/* Fill remaining cells */}
					{projects.length % 3 !== 0 &&
						Array.from(
							{ length: 3 - (projects.length % 3) },
							(_, i) => `fill-cell-${projects.length}-${i}`,
						).map((key) => (
							<div
								key={key}
								className="h-44 bg-[#111] rounded-2xl border border-white/8"
							/>
						))}
				</main>
			</div>
		</div>
	);
}
