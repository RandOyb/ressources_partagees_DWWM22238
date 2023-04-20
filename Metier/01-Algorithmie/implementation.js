// var test = 10;
// console.log(test);



//  Commentaire sur une ligne


/* Ici commence mon commentaire
Et il se finit ici */


// VARIABLES
// Déclaration

// Avec `var`, la portée de la variable globale
// var maVariable;
// // Avec `let`, la portée de la variable est locale à son bloc d'instruction
// let variable2;
// let jeSuisUneVariable; // camelCase
// let JeSuisUneVariable; // PascalCase

// // Une constante dont la valeur ne change pas.
// // Elle doit être assignée à la déclaration.
// const UNE_CONSTANTE = 100;


// // Assignation
// maVariable = 120;
// variable2 = "hello";
// let teste = true;

// // Opérations
// let a = 3;
// let b = 15;
// let c = a + b;
// console.log(a + b);

// let boolA = true;
// let boolB = false;
// let boolC = (boolA && boolB);
// console.log(boolC);

// let message1 = "hello";
// let message2 = "world";

// // la concatenation
// console.log("**** Concaténation ****");
// let message3 = message1 + " " + message2;

// console.log(message3);
// // Demande à quel indice se trouve le caractère `o`
// let index = message3.lastIndexOf("o");
// console.log(index);
// // HELLO
// // 01234


// //CONDITIONS
// console.log("\n**** Structure if... else if... else ****\n");
// let age = 15;
// if (age >= 18) {
//     console.log("Vous êtes majeur");
// }
// else {
//     console.log("Vous êtes mineur");
// }

// age = 18;
// if(age == 18){
//     console.log("vous avez 18 ans");

// }
// else if(age > 18){ 

//     console.log("tu est majeur");

// }
// else if(age < 18) {
//     console.log("tu est mineur");
// };

// age = 4;

// console.log("\n**** Structure Switch() ****\n");
// switch(age){
//     case 4:
//         console.log("Vous êtes un bébé");
//     case 17:
//         console.log("Vous êtes mineur");
//         break;
//     case 18:
//         console.log("vous avez 18 ans");
//         break;
//     case 21:
//         console.log("Vous êtes majeur");
//         break;
//     default:
//         console.log("Votre âge n'existe pas dans notre base de données");
//         break;
// }


// // BOUCLES
// // While
// console.log("\n**** Boucles while() ****\n");
// // let bool = true;
// let compteur = 0;
// while(bool){
//     console.log(compteur);
//     compteur++; // compteur = compteur + 1
//     // compteur += 5 équivaut à compteur = compteur + 5
//     if (compteur == 5){
//         console.log("*******************************");
//     }
//     if (compteur >= 10)
//     {
//         bool = false;
//         console.log("La boucle est terminée");
//     }
// };
// console.log(compteur);
// compteur = 0;
// while(compteur <= 10){
//     console.log(compteur);
//     compteur++; // compteur = compteur + 1
// }


// console.log(compteur);
// console.log("\n**** Boucles do...while() ****\n");
// // compteur = 0;
// do {
//     console.log(compteur);
//     compteur++; // compteur = compteur + 1
// } while(compteur <= 10);



// console.log("\n**** Boucles for() ****\n");
// // var i;
// for(i = 0; i < 10; i+=2){
//     console.log(i);
// }
// console.log(i);


// // demande un nombre
// // le nombre est-il positif ou négatif?
// let nombre = 0;
// nombre = prompt("Entrez un nombre.");
// if(nombre > 0){
//     console.log(nombre + " est positif");
// }
// else {
//     if(nombre == 0){
//         console.log("votre nombre est 0");
//     }
//     else {
//         console.log(nombre + " est négatif");
//     }
    
// }

// if (nombrePlusMoins > 0){
//     document.write("là c'est positif");
// } 
// if (nombrePlusMoins < 0){
//     document.write("là c'est négatif");
// } 
// if (nombrePlusMoins == 0) {
//     document.write("là c'est neutre");
// } else {
//     document.write(" là c'est pas un chiffre");
// }

// // Indiquer si le nombre est pair ou impair.
// // + - * / %
// nombre = 0;
// nombre = prompt("Saisissez un nombre")
// console.log(typeof(nombre));
// let nombreParse = parseInt("toto");
// console.log(nombreParse);
// console.log(typeof(nombreParse));
// if (nombre % 2 == 0){
//     console.log("Le nombre saisie est pair");
// }
// else{
//     console.log("Le nombre saisie est impair");
// }
// 5 % 2 = 1


// MA FONCTION-------------------------------------
// demande un nombre
// le nombre est-il positif ou négatif?

