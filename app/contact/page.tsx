import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
	title: "Contact | DevPortfolio",
	description:
		"Get in touch with me. Submit a message for collaborations, freelance inquiries, or just to say hi.",
	openGraph: {
		title: "Contact | DevPortfolio",
		description:
			"Get in touch with me. Submit a message for collaborations, freelance inquiries, or just to say hi.",
		type: "website",
	},
};

export default function ContactPage() {
	return (
		<div className="relative flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-16">
			{/* Background visual element */}
			<div className="absolute bottom-10 right-10 -z-10 h-[250px] w-[250px] rounded-full bg-brand-primary/5 blur-[95px]"></div>

			<main className="w-full max-w-xl mx-auto flex flex-col gap-10">
				<div className="flex flex-col gap-4 text-center">
					<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
						Get in <span className="gradient-text">Touch</span>
					</h1>
					<p className="text-sm sm:text-base text-[var(--muted)]">
						Have a project in mind, a job opportunity, or just want to chat?
						Fill out the form below and I'll respond as soon as possible.
					</p>
				</div>

				<ContactForm />
			</main>
		</div>
	);
}
