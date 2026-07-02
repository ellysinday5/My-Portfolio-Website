"use client";

import { useActionState, useOptimistic } from "react";
import { useFormStatus } from "react-dom";
import { type ContactState, submitContact } from "./actions";

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button type="submit" disabled={pending} className="contact-form__submit">
			{pending ? (
				<span className="contact-form__submit-loading">
					<svg
						className="contact-form__spinner"
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
					Sending...
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

export function ContactForm() {
	const [state, formAction] = useActionState(submitContact, initialState);
	const [optimisticMessage, addOptimisticMessage] = useOptimistic<
		string | null,
		FormData
	>(null, (_currentMessage, formData) => {
		const message = formData.get("message")?.toString().trim();
		return message ? `Sending: "${message}"` : "Sending your message...";
	});

	const handleFormAction = (formData: FormData) => {
		addOptimisticMessage(formData);
		formAction(formData);
	};

	return (
		<div className="contact-form">
			{state.success ? (
				<div className="contact-form__success">
					<div className="contact-form__success-icon">OK</div>
					<h3 className="contact-form__success-title">Message Sent!</h3>
					<p className="contact-form__success-message">{state.message}</p>
					<button
						type="button"
						onClick={() => window.location.reload()}
						className="contact-form__success-action"
					>
						Send another message
					</button>
				</div>
			) : (
				<form action={handleFormAction} className="contact-form__fields">
					{/* Row wrapper for Last Name and First Name side-by-side */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<div className="contact-form__field">
							<label htmlFor="lastName" className="contact-form__label">
								LAST NAME <span className="text-red-500">*</span>
							</label>
							<input
								id="lastName"
								name="lastName"
								type="text"
								placeholder="Enter Last Name"
								required
								className="contact-form__input"
							/>
							{state.errors?.lastName && (
								<p className="contact-form__error">{state.errors.lastName}</p>
							)}
						</div>

						<div className="contact-form__field">
							<label htmlFor="firstName" className="contact-form__label">
								FIRST NAME <span className="text-red-500">*</span>
							</label>
							<input
								id="firstName"
								name="firstName"
								type="text"
								placeholder="Enter First Name"
								required
								className="contact-form__input"
							/>
							{state.errors?.firstName && (
								<p className="contact-form__error">{state.errors.firstName}</p>
							)}
						</div>
					</div>

					<div className="contact-form__field">
						<label htmlFor="email" className="contact-form__label">
							EMAIL ADDRESS <span className="text-red-500">*</span>
						</label>
						<input
							id="email"
							name="email"
							type="email"
							placeholder="example@gmail.com"
							required
							className="contact-form__input"
						/>
						{state.errors?.email && (
							<p className="contact-form__error">{state.errors.email}</p>
						)}
					</div>

					<div className="contact-form__field">
						<label htmlFor="message" className="contact-form__label">
							MESSAGE <span className="text-red-500">*</span>
						</label>
						<textarea
							id="message"
							name="message"
							placeholder="Type a message"
							required
							rows={5}
							className="contact-form__input contact-form__textarea"
						/>
						{state.errors?.message && (
							<p className="contact-form__error">{state.errors.message}</p>
						)}
					</div>

					{state.message && !state.success && (
						<div className="contact-form__alert">{state.message}</div>
					)}

					{optimisticMessage && (
						<div className="contact-form__optimistic">{optimisticMessage}</div>
					)}

					<SubmitButton />
				</form>
			)}
		</div>
	);
}
