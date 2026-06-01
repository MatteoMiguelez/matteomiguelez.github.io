import type { Project } from '@/home/types/project.ts';

export const PROJECTS: Project[] = [
		{
				name: 'game-scoring',
				title: 'Game Scoring',
				description: 'Application responsive pour enregistrer et consulter les scores de jeux de société : statistiques, ' +
						'résultats mensuels et UX pensée pour une saisie rapide.',
				technologies: ['Angular', 'Firebase']
		},
		{
				name: 'blockudoku',
				title: 'Blockudoku',
				description: 'Jeu avec une grille de 9*9 et des formes à placer sur cette grille. La grille se vide en remplissant des lignes, colonnes et carrés de 3*3.',
				technologies: ['Java']
		},
		{
				name: 'portfolio',
				title: 'Portfolio',
				description: 'Site portfolio pour me présenter, mettre en avant mes projets et partager mon parcours et mes expériences professionnelles.',
				technologies: ['VueJs']
		},
		{
				name: 'led-projectors',
				title: 'LED projectors',
				description: 'Back Office de gestion de projecteurs : contrôle des projecteurs pour les utilisateurs mobiles, ' +
						'gestion des utilisateurs, produits et versions pour les administrateurs. (Projet étudiant à 4)',
				technologies: ['SpringBoot', 'VueJs']
		}
];