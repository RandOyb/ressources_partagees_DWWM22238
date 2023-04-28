/* Exercice 1
Écrire un algorithme qui va demander à l'utilisateur, l'heure qu'il est, en lui demandant d'abord l'heure, puis les minutes. L'algorithme devra ensuite afficher l'heure qu'il sera à la minute suivante.

// Nous partons du principe que l'heure saisie par l'utilisateur est valide !
*/

// // Déclaration
let heures, minutes;

function saisieUtilisateur(pMessage){
    let saisie;
    saisie = prompt(pMessage);
    return saisie;
}

function SaisieNumerique(pMessage){
    let saisie = saisieUtilisateur(pMessage);
    // conversion de la saisie en nombre
    saisie = parseInt(saisie);
    return saisie;
}

function heureEstValide(pHeures){
    console.log(pHeures); //15
    if((pHeures < 0) || (pHeures >= 24)){
        alert("Mauvaise entrée. Veuillez redonner un nombre.");
        return false;
    }
    else {
        return true;
    }
}

function minuteEstValide(pMinutes){
    if((pMinutes < 0) || (pMinutes >= 60)){
        alert("Mauvaise entrée. Veuillez redonner un nombre.");
        return false;
    }
    else {
        return true;
    }
}

// Affectation et demande de saisie de l'utilisateur
let heureValide;
do {
    heures = SaisieNumerique("Quelle heure est-il? (donnez un nombre d'heures entre 0 et 23)");

    heureValide = heureEstValide(heures);
    // console.log(heures);
    // console.log(heureValide);

} while (isNaN(heures) || !heureValide);
// } while (isNaN(heures) || heureValide == false);

do {
    minutes = SaisieNumerique("Quelle heure est-il? (donnez un nombre de minutes entre 0 et 59)");
    
} while (isNaN(minutes) || !minuteEstValide(minutes));

// On ajoute une minute
minutes++; // minute = minute + 1

// Mise à jour de l'heure
if (minutes == 60) {
    minutes = 0;
    heures++;

    if (heures == 24){
        heures = 0;
    }
}

// Affichage de l'heure
console.log("Dans une minute, il sera " + heures + ":" + minutes + ".");


/* Un magasin de reprographie facture :

    0,10 € les dix premières photocopies

    0,09 € les vingt suivantes

    et 0,08 € au-delà.

Écrivez un algorithme qui demande à l'utilisateur le nombre de photocopies effectuées et qui affiche la facture correspondante.
*/
let nombre;
let prix;

do {
    nombre = SaisieNumerique("Nombres de copies: ");
} while(nombre <= 0 || isNaN(nombre));

function prixCopie(pNombre) {
    let total;
    if( pNombre <= 10) {
        total = pNombre * 0.1;
    }
    else {
        if(pNombre <= 30){
            total = 1 + (pNombre - 10) * 0.09;
        }
        else {
            total = 1 + 1.8 + (pNombre - 30) * 0.08;
        }
    }
    return total;
}

prix = prixCopie(nombre);

console.log("Vous avez demandé " + nombre + " copies. Cela vous coutera : " + prix + "€");




/*
Les habitants de Zorglub paient l'impôt selon les règles suivantes :

    les hommes de plus de 20 ans paient l'impôt

    les femmes paient l'impôt si elles ont entre 18 et 35 ans

    les autres ne paient pas d'impôt

Le programme demandera donc l'âge et le sexe du Zorglubien, et se prononcera donc ensuite sur le fait que l'habitant est imposable ou non.
*/
function getGenreFH(message) {
    let result = prompt(message).toLocaleUpperCase();
    while (result != "H" && result != "F") {
        alert(
            "seuls les genres hommes(H) et Femmes (F) sont gérés par notre plateforme. Désolé !"
        );
        result = prompt(message).toLocaleUpperCase();
    }
    return result;
}

let genre;
let age;

do {
    age = SaisieNumerique("Entrez votre age: ");
} while(age < 0 || isNaN(age));

genre = getGenreFH("Quel est votre genre: ");

