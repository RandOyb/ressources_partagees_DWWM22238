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

```html
<p class="mt-5 bg-info">Un paragraphe avec une marge supérieure de 5.</p>

<p class="pl-5 bg-info">Un paragraphe avec une marge interne gauche de 5.</p>

<p class="mx-3 bg-info">Un paragraphe avec une marge externe gauche et droite de 3.</p>

<p class="py-3 bg-info">Un paragraphe avec une marge externe en haut et en bas de 3.</p>

<p class="mt-0 bg-info">Un paragraphe SANS marge externe supérieure.</p>

<p class="mx-auto bg-info">Un paragraphe avec une marge externe automatique à gauche et à droite.</p>
```

Pour appliquer une marge ou un padding aux 4 côtés, aucune indication n'est à spécifier avant la taille de marge :

**Exemples** 

```html   
<p class="m-5 bg-info">Un paragraphe avec une marge de 5 sur les 4 côtés.</p>

<p class="p-3 bg-danger">Un paragraphe avec un padding de 3 sur les 4 côtés.</p>

Il est bien sûr possible de spécifier à la fois une marge externe et une marge interne : 

<p class="m-5 p-3 bg-info">Un paragraphe avec une marge externe de 5 sur les 4 côtés et un padding de 3 sur les 4 côtés.</p>
```
Bootstrap permet aussi d'adapter les marges en fonction des breakpoints; pour cela il faut ajouter le préfixe de breakpoint.

**Exemple** 

```html
<p class="px-sm-2 px-md-3 bg-info">Un paragraphe avec une marge interne à gauche et à droite de 2 pour le breakpoint sm (>= 576 px) puis de 3 à partir du breakpoint md (>= 768 px).</p>
```

**Testez les différents exemples.**

### Marges internes

**Testez l'exemple.**

* [Documentation](https://getbootstrap.com/docs/4.4/utilities/spacing/).

 
## Tableaux

Bootstrap fournit un ensemble de classes pour habiller les tableaux HTML. 

Pour commencer, il convient d'ajouter la classe `table` à la balise HTML `<table>` :

```html 
<table class="table">
	[ ... ]
</table>
```
Différentes classes peuvent ensuite y être ajoutées :  

* `.table-bordered` : affiche les bordures
* `.table-striped` : ajoute un fond de couleur à une ligne sur deux pour faciliter la lisibilité  
* `.table-hover` : surligne la ligne en cours de survol de la souris.

Les tableaux HTML doivent eux aussi être responsive : pour cela il est nécessaire d'englober tout le tableau dans un `<div>` supplémentaire avec en attribut classe `table-responsive`. 

Bootstrap propose bien d'autres options pour les tableaux : [documentation](https://getbootstrap.com/docs/4.4/content/tables).
  
**Testez l'exemple :**

```html
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
```
