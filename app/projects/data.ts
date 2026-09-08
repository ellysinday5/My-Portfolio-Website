export interface Project {
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	details: string;
	tags: string[];
	imageUrl: string;
	imageUrls?: string[];
	githubUrl: string;
	demoUrl: string;
	metrics: { label: string; value: string }[];
	category: string;
	features: { title: string; description: string }[];
	challenges: string[];
	contributions: string[];
	gallery: string[];
}

export const projects: Project[] = [
	{
		slug: "syntraflow",
		title: "SyntraFlow - Project Management System",
		subtitle: "Next.js Capstone · Stratpoint University",
		description:
			"A modern project management and team collaboration system built with Next.js, featuring interactive Kanban sprint boards, real-time analytics, team capacity tracking, milestone calendars, and seamless authentication.",
		details:
			"SyntraFlow is a streamlined project management system designed to eliminate workflow friction and empower agile software engineering teams. Developed as a Next.js capstone project at Stratpoint Technologies, the platform integrates sprint planning, customizable Kanban boards with drag-and-drop task workflows, real-time progress analytics, and team coordination into a unified, high-performance workspace.\n\nTeams can track task lifecycles with detailed drawer views—managing assignees, priorities, attachments, and discussions—while managers gain actionable visibility through database health metrics, throughput charts, and milestone calendar scheduling. Equipped with robust Clerk authentication and customizable dark/light themes, SyntraFlow provides a polished, enterprise-ready workflow experience.",
		tags: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"React.js",
			"Clerk Auth",
			"Responsive UI Design",
			"UI/UX",
		],
		imageUrl: "/assets/projects-gallery/syntraflow-img1.png",
		githubUrl: "",
		demoUrl: "https://nextjs-internship-capstone-omega.vercel.app/",
		metrics: [
			{ label: "Active Workspaces", value: "Multi-Team" },
			{ label: "Sprint Velocity", value: "+35%" },
			{ label: "Query Latency", value: "14ms" },
		],
		category: "Full Stack Developer",
		features: [
			{
				title: "Interactive Kanban & Sprint Boards",
				description:
					"Dynamic drag-and-drop task workflows across To Do, In Progress, Review, and Done statuses with customizable sprint cycles.",
			},
			{
				title: "Comprehensive Task Details & Collaboration",
				description:
					"Granular task drawer management featuring assignees, priority scoring, deadline schedules, file attachments, and discussion threads.",
			},
			{
				title: "Real-Time Analytics & Performance Dashboard",
				description:
					"Throughput velocity charts, team completion rates, weekly activity distribution, and live database engine health metrics.",
			},
			{
				title: "Team Hub & Capacity Coordination",
				description:
					"Centralized workspace directory to coordinate cross-functional teams, visualize workload distribution, and align project priorities.",
			},
			{
				title: "Milestone & Deadline Calendar",
				description:
					"Interactive timeline and schedule views filterable by priority, event category, and completion status.",
			},
			{
				title: "Workspace Overview & Quick Actions",
				description:
					"High-level executive dashboard tracking active projects, overdue deadlines, quick task creation, and team invitations.",
			},
			{
				title: "Secure Clerk Authentication",
				description:
					"Seamless multi-tenant login flows supporting Google single sign-on and credential-based access control.",
			},
			{
				title: "Appearance & Theme Customization",
				description:
					"Fully reactive design system offering dark mode, light mode, typography scaling, and compact sidebar toggles.",
			},
		],
		challenges: [
			"Architecting seamless real-time state synchronization across Kanban boards and analytics without UI latency",
			"Designing a responsive, information-dense multi-column layout with smooth slide-out task drawers across screen sizes",
			"Optimizing server-side data fetching and client-side caching to ensure sub-15ms database query response times",
		],
		contributions: [
			"Engineered the full-stack architecture using Next.js, TypeScript, and modern component design patterns.",
			"Developed interactive Kanban board columns with intuitive drag-and-drop task management.",
			"Implemented the analytics and performance engine visualizing velocity, throughput, and system health.",
			"Integrated Clerk authentication and user session management with secure multi-tenant permissions.",
			"Designed modern, theme-responsive UI interfaces tailored for productivity and cross-device accessibility.",
		],
		imageUrls: [
			"/assets/projects-gallery/syntraflow-img1.png",
			"/assets/projects-gallery/syntraflow-img2.png",
			"/assets/projects-gallery/syntraflow-img3.png",
			"/assets/projects-gallery/syntraflow-img4.png",
			"/assets/projects-gallery/syntraflow-img5.png",
			"/assets/projects-gallery/syntraflow-img6.png",
			"/assets/projects-gallery/syntraflow-img7.png",
			"/assets/projects-gallery/syntraflow-img8.png",
		],
		gallery: [
			"/assets/projects-gallery/syntraflow-img1.png",
			"/assets/projects-gallery/syntraflow-img2.png",
			"/assets/projects-gallery/syntraflow-img3.png",
			"/assets/projects-gallery/syntraflow-img4.png",
			"/assets/projects-gallery/syntraflow-img5.png",
			"/assets/projects-gallery/syntraflow-img6.png",
			"/assets/projects-gallery/syntraflow-img7.png",
			"/assets/projects-gallery/syntraflow-img8.png",
		],
	},
	{
		slug: "gfmic-lms-mpms",
		title: "GFMIC Academy",
		subtitle: "GFMIC - Learning Management System",
		description:
			"The GFMIC Learning Management System integrated with the Mentorship & Peer Matching System is a web-based platform designed to centralize and enhance digital learning and mentorship processes. It provides a structured environment where instructors can create and manage courses, upload learning materials, conduct assessments and monitor student progress, while students can conveniently access content, complete activities and track their performance.",
		details:
			"GfmicLms merges course delivery and project tracking into a single cohesive workspace. Instructors can author structured learning paths while team leads manage sprints, tasks, and milestones side by side.\n\nThe platform features role-based dashboards, real-time progress tracking, and automated certificate generation. Built with a focus on reducing context-switching between learning and doing.",
		tags: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"HTML",
			"Responsive UI Design",
			"Javascript",
			"Figma",
			"UI/UX",
		],
		imageUrl: "/assets/projects-gallery/GfmicLmsMpms.png",
		githubUrl: "",
		demoUrl: "",
		metrics: [
			{ label: "Active Learners", value: "1.2k" },
			{ label: "Courses Hosted", value: "80+" },
			{ label: "Task Completion", value: "94%" },
		],
		category: "Front-End Developer",
		features: [
			{
				title: "User Registration and Authentication",
				description:
					"Secure enrollment and multi-role access control for students, instructors, and administrators.",
			},
			{
				title: "Course Management",
				description:
					"Comprehensive tools for organizing curriculum, uploading materials, and managing course lifecycle.",
			},
			{
				title: "Enrollment System",
				description:
					"Automated course subscription workflows with support for various enrollment verification methods.",
			},
			{
				title: "Payment System",
				description:
					"Secure integration for course fees and membership payments using unified payment gateways.",
			},
			{
				title: "Multimedia Learning Support",
				description:
					"Interactive learning environment supporting video lectures, digital docs, and downloadable resources.",
			},
			{
				title: "Assessment and Quiz Management",
				description:
					"Dynamic testing engine for creating quizzes, automated grading, and instant performance feedback.",
			},
			{
				title: "Progress Tracking and Analytics",
				description:
					"Real-time visualization of learning milestones, grade reports, and student engagement data.",
			},
			{
				title: "Notification System",
				description:
					"Automated alerts for new course materials, upcoming assessments, and enrollment status updates.",
			},
			{
				title: "Certificate Generation",
				description:
					"One-click generation of verifiable digital certificates upon successful course completion.",
			},
			{
				title: "Mentorship Matching System",
				description:
					"AI-driven algorithms to connect learners with compatible mentors based on skills and interests.",
			},
			{
				title: "Learning Management Portal",
				description:
					"A streamlined, intuitive dashboard where students can access all active courses and resources.",
			},
			{
				title: "Administrative Configurations",
				description:
					"Centralized panel for system-wide settings, user roles, and platform customization.",
			},
			{
				title: "Search, Filter, and Data Export",
				description:
					"High-performance queries for finding content and exporting academic reports in multiple formats.",
			},
			{
				title: "Dashboard Overview",
				description:
					"A high-level summary of active enrollments, recent activity, and upcoming deadlines.",
			},
			{
				title: "Profile Management",
				description:
					"Personalized user profiles for tracking individual learning paths and professional achievements.",
			},
		],
		challenges: [
			"Designing a single UI that serves both learning and project management workflows without feeling cluttered",
			"Handling concurrent role permissions across LMS and PMS modules",
			"Syncing task deadlines with course schedules in a shared calendar view",
		],
		contributions: [
			"Designed and developed interactive UI components for learning and mentorship features.",
			"Implemented responsive layouts to support multiple devices and screen sizes.",
			"Worked closely with the team to enhance user engagement through intuitive design and navigation.",
		],
		imageUrls: ["/assets/projects-gallery/GfmicLmsMpms.png"],
		gallery: ["/assets/projects-gallery/GfmicLmsMpms.png"],
	},
	{
		slug: "yo-etz-ai-interview",
		title: "Yo - etz — AI Assisted Initial Interview System",
		subtitle: " ",
		description:
			"A structured digital pre-interview platform designed to support and enhance the admissions process of the Polytechnic University of the Philippines (QC and Caloocan campuses). It standardizes evaluations by providing structured AI-guided questioning, video records, and transcripts.",
		details:
			"Yo - etz standardizes applicant interviews by offering a controlled digital space for structured and semi-structured programs. Applicants complete an AI-guided video interview where responses are recorded, transcribed, and neatly summarized into structured insights.\n\nThese documents are then accessed by faculty reviewers to backup final face-to-face screenings, lowering memory-based bias and establishing a consistent evaluation baseline without replacing human decisions.",
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI Design"],
		imageUrl: "/assets/projects-gallery/YoEtz.png",
		githubUrl: "",
		demoUrl: "",
		metrics: [
			{ label: "Applicants Screened", value: "3.5k+" },
			{ label: "Eval Consistency Lift", value: "+42%" },
			{ label: "Interview Time Saved", value: "60%" },
		],
		category: "Frontend Developer",
		features: [
			{
				title: "AI-Guided Interviews",
				description:
					"Structured, program-based questions with intelligent follow-ups for a consistent and engaging interview experience.",
			},
			{
				title: "AI-Powered Insights",
				description:
					"Instant transcription, structured summaries, and key insights—turning responses into meaningful data.",
			},
			{
				title: "Instant Interview Reports",
				description:
					"Downloadable, well-structured reports combining transcripts and summaries for easy review.",
			},
			{
				title: "Centralized Administration",
				description:
					"Manage question banks, interview settings, and applicant eligibility—all in one place.",
			},
			{
				title: "Transparent & Traceable",
				description:
					"Built-in audit logs ensure every action is recorded, secure, and accountable.",
			},
		],
		challenges: [
			"Ensuring highly accurate transcriptions for diverse accents and audio conditions",
			"Generating real-time context-aware follow-up questions safely without AI hallucination",
			"Optimizing video processing, uploading, and storage pipes for large volumes of concurrent applicants",
		],
		contributions: [
			"Architected and integrated the transcription and text analytics logic with LLM layers.",
			"Developed responsive applicant and portal interfaces for running smooth video assessments.",
			"Engineered secure administrative dashboards for auditable logs and interview configurations.",
		],
		imageUrls: [
			"/assets/projects-gallery/YoEtz.png",
			"/assets/projects-gallery/StudentLogin.jpg",
			"/assets/projects-gallery/AiINterview.jpg",
			"/assets/projects-gallery/QuestionsFinal.jpg",
			"/assets/projects-gallery/Submission.jpg",
			"/assets/projects-gallery/SubmissionSuccess.jpg",
			"/assets/projects-gallery/ApplicantList.jpg",
			"/assets/projects-gallery/FacultyLogin.jpg",
			"/assets/projects-gallery/Profile.jpg",
		],
		gallery: [
			"/assets/projects-gallery/YoEtz.png",
			"/assets/projects-gallery/StudentLogin.jpg",
			"/assets/projects-gallery/AiINterview.jpg",
			"/assets/projects-gallery/QuestionsFinal.jpg",
			"/assets/projects-gallery/Submission.jpg",
			"/assets/projects-gallery/SubmissionSuccess.jpg",
			"/assets/projects-gallery/ApplicantList.jpg",
			"/assets/projects-gallery/FacultyLogin.jpg",
			"/assets/projects-gallery/Profile.jpg",
		],
	},
	{
		slug: "stewardfm",
		title: "StewardFM — Facilities Management Platform",
		subtitle: " ",
		description:
			"A facilities and maintenance management platform for tracking work orders, preventive maintenance, and vendor coordination.",
		details:
			"StewardFM helps facilities teams move from reactive to proactive maintenance. Work orders are created, assigned, and tracked from a central hub — with real-time status updates visible to both staff and requesters.\n\nThe platform supports preventive maintenance scheduling, vendor management, and cost tracking per asset. Built for property managers, facility directors, and maintenance supervisors who need accountability and visibility across sites.",
		tags: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Responsive UI Design",
			"Javascript",
		],
		imageUrl: "/assets/projects-gallery/StewardFM.png",
		githubUrl: "",
		demoUrl: "",
		metrics: [
			{ label: "Work Orders/Month", value: "3.5k" },
			{ label: "Resolution Time", value: "-40%" },
			{ label: "PM Compliance", value: "97%" },
		],
		category: "Full Stack Developer",
		features: [
			{
				title: "Asset Lifecycle Management",
				description:
					"Comprehensive tracking of organizational resources from specialized acquisition to final decommissioning.",
			},
			{
				title: "Preventive Maintenance",
				description:
					"Automated scheduling and tracking of routine upkeep to ensure operational continuity.",
			},
			{
				title: "Work Order Tracking",
				description:
					"Streamlined maintenance request system with efficient assignment and status monitoring.",
			},
			{
				title: "Facility Resource Allocation",
				description:
					"Optimized management of physical spaces, rooms, and equipment across multiple locations.",
			},
			{
				title: "Reporting & Insights",
				description:
					"Data-driven dashboards providing deep visibility into facility health and operational costs.",
			},
		],
		challenges: [
			"Designing a work order workflow flexible enough for different facility types",
			"Building preventive maintenance logic that accounts for usage-based and calendar-based triggers",
			"Creating a requester-facing portal that's simple while the internal tool is feature-rich",
		],
		contributions: [
			"Designed the full work order lifecycle from submission to resolution.",
			"Built the preventive maintenance scheduler with recurring task automation.",
			"Implemented the vendor management module with cost tracking integration.",
			"Created the multi-site dashboard with drill-down reporting per location.",
		],
		imageUrls: [
			"/assets/projects-gallery/StewardFm1.png",
			"/assets/projects-gallery/StewardFm2.png",
			"/assets/projects-gallery/StewardFm3.png",
		],
		gallery: [
			"/assets/projects-gallery/StewardFm1.png",
			"/assets/projects-gallery/StewardFm2.png",
			"/assets/projects-gallery/StewardFm3.png",
		],
	},
	{
		slug: "reviewnify",
		title: "Reviewnify",
		subtitle: "Multi-platform Review Monitoring System",
		description:
			"An AI-powered B2B SaaS platform designed to transform how businesses monitor, analyze, and respond to customer reviews from multiple channels within a single and unified dashboard.",
		details:
			"Reviewnify addresses the inefficiencies of fragmented review management by introducing automation, intelligence, and consistency into the workflow. Through the use of AI-generated responses customized to brand voice, real-time sentiment analysis, and data-driven insights, the platform empowers businesses to engage with their customers more effectively while significantly reducing manual workload.\n\nThe platform is specifically tailored for Philippine MSMEs, which often operate with limited manpower and resources, enabling them to protect their digital reputation and focus on growth rather than repetitive administrative tasks.",
		tags: [
			"React.js",
			"Python",
			"MySQL",
			"Amazon Web Services (AWS) or Microsoft Azure",
			"REST API and Graph API",
			"MUI",
			"Paymongo",
		],
		imageUrl: "/assets/projects-gallery/Reviewnify.png",
		githubUrl: "",
		demoUrl: "",
		metrics: [
			{ label: "Supported Platforms", value: "Multi-Channel" },
			{ label: "Target Market", value: "PH MSMEs" },
			{ label: "Core Focus", value: "Automation" },
		],
		category: "Full Stack Developer",
		features: [
			{
				title: "Unified Review Inbox",
				description:
					"Aggregates reviews from supported platforms like Google, Facebook, App Store, and Google Play into a single interface.",
			},
			{
				title: "AI Reply Generator",
				description:
					"Generates context-aware, multi-lingual replies tailored to review content and custom brand voice configurations.",
			},
			{
				title: "Sentiment Detection & Scoring",
				description:
					"Automatically classifies feedback as Positive, Neutral, or Negative, calculating intensity metrics for prioritization.",
			},
			{
				title: "AI Insights & Topic Clustering",
				description:
					"Groups reviews into dynamic themes and extracts recurring keywords to surface actionable operational insights.",
			},
			{
				title: "Multi-Branch Management",
				description:
					"Centralizes directory data and route-specific reviews for organizations managing multiple locations.",
			},
			{
				title: "Role-Based Access Control",
				description:
					"Enforces secure team collaboration workflows with customizable permissions and module access per role.",
			},
			{
				title: "Audit Logging & Security",
				description:
					"Maintains immutable, timestamped activity histories of logins, replies, edits, and platform adjustments.",
			},
		],
		challenges: [
			"Aggregating fragmented review data across multiple external third-party platform APIs reliably",
			"Enforcing conditional brand voice logic to align AI response tones consistently without context hallucination",
			"Gracefully handling API connection overloads and connection state failures during high-volume synchronizations",
		],
		contributions: [
			"Architected and developed the unified review inbox aggregating real-time multi-platform feedback layers.",
			"Integrated LLM and analytics pipelines for automatic sentiment detection and brand-voice-aligned replies.",
			"Implemented secure multi-branch directories alongside role-based permission state machines.",
		],
		imageUrls: [
			"/assets/projects-gallery/reviewnify.png",
			"/assets/projects-gallery/reviewnify1.2.png",
			"/assets/projects-gallery/reviewnify1.3.png",
			"/assets/projects-gallery/reviewnify1.4.png",
		],
		gallery: [
			"/assets/projects-gallery/reviewnify.png",
			"/assets/projects-gallery/reviewnify1.2.png",
			"/assets/projects-gallery/reviewnify1.3.png",
			"/assets/projects-gallery/reviewnify1.4.png",
		],
	},
	{
		slug: "pup-smart-track",
		title: "PUP Smart-Track — Asset & Maintenance Management",
		subtitle: " ",
		description:
			"A centralized Asset and Maintenance Management Information System that manages equipment, inventory, maintenance, disposal, and approval processes in one platform.",
		details:
			"PUP Smart-Track enables efficient tracking of asset lifecycles, accountabilities, and real-time status updates while streamlining workflow overheads through automated approvals and distributed offices management.\n\nFrom dynamic ICT equipment registries up to processing complex local or bulk structural disposals and clearing personnel offboard clearances, this architecture ensures deep compliance transparency, and audit safety.",
		tags: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"PostgreSQL",
			"Prisma",
			"QR/Barcode API",
		],
		imageUrl: "/assets/projects-gallery/SmartTrack.png",
		githubUrl: "",
		demoUrl: "",
		metrics: [
			{ label: "Assets Tracked", value: "15k+" },
			{ label: "Audit Accuracy", value: "99.9%" },
			{ label: "Approval Cycle Time", value: "-55%" },
		],
		category: "Full Stack Developer",
		features: [
			{
				title: "Asset Management (Master Data)",
				description:
					"Centralized repository for all organizational assets, ensuring data integrity and a single source of truth.",
			},
			{
				title: "ICT Equipment Management (ICS)",
				description:
					"Maintain a dynamic registry of IT equipments, allowing for seamless updates and real-time tracking of digital infrastructure.",
			},
			{
				title: "Asset Status Management",
				description:
					"Real-time visibility into the lifecycle of assets, from active use and repair to disposal.",
			},
			{
				title: "Offices Management",
				description:
					"Organize and map assets across different office locations and personnel.",
			},
			{
				title: "Office Equipment Inventory",
				description:
					"A comprehensive listing of general workspace resources to support daily functions.",
			},
			{
				title: "Maintenance Management",
				description:
					"Schedule and track routine upkeep for buildings, grounds, and equipments.",
			},
			{
				title: "Maintenance Request & Approval",
				description:
					"Streamlined workflow for reporting issues and obtaining formal authorization for repairs.",
			},
			{
				title: "Disposal Management",
				description:
					"Standardized procedures for decommissioning assets while maintaining regulatory compliance.",
			},
			{
				title: "Bulk Disposal Processing",
				description:
					"Efficiently manage the simultaneous disposal of multiple assets to save time and administrative effort.",
			},
			{
				title: "Local Disposal Processing",
				description:
					"Easily manage the removal or disposal of assets directly at their specific branch or office location.",
			},
			{
				title: "Accountability Clearance",
				description:
					"Verify that all assigned equipment is returned or accounted for during personnel offboarding.",
			},
			{
				title: "Request & Order Approval",
				description:
					"Multi-level authorization workflows for new acquisitions and internal asset requests.",
			},
			{
				title: "Notifications System",
				description:
					"Automated alerts for maintenance schedules, pending approvals, and low inventory levels.",
			},
			{
				title: "Reporting & Compliance",
				description:
					"Generate comprehensive audit-ready reports to meet organizational standards.",
			},
			{
				title: "Transfer of Accountability",
				description:
					"Formally reassign asset responsibility between employees or office locations.",
			},
		],
		challenges: [
			"Building multi-level state machine conditional logic to enforce bulletproof accountability clearance chains",
			"Handling bulk updates and status processing for thousands of assets without generating server timeout overheads",
			"Designing cross-office tracking systems that sync asset locations smoothly during personnel handovers",
		],
		contributions: [
			"Developed responsive tracking dashboards and multi-level request workflows for administrators.",
			"Implemented robust form data parsing, data validation rules, and transaction steps for safety metrics.",
			"Collaborated with security guidelines to maintain audit compliance and exportable multi-format asset logs.",
		],
		imageUrls: [
			"/assets/projects-gallery/PupSmartTrack1.png",
			"/assets/projects-gallery/PupSmartTrack2.png",
			"/assets/projects-gallery/PupSmartTrack3.png",
			"/assets/projects-gallery/PupSmartTrack4.png",
			"/assets/projects-gallery/PupSmartTrack5.png",
			"/assets/projects-gallery/PupSmartTrack6.png",
			"/assets/projects-gallery/PupSmartTrack7.png",
			"/assets/projects-gallery/PupSmartTrack8.png",
			"/assets/projects-gallery/PupSmartTrack9.png",
		],
		gallery: [
			"/assets/projects-gallery/PupSmartTrack1.png",
			"/assets/projects-gallery/PupSmartTrack2.png",
			"/assets/projects-gallery/PupSmartTrack3.png",
			"/assets/projects-gallery/PupSmartTrack4.png",
			"/assets/projects-gallery/PupSmartTrack5.png",
			"/assets/projects-gallery/PupSmartTrack6.png",
			"/assets/projects-gallery/PupSmartTrack7.png",
			"/assets/projects-gallery/PupSmartTrack8.png",
			"/assets/projects-gallery/PupSmartTrack9.png",
		],
	},
	{
		slug: "srg-website",
		title: "SRG Website — Organization Portfolio Hub",
		subtitle: " ",
		description:
			"A comprehensive portfolio hub designed to showcase the talents, skills, projects, and historical lineage of the SRG organization's members across generations.",
		details:
			"The SRG Website serves as an interactive core for active members, alumni, and potential partners. It integrates deep user profiles highlighting unique academic backgrounds, technical contributions, and historical milestones across different structural generations.\n\nFeaturing highly responsive galleries for active and finished projects, it builds an engaging legacy timeline showcasing continuous collaborative innovations.",
		tags: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
			"Sanity CMS",
		],
		imageUrl: "/assets/projects-gallery/SrgWebsite.png",
		githubUrl: "",
		demoUrl: "",
		metrics: [
			{ label: "Active Portfolios", value: "150+" },
			{ label: "Generations Listed", value: "12+" },
			{ label: "Mobile Performance", value: "98/100" },
		],
		category: "Front-End Developer",
		features: [
			{
				title: "Member Portfolio Hub",
				description:
					"A centralized platform showcasing individual member skills, experiences, and academic history.",
			},
			{
				title: "Visual Project Gallery",
				description:
					"A dynamic showcase of organizational innovations, ongoing initiatives, and successful project completions.",
			},
			{
				title: "Interactive Timeline",
				description:
					"An engaging journey through SRG's legacy, tracking growth and milestones across different generations.",
			},
			{
				title: "Responsive Experience",
				description:
					"Modern, mobile-first design ensuring a premium user experience across all devices and screen sizes.",
			},
			{
				title: "Team Profiles",
				description:
					"Detailed visual profiles for every SRG member, highlighting their unique contributions and roles.",
			},
		],
		challenges: [
			"Crafting a smooth and fluid timeline interaction across varying screens without causing high layout shifts",
			"Structuring an easy CMS scheme that simplifies member onboarding and legacy records administration",
			"Optimizing highly visual multi-generational image galleries for quick performance weights",
		],
		contributions: [
			"Designed and implemented interactive multi-device layouts for the legacy timeline.",
			"Configured clean, manageable content models for dynamic member and profile handling.",
			"Enhanced asset compression and lazy-loading methods to improve the mobile user experience.",
		],
		imageUrls: ["/assets/projects-gallery/SrgWebsite1.png"],
		gallery: ["/assets/projects-gallery/SrgWebsite1.png"],
	},
	{
		slug: "natre-hotel",
		title: "Natre Hotel — Booking Platform",
		subtitle: " ",
		description:
			"Developed both frontend and backend modules for hotel operations such as booking, reservations, and housekeeping management.",
		details:
			"Natre Hotel is a full-featured hospitality booking system designed for boutique hotels and resorts. Guests can browse rooms with rich photo galleries, check live availability, and complete reservations in under two minutes.\n\nThe admin panel enables staff to manage bookings, configure room inventory, apply seasonal pricing rules, and export occupancy reports — all from a clean, mobile-friendly interface.",
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
		imageUrl: "/assets/projects-gallery/Natre-hotel.png",
		githubUrl: "",
		demoUrl:
			"https://www.figma.com/design/Zxm8FAs9YteMvkw8JtF4nw/Natre-Hotel-Website?node-id=0-1&p=f&t=gkNZVdsognVmU1iU-0",
		metrics: [
			{ label: "Booking Conversion", value: "38%" },
			{ label: "Avg. Load Time", value: "0.6s" },
			{ label: "Lighthouse Score", value: "98" },
		],
		category: "Full Stack Developer",
		features: [
			{
				title: "Room Browsing & Availability",
				description:
					"Live room availability calendar with date-range picker and rich photo galleries.",
			},
			{
				title: "Booking & Reservations",
				description:
					"End-to-end reservation flow with instant confirmation and booking reference generation.",
			},
			{
				title: "Payment Integration",
				description:
					"Secure payment processing with booking confirmation and receipt emails.",
			},
			{
				title: "Admin Dashboard",
				description:
					"Inventory, pricing, and reservation management for hotel staff.",
			},
			{
				title: "Housekeeping Management",
				description:
					"Task assignment and status tracking for housekeeping teams across all rooms.",
			},
			{
				title: "RESTful API Integration",
				description:
					"Backend APIs developed and integrated with the frontend for seamless data flow.",
			},
		],
		challenges: [
			"Preventing double bookings under concurrent reservation attempts",
			"Building an intuitive date-range picker that handles check-in/check-out edge cases",
			"Designing a responsive room gallery that loads fast on mobile connections",
		],
		contributions: [
			"Developed both frontend and backend modules for hotel operations such as booking, reservations, and housekeeping management.",
			"Developed RESTful APIs and integrated them with the frontend interface.",
		],
		imageUrls: ["/assets/projects-gallery/Natre-hotel.png"],
		gallery: ["/assets/projects-gallery/Natre-hotel.png"],
	},
	{
		slug: "natretelier",
		title: "Natretelier — Creative Portfolio",
		subtitle: " ",
		description:
			"Built both frontend and backend functionalities including booking, room management, and user authentication for a creative studio's digital presence.",
		details:
			"Natretelier is a bespoke digital presence built for a design and photography studio. The site leads with immersive full-screen visuals, a curated project gallery, and a streamlined inquiry flow that converts visitors into clients.\n\nPerformance and visual fidelity were the top priorities — every image is served through a CDN with responsive sizing, and page transitions are handled with view transitions for a native-app feel.",
		tags: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
			"Sanity CMS",
		],
		imageUrl: "/assets/projects-gallery/Natretelier.png",
		githubUrl: "",
		demoUrl: "https://natretelier.wuaze.com/?i=1",
		metrics: [
			{ label: "Lighthouse Score", value: "100" },
			{ label: "Bounce Rate", value: "21%" },
			{ label: "Inquiry Rate", value: "+52%" },
		],
		category: "Full Stack Developer",
		features: [
			{
				title: "Immersive Hero Section",
				description:
					"Full-screen hero with scroll-triggered animations for an engaging first impression.",
			},
			{
				title: "Booking System",
				description:
					"End-to-end booking flow with room management and availability tracking.",
			},
			{
				title: "User Authentication",
				description:
					"Secure login and registration with role-based access for clients and admins.",
			},
			{
				title: "RESTful API Integration",
				description:
					"Backend APIs developed and integrated with the frontend for smooth data handling.",
			},
			{
				title: "Database Management",
				description:
					"Structured database design ensuring efficient data handling for all operations.",
			},
			{
				title: "Responsive Design",
				description:
					"Fully responsive layouts optimized for seamless experience across all screen sizes.",
			},
		],
		challenges: [
			"Achieving smooth 60fps scroll animations without sacrificing Lighthouse scores",
			"Designing a gallery layout that adapts gracefully from desktop to mobile",
			"Integrating a headless CMS that non-technical clients can use confidently",
		],
		contributions: [
			"Built both frontend and backend functionalities including booking, room management, and user authentication.",
			"Developed RESTful APIs and integrated them with the frontend interface.",
			"Managed database structure and ensured efficient data handling for hotel operations.",
		],
		imageUrls: ["/assets/projects-gallery/Natretelier.png"],
		gallery: ["/assets/projects-gallery/Natretelier.png"],
	},
	{
		slug: "study-buddy",
		title: "Study Buddy — AI Study Companion",
		subtitle: " ",
		description:
			"Designed and developed an intuitive and visually engaging user interface to help students manage tasks, deadlines, and study schedules.",
		details:
			"Study Buddy transforms passive note-taking into active learning. Students paste or upload their study material and the platform generates flashcard decks, practice quizzes, and concise summaries — all powered by AI.\n\nSpaced repetition scheduling ensures students review material at optimal intervals. Progress dashboards show mastery levels per topic, helping students focus time where it matters most before exams.",
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Supabase"],
		imageUrl: "/assets/projects-gallery/Study-Buddy.png",
		githubUrl: "",
		demoUrl:
			"https://www.figma.com/design/hBfYBjITGdksPycWWfQefn/Student-Planner?node-id=0-1&p=f&t=Pav2ySdwXHZ6lXQY-0",
		metrics: [
			{ label: "Flashcards Generated", value: "500k+" },
			{ label: "Avg. Quiz Score Lift", value: "+28%" },
			{ label: "Daily Active Users", value: "4.8k" },
		],
		category: "Full Stack Developer",
		features: [
			{
				title: "Task & Deadline Tracking",
				description:
					"Intuitive task management with deadline reminders to keep students on schedule.",
			},
			{
				title: "Study Schedule Management",
				description:
					"Structured study planning tools to help students organize their time effectively.",
			},
			{
				title: "Note Organization",
				description:
					"Clean note-taking and organization features for managing study materials.",
			},
			{
				title: "AI Flashcard Generation",
				description:
					"Automatically generates flashcard decks and quizzes from uploaded notes and materials.",
			},
			{
				title: "Responsive UI & UX",
				description:
					"Built responsive layouts and interactive components for a seamless cross-device experience.",
			},
			{
				title: "Backend Integration",
				description:
					"Integrated frontend components with backend services to support real-time updates and data handling.",
			},
		],
		challenges: [
			"Generating high-quality, accurate flashcards from unstructured study notes safely",
			"Structuring cross-device layout synchronizations during active time constraints",
			"Balancing custom token parsing payloads cleanly against API response speed bounds",
		],
		contributions: [
			"Designed and developed the study companion dashboard workspace.",
			"Integrated OpenAI endpoints to cleanly parse text into structured JSON quizzes.",
			"Optimized interactive state handling using responsive frontend structures.",
		],
		imageUrls: ["/assets/projects-gallery/Study-Buddy.png"],
		gallery: ["/assets/projects-gallery/Study-Buddy.png"],
	},
];
