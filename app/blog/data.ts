export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	content: string;
	publishedAt: string;
	readTime: string;
	tags: string[];
	imageUrl: string;
}

export const blogPosts: BlogPost[] = [
	{
		slug: "mastering-nextjs-app-router-layouts",
		title: "Mastering Next.js 16 App Router Layouts & Rendering States",
		description:
			"An in-depth exploration of nested layouts, parallel routing, and custom loading/error states in Next.js 16.",
		content: `Next.js 16's App Router has fundamentally changed how we build React applications for the web. By leveraging Server Components as the default, we can significantly reduce the shipping size of client bundles while building deeply integrated routing systems.

### Understanding Layouts vs Templates
In the App Router, layouts are persistent wrappers that do not re-render on navigation. They maintain state and are perfect for persistent UI elements like headers, navbars, and footers. Templates, on the other hand, create a new instance for each child on navigation, making them ideal for entrance animations (using CSS or Framer Motion) or page-specific logic that needs cleanup.

### Optimizing Loading and Error Boundaries
Creating a file named \`loading.tsx\` inside any route directory automatically wraps the route's children in a React Suspense boundary. Similarly, \`error.tsx\` serves as a client-side Error Boundary using React's \`use client\` directive. It catches runtime errors without crashing the entire layout, providing a clean fallback with a reset mechanism.

Here is a standard implementation of an error boundary:
\`\`\`tsx
"use client";

import { useEffect } from "react";

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    console.error("ErrorBoundary caught: ", error);
  }, [error]);

  return (
    <div className="p-8 border border-red-500/20 bg-red-500/5 rounded-xl text-center">
      <h3 className="text-lg font-bold text-red-500">Something went wrong!</h3>
      <button onClick={() => reset()} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">
        Try Again
      </button>
    </div>
  );
}
\`\`\`

By organizing routes cleanly and utilizing standard layouts, we build extremely stable, reactive, and highly optimized web interfaces.`,
		publishedAt: "June 15, 2026",
		readTime: "5 min read",
		tags: ["Next.js", "React", "Frontend"],
		imageUrl: "/blog_nextjs.png",
	},
	{
		slug: "tailwind-v4-color-spaces-oklch",
		title: "Tailwind CSS v4 & The Power of OKLCH Color Space",
		description:
			"Why OKLCH is a game-changer for UI design systems and how to leverage it using Tailwind CSS v4's new @theme directive.",
		content: `With the release of Tailwind CSS v4, styling has migrated to a CSS-first configuration model. The custom JavaScript config files are replaced by a powerful inline CSS \`@theme\` directive, providing direct integration with CSS custom properties.

### The Problem with RGB and HSL
For years, digital design systems relied on RGB or HSL color spaces. However, HSL is not perceptually uniform. If you increase the lightness value of a blue shade by 20%, it will appear much lighter than increasing the lightness value of a yellow shade by 20%. This makes programmatic dark modes and accessibility compliance (WCAG) difficult to balance.

### Enter OKLCH
OKLCH represents colors in three coordinates:
1. **Lightness (L)**: Represents how bright the color feels, from 0% to 100%.
2. **Chroma (C)**: Represents color purity or saturation.
3. **Hue (H)**: The color angle, from 0 to 360.

Because OKLCH is perceptually uniform, a lightness value of 70% feels equally bright regardless of whether the color is gold, blue, or red. This enables us to write color systems that scale perfectly and look consistent.

### Configuring Tailwind CSS v4 Theme
In Tailwind CSS v4, we declare these variables directly inside the CSS stylesheet:
\`\`\`css
@theme {
  --color-brand-primary: oklch(0.74 0.16 72); /* Warm Gold */
  --color-brand-secondary: oklch(0.85 0.1 85); /* Light Gold */
}
\`\`\`
These tokens are immediately compiled into utility classes like \`text-brand-primary\` and \`bg-brand-primary\`, keeping the styles integrated with standard custom properties.`,
		publishedAt: "May 28, 2026",
		readTime: "4 min read",
		tags: ["Tailwind", "CSS", "UI Design"],
		imageUrl: "/blog_tailwind.png",
	},
	{
		slug: "clean-code-with-typescript-biome",
		title: "Replacing ESLint and Prettier with Biome for Next.js",
		description:
			"How Biome yields 20x faster code checking, formatting, and linting, resulting in smoother developer setups.",
		content: `Setting up developer toolchains for React and Next.js applications has historically involved bundling ESLint, Prettier, and TypeScript configurations, which often conflict and require custom plugins.

### What is Biome?
Biome is a single, rust-based tool that formats, lints, and parses code in a fraction of a millisecond. It replaces Prettier, ESLint, and import sorters in one package, offering standard-setting velocity for code verification.

### Key Benefits
1. **Speed**: Biome processes files in sub-millisecond ranges, meaning format-on-save in your editor executes instantly.
2. **Unified Configuration**: All rules for formatting, linting, and sorting imports are defined inside a single \`biome.json\` file.
3. **Zero Configuration Boilerplate**: Standard configurations match modern TypeScript and React ecosystems out of the box.

### Example configuration
Here is a typical \`biome.json\` file:
\`\`\`json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "style": {
        "useConst": "error"
      }
    }
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "tab",
    "lineWidth": 80
  }
}
\`\`\`

Migrating to Biome simplifies package files and streamlines continuous integration (CI) environments.`,
		publishedAt: "May 10, 2026",
		readTime: "3 min read",
		tags: ["TypeScript", "Tooling", "DX"],
		imageUrl: "/blog_biome.png",
	},
];
