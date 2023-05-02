# HTML - 02 - Balises

## Introduction

Le corps d'un document HTML (`<body>`) comprend :

* des balises structurantes, qui définissent les sections de la page : entête, lignes, colonnes. Ces balises sont de type **bloc** (_block type_).  
* des balises de formatage, qui permettent de mettre en forme le contenu (textes etc.). Celles-ci sont de type en ligne (_inline type_).

## Types de balises

### Les balises de type blocs

La balise de type bloc réside dans le fait qu'ils sont séparés par un saut de ligne avant et après l'élément, créant ainsi un bloc de contenu. On peut les représenter comme des blocs empilés les uns sur les autres. 

Un élément de type bloc occupe par défaut toute la largeur disponible. Cette largeur est de 100% du dispositif d'affichage si la balise n'est pas incluse dans une autre; lorsque la balise est comprise dans une parente sa largeur est de 100% du parent. 

> Si le bloc parent a une largeur de 50%, la largeur de la balise enfant fera 100% de ces 50%, c'est-à-dire 50% aussi. 

Liste des éléments HTML de type bloc :

* `<address>` information de contact
* `<article>` contenu d'un article
* `<aside>` Contenu contextuel (associé à un contenu principal)
* `<audio>` Lecteur audio
* `<blockquote>` Citation longue
* `<canvas>` Canevas de dessin
* `<dd>` Description d'une définition
* `<div>` Division d'un document
* `<dl>` Liste de définitions
* `<dt>` Définition/description d'un terme
* `<fieldset>` Ensemble de champs
* `<figcaption>` Légende d'une image
* `<figure>` Permet de grouper des médias avec une légende (voir `<figcaption>`).
* `<footer>` Bas de page ou de section
* `<form>` formulaire
* `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` éléments de titre de niveau 1 à 6.
* `<header>` entête de page ou de section
* `<hgroup>` Information d'en-tête de groupe
* `<hr>` Ligne de division horizontale
* `<main>` Contient le contenu central unique au document.
* `<nav>` Contient des liens de navigation.
* `<noscript>` Contenu à utiliser si les scripts ne fonctionnent pas ou s'ils sont désactivés.
* `<ol>` Liste ordonnée.
* `<output>` Résultat d'un formulaire.
* `<p>` Paragraphe.
* `<pre>` Texte pré-formaté.
* `<section>` Section d'une page web.
* `<table>` Tableau.
* `<tfoot>` Pied de tableau.
* `<ul>` Liste non-ordonnée.
* `<video>` Lecteur vidéo.

### Les balises de type en ligne 

Par opposition aux éléments blocs, les éléments de type en-ligne sont ceux qui occupent l'espace délimité par leur balise. 

En clair, ils n'occupent en largeur que ce dont ils ont besoin.

Liste des principaux éléments en-ligne :

* `<a>` lien
* `<abbr>` Abréviation
* `<acronym>` Acronyme
* `<b>` gras (bold)
* `<bdo>` surcharge bidirectionnelle
* `<br>` saut de ligne 
* `<button>` boutton
* `<cite>` Titre d’une oeuvre
* `<code>` Code (langage informatique)
* `<dfn>` Définition
* `<em>` Emphase
* `<i>` Marque un élément différenciant dans le texte (affiché en italique)
* `<img>` image
* `<input>` champ de formulaire
* `<kbd>` touche clavier (keyboard) 
* `<label>` Etiquette de champ de formulaire
* `<map>` découpage d’une image en zones réactives (cliquables)
* `<object>`   
* `<q>` citation courte (quote)
* `<samp>` exemple (sample)
* `<script>` script
* `<select>` liste déroulante (formulaires)
* `<small>` petits caractères
* `<span>` conteneur générique de texte en ligne
* `<strong>` texte important (affiché en gras mais ne pas confondre) 
* `<sub>` texte en indice
* `<sup>` texte en exposant
* `<textarea>` zone de texte (formulaires)

## Le sectionnement 

Nous l'avons vu, les éléments de type blocs permettent de structurer une page web à l'intérieur du corps de la page `<body>`. 

HTML 5 a ajouté de nouvelles balises :

* `<header>` indique l'entête (on y mettra par exemple un logo),
* `<nav>` indique un bloc de navigation, c'est-à-dire un menu. 
* `<section>` indique une section de contenu
* `<article>` indique un article de contenu; cette balise doit être englobée dans une section (qui peut contenir plusieurs articles).
* `<aside>` se positionne sur le côté d’un article (ou d'une section) pour indiquer un complément de texte (une note, une référence etc.) se rapportant directement à l'article. Cette balise ne doit pas servir à créer des colonnes latérales au contenu principal dont le contenu ne serait pas en rapport).

