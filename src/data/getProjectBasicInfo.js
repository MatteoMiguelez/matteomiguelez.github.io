export function getProjectBasicInfo() {
    return [
        firstProject,
        secondProject,
        thirdProject,
    ]
}

export const firstProject = {
    id: 1,
    name: "Site de recommandation de restaurants",
    description: "Site web de recommandation de restaurants pour un individu seul ou un groupe d’individus.",
    technologies: {
        list: ['Django (Python)'],
        length: 1
    },
    picturePath: 'sae-recommandation',
    dates: "Octobre 2022 à avril 2023",
    numberOfPeople: 4,
}

export const secondProject = {
    id: 2,
    name: "Blockudoku",
    description: "Jeu consistant à placer des formes sur une grille pour accumuler des points.",
    technologies: {
        list: ['Java'],
        length: 1
    },
    picturePath: 'blockudoku',
    dates: "Avril & Juin 2023",
    numberOfPeople: 1,
}

export const thirdProject = {
    id: 3,
    name: "Back Office - gestion de projecteurs LED",
    description: "Back Office permettant aux utilisateurs d'une application mobile de gestion de projecteurs " +
        "de contrôler leurs propres projecteurs. Site web permettant la gestion des utilisateurs, " +
        "produits et versions de chaque produit aux administrateurs.",
    technologies: {
        list: ['SpringBoot (Java)', 'VueJs (TypeScript)'],
        length: 2
    },
    picturePath: 'sae-back-office',
    dates: "Septembre 2023 - Maintenant",
    numberOfPeople: 4,
}