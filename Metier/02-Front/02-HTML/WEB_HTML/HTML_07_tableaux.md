# HTML - 07 - Tableaux 

Les tableaux sont très largement utilisés dans le développement de pages web. Ils sont indispensables pour pouvoir présenter l'information de manière structurée et facilement lisible. 
 
## Création d'un tableau

* On crée un tableau à l'aide de la balise `<table>` et on le ferme via `</table>`. 
* Un tableau est composé de plusieurs lignes encadrées par les balises `<tr>` et `</tr>`. 
* Chaque ligne est composée de plusieurs cellules, encadrées par les balises `<td>` et `</td>`. 

**Exemple de code HTML d'un tableau :** 

	<table>
		<tbody>
	  		<tr>
	  			<td>Pierre</td>
	  			<td>65 800</td>
	  			<td>53 200</td>
	  			<td>46 400</td>
	  		</tr>
	  		<tr>
				<td>Paul</td>
				<td>88 000</td>
				<td>51 500</td>
				<td>62 300</td>
	  		</tr>
	  		<tr>
	  			<td>Jacques</td>
	  			<td>74 400</td>
	  			<td>64 200</td>
	  			<td>78 900</td>
	  		</tr>
		</tbody>	
	</table> 


> Aux débuts du web, on utilisait les tableaux pour la mise en page (structuration en lignes, colonnes). Cet usage est désormais à proscrire, la balise `<table>` devant être réservée à la présentation de données en tableau (= données tabulaires). Aujourd'hui la structuration et le positionnement des éléments se fait via des balises telles que `<div>`, `<header>`, `<footer>`, `<nav>` etc. associées aux feuilles de styles CSS.


### Légende 

Il est possible d'ajouter un titre (légende) à un tableau via la balise `<caption>`, qui doit être placée immédiatement sous la balise `<table>` :

	<table>
	   <caption>Ventes T1</caption>
	   <tr>
	      <td> …

**Exercice**

Ajoutez la balise `<caption>` dans votre fichier HTML. 

## Mise en forme avancée

### Entêtes et pieds 

#### Entêtes

L'entête des colonnes, c'est-à-dire chaque cellule de la première ligne qui sert de titre de colonnes est repéré par les balises `<th>` incluses dans une balise `<thead>` et une ligne `<tr>` :
 
	<table>
	<caption>Ventes T1</caption>
	<thead>
	  <tr>
	    <th> - </th>
	    <th>Janvier</th>
	    <th>Février</th>
	    <th>Mars</th>
	  </tr> 
	</thead>
 
Cette balise doit être présente qu'une seule fois par tableau. En cas d'entêtes multiples, il faudra recourir aux balises `<colgroup>` et `<col>` (voir à la fin de ce document).  

#### Pieds 

La balise `<tfoot>` permet d'indiquer des cellules en pied de tableau, par exemple un total des valeurs d'une colonne dans un tableau de chiffres : 

	<tfoot>
	   <tr>
	     <td>Total</td>
	     <td>228 200</td>
	     <td>168 900</td>
	     <td>187 600</td>
	   </tr>
	</tfoot>	
	</table> 

Cette balise doit être présente qu'une seule fois par tableau. En cas d'entêtes multiples, il faudra recourir aux balises `<colgroup>` et `<col>` (voir à la fin de ce document).  
Contrairement à `<thead>` qui doit avoir comme balises descendantes `<th>`, `<tfoot>` comprend des balises `<td>`.

#### La balise `<tbody>`

Les balises `<thead>` et `<tfoot>` peuvent être utilisées ensemble ou de façon séparée : l'utilisation se fait en fonction des données du tableau.

Par contre, dès lors que l'une des 2 est présente, il convient d'utiliser également la balise `<tbody>` qui délimite le contenu principal (_corps_) du tableau : 

	…
	</thead>
	<tbody>
	   <tr>
	     <td>Total</td>
	     <td>228 200</td>
	     <td>168 900</td>
	     <td>187 600</td>
	   </tr>
	</tbody
	<tfoot>	
	… 

Comme on le voit, la balise `<tbody>` se place en toute logique après la fermeture de la balise `<thead>` et se termine avant l'ouverture de balise `<tfoot>`.

**Exercice**

Ajoutez la balise `<tbody>` à votre tableau.

## Regroupement de lignes/colonnes 

On peut regrouper plusieurs lignes ou plusieurs colonnes afin d'obtenir des cellules plus grandes. 

### L'attribut `colspan`

L'attribut `colspan` est à appliquer sur une balise de cellule `<td>` et prend une valeur numérique qui indique le nombre de colonnes à regrouper. La cellule s’étendra sur le nombre de colonnes indiquées comme valeur :

	<td colspan="4">Ventes du 1<sup>er</sup> trimestre</td>

**Exercice** 

Reprenez votre fichier HTML et ajoutez le code ci-dessus après votre balise `<thead>`. Observez ce qui se passe.

### L'attribut `rowspan`

L'attribut `rowspan` est à appliquer sur une balise de cellule `<td>` et prend une valeur numérique qui indique le nombre de lignes à regrouper. La cellule s'étendra sur le nombre de lignes indiquées comme valeur :

	<td rowspan="2">Total</td>

**Exercice**

Reprenez votre fichier HTML, remplacez la ligne concernant Jacques par le code ci-dessous et observez ce qui se passe :

	  <tr>
	     <td rowspan="2">Jacques</td> 
	     <td>74 400</td>
	     <td>64 200</td>
	     <td>78 900</td>
	 </tr>
	 <tr>	
	    <td>68 100</td>
	    <td>76 700</td>
	    <td>99 500</td>
	 </tr>	

## Habillage de colonnes et de lignes

HTML 5 crée les nouvelles balises `<colgroup>` et `<col>` qui permettent, combinées à des feuilles de styles CSS, de grouper via un habillage visuel (et uniquement visuel contrairement à `colspan` et `rowspan`) les colonnes d'un tableau. Par exemple, on appliquera une couleur de fond sur les 2 premières colonnes tandis qu'une troisième colonne aura une autre couleur de fond.

> [Exemple](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_colgroup_test)

## Exercice

> Vous aurez besoin des éléments contenus dans [cette archive zip](jarditou_html_zip.zip).

Reproduisez le tableau suivant :

![images/HTML_07_tableaux_exercice.jpg](images\tableau_jarditou_html.JPG).
