export function getProjectBasicInfo() {
    return [
        {
            id: 1,
            name: "Site de recommandation de restaurants",
            description: "Site web de recommandation de restaurants pour un individu seul ou un groupe d’individus.",
            tasks: "Adaptation d’un algorithme de recommandation de films pour des restaurants, interface " +
                "restaurateur (création et modification d’un restaurant), email avec code vérification & traitement " +
                "des données pour l’affichage, la création d’entités...",
            technologies: {
                list: ['Django (Python)'],
                length: 1
            },
            dates: "Octobre 2022 à avril 2023",
            numberOfPeople: 4,
        },
        {
            id: 2,
            name: "Blockudoku",
            description: "Jeu consistant à placer des formes sur une grille pour accumuler des points.",
            tasks: "Création des différentes formes avec Inkscape, développement des fenêtres et algorithmes de jeu " +
                "et gestion des scores à l’aide d’un fichier CSV.",
            technologies: {
                list: ['Java'],
                length: 1
            },
            dates: "Avril & Juin 2023",
            numberOfPeople: 1,
        }, {
            id: 3,
            name: "Back Office - gestion de projecteurs LED",
            description: "Back Office permettant aux utilisateurs d'une application mobile de gestion de projecteurs " +
                "de contrôler leurs propres projecteurs. Site web permettant la gestion des utilisateurs, " +
                "produits et versions de chaque produit aux administrateurs.",
            tasks: "Backend -> Création d'une route paginer permettant de récupérer les utilisateurs de l'application.\n" +
                "Frontend -> Affichage de la liste pagignée des utilisateurs, de la liste des projecteurs de " +
                "l'entreprise avec leur version, modifiable. Fenêtre d'ajout de produits, de modification de version. " +
                "Formulaire d'envoi de notifications à l'application mobile",
            technologies: {
                list: ['SpringBoot (Java)', 'VueJs (TypeScript)'],
                length: 2
            },
            dates: "Septembre 2023 - Maintenant",
            numberOfPeople: 4,
        },
    ]
}