function payeImpots(pGenre, pAge){
    let paye;
    if(pGenre == "H" && pAge > 20){
        // console.log("Vous payez l'impôt");
        paye = true;
    }
    else if (pGenre == "F" && pAge >= 18 && pAge <= 35){
        // console.log("Vous payez l'impôt");
        paye = true;
    }
    else{
        // console.log("Vous ne payez l'impôt");
        paye = false;
    }
    return paye;
}

let impots = payeImpots(genre,age);
if(impots){
    console.log("Vous payez l'impôt");
}
else {
    console.log("Vous ne payez pas l'impôt");
}

// -----------------------
age = prompt ("Quelle âge avez-vous") * 1 ;
let sexe = prompt ("Quelle est votre sexe (homme/femme) ?") ;

if ((sexe == "homme" && age > 20) || (sexe == "femme" && age >= 18 && age <= 35)) {
    console.log("Navré mais ici ce n'est pas un paradis fiscal, vous êtes imposable");
}

else {
    console.log("une loi de fiscalisation est en cours pour vous, mais pour l'heure, vous n'êtes pas imposable ");
}


/*
Les élections , obéissent à la règle suivante :

    lorsque l'un des candidats obtient plus de 50% des suffrages, il est élu dès le premier tour.

    en cas de deuxième tour, peuvent participer uniquement les candidats ayant obtenu au moins 12,5% des voix au premier tour.

Vous devez écrire un algorithme qui permette la saisie des scores de quatre candidats (A, B, C et D) au premier tour.

Cet algorithme traitera ensuite le candidat A (et uniquement lui), il dira si :

    il est élu,

    il est battu,

    il se trouve en ballottage favorable (il participe au second tour en étant arrivé en tête à l'issue du premier tour)

    il se trouve en ballottage défavorable (il participe au second tour sans avoir été en tête au premier tour).
*/
let fScoreA, fScoreB, fScoreC, fScoreD;
let bAGagne, bAutreGagne, bAEnTete, bScoreInsuffisant;

do {
    fScoreA = SaisieNumerique("Entrez le score du candidat A: ");
} while(fScoreA < 0 || isNaN(fScoreA));
do {
    fScoreB = SaisieNumerique("Entrez le score du candidat B: ");
} while(fScoreB < 0 || isNaN(fScoreB));
do {
    fScoreC = SaisieNumerique("Entrez le score du candidat C: ");
} while(fScoreC < 0 || isNaN(fScoreC));
do {
    fScoreD = SaisieNumerique("Entrez le score du candidat D: ");
} while(fScoreD < 0 || isNaN(fScoreD));

bAGagne = fScoreA >= 50;
bAutreGagne = fScoreB >= 50 || fScoreC >= 50 || fScoreD >= 50;
bScoreInsuffisant = fScoreA < 12.5;
bAEnTete = fScoreA > fScoreB && fScoreA > fScoreC && fScoreA > fScoreD;

if(bAGagne){
    console.log("A gagne au premier tour!");
}
else{
    if(bAutreGagne || bScoreInsuffisant){
        console.log("A n'a pas gagné");
    }
    else {
        if(bAEnTete){
            console.log("A est en ballotage favorable");
        }
        else{
            console.log("A est en ballotage défavorable");
        }
    }

}

/*
Une compagnie d'assurance automobile propose à ses clients quatre familles de tarifs identifiables par une couleur, du moins au plus onéreux :

    tarif bleu

    tarif vert

    tarif orange

    tarif rouge

Le tarif dépend de la situation du conducteur :

    un conducteur de moins de 25 ans et titulaire du permis depuis moins de deux ans, se voit attribuer le tarif rouge, si toutefois il n'a jamais été responsable d'accident. Sinon, la compagnie refuse de l'assurer.

    un conducteur de moins de 25 ans et titulaire du permis depuis plus de deux ans, ou de plus de 25 ans mais titulaire du permis depuis moins de deux ans a le droit au tarif orange s'il n'a jamais provoqué d'accident, au tarif rouge pour un accident, sinon il est refusé.

    un conducteur de plus de 25 ans titulaire du permis depuis plus de deux ans bénéficie du tarif vert s'il n'est à l'origine d'aucun accident et du tarif orange pour un accident, du tarif rouge pour deux accidents, et refusé au-delà

De plus, pour encourager la fidélité des clients acceptés, la compagnie propose un contrat de la couleur immédiatement la plus avantageuse s'il est entré dans la maison depuis plus de cinq ans. Ainsi, s'il satisfait à cette exigence, un client normalement "vert" devient "bleu", un client normalement "orange" devient "vert", et le "rouge" devient orange.

Écrire l'algorithme permettant de saisir les données nécessaires et de traiter ce problème. Avant de se lancer à corps perdu dans cet exercice, on pourra réfléchir un peu et s'apercevoir qu'il est plus simple qu'il n'en a l'air !
*/

let eAge, eDureePermis, eNbreAccidents, eDureeAssurance;
let bJunior, bJeuneConducteur, bConditionAssurance;
let ePointsMalus;
let sTarif;

do {
    eAge = SaisieNumerique("Entrez votre âge: ");
} while(eAge < 18 || isNaN(eAge));
do {
    eDureePermis = SaisieNumerique("Depuis combien d'années avez-vous le permis?: ");
} while(eDureePermis < 0 || isNaN(eDureePermis));
do {
    eNbreAccidents = SaisieNumerique("Combien d'accidents avez-vous eu?: ");
} while(eNbreAccidents < 0 || isNaN(eNbreAccidents));
do {
    eDureeAssurance = SaisieNumerique("Depuis combien d'années avez-vous une assurance chez nous?: ");
} while(eDureeAssurance < 0 || isNaN(eDureeAssurance));

bJunior = eAge < 25;
bJeuneConducteur = eDureePermis < 2;
bConditionAssurance = eDureeAssurance >= 5;
ePointsMalus = eNbreAccidents;

if(bJunior){
    ePointsMalus++;
}

if(bJeuneConducteur)
    ePointsMalus++;

if(ePointsMalus < 3 && bConditionAssurance){
    ePointsMalus--;
}

switch(ePointsMalus){
    case -1:
        sTarif = "Bleu";
        break;
    case 0:
        sTarif = "Vert";
        break;
    case 1:
        sTarif = "Orange";
        break;
    case 2:
        sTarif = "rouge";
        break;
    default:
        sTarif = "Refusé";
        break;
}

console.log("Votre tarif est le :" + sTarif);


/*
Écrivez un algorithme qui a près avoir demandé un numéro de jour, de mois et d'année à l'utilisateur, renvoie s'il s'agit ou non d'une date valide.

Il n'est sans doute pas inutile de rappeler rapidement que :

    le mois de février compte 28 jours, sauf si l'année est bissextile, auquel cas il en compte 29.

    L'année est bissextile si elle est divisible par quatre. Toutefois, les années divisibles par 100 ne sont pas bissextiles, mais les années divisibles par 400 le sont.

Pour exprimer correctement en pseudo-code l'idée qu'un nombre A est divisible par un nombre B. Il suffit d'indiquer que le reste de la division entière de A par B est égal à zéro. Cette opération s'appelle le modulo. Nous pouvons donc dire que A est divisible par B si : Modulo(A,B) = 0
*/

let eJour, eMois, eAnnee;
let bBissextile;
let b31, b30, b29, b28;

do {
    eJour = SaisieNumerique("Entrez votre âge: ");
} while(eJour < 1 || eJour > 31 || isNaN(eJour));
do {
    eMois = SaisieNumerique("Entrez votre âge: ");
} while(eMois < 1 || eMois > 12 || isNaN(eMois));
do {
    eAnnee = SaisieNumerique("Entrez votre âge: ");
} while(isNaN(eAnnee));

bBissextile = ((eAnnee % 4 == 0) && !(eAnnee % 100 == 0)) || (eAnnee % 400 == 0);
b31 = eMois == 1 || eMois == 3 || eMois == 5 || eMois == 7 || eMois == 8 || eMois == 10 || eMois == 12;
b30 = eMois == 4 || eMois == 6 || eMois == 9 || eMois == 11;
b29 = eMois == 2 && bBissextile;
b28 = eMois == 2 && !bBissextile;

if (b31 || b30 || b29 || b28){
    console.log("La date est valide");
}
else {
    console.log("La date n'est pas valide");
}













