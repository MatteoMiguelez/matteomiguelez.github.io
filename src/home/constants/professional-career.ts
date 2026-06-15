import type { CareerItem } from "@/home/types/career-item.ts";

export const PROFESSIONAL_CAREER: CareerItem = {
		title: "Parcours Professionnel",
		description: "Au cours de mes études, je me suis progressivement inséré dans le monde professionnel : d'abord via un stage en deuxième année de BUT, puis en alternance pour ma troisième année. À l'issue de cette alternance, j'ai été embauché en CDI dans la même entreprise, ce qui m'a permis de poursuivre les projets déjà engagés tout en contribuant à de nouvelles missions.",
		items: [
				{
						name: "Développeur fullstack",
						dates: "2024 - Maintenant",
						inactiveDates: "2023 - 2024 (Alternance)",
						place: "Wimova • Villeurbanne & Meyzieu, France",
						description: "Frameworks : Symfony & Angular.",
						tasks: [
								"Développement d'interfaces web (gestion et réservation de courses, facturation…)",
								"Développement backend (API, logique métier) pour site web et application mobile (Domain Driven Design)",
								"Intégration de services tiers (Stripe, Zendesk, emails automatiques)",
								"Maintenance et amélioration continue des applications",
						],
						isLastElement: true,
				},
				{
						name: "Développeur fullstack (Stage)",
						dates: "Juin - Août 2024",
						place: "Okteo • Ceyzériat, France",
						description: "Frameworks : SpringBoot & VueJs",
						tasks: [
								"Développement d'une interface de création de projets",
								"Développement d'une interface de gestion des jours non travaillés (congés…)",
						],
						isLastElement: false,
				},
		],
};