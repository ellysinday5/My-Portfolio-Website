export default function ProjectsLoading() {
	return (
		<div className="min-h-screen bg-background text-foreground animate-pulse">
			{/* Page header */}
			<div className="px-8 pt-14 pb-10 border-b border-border flex justify-center">
				<div className="h-12 w-64 bg-muted rounded-md" />
			</div>

			{/* Carousel Skeleton */}
			<div className="relative w-full py-10 overflow-hidden">
				<div className="flex items-stretch justify-center gap-4 px-4">
					{/* Left peek skeleton */}
					<div className="hidden sm:block shrink-0 rounded-xl bg-muted w-[24vw] aspect-[3/4] max-h-[420px]" />

					{/* Center skeleton */}
					<div className="relative shrink-0 rounded-xl bg-muted w-[44vw] aspect-[3/4] max-h-[480px] min-w-[260px]">
						<div className="absolute inset-0 p-8 flex flex-col justify-end gap-4">
							<div className="h-8 w-3/4 bg-muted-foreground/20 rounded" />
							<div className="h-4 w-1/2 bg-muted-foreground/20 rounded" />
							<div className="flex gap-2">
								<div className="h-4 w-16 bg-muted-foreground/20 rounded-full" />
								<div className="h-4 w-16 bg-muted-foreground/20 rounded-full" />
							</div>
						</div>
					</div>

					{/* Right peek skeleton */}
					<div className="hidden sm:block shrink-0 rounded-xl bg-muted w-[24vw] aspect-[3/4] max-h-[420px]" />
				</div>
			</div>

			{/* Grid Skeleton */}
			<div className="px-8 py-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
					{[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
						<div key={id} className="flex flex-col gap-3">
							<div className="w-full aspect-[4/3] bg-muted rounded-xl" />
							<div className="h-6 w-3/4 bg-muted rounded" />
							<div className="h-4 w-full bg-muted rounded" />
							<div className="h-4 w-2/3 bg-muted rounded" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
