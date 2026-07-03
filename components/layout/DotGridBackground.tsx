"use client";

import { useEffect, useRef } from "react";

/**
 * DotGridBackground
 * A fixed, full-viewport backdrop: a faint dot grid, two slowly drifting
 * brand-color glows, and a soft spotlight that follows the cursor and
 * brightens the dots underneath it. Pure CSS + one mousemove listener —
 * no canvas, so it stays cheap on scroll-heavy pages.
 */
export default function DotGridBackground() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		function handlePointerMove(e: PointerEvent) {
			if (!container) return;
			const rect = container.getBoundingClientRect();
			container.style.setProperty(
				"--spotlight-x",
				`${e.clientX - rect.left}px`,
			);
			container.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
		}

		window.addEventListener("pointermove", handlePointerMove);
		return () => window.removeEventListener("pointermove", handlePointerMove);
	}, []);

	return (
		<div
			ref={containerRef}
			className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden"
		>
			{/* Base dot grid — dots inherit color via currentColor so it tracks the theme automatically */}
			<div className="absolute inset-0 text-foreground/[0.14] bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[24px_24px]" />

			{/* Cursor spotlight — brightens the grid locally without needing a second dot layer */}
			<div className="absolute inset-0 text-brand-primary opacity-60 bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(220px_circle_at_var(--spotlight-x,-999px)_var(--spotlight-y,-999px),black,transparent_70%)]" />

			{/* Drifting glow blobs */}
			<div className="absolute top-1/4 right-1/4 h-100 w-100 rounded-full bg-brand-primary/8 blur-[140px] animate-[drift-a_18s_ease-in-out_infinite]" />
			<div className="absolute bottom-1/3 left-1/4 h-75 w-75 rounded-full bg-brand-accent/5 blur-[100px] animate-[drift-b_22s_ease-in-out_infinite]" />

			<style jsx>{`
				@keyframes drift-a {
					0%,
					100% {
						transform: translate(0, 0);
					}
					50% {
						transform: translate(-40px, 30px);
					}
				}
				@keyframes drift-b {
					0%,
					100% {
						transform: translate(0, 0);
					}
					50% {
						transform: translate(35px, -25px);
					}
				}
			`}</style>
		</div>
	);
}
