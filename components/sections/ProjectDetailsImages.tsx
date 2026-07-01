"use client";

import Image from "next/image";
import { useState } from "react";

interface CarouselProps {
	imagesData: string | string[] | undefined;
	title: string;
}

export function ProjectImageCarousel({ imagesData, title }: CarouselProps) {
	// Normalize to a reliable array
	const images = Array.isArray(imagesData)
		? imagesData
		: typeof imagesData === "string" && imagesData
			? [imagesData]
			: [];

	const [activeIndex, setActiveIndex] = useState(0);

	if (images.length === 0) {
		return <div className="w-full h-full bg-[#111] animate-pulse" />;
	}

	const hasMultiple = images.length > 1;

	return (
		<div className="w-full">
			{/* ── Main Image ── */}
			<div className="relative w-full aspect-video overflow-hidden">
				<Image
					src={images[activeIndex]}
					alt={`${title} — view ${activeIndex + 1}`}
					fill
					sizes="(max-width: 1024px) 100vw, 50vw"
					priority={activeIndex === 0}
					className="object-cover transition-opacity duration-300"
				/>

				{/* subtle overlay gradient */}
				<div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0a0a0a]/40 pointer-events-none" />

				{/* image counter badge */}
				{hasMultiple && (
					<span className="absolute top-3 right-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white/60 select-none">
						{activeIndex + 1} / {images.length}
					</span>
				)}
			</div>

			{/* ── Thumbnail Strip ── */}
			{hasMultiple && (
				<div className="shrink-0 flex gap-2 overflow-x-auto px-3 py-2.5 bg-[#0d0d0d] rounded-b-2xl border-t border-white/5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
					{images.map((src, index) => {
						const isActive = index === activeIndex;
						return (
							<button
								// biome-ignore lint/suspicious/noArrayIndexKey: order matches stable image positions
								key={src + index}
								type="button"
								onClick={() => setActiveIndex(index)}
								className={`relative shrink-0 w-14 h-10 rounded-md overflow-hidden border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
									isActive
										? "border-brand-primary opacity-100 scale-105"
										: "border-transparent opacity-40 hover:opacity-70 hover:border-white/30"
								}`}
								aria-label={`View image ${index + 1} of ${images.length}`}
								aria-pressed={isActive}
							>
								<Image
									src={src}
									alt={`${title} thumbnail ${index + 1}`}
									fill
									sizes="56px"
									className="object-cover"
								/>
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
}
