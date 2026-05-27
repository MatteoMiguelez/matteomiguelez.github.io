import type { Project } from '@/home/types/project.ts';

export const PROJECTS: Project[] = [
		{
				title: 'Portfolio',
				description: 'Site pour me présenter, et partager mon expérience et mes projets.',
				technologies: ['VueJs', 'Github Pages']
		},
		{
				title: 'Game Scoring',
				description: 'Site pour enregistrer des scores de jeux de sociétés et les consulter (statistiques et résultats du mois). ' +
						'Solution responsive (obligatoire pour rentrer les scores) + UX simple.',
				technologies: ['Angular', 'Firebase', 'Github Pages']
		},
		{
				title: 'Blockudoku',
				description: 'Jeu avec une grille de 9*9 et des formes à placer sur cette grille.',
				technologies: ['Java']
		},
];