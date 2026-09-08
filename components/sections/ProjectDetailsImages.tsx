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
			<div className="relative w-full aspect-video sm:aspect-[16/10] overflow-hidden bg-[#0d0d0d] flex items-center justify-center">
				{/* Ambient blurred backdrop for aesthetic fit */}
				<Image
					src={images[activeIndex]}
					alt=""
					fill
					aria-hidden="true"
					className="object-cover blur-2xl opacity-30 scale-110 pointer-events-none"
				/>

				{/* Contained foreground image ensuring no one is cut out */}
				<Image
					src={images[activeIndex]}
					alt={`${title} — view ${activeIndex + 1}`}
					fill
					sizes="(max-width: 1024px) 100vw, 50vw"
					priority={activeIndex === 0}
					className="object-contain transition-opacity duration-300 relative z-10 p-1 sm:p-2"
				/>

				{/* image counter badge */}
				{hasMultiple && (
					<span className="absolute top-3 right-3 z-20 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/80 select-none shadow-lg">
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
