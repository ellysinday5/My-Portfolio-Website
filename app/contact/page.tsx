import type { Metadata } from "next";
import { ContactView } from "@/app/contact/contact-view";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
	title: "Contact | Ellen Grace Sinday",
	description:
		"Get in touch with Ellen Grace Sinday — aspiring software engineer and frontend developer.",
	openGraph: {
		title: "Contact | Ellen Grace Sinday",
		description:
			"Get in touch with Ellen Grace Sinday — aspiring software engineer and frontend developer.",
		type: "website",
	},
};

export default function ContactPage() {
	return (
		<div className="relative w-full overflow-hidden bg-background text-foreground transition-colors duration-300">
			<div className="fixed top-1/4 right-1/4 -z-10 h-100 w-100 rounded-full bg-brand-primary/8 blur-[140px] pointer-events-none" />
			<div className="fixed bottom-1/3 left-1/4 -z-10 h-75 w-75 rounded-full bg-brand-accent/5 blur-[100px] pointer-events-none" />
			<ContactView />
			<Footer />
		</div>
	);
}
