"use client";

import Image from "next/image";
import Link from "next/link";
import type { Hobby, HobbyCategory } from "@/app/about/data";
import { Card } from "@/components/ui/card";

const categoryMeta: Record<HobbyCategory, { label: string; color: string }> = {
	"mind-sports": {
		label: "Mind Sports & Strategy",
		color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
	},
	sports: {
		label: "Sports & Fitness",
		color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
	},
	gaming: {
		label: "Online Gaming",
		color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
	},
	music: {
		label: "Music & Arts",
		color: "text-brand-primary border-brand-primary/30 bg-brand-primary/10",
	},
};

const categoryOrder: HobbyCategory[] = [
	"mind-sports",
	"sports",
	"gaming",
	"music",
];

const PREVIEW_COUNT = 4;

interface Props {
	hobbies: Hobby[];
	/** When true, shows only 4 tiles per category + a "View All" tile */
	previewOnly?: boolean;
}

export function HobbiesSection({ hobbies, previewOnly = false }: Props) {
	if (previewOnly) {
		// In preview mode: show only the first category (mind-sports) with 4 tiles + "View All" tile
		const firstCatKey = categoryOrder[0];
		const firstCat = categoryMeta[firstCatKey];
		const firstItems = hobbies
			.filter((h) => h.category === firstCatKey)
			.slice(0, PREVIEW_COUNT);
		const totalRemaining = hobbies.length - firstItems.length;

		return (
			<div>
				<div className="flex items-center gap-3 mb-4">
					<span
						className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${firstCat.color}`}
					>
						{firstCat.label}
					</span>
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
					{firstItems.map((hobby) => (
						<div
							key={hobby.id}
							className="group relative overflow-hidden rounded-xl border-2 border-brand-primary hover:border-brand-secondary transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 cursor-default"
						>
							<div className="relative h-28 sm:h-32 overflow-hidden">
								<Image
									src={hobby.imageUrl}
									alt={hobby.title}
									fill
									sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
							</div>
							<div className="px-3 py-2 bg-card">
								<span className="text-xs font-semibold text-foreground group-hover:text-brand-primary transition-colors duration-300 leading-snug line-clamp-1">
									{hobby.title}
								</span>
							</div>
						</div>
					))}

					{/* View All tile */}
					<Link href="/hobbies">
						<div className="group h-full rounded-xl border-2 border-dashed border-brand-primary/50 hover:border-brand-primary transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 cursor-pointer flex flex-col items-center justify-center gap-2 bg-brand-primary/5 hover:bg-brand-primary/10 min-h-30">
							<span className="text-2xl font-black text-brand-primary group-hover:scale-110 transition-transform duration-300">
								+{totalRemaining}
							</span>
							<span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary text-center leading-tight px-1">
								View All
							</span>
						</div>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-10">
			{categoryOrder.map((catKey) => {
				const cat = categoryMeta[catKey];
				const items = hobbies.filter((h) => h.category === catKey);
				if (!items.length) return null;

				return (
					<div key={catKey}>
						<div className="flex items-center gap-3 mb-4">
							<span
								className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${cat.color}`}
							>
								{cat.label}
							</span>
						</div>

						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
							{items.map((hobby) => (
								<Card
									key={hobby.id}
									className="group relative overflow-hidden rounded-2xl border-2 border-brand-primary hover:border-brand-secondary hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 bg-card cursor-default p-0"
								>
									<div className="relative h-44 sm:h-52 overflow-hidden rounded-t-2xl">
										<Image
											src={hobby.imageUrl}
											alt={hobby.title}
											fill
											sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
											className="object-cover transition-transform duration-500 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
									</div>
									<div className="px-4 py-3">
										<h3 className="text-sm font-extrabold text-foreground group-hover:text-brand-primary transition-colors duration-300">
											{hobby.title}
										</h3>
									</div>
									<div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-brand-primary/20 transition-all duration-300 pointer-events-none" />
								</Card>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
}
