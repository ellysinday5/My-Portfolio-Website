"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Certificate } from "@/app/about/data";

interface Props {
	certificates: Certificate[];
	/** When true, only shows 4 tiles + "View All" 5th tile instead of full grid */
	previewOnly?: boolean;
}

export function CertificatesSection({
	certificates,
	previewOnly = false,
}: Props) {
	const [current, setCurrent] = useState(0);

	const prev = () =>
		setCurrent((c) => (c - 1 + certificates.length) % certificates.length);
	const next = () => setCurrent((c) => (c + 1) % certificates.length);
	const scrollTo = (index: number) => setCurrent(index);

	const leftIdx = (current - 1 + certificates.length) % certificates.length;
	const rightIdx = (current + 1) % certificates.length;

	const previewCerts = certificates.slice(0, 4);
	const activeCert = certificates[current];

	return (
		<div className="flex flex-col gap-8">
			{/* ── Carousel ── */}
			<div className="flex flex-col items-center gap-3">
				{/* Certificate title above carousel */}
				<div className="text-center min-h-8">
					<p className="text-xs font-bold uppercase tracking-widest text-brand-primary">
						{activeCert?.organization}
					</p>
					<h4 className="text-base font-extrabold text-foreground leading-snug mt-0.5">
						{activeCert?.title}
					</h4>
				</div>

				{/* Carousel — 3-slot track with peeking sides */}
				<div className="relative w-full bg-background py-10 overflow-hidden transition-colors duration-300">
					<div className="flex items-stretch justify-center gap-4 px-4">
						{/* LEFT peek */}
						<div
							key={`left-${leftIdx}`}
							className="hidden sm:block shrink-0 relative overflow-hidden rounded-xl opacity-55 transition-all duration-500 animate-carousel-swap bg-muted/20 w-[24vw] aspect-4/3 max-h-80"
						>
							<Image
								src={certificates[leftIdx].imageUrl}
								alt={certificates[leftIdx].title}
								fill
								sizes="24vw"
								className="object-contain"
								priority={false}
							/>
							<div className="absolute inset-0 bg-black/10 dark:bg-black/35 pointer-events-none" />
						</div>

						{/* CENTER */}
						<div
							key={`center-${current}`}
							className="relative shrink-0 overflow-hidden rounded-xl group shadow-2xl z-10 transition-all duration-500 animate-carousel-swap bg-muted/20 w-[44vw] aspect-4/3 max-h-105 min-w-65"
						>
							<Image
								src={certificates[current].imageUrl}
								alt={certificates[current].title}
								fill
								sizes="44vw"
								className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
								priority
							/>
							<div className="absolute inset-0 bg-black/5 dark:bg-black/15 pointer-events-none" />
						</div>

						{/* RIGHT peek */}
						<div
							key={`right-${rightIdx}`}
							className="hidden sm:block shrink-0 relative overflow-hidden rounded-xl opacity-55 transition-all duration-500 animate-carousel-swap bg-muted/20 w-[24vw] aspect-4/3 max-h-80"
						>
							<Image
								src={certificates[rightIdx].imageUrl}
								alt={certificates[rightIdx].title}
								fill
								sizes="24vw"
								className="object-contain"
							/>
							<div className="absolute inset-0 bg-black/10 dark:bg-black/35 pointer-events-none" />
						</div>
					</div>

					{/* Prev button */}
					<button
						type="button"
						onClick={prev}
						aria-label="Previous certificate"
						className="absolute left-2 sm:left-6 md:left-[10vw] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-foreground/90 hover:bg-foreground text-background flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
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
						aria-label="Next certificate"
						className="absolute right-2 sm:right-6 md:right-[10vw] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-foreground/90 hover:bg-foreground text-background flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
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
				</div>

				{/* Dot indicators */}
				<div className="flex items-center justify-center gap-1.5 flex-wrap">
					{certificates.map((cert, i) => (
						<button
							key={`${cert.title}-${cert.organization}`}
							type="button"
							onClick={() => scrollTo(i)}
							aria-label={`View ${cert.title}`}
							className={`rounded-full transition-all duration-300 ${
								i === current
									? "w-5 h-1.5 bg-brand-primary"
									: "w-1.5 h-1.5 bg-brand-primary/30 hover:bg-brand-primary/60"
							}`}
						/>
					))}
				</div>
			</div>

			{/* ── Thumbnail grid ── */}
			<div>
				<p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
					All Certificates
				</p>

				{previewOnly ? (
					/* About section: 4 tiles + "View All" 5th tile */
					<div className="grid grid-cols-5 gap-3">
						{previewCerts.map((cert, index) => (
							<button
								key={`${cert.title}-${cert.organization}`}
								type="button"
								onClick={() => scrollTo(index)}
								title={cert.title}
								className={`group relative rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5 cursor-pointer aspect-4/3 ${
									index === current
										? "border-brand-primary ring-2 ring-brand-primary/40"
										: "border-brand-primary/40 hover:border-brand-primary"
								}`}
							>
								<Image
									src={cert.imageUrl}
									alt={cert.title}
									fill
									sizes="20vw"
									className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent px-2 py-2">
									<p className="text-[9px] font-bold text-white leading-tight line-clamp-2">
										{cert.title}
									</p>
								</div>
								<div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/15 transition-all duration-300" />
							</button>
						))}

						{/* 5th tile — View All */}
						<Link href="/certificates">
							<div className="group rounded-xl border-2 border-dashed border-brand-primary/50 hover:border-brand-primary transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5 cursor-pointer flex flex-col items-center justify-center gap-2 bg-brand-primary/5 hover:bg-brand-primary/10 aspect-4/3">
								<span className="text-2xl font-black text-brand-primary group-hover:scale-110 transition-transform duration-300">
									+{certificates.length - 4}
								</span>
								<span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary text-center leading-tight px-1">
									View All
								</span>
							</div>
						</Link>
					</div>
				) : (
					/* Full certificates page: all tiles */
					<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
						{certificates.map((cert, index) => (
							<button
								key={`${cert.title}-${cert.organization}`}
								type="button"
								onClick={() => scrollTo(index)}
								title={cert.title}
								className={`group relative rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5 cursor-pointer aspect-4/3 ${
									index === current
										? "border-brand-primary ring-2 ring-brand-primary/40"
										: "border-brand-primary/40 hover:border-brand-primary"
								}`}
							>
								<Image
									src={cert.imageUrl}
									alt={cert.title}
									fill
									sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
									className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent px-2 py-2">
									<p className="text-[9px] font-bold text-white leading-tight line-clamp-2">
										{cert.title}
									</p>
								</div>
								<div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/15 transition-all duration-300" />
							</button>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
