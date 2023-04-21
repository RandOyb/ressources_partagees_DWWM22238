import temoin from "implementation.js";

let texte = "Quel est votre nom?";
let saisie = prompt(texte);

afficheMessage(saisie); // Bonjour "untel". Bienvenue chez nous!!!

function afficheMessage(texteAAfficher){
    console.log("Bonjour " + texteAAfficher + ". Bienvenue chez nous!!!");
}

function retourneMessage(texteAAfficher){
    let message = "Bonjour " + texteAAfficher + ". Bienvenue chez nous!!!";
    // console.log(message);
    return message;
}

let voisin = "John";
afficheMessage(voisin);
let messageRecu = retourneMessage(voisin);

console.log(messageRecu);


function addition(nombre1,nombre2){
    let somme = nombre1 + nombre2;
    return somme;
}
let n1, n2;
n1 = 5;
n2 = 6;
let resultat = addition(n1,n2);
n1 *= 3;
n2 *= 5;
console.log(resultat);
resultat = addition(n1,n2);
console.log(resultat);

let nombreUtilisateur1 = prompt("Entrez un nombre?");
let nombreUtilisateur2 = prompt("Entrez un nombre?");
nombreUtilisateur1 = parseInt(nombreUtilisateur1);
nombreUtilisateur2 = parseInt(nombreUtilisateur2);
resultat = addition(nombreUtilisateur1,nombreUtilisateur2);
console.log(resultat);


function division(nombre1,nombre2){
    let resultat;
    if(nombre2 != 0){
        resultat = nombre1 / nombre2;
        return resultat;
    }
    else {
        console.log("Division impossible");
        return null;
    }
}

let num1 = 10;
let num2 = 0;
let resultatDivision;

do {
    num1 = prompt("Entrez un nombre");
    num2 = prompt("Entrez un nombre");
    
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    resultatDivision = division(num1,num2);

    if(resultatDivision != null){
        console.log(resultatDivision);
    }
    else{
        console.log("La division n'a pas pu être effectuée!\nVeuillez donner de nouveaux nombres");
    }
} while(resultatDivision == null);

