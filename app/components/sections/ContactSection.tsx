"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { type ContactState, submitContact } from "../../contact/actions";

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			className="w-full flex h-12 items-center justify-center rounded-lg bg-brand-primary px-6 text-sm font-semibold text-white transition-all hover:bg-brand-primary/90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-brand-primary/25"
		>
			{pending ? (
				<span className="flex items-center gap-2">
					<svg
						className="animate-spin h-4 w-4 text-white"
						fill="none"
						viewBox="0 0 24 24"
					>
						<title>Loading</title>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						/>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
					Sending Message...
				</span>
			) : (
				"Send Message"
			)}
		</button>
	);
}

const initialState: ContactState = {
	success: false,
	message: "",
};

export function ContactSection() {
	const [state, formAction] = useActionState(submitContact, initialState);

	return (
		<section
			id="contact-section"
			className="relative w-full py-24 md:py-32 px-6 lg:px-16 border-t border-[color:var(--border)] scroll-mt-20"
		>
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col items-center gap-12">
					{/* Section Title */}
					<div className="flex flex-col gap-4 text-center max-w-2xl">
						<h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
							Get In Touch
						</h2>
						<p className="text-[color:var(--muted)] text-lg leading-relaxed">
							Have a project in mind? Let's collaborate and create something
							amazing together.
						</p>
					</div>

					{/* Contact Form */}
					<div className="w-full max-w-md">
						<div className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--card-bg)] shadow-[color:var(--card-shadow)] p-6 sm:p-8">
							{state.success ? (
								<div className="flex flex-col items-center justify-center text-center py-10 gap-4 animate-fade-in">
									<div className="h-16 w-16 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-primary text-3xl">
										✓
									</div>
									<h3 className="text-xl font-bold">Message Sent!</h3>
									<p className="text-sm text-[var(--muted)] max-w-sm">
										{state.message}
									</p>
									<button
										type="button"
										onClick={() => window.location.reload()}
										className="mt-4 text-xs font-semibold text-brand-primary hover:underline"
									>
										Send another message
									</button>
								</div>
							) : (
								<form action={formAction} className="flex flex-col gap-6">
									<div className="flex flex-col gap-2">
										<label
											htmlFor="name"
											className="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)]"
										>
											Your Name
										</label>
										<input
											id="name"
											name="name"
											type="text"
											required
											placeholder="John Doe"
											className="form-input"
										/>
										{state.errors?.name && (
											<p className="text-xs text-red-500 font-medium mt-1">
												{state.errors.name}
											</p>
										)}
									</div>

									<div className="flex flex-col gap-2">
										<label
											htmlFor="email"
											className="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)]"
										>
											Email Address
										</label>
										<input
											id="email"
											name="email"
											type="email"
											required
											placeholder="john@example.com"
											className="form-input"
										/>
										{state.errors?.email && (
											<p className="text-xs text-red-500 font-medium mt-1">
												{state.errors.email}
											</p>
										)}
									</div>

									<div className="flex flex-col gap-2">
										<label
											htmlFor="message"
											className="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)]"
										>
											Your Message
										</label>
										<textarea
											id="message"
											name="message"
											required
											rows={5}
											placeholder="Hi, I would love to collaborate on a new project..."
											className="form-input resize-none"
										/>
										{state.errors?.message && (
											<p className="text-xs text-red-500 font-medium mt-1">
												{state.errors.message}
											</p>
										)}
									</div>

									{state.message && !state.success && (
										<div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-500 font-medium">
											{state.message}
										</div>
									)}

									<SubmitButton />
								</form>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
