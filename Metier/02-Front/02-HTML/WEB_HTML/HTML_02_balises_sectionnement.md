# HTML - 02 - Balises

## Introduction
 
Une page web est composée comme nous l'avons vu au chapitre précédent d'une partie entête (métadonnées) et du corps du document pour le contenu, comprise dans la balise `<body>`. 

Cette dernière partie comprend des balises structurantes, c'est-à-dire qui définissent la structure de la page web (entête, lignes, colonnes etc.) et des balises de formatage qui permettent de mettre en forme le contenu (textes etc.). 

Les balises structurantes composent le sectionnement; elles sont, en général, de type **bloc** (_block type_, a contrario celles de formatage sont souvent de type en ligne (_inline type_).

## Types de balises

### Les balises de type blocs

La balise de type bloc réside dans le fait qu'ils sont séparés par un saut de ligne avant et après l'élément, créant ainsi un bloc de contenu. On peut, en quelque sorte, les représenter comme des blocs empilés les uns sur les autres. 

Un élément de type bloc occupe par défaut (c'est-à-dire sans instructions CSS de largeur) toute la largeur disponible. Cette largeur est de 100% du dispositif d'affichage si la balise n'est pas incluse dans une autre; lorsque la balise est comprise dans une parente sa largeur de 100% du parent 

> Si le bloc parent a une largeur de 50%, la largeur de la balise enfant fera 100% de ces 50%, c'est-à-dire 50% aussi. 

Liste des éléments HTML de **type bloc** :

* `<address>` information de contact
* `<article>` contenu d'un article
* `<aside>` Contenu tangentiel
* `<audio>` Lecteur audio
* `<blockquote>` Citation longue
* `<canvas>` Canevas de dessin
* `<div>` Division d'un document
* `<fieldset>` Ensemble de champs
* `<footer>` Bas de page ou de section
* `<form>` formulaire
* `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` éléments de titre de niveau 1 à 6.
* `<header>` entête de page ou de section
* `<hr>` Ligne de division horizontale
* `<nav>` Contient des liens de navigation.
* `<ol>` Liste ordonnée.
* `<p>` Paragraphe.
* `<pre>` Texte pré-formaté.
* `<section>` Section d'une page web.
* `<table>` Tableau.
* `<ul>` Liste non-ordonnée.
* `<video>` Lecteur vidéo.

### Les balises de type en ligne 

Par opposition aux éléments blocs, les éléments de type en-ligne (inline en anglais) sont ceux qui occupent l'espace délimité par leur balise plutôt que d'interrompre le flux du contenu. En clair ils n’occupent en largeur que ce dont ils ont besoin et non pas 100% comme les éléments blocs.

Liste des éléments **en-ligne** :

* `<a>` lien
* `<abbr>` Abréviation
* `<acronym>` Acronyme
* `<b>` gras (bold)
* `<br>` saut de ligne 
* `<button>` boutton
* `<cite>` Titre d’une oeuvre
* `<code>` Code (langage informatique)
* `<em>` Emphase
* `<i>` italique
* `<img>` image
* `<input>` champ de formulaire
* `<label>` Etiquette de champ de formulaire
* `<select>` liste déroulante (formulaires)
* `<small>` petits caractères
* `<span>` conteneur générique de texte en ligne
* `<strong>` texte important (affiché en gras mais ne pas confondre) 
* `<sub>` texte en indice
* `<sup>` texte en exposant
* `<textarea>` zone de texte (formulaires)

Ces listes ne sont pas exhaustives, vous pouvez vous rendre sur le site [W3School](https://www.w3schools.com/tags/default.asp) pour avoir la liste complète de toutes les balises.

## Le sectionnement 

Nous l'avons vu, les éléments de type blocs permettent de structurer une page web à l'intérieur du corps de la page `<body>`. 

HTML 5 a ajouté de nouvelles balises :

* `<header>` indique l’entête (on y mettra par exemple un logo),
* `<nav>` indique un bloc de navigation, c’est-à-dire un menu
* `<section>` indique une section de contenu
* `<article>` indique un article de contenu; cette balise doit être englobée dans une section (qui peut contenir plusieurs articles).
* `<aside>` se positionne sur le côté d’un article (ou d'une section) pour indiquer un complément de texte (une note, une référence etc.) se rapportant directement à l'article. Cette balise ne doit pas servir à créer des colonnes latérales au contenu principal dont le contenu ne serait pas en rapport).


**Exemple de sectionnement à l'aide des nouvelles balises :**

![Exemple sectionnement d'une page HTML 5](images/HTML_02_sectionnement.png)

## La balise `<div>` 

La balise `<div>`, pour division (« divide »  en anglais), est un conteneur générique qui permet d'organiser le contenu sans représenter quoi que ce soit d’un point de vue sémantique. Il doit être utilisé lorsqu'il n’existe aucune balise adéquate sur le plan sémantique. 
Cette balise a connu un usage parfois intensif (c’est-à-dire pages structurées uniquement avec) qui n’a plus lieu d’être depuis l'arrivée de HTML 5 et ses nouvelles balises de sectionnement (que l’on va aborder plus loin dans ce cours).

Un div peut contenir un autre `<div>` (voire plusieurs) ainsi que d’autres balises enfant, notamment des paragraphes. 

Exemples :

    <div>Hello world !</div>
    <div>
       <div>Hello world !</div>
    </div>
    <div>
        <div>
            <p>Hello world !</p>
        </div>
    </div>

## La balise de paragraphe `<p>` 

Dans un souci de lisibilité et de structuration, les documents doivent être découpés en paragraphes. En HTML, il existe deux balises qui permettent d’obtenir soit un saut de ligne, soit le début d’un nouveau paragraphe. 

La balise `<p></p>` permet de commencer un nouveau paragraphe (double espacement). 

La balise `<br>` effectue un retour à la ligne (simple espacement) et ne comporte jamais de texte.

> Note : avant HTML 5, la balise `<br>` comportait un slash de fermeture (`<br />`) désormais inutile.    

* [Article Alsacréations](https://www.alsacreations.com/article/lire/1376-html5-section-article-nav-header-footer-aside.html)

## AUTRES BALISES

### Les titres hiérarchiques

Les balises titre permettent de mettre en évidence des parties de texte. Plusieurs styles de titre sont prédéfinis, identifiés par les balises `<h1>` (le plus gros) à `<h6>` (le plus petit), ce qui donne 6 niveaux de titres différents. Le texte du titre sera encadré par les balises d’ouverture et de fermeture choisies. 

**Astuce SEO**
Vérifier la présence d'au moins un élément H1 dans chaque page :
[Chaque page du site contient un élément de titre de section H1](https://checklists.opquast.com/fr/seo/chaque-page-du-site-contient-un-element-de-titre-de-section-h1)

Exemple et code source avec chaque balise titre : 

    <h1>Titre H1 très important</h1>
    <h2>Titre H2 moins important que H1</h2> 
    <h3>Titre H3 moins important que H2</h3> 
    <h4>Titre H4 moins important que H3</h4> 
    <h5>Titre H5 moins important que H4</h5> 
    <h6>Titre H6 moins important que H5</h6>

Testez ce code, qui doit afficher le résultat suivant :

<img src="images/HTML_02_balises_hn.png" alt="Balises hiérarchiques" style="border:2px solid #000">

### La balise de saut de ligne `<br>` 

On peut insérer un retour à la ligne via la balise `<br>`. Cette balise doit concerner un retour à la ligne dans une de texte (`div`, paragraphe, article, citation) mais en aucun cas être utilisé pour structurer la page. 

### La balise de ligne horizontale `<hr>` 

On peut insérer la balise de ligne horizontale `<hr>` pour séparer certaines parties d’un document HTML. 
    
> En HTML 4, les balises `<br>` et `<hr>` comportaient un slash de fermeture (`<br/>`), (`<hr/>`) qui n'ont plus lieu d'être en HTML 5. 

## Conclusion

La question à se poser est quelle balise dois-je utiliser pour, par exemple, créer une colonne, un paragraphe, une entête de site ? Réponse via ce schéma :

![Diagramme d'utilisation des balises HTML 5](images/HTML_02_cyberscooty_diagramme_html5.svg)

## Travail à réaliser 

Concevez une nouvelle page HTML.

Cette page doit contenir:

- un titre (avec la balise `<h1>`)
- un paragraphe de texte (lorem ipsum) (avec la balise `<p>`) 
- une image (avec la balise `<img>`)



<br>
<br>
<br>