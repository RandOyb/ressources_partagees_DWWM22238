# CSS 8 : Utiliser un framework CSS : Bootstrap

## Objectifs

* Maîtriser un framework CSS implémentant les contraintes du web responsive
* Utiliser un système de grille

## Cheminement

Le framework CSS [Bootstrap](https://getbootstrap.com "Bootstrap") vous permet de mettre en oeuvre facilement des sites dits "responsive", c'est-à-dire avec une mise en page qui s'adapte automatiquement en fonction des écrans (PC, smartphones, tablettes).

## Qu'est-ce que Bootstrap ?
Ce document a été rédigé pour la version 4.1 de Bootstrap (mai 2018). En fonction de l'évolution des versions des points peuvent avoir changé. 

Afin d'aider les « front designers » (appelés il y a peu encore des intégrateurs) dans la conception « front-end » (le web design), des frameworks (« librairies ») CSS ont été créés, le plus populaire en termes d'utilisation étant Bootstrap.

Bootstrap a été développé en 2010 par deux ingénieurs de Twitter qui souhaitaient répondre à la problématique d'une librairie servant de base commune à tous les projets de leur société. Bootstrap est actuellement (fin 2018) disponible dans sa version 4.1  

Bootstrap permet principalement de structurer une page HTML en la rendant adaptable aux différentes tailles d'écran (_web responsive_) grâce à un découpage en grille, le _grid system_. 

Outre le web responsive, Bootstrap embarque une multitude d'aides pour la conception front-end entre autres : 

* menus (accordéons etc.) 
* gestion des polices, couleurs etc.
* messages (alertes, infobulles)
* gestion des marges et paddings 
* habillage des formulaires 
* habillage des tableaux 
* gestion des images 
* placements de contenus (medias, cards) 
* popup/fenêtres modales (iframes) 
* carrousels (diaporamas) etc.
  
## Intégrer Bootstrap dans une page web

### Dans la partie `<head>` de la page HTML :

1. Ajouter la balise meta _viewport_ : 
     
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">   

2. Puis le code pour intégrer la feuille de style CSS de Bootstrap, toujours dans `<head>` : 

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

> Ici, on importe Bootstrap via une URL pointant sur un CDN (un serveur externe hébergeant des fichiers) mais rien n'empêche de télécharger Bootstrap directement dans l'arborescence de votre site.

Vous pourrez ensuite ajouter vos propres fichiers CSS qui devront être chargés **APRES** celui de Bootstrap.

### A la fin de la page

3. Enfin, intégrez les fichiers Javascript nécessaires à Bootstrap; placez ce code **avant** la fermeture de la balise body (`</body>`), l'ordre des fichiers est à respecter (Jquery, Popper puis Bootstrap) : 

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
	    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

	
> [Retrouvez ici](https://getbootstrap.com/docs/4.1/getting-started/introduction) les extraits de code mis à jour pour la dernière version de Bootstrap. 

> [Popper](https://popper.js.org) est optionnel.  

Vous pourrez ensuite ajouter vos propres fichiers JS qui devront être chargés **APRES** ceux de Bootstrap.

4. Barre de navigation (il s'agit d'un exemple), à placer dans `<body>` :
	

    <nav id="navbar" class="navbar navbar-expand-sm bg-dark navbar-dark">
		<!-- Toggler/collapsibe Button -->
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
		<span class="navbar-toggler-icon"></span>
		</button>
		     
		<div class="collapse navbar-collapse" id="collapsibleNavbar">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="index.php">Accueil</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="tableau.php">Tableau</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="formulaire.php">Formulaire wazaa</a>
				</li>
			</ul>
		</div> 
	</nav>

Fonctionnement des _navbar_ : 

* ligne 1 : on ouvre la balise `<nav>` qui contient plusieurs classes obligatoires (mais variables), notamment  `navbar-expand-sm` qui indique à partir de quelle dimension (ici `sm`, donc à plus de 576px) la barre de navigation sera visible entièrement au lieu d'afficher le bouton _hamburger_. 
* ligne 3-5 : on trouve ici une balise bouton : il s'agit du code du bouton _hamburger_. L'attribut `data-target` est obligatoire; sa valeur doit être la même que celle de l'attribut `id` du `<div>` suivant (ici `collapsibleNavbar`) mais préfixé du signe `#`.    
* ligne 7-19 : un `div` qui contient une liste de liens classiques, c'est bien notre menu tel que visible sur des écrans larges. 

Les barres de navigation peuvent supporter des :

* un nom de site/marque, éventuellement une image (logo) : `brand`
* un formulaire (zone de saisie pour un champ de recherche) 
* des sous-menus, appelés `dropdowns`
 
[Barre de navigation](https://getbootstrap.com/docs/4.1/components/navbar)

## Le système de grille

Avec Bootstrap, il n'est plus nécessaire d'écrire des requêtes CSS media queries : Bootstrap l'a déjà fait pour vous ! Il ne "suffit plus" qu'à utiliser des classes CSS correspondant aux points de rupture selon le tableau suivant : 
	
![classes Bootstrap](images/breakpoints_tableau.png)

> Ce tableau est valable uniquement pour Bootstrap 4 qui a modifié les breakpoints et les classes par rapport à Bootstrap 3.

Le principe de grille consiste à découper votre page en cellules, comme dans un tableau, donc à créer des lignes et des colonnes. 

Bootstrap découpe la largeur d'écran en **12 blocs de largeurs égales** (égales mais variables selon la largeur du dispositif sur lequel on affiche). Les classes `col-` vont spécifier combien de blocs on veut utiliser. 

Par exemple, pour faire 2 colonnes, la première avec une largeur de 8 blocs et la seconde avec une largeur de 4 blocs, on écrira : 

	<div class="container"> 
	    <div class="row">
	        <div class="col-8">Colonne avec une largeur de 8 blocs</div>
	        <div class="col-4">Colonne avec une largeur de 4 blocs</div>
	    </div>
	</div>

### Conteneurs 

Pour créer une grille, il faut d'abord l'ouvrir avec une balise `<div>` avec la classe CSS `container`, laquelle a une largeur par défaut de 980px sur PC (donc sur un écran plus grand que 980px on obtient un effet de centrage).

	<div class="container"> 
	    <div class="row">
	        <div class="col-8">Colonne avec une largeur de 8 blocs</div>
	        <div class="col-4">Colonne avec une largeur de 4 blocs</div>
	    </div>
	</div>

> Il existe une seconde classe de conteneur, `container-fluid`, permettant d'utiliser toute la largeur de l'écran (100%).

Dans une page HTML, il faut au moins un conteneur (dans ce cas il sera placé immédiatement sous `<body>` et se terminera à la fin de la page, avant la fermeture de `</body>`. 

> Il est possible d'utiliser plusieurs conteneurs dans une page, y compris mixer les classes `container` et `container-fluid`. 

Dans le conteneur, on placera tout le reste de la grille : lignes (rangées) et colonnes.

### Les lignes (= rangées)  

On crée ensuite une rangée (ligne) en appliquant la classe `.row` (= rangée) à une seconde balise `<div>` :

    <div class="container"> 
	    <div class="row">
	        [ ... ]
	    </div>
	</div>

### Les colonnes 

On découpe ensuite une ligne en colonnes en appliquant la classe `col` à une ou plusieurs balises `<div>` : 

    <div class="container"> 
	    <div class="row">
       	   <div class="col-12">Une (seule) colonne oocupant toute la largeur</div> 
	    </div>
	</div>

**Une ligne est découpée en 12 blocs de largeur égale**, on va préciser combien de ces blocs une colonne utilise, en ajoutant ce nombre après le mot `col` (plus un tiret), par exemple : 

	<div class="container"> 
	    <div class="row">
       	   <div class="col-8">Une première colonne qui utilise 8 blocs</div> 
           <div class="col-4">Une seconde colonne qui utilise les 4 blocs restants</div> 
	    </div>
	</div> 

Dans cet exemple, il n'y a que 2 colonnes, une de 8 blocs et une de 4 blocs, le total étant bien de 12.

**Testez l'exemple.**

Il existe de nombreuses possibilités de découpe, le total de blocs utilisés devant toujours être égal à 12, par exemple : 

* 3 colonnes de 4 blocs
* 6 colonnes de 2 blocs
* 2 colonnes de 6 blocs (largeur égale/divison de la zone en 2)
* 1 colone de 7 blocs et une seconde de 5 blocs
etc.

A noter : 

* Chaque colonne peut être redécoupée en créant une ligne elle-même redécoupée en colonnes
* Les colonnes peuvent dimensionnées automatiquement, en indiquant uniquement [`col`](https://getbootstrap.com/docs/4.0/layout/grid/#auto-layout-columns) comme classe ou en ajoutant le suffixe [`auto`](https://getbootstrap.com/docs/4.0/layout/grid/#variable-width-content) (dans ce cas la colonne est ajustée à la largeur de son contenu)  
* Les colonnes peuvent être "sautées" via la classe [`offset`](https://getbootstrap.com/docs/4.0/layout/grid/#offsetting-columns) 

Ces 2 points permettent d'effectuer des mises en page assez complexes. 

[documentation sur la grille](https://getbootstrap.com/docs/4.0/layout/grid)

## Affichage responsive

Toute la "magie" de Bootstrap est ici ! Nous allons mettre en oeuvre les points de rupture (breakpoints). 

Reprenons l'exemple précédent (colonnes) :

	<div class="container"> 
	    <div class="row">
       	   <div class="col-8">Une première colonne qui utilise 8 blocs</div> 
           <div class="col-4">Une seconde colonne qui utilise les 4 blocs restants</div> 
	    </div>
	</div>  

**Testez l'exemple.**

Ce code s'affiche de la même façon sur tout les dispositifs. Mais on pourrait souhaiter obtenir un affichage différent selon la largeur d'écran.

Par exemple : 

* _Règle 1_ : Une page présentant deux colonnes : une partie centrale d'une largeur de 8 blocs et une seconde colonne de largeur 4 sur les plus grands écrans. 
* _Règle 2_ : pour les écrans supérieurs à 992px, la colonne de droite doit être un peu plus large; on a donc une largeur de 8 pour la partie centrale et une largeur de 4 pour l'autre colonne.  
* _Règle 3_ : sur tablettes en mode portrait, la colonne principale aura une largeur de 7 blocs et la seconde en occupera les 5 restant. 
* _Règle 4_ : nos 2 colonnes auront une largeur égale pour les dispositifs à partir de 576px.
* _Règle 5_ : sur les mobiles, l'affichage se fait sur une seule colonne.
  
Pour cela, on va ajouter un préfixe de point de rupture entre `col` et le nombre de blocs, par exemple `col-md-7` va indiquer que pour la dimension `md`, c'est-à-dire de 768 à 991 pixels, la colonne occupera 7 blocs.       

On va répéter ce principe pour tout les points de rupture : 
  
	<div class="container"> 
	    <div class="row">
       	    <div class="col-12 col-sm-6 col-md-7 col-lg-8 col-xl-9">Colonne 1</div> 
            <div class="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3">Colonne 2</div> 
	    </div>
	</div>  

**Testez l'exemple.**

> Rappel : Bootstrap 4 étant _Mobile first_, on part d'abord de la dimension la plus petite, celle pour mobile (< 576px), pour aller vers la plus grande (xl).

Ici on a toujours 2 colonnes, sauf sur mobile puisqu'on a indiqué que les colonnes y occupaient les 12 blocs disponibles; la seconde colonne se placera alors sous la 1<sup>ère</sup>.  

Dernier point, on a indiqué ici des souhaits pour tous les points de rupture, mais ce n'est pas obligatoire  

## Masquer une zone 

Sur mobile, il peut être utile de ne pas afficher une zone, pour améliorer le temps de chargement ou parce que le contenu n'est pas pertinent (publicité par exemple). 

Bootstrap propose un ensemble de classes pour afficher/masquer des éléments HTML selon les breakpoints : 

**Exemples**

	<div class="d-none d-sm-block">Ce bloc sera masqué pour tout (d-none), et l'affichage sera rétabli à partir de sm, c'est-à-dire pour les écrans plus grands que 576px, c'est-à-dire que la zone ne sera masquée que pour les mobiles et visible pour tout le reste.</div>
    <div class="d-lg-none d-xl-block">Ce bloc sera masqué à partir de la plage de breakpoints lg (de 992 à 1199px), puis rétabli à partir des écrans xl, soit au-dessus de 1200px. En-dessous de la plage lg (jusqu'à 991px), la zone sera donc visible aussi.</div>

Explications :

* le préfixe `d` signifie _display_, c'est-à-dire afficher.
* `none` signifie _aucun_, c'est-à-dire masquer, équivalent de `display: none` en CSS.
* `block` signifie afficher, équivalent de `display: block` en CSS. 
* les préfixes de breakpoints `xs`, `sm` etc. indiquent à quelle(s) plage(s) de breakpoints afficher/masquer
* S'il n'y a pas de préfixe de classes (par exemple `d-none`), la règle est s'applique à tout les breakpoints, sauf mention contraire annulabnt cette règle.  

> Pour bien comprendre, consultez les exemples de [la documentation](https://getbootstrap.com/docs/4.1/utilities/display/#hiding-elements).

**Testez les exemples.**

## Marges (spacing)

Bootstrap 4 gère les marges externes (`margin`) et internes (`paddings`) par des classes représentées par un système de lettres : 

* `m` pour margin
* `p` pour padding

Ensuite, d'autres lettres viennent préciser à quel(s) côté(s) s'appliquent la marge :

* `t` pour _top_ (_margin-top_ ou _padding-top_).
* `b` pour _bottom_ (_margin-bottom_ ou _padding-bottom_).
* `l` pour _left_ (_margin-left_ ou _padding-left_).
* `r` pour _right_ (_margin-right_ or _padding-right_).
* `x` pour l'axe horizontal, c'est-à-dire à la fois à gauche et à droite.
* `y` pour l'axe vertical, c'est-à-dire à la fois en haut et en bas.

Enfin, on indique la taille de la marge, de 1 à 5. 

2 valeurs particulières :

* `0` : pas de marge ou de padding
* `auto` : marges automatiques appliquées par le CSS à l'élément.

**Exemples** 

	<p class="mt-5 bg-info">Un paragraphe avec une marge supérieure de 5.</p>

    <p class="pl-5 bg-info">Un paragraphe avec une marge interne gauche de 5.</p>

    <p class="mx-3 bg-info">Un paragraphe avec une marge externe gauche et droite de 3.</p>

    <p class="py-3 bg-info">Un paragraphe avec une marge externe en haut et en bas de 3.</p>

    <p class="mt-0 bg-info">Un paragraphe SANS marge externe supérieure.</p>

    <p class="mx-auto bg-info">Un paragraphe avec une marge externe automatique à gauche et à droite.</p>

Pour appliquer une marge ou un padding aux 4 côtés, aucune indication n'est à spécifier avant la taille de marge :

**Exemples** 
    
	<p class="m-5 bg-info">Un paragraphe avec une marge de 5 sur les 4 côtés.</p>

    <p class="p-3 bg-danger">Un paragraphe avec un padding de 3 sur les 4 côtés.</p>

Il est bien sûr possible de spécifier à la fois une marge externe et une marge interne : 

	<p class="m-5 p-3 bg-info">Un paragraphe avec une marge externe de 5 sur les 4 côtés et un padding de 3 sur les 4 côtés.</p>

Bootstrap permet aussi d'adapter les marges en fonction des breakpoints; pour cela il faut ajouter le préfixe de breakpoint.

**Exemple** 
     
	<p class="px-sm-2 px-md-3 bg-info">Un paragraphe avec une marge interne à gauche et à droite de 2 pour le breakpoint sm (>= 576 px) puis de 3 à partir du breakpoint md (>= 768 px).</p>

**Testez les différents exemples.**

### Marges internes

**Testez l'exemple.**

* [Documentation](https://getbootstrap.com/docs/4.3/utilities/spacing).
* [Exemples](https://www.jquery-az.com/bootstrap-margin-padding-classes-spacing-explained-5-examples)
 
## Tableaux

Bootstrap fournit un ensemble de classes pour habiller les tableaux HTML. 

Pour commencer, il convient d'ajouter la classe `table` à la balise HTML `<table>` :
 
	<table class="table">
	    [ ... ]
    </table>

Différentes classes peuvent ensuite y être ajoutées :  

* `.table-bordered` : affiche les bordures
* `.table-striped` : ajoute un fond de couleur à une ligne sur deux pour faciliter la lisibilité  
* `.table-hover` : surligne la ligne en cours de survol de la souris.

Les tableaux HTML doivent eux aussi être responsive : pour cela il est nécessaire d'englober tout le tableau dans un `<div>` supplémentaire avec en attribut classe `table-responsive`. 

Bootstrap propose bien d'autres options pour les tableaux : [documentation](https://getbootstrap.com/docs/4.1/content/tables).
  
*Exemple :* 

	<div class="table-responsive">
		<table class="table table-striped table-hover table-bordered">
		<thead>
		<tr>
		    <th>Nom</th>
		    <th>Prénom</th>
		    <th>Adresse</th>
		</tr>	
		</thead>
		<tbody>			
		<tr>
		    <td>LOPER</td>
		    <td>Dave</td>
		    <td>30 rue de Poulainville 80000 Amiens</td>
		</tr>
		<tr>
		    <td>CHARPENTIER</td>
		    <td>Joseph</td>
		    <td>12 place de la grotte 99000 Bethléem</td>
		</tr>
		</tbody>		
		</table>
	</div>

**Testez l'exemple.**

## Formulaires

Un champ de formulaire standard (`input type="text"`) est défini par le code suivant dans Bootstrap :  

	<form>
	  <div class="form-group">
	    <label for="courriel">Adresse email</label>
	    <input type="email" class="form-control" name="courriel" id="courriel" placeholder="Saisir votre adresse mail">	    
	  </div>

**Testez l'exemple.**

* Les champs `input` et le `label` associé sont groupés dans un `<div>` qui prend en attribut la classe `form-group`
* Les champs `input` prennent une classe `form-control`.

Ensuite, il existe différentes variantes, dont des classes : [Documentation](https://getbootstrap.com/docs/4.1/components/forms) 

## Messages (alertes)

Bootstrap propose un système de [messages](https://getbootstrap.com/docs/4.1/components/alerts) (boîtes d'alerte) pour communiquer avec l'utilisateur.

## Boutons

Bootstrap permet d'habiller des boutons avec des classes de couleurs et de taille. 

Exemple 1 : un bouton avec fond bleu et texte blanc :

    <button type="button" class="btn btn-primary">Primary</button> 

Exemple 2 : ajout de la classe `btn-lg` pour obtenir le même bouton qu'à l'exemple 1 mais en plus grand : 

	<button type="button" class="btn btn-primary btn-lg">Primary</button> 

**Ces classes de boutons peuvent être utilisées sur les liens (balises `<a>`).** 

[Documentation](https://getbootstrap.com/docs/4.1/components/buttons)

## Cards

Bootstrap 4 apporte un nouveau composant, les [cards](https://getbootstrap.com/docs/4.0/components/card), qui permettent l'habillage de blocs de contenus, [exemples](https://bootsnipp.com/tags/card).   

Une alternative au _cards_ : [les médias](https://getbootstrap.com/docs/4.1/layout/media-object).  

## Images

Bootstrap fournit des classes pour placer, habiller (bordures, arrondis) ou redimensionner [les images](https://getbootstrap.com/docs/4.1/content/images).   

Pour afin de les rendre responsive, il suffit d'appliquer la classe `img-fluid` sur la balise `<img>` tout en veillant à ne pas spécifier de dimensions fixes : suppression des attributs `width`` et `height`), ce qui donne :

	<img src="image.jpg" class="img-fluid" alt="Image responsive" title="Image responsive">

La classe `img-fluid` applique les règles CSS suivantes aux balises `<img>` :

* `max-width: 100%;` : fixe la largeur de l'image à celle de son parent (pour résumer).
* `height: auto;` : adapte la hauteur de l'image en fonction de sa largeur, afin de ne pas obtenir de distorsion de l'image.

En dehors de cette classe et de Bootstrap, [d'autres solutions](https://developer.mozilla.org/fr/Apprendre/HTML/Comment/Ajouter_des_images_adaptatives_%C3%A0_une_page_web) existent pour gérer la problématique
responsive des images : plusieurs dimensions d’une même image (attributs [`srcset` et `sizes`](https://www.alsacreations.com/article/lire/1621-responsive-images-srcset.html), balise
`<picture>`), propriétés css ([`cover`](https://www.alsacreations.com/tuto/lire/1390-arriere-plans-css3-background.html) etc.).

Enfin, Bootstrap fournit d’autres classes applicables aux images pour gérer les miniatures, les arrondis
et leur placement.

En ce qui concerne les vidéos, voir cette page. 

## Typographie

Bootstrap fournit des classes pour gérer la typographie : polices, taille, alignement, gras, italique, titres (`<h1>`, `<h2>`...), mise en exergue, habillage des listes (`<ul>`, `<li>`) etc.  

### Polices

La police de caractère affichée par défaut varie en fonction du [système d'exploitation](https://getbootstrap.com/docs/4.1/content/reboot/#native-font-stack), par exemple : 

* _Sego UI_ sous Windows
* _Roboto_ sous Androïd 

La police par défaut peut bien entendu être changée, via une feuille de style CSS.

### Taille

Bootstrap définit par défaut la taille de police à **16 pixels**, donc une unité de taille fixe. En effet, Bootstrap ne gère pas le redimensionnement des textes pour qu'ils deviennent « responsive » : il faudra ajouter des media queries spécifiques, nous y reviendrons plus tard.  

### Alignement

Il existe des classes pour l'alignement du texte, équivalents de `text-align` en CSS :

* `text-left` : aligne le texte à gauche de son conteneur (par défaut)
* `text-right` : aligne le texte à droite de son conteneur
* `text-center`	: centre le texte dans son conteneur
* `text-justify` : justifie le texte

Exemple : 

	<div class="row">
	    <div class="col-12">
           <p class="text-left">Texte aligné à gauche (normal)</p>
           <p class="text-right">Texte aligné à droite</p>	       
           <p class="text-center">Texte centré</p>           
           <p class="text-justify">Texte justifié. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget mi lobortis, bibendum nibh eu, semper quam. In eget felis urna. Maecenas luctus lacus quis semper semper. Donec pellentesque ligula tortor, ut pulvinar massa consequat ac.</p>	       
	    </div>
	</div>

> Ces classes peuvent être spécifiées pour un dispositif en particulier grâce aux préfixes de breakpoints : par exemple `text-sm-center` centrera le texte uniquement à la dimension correspondant à `sm`, c'est-à-dire à partir de 576 pixels.     

* [Documentation](https://getbootstrap.com/docs/4.1/content/typography)

## Mise en pratique

Reprenez la maquette _Jarditou_ et utilisez le framework Bootstrap : 

Votre page HTML devra respecter les consignes suivantes :

* Etre responsive bien sûr, pour tout les éléments : menu, images, tableaux, formulaires (mais pas les polices).
* N'utiliser qu'un seul conteneur. 
* La partie centrale aura une largeur de 8 et la colonne de droite une largeur de 4 sur les écrans supérieurs à 992px. En dessous, les colonnes auront une largeur égale.

## Ressources

* [Bootstrap](https://getbootstrap.com "Bootstrap")
* [w3schools](https://www.w3schools.com/bootstrap4 "w3schools")
* **Hackerthemes** : [Bootstrap4 Cheat Sheet](https://hackerthemes.com/bootstrap-cheatsheet "Bootstrap4 Cheat Sheet") et [Bootstrap 4 Buffet](https://hackerthemes.com/bootstrap-buffet/#alerts "Bootstrap 4 Buffet"), permet de sélectionner des éléments Bootstrap plus facilement.

<!-- MAJ : 21/11/2018 -->