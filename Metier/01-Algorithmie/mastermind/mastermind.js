/*
Prefixe à utiliser pour le nommage des variables en fonction de leur type
b pour une variable booléenne
s pour une variable string
i pour une variable int (entier)
f pour une variable float (nombre décimal)
a pour une variable array (tableau)
*/

// Controler la saisie de l'utilisateur
// !!! Attention! Lorsque l'on passe un tableau en paramètre à une fonction, ce n'est pas une copie de ce que contient le tableau qui est envoyé à la fonction mais bien le tableau lui même (contrairement aux variables). Toute modification apportée au tableau DANS la fonction sera répércuté sur le tableau EN DEHORS de la fonction. 

/*
1- L'ordinateur créé une combinaison de 4 chiffres.
2- Afficher le nombre d'essais autorisés pour trouver la combinaison
3- Demander à l'utilisateur de rentrer une combinaison (en précisant le nombre d'essais restants)
4- Vérifie la saisie:
    4.1- Si la saisie est incorrecte, redemander de rentre une combinaison sans le comptabiliser comme une tentative
    4.2- Sinon poursuivre
5- Afficher le nombre d'essais restants pour trouver la combinaison
6- On vérifie les éléments de la proposition qui sont bien placés (valeurs hors-limite)
7- On vérifie les éléments de la proposition qui sont mal placés
8- Afficher au joueur le resultat
9- Retirer un essai
10- On vérifie le résultat:
    10.1- Si le nombre d'essais autorisés à été atteint, la partie est perdue. On affiche la combinaison qu'il fallait trouver.
    10.2- Si le nombre d'éléments bien placés est égale à la longueur de la combianison, la partie est gagnée. On affiche la combinaison qu'il fallait trouver.
    10.3- Sinon, dans tous les autres cas, on revient à l'étape 3
*/

// VARIABLES
let eNombreEssais;