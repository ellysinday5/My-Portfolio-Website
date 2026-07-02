export default function GlobalLoading() {
	return (
		<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
			<div className="relative w-16 h-16">
				{/* Outer spinning ring */}
				<div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-primary border-r-brand-secondary animate-[spin_1s_linear_infinite]" />
				{/* Inner spinning ring (opposite direction) */}
				<div className="absolute inset-2 rounded-full border-4 border-transparent border-l-brand-accent border-b-brand-primary animate-[spin_1.5s_linear_infinite_reverse]" />
				{/* Center dot */}
				<div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
			</div>
			<p className="mt-4 text-sm font-semibold tracking-widest text-muted-foreground uppercase animate-pulse">
				Loading
			</p>
		</div>
	);
}
