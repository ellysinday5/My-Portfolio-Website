"use client";

import { useActionState } from "react";
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

	return (
		<div className="contact-form">
			{state.success ? (
				<div className="contact-form__success">
					<div className="contact-form__success-icon">✓</div>
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
				<form action={formAction} className="contact-form__fields">
					<div className="contact-form__field">
						<label htmlFor="name" className="contact-form__label">
							Name
						</label>
						<input
							id="name"
							name="name"
							type="text"
							required
							className="contact-form__input"
						/>
						{state.errors?.name && (
							<p className="contact-form__error">{state.errors.name}</p>
						)}
					</div>

					<div className="contact-form__field">
						<label htmlFor="email" className="contact-form__label">
							Email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							required
							className="contact-form__input"
						/>
						{state.errors?.email && (
							<p className="contact-form__error">{state.errors.email}</p>
						)}
					</div>

					<div className="contact-form__field">
						<label htmlFor="subject" className="contact-form__label">
							Subject
						</label>
						<input
							id="subject"
							name="subject"
							type="text"
							required
							className="contact-form__input"
						/>
						{state.errors?.subject && (
							<p className="contact-form__error">{state.errors.subject}</p>
						)}
					</div>

					<div className="contact-form__field">
						<label htmlFor="message" className="contact-form__label">
							Message
						</label>
						<textarea
							id="message"
							name="message"
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

					<SubmitButton />
				</form>
			)}
		</div>
	);
}
