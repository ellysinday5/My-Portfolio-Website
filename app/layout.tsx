import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/Footer";
import ThemeProvider from "./components/layout/ThemeProvider";
import Navbar from "./components/navbar/Navbar";

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
			suppressHydrationWarning
		>
			{/* suppressHydrationWarning silences the React 19 script-in-tree warning */}
			<head suppressHydrationWarning>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: inline script required to prevent FOUC before hydration */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
					}}
				/>
			</head>
			<body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-brand-primary)]/20 selection:text-[var(--color-brand-primary)]">
				<ThemeProvider>
					<Navbar />
					<main className="flex-1 flex flex-col">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
