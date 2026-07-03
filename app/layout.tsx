import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import DotGridBackground from "@/components/layout/DotGridBackground";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Navbar from "@/components/navbar/Navbar";

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
			<body
				className="min-h-full flex flex-col selection:bg-brand-primary selection:text-white"
				suppressHydrationWarning
			>
				{/* Inline script prevents FOUC by applying saved theme before hydration */}
				<script
					suppressHydrationWarning
					// biome-ignore lint/security/noDangerouslySetInnerHtml: inline script required to prevent FOUC before hydration
					dangerouslySetInnerHTML={{
						__html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
					}}
				/>
				<ThemeProvider>
					<DotGridBackground />
					<Navbar />
					<main className="flex-1 flex flex-col">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
