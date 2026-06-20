import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "./data";

export const metadata: Metadata = {
	title: "Blog & Writings | Ellen Grace Sinday",
	description:
		"Technical articles and deep dives into Next.js, React, Tailwind CSS, and software engineering principles.",
	openGraph: {
		title: "Blog & Writings | Ellen Grace Sinday",
		description:
			"Technical articles and deep dives into Next.js, React, Tailwind CSS, and software engineering principles.",
		type: "website",
	},
};

export default async function BlogPage() {
	// Simulating an async load
	const allPosts = await new Promise<typeof blogPosts>((resolve) => {
		setTimeout(() => resolve(blogPosts), 100);
	});

	return (
		<div className="relative w-full min-h-screen bg-[color:var(--background)] text-[var(--foreground)] transition-colors duration-300 px-6 py-16 lg:px-16">
			{/* Ambient background decoration */}
			<div className="absolute top-1/4 right-10 -z-10 h-[250px] w-[250px] rounded-full bg-brand-primary/5 blur-[90px]"></div>
			<div className="absolute bottom-1/4 left-10 -z-10 h-[250px] w-[250px] rounded-full bg-brand-accent/5 blur-[90px]"></div>

			<main className="w-full max-w-5xl mx-auto flex flex-col gap-12">
				{/* Header */}
				<div className="flex flex-col gap-4">
					<h1 className="text-5xl sm:text-6xl font-black tracking-tight text-[var(--foreground)]">
						Technical <span className="gradient-text">Writings</span>
					</h1>
					<p className="text-lg text-[color:var(--muted)] max-w-3xl leading-relaxed">
						Thoughts and guides about modern frontend architecture, development
						workflows, and designing scalable web systems.
					</p>
				</div>

				{/* Blog Cards Grid */}
				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
					{allPosts.map((post) => (
						<Link
							key={post.slug}
							href={`/blog/${post.slug}`}
							className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] shadow-[var(--card-shadow)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/50 hover:shadow-lg"
						>
							{/* Card Thumbnail */}
							<div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--badge-bg)] border-b border-[var(--border)]">
								<div className="absolute inset-0 bg-brand-primary/5 flex items-center justify-center font-bold text-xs text-[var(--muted)]">
									{post.tags[0]}
								</div>
								{/* Subtle geometric gradient block instead of complex images to keep it clean */}
								<div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/10 to-brand-primary/5 group-hover:scale-105 transition-transform duration-500" />

								{/* Category Tag overlay */}
								<span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[color:var(--background)]/85 backdrop-blur-sm border border-[color:var(--border)] text-[color:var(--muted)]">
									{post.tags[0]}
								</span>
							</div>

							{/* Card Body */}
							<div className="flex flex-col flex-1 p-6 gap-3">
								<span className="text-[11px] font-bold uppercase tracking-widest text-[color:var(--muted)] opacity-85">
									{post.publishedAt} &bull; {post.readTime}
								</span>

								<h3 className="text-lg font-bold tracking-tight text-[var(--foreground)] group-hover:text-brand-primary transition-colors duration-200 line-clamp-2">
									{post.title}
								</h3>

								<p className="text-sm text-[color:var(--muted)] leading-relaxed line-clamp-3">
									{post.description}
								</p>

								{/* Read link */}
								<div className="flex items-center gap-1.5 mt-auto pt-4 border-t border-[color:var(--border)] text-xs font-semibold text-brand-primary">
									Read Article
									<span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
										→
									</span>
								</div>
							</div>
						</Link>
					))}
				</section>
			</main>
		</div>
	);
}
