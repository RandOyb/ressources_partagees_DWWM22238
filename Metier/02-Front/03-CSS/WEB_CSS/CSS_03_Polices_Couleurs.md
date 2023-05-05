# **CSS : Polices et couleurs**

# Polices

## Polices par défaut

Par défaut, c’est-à-dire en l’absence d’une feuille de style CSS dans la page web, le texte (police de caractère et taille) sera affiché selon les paramétrages du navigateur.

Les navigateurs ont eux-mêmes un paramétrage par défaut, qui diffère d’un navigateur à l’autre.

Les polices par défaut peuvent être modifiées par l’utilisateur. 

Elles peuvent ensuite bien sûr, selon le concept de cascade, être modifiées par les feuilles de styles programmées par le développeur, ou celles de frameworks CSS (Bootstrap, Foundation etc.).   

## Les propriétés des polices de caractères

|Propriété|Fonction|Exemple|
|:-------------------------|:-------------------------|:-------------------------|
|font-family|Une liste de familles de la police à utiliser|#texte {font-family: Verdana, sans-serif }|
|font-size|Taille de la police, pouvant être indiquée dans plusieurs unités : px, pt, em, rem, %, vw/vh|#texte { font-size: 14pt; }|
|font-style|Style de la police : normal, italique, oblique|#texte { font-style : italic;}      |
|font-variant|Variante de la police : permet d’afficher en capitale ou en petites majuscules | #texte { font-variant: small-caps;} #texte {font-variant: normal;}|
|font-weight|Graisse (niveau de « gras ») de la police. Nombreuses valeurs possibles : bold, lighter, semi-bold, bolder etc. ou encore une valeur numérique.| #texte { font-weight: semi-bold; } #texte font-weight: 100; }|
|font|L’ensemble des propriétés affectant la police peuvent être regroupées| **Au lieu d’avoir :** #texte { font-family: Verdana, sans-serif; font-style : italic; font-variant: small-caps; font-weight: semi-bold; } **On aura :** #texte { font: 14pt semi-bold italic small-caps Verdana, sans-serif; }|
| | |On aura : #texte { font: 14pt semi-bold italic small-caps Verdana, sans-serif; }|

## Les familles de polices

Le nom de la police est indiqué via la propriété font-family.

Celle-ci peut comporter plusieurs noms de police, séparés par une virgule, généralement les polices « standard », afin de s’assurer qu’au moins une sera présente sur le PC de l’utilisateur.

Dans ce cas, le navigateur regarde si la première police de la liste est présente, sinon il testera la seconde et ainsi de suite jusqu’à afficher la première présente. Dans le cas où aucune n’est présente, ce sera la police par défaut du navigateur (ou celle paramétrée par l’utilisateur dans son navigateur) qui sera affichée, ce qui risque de casser le graphisme attendu.

Si un nom de police comporte un espace (Times New Roman, Trebuchet MS etc.), il doit être échappé par des guillemets (simples ou doubles).

Exemples :

```css
#texte {
   font-family: Arial, "Times New Roman", sans-serif;
}
```

Les polices peuvent être appelées par leur nom (family name) ou par leur type (generic name).

Les types sont les suivants regroupent des polices selon des spécificités de styles graphiques (sérif, sans sérif, monospace, cursive etc.).

Dans ce second cas, les polices correspondantes au groupe seront appelées par le navigateur.

Les systèmes d’exploitation et les navigateurs web possèdent des familles de police par défaut. Certaines polices (Arial, Verdana, Times New Roman etc.) sont donc utilisées couramment car présentes.

Cependant, une police présente sur un PC peut ne pas l’être sur un autre PC, les utilisateurs ayant la possibilité d’installer/désinstaller des polices sur leur système d’exploitation.

Aucun moyen ne permet au développeur d’un site de s’assurer qu’une police sera présente sur le PC de tous les internautes.

Par contre, le CSS permet désormais d’utiliser des polices en les installant directement sur le site : on dépose le fichier de police (formats eot, woff etc.) dans un répertoire du site (nommé par exemple fonts) puis on l’appelle via la propriété font-face :  

