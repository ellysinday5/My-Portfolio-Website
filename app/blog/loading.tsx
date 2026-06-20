export default function BlogLoading() {
	return (
		<div className="w-full max-w-5xl mx-auto px-6 py-16 animate-pulse flex flex-col gap-12">
			{/* Header Skeleton */}
			<div className="flex flex-col gap-4">
				<div className="h-12 w-1/3 bg-[var(--border)] rounded-xl"></div>
				<div className="h-6 w-2/3 bg-[var(--border)] rounded-lg"></div>
			</div>

			{/* Post Cards Skeleton Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
				{[1, 2, 3].map((i) => (
					<div
						key={i}
						className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] overflow-hidden"
					>
						{/* Card image skeleton */}
						<div className="aspect-[16/10] w-full bg-[var(--border)]"></div>

						{/* Card content skeleton */}
						<div className="flex flex-col p-6 gap-4">
							<div className="h-3 w-1/3 bg-[var(--border)] rounded"></div>
							<div className="h-5 w-5/6 bg-[var(--border)] rounded"></div>
							<div className="flex flex-col gap-2">
								<div className="h-3 w-full bg-[var(--border)] rounded"></div>
								<div className="h-3 w-5/6 bg-[var(--border)] rounded"></div>
							</div>
							<div className="h-6 w-20 bg-[var(--border)] rounded mt-4"></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
