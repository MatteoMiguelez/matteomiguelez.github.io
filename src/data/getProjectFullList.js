import { firstProject, secondProject, thirdProject } from "@/data/getProjectBasicInfo.js";

export function getProjectFullList() {
    return [
        {
            ...firstProject,
            tasks: "Adaptation d’un algorithme de recommandation de films pour des restaurants, interface " +
                "restaurateur (création et modification d’un restaurant), email avec code vérification & traitement " +
                "des données pour l’affichage, la création d’entités...",
            context: "Projet de groupe éffectué dans le cadre de ma deuxième année de BUT.",
            pictures: [
                {
                    link: 'sae-recommandation/1.png',
                    information: "La page d'accueil du site web, on peut voir la liste de recommandations pour " +
                        "l'utilisateur connectée, affichée à l'aide d'un carrousel. Il y a aussi d'autres liste," +
                        "comme ici celle des meilleurs restaurants italiens, pour laisser plus de choix à l'" +
                        "utilisateur.",
                    alt: 'page accueil',
                    width: 605,
                }, {
                    link: 'sae-recommandation/2.png',
                    information: "La page avec la liste des groupes d'utilisateurs. On peut voir les 3 premiers " +
                        "membres du groupe et cliquer sur le bouton << Voir les recommandations >> pour avoir la " +
                        "liste des recommandations faite pour le groupe. Ces recommandations font en sorte de " +
                        "suivre les goûts de tous les utilisateurs du groupe. Un utilisateur peut créer un groupe " +
                        "avec les personnes qu'il souhaite à partir de leur adresse électronique.",
                    alt: 'groupes utilisateurs',
                    width: 605
                }
            ],
            pictureNumber: 2,
        }, {
            ...secondProject,
            tasks: "Création des différentes formes avec Inkscape, développement des fenêtres et algorithmes de jeu " +
                "et gestion des scores à l’aide d’un fichier CSV.",
            context: 'Projet personnel réalisé sur mon temps personnel durant mon stage de deuxième année.',
            pictures: [
                {
                    link: 'blockudoku/2.png',
                    information: "Écran principal de l'application, il permet de jouer au blockudoku. Le joueur à 3 " +
                        "pièces possible à poser sur la grille par tour. D'abord, il sélectionne la pièce qu'il " +
                        "souhaite déposer sur la grille (en cliquant sur celle-ci). Ensuite, il clique sur la case " +
                        "sur laquelle il souhaite que la partie la plus en haut à gauche de la pièce soit déposée. " +
                        "Si une colonne, ligne ou case de 3*3 (grise ou blanche) est complète (bleu), alors les " +
                        "cases redeviennent libres et le joueur gagne plus de points.",
                    alt: 'blockudoku',
                    width: 545,
                }, {
                    link: 'blockudoku/3.png',
                    information: "Écran de fin de jeu. Lorsque le joueur n'a plus la possibilité de jouer, cette écran" +
                        "apparaît avec son score. Il peut l'enregistrer et voir les autres meilleurs scores, chacun" +
                        "rattachés à un pseudonyme. Il peut aussi voir la liste complète des scores, quitter le jeu, " +
                        "ou relancer une nouvelle partie.",
                    alt: 'ecran fin',
                    width: 430,
                }
            ],
            pictureNumber: 3,
        }, {
            ...thirdProject,
            tasks: "Backend -> Création d'une route paginer permettant de récupérer les utilisateurs de l'application.\n" +
                "Frontend -> Affichage de la liste pagignée des utilisateurs, de la liste des projecteurs de " +
                "l'entreprise avec leur version, modifiable. Fenêtre d'ajout de produits, de modification de version. " +
                "Formulaire d'envoi de notifications à l'application mobile",
            context: 'Projet de groupe éffectué dans le cadre de ma troisième année de BUT.',
            pictures: [
                {
                    link: 'sae-back-office/1.png',
                    information: "Page principale du backOffice, les administrateurs ont accès à la liste paginée " +
                        "de tous les utilisateurs de l'application mobile. Ils peuvent faire une recherche sur le " +
                        "nom, le prénom et l'adresse email de l'utilisateur, ainsi que faire un tri de la liste" +
                        "par ordre croissant ou décroissant sur tous les champs. Le crayon vert permet l'ouverture " +
                        "de la fenêtre ci-après.",
                    alt: 'liste utilisateurs',
                    width: 500,
                }, {
                    link: 'sae-back-office/2.png',
                    information: "Cette fenêtre permet de mettre à jour l'adresse email d'un utilisateur. C'était " +
                        "une amélioration à apporter à l'ancien produit, que nous avons donc ajouter dans notre" +
                        "nouvelle version.",
                    alt: 'modification email',
                    width: 400,
                }, {
                    link: 'sae-back-office/4.png',
                    information: "Sur une deuxième page, les administrateurs ont accès à la liste des produits" +
                        "(projecteurs), avec leur dernière version. Elle peut aussi être triée par ordre croissant " +
                        "ou décroissant. Avec le bouton '+', il est possible de créer une nouvelle version du " +
                        "produit (présenté ci-après).",
                    alt: 'liste produits',
                    width: 500,
                }, {
                    link: 'sae-back-office/3.png',
                    information: "Cette fenêtre permet donc de créer une nouvelle version pour chaque produit. L'" +
                        "administrateur doit entrer une date, un numéro de version et un fichier qui permet de lier " +
                        "le projecteur à l'application mobile de l'utilsateur. A chaque changement de version, l'" +
                        "application mobile propose la mise à jour du produit à l'utilisateur.",
                    alt: 'nouvelle version',
                    width: 400,
                }, {
                    link: 'sae-back-office/5.png',
                    information: "Sur cette dernière page, l'administrateur peut envoyer une notification à tous les " +
                        "utilisateurs de l'application mobile avec un corps de texte défini.",
                    alt: 'envoie notification',
                    width: 605,
                }
            ],
            pictureNumber: 5,
        }
    ]
}