"use client";

import { useEffect } from "react";

interface ErrorProps {
	error: Error & { digest?: string; status?: number };
	reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error("ErrorBoundary caught an error:", error);
	}, [error]);

	// 1. Determine the status code dynamically (fallback to 500)
	const statusCode = error.status ? String(error.status) : "500";

	// 2. Determine the message dynamically based on the error context
	let title = "Something went wrong!";
	let description =
		"An unexpected error occurred while loading this page. Please try refreshing or return home.";

	if (statusCode === "401") {
		title = "Unauthorized Access";
		description = "You do not have permission to view this secure content.";
	} else if (statusCode === "403") {
		title = "Access Forbidden";
		description = "Access to this resource is strictly restricted.";
	}

	return (
		<div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 text-center bg-[#0a0a0a] text-white overflow-hidden">
			{/* ── BACKGROUND WATERMARK ── */}
			{/* Pink theme glow ring aura */}
			<div className="absolute top-1/2 left-1/2 -z-10 h-87.5 w-87.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/5 blur-[120px]" />

			{/* Massive watermark background number matching the projects page concept */}
			<span className="absolute text-[24vw] font-black tracking-tighter text-white/2 select-none pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
				{statusCode}
			</span>

			{/* ── CARD ELEMENT ── */}
			{/* Changed from red-500/10 to your explicit pink brand border styling */}
			<div className="relative z-10 max-w-md mx-auto flex flex-col items-center gap-6 p-8 rounded-2xl border-2 border-brand-primary bg-[#111] shadow-2xl">
				{/* Glowing Warning Sign Icon */}
				<div className="h-16 w-16 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary text-3xl font-black">
					!
				</div>

				{/* Typography Block */}
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-black tracking-tight">{title}</h1>
					<p className="text-xs text-white/45 leading-relaxed">{description}</p>
				</div>

				{/* Optional Crash Tracking ID Block */}
				{error.digest && (
					<p className="text-[10px] text-white/30 bg-[#0a0a0a] px-3 py-1.5 rounded-lg border border-white/5 font-mono select-all">
						Error digest: {error.digest}
					</p>
				)}

				{/* ── ACTION BUTTONS ── */}
				<div className="flex gap-3 w-full">
					{/* Try Again CTA with Hover Scale matching your layout guidelines */}
					<button
						type="button"
						onClick={() => reset()}
						className="flex-1 inline-flex h-11 items-center justify-center rounded-xl bg-brand-primary px-4 text-xs font-bold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-brand-secondary shadow-lg"
					>
						Try Again
					</button>

					{/* Go Home Ghost Button */}
					<a
						href="/"
						className="flex-1 inline-flex h-11 items-center justify-center rounded-xl border border-white/10 bg-transparent px-4 text-xs font-bold text-white/70 transition-all duration-200 hover:bg-white/5 hover:border-white/20"
					>
						Go Home
					</a>
				</div>
			</div>
		</div>
	);
}
