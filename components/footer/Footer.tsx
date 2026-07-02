import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full border-t border-border bg-background transition-colors duration-500">
			<style>{`
				@keyframes colorSlide {
					0% {
						filter: hue-rotate(0deg);
					}
					25% {
						filter: hue-rotate(15deg);
					}
					50% {
						filter: hue-rotate(0deg);
					}
					75% {
						filter: hue-rotate(-15deg);
					}
					100% {
						filter: hue-rotate(0deg);
					}
				}
				
				.logo-animated {
					animation: colorSlide 4s ease-in-out infinite;
				}
			`}</style>

			<div className="mx-auto max-w-7xl px-6 lg:px-12 py-4">
				<div className="flex items-center justify-between">
					{/* Logo with animation */}
					<Link
						href="/"
						className="group flex items-center space-x-3 focus:outline-none"
					>
						<div className="relative flex items-center justify-center w-10 h-10 logo-animated">
							{/* Ambient glow behind bulb on hover */}
							<div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-brand-primary/20 blur-lg transition-all duration-500 scale-75 group-hover:scale-150" />

							<svg
								viewBox="0 0 48 58"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="w-9 h-9 relative z-10"
								aria-label="EG Puzzle Lightbulb"
							>
								<title>EG Logo</title>
								<defs>
									<clipPath id="bulb-clip-footer">
										<path d="M24 2C14.611 2 7 9.611 7 19c0 5.857 2.99 11.02 7.5 14.07V37h19v-3.93C38.01 30.02 41 24.857 41 19c0-9.389-7.611-17-17-17z" />
									</clipPath>
								</defs>

								{/* ── 4 PUZZLE PIECES clipped to bulb shape ── */}
								<g clipPath="url(#bulb-clip-footer)">
									{/* Top-left — pink in light, gold on hover */}
									<path
										d="M7 2 H24 V19
										 C22 19 20.5 17.6 20.5 15.5 C20.5 13.4 19 12 17 12
										 C15 12 13.5 13.4 13.5 15.5 C13.5 17.6 12 19 10 19
										 H7 Z"
										className="fill-brand-pink dark:fill-muted group-hover:fill-brand-secondary transition-colors duration-300"
									/>
									{/* Top-right — gold-ish, brighter pink on hover */}
									<path
										d="M24 2 H41 V19 H38
										 C36 19 34.5 17.6 34.5 15.5 C34.5 13.4 33 12 31 12
										 C29 12 27.5 13.4 27.5 15.5 C27.5 17.6 26 19 24 19 Z"
										className="fill-brand-primary dark:fill-[oklch(0.62_0.01_75)] group-hover:fill-brand-primary transition-colors duration-300 delay-[50ms]"
									/>
									{/* Bottom-left — gold-ish, brighter on hover */}
									<path
										d="M7 19 H10
										 C12 19 13.5 20.4 13.5 22.5 C13.5 24.6 15 26 17 26
										 C19 26 20.5 24.6 20.5 22.5 C20.5 20.4 22 19 24 19
										 V37 H7 Z"
										className="fill-brand-primary dark:fill-[oklch(0.62_0.01_75)] group-hover:fill-brand-primary transition-colors duration-300 delay-[100ms]"
									/>
									{/* Bottom-right — pink in light, gold on hover */}
									<path
										d="M24 19
										 C26 19 27.5 20.4 27.5 22.5 C27.5 24.6 29 26 31 26
										 C33 26 34.5 24.6 34.5 22.5 C34.5 20.4 36 19 38 19
										 H41 V37 H24 Z"
										className="fill-brand-pink-light dark:fill-muted group-hover:fill-brand-secondary transition-colors duration-300 delay-[150ms]"
									/>
								</g>

								{/* ── PUZZLE DIVIDERS ── */}
								<line
									x1="24"
									y1="2"
									x2="24"
									y2="37"
									stroke="var(--background)"
									strokeWidth="1.8"
								/>
								<line
									x1="7"
									y1="19"
									x2="41"
									y2="19"
									stroke="var(--background)"
									strokeWidth="1.8"
								/>

								{/* ── BULB OUTLINE ── */}
								<path
									d="M24 2C14.611 2 7 9.611 7 19c0 5.857 2.99 11.02 7.5 14.07V37h19v-3.93C38.01 30.02 41 24.857 41 19c0-9.389-7.611-17-17-17z"
									stroke="var(--border)"
									strokeWidth="1.2"
									fill="none"
									className="group-hover:stroke-brand-primary/50 transition-colors duration-300"
								/>

								{/* ── BASE NECK ── */}
								<rect
									x="18.5"
									y="37"
									width="11"
									height="3"
									rx="1"
									className="fill-muted group-hover:fill-brand-primary transition-colors duration-500"
								/>
								<rect
									x="17"
									y="41"
									width="14"
									height="2.5"
									rx="1"
									className="fill-muted group-hover:fill-brand-primary transition-colors duration-500 delay-[80ms]"
								/>
								<rect
									x="18.5"
									y="44.5"
									width="11"
									height="2"
									rx="1"
									className="fill-muted group-hover:fill-brand-primary transition-colors duration-500 delay-[160ms]"
								/>
								<rect
									x="21"
									y="47.5"
									width="6"
									height="3"
									rx="1.5"
									className="fill-muted group-hover:fill-brand-primary transition-colors duration-500 delay-[240ms]"
								/>

								{/* ── GLOW RAYS (appear on hover) ── */}
								<line
									x1="24"
									y1="-1"
									x2="24"
									y2="0.5"
									stroke="var(--color-brand-primary)"
									strokeWidth="2.5"
									strokeLinecap="round"
									className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[200ms]"
								/>
								<line
									x1="34"
									y1="2.5"
									x2="35.2"
									y2="1.3"
									stroke="var(--color-brand-primary)"
									strokeWidth="2"
									strokeLinecap="round"
									className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[220ms]"
								/>
								<line
									x1="43"
									y1="12"
									x2="44.5"
									y2="12"
									stroke="var(--color-brand-primary)"
									strokeWidth="2"
									strokeLinecap="round"
									className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[240ms]"
								/>
								<line
									x1="14"
									y1="2.5"
									x2="12.8"
									y2="1.3"
									stroke="var(--color-brand-primary)"
									strokeWidth="2"
									strokeLinecap="round"
									className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[220ms]"
								/>
								<line
									x1="5"
									y1="12"
									x2="3.5"
									y2="12"
									stroke="var(--color-brand-primary)"
									strokeWidth="2"
									strokeLinecap="round"
									className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[240ms]"
								/>
							</svg>
						</div>

						{/* EG wordmark */}
						<span className="text-lg font-black tracking-widest text-foreground transition-colors duration-300 group-hover:text-brand-primary">
							EG
						</span>
					</Link>

					{/* Copyright text */}
					<p className="text-xs text-muted-foreground">
						&copy; {new Date().getFullYear()} Ellen Grace Sinday. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
