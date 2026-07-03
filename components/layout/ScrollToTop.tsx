"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			// Show button when page is scrolled down
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility, { passive: true });
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			type="button"
			onClick={scrollToTop}
			// bottom/right offsets step down on small screens, and the bottom
			// offset also respects the iOS/Android gesture-bar safe area via
			// env(safe-area-inset-bottom) so the button never sits under it.
			className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 sm:bottom-8 sm:right-8 z-40 p-2.5 sm:p-3 rounded-full border-2 border-brand-primary text-brand-primary bg-background bg-opacity-80 backdrop-blur-md hover:bg-brand-primary/10 transition-all duration-300 focus:outline-none ${
				isVisible
					? "opacity-100 visible translate-y-0"
					: "opacity-0 invisible translate-y-10"
			}`}
			aria-label="Scroll to top"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth="2.5"
				className="w-4 h-4 sm:w-5 sm:h-5"
			>
				<title>Scroll to Top</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 19V5m7 7l-7-7-7 7"
				/>
			</svg>
		</button>
	);
}
