"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { Certificate } from "@/app/about/data";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
	certificates: Certificate[];
	/** When true, only shows 4 tiles + "View All" 5th tile instead of full grid */
	previewOnly?: boolean;
}

export function CertificatesSection({
	certificates,
	previewOnly = false,
}: Props) {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!api) return;
		setCurrent(api.selectedScrollSnap());
		api.on("select", () => setCurrent(api.selectedScrollSnap()));
	}, [api]);

	const scrollTo = useCallback(
		(index: number) => {
			api?.scrollTo(index);
		},
		[api],
	);

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

				{/* Carousel — centered card with outside arrows */}
				<div className="w-full flex items-center justify-center gap-4">
					{/* Arrows + carousel wrapper */}
					<Carousel
						setApi={setApi}
						opts={{ align: "center", loop: true }}
						className="w-full max-w-2xl"
					>
						<CarouselContent className="ml-0">
							{certificates.map((cert, i) => (
								<CarouselItem key={cert.id} className="pl-0">
									{/* Centered card — fixed aspect ratio so full cert is visible */}
									<div className="flex justify-center">
										<div
											className={`relative w-full max-w-xl rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
												i === current
													? "border-brand-primary shadow-[0_0_24px_rgba(236,72,153,0.25)]"
													: "border-brand-primary/40"
											}`}
											style={{ aspectRatio: "4/3" }}
										>
											<Image
												src={cert.imageUrl}
												alt={cert.title}
												fill
												sizes="(max-width: 768px) 90vw, 672px"
												className="object-contain object-center"
												priority={i === 0}
											/>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>

						{/* Arrows outside the card */}
						<CarouselPrevious className="border-border bg-background/80 hover:bg-brand-primary hover:border-brand-primary hover:text-white -left-12 sm:-left-14 w-9 h-9" />
						<CarouselNext className="border-border bg-background/80 hover:bg-brand-primary hover:border-brand-primary hover:text-white -right-12 sm:-right-14 w-9 h-9" />
					</Carousel>
				</div>

				{/* Dot indicators */}
				<div className="flex items-center justify-center gap-1.5 flex-wrap">
					{certificates.map((cert, i) => (
						<button
							key={cert.id}
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
								key={cert.id}
								type="button"
								onClick={() => scrollTo(index)}
								title={cert.title}
								className={`group relative rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5 cursor-pointer ${
									index === current
										? "border-brand-primary ring-2 ring-brand-primary/40"
										: "border-brand-primary/40 hover:border-brand-primary"
								}`}
								style={{ aspectRatio: "4/3" }}
							>
								<Image
									src={cert.imageUrl}
									alt={cert.title}
									fill
									sizes="20vw"
									className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
								/>
								{/* Title overlay inside card */}
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
							<div
								className="group rounded-xl border-2 border-dashed border-brand-primary/50 hover:border-brand-primary transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5 cursor-pointer flex flex-col items-center justify-center gap-2 bg-brand-primary/5 hover:bg-brand-primary/10"
								style={{ aspectRatio: "4/3" }}
							>
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
								key={cert.id}
								type="button"
								onClick={() => scrollTo(index)}
								title={cert.title}
								className={`group relative rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5 cursor-pointer ${
									index === current
										? "border-brand-primary ring-2 ring-brand-primary/40"
										: "border-brand-primary/40 hover:border-brand-primary"
								}`}
								style={{ aspectRatio: "4/3" }}
							>
								<Image
									src={cert.imageUrl}
									alt={cert.title}
									fill
									sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
									className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
								/>
								{/* Title overlay inside card */}
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
