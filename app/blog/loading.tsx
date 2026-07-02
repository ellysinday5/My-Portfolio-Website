export default function BlogLoading() {
	return (
		<div className="relative w-full min-h-screen bg-[color:var(--background)] text-[var(--foreground)] transition-colors duration-300 px-6 py-16 lg:px-16 animate-pulse">
			<main className="w-full max-w-5xl mx-auto flex flex-col gap-12">
				{/* Header Skeleton */}
				<div className="flex flex-col gap-4">
					<div className="h-16 w-3/4 max-w-md bg-muted rounded-md" />
					<div className="flex flex-col gap-2 mt-4">
						<div className="h-5 w-full max-w-2xl bg-muted rounded" />
						<div className="h-5 w-2/3 max-w-xl bg-muted rounded" />
					</div>
				</div>

				{/* Blog Cards Grid Skeleton */}
				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
					{[1, 2, 3, 4, 5, 6].map((id) => (
						<div
							key={id}
							className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] shadow-[var(--card-shadow)] overflow-hidden"
						>
							<div className="relative aspect-[16/10] w-full bg-muted border-b border-[var(--border)]" />
							<div className="flex flex-col p-6 gap-3">
								<div className="h-6 w-5/6 bg-muted rounded" />
								<div className="h-4 w-full bg-muted rounded" />
								<div className="h-4 w-4/5 bg-muted rounded" />

								<div className="flex items-center justify-between mt-4">
									<div className="h-3 w-1/4 bg-muted rounded" />
									<div className="h-3 w-1/4 bg-muted rounded" />
								</div>
							</div>
						</div>
					))}
				</section>
			</main>
		</div>
	);
}
