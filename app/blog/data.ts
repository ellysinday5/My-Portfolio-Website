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
		slug: "building-my-portfolio-website",
		title: "Building My Portfolio Website",
		description:
			"A look into the challenges and rewards of building my personal portfolio using Next.js 16, React 19, and Tailwind CSS v4.",
		content: `Building my portfolio has been one of the most challenging but rewarding projects I've worked on so far. When I first started, I thought it would just be a simple website where I could display my projects and skills. As I continued developing it, I realized there was so much more to learn than just designing the pages.

I built my portfolio using Next.js 16, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui. At first, some of these technologies felt overwhelming, especially Next.js App Router because it works differently from the traditional React projects I was used to. Understanding Server Components, Client Components, and dynamic routing took time, but experimenting with them helped me understand how they all fit together.

One feature I enjoyed implementing was the light and dark mode toggle. I wanted users to have the option to switch themes based on their preference while making sure the selected theme stayed the same even after refreshing the page. Another feature I liked building was the loading skeletons, which make page navigation feel smoother instead of showing a blank screen while content is loading.

Aside from functionality, I also spent a lot of time improving the overall design. I wanted the website to reflect my personality, so I chose a pink color palette and tried to keep the interface clean, modern, and easy to navigate. I also learned how important consistency is when designing reusable components.

Building this portfolio also taught me that development is an ongoing process. Even after deploying the website, I still continue polishing the UI, fixing small issues, and improving the user experience. Every update teaches me something new, and I see this portfolio as something that will continue to grow alongside my skills as a developer.`,
		publishedAt: "July 2026",
		readTime: "4 min read",
		tags: ["Next.js", "React", "Portfolio", "Web Dev"],
		imageUrl: "/blog_nextjs.png",
	},
	{
		slug: "my-frontend-learning-journey",
		title: "My Frontend Learning Journey",
		description:
			"Reflecting on my journey from learning HTML and CSS to mastering React and Next.js.",
		content: `When I first started learning frontend development, I had very little knowledge about how websites actually worked. I only knew that I enjoyed creating designs, but I didn't realize how much problem-solving and logical thinking were involved in turning those designs into functional applications.

As I learned HTML, CSS, and JavaScript, I became more interested in building interactive websites instead of just static pages. Eventually, I started learning React, which introduced me to reusable components and state management. Although it was difficult at first, it changed the way I approached building user interfaces.

One of the biggest milestones in my learning journey was discovering Next.js. Compared to plain React, Next.js introduced concepts like routing, layouts, loading states, and Server Components. These concepts were new to me, but they also helped me understand how modern web applications are built.

Throughout my internship and personal projects, I learned the importance of writing cleaner code, organizing project structures, using Git and GitHub for version control, and accepting feedback to improve my work. I realized that programming isn't about memorizing everything. It's about learning how to solve problems, read documentation, and continuously improve.

I know I still have a lot to learn, but looking back at where I started, I'm proud of the progress I've made. Every project has helped me become more confident, and I'm excited to continue learning new technologies and building applications that people can actually use.`,
		publishedAt: "June 2026",
		readTime: "3 min read",
		tags: ["Frontend", "Learning", "React", "Next.js"],
		imageUrl: "/blog_tailwind.png",
	},
	{
		slug: "what-i-learned-about-react-19",
		title: "What I Learned About React 19",
		description:
			"Exploring new React 19 hooks like useActionState, useFormStatus, useOptimistic, and the use() hook.",
		content: `While building my portfolio, I had the opportunity to explore some of the new features introduced in React 19. At first, I wasn't familiar with the new hooks, but after implementing them in my project, I started to understand how they simplify common tasks.

One of the hooks I used was useActionState(), which helped me manage my contact form submission. Instead of manually keeping track of different form states, it made handling server actions more organized.

I also used useFormStatus(), which allowed me to display a loading state while the form was being submitted. This gives users feedback that their request is still being processed instead of making them wonder if the button actually worked.

Another hook I explored was useOptimistic(). It improves the user experience by showing immediate feedback before the server finishes processing the request. Even though the operation is still running in the background, the interface feels much more responsive.

Finally, I learned about the use() hook and how it can be used to access React Context more directly. Although it was new to me, experimenting with it helped me better understand how React is evolving to make applications simpler and more efficient.

Learning React 19 reminded me that web development is constantly changing. There will always be new tools and better ways to solve problems. Instead of trying to learn everything at once, I've learned that taking one concept at a time and applying it in real projects is the best way to improve. My portfolio became the perfect place to experiment with these new features while building something meaningful for myself.`,
		publishedAt: "July 2026",
		readTime: "5 min read",
		tags: ["React 19", "Hooks", "Web Dev"],
		imageUrl: "/blog_biome.png",
	},
];
