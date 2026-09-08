export default function Footer() {
	return (
		<footer className="w-full border-t border-border bg-background transition-colors duration-500 py-3.5">
			<div className="mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-center text-center">
				<p className="text-xs text-muted-foreground tracking-wide">
					&copy; {new Date().getFullYear()} Ellen Grace Sinday. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

