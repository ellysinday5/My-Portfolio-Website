"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "../layout/ThemeToggle";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/projects", label: "Projects" },
	{ href: "/about", label: "About Me" },
	{ href: "/blog", label: "Blog" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollToContact = () => {
		if (pathname === "/") {
			const contactSection = document.getElementById("contact-section");
			if (contactSection) {
				contactSection.scrollIntoView({ behavior: "smooth" });
			}
		}
	};

	const isActive = (href: string) => {
		if (href === "/") return pathname === "/";
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
					className="group flex items-center space-x-3 focus:outline-none"
				>
					{/* Gold Diamond Icon */}
					<div className="relative flex items-center justify-center w-8 h-8">
						<svg
							className="w-full h-full transition-transform duration-500 group-hover:rotate-90"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-label="Elly Logo"
						>
							<title>Elly Logo</title>
							{/* Outer Gold Diamond */}
							<path
								d="M12 2L22 12L12 22L2 12Z"
								className="fill-brand-primary stroke-brand-accent"
								strokeWidth="1.5"
							/>
							{/* Inner Cutout Diamond */}
							<path
								d="M12 7L17 12L12 17L7 12Z"
								fill="var(--background)"
								className="transition-colors duration-500"
							/>
						</svg>
					</div>
					<span className="text-xl font-bold tracking-widest text-[var(--foreground)] transition-colors duration-300 group-hover:text-brand-primary">
						ELLY
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
										: "text-[color:var(--foreground)] opacity-80 hover:opacity-100"
								}`}
							>
								{link.label}
								{isActive(link.href) && (
									<span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-brand-primary" />
								)}
							</Link>
						))}
						<button
							type="button"
							onClick={scrollToContact}
							className={`relative text-sm font-semibold tracking-wide transition-all duration-300 py-1 hover:text-brand-primary ${
								pathname === "/"
									? "text-[var(--foreground)] opacity-80 hover:opacity-100"
									: "text-[var(--muted)] opacity-50 cursor-default"
							}`}
							disabled={pathname !== "/"}
						>
							Contact
						</button>
					</nav>

					<div className="flex items-center gap-4 pl-4 border-l border-[var(--border)]">
						<ThemeToggle />
					</div>
				</div>
			</div>
		</header>
	);
}
