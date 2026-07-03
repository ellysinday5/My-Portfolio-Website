export interface Skill {
	name: string;
}

export interface Education {
	school: string;
	degree: string;
	period: string;
	type: string;
}

export interface Experience {
	role: string;
	company: string;
	period: string;
	type: string;
	description: string;
	highlights: string[];
}

export interface Certificate {
	id: string;
	title: string;
	organization: string;
	dateReceived: string;
	imageUrl: string;
}

export type HobbyCategory = "mind-sports" | "sports" | "gaming" | "music";

export interface Hobby {
	id: string;
	title: string;
	description: string;
	category: HobbyCategory;
	emoji: string;
	imageUrl: string;
}

export const technicalSkills: Skill[] = [
	{ name: "Next.js" },
	{ name: "React.js" },
	{ name: "TypeScript" },
	{ name: "JavaScript" },
	{ name: "Tailwind CSS" },
	{ name: "HTML & CSS" },
	{ name: "PHP Laravel" },
	{ name: "SQL" },
	{ name: "FlutterFlow" },
	{ name: "Git" },
	{ name: "Figma" },
	{ name: "Canva" },
	{ name: "Responsive Design" },
	{ name: "API Integration" },
	{ name: "Form Validation" },
	{ name: "Component-Based Architecture" },
	{ name: "Debugging & Troubleshooting" },
];

export const softSkills: Skill[] = [
	{ name: "Collaboration" },
	{ name: "Teamwork" },
	{ name: "Adaptability" },
	{ name: "Flexibility" },
	{ name: "Problem Solving" },
	{ name: "Attention to Detail" },
	{ name: "Time Management" },
	{ name: "Communication" },
	{ name: "Continuous Learning" },
];

export const education: Education[] = [
	{
		school: "Polytechnic University of the Philippines",
		degree: "Bachelor of Science in Information Technology",
		period: "2022 – Present",
		type: "University",
	},
	{
		school: "Commonwealth High School",
		degree: "Senior High School — TVL ICT Strand",
		period: "2020 – 2022",
		type: "Senior High",
	},
	{
		school: "Commonwealth High School",
		degree: "Junior High School",
		period: "2018 – 2020",
		type: "Junior High",
	},
	{
		school: "Roxas National High School",
		degree: "Junior High School",
		period: "2016 – 2018",
		type: "Junior High",
	},
	{
		school: "Pelaez Elementary School",
		degree: "Elementary",
		period: "2010– 2016",
		type: "Elementary",
	},
];

export const experiences: Experience[] = [
	{
		role: "Software Engineering Intern",
		company: "Stratpoint Technologies",
		period: "June 2026 – Present",
		type: "Internship",
		description:
			"Working on full-stack web development projects using modern frameworks like Next.js, React, and Tailwind CSS. Collaborating with a team to build scalable and user-friendly web applications while applying best practices in code quality and UI/UX design.",
		highlights: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Git"],
	},
	{
		role: "Front-End Developer",
		company: "Software Research Group",
		period: "October 2025 – Present",
		type: "Member",
		description:
			"Contributed as a Front-End Developer in multiple web-based projects, focusing on developing responsive and user-friendly interfaces. Worked closely with team members to implement UI components, improve usability, ensure design consistency, and translate project requirements into functional web applications. Gained hands-on experience in frontend development, collaboration, debugging, and delivering solutions that enhance user experience and system functionality.",
		highlights: [
			"React.js",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"Tailwind CSS",
			"HTML5 & CSS3",
			"Responsive Web Design",
			"UI/UX Implementation",
			"Form Validation",
			"Git & GitHub",
			"Component-Based Development",
			"Debugging & Testing",
		],
	},
];

export const certificates: Certificate[] = [
	{
		id: "1",
		title: "Concentrix Certificate",
		organization: "Concentrix",
		dateReceived: "2025",
		imageUrl: "/certificates/concentrix.jpg",
	},
	{
		id: "2",
		title: "Chess Tournament — 1st Place",
		organization: "PUP",
		dateReceived: "2025",
		imageUrl: "/certificates/chess_1st_place_1.jpg",
	},
	{
		id: "3",
		title: "MABL Testing Certification",
		organization: "MABL",
		dateReceived: "2025",
		imageUrl: "/certificates/mabl.png",
	},
	{
		id: "4",
		title: "Microsoft Certification",
		organization: "Microsoft",
		dateReceived: "2025",
		imageUrl: "/certificates/microsoft.jpeg",
	},
	{
		id: "5",
		title: "PUP-CAAD — Certified Associate in Application Defense",
		organization: "PUPQC",
		dateReceived: "2025",
		imageUrl:
			"/certificates/PUP - QC - PUPQC - Certified Associate in Application Defense (PUP-CAAD) - 2025-06-17 (1).png",
	},
	{
		id: "6",
		title: "Saylor Academy Certificate",
		organization: "Saylor Academy",
		dateReceived: "2025",
		imageUrl: "/certificates/saylor.png",
	},
	{
		id: "7",
		title: "Work Immersion Certificate",
		organization: "Company / Institution",
		dateReceived: "2025",
		imageUrl: "/certificates/work_immersion.jpeg",
	},
	{
		id: "8",
		title: "Data Privacy 101",
		organization: "Stratpoint Technologies",
		dateReceived: "June 25, 2026",
		imageUrl:
			"/certificates/Data_Privacy_101_(2025_ver.)_25_Jun_2026_1b234298.png",
	},
	{
		id: "9",
		title: "Diversity, Equity, and Inclusion at Stratpoint",
		organization: "Stratpoint Technologies",
		dateReceived: "July 1, 2026",
		imageUrl:
			"/certificates/Diversity,_Equity,_and_Inclusion_at_Stratpoint_2025_1_Jul_2026_a96ec482.png",
	},
	{
		id: "10",
		title: "Employee Handbook / Code of Conduct",
		organization: "Stratpoint Technologies",
		dateReceived: "July 1, 2026",
		imageUrl: "/certificates/Employee_Handbook__COC_1_Jul_2026_1e730586.png",
	},
	{
		id: "10",
		title: "Infosec 2025",
		organization: "Stratpoint Technologies",
		dateReceived: "June 25, 2026",
		imageUrl: "/certificates/Infosec_2025_25_Jun_2026_ac3e839c.png",
	},
];

