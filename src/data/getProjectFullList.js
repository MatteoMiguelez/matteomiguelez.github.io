import { firstProject, secondProject, thirdProject } from "@/data/getProjectBasicInfo.js";

export function getProjectFullList() {
    return [
        {
            ...firstProject,
            tasks: "Adaptation d’un algorithme de recommandation de films pour des restaurants, interface " +
                "restaurateur (création et modification d’un restaurant), email avec code vérification & traitement " +
                "des données pour l’affichage, la création d’entités...",
            context: "Projet de groupe éffectué dans le cadre de ma deuxième année de BUT.",
            pictureNumber: 2,
        }, {
            ...secondProject,
            tasks: "Création des différentes formes avec Inkscape, développement des fenêtres et algorithmes de jeu " +
                "et gestion des scores à l’aide d’un fichier CSV.",
            context: 'Projet personnel réalisé sur mon temps personnel durant mon stage de deuxième année.',
            pictureNumber: 3,
        }, {
            ...thirdProject,
            tasks: "Backend -> Création d'une route paginer permettant de récupérer les utilisateurs de l'application.\n" +
                "Frontend -> Affichage de la liste pagignée des utilisateurs, de la liste des projecteurs de " +
                "l'entreprise avec leur version, modifiable. Fenêtre d'ajout de produits, de modification de version. " +
                "Formulaire d'envoi de notifications à l'application mobile",
            context: 'Projet de groupe éffectué dans le cadre de ma troisième année de BUT.',
            pictureNumber: 5,
        }
    ]
}