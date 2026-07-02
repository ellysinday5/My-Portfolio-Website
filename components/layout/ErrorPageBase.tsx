"use client";

import Link from "next/link";
import type React from "react";

interface ErrorPageBaseProps {
	errorCode?: string;
	title?: string;
	description?: string;
	children?: React.ReactNode; // For custom graphics/animations on the right
}

export default function ErrorPageBase({
	errorCode = "404",
	title = "Page Not Found",
	description = "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
	children,
}: ErrorPageBaseProps) {
	return (
		<div className="min-h-screen bg-[#0a0a0a] text-white relative flex items-center justify-center overflow-hidden px-6 py-12">
			{/* ── BACKGROUND WATERMARK ── */}
			{/* Massive subtle background number mirroring your project cards layout */}
			<div className="absolute font-black text-[30vw] md:text-[24vw] leading-none text-white/2 select-none pointer-events-none tracking-tighter left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-[20%] md:translate-x-0">
				{errorCode}
			</div>

			<div className="max-w-6xl w-full mx-auto z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
					{/* ── LEFT COLUMN: Text Content ── */}
					<div className="flex flex-col items-start space-y-6 order-2 md:order-1 text-center md:text-left">
						<div className="w-full space-y-3">
							<span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/40 block">
								Error {errorCode}
							</span>

							<h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
								{title.includes(" ") ? (
									<>
										{title.substring(0, title.lastIndexOf(" "))}{" "}
										<span className="gradient-text">
											{title.substring(title.lastIndexOf(" ") + 1)}
										</span>
									</>
								) : (
									<span className="gradient-text">{title}</span>
								)}
							</h1>

							<p className="text-sm md:text-base leading-relaxed text-white/50 max-w-md mx-auto md:mx-0">
								{description}
							</p>
						</div>

						{/* CTA Button */}
						<div className="w-full md:w-auto pt-2">
							<Link
								href="/"
								className="inline-flex items-center justify-center bg-white text-[#0a0a0a] font-bold text-sm px-8 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/90 w-full sm:w-auto"
							>
								Return Home
							</Link>
						</div>
					</div>

					{/* ── RIGHT COLUMN: Custom Graphic/Children ── */}
					<div className="flex items-center justify-center order-1 md:order-2 z-10 w-full min-h-62.5 md:min-h-100">
						{children ? (
							children
						) : (
							/* Fallback glowing geometric art if no asset/child illustration is passed */
							<div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
								<div className="absolute inset-0 rounded-full bg-white/2 border border-white/5 animate-pulse" />
								<div className="absolute w-[80%] h-[80%] rounded-full bg-linear-to-br from-brand-primary/10 to-transparent blur-xl opacity-40" />
								<div className="w-24 h-24 rounded-3xl border-2 border-white/10 rotate-45 flex items-center justify-center transition-transform duration-1000 hover:rotate-90">
									<span className="text-3xl font-black text-white/20 -rotate-45">
										!
									</span>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
