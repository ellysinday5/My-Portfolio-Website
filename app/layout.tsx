import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Ellen Grace Sinday | Software Engineering Intern",
	description:
		"A professional developer portfolio showcasing Next.js 16, React 19, and Tailwind v4 engineering.",
	openGraph: {
		title: "Ellen Grace Sinday | Software Engineering Intern",
		description:
			"A professional developer portfolio showcasing Next.js 16, React 19, and Tailwind v4 engineering.",
		type: "website",
		locale: "en_US",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-brand-primary)]/20 selection:text-[var(--color-brand-primary)]">
				<header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md transition-colors duration-300">
					<div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
						<Link href="/" className="group flex items-center space-x-2">
							<span className="text-xl font-bold tracking-tight bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
								DevPortfolio.
							</span>
						</Link>
						<nav className="flex items-center space-x-6 text-sm font-medium">
							<Link
								href="/"
								className="text-[var(--foreground)]/70 transition-colors hover:text-[var(--color-brand-primary)]"
							>
								Home
							</Link>
							<Link
								href="/about"
								className="text-[var(--foreground)]/70 transition-colors hover:text-[var(--color-brand-primary)]"
							>
								About
							</Link>
							<Link
								href="/projects"
								className="text-[var(--foreground)]/70 transition-colors hover:text-[var(--color-brand-primary)]"
							>
								Projects
							</Link>
							<Link
								href="/contact"
								className="text-[var(--foreground)]/70 transition-colors hover:text-[var(--color-brand-primary)]"
							>
								Contact
							</Link>
						</nav>
					</div>
				</header>

				<main className="flex-1 flex flex-col">{children}</main>

				<footer className="w-full border-t border-[var(--border)] bg-[var(--background)] py-8 transition-colors duration-300">
					<div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
						<p className="text-xs text-[var(--muted)]">
							&copy; {new Date().getFullYear()} DevPortfolio. All rights
							reserved.
						</p>
						<div className="flex space-x-6 text-xs text-[var(--muted)]">
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-[var(--foreground)] transition-colors"
							>
								GitHub
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-[var(--foreground)] transition-colors"
							>
								LinkedIn
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-[var(--foreground)] transition-colors"
							>
								Twitter
							</a>
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}
