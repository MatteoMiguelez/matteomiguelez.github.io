export function getProjectBasicInfo() {
    return [
        {
            id: 1,
            name: "Site de recommandation de restaurants",
            description: "Site web de recommandations de restaurants pour un individu seul ou un groupe d’individus",
            tasks: "Adaptation d’un algorithme de recommandation de films pour des restaurants, interface restaurateur (création et modification d’un restaurant), email avec code vérification & traitement des données pour l’affichage, la création d’entités...\n",
            technologies: "Django (Python)",
            dates: "Octobre 2022 à avril 2023",
            numberOfPeople: 4,
        },
        {
            id: 2,
            name: "Back Office permettant la gestion de projecteurs LED",
            description: "Back Office permettant aux utilisateurs de l'application mobile MyMix de gestion des projecteurs de sauvegarder leurs couleurs favorites et de faire fonctionner leur projecteur avec ces couleurs. Site web front permettant la gestion des utilisateurs, produits et versions de chaque produit aux administrateurs",
            tasks: "Backend -> Création d'une route paginer permettant de récupérer les utilisateurs de l'application.\n" +
                "Frontend -> Affichage de la liste pagignée des utilisateurs, de la liste des projecteurs de l'entreprise avec leur version, modifiable. Fenêtre d'ajout de produits, de modification de version. Formulaire d'envoi de notifications à l'application mobile",
            technologies: "SpringBoot (Java) & VueJs (TypeScript)",
            dates: "Septembre 2023 - Maintenant",
            numberOfPeople: 4,
        }]
}