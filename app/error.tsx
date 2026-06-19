"use client";

import { useEffect } from "react";

interface ErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error("ErrorBoundary caught an error:", error);
	}, [error]);

	return (
		<div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 text-center">
			{/* Background visual element */}
			<div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-[100px]"></div>

			<div className="max-w-md mx-auto flex flex-col items-center gap-6 p-8 rounded-2xl border border-red-500/10 bg-[var(--card-bg)] shadow-[var(--card-shadow)]">
				<div className="h-16 w-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 text-3xl font-bold">
					!
				</div>

				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold tracking-tight">
						Something went wrong!
					</h1>
					<p className="text-sm text-[var(--muted)] leading-relaxed">
						An unexpected error occurred while loading this page. Please try
						refreshing or return to the main dashboard.
					</p>
				</div>

				{error.digest && (
					<p className="text-xs text-[var(--muted)] bg-[var(--background)] px-3 py-1.5 rounded-lg border border-[var(--border)] font-mono">
						Error digest: {error.digest}
					</p>
				)}

				<div className="flex gap-4 w-full">
					<button
						type="button"
						onClick={() => reset()}
						className="flex-1 inline-flex h-11 items-center justify-center rounded-lg bg-[var(--color-brand-primary)] px-4 text-xs font-semibold text-white transition-all hover:bg-[var(--color-brand-primary)]/90"
					>
						Try Again
					</button>
					<a
						href="/"
						className="flex-1 inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border)] bg-transparent px-4 text-xs font-semibold transition-all hover:bg-brand-primary/5 hover:border-brand-primary"
					>
						Go Home
					</a>
				</div>
			</div>
		</div>
	);
}
