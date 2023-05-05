## Intégrer Bootstrap dans une page web

### Dans la partie `<head>` de la page HTML :

1. Ajouter la balise meta _viewport_ : 
     
```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">   
```

2. Puis le code pour intégrer la feuille de style CSS de Bootstrap, toujours dans `<head>` : 

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
```

> Ici, on importe Bootstrap via une URL pointant sur un CDN (un serveur externe hébergeant des fichiers) mais rien n'empêche de télécharger Bootstrap directement dans l'arborescence de votre site.

Vous pourrez ensuite ajouter vos propres fichiers CSS qui devront être chargés **APRES** celui de Bootstrap.

### A la fin de la page

3. Enfin, intégrez les fichiers Javascript nécessaires à Bootstrap; placez ce code **avant** la fermeture de la balise body (`</body>`), l'ordre des fichiers est à respecter (Jquery, Popper puis Bootstrap) : 

```html
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
```
	
> [Retrouvez ici](https://getbootstrap.com/docs/4.4/getting-started/introduction) les extraits de code mis à jour pour la dernière version de Bootstrap. 

> [Popper](https://popper.js.org) est optionnel.  

Vous pourrez ensuite ajouter vos propres fichiers JS qui devront être chargés **APRES** ceux de Bootstrap.

### Starter template

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>

  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>
```
4. Barre de navigation (il s'agit d'un exemple), à placer dans `<body>` :
	
```html
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
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
```
Fonctionnement des _navbar_ : 

* ligne 1 : on ouvre la balise `<nav>` qui contient plusieurs classes obligatoires (mais variables), notamment  `navbar-expand-sm` qui indique à partir de quelle dimension (ici `sm`, donc à plus de 576px) la barre de navigation sera visible entièrement au lieu d'afficher le bouton _hamburger_. 
* ligne 3-5 : on trouve ici une balise bouton : il s'agit du code du bouton _hamburger_. L'attribut `data-target` est obligatoire; sa valeur doit être la même que celle de l'attribut `id` du `<div>` suivant (ici `collapsibleNavbar`) mais préfixé du signe `#`.    
* ligne 7-19 : un `div` qui contient une liste de liens classiques.

Les barres de navigation peuvent supporter des :

* un nom de site/marque, éventuellement une image (logo) : `brand`
* un formulaire (zone de saisie pour un champ de recherche) 
* des sous-menus, appelés `dropdowns`
 
[Barre de navigation](https://getbootstrap.com/docs/4.4/components/navbar)