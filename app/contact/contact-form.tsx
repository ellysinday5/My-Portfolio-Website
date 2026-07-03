"use client";

import {
	type ChangeEvent,
	Component,
	type ErrorInfo,
	type ReactNode,
	useActionState,
	useOptimistic,
	useRef,
	useState,
} from "react";
import { useFormStatus } from "react-dom";
import { type ContactState, submitContact } from "./actions";

type FieldErrors = NonNullable<ContactState["errors"]>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Client-side validation mirroring the server's rules. Keeping this in
 * sync with `submitContact`'s own validation means invalid input gets
 * caught instantly, without waiting on a round trip — the server-side
 * checks stay in place as the real source of truth / last line of defense.
 */
function validateContactForm(formData: FormData): FieldErrors {
	const errors: FieldErrors = {};

	const lastName = formData.get("lastName")?.toString().trim() ?? "";
	if (!lastName) {
		errors.lastName = "Last name is required.";
	} else if (lastName.length < 2) {
		errors.lastName = "Last name must be at least 2 characters.";
	}

	const firstName = formData.get("firstName")?.toString().trim() ?? "";
	if (!firstName) {
		errors.firstName = "First name is required.";
	} else if (firstName.length < 2) {
		errors.firstName = "First name must be at least 2 characters.";
	}

	const email = formData.get("email")?.toString().trim() ?? "";
	if (!email) {
		errors.email = "Email address is required.";
	} else if (!EMAIL_PATTERN.test(email)) {
		errors.email = "Enter a valid email address.";
	}

	const message = formData.get("message")?.toString().trim() ?? "";
	if (!message) {
		errors.message = "Message is required.";
	} else if (message.length < 10) {
		errors.message = "Message must be at least 10 characters.";
	} else if (message.length > 2000) {
		errors.message = "Message must be under 2000 characters.";
	}

	return errors;
}

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

/**
 * Catches errors that `submitContact` *throws* rather than returns
 * (e.g. a network failure, a bug in the action, an unexpected exception).
 * Without this, React has nowhere to send those errors and the whole
 * tree unmounts, showing the framework's default error overlay.
 */
class ContactFormErrorBoundary extends Component<
	{ children: ReactNode },
	{ hasError: boolean }
> {
	state = { hasError: false };

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		// Wire this up to your logging/monitoring service.
		console.error("ContactForm crashed:", error, info);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="contact-form__alert" role="alert" aria-live="assertive">
					<p>
						Something went wrong while sending your message. Please try again in
						a moment.
					</p>
					<button
						type="button"
						className="contact-form__success-action"
						onClick={() => this.setState({ hasError: false })}
					>
						Try again
					</button>
				</div>
			);
		}

		return this.props.children;
	}
}

function ContactFormInner() {
	const [state, formAction] = useActionState(submitContact, initialState);
	const [optimisticMessage, addOptimisticMessage] = useOptimistic<
		string | null,
		FormData
	>(null, (_currentMessage, formData) => {
		const message = formData.get("message")?.toString().trim();
		return message ? `Sending: "${message}"` : "Sending your message...";
	});

	// Client-side validation errors take priority over stale server
	// errors from a previous submission; `null` means "defer to server
	// state" so we don't clear real server errors before a first check.
	const [clientErrors, setClientErrors] = useState<FieldErrors | null>(null);
	const formRef = useRef<HTMLFormElement>(null);

	// Making the fields controlled is what keeps them populated on a
	// failed submission. React's <form action={fn}> automatically resets
	// *uncontrolled* fields once the action function finishes running —
	// even if that function returns early on a validation error without
	// ever hitting the server. Controlled fields are driven by this state
	// instead, so that auto-reset has nothing to clear.
	const [formValues, setFormValues] = useState({
		lastName: "",
		firstName: "",
		email: "",
		message: "",
	});

	const handleFieldChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = event.target;
		setFormValues((previous) => ({ ...previous, [name]: value }));
	};

	const handleFormAction = (formData: FormData) => {
		const validationErrors = validateContactForm(formData);

		if (Object.keys(validationErrors).length > 0) {
			setClientErrors(validationErrors);

			// Move focus to the first invalid field so keyboard/screen-reader
			// users land directly on what needs fixing.
			const firstInvalidField = Object.keys(validationErrors)[0];
			const fieldEl = formRef.current?.elements.namedItem(
				firstInvalidField,
			) as HTMLElement | null;
			fieldEl?.focus();

			return; // Don't hit the server with input we know is invalid.
		}

		setClientErrors(null);
		addOptimisticMessage(formData);
		formAction(formData);
	};

	const errors = clientErrors ?? state.errors;
	const hasFieldErrors = Boolean(
		errors && Object.values(errors).some((value) => Boolean(value)),
	);
	const generalMessage = clientErrors
		? "Please fix the highlighted fields below."
		: state.message;

	return (
		<div className="contact-form">
			{state.success ? (
				<div className="contact-form__success" role="status" aria-live="polite">
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
				<form
					ref={formRef}
					action={handleFormAction}
					className="contact-form__fields"
					noValidate
				>
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
								value={formValues.lastName}
								onChange={handleFieldChange}
								aria-invalid={Boolean(errors?.lastName)}
								aria-describedby={
									errors?.lastName ? "lastName-error" : undefined
								}
								className="contact-form__input"
							/>
							{errors?.lastName && (
								<p
									id="lastName-error"
									className="contact-form__error"
									role="alert"
								>
									{errors.lastName}
								</p>
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
								value={formValues.firstName}
								onChange={handleFieldChange}
								aria-invalid={Boolean(errors?.firstName)}
								aria-describedby={
									errors?.firstName ? "firstName-error" : undefined
								}
								className="contact-form__input"
							/>
							{errors?.firstName && (
								<p
									id="firstName-error"
									className="contact-form__error"
									role="alert"
								>
									{errors.firstName}
								</p>
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
							value={formValues.email}
							onChange={handleFieldChange}
							aria-invalid={Boolean(errors?.email)}
							aria-describedby={errors?.email ? "email-error" : undefined}
							className="contact-form__input"
						/>
						{errors?.email && (
							<p id="email-error" className="contact-form__error" role="alert">
								{errors.email}
							</p>
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
							value={formValues.message}
							onChange={handleFieldChange}
							aria-invalid={Boolean(errors?.message)}
							aria-describedby={errors?.message ? "message-error" : undefined}
							className="contact-form__input contact-form__textarea"
						/>
						{errors?.message && (
							<p
								id="message-error"
								className="contact-form__error"
								role="alert"
							>
								{errors.message}
							</p>
						)}
					</div>

					{/*
					  Only show the generic banner when there are no field-level
					  errors, so the user isn't shown two conflicting error
					  messages ("Fix your email" + "Something went wrong") at once.
					*/}
					{generalMessage && !state.success && !hasFieldErrors && (
						<div
							className="contact-form__alert"
							role="alert"
							aria-live="assertive"
						>
							{generalMessage}
						</div>
					)}

					{optimisticMessage && (
						<div
							className="contact-form__optimistic"
							role="status"
							aria-live="polite"
						>
							{optimisticMessage}
						</div>
					)}

					<SubmitButton />
				</form>
			)}
		</div>
	);
}

export function ContactForm() {
	return (
		<ContactFormErrorBoundary>
			<ContactFormInner />
		</ContactFormErrorBoundary>
	);
}
