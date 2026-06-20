import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../data";

interface Props {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const post = blogPosts.find((p) => p.slug === slug);

	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: `${post.title} | Writings`,
		description: post.description,
		openGraph: {
			title: `${post.title} | Writings`,
			description: post.description,
			type: "article",
		},
	};
}

export default async function BlogDetailPage({ params }: Props) {
	const { slug } = await params;

	// Simulated dynamic delay
	const post = await new Promise<(typeof blogPosts)[0] | undefined>(
		(resolve) => {
			setTimeout(() => {
				resolve(blogPosts.find((p) => p.slug === slug));
			}, 50);
		},
	);

	if (!post) {
		notFound();
	}

	return (
		<div className="relative flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-16 bg-[color:var(--background)] text-[var(--foreground)] transition-colors duration-300">
			{/* Background decorations */}
			<div className="absolute top-1/4 left-1/3 -z-10 h-[300px] w-[300px] rounded-full bg-brand-primary/5 blur-[100px]"></div>

			<main className="w-full max-w-3xl mx-auto flex flex-col gap-10">
				{/* Back Link */}
				<Link
					href="/blog"
					className="self-start text-sm font-medium text-[var(--muted)] hover:text-brand-primary transition-colors flex items-center gap-1.5"
				>
					← Back to Writings
				</Link>

				{/* Article Header */}
				<div className="flex flex-col gap-5 border-b border-[var(--border)] pb-8">
					<div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
						<span>{post.publishedAt}</span>
						<span>&bull;</span>
						<span>{post.readTime}</span>
					</div>

					<h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
						{post.title}
					</h1>

					<div className="flex flex-wrap gap-2 mt-2">
						{post.tags.map((tag) => (
							<span
								key={tag}
								className="text-xs px-3 py-1 rounded-full border border-brand-primary/20 bg-brand-primary/5 font-semibold text-brand-primary"
							>
								{tag}
							</span>
						))}
					</div>
				</div>

				{/* Article Content */}
				<article className="prose dark:prose-invert max-w-none text-base leading-relaxed text-[var(--foreground)] opacity-95 whitespace-pre-wrap flex flex-col gap-6">
					{post.content}
				</article>
			</main>
		</div>
	);
}
