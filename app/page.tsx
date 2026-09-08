import type { Metadata } from "next";
import Image from "next/image";

import ScrollToTop from "@/components/layout/ScrollToTop";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Ellen Grace Sinday | Aspiring Software Engineer",
	description:
		"Welcome to my portfolio. Discover my latest Next.js engineering, React accomplishments, and clean UI design systems.",
	openGraph: {
		title: "Ellen Grace Sinday | Aspiring Software Engineer",
		description:
			"Welcome to my portfolio. Discover my latest Next.js engineering, React accomplishments, and clean UI design systems.",
		type: "website",
	},
};

export default function Home() {
	return (
		<div className="relative w-full flex-1 flex flex-col justify-center overflow-x-hidden overflow-y-auto lg:overflow-hidden bg-background text-foreground transition-colors duration-300 lg:max-h-[calc(100dvh-4rem-2.75rem)]">
			<ScrollToTop />

			{/* ───────── HERO SECTION ───────── */}
			<section className="relative w-full flex-1 flex flex-col justify-center px-4 sm:px-6 py-6 sm:py-8 lg:py-4 lg:px-16 overflow-hidden">
				{/* Floating ambient glows */}
				<div className="absolute top-1/4 right-1/4 -z-5 h-40 w-40 sm:h-64 sm:w-64 md:h-87.5 md:w-87.5 rounded-full bg-brand-primary/10 blur-[80px] sm:blur-[120px] animate-float" />
				<div className="absolute bottom-1/3 left-1/3 -z-5 h-32 w-32 sm:h-48 sm:w-48 md:h-62.5 md:w-62.5 rounded-full bg-brand-accent/5 blur-[60px] sm:blur-[90px]" />

				{/* Two-column hero container: Name on left, Photo + Social Icons on right */}
				<div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 my-auto z-10">
					{/* Left: Main Headline & Tagline */}
					<div className="flex-1 flex flex-col items-start gap-2.5 sm:gap-4 select-none">
						<div className="flex items-center gap-3 sm:gap-6 md:gap-8 flex-wrap">
							<h1 className="hero-type hero-type-surname text-[clamp(2.5rem,7.5vw,5rem)] xl:text-[5.75rem] font-black tracking-wide sm:tracking-widest text-foreground leading-none">
								SINDAY
							</h1>

							{/* Arrow button links to /about page */}
							<Button
								asChild
								variant="outline"
								className="group w-11 h-11 sm:w-13 sm:h-13 rounded-full border-2 border-brand-primary outline outline-offset-5 outline-brand-primary/35 bg-transparent text-brand-primary hover:bg-brand-primary/10 hover:text-brand-primary transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:-translate-y-1 p-0 shrink-0"
							>
								<a href="/about" aria-label="Open About page">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2.5"
										className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5"
										aria-label="Right arrow"
									>
										<title>Open About</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										/>
									</svg>
								</a>
							</Button>
						</div>

						<h1 className="hero-type hero-type-given text-[clamp(2.25rem,7vw,4.75rem)] xl:text-[5.5rem] font-black tracking-wide sm:tracking-widest text-brand-primary leading-none uppercase">
							ELLEN GRACE
						</h1>

						<div className="hero-role-slide flex items-center gap-3 sm:gap-4 mt-3 sm:mt-5">
							<span className="w-1 h-6 sm:h-7 bg-brand-primary rounded-full shrink-0" />
							<p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide sm:tracking-widest text-(--foreground)/90">
								Aspiring Software Engineer&nbsp;|&nbsp;Frontend Developer
							</p>
						</div>
					</div>

					{/* Right: Centered Profile Photo with Attached Social Icons */}
					<div className="flex flex-col items-center justify-center shrink-0">
						{/* Photo Container */}
						<div className="relative w-[270px] sm:w-[330px] md:w-[370px] lg:w-[410px] xl:w-[450px] h-[330px] sm:h-[390px] md:h-[430px] lg:h-[470px] xl:h-[510px] select-none">
							{/* Soft glow behind the photo */}
							<div className="absolute inset-0 bg-brand-primary/10 blur-[50px] rounded-full -z-10" />

							{/* Photo with soft bottom fade to blend naturally */}
							<div
								className="relative w-full h-full"
								style={{
									maskImage:
										"linear-gradient(to top, transparent 0%, black 16%, black 100%)",
									WebkitMaskImage:
										"linear-gradient(to top, transparent 0%, black 16%, black 100%)",
								}}
							>
								<Image
									src="/assets/profile/elle.png"
									alt="Ellen Grace Sinday"
									fill
									sizes="(max-width: 640px) 270px, (max-width: 768px) 330px, (max-width: 1024px) 410px, 450px"
									priority
									className="object-cover object-top"
								/>
							</div>
						</div>

						{/* Social Media Icons — directly under centered photo */}
						<div className="flex items-center justify-center gap-3 sm:gap-4 mt-3 sm:mt-4">
							<a
								href="https://github.com/ellysinday5"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2.5 sm:p-3 rounded-full border-2 border-brand-primary/40 text-brand-primary hover:border-brand-primary hover:bg-brand-primary/10 transition-all duration-300 hover:scale-110 shadow-lg shadow-brand-primary/10 hover:shadow-brand-primary/20"
								aria-label="GitHub Profile"
							>
								<svg
									className="w-4 h-4 sm:w-5 sm:h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-label="GitHub"
								>
									<title>GitHub</title>
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
							</a>
							<a
								href="https://www.linkedin.com/in/ellen-grace-sinday-7b33793ab/"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2.5 sm:p-3 rounded-full border-2 border-brand-primary/40 text-brand-primary hover:border-brand-primary hover:bg-brand-primary/10 transition-all duration-300 hover:scale-110 shadow-lg shadow-brand-primary/10 hover:shadow-brand-primary/20"
								aria-label="LinkedIn Profile"
							>
								<svg
									className="w-4 h-4 sm:w-5 sm:h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-label="LinkedIn"
								>
									<title>LinkedIn</title>
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
								</svg>
							</a>
							<a
								href="mailto:ellysinday5@gmail.com"
								className="p-2.5 sm:p-3 rounded-full border-2 border-brand-primary/40 text-brand-primary hover:border-brand-primary hover:bg-brand-primary/10 transition-all duration-300 hover:scale-110 shadow-lg shadow-brand-primary/10 hover:shadow-brand-primary/20"
								aria-label="Email"
							>
								<svg
									className="w-4 h-4 sm:w-5 sm:h-5"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-label="Email"
								>
									<title>Email</title>
									<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
