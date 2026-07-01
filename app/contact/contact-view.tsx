import { ContactForm } from "./contact-form";

export function ContactView() {
	return (
		<div className="contact-page">
			<div className="contact-page__glow" aria-hidden="true" />
			<div
				className="contact-page__glow contact-page__glow--secondary"
				aria-hidden="true"
			/>
			<div className="contact-page__grid-bg" aria-hidden="true" />

			<div className="contact-page__main">
				<header className="contact-page__header">
					<h1 className="contact-page__title">
						Get in <span className="gradient-text">Touch</span>
					</h1>
				</header>

				<div className="contact-page__layout">
					<aside className="contact-page__sidebar">
						<section className="contact-page__block">
							<h2 className="contact-page__section-title">
								Contact Information
							</h2>

							<div className="contact-page__email-row">
								<svg
									className="contact-page__email-icon"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<a
									href="mailto:ellysinday5@gmail.com"
									className="contact-page__email-link"
								>
									ellysinday5@gmail.com
								</a>
							</div>
						</section>

						<section className="contact-page__block">
							<h2 className="contact-page__section-title">Connect with Me</h2>
							<div className="contact-page__social-row">
								{/* GitHub Link */}
								<a
									href="https://github.com/ellysinday5"
									target="_blank"
									rel="noopener noreferrer"
									className="contact-page__social-link"
									aria-label="GitHub"
								>
									<svg
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
										className="contact-page__social-icon"
									>
										<title>GitHub</title>
										<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
									</svg>
								</a>

								{/* LinkedIn Link */}
								<a
									href="https://www.linkedin.com/in/ellen-grace-sinday-7b33793ab/"
									target="_blank"
									rel="noopener noreferrer"
									className="contact-page__social-link"
									aria-label="LinkedIn"
								>
									<svg
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
										className="contact-page__social-icon"
									>
										<title>LinkedIn</title>
										<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
										<rect x="2" y="9" width="4" height="12" />
										<circle cx="4" cy="4" r="2" />
									</svg>
								</a>

								{/* Instagram Link */}
								<a
									href="https://instagram.com/ellyyyyyy.s"
									target="_blank"
									rel="noopener noreferrer"
									className="contact-page__social-link"
									aria-label="Instagram"
								>
									<svg
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
										className="contact-page__social-icon"
									>
										<title>Instagram</title>
										<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
										<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
										<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
									</svg>
								</a>

								{/* Facebook Link */}
								<a
									href="https://facebook.com/ellysinday"
									target="_blank"
									rel="noopener noreferrer"
									className="contact-page__social-link"
									aria-label="Facebook"
								>
									<svg
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
										className="contact-page__social-icon"
									>
										<title>Facebook</title>
										<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
									</svg>
								</a>
							</div>
						</section>
					</aside>

					<div className="contact-page__form-column">
						<h2 className="contact-page__section-title">Send a Message</h2>
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
}