```css
@font-face {
   font-family: "Open Sans";
   src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2") ;     
}
```
Autre alternative, utiliser des solutions en ligne telles que [Google Fonts](https://fonts.google.com/).  

Sur les sites de polices (Dafont.com etc.) certaines polices sont payantes, il convient donc d’acquitter d’une licence d’utilisation. 

D’autres [instructions CSS](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Fonts) existent pour les polices

## Unités de taille des polices

Il existe plusieurs unités de taille pour les polices. Celles-ci se divisent en 2 types : les fixes (ou absolues) et les relatives.

### Unités de taille fixes

Les unités de tailles fixes (ou absolues) ne se redimensionnent pas, même dans le cadre d’un site dit « responsive ».

Certaines proviennent directement de l’imprimerie et sont dans la réalité très peu utilisées dans le web (sauf pour, justement, les feuilles de styles destinées à l’impression).



|Unité|Abréviation |Exemple|
|:-------------------------|:-------------------------|:-------------------------|
|Point|pt|#texte { font-size: 14pt;}|
|Pica|pc|#texte { font-size : 14pc;}|
|Centimètre, millimètre|cm, mm|#texte { font-size : 14cm; }|
|Pouce (Inch)|in|	#texte { font-size: 14in; }|

### Unités de taille relatives

Les unités de taille relatives sont redimensionnées en fonction d’un élément parent (pas forcément le parent immédiat) du D.O.M.

|Unité|Abréviation|Redimensionnement|Exemple|
|:--|:--|:--|:--|
|Pixel|px|Relative au dispositif d’affichage (dépendance par rapport aux réglages du  navigateur)|#texte { font-size: 14px; }| 
|Pourcentage|%|Relative à la taille de la police de l’élément parent.|#texte { font-size: 14%; }| 
|Cadratin|em|Relative à la taille de la police de l’élément parent.| #texte { font-size: 14em; }| 
|Root em |rem|Proportionnelle à l’élément racine de la page, c’est-à-dire à la balise `<html>`| #texte { font-size : 0.8rem; }| 	 		
|Viewport width|vw|Proportionnelle à la largeur du dispositif d’affichage.1vw = 1/100éme de la largeur| #texte { font-size: 14vw; }|	
|Viewport height|vh|Proportionnelle à la hauteur du dispositif d’affichage.1vw = 1/100éme de la hauteur| #texte { font-size: 14vh; }|	  
|Viewport min|vmin|Proportionnelle à la plus petite valeur entre la largeur et la hauteur de viewport.|#texte { font-size: 14vmin; }|
|Viewport max|vmax|Proportionnelle à la plus grande valeur entre la largeur et la hauteur de viewport.|#texte { font-size: 14vmax; }|

### Quelle unité choisir ? 

La majorité des sites web utilisaient les pixels, jusqu’à l’avènement des sites responsive. 
La problématique des unités de taille sera de nouveau abordée dans le cours sur le web responsive. 

### Hauteur de ligne

Pour la typographie web, un dernier élément est à prendre en compte : la hauteur de ligne, spécifiée par la propriété CSS `line-height`.

Comme pour les polices et leur taille, les navigateurs définissent une hauteur de ligne par défaut.  

```css
p {
   line-height: 3em;     
}
```

Pour rétablir la hauteur de ligne initiale (celle par défaut), il faut utiliser la valeur normal : 
```css
p {
   line-height: normal;     
}
```

## Alignement

Il est possible bien entendu comme dans les logiciels de traitement de texte (Word…) d’aligner votre contenu grâce à la propriété `text-align`: 

Exemple (centre le contenu de tous les div) : 

```css
div {
   text-align: center;     
}
```



|Alignement|	CSS|
|:-|:-|
|gauche|	left|
|droite|	right|
|centré|	center|
|justifié|justify|
	
**A noter** : l’utilisation de l’alignement justifié n’est pas recommandée en termes de bonne pratique d’ergonomie web. 	

## Couleurs 

Il existe 3 propriétés pour les couleurs : la couleur du texte, la couleur des bordures et la couleur de fond d’un élément.

|Propriété|	Fonction|Exemple|
|:-|:-|:-|
|color| Couleur du texte (avant-plan)|#texte { color : #0000000; }|
|background-color| Couleur d'arrière-plan|#texte { background-color : #0000000; }|
|border-color|	Couleur de bordure|#texte { border-color : #000000; }|

## Noms et codes des couleurs

Les couleurs sont exprimées soit par :

*	leur nom en anglais (black, white, red, yellow, fuschia…) qui parlent d’eux-mêmes ou des variantes un peu plus obscures :  burlywood, lightcoral, navajowhite, deepskyblue, gainsboro... 

Seulement 16 noms sont reconnus officiellement par le W3C, pour les variantes il convient de s’assurer de leur compatibilité avec les navigateurs, il est alors plus simple d’utiliser les codes hexadécimaux

Seulement 16 noms sont reconnus officiellement par le W3C; pour les variantes il convient de s’assurer de leur compatibilité avec les navigateurs, il est alors plus simple d’utiliser les codes hexadécimaux (cf. paragraphe suivant).

*	des codes hexadécimaux, précédés du signe dièse, allant de #000000 (noir) à #FFFFFF (blanc). Exemples : #FF0000 (red), #FF00FF (fuschia), #DEB887 (burlywood).

Les codes hexadécimaux peuvent être abrégés en 3 caractères au lieu de 6 : mais les règles d’abréviation sont un peu complexes, on utilise un code abrégé souvent pour les couleurs les plus simples :  #000 (noir), #FFF (blanc) ou encore pour les nuances de gris (#CCC, #DDD, #EEE…). 

*	 des codes RGB (pour Red Green Blue) où l’on indique par 3 nombres distincts les taux de rouge, de vert et de bleu. Exemple : RGB (255, 255, 0). 

*	des **codes HSL** (pour Hue Saturation Lightness) où l’on indique par un nombre puis deux  pourcentages les taux de teinte, de saturation et de luminosité. Exemple : hsl(90, 100% ,0%) pour le noir.

Cette méthode est méconnue et surtout beaucoup complexe pour trouver la couleur souhaitée, ce qui explique qu’elle est très peu utilisée.

**A retenir : la bonne pratique (et la plus utilisée) est d’utiliser les codes hexadécimaux.** 

* [http://stylescss.free.fr/couleurs.php](http://stylescss.free.fr/couleurs.php)

* [Palette des couleurs](https://www.w3schools.com/colors/colors_picker.asp)


## Bordures

Les bordures peuvent être définies de façon précise : par exemple une bordure en haut, une bordure à droite.

La largeur et la couleur peuvent être indiquées. 

|Propriété|Fonction|Exemple|
|:--|:--|:--|
|border-top-width,border-right-width,border-bottom-width,border-left-width	|	Largeur de bordure. La valeur est soit une longueur soit thin, medium ou thick. border-width est un raccourci pour ces quatre spécifications individuelles.	|div { border-top-width: medium; border-width: 5px; }|
|border-style|Le style de cadre : dotted (pointillé), dashed (pointillé long), solid, double, groove (creusé), ridge (relief) etc.|div { border-style : dotted; }|
|border-top-color,border- right-color,border-bottom- color,border-left-color|Couleur de bordure. border-color est un raccourci pour ces quatre spécifications individuelles.|div { border-top-color : #CCC; }|
|border |Les propriétés peuvent être regroupées via l’instruction border|div { border : 5px dashed #CCC; }|

Depuis HTML 5, il est possible de faire des bordures arrondies, grâce à la propriété border-radius. 

Le degré d’arrondi peut être exprimé en pixels ou en pourcentages. 

L’arrondi est appliqué à l’arrière-plan (background) et non à la bordure.

```css
div {
   border: 2px solid red;
   border-radius: 5px; 
}

footer {
   border-radius: 50% 10% 50% 10%; 
}
```

**En savoir plus sur**  [les bordures](https://www.w3schools.com/css/css_border.asp) et sur [border-radius](https://developer.mozilla.org/fr/docs/Web/CSS/border-radius). 

## Dégradés de couleur 

Le suffixe `–gradient` permet d’obtenir des dégradés de couleurs avec 2 possibilités : linéaire (`linear-gradient`) et circulaire (`radial-gradient`)

```css
div {
   background : linear-gradient(to right, white, black);
}
```

De nombreuses options (direction, angle, empilement, répétition) peuvent être précisées : les dégradés.

## Ombres 

Les propriétés `box-shadow` et `text-shadow` décrivent les ombres appliquées respectivement à la boîte et au texte.

Comme pour les dégradés, les options sont nombreuses : suivre ce [lien](https://developer.mozilla.org/fr/docs/Web/CSS/text-shadow) pour en savoir plus. 

```css
div {
   box-shadow : 10px 5 px 5px red;
   text-shadow : 1px 1px 2px pink;
}
```

		



		

	 	
	
		

		
		


   	 	  
	
		  
	
 	  	
		
	 	 

  	
		

    	
 		  	
		  	

 	 	
		
	
	 	


	  	
	





