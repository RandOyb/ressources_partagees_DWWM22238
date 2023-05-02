# HTML - 01 - Présentation et structure d'un document

## Introduction 

### Qu'est-ce que le World Wide Web ? 

Le World Wide Web (Web) est un réseau de ressources et d'informations. Le Web repose sur trois mécanismes pour rendre disponibles ces données le plus largement possible : 

1.	Un système de nommage uniforme pour leur localisation sur le Web (par exemple les URL) ; 
2.	Des protocoles, pour accéder à des ressources nommées dont on possède l'adresse (par exemple HTTP) ; 
3.	L'hypertexte, pour faciliter la navigation entre ces ressources (par exemple HTML). 

### Qu'est-ce que le HTML ? 

Publier de l'information en vue d'une distribution mondiale nécessite l'usage d'un langage universellement compréhensible, d'une sorte de « langue maternelle » acceptée par tous les ordinateurs. Le langage de publication utilisé sur le World Wide Web est le langage de balisage hypertexte HTML (Hyper Text Markup Language). 
HTML donne aux auteurs les moyens de : 

* Publier des documents en ligne possédant des titres, du texte, des tables, des listes, des photos, etc. 
* Ramener des informations en ligne via des liens hypertextes avec un clic ; 
* Concevoir des formulaires pour conduire des transactions avec des services distants, dans le but de rechercher des informations, de faire des réservations, de prendre des commandes, etc. 
* Inclure des feuilles de calculs, des séquences vidéos ou sonores et d'autres applica-tions, directement dans les documents. 

C'est un langage de balise, qui a comme objectif de représenter de l’information. Ces balises sont interprétables par les différents navigateurs (Internet Explorer/Edge, Firefox, Safari, Opera etc. et permettent l’affichage de l’information désirée.

Historique du HTML :

* 1993 : HTML (1.0)
* 1995 : HTML 2.0
* 1997 : HTML 3.2 et 4.0
* 2000 : XHTML
* 2009 : HTML 5

### HTML 5 

Le HTML 5, publié en 2009, est la version actuelle du HTML. 

Les règles de base du HTML 5 : 

1.	Fermer toutes les balises  
2.	Les balises et les attributs sont toujours en minuscules
3.	Les valeurs des attributs sont entre guillemets 
4.	Tous les attributs ont des valeurs explicites 
5.	Les balises indiquent la structure du document et non pas sa présentation. Les balises et les attributs de présentation sont remplacés par l'application de styles CSS.

