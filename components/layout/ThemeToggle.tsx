"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="relative flex h-9 w-9 items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300 focus-visible:outline-none"
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
			title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
			suppressHydrationWarning
		>
			{/* Sun Icon */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				className={`absolute h-4 w-4 transition-all duration-300 ${
					theme === "dark"
						? "rotate-0 scale-100 opacity-100"
						: "rotate-90 scale-0 opacity-0"
				}`}
			>
				<title>Light Mode Indicator</title>
				<circle cx="12" cy="12" r="4" />
				<path d="M12 2v2" />
				<path d="M12 20v2" />
				<path d="m4.93 4.93 1.41 1.41" />
				<path d="m17.66 17.66 1.41 1.41" />
				<path d="M2 12h2" />
				<path d="M20 12h2" />
				<path d="m6.34 17.66-1.41 1.41" />
				<path d="m19.07 4.93-1.41 1.41" />
			</svg>

			{/* Moon Icon */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				className={`absolute h-4 w-4 transition-all duration-300 ${
					theme === "light"
						? "rotate-0 scale-100 opacity-100"
						: "-rotate-90 scale-0 opacity-0"
				}`}
			>
				<title>Dark Mode Indicator</title>
				<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
			</svg>
		</button>
	);
}
