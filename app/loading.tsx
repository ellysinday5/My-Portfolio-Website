export default function GlobalLoading() {
	return (
		<div className="w-full max-w-3xl mx-auto px-6 py-20 animate-pulse flex flex-col gap-8">
			{/* Skeleton Hero Block */}
			<div className="h-4 w-32 bg-[var(--border)] rounded-full"></div>
			<div className="h-12 w-3/4 bg-[var(--border)] rounded-xl"></div>
			<div className="h-6 w-1/2 bg-[var(--border)] rounded-lg"></div>

			{/* Skeleton Text Lines */}
			<div className="flex flex-col gap-3 pt-6 border-t border-[var(--border)]">
				<div className="h-4 w-full bg-[var(--border)] rounded"></div>
				<div className="h-4 w-5/6 bg-[var(--border)] rounded"></div>
				<div className="h-4 w-4/5 bg-[var(--border)] rounded"></div>
			</div>

			{/* Skeleton Action Buttons */}
			<div className="flex gap-4 pt-4">
				<div className="h-11 w-32 bg-[var(--border)] rounded-lg"></div>
				<div className="h-11 w-32 bg-[var(--border)] rounded-lg"></div>
			</div>
		</div>
	);
}
