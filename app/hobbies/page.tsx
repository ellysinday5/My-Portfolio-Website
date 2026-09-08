import type { Metadata } from "next";
import Link from "next/link";
import { hobbies } from "@/app/about/data";
import { HobbiesSection } from "@/components/sections/HobbiesSection";

export const metadata: Metadata = {
	title: "Hobbies | Ellen Grace Sinday",
	description:
		"Explore my hobbies and passions outside of software engineering — chess, music, sports, and more.",
	openGraph: {
		title: "Hobbies | Ellen Grace Sinday",
		description:
			"Explore my hobbies and passions outside of software engineering.",
		type: "website",
	},
};

export default function HobbiesPage() {
	return (
		<div className="relative w-full overflow-hidden bg-background text-foreground transition-colors duration-300">
			{/* Background glows */}
			<div className="fixed top-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-brand-primary/8 blur-[140px] pointer-events-none" />
			<div className="fixed bottom-1/3 left-1/4 -z-10 h-72 w-72 rounded-full bg-brand-accent/5 blur-[100px] pointer-events-none" />

			{/* ── Hero ── */}
			<section className="w-full px-4 sm:px-6 py-12 sm:py-20 lg:px-16 border-b border-border">
				<div className="mx-auto max-w-7xl">
					{/* Back button */}
					<Link
						href="/about"
						className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-brand-primary transition-colors duration-300 mb-8"
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							className="transition-transform duration-200 group-hover:-translate-x-0.5"
						>
							<title>Back</title>
							<path
								d="M10 12L6 8L10 4"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						Back to About
					</Link>

					<div className="flex flex-col gap-6 max-w-3xl">
						<div className="flex items-center gap-3">
							<span className="w-1 h-6 bg-brand-primary rounded-full" />
							<span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
								Beyond Code
							</span>
						</div>
						<h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none">
							My <span className="gradient-text">Hobbies</span> & Interests
						</h1>
						<p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
							Outside of writing code, I keep myself active, creative, and
							mentally sharp through a wide range of hobbies.
						</p>
					</div>
				</div>
			</section>

			{/* ── Hobby grid by category ── */}
			<section className="w-full px-4 sm:px-6 py-10 sm:py-16 lg:px-16">
				<div className="mx-auto max-w-7xl">
					<HobbiesSection hobbies={hobbies} />
				</div>
			</section>

			{/* ── CTA ── */}
			<section className="w-full px-4 sm:px-6 py-12 sm:py-20 lg:px-16 border-t border-border">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
						Want to Connect?
					</h2>
					<p className="text-base text-muted-foreground mb-8 leading-relaxed">
						Whether it's about tech, chess strategies, music, or anything in
						between — I'd love to chat!
					</p>
					<div className="flex items-center justify-center gap-4 flex-wrap">
						<Link
							href="/contact"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary text-[#0c0a09] font-bold text-sm tracking-wide transition-all duration-300 hover:bg-brand-secondary hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(236,72,153,0.4)]"
						>
							Let's Chat
						</Link>
						<Link
							href="/projects"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-brand-primary text-foreground font-bold text-sm tracking-wide transition-all duration-300 hover:border-brand-secondary hover:text-brand-primary hover:bg-brand-primary/10"
						>
							See My Work
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