export const hobbies: Hobby[] = [
	{
		id: "1",
		title: "Chess",
		description:
			"Strategic board game that sharpens my analytical thinking and problem-solving skills. I even won 1st place in a chess tournament!",
		category: "mind-sports",
		emoji: "♟️",
		imageUrl: "/hobbies/chess.png",
	},
	{
		id: "2",
		title: "Rubik's Cube",
		description:
			"I love the challenge of solving Rubik's cubes. It trains pattern recognition, spatial thinking, and perseverance.",
		category: "mind-sports",
		emoji: "🎲",
		imageUrl: "/hobbies/rubiks.png",
	},
	{
		id: "3",
		title: "Dama",
		description:
			"Classic Filipino board game similar to checkers. A fun and competitive way to spend time with friends and family.",
		category: "mind-sports",
		emoji: "🎯",
		imageUrl: "/hobbies/dama.png",
	},
	{
		id: "4",
		title: "Damath",
		description:
			"Filipino educational board game combining math and dama. It keeps my mental math sharp while being genuinely fun to play.",
		category: "mind-sports",
		emoji: "🧮",
		imageUrl: "/hobbies/damath.png",
	},
	{
		id: "5",
		title: "Badminton",
		description:
			"Fast-paced racket sport that keeps me active and sharp. I enjoy both casual rallies and competitive matches.",
		category: "sports",
		emoji: "🏸",
		imageUrl: "/hobbies/badminton.png",
	},
	{
		id: "6",
		title: "Jogging",
		description:
			"Early morning jogs help me clear my mind, boost energy, and stay healthy. It's my daily reset button.",
		category: "sports",
		emoji: "🏃",
		imageUrl: "/hobbies/jogging.png",
	},
	{
		id: "7",
		title: "Walking",
		description:
			"A peaceful way to reflect and decompress. I love long walks, especially when exploring new places.",
		category: "sports",
		emoji: "🚶",
		imageUrl: "/hobbies/walking.jpg",
	},
	{
		id: "8",
		title: "Swimming",
		description:
			"One of my favorite full-body workouts. Swimming is refreshing, calming, and a great way to stay fit.",
		category: "sports",
		emoji: "🏊",
		imageUrl: "/hobbies/swimming.png",
	},
	{
		id: "9",
		title: "Mobile Legends",
		description:
			"Strategic 5v5 MOBA that I enjoy with friends. It sharpens teamwork, communication, and in-game decision-making.",
		category: "gaming",
		emoji: "📱",
		imageUrl: "/hobbies/mobile_legends.png",
	},
	{
		id: "10",
		title: "Valorant",
		description:
			"Tactical FPS that demands sharp reflexes, precise aiming, and strategic coordination with teammates.",
		category: "gaming",
		emoji: "🎮",
		imageUrl: "/hobbies/valorant.png",
	},
	{
		id: "11",
		title: "Playing Guitar",
		description:
			"I love strumming along to songs and picking up new chords. The guitar is my creative outlet when words aren't enough.",
		category: "music",
		emoji: "🎸",
		imageUrl: "/hobbies/guitar.jpg",
	},
	{
		id: "12",
		title: "Writing Songs",
		description:
			"Crafting lyrics and melodies is deeply personal. I pour emotions and stories into original compositions.",
		category: "music",
		emoji: "✍️",
		imageUrl: "/hobbies/writing_songs.jpg",
	},
	{
		id: "13",
		title: "Singing",
		description:
			"Music is a huge part of my life. Singing lets me express feelings that are hard to put into ordinary words.",
		category: "music",
		emoji: "🎤",
		imageUrl: "/hobbies/singing_pic.png",
	},
	{
		id: "14",
		title: "Dancing",
		description:
			"Dance is movement, expression, and energy combined. I enjoy learning different styles and freestyling to good beats.",
		category: "music",
		emoji: "💃",
		imageUrl: "/hobbies/dancing.png",
	},
];
