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
	category: string;
	features: string[];
	challenges: string[];
	contributions: string[];
	gallery: string[];
}

export const projects: Project[] = [
	{
		slug: "saas-dashboard",
		title: "AI SaaS Analytics Dashboard",
		description:
			"An advanced dashboard displaying server metrics, user engagement patterns, and predictive analytics using Next.js 16 Server Components.",
		details:
			"Built to demonstrate complex data handling in Next.js Server Components. This platform tracks user behaviors in real time, processes metrics through an AI regression model, and serves interactive canvas charts using React 19 concurrent features. The stylesheet uses Tailwind v4's modern CSS variables integration for instantaneous theme adaptation.\n\nThe dashboard supports multi-tenant data isolation, role-based access control, and real-time WebSocket data streams. It features customizable widget layouts, exportable PDF reports, and automated anomaly detection alerts.",
		tags: [
			"Next.js 16",
			"React 19",
			"Tailwind CSS v4",
			"TypeScript",
			"Recharts",
			"WebSockets",
		],
		imageUrl: "/projects/saas-dashboard.webp",
		githubUrl: "https://github.com/example/saas-dashboard",
		demoUrl: "https://example.com/saas-dashboard",
		metrics: [
			{ label: "Render Time", value: "85ms" },
			{ label: "Lighthouse Performance", value: "99" },
			{ label: "Data Latency", value: "<15ms" },
		],
		category: "Full Stack",
		features: [
			"Real-time data streaming with WebSocket connections",
			"Interactive chart widgets with drag-and-drop layout",
			"AI-powered anomaly detection and trend predictions",
			"Multi-tenant architecture with role-based access",
			"Automated PDF report generation and email scheduling",
			"Dark/Light theme with instant CSS variable switching",
		],
		challenges: [
			"Optimizing re-renders for 50+ concurrent chart components without blocking the main thread",
			"Implementing server-side data aggregation that scales across multiple data sources",
			"Designing a responsive grid system that maintains chart readability on mobile screens",
		],
		contributions: [
			"Architected the entire frontend using Next.js 16 App Router with streaming SSR",
			"Built the real-time data pipeline connecting WebSocket feeds to React state",
			"Designed and implemented the complete UI/UX with Tailwind CSS v4 design tokens",
			"Developed the AI anomaly detection integration using TensorFlow.js",
		],
		gallery: [
			"/projects/gallery/saas-1.svg",
			"/projects/gallery/saas-2.svg",
			"/projects/gallery/saas-3.svg",
		],
	},
	{
		slug: "ecommerce-v4",
		title: "Minimalist E-Commerce Platform",
		description:
			"A fast, SEO-optimized shopping experience built with Tailwind v4, next/image optimization, and unified React server actions.",
		details:
			"A comprehensive e-commerce shop displaying high-resolution images under optimized next/image components. It integrates React 19's server action pipelines for smooth shopping cart additions without standard fetch() boilerplate.\n\nFeatures include instantaneous filtering using searchParams promises, strict Biome quality controls, and nested skeleton loading pages. The checkout flow uses Stripe integration with server-side validation and webhook handling.",
		tags: [
			"Next.js 16",
			"React 19",
			"Tailwind CSS v4",
			"TypeScript",
			"Biome",
			"Stripe",
		],
		imageUrl: "/projects/ecommerce.webp",
		githubUrl: "https://github.com/example/ecommerce-v4",
		demoUrl: "https://example.com/ecommerce-v4",
		metrics: [
			{ label: "Core Web Vitals", value: "Passed" },
			{ label: "Bounce Rate Reduction", value: "18%" },
			{ label: "FCP Speed", value: "0.4s" },
		],
		category: "E-Commerce",
		features: [
			"Server-side product filtering with URL search params",
			"Optimistic cart updates using React 19 useOptimistic",
			"Stripe checkout integration with webhook handlers",
			"Image optimization with blur placeholders and lazy loading",
			"Responsive product grid with infinite scroll",
			"SEO-optimized product pages with structured data",
		],
		challenges: [
			"Maintaining consistent cart state across server and client components",
			"Implementing real-time inventory checks without sacrificing page load speed",
			"Building accessible product image galleries with keyboard navigation",
		],
		contributions: [
			"Designed the complete UI system from wireframes to production",
			"Implemented server actions for cart management and checkout flow",
			"Built the product filtering system with URL-based state management",
			"Integrated Stripe payment processing with error handling and webhooks",
		],
		gallery: [
			"/projects/gallery/ecommerce-1.svg",
			"/projects/gallery/ecommerce-2.svg",
			"/projects/gallery/ecommerce-3.svg",
		],
	},
	{
		slug: "chat-app",
		title: "Collaborative Real-time Chat",
		description:
			"A secure, instant messaging app using WebSockets, React 19's useOptimistic hook, and nested state transitions.",
		details:
			"This application showcases the power of React 19's useOptimistic hook by updating UI instantly before WebSocket message delivery is acknowledged by the server. Users experience real-time channel switching, rich text rendering, and responsive sidebar navigation.\n\nFully typed with strict TypeScript and validated under Biome. Features end-to-end encryption for private messages, file sharing with preview, and customizable notification preferences.",
		tags: [
			"Next.js 16",
			"React 19",
			"Tailwind CSS v4",
			"TypeScript",
			"WebSockets",
			"Redis",
		],
		imageUrl: "/projects/chat-app.svg",
		githubUrl: "https://github.com/example/chat-app",
		demoUrl: "https://example.com/chat-app",
		metrics: [
			{ label: "Msg Delivery Time", value: "2ms" },
			{ label: "Concurrent Connections", value: "10k+" },
			{ label: "JS Bundle Size", value: "42kb" },
		],
		category: "Real-time",
		features: [
			"Instant message delivery with optimistic UI updates",
			"Multi-channel support with real-time presence indicators",
			"File sharing with drag-and-drop and image preview",
			"End-to-end encryption for private conversations",
			"Rich text formatting with markdown support",
			"Push notification integration with custom preferences",
		],
		challenges: [
			"Ensuring message ordering consistency across distributed WebSocket connections",
			"Implementing efficient message search across millions of records",
			"Building a responsive layout that works seamlessly on both desktop and mobile",
		],
		contributions: [
			"Designed the real-time messaging architecture using WebSocket and Redis pub/sub",
			"Implemented optimistic UI patterns with React 19 hooks for instant feedback",
			"Built the responsive sidebar navigation with channel management",
			"Created the file upload system with progress tracking and preview generation",
		],
		gallery: [
			"/projects/gallery/chat-1.svg",
			"/projects/gallery/chat-2.svg",
			"/projects/gallery/chat-3.svg",
		],
	},
	{
		slug: "task-management-pwa",
		title: "Task Management PWA",
		description:
			"A progressive web app for team task management with offline support, drag-and-drop boards, and real-time collaboration.",
		details:
			"A full-featured project management tool inspired by Kanban methodology. Built as a PWA with service worker caching for offline functionality. Users can create boards, manage tasks with drag-and-drop, assign team members, set deadlines, and track progress through customizable views.\n\nThe app uses IndexedDB for offline data persistence and syncs automatically when connectivity is restored. Features include time tracking, recurring tasks, and integration with popular calendar apps.",
		tags: [
			"Next.js 16",
			"React 19",
			"Tailwind CSS v4",
			"TypeScript",
			"IndexedDB",
			"Service Workers",
		],
		imageUrl: "/projects/task-pwa.svg",
		githubUrl: "https://github.com/example/task-pwa",
		demoUrl: "https://example.com/task-pwa",
		metrics: [
			{ label: "Offline Capability", value: "100%" },
			{ label: "PWA Score", value: "100" },
			{ label: "Load Time", value: "0.8s" },
		],
		category: "Productivity",
		features: [
			"Drag-and-drop Kanban boards with smooth animations",
			"Full offline support with background sync",
			"Real-time collaboration with conflict resolution",
			"Time tracking with automated reporting",
			"Customizable task views: board, list, timeline, and calendar",
			"Recurring tasks and deadline reminders",
		],
		challenges: [
			"Handling complex drag-and-drop interactions across nested scrollable containers",
			"Implementing robust offline-first data sync with conflict resolution strategies",
			"Optimizing IndexedDB queries for large datasets without blocking the UI thread",
		],
		contributions: [
			"Architected the offline-first data layer with IndexedDB and background sync",
			"Built the drag-and-drop board system with accessible keyboard alternatives",
			"Implemented real-time collaboration using WebSocket event broadcasting",
			"Designed the PWA manifest and service worker caching strategies",
		],
		gallery: [
			"/projects/gallery/task-1.svg",
			"/projects/gallery/task-2.svg",
			"/projects/gallery/task-3.svg",
		],
	},
	{
		slug: "developer-blog",
		title: "Developer Blog Platform",
		description:
			"A performant MDX-powered blog with syntax highlighting, reading time estimates, tag filtering, and full-text search.",
		details:
			"A modern developer blog built with Next.js 16 and MDX for content authoring. Features include syntax-highlighted code blocks with copy functionality, automatic table of contents generation, and optimized image loading.\n\nThe blog supports RSS feed generation, OpenGraph meta tags for social sharing, and a full-text search engine powered by FlexSearch. Content is statically generated at build time for maximum performance, with ISR for dynamic elements like view counts and comments.",
		tags: [
			"Next.js 16",
			"React 19",
			"MDX",
			"Tailwind CSS v4",
			"TypeScript",
			"FlexSearch",
		],
		imageUrl: "/projects/dev-blog.svg",
		githubUrl: "https://github.com/example/dev-blog",
		demoUrl: "https://example.com/dev-blog",
		metrics: [
			{ label: "Lighthouse Score", value: "100" },
			{ label: "Build Time", value: "12s" },
			{ label: "Articles", value: "50+" },
		],
		category: "Content",
		features: [
			"MDX-powered content with custom React components",
			"Syntax-highlighted code blocks with one-click copy",
			"Full-text search with instant results using FlexSearch",
			"Automatic table of contents with scroll-spy highlighting",
			"RSS feed and OpenGraph meta tag generation",
			"Reading time estimates and view count tracking",
		],
		challenges: [
			"Building a fast full-text search index that works entirely client-side",
			"Implementing ISR for dynamic content while keeping static generation benefits",
			"Creating a consistent reading experience across light and dark themes for code blocks",
		],
		contributions: [
			"Built the complete MDX pipeline with custom remark/rehype plugins",
			"Implemented the client-side search engine with FlexSearch indexing",
			"Designed the reading experience with typography optimization and accessibility",
			"Created the automated RSS and sitemap generation pipeline",
		],
		gallery: [
			"/projects/gallery/blog-1.svg",
			"/projects/gallery/blog-2.svg",
			"/projects/gallery/blog-3.svg",
		],
	},
	{
		slug: "fitness-tracker",
		title: "Fitness Tracking Dashboard",
		description:
			"A health and fitness dashboard with workout logging, progress charts, meal planning, and personalized goal tracking.",
		details:
			"A comprehensive fitness application that helps users track workouts, monitor nutrition, and visualize progress over time. Features interactive charts for weight, strength, and cardio metrics with trend analysis.\n\nThe app integrates with wearable device APIs to import activity data automatically. Users can create custom workout routines, log meals with nutritional breakdowns, and receive AI-generated workout suggestions based on their goals and progress history.",
		tags: [
			"Next.js 16",
			"React 19",
			"Tailwind CSS v4",
			"TypeScript",
			"Chart.js",
			"PostgreSQL",
		],
		imageUrl: "/projects/fitness.svg",
		githubUrl: "https://github.com/example/fitness-tracker",
		demoUrl: "https://example.com/fitness-tracker",
		metrics: [
			{ label: "Active Users", value: "2.5k" },
			{ label: "Data Points/Day", value: "50k" },
			{ label: "API Response", value: "<50ms" },
		],
		category: "Health & Fitness",
		features: [
			"Interactive progress charts with zoom and date range selection",
			"Custom workout routine builder with exercise library",
			"Meal logging with barcode scanner and nutritional database",
			"Wearable device integration for automatic activity import",
			"AI-powered workout recommendations based on progress",
			"Social features with workout sharing and challenges",
		],
		challenges: [
			"Rendering complex interactive charts with thousands of data points without lag",
			"Designing an intuitive meal logging UX that minimizes manual data entry",
			"Building reliable integrations with multiple wearable device APIs",
		],
		contributions: [
			"Designed and built the complete data visualization layer with Chart.js",
			"Implemented the workout routine builder with drag-and-drop exercise ordering",
			"Built the nutritional database search with fuzzy matching and suggestions",
			"Created the API integration layer for wearable devices with OAuth flows",
		],
		gallery: [
			"/projects/gallery/fitness-1.svg",
			"/projects/gallery/fitness-2.svg",
			"/projects/gallery/fitness-3.svg",
		],
	},
	{
		slug: "recipe-social",
		title: "Recipe Sharing Social App",
		description:
			"A social platform for food enthusiasts to share recipes, create collections, follow chefs, and plan weekly meals.",
		details:
			"A vibrant social platform connecting home cooks and food enthusiasts. Users can publish recipes with step-by-step instructions, create themed collections, follow their favorite creators, and plan weekly meals with automated shopping lists.\n\nThe platform features an intelligent recommendation engine that suggests recipes based on dietary preferences, available ingredients, and cooking history. Built with a focus on beautiful food photography presentation and seamless mobile experience.",
		tags: [
			"Next.js 16",
			"React 19",
			"Tailwind CSS v4",
			"TypeScript",
			"Prisma",
			"AWS S3",
		],
		imageUrl: "/projects/recipe-social.svg",
		githubUrl: "https://github.com/example/recipe-social",
		demoUrl: "https://example.com/recipe-social",
		metrics: [
			{ label: "Recipes Published", value: "12k+" },
			{ label: "Monthly Users", value: "8k" },
			{ label: "Avg. Session", value: "6.2min" },
		],
		category: "Social",
		features: [
			"Step-by-step recipe creation with rich media support",
			"Smart ingredient parsing and shopping list generation",
			"Weekly meal planner with nutritional overview",
			"Social features: follow, like, comment, and share",
			"AI recipe recommendations based on preferences and history",
			"Responsive image gallery optimized for food photography",
		],
		challenges: [
			"Building an intelligent ingredient parser that handles various measurement formats",
			"Optimizing image loading and storage for high-resolution food photography",
			"Implementing a recommendation engine that balances variety with user preferences",
		],
		contributions: [
			"Built the recipe creation wizard with real-time preview and image optimization",
			"Implemented the meal planning feature with automated shopping list generation",
			"Designed the social feed algorithm for personalized content delivery",
			"Created the AWS S3 integration for scalable image storage and CDN delivery",
		],
		gallery: [
			"/projects/gallery/recipe-1.svg",
			"/projects/gallery/recipe-2.svg",
			"/projects/gallery/recipe-3.svg",
		],
	},
	{
		slug: "component-library",
		title: "Open Source Component Library",
		description:
			"A collection of accessible, themeable UI components built with React 19 and Tailwind CSS v4, published as an npm package.",
		details:
			"A comprehensive UI component library designed for React 19 applications. Every component is built with accessibility as a first-class concern, following WAI-ARIA patterns and supporting keyboard navigation.\n\nThe library features a Storybook-powered documentation site with interactive examples, prop tables, and accessibility audits. Components support full theming via CSS custom properties and Tailwind CSS v4 integration, making them adaptable to any design system.",
		tags: [
			"React 19",
			"Tailwind CSS v4",
			"TypeScript",
			"Storybook",
			"Vitest",
			"npm",
		],
		imageUrl: "/projects/component-lib.svg",
		githubUrl: "https://github.com/example/component-library",
		demoUrl: "https://example.com/component-library",
		metrics: [
			{ label: "Components", value: "45+" },
			{ label: "npm Downloads", value: "25k/mo" },
			{ label: "Test Coverage", value: "98%" },
		],
		category: "Open Source",
		features: [
			"45+ accessible UI components following WAI-ARIA patterns",
			"Full keyboard navigation and screen reader support",
			"Themeable via CSS custom properties and Tailwind tokens",
			"Interactive Storybook documentation with live examples",
			"Tree-shakeable ESM exports for minimal bundle impact",
			"Comprehensive test suite with visual regression testing",
		],
		challenges: [
			"Ensuring consistent behavior across different React rendering environments",
			"Building complex components like combobox and data table while maintaining accessibility",
			"Designing a theming API that is both flexible and simple to use",
		],
		contributions: [
			"Architected the component library structure with tree-shakeable exports",
			"Built all core components with comprehensive accessibility testing",
			"Created the Storybook documentation site with interactive playground",
			"Set up the CI/CD pipeline for automated testing, building, and npm publishing",
		],
		gallery: [
			"/projects/gallery/components-1.svg",
			"/projects/gallery/components-2.svg",
			"/projects/gallery/components-3.svg",
		],
	},
];