// let nombre = 0;
// nombre = prompt("Entrez un nombre.");
// function PositifOuNegatif(){
//     // le code ici
//     let resultat = 0;
//     if(nombre > 0){
//         console.log(nombre, "+");
//     }
//     else {
//         if(nombre == 0){
//             resultat = "zéro";
//         }
//         else {
//             resultat = "negatif";
//         }
//     }
//     return resultat;
// }
// PositifOuNegatif();
// // ---------------------------------
// for(var i = 0; i < 3; i++){
//     let saisieUtilisateur = 0;
//     let reponseProgramme = "";
//     saisieUtilisateur = prompt("Entrez un nombre.");
//     reponseProgramme = PositifOuNegatif(saisieUtilisateur);
//     console.log("Votre nombre est " + reponseProgramme);
// }
// console.log(resultat);



// if(nombre2 == 0 && nombre < 0){
//     console.log("nombre pair et negatif");
// }
// else if(nombre2 == 0 && nombre == 0){
//     console.log("nombre pair et nul");
// }
// else if(nombre2 == 0 && nombre > 0){
//     console.log("nombre pair et positif");
// }
// else if(nombre2 != 0 && nombre < 0){
//     console.log("nombre impair et negatif");
// }
// else if(nombre2 != 0 && nombre > 0){
    //     console.log("nombre impair et positif");
// }

// let nombre;
// let nombre1;

// do{
//     nombre = prompt("Entrez un nombre :");
//     nombre1 = parseInt(nombre);
// } while(isNaN(nombre1));

// let nombre2 = nombre % 2;

// if(nombre2 == 0) {
//     if (nombre == 0){
//         console.log("nombre pair et nul");
//     }
//     else if (nombre < 0) {
//         console.log("nombre pair et négatif");
//     }
//     else {
//         console.log("nombre pair et positif");
//     }
// }
// else {
//     if(nombre == 0){
//         console.log("nombre impair et nul");
//     }
//     else if (nombre < 0) {
//         console.log("nombre impair et négatif");
//     }
//     else {
//         console.log("nombre impair et positif");
//     }
// }

// //Ma fonction
// function PositifOuNegatif(){
//     // Tester un nombre donné par un utilisateur
//     // boucle principale qui demande un nouveau nombre à évaluer si 
//     // l'utilisateur le souhaite.
//     while(encore == true){
//         // saisie utilisateur
//         nombre = prompt("entrer un nombre");
//         // Pair ou impair
//         pair = (nombre % 2);
//         // est nombre?
//         let a = parseInt(nombre);
//         // si c'est un nombre
//         if(!isNaN(a)){
//             // si c'est positif
//             if(nombre > 0){
//                 if(pair == 0){
//                     console.log(nombre + " est positif et pair");
//                 } else {
//                     console.log(nombre + " est positif et impair");
//                 }
//             } else
//             // si c'est négatif  {
//             if(nombre == 0){
//                 console.log("0 est votre nombre");
//             } 
//             else{
//                 if(pair == 0 ){
//                     console.log( nombre + " est négatif et pair");
//                 } 
//                 else {
//                     console.log( nombre + " est négatif et impair");
//                 }     
//             }
//         }
//         // si ce n'est pas un nombre
//         else {
//             console.log( nombre + " n'est pas un nombre");
//         }
//     }
//     // l'utilisateur veut-il recommencer ?
//     let continuer = prompt("Voulez-vous recommencer ?");
//     if (continuer == "non"){
//         encore  = false;
//     }
// }

// PositifOuNegatif();


// // fonction test de parite
// function Parite(nombre) {
//     let result;
//     if (nombre % 2 == 0) {
//         result = "pair";
//     } else {
//         result = "impair";
//     }
//     return result;
// }

// // fonction test de signe
// function PosNeg(nombre) {
//     let result;
//     if (nombre < 0) {
//         result = "négatif";
//     } else {
//         result = "positif";
//     }
//     return result;
// }

// // fonction de test global
// function TestNombre(nombre) {
//     if (nombre == 0) { // cas nul
//         console.log("Votre nombre est O, il est pair mais ni positif, ni négatif");
//     } else { // cas général
//         signe = PosNeg(nombre);
//         parite = Parite(nombre);
//         console.log("Votre nombre est", parite, "et", signe);
//     }
// }
// userInput = prompt("entrez un nombre");
// TestNombre(userInput);



// let compteur;
let temoin = 10;
let compteur = prompt("Entrez un nombre");
console.log(compteur);
console.log(temoin);

let variable1 = 150;
let variable2 = "Texte de ma variable";
console.log(variable1);
console.log(variable2);


let nombre1 = 10;
let nombre2 = "10";


// Ecrire un algorithme qui demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce que la réponse convienne.


/* Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10.*/

/*Ecrire un algorithme qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27.*/


/*
Ecrire un algorithme qui demande un nombre de départ, et qui calcule 
la somme des entiers jusqu’à ce nombre. Par exemple, si l’on entre 5, le programme doit calculer:
1 + 2 + 3 + 4 + 5 = 15
NB : on souhaite afficher uniquement le résultat, pas la décomposition 
du calcul. */
let nombre = prompt("Entrez un nombre");
nombre = parseInt(nombre);
let result = 0;
for(let i = 0; i <= nombre; i++){
    result += i; 
}
console.log(result);