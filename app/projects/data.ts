export interface Project {
	slug: string;
	title: string;
	description: string;
	details: string;
	tags: string[];
	imageUrl: string;
	githubUrl: string;
	demoUrl: string;
	metrics: { label: string; value: string }[];
}

export const projects: Project[] = [
	{
		slug: "saas-dashboard",
		title: "AI SaaS Analytics Dashboard",
		description:
			"An advanced dashboard displaying server metrics, user engagement patterns, and predictive analytics using Next.js 16 Server Components.",
		details:
			"Built to demonstrate complex data handling in Next.js Server Components. This platform tracks user behaviors in real time, processes metrics through an AI regression model, and serves interactive canvas charts using React 19 concurrent features. The stylesheet uses Tailwind v4's modern CSS variables integration for instantaneous theme adaptation.",
		tags: [
			"Next.js 16",
			"React 19",
			"Tailwind CSS v4",
			"TypeScript",
			"Recharts",
		],
		imageUrl: "/saas-dashboard.png",
		githubUrl: "https://github.com/example/saas-dashboard",
		demoUrl: "https://example.com/saas-dashboard",
		metrics: [
			{ label: "Render Time", value: "85ms" },
			{ label: "Lighthouse Performance", value: "99" },
			{ label: "Data Latency", value: "<15ms" },
		],
	},
	{
		slug: "ecommerce-v4",
		title: "Minimalist E-Commerce Platform",
		description:
			"A fast, SEO-optimized shopping experience built with Tailwind v4, next/image optimization, and unified React server actions.",
		details:
			"A comprehensive e-commerce shop displaying high-resolution images under optimized next/image components. It integrates React 19's server action pipelines for smooth shopping cart additions without standard fetch() boilerplate. Features include instantaneous filtering using searchParams promises, strict Biome quality controls, and nested skeleton loading pages.",
		tags: ["Next.js 16", "React 19", "Tailwind CSS v4", "TypeScript", "Biome"],
		imageUrl: "/ecommerce.png",
		githubUrl: "https://github.com/example/ecommerce-v4",
		demoUrl: "https://example.com/ecommerce-v4",
		metrics: [
			{ label: "Core Web Vitals", value: "Passed" },
			{ label: "Bounce Rate Reduction", value: "18%" },
			{ label: "FCP Speed", value: "0.4s" },
		],
	},
	{
		slug: "chat-app",
		title: "Collaborative Real-time Chat",
		description:
			"A secure, instant messaging app using WebSockets, React 19's useOptimistic hook, and nested state transitions.",
		details:
			"This application showcases the power of React 19's useOptimistic hook by updating UI instantly before WebSocket message delivery is acknowledged by the server. Users experience real-time channel switching, rich text rendering, and responsive sidebar navigation. Fully typed with strict TypeScript and validated under Biome.",
		tags: [
			"Next.js 16",
			"React 19",
			"Tailwind CSS v4",
			"TypeScript",
			"WebSockets",
		],
		imageUrl: "/chat-app.png",
		githubUrl: "https://github.com/example/chat-app",
		demoUrl: "https://example.com/chat-app",
		metrics: [
			{ label: "Msg Delivery Time", value: "2ms" },
			{ label: "Concurrent Connections", value: "10k+" },
			{ label: "JS Bundle Size", value: "42kb" },
		],
	},
];
