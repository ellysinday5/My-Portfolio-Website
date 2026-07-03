import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		localPatterns: [
			{
				pathname: "/assets/**",
				search: "",
			},
			{
				pathname: "/certificates/**",
				search: "",
			},
			{
				pathname: "/hobbies/**",
				search: "",
			},
		],
	},
};

export default nextConfig;
