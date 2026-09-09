"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "../layout/ThemeToggle";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About Me" },
	{ href: "/projects", label: "Projects" },
	// { href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Automatically close mobile menu on route change
	useEffect(() => {
		// pathname read here so biome treats it as a used dependency
		if (pathname !== undefined) setMobileMenuOpen(false);
	}, [pathname]);

	// Close on Escape key (setMobileMenuOpen is stable — empty deps is correct)
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setMobileMenuOpen(false);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	const isActive = (href: string) => {
		if (href === "/") return pathname === "/";
		return pathname.startsWith(href);
	};

	return (
		<header
			className={`sticky top-0 z-50 w-full transition-all duration-500 ${
				scrolled || mobileMenuOpen
					? "border-b border-border bg-(--nav-bg) backdrop-blur-xl shadow-md py-3"
					: "border-b border-transparent bg-transparent py-5"
			}`}
		>
			<div className="mx-auto flex max-w-[1600px] 2xl:max-w-[1760px] items-center justify-between px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
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
					<span className="text-xl font-black tracking-widest text-foreground transition-colors duration-300 group-hover:text-brand-primary">
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
								className={`relative text-sm font-semibold tracking-wide transition-all duration-300 py-1 hover:text-brand-primary ${
									isActive(link.href)
										? "text-brand-primary"
										: "text-foreground opacity-80 hover:opacity-100"
								}`}
							>
								{link.label}
								{isActive(link.href) && (
									<span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-brand-primary" />
								)}
							</Link>
						))}
					</nav>

					<div className="flex items-center gap-4 pl-0 md:pl-4 md:border-l border-border">
						<ThemeToggle />

						{/* Mobile Hamburger Button */}
						<button
							type="button"
							onClick={() => setMobileMenuOpen((prev) => !prev)}
							aria-label="Toggle navigation menu"
							aria-expanded={mobileMenuOpen}
							className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 rounded-xl border border-border bg-card/50 text-foreground hover:text-brand-primary hover:border-brand-primary/50 transition-colors duration-200"
						>
							<span
								className={`block w-5 h-0.5 bg-current rounded-full transition-transform duration-300 ${
									mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
								}`}
							/>
							<span
								className={`block w-5 h-0.5 bg-current rounded-full transition-opacity duration-300 ${
									mobileMenuOpen ? "opacity-0" : "opacity-100"
								}`}
							/>
							<span
								className={`block w-5 h-0.5 bg-current rounded-full transition-transform duration-300 ${
									mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
								}`}
							/>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Dropdown Menu */}
			<div
				className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
					mobileMenuOpen
						? "max-h-80 opacity-100 border-b border-border bg-(--nav-bg)/95 backdrop-blur-2xl shadow-xl"
						: "max-h-0 opacity-0 border-b-0"
				}`}
			>
				<nav className="flex flex-col px-6 py-4 gap-2">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							onClick={() => setMobileMenuOpen(false)}
							className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold tracking-wide transition-all duration-200 ${
								isActive(link.href)
									? "bg-brand-primary/10 text-brand-primary"
									: "text-foreground/80 hover:bg-muted/40 hover:text-brand-primary"
							}`}
						>
							<span>{link.label}</span>
							{isActive(link.href) && (
								<span className="w-2 h-2 rounded-full bg-brand-primary shadow-sm shadow-brand-primary/50" />
							)}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}
