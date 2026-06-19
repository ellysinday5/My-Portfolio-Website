"use server";

export interface ContactState {
	success: boolean;
	message: string;
	errors?: {
		name?: string;
		email?: string;
		message?: string;
	};
}

export async function submitContact(
	_prevState: ContactState | null,
	formData: FormData,
): Promise<ContactState> {
	// Simulate network latency for form submission
	await new Promise((resolve) => setTimeout(resolve, 1500));

	const name = formData.get("name")?.toString().trim();
	const email = formData.get("email")?.toString().trim();
	const message = formData.get("message")?.toString().trim();

	const errors: NonNullable<ContactState["errors"]> = {};

	if (!name || name.length < 2) {
		errors.name = "Name must be at least 2 characters.";
	}

	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		errors.email = "Please enter a valid email address.";
	}

	if (!message || message.length < 10) {
		errors.message = "Message must be at least 10 characters long.";
	}

	if (Object.keys(errors).length > 0) {
		return {
			success: false,
			message: "Please correct the errors in the form.",
			errors,
		};
	}

	// Success flow
	return {
		success: true,
		message:
			"Thank you! Your message has been sent successfully. I'll get back to you soon.",
	};
}
