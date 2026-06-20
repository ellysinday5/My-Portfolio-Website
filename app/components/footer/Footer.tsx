export default function Footer() {
	return (
		<footer className="w-full border-t border-[var(--border)] bg-[var(--background)] transition-colors duration-500">
			<div className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
				<div className="flex items-center justify-center">
					<p className="text-xs text-[var(--muted)]">
						&copy; {new Date().getFullYear()} Ellen Grace Sinday. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
