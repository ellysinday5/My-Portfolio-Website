import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata: Metadata = {
	title: "About Me | Ellen Grace Sinday",
	description:
		"Software Engineering Intern passionate about building clean, user-friendly, and functional web applications.",
	openGraph: {
		title: "About Me | Ellen Grace Sinday",
		description:
			"Software Engineering Intern passionate about building clean, user-friendly, and functional web applications.",
		type: "profile",
	},
};

export default function AboutPage() {
	return (
		<div className="relative w-full overflow-hidden bg-background text-foreground transition-colors duration-300">
			<ScrollToTop />
			<div className="fixed top-1/4 right-1/4 -z-10 h-100 w-100 rounded-full bg-brand-primary/8 blur-[140px] pointer-events-none" />
			<div className="fixed bottom-1/3 left-1/4 -z-10 h-75 w-75 rounded-full bg-brand-accent/5 blur-[100px] pointer-events-none" />
			<AboutSection />
			<Footer />
		</div>
	);
}
