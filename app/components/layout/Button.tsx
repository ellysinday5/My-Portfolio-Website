import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonBaseProps {
	variant?: ButtonVariant;
	children: ReactNode;
	className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
	as?: "button";
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	href?: never;
	target?: never;
	rel?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
	as: "link";
	href: string;
	type?: never;
	onClick?: never;
	target?: never;
	rel?: never;
}

interface ButtonAsAnchor extends ButtonBaseProps {
	as: "anchor";
	href: string;
	target?: string;
	rel?: string;
	type?: never;
	onClick?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const variantStyles: Record<ButtonVariant, string> = {
	primary:
		"bg-[var(--color-brand-primary)] text-white shadow-md shadow-brand-primary/20 hover:bg-[var(--color-brand-primary)]/90 hover:shadow-lg hover:shadow-brand-primary/25 hover:scale-[1.02] active:scale-[0.98]",
	secondary:
		"border border-[var(--border)] bg-[var(--card-bg)] text-[var(--foreground)] hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/5 hover:scale-[1.02] active:scale-[0.98]",
	ghost:
		"text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--badge-bg)]",
};

const baseStyles =
	"inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 cursor-pointer";

export default function Button({
	variant = "primary",
	children,
	className = "",
	...props
}: ButtonProps) {
	const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

	if (props.as === "link") {
		return (
			<Link href={props.href} className={classes}>
				{children}
			</Link>
		);
	}

	if (props.as === "anchor") {
		return (
			<a
				href={props.href}
				target={props.target}
				rel={props.rel}
				className={classes}
			>
				{children}
			</a>
		);
	}

	return (
		<button
			type={props.type ?? "button"}
			onClick={props.onClick}
			className={classes}
		>
			{children}
		</button>
	);
}
