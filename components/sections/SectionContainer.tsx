interface SectionContainerProps {
	children: React.ReactNode;
	className?: string;
	id?: string;
}

export default function SectionContainer({
	children,
	className = "",
	id,
}: SectionContainerProps) {
	return (
		<div
			id={id}
			className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}
		>
			{children}
		</div>
	);
}
