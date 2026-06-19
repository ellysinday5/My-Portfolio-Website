export default function ProjectsLoading() {
	const skeletonCards = Array.from({ length: 3 });

	return (
		<div className="w-full max-w-5xl mx-auto px-6 py-16 animate-pulse flex flex-col gap-10">
			{/* Title & Desc Skeleton */}
			<div className="flex flex-col gap-4 text-center sm:text-left">
				<div className="h-10 w-48 bg-[var(--border)] rounded-xl mx-auto sm:mx-0"></div>
				<div className="h-4 w-2/3 max-w-lg bg-[var(--border)] rounded-md mx-auto sm:mx-0 mt-2"></div>
			</div>

			{/* Grid of Skeleton Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{skeletonCards.map((_, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: Static array mapping for placeholder
						key={index}
						className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] overflow-hidden"
					>
						{/* Image Placeholder */}
						<div className="relative aspect-video w-full bg-[var(--border)]"></div>

						{/* Content Placeholders */}
						<div className="flex flex-col p-6 gap-3">
							<div className="h-5 w-2/3 bg-[var(--border)] rounded-md"></div>
							<div className="h-4 w-full bg-[var(--border)] rounded-md"></div>
							<div className="h-4 w-5/6 bg-[var(--border)] rounded-md"></div>

							{/* Tags Placeholder */}
							<div className="flex gap-2 mt-4">
								<div className="h-6 w-16 bg-[var(--border)] rounded-full"></div>
								<div className="h-6 w-16 bg-[var(--border)] rounded-full"></div>
							</div>

							{/* Bottom Row Placeholder */}
							<div className="mt-6 pt-4 border-t border-[var(--border)] flex justify-between items-center">
								<div className="h-4 w-20 bg-[var(--border)] rounded-md"></div>
								<div className="flex gap-3">
									<div className="h-4 w-8 bg-[var(--border)] rounded-md"></div>
									<div className="h-4 w-8 bg-[var(--border)] rounded-md"></div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
