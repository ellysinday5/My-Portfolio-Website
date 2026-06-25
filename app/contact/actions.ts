"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactState {
	success: boolean;
	message: string;
	errors?: {
		name?: string;
		email?: string;
		subject?: string;
		message?: string;
	};
}

export async function submitContact(
	_prevState: ContactState | null,
	formData: FormData,
): Promise<ContactState> {
	const name = formData.get("name")?.toString().trim() || "";
	const email = formData.get("email")?.toString().trim() || "";
	const subject = formData.get("subject")?.toString().trim() || "";
	const message = formData.get("message")?.toString().trim() || "";

	const errors: NonNullable<ContactState["errors"]> = {};

	// Validation
	if (name.length < 2) {
		errors.name = "Name must be at least 2 characters.";
	}

	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		errors.email = "Please enter a valid email address.";
	}

	if (subject.length < 3) {
		errors.subject = "Subject must be at least 3 characters.";
	}

	if (message.length < 10) {
		errors.message = "Message must be at least 10 characters long.";
	}

	if (Object.keys(errors).length > 0) {
		return {
			success: false,
			message: "Please correct the errors in the form.",
			errors,
		};
	}

	try {
		const toEmail = process.env.CONTACT_RECEIVER_EMAIL;

		if (!process.env.RESEND_API_KEY) {
			console.error("Missing RESEND_API_KEY");
			return {
				success: false,
				message: "Email service is not configured.",
			};
		}

		if (!toEmail) {
			console.error("Missing CONTACT_RECEIVER_EMAIL");
			return {
				success: false,
				message: "Receiver email is not configured.",
			};
		}

		const { error } = await resend.emails.send({
			from: "Portfolio Contact <onboarding@resend.dev>",
			to: [toEmail],
			replyTo: email,
			subject: `Portfolio Contact: ${subject}`,
			html: `
				<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
					<h2>New Portfolio Contact Message</h2>
					<p><strong>Name:</strong> ${escapeHtml(name)}</p>
					<p><strong>Email:</strong> ${escapeHtml(email)}</p>
					<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
					<p><strong>Message:</strong></p>
					<p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
				</div>
			`,
		});

		if (error) {
			console.error("Resend error:", error);
			return {
				success: false,
				message: "Failed to send message. Please try again.",
			};
		}

		return {
			success: true,
			message:
				"Thank you! Your message has been sent successfully. I'll get back to you soon.",
		};
	} catch (error) {
		console.error("Contact form error:", error);

		return {
			success: false,
			message: "Something went wrong while sending your message.",
		};
	}
}

function escapeHtml(str: string) {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}
