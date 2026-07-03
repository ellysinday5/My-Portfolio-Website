"use client";

/**
 * AstronautLostSignal
 * Signature illustration for the 404 page — a tumbling astronaut whose
 * tether has snapped, drifting through a field of pink-lit stars.
 * Built as plain shapes (no traced artwork) so every color derives
 * from the site's brand-primary / brand-secondary tokens.
 */
export default function AstronautLostSignal() {
	return (
		<div className="relative w-full h-full flex items-center justify-center">
			{/* Ambient glow behind the figure */}
			<div className="absolute w-[70%] h-[70%] rounded-full bg-brand-primary/15 blur-[90px]" />

			<svg
				viewBox="0 0 400 420"
				className="relative w-64 h-64 md:w-80 md:h-80 animate-[float_6s_ease-in-out_infinite]"
				role="img"
				aria-labelledby="astronautTitle"
			>
				<title id="astronautTitle">
					An astronaut tumbling in space with a severed tether
				</title>

				<defs>
					<radialGradient id="visorGlow" cx="35%" cy="30%" r="70%">
						<stop
							offset="0%"
							stopColor="var(--brand-primary, #ec4899)"
							stopOpacity="0.55"
						/>
						<stop
							offset="100%"
							stopColor="var(--brand-primary, #ec4899)"
							stopOpacity="0.05"
						/>
					</radialGradient>
				</defs>

				{/* Scattered stars */}
				{[
					{ cx: 36, cy: 40, r: 2.2, delay: "0s" },
					{ cx: 70, cy: 120, r: 1.6, delay: "0.4s" },
					{ cx: 350, cy: 60, r: 2, delay: "0.8s" },
					{ cx: 320, cy: 160, r: 1.4, delay: "1.1s" },
					{ cx: 24, cy: 220, r: 1.8, delay: "0.2s" },
					{ cx: 60, cy: 320, r: 1.4, delay: "1.4s" },
					{ cx: 365, cy: 280, r: 2, delay: "0.6s" },
					{ cx: 300, cy: 20, r: 1.4, delay: "1.7s" },
				].map((star) => (
					<circle
						key={`star-${star.cx}-${star.cy}`}
						cx={star.cx}
						cy={star.cy}
						r={star.r}
						className="fill-neutral-900/25 dark:fill-white/70 animate-[twinkle_2.4s_ease-in-out_infinite]"
						style={{ animationDelay: star.delay }}
					/>
				))}

				{/* Snapped tether, drifting away in a loose curl */}
				<path
					d="M 178 300 C 130 320, 90 300, 70 340 C 52 375, 20 370, 14 400"
					fill="none"
					stroke="var(--brand-primary, #ec4899)"
					strokeWidth="4"
					strokeLinecap="round"
					strokeDasharray="1 12"
					opacity="0.8"
				/>
				<circle cx="14" cy="400" r="5" className="fill-brand-primary" />

				{/* ── Figure group, tilted for a tumbling feel ── */}
				<g transform="rotate(-14 200 210)">
					{/* Backpack */}
					<rect
						x="150"
						y="190"
						width="46"
						height="70"
						rx="12"
						className="fill-brand-primary"
					/>

					{/* Legs */}
					<rect
						x="176"
						y="255"
						width="30"
						height="70"
						rx="15"
						className="fill-white dark:fill-white/90 stroke-black/10 dark:stroke-white/10"
						strokeWidth="1.5"
						transform="rotate(18 191 255)"
					/>
					<rect
						x="222"
						y="255"
						width="30"
						height="66"
						rx="15"
						className="fill-white dark:fill-white/90 stroke-black/10 dark:stroke-white/10"
						strokeWidth="1.5"
						transform="rotate(-6 237 255)"
					/>
					{/* Boots */}
					<rect
						x="196"
						y="318"
						width="34"
						height="22"
						rx="10"
						className="fill-brand-primary"
						transform="rotate(24 213 318)"
					/>
					<rect
						x="238"
						y="308"
						width="32"
						height="22"
						rx="10"
						className="fill-brand-primary"
						transform="rotate(-2 254 308)"
					/>

					{/* Torso */}
					<rect
						x="165"
						y="175"
						width="100"
						height="110"
						rx="34"
						className="fill-white dark:fill-white/95 stroke-black/10 dark:stroke-white/10"
						strokeWidth="1.5"
					/>

					{/* Chest badge */}
					<rect
						x="196"
						y="212"
						width="40"
						height="30"
						rx="8"
						className="fill-brand-primary"
					/>
					<circle cx="216" cy="227" r="4" className="fill-white" />

					{/* Arms */}
					<rect
						x="118"
						y="182"
						width="28"
						height="72"
						rx="14"
						className="fill-white dark:fill-white/95 stroke-black/10 dark:stroke-white/10"
						strokeWidth="1.5"
						transform="rotate(24 132 182)"
					/>
					<g className="animate-[wave_1.5s_ease-in-out_infinite] origin-bottom-right">
						<rect
							x="270"
							y="170"
							width="28"
							height="80"
							rx="14"
							className="fill-white dark:fill-white/95 stroke-black/10 dark:stroke-white/10"
							strokeWidth="1.5"
							transform="rotate(-40 284 170)"
						/>
						<circle cx="308" cy="118" r="17" className="fill-brand-primary" />
					</g>
					{/* Gloves */}
					<circle cx="104" cy="248" r="17" className="fill-brand-primary" />

					{/* Helmet */}
					<circle
						cx="216"
						cy="130"
						r="62"
						className="fill-white dark:fill-white/95 stroke-black/10 dark:stroke-white/10"
						strokeWidth="1.5"
					/>
					<circle cx="216" cy="130" r="62" fill="url(#visorGlow)" />
					<circle cx="216" cy="130" r="48" className="fill-[#0a0a0a]" />

					{/* Face */}
					<circle cx="198" cy="126" r="5" className="fill-white" />
					<circle cx="230" cy="126" r="5" className="fill-white" />
					<path
						d="M 200 148 Q 216 138, 232 148"
						fill="none"
						stroke="var(--brand-primary, #ec4899)"
						strokeWidth="3.5"
						strokeLinecap="round"
					/>

					{/* Helmet rim light */}
					<circle
						cx="216"
						cy="130"
						r="62"
						fill="none"
						stroke="var(--brand-primary, #ec4899)"
						strokeOpacity="0.4"
						strokeWidth="2"
					/>
				</g>
			</svg>

			<style jsx>{`
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-18px) rotate(3deg);
                    }
                }
                @keyframes twinkle {
                    0%,
                    100% {
                        opacity: 0.25;
                    }
                    50% {
                        opacity: 0.9;
                    }
                }
                @keyframes wave {
                    0%,
                    100% {
                        transform: rotate(0deg);
                    }
                    50% {
                        transform: rotate(15deg);
                    }
                }
            `}</style>
		</div>
	);
}
