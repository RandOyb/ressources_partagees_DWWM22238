# HTML - 04 - Les liens

## La balise `<a>`
 
La balise `<a>` - pour _ancre_ (_anchor_ en anglais) permet d'établir un lien hypertexte. 

Les liens permettent de naviguer dans un site pour aller sur une autre page mais aussi : 

* sur une partie de la page courante
* sur un autre site (une page sur un autre site) 
* sur une ressource (fichier, image, vidéo etc.) 

Exemple :

	<a href="page2.html" title="Page suivante">Cliquez ici</a> 

Un lien est composé de différentes parties et attributs :
 
* l'attribut `href`, **obligatoire**, qui a pour valeur la destination du lien
* l'attribut `title`, **obligatoire**, qui a pour valeur un texte indicatif qui **s'affiche lorsque l'on passe la souris sur le lien**. 
* Un texte, qui est affiché sur la page web (_Cliquez ici_ dans l'exemple ci-dessus), donc visble de l'internaute. 

## Lien entre 2 pages 

On peut naviguer entre différentes page HTML. Ceci se fait de la manière suivante : 

* Page de destination dans le même répertoire que celle qui contient la balise `<a>` :
	
	`<a href="page2.html">Cliquez ici pour aller vers la page 2</a>` 

* Page de destination dans un sous-répertoire du répertoire qui contient la page avec la balise `<a>` : 

On indique le chemin vers le sous-répertoire :

	`<a href="sousrepertoire/page2.html" title="Ouvrir une page située dans un sous-répertoire">Cliquez ici</a>` 

* Page de destination située dans un autre répertoire (c'est-à-dire en dehors du répertoire qui contient la page avec la balise `<a>` :

On indique le chemin vers le répertoire externe précédé des signes `../` qui permettent de remonter d'un niveau d'arborescence :

	`<a href="../repertoire/page2.html" title="Ouvrir une page située dans un répertoire externe">Cliquez ici</a>` 

## Lien interne à la page 

Les liens internes permettent de naviguer au sein d'une même page HTML. Un lien permettra d'accéder directement à une autre balise dans la page. La balise de destination devra posséder un attribut `id` afin de la nommer.  

**Exemple :**
  
	`<p id="lacible">bla bla bla</p>`  

Pour accéder directement au paragraphe nommé _lacible_ : 

	`<a href="#lacible" title="Aller à la cible">Aller au paragraphe qui parle de bla bla bla</a>`

L'attribut `target` s'applique à d'autres balises : `<area>`, `<base>`, `<form>` et `<link>`.

Pour aller vers un élément cible situé dans une autre page, on indique dans l'attribut `href` le signe l'identifiant de la cible précédé du signe dièse : 

	`<a href="page2.html#lacible" title="Aller à une cible sur une autre page">Cliquez ici</a>` 

> Vous pourrez rencontrer l'attribut `name`, issu du HTML 4, pour nommer la cible. Cet attribut est **obsolète** en HTML 5.

## Liens externes vers un autre site 

Lien externe vers un site web : on indique l'url complète commençant par `http` (ou `https`) : 
	
	`<a href="https://www.afpa.fr" title="Aller sur le site de l'AFPA">Découvrez l'AFPA</a>` 

## Liens absolu et relatif

Il existe une distinction selon la façon dont on indique le chemin du lien dans l'attribut `href` :

* Lien absolu : tout le chemin est renseigné depuis le début de l'arborescence : exemple : 
	````
	C:\Users\fef\Desktop\DEVELOPPER_GIT.
	````
* Lien relatif : chemin est indiqué avec les signes `../` pour parcourir l'arborescence de répertoires. 

## Attribut `target`

L'attribut `target`, faculatif, permet d'indiquer dans quelle fenêtre (onglet du navigateur web) s'ouvrira le document. 

Les valeurs possibles pour l'attribut `target` sont :

* `_blank` : ouverture dans une nouvelle fenêtre
* `_self` : ouverture dans la fenêtre courante
* `_parent` : ouverture dans la fenêtre parente (quand on se trouve dans une popup par exemple)
* `_top` : ouvre la page dans la fenêtre parente de 1<sup>er</sup> niveau (s'il y a plusieurs fenêtres parentes, sinon se comporte comme `_self`) 

> Les bonnes pratiques d'ergonomie déconseillent l'emploi de `target`. 

> L'attribut `target` peut s'appliquer aussi aux balises `<area>`, `<base>`, `<form>` et `<link>`.

## Liens vers une ressource

### Afficher

Pour faire un lien vers une ressource, on indique le nom de fichier de la ressource et son extension. 

_Exemples :_

	// Fichier situé à la racine
    <a href="notice.pdf" title="la notice">Téléchargez la notice (PDF)</a>    

    // Fichier situé dans un répetoire nommé 'docs' (par exemple)
    <a href="docs/notice.pdf" title="la notice">Téléchargez la notice (PDF)</a>    

### Télécharger
`download` cet attribut permet de spécifier au navigateur qu’il ne doit pas se diriger vers la ressource ciblée, mais la télécharger.

_Exemple :_

    <a href="notice.pdf" title="la notice" download="notice.pdf">Téléchargez la notice (PDF)</a>    


## Lien email 

En écrivant une adresse email comme valeur de l'attribut `href`, un clic sur le lien lance automatiquement le logiciel de messagerie configuré par défaut sur le PC de l'internaute (Outlook, Thunderbird...). Le logiciel récupère alors l'adresse du destinataire. 

Pour ce faire, on indique comme valeur de l'attribut `href` l'adresse email du destinataire précédée de l'instruction `mailto:` (ne pas oublier le signe `:`) :   

	<a href="mailto:dave.loper@afpa.fr" title="Nous contacter">Ecrivez-nous</a> 

Les messages peuvent être pré-renseignés, ainsi que différentes informations telles que l'objet (= sujet), les personnes en copie et le texte du message. 

_Exemple : lien e-mail avec objet pré-renseigné :_

	<a href="mailto:dave.loper@afpa.fr?subject=Demande de contact" title="Nous contacter">Ecrivez-nous</a>

> Il est fortement **déconseillé** d'indiquer des adresses email en clair dans le code HTML : d'innombrables robots parcourent le web en permanence dans l'unique but de les récupérer afin de vous spammer.
Dans la pratique votre hebergeur vous proposera des emails de contact ( ex : contact@mondomaine.com)   

## Ressources complémentaires

* [Documentation](https://www.w3schools.com/tags/tag_a.asp) de la balise `<a>` et ses attributs.
 
<br>
<br>
<br>