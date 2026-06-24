"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "../layout/ThemeToggle";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/#about", label: "About Me", scrollId: "about" },
	{ href: "/projects", label: "Projects" },
	{ href: "/blog", label: "Blog" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const [hash, setHash] = useState("");

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Sync hash state on mount and on navigation
	useEffect(() => {
		setHash(window.location.hash);
		const onHashChange = () => setHash(window.location.hash);
		window.addEventListener("hashchange", onHashChange);
		return () => window.removeEventListener("hashchange", onHashChange);
	}, []);

	useEffect(() => {
		if (pathname === "/" && window.location.hash === "#contact-section") {
			const contactSection = document.getElementById("contact-section");
			if (contactSection) {
				contactSection.scrollIntoView({ behavior: "smooth" });
			}
		}
		if (pathname === "/" && window.location.hash === "#about") {
			const aboutSection = document.getElementById("about");
			if (aboutSection) {
				aboutSection.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [pathname]);

	const scrollToContact = (e: React.MouseEvent) => {
		if (pathname === "/") {
			e.preventDefault();
			document
				.getElementById("contact-section")
				?.scrollIntoView({ behavior: "smooth" });
		}
	};

	const scrollToAbout = (e: React.MouseEvent) => {
		if (pathname === "/") {
			e.preventDefault();
			document
				.getElementById("about")
				?.scrollIntoView({ behavior: "smooth" });
		}
	};

	const isActive = (href: string) => {
		if (href === "/") return pathname === "/" && !hash;
		if (href === "/#about") return pathname === "/" && hash === "#about";
		return pathname.startsWith(href);
	};

	return (
		<header
			className={`sticky top-0 z-50 w-full transition-all duration-500 ${
				scrolled
					? "border-b border-[color:var(--border)] bg-[color:var(--nav-bg)] backdrop-blur-xl shadow-md py-3"
					: "border-b border-transparent bg-transparent py-5"
			}`}
		>
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
				{/* Logo */}
				<Link
					href="/"
					className="group flex items-center space-x-2 focus:outline-none"
				>
					{/* Puzzle Lightbulb Icon */}
					<div className="relative flex items-center justify-center w-10 h-10">
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
								<clipPath id="bulb-clip">
									<path d="M24 2C14.611 2 7 9.611 7 19c0 5.857 2.99 11.02 7.5 14.07V37h19v-3.93C38.01 30.02 41 24.857 41 19c0-9.389-7.611-17-17-17z" />
								</clipPath>
							</defs>

							{/* ── 4 PUZZLE PIECES clipped to bulb shape ── */}
							<g clipPath="url(#bulb-clip)">
								{/* Top-left */}
								<path
									d="M7 2 H24 V19
									 C22 19 20.5 17.6 20.5 15.5 C20.5 13.4 19 12 17 12
									 C15 12 13.5 13.4 13.5 15.5 C13.5 17.6 12 19 10 19
									 H7 Z"
									className="fill-[var(--muted)] group-hover:fill-brand-secondary transition-colors duration-300"
								/>
								{/* Top-right */}
								<path
									d="M24 2 H41 V19 H38
									 C36 19 34.5 17.6 34.5 15.5 C34.5 13.4 33 12 31 12
									 C29 12 27.5 13.4 27.5 15.5 C27.5 17.6 26 19 24 19 Z"
									className="fill-[oklch(0.62_0.01_75)] group-hover:fill-brand-primary transition-colors duration-300"
									style={{ transitionDelay: "50ms" }}
								/>
								{/* Bottom-left */}
								<path
									d="M7 19 H10
									 C12 19 13.5 20.4 13.5 22.5 C13.5 24.6 15 26 17 26
									 C19 26 20.5 24.6 20.5 22.5 C20.5 20.4 22 19 24 19
									 V37 H7 Z"
									className="fill-[oklch(0.62_0.01_75)] group-hover:fill-brand-primary transition-colors duration-300"
									style={{ transitionDelay: "100ms" }}
								/>
								{/* Bottom-right */}
								<path
									d="M24 19
									 C26 19 27.5 20.4 27.5 22.5 C27.5 24.6 29 26 31 26
									 C33 26 34.5 24.6 34.5 22.5 C34.5 20.4 36 19 38 19
									 H41 V37 H24 Z"
									className="fill-[var(--muted)] group-hover:fill-brand-secondary transition-colors duration-300"
									style={{ transitionDelay: "150ms" }}
								/>
							</g>

							{/* ── PUZZLE DIVIDERS ── */}
							<line x1="24" y1="2" x2="24" y2="37" stroke="var(--background)" strokeWidth="1.8" />
							<line x1="7" y1="19" x2="41" y2="19" stroke="var(--background)" strokeWidth="1.8" />

							{/* ── BULB OUTLINE ── */}
							<path
								d="M24 2C14.611 2 7 9.611 7 19c0 5.857 2.99 11.02 7.5 14.07V37h19v-3.93C38.01 30.02 41 24.857 41 19c0-9.389-7.611-17-17-17z"
								stroke="var(--border)"
								strokeWidth="1.2"
								fill="none"
								className="group-hover:stroke-brand-primary/50 transition-colors duration-300"
							/>

							{/* ── BASE NECK ── */}
							<rect x="18.5" y="37" width="11" height="3" rx="1" className="fill-[var(--muted)] group-hover:fill-brand-primary transition-colors duration-500" />
							<rect x="17" y="41" width="14" height="2.5" rx="1" className="fill-[var(--muted)] group-hover:fill-brand-primary transition-colors duration-500" style={{ transitionDelay: "80ms" }} />
							<rect x="18.5" y="44.5" width="11" height="2" rx="1" className="fill-[var(--muted)] group-hover:fill-brand-primary transition-colors duration-500" style={{ transitionDelay: "160ms" }} />
							<rect x="21" y="47.5" width="6" height="3" rx="1.5" className="fill-[var(--muted)] group-hover:fill-brand-primary transition-colors duration-500" style={{ transitionDelay: "240ms" }} />

							{/* ── GLOW RAYS (appear on hover) ── */}
							<line x1="24" y1="-1" x2="24" y2="0.5" stroke="var(--color-brand-primary)" strokeWidth="2.5" strokeLinecap="round" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: "200ms" }} />
							<line x1="34" y1="2.5" x2="35.2" y2="1.3" stroke="var(--color-brand-primary)" strokeWidth="2" strokeLinecap="round" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: "220ms" }} />
							<line x1="43" y1="12" x2="44.5" y2="12" stroke="var(--color-brand-primary)" strokeWidth="2" strokeLinecap="round" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: "240ms" }} />
							<line x1="14" y1="2.5" x2="12.8" y2="1.3" stroke="var(--color-brand-primary)" strokeWidth="2" strokeLinecap="round" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: "220ms" }} />
							<line x1="5" y1="12" x2="3.5" y2="12" stroke="var(--color-brand-primary)" strokeWidth="2" strokeLinecap="round" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: "240ms" }} />
						</svg>
					</div>

					{/* EG wordmark */}
					<span className="text-xl font-black tracking-widest text-[var(--foreground)] transition-colors duration-300 group-hover:text-brand-primary">
						EG
					</span>
				</Link>

				{/* Desktop Nav Links & Controls */}
				<div className="flex items-center gap-6">
					<nav className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={link.scrollId === "about" ? scrollToAbout : undefined}
								className={`relative text-sm font-semibold tracking-wide transition-all duration-300 py-1 hover:text-brand-primary ${
									isActive(link.href)
										? "text-brand-primary"
										: "text-[color:var(--foreground)] opacity-80 hover:opacity-100"
								}`}
							>
								{link.label}
								{isActive(link.href) && (
									<span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-brand-primary" />
								)}
							</Link>
						))}
						<Link
							href="/#contact-section"
							onClick={scrollToContact}
							className="relative text-sm font-semibold tracking-wide transition-all duration-300 py-1 hover:text-brand-primary text-[color:var(--foreground)] opacity-80 hover:opacity-100"
						>
							Contact
						</Link>
					</nav>

					<div className="flex items-center gap-4 pl-4 border-l border-[var(--border)]">
						<ThemeToggle />
					</div>
				</div>
			</div>
		</header>
	);
}
