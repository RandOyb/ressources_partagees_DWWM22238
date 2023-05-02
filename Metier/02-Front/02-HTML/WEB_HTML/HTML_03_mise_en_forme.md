# HTML - 03 - Mise en forme

## La mise en forme des caractères 
### La mise en forme logique 

A l'aide de ces balises, le navigateur va interpréter le formatage du texte. Ces balises sont souvent utilisées dans un environnement non-graphique (sous DOS par exemple), et elles sont de moins en moins utilisées.

* `<blockquote>…</blockquote>` : indique une citation
* `<code>…</code>` : indique du code informatique 
* `<em>…</em>` : emphase (affichage similaire à l'italique, mais avec aun autre sens sémantique) 
* `<strong>…</strong>` : fait ressortir du texte en gras 
* `<samp>…</samp>` : affiche les caractères de manière littérale. 

### La mise en forme physique 

A l'aide de ces balises, c'est vous qui décidez ce que le navigateur affichera.

* `<b>…</b>` affiche le texte en gras 
* `<i>…</i>` affiche le texte en italique 
* `<u>…</u>` souligne le texte 
* `<small>…</small>` affiche le texte dans une police plus petite (l'inverse, `<big>` est obsolète en HTML 5) 
* `<sup>…</sup>` : affiche le texte en exposant 
* `<sub>…</sub>` : affiche le texte en indice 

## Les polices de caractères 

### Utilisation du CSS

HTML 5 a supprimé l'essentiel des balises qui permettaient la gestion des polices (`<font>`, `<color>`, `<size>`...), qui doit se faire désormais uniquement via les feuilles de styles CSS, que nous étudierons plus tard.

### Caractères accentués et spéciaux

Avant, pour que les accents et les caractères spéciaux soient reconnus correctement, il était nécessaire de les remplacer dans le texte par un code appelé _entité HTML_ :

* un code numérique (code ISO), commençant par les signes _&#_ et suivi d'un point-virgule. Par exemple pour le signe copyright &copy; : `&#169;` ou pour la lettre è avec accent grave donc : `&#232;` 
* certains codes peuvent porter optionnellement un nom correspondant : par exemple pour le copyright on peut écrire `&copy;` ou, pour le è accent grave, `&egrave;`.    

Aujourd'hui, les évolutions des navigateurs web les plus récents ont éliminé ce problème en gérant mieux ces caractères (grâce notamment à l'utilisation de l'encodage UTF-8). On peut toutefois en trouver avec certaines fonctions d'échappement de texte, il faut donc connaître la notation de ces entités : 

* [entités les plus courantes](https://www.scriptol.fr/creation-site-web/accents-html.php)

## Exercice d'application

Reprenez la page HTML créée précédemment et testez les différentes balises évoquées dans ce chapitre.


<br>
<br>
<br>