import type { CareerItem } from "@/home/types/career-item.ts";

export const SCHOOL_CAREER: CareerItem = {
		title: "Parcours Scolaire",
		description: "Dès le lycée, je me suis orienté vers une option informatique en seconde, puis la spécialité Numérique et Sciences Informatiques en première et terminale." +
				"J'ai appris les bases du développement, que j\'ai pu enrichir lors de mon Bachelor Universitaire et Technologique (BUT) Informatique.",
		items: [
				{
						name: "BUT Informatique",
						dates: "2021 - 2024",
						place: "Université Lyon 1 • IUT de Bourg-en-Bresse",
						description: "Parcours : Réalisation d'applications - Spécialité Web",
						isLastElement: true,
				},
				{
						name: "Lycée Xavier Bichat",
						dates: "2018 - 2021",
						place: "Lycée Xavier Bichat • Nantua, Ain",
						description: "Spécialités : Mathématiques & Numérique et Sciences Informatiques",
						isLastElement: false,
				},
		],
};