Comme à chaque évolution du langage HTML, le HTML 5 apporte des nouveautés et supprime certaines balises. [Cette page](https://www.w3schools.com/tags) liste l'ensemble des balises HTML 5 en précisant les nouvelles et celles devenues obsolètes. 

## Architecture HTML 

### HTML : Un langage de balises sémantique 

Le langage HTML est formé de balises (_tag_ en anglais) assemblées afin de déterminer le plan (découpage) d'une page, le _document_. 

Une balise possède un nom qui permet de décrire son contenu : on appelle cela un langage sémantique. Par exemple si on utilise la balise `<article>`, cela indique (suppose) que le texte qu'elle contient est un article.

Le nom des balises est inséré entres les signes `<` et `>`, lesquels sont appelés chevrons :

Exemples : `<p>`, `<div>`, `<article>`, `<meta>`...

Certaines balises doivent être ouvertes puis fermées avec le même tag (précédée d'un / pour la fermeture). 

_Exemples : _.  
    
    <p>texte</p>
    
    <header>autres balises</header>. 

Dans d'autres cas, les balises sont dites _autofermantes_, c'est-à-dire fermées par un simple chevron fermant sans répeter le nom de la balise.

_Exemples : _. 

    <br>
    
    <hr>
    
    <img>  

> En HTML, la casse (lettres minuscules ou majuscules), n'a aucune importance. La bonne pratique est toutefois d'écrire les balises en minuscule.  

Une balise possède des attributs, ce sont des paramètres supplémentaires à appliquer spécifiquement à la balise. Un attribut a un nom, auquel on affecte une valeur (une chaîne entre guillemets) via l’opérateur `=` :

* `<p id="intro">` : balise paragraphe avec un seul attribut, l'attribut `id` (identifiant unique)
* `<p id="intro" class="rouge">` : balise paragraphe plusieurs attributs, `id` et `class`.

Selon la balise, il y a des attributs obligatoires ou facultatifs. Certains attributs peuvent recevoir une valeur librement définie par le développeur (comme les attributs `id` et `class` ci-dessus), d'autres doivent avoir une valeur proposée par les spécifications du HTML (W3C). 

**Le nombre d'attributs peut donc être variable**.

Certaines balises peuvent être **imbriquées**, cela forme un **ensemble hiérarchique** appelé _balisage_, on a donc des balises _enfant_ d'autres balises. La hiérarchie peut s’établir sur plusieurs niveaux. 

Les balises imbriquées peuvent être multiples et différentes. 

Exemple 1 : une liste d'options : les balises `<li>` (= list item) héritent de la balise `<ul>` (= unordered list) :  

	<ul>
		<li>1er élément</li>
		<li>2ème élément</li>
		<li>3ème élément</li>
	</ul>

Exemple 2 : des paragraphes et un `<div>` inclus dans un `<div>` :

````
<div>
	<p>Texte du 1er paragraphe</p>
	<p>Texte du 2ème paragraphe</p>
	<div>Un autre div dans le div précédent qui contient <a href="page.html">un lien</a></div>
</div>
````

## Structure d'un document HTML 

Un document HTML 5 se compose de plusieurs parties dont **l'ordre est à respecter**. 

Une ligne de déclaration de type contenant les informations de la version HTML de la page : en HTML 5, cette déclaration doit être `<!DOCTYPE html>`

> Attention : la casse de cette balise est à respecter.   

* Un élément `<html>` qui comprend : 
* Une section en-tête déclarative (enclose par la balise `<head>`) 
* Un corps, qui emporte le contenu effectif du document. Le corps est généralement enclos par l'élément `<body>` 

Chaque balise `<head>` ou `<body>` peut elle-même contenir des balises incluses. 

Voici un exemple de document HTML 5 simple : 

	<!DOCTYPE html>
	<html lang="fr">
	<head>
	  <meta charset="utf-8">
	  <title>Ma première page en HTML 5</title>
	</head>
	<body>
	  <h1>Le HTML 5</h1>
	  <p>Le langage HTML, c'est fantastique.</p> 
	  </body>
	</html>

> Attention : en HTML 5, toutes les balises ainsi que leurs attributs doivent être en minuscule (sauf `DOCTYPE`).    

Dans la balise `<html>`, ne pas omettre l'attribut lang qui permet d'indiquer la langue dans laquelle la page web est rédigée aux robots de référencement ou aux logiciels de synthèse vocale.   

## Entête du document : `<head></head>` 

Le bloc `<head></head>` contient des informations sur le document courant, tels que son titre, des mots-clés que les moteurs de recherche peuvent exploiter et qui permettront d'indexer (référencer) votre site, et d'autres données qui ne sont pas considérées comme faisant partie du contenu du document : ce sont des métadonnées qui, pour leur grande majorité, seront contenues dans des balises `<meta>`.  

Les balises de la partie `<head>` ne sont pas affichées par le navigateur à l'internaute, à l'exception de la balise `<title>` qui apparaît dans les onglets du navigateur et dans les moteurs de recherche et de la meta « description » reprise elle aussi par les moteurs de recherche .
 
Cependant, le contenu de la partie `<head>` est visible dans le code source (`Ctrl`+`U` dans un navigateur). Il ne doit donc pas contenir d’informations sensibles pouvant compromettre la sécurité de votre site.   

## Les balises `<meta>` 

### Principe 

Les balises `<meta>` permettent de fournir ce que l'on appelle des metadonnées d'une page web, c'est-à-dire des indications supplémentaires différentes du contenu de la page.

### Evolution des balises `<meta>`

Certaines balises `<meta>` sont obligatoires, d'autres sont facultatives et certaines (par exemple `keywords`, `refresh`) ont désormais une utilité controversée ou obsolète.
 
### Obligatoire : la balise meta `charset`

La balise `<meta charset>` permet de spécifier aux navigateurs l'encodage de la page web. La valeur standard est l'**utf-8** :

    <meta charset="utf-8">

Spécifier en UTF-8 évite de se retrouver avec des problèmes de caractères spéciaux ou d'accents mal affichés du genre `aprÃ¨s avoir Ã©tÃ© lancÃ©`.   

Cette balise doit donc se trouver avant tout texte affiché à l'internaute, soit en pratique avant la balise `<title>` (et donc immédiatement après la balise d’ouverture `<head>`).

### la balise meta `viewport`

La balise `<meta viewport>` permet de contrôler la mise en page sur les navigateurs mobiles :

    <meta name="viewport" content="width=device-width, initial-scale=1.0">


## La balise `<title>` 

Dans l'ordre, après les balises `doctype`, `html`, `head` et `meta charset`, on trouve la balise `<title>` dans laquelle vous devez indiquer le titre de votre document. 

Comme nous l'avons vu plus haut, la balise `<title>` est absolument essentielle pour le référencement, c'est celle qui est prise en compte en priorité par Google. 

Exemple
 
	<title>Ma première page HTML</title>

## La balise `<link>` 

L'élément HTML `<link>` définit la relation entre le document courant et une ressource externe (CSS, icône). Cet élément peut être utilisé pour définir un lien vers une feuille de style ou un cadre de navigation (accéder à la même page dans une langue différente par exemple).

Cette balise est principalement utilisée pour lier les feuilles de styles CSS (que nous aborderons à la séquence suivante) à la page web :

	`<link href="style.css" rel="stylesheet">`

> Contrairement aux balises vues jusqu'ici, il est possible d'avoir plusieurs `<link>` car il en faut une par ressource appelée. 
  
## Le corps du document: `<body></body>` 

Le contenu réel de la page (textes, images, tableaux etc.) affiché à l'internaute se trouve dans le bloc `<body></body>` : c'est le corps du document.

_Exemple :_ 

	<body>
	    <h1>Mon contenu</h1>
	   <p>Le HTML 5 c’est fantastique.</p>
	</body>

La partie `<body>` accueille à la fois : 

* les éléments (balises) qui structurent la page (colonnes, blocs, paragraphes, menus, entête, pied de page etc.) 
* les éléments relevant davantage du formatage (mise en exergue, gras, italique, citations, médias etc.).

> Ces différentes balises seront vues au prochain chapitre.  

## Commentaires 

Vous pouvez commenter votre code source, l'internaute ne verra pas ce commentaire.  

Exemple : 

	<!-- Ceci est un commentaire --> 

> Les commentaires seront visibles dans le code source HTML de votre page (afficher la page dans un navigateur puis touches `Ctrl` + `U`). Par conséquent, éviter trop d’indications pouvant compromettre la sécurité. 

Les commentaires seront affichés dans le code source de la page. Par conséquent, évitez trop d'indications pouvant compromettre la sécurité. 

Pour voir le code source d'une page, afficher la page dans un navigateur web puis touches `Ctrl` + `U` ou, si vous connaissez déjà, inspectez-le via les outils de développement des navigateurs (vus plus loin dans la formation).  

## Travail à réaliser 
	
* A l'aide d'un éditeur de texte, saisissez le code HTML indiqué dans la section _Architecture HTML > Structure d'un document HTML_. 
* Enregistrez le fichier en lui donnant l'extension `.html`, puis visualisez-le à l'aide d'un navigateur web. 
* Dans votre page web, testez les différentes balises vues dans cette séquence.

## Debut d'une page html en resumé 

```html
<!DOCTYPE html>
<html lang="fr">

<!-- Debut de la balise head -->

<head>

  <!-- Encodage UTF-8 conçu pour coder l'ensemble des caractères -->
  <meta charset="UTF-8">

  <!-- Permet d’indiquer comment le navigateur doit afficher la page sur différents appareils -->
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta http-equiv="X-UA-Compatible" content="IE=7">

  <!-- La balise meta-description est très importante en référencement naturel, elle doit être utile, attrayante et persuasive -->
  <meta name="description" content="Description de mon site" />

  <!-- L'Élément title utile et obligatoire -->
  <title>Titre de mon onglet</title>
  <!-- Icone de l'onglet Attention l'extension de l'image doit être en .ico-->
  <link rel="icon" href="Logo_Afpa.ico" />

  <!-- On relie ensuite nos feuilles de styles CSS -->
  <link rel="stylesheet" href="assets/css/style.css">

  <!-- Ajout de la police 'Concert One' depuis https://fonts.google.com/ -->
  <link href="https://fonts.googleapis.com/css?family=Concert+One&display=swap" rel="stylesheet">

</head>
<!-- Fin de la balise head -->

<!-- --------------------------------------------------------------------------------------------------------- -->
<!-- N'oubliez pas de commenter votre code ! Utile pour les petits et les gros projets, en solo ou en équipe ! -->
<!-- --------------------------------------------------------------------------------------------------------- -->

<!-- Debut de la balise body -->

<body>
<!-- --------------------------------------------------------------------------------------------------------- -->
<!-- Tout le contenu de votre page web se situera entre votre balise body -->
<!-- --------------------------------------------------------------------------------------------------------- -->

<!-- Fin de la balise body -->
</body>
<!-- Fin du document HTML -->
<html>
```

<br>
<br>
<br>