Exemple de sectionnement à l'aide des nouvelles balises :

![Exemple sectionnement d'une page HTML 5](images/HTML_02_sectionnement.png)

## La balise `<div>` 

La balise `<div>`, pour division (_divide_ en anglais), est un conteneur générique qui permet d'organiser le contenu sans représenter quoi que ce soit d’un point de vue sémantique. Il doit être utilisé lorsqu'il n’existe aucune balise adéquate sur le plan sémantique.

Un `<div>` peut contenir d'autres balises,  ou autres (`<p>`...tres balises enfant, notamment des paragraphes. 

_Exemples :_

    <!-- Un premier div --> 
	<div>
	    Hello world !
    </div>
	
    <!-- Un 2ème div, qui en contient un autre --> 
    <div>
        <div>Hello world !</div>
    </div>

    <!-- Un 3ème div, qui contient un autre div et un paragraphe --> 
    <div>
        <div>Hello world !</div>
        <p>Hello world !</p>
        </div>
    </div>

    <!-- Un troisième div, qui contient un autre div et un paragraphe --> 
    <div>
        <div>
             <p>Hello world !</p>
        </div>
    </div>

## La balise de paragraphe `<p>` 

Dans un souci de lisibilité et de structuration, les documents doivent être découpés en paragraphes. En HTML, il existe deux balises qui permettent d’obtenir soit un saut de ligne, soit le début d'un nouveau paragraphe. 

La balise `<p></p>` permet de commencer un nouveau paragraphe (double espacement). 

La balise `<br>` effectue un retour à la ligne (simple espacement) et ne comporte jamais de texte. **Vous ne devez pas utiliser cette balise pour séparer les blocs, mais pour faire des suats de ligne au sein d'un texte.** 
    
## AUTRES BALISES

### Les titres hiérarchiques

Les balises de titres hiérarchiques permettent de mettre en évidence des parties de texte. Plusieurs styles de titre sont prédéfinis, identifiés par les balises `<h1>` (le plus gros) à `<h6>` (le plus petit), ce qui donne 6 niveaux de titres différents. Le texte du titre sera encadré par les balises d’ouverture et de fermeture choisies. 

Exemple et code source avec chaque balise titre : 

<h1>Titre de niveau 1</h1> Code HTML : `<h1>Titre de niveau 1</h1>`
<h2>Titre de niveau 2</h2> Code HTML : `<h2>Titre de niveau 2</h2>` 
<h3>Titre de niveau 3</h3> Code HTML : `<h3>Titre de niveau 3</h3>` 
<h4>Titre de niveau 4</h4> Code HTML : `<h4>Titre de niveau 4</h4>` 
<h5>Titre de niveau 5</h5> Code HTML : `<h5>Titre de niveau 5</h5>` 
<h6>Titre de niveau 6</h6> Code HTML : `<h6>Titre de niveau 6</h6>` 

### La balise de saut de ligne `<br>` 

On peut insérer un retour à la ligne via la balise `<br>`. Cette balise doit concerner un retour à la ligne dans une de texte (`div`, paragraphe, article, citation) mais en aucun cas être utilisé pour structurer la page. 

### La balise de ligne horizontale `<hr>` 

On peut insérer la balise de ligne horizontale `<hr>` pour séparer certaines parties d’un document HTML. 
    
> En HTML 4, les balises `<br>` et `<hr>` comportaient un slash de fermeture (`<br/>`, `<hr/>`) qui n'ont plus lieu d'être en HTML 5. 

## Conclusion

La question à se poser est quelle balise dois-je utiliser pour, par exemple, créer une colonne, un paragraphe, une entête de site ? Réponse via ce schéma :

![Diagramme d'utilisation des balises HTML 5](images/HTML_02_cyberscooty_diagramme_html5.svg)

## Exercice d'application 

En reprenant comme base l'exercice de la phase 1, découper la partie `<body>` selon l'image du paragraphe sectionnement ci-dessus.

Certaines balises que nous venons de voir imposent une mise en forme des éléments. Comme vu plus haut, les balises doivent indiquer la structure du document et non pas sa présentation. Les balises et les attributs de présentation sont remplacés par l'application de feuilles de styles (que nous verrons dans la prochaine séance).

<br>
<br>
<br>


