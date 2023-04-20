// VARIABLES
// Une variable permet de stocker une valeur.
// Elle peut être déclaré de 2 manières:
var uneVariable; // Portée de la variable globale (accessible dans tous le fichier)
let secondeVariable; // Portée de la variable locale (accessible depuis le bloc de code de la ddéclaration)
// Une valeur peut également être stocké dans une constante.
// Une fois déclarée, une constante ne peut pas être réaffectée.
const UNE_CONSTANTE = "Ce texte ne changera pas"; // Portée de la constante globale.

// les types de variables:
// le variables peuvent stocker des valeurs numériques, des booléens, des chaines de caractères (Number, boolean, string)
let entier = 0;
var chaine = "0";
const PI = 3.141592;
let estMajeur = false;

// Il est possible d'effectuer des opérations sur les variables
// des opérations mathématiques sur les variables de types Number
let a = 5;
let b = 10;
let calcul = a + b;
let circonference = 2 * PI * a;
// Il existe un opérateur qui permet de récupérer le reste d'une division entière: le modulo (%)
let resteDeDivision = 5 % 2; // Resultat = 1 car 5 / 2 donne 2 et il reste 1
// Pour utiliser les opérations mathématiques plus poussé, il faudra utiliser l'objet Math (cf documentation sur mdn)

// !!! Attention!!! Lorsque vous récupérer une saisie de l'utilisateur via un prompt par exemple, cette saisie est forcément de type string et vous devrez la convertir en type Number (avec un parseInt() par exemple) pour effectuer les opérations mathématiques.

// CONDITIONS
// Elles permettent de gérer différentes actions possibles
// Elle fait une comparaison entre 1 élément connu avec l'élément à tester 
// Elle renvoie toujours vrai ou faux (true ou false, ou encore 1 ou 0)

// IF
let i = 0;
if (1 < 10){
    console.log("vrai");
}

// Les opérateurs de comparaison:
// < <= inférieur (ou égal) à 
// > >= supérieur (ou égal) à
// == strictement égal
// != différent égal
// === strictemen égal à (comparaison du type ET de la valeur)

// let reponse = "Christophe";
let reponse = prompt("Qui répond à la question?");
if(reponse == "Christophe"){
    console.log("Dites lui de se taire");
}
else if( reponse == "Micka"){
    console.log("Chehhhhh Christophe!!!");
}
else if (reponse == ""){
    console.log("Vous êtes toujours là?");
}
else{
    console.log("Merci d'avoir participé");
}

// SWITCH
// Permet des comparaison d'égalité stricte (==)
switch(reponse){
    case "Clément":
        console.log("Bravo");
        break; // Permet de sortir du switch
    case "Christophe":
        console.log("Dites lui de se taire");
        break;
    case "Micka":
        console.log("Chehhhhh Christophe!!!");
        break;
    case "":
        console.log("Vous êtes toujours là?");
        break;
    default:
        console.log("Merci d'avoir participé");
        break;
}

// BOUCLES
// Une boucle permet de répéter un bloc d'instructions.
// La répétition peut être conditionnée (en fonction d'une condition)
// !!!! Attention aux boucles infinies
// On peut imbriquer les boucles entre elles (une boucle dans une boucle)
// Il existe 3 boucles prinicpales: while, do...while,for
reponse = "";
while(reponse == ""){
    reponse = prompt("Donner un exemple de boucle");
    console.log("J'attends votre réponse");
}
i = 0;
while(i < 15){
    console.log("coucou");
    i++;
}
// ---------------
let saisie;
do{
	saisie = prompt("Entrez un nombre :");
}while(isNaN(saisie));
//------------
// la boucle for permet de parcourir les tableaux
let nombreDeJoueur = prompt("Entrez un nombre de joueurs:");
const joueurs = [];
// la boucle for se construit en indiquant le point de départ, la condition de répétition de la boucle et le pas.
for(let i = 0; i < nombreDeJoueur; i++){
    joueurs[i] = "Joueur " + (i + 1);
    console.log(i);
}
console.log(joueurs);
// (i++) == (i = i + 1)

// FONCTIONS
// Elle permet de réutiliser un morceau de code sans avoir à le réécrire.
// Une fonction est un algorithme réutilisable
// Une fonction peut accepter des paramètres avec lesquelle elle va travailler.
// Une fonction peut retourner un résultat si elle contient un return.
// L'intérieur d'une fonction est inaccessible pour le reste du code. C'est comme s'i c'était une dimension parallèle.
// Par convention entre nous, tous les paramètres passées à la fonction doivent être préfixé par la lettre "p" pour paramètre pour ne pas les confondre avec les autres variables du script.
// Une fonction peut être appelé depuis l'interieur d'une autre fonction.
function maFonction(){
    // Ici j'écris le code de ma fonction
}
function maFonction(pParametre){
    // Ici j'écris le code de ma fonction
}
// Une fonction peut accepter autant de paramètres que l 'on veut.
function maFonction(pParametre1,pParametre2){
    // Ici j'écris le code de ma fonction
}
function maFonction(){
    // Ici j'écris le code de ma fonction
    return resultat;
}
function maFonction(pParametre){
    // Ici j'écris le code de ma fonction
    return resultat;
}