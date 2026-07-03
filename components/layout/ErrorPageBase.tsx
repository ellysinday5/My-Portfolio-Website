"use client";

import Link from "next/link";
import type React from "react";

interface ErrorPageBaseProps {
	errorCode?: string;
	title?: string;
	description?: string;
	children?: React.ReactNode; // For custom graphics/illustrations on the right
}

export default function ErrorPageBase({
	errorCode = "404",
	title = "Page not found",
	description = "This page doesn't exist — it was moved, renamed, or never here. Check the link, or head back to the homepage.",
	children,
}: ErrorPageBaseProps) {
	return (
		<div className="min-h-screen bg-[#0a0a0a] text-white relative flex items-center justify-center overflow-hidden px-6 py-12">
			{/* ── BACKGROUND WATERMARK ── */}
			<div className="absolute font-black text-[30vw] md:text-[24vw] leading-none text-white/3 select-none pointer-events-none tracking-tighter left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-[20%] md:translate-x-0">
				{errorCode}
			</div>

			{/* Ambient pink wash, matches the illustration's glow */}
			<div className="absolute top-1/2 left-1/2 z-0 h-128 w-lg -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/5 blur-[140px] pointer-events-none" />

			<div className="max-w-6xl w-full mx-auto z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
					{/* ── LEFT COLUMN: Text Content ── */}
					<div className="flex flex-col items-start space-y-6 order-2 md:order-1 text-center md:text-left">
						<div className="w-full space-y-3">
							<span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-brand-primary block">
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
								className="inline-flex items-center justify-center bg-brand-primary text-white font-bold text-sm px-8 h-12 rounded-full shadow-lg shadow-brand-primary/20 transition-all duration-300 hover:scale-105 hover:bg-brand-secondary w-full sm:w-auto"
							>
								Back to home
							</Link>
						</div>
					</div>

					{/* ── RIGHT COLUMN: Custom Graphic/Children ── */}
					<div className="flex items-center justify-center order-1 md:order-2 z-10 w-full min-h-62.5 md:min-h-100">
						{children ? (
							children
						) : (
							/* Fallback glowing geometric art if no illustration is passed */
							<div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
								<div className="absolute inset-0 rounded-full bg-white/2 border border-white/5 animate-pulse" />
								<div className="absolute w-[80%] h-[80%] rounded-full bg-linear-to-br from-brand-primary/15 to-transparent blur-xl opacity-40" />
								<div className="w-24 h-24 rounded-3xl border-2 border-brand-primary/30 rotate-45 flex items-center justify-center transition-transform duration-1000 hover:rotate-90">
									<span className="text-3xl font-black text-brand-primary/60 -rotate-45">
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
