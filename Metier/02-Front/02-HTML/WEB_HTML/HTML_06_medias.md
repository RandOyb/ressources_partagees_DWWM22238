# HTML - 06 - Médias 

Une page HTML peut afficher différents types de médias :

* images
* vidéos
* audio/sons
* animations, applications etc., que l'on regroupe sous le terme _objets_.  

## Les images

L'affichage d'une image s'effectue à l'aide de la balise `<img>` qui possède de nombreux attributs. 

L'attribut le plus important est `src` (pour _source_) : il permet de spécifier le chemin (ou l'url dans certains cas) complète vers le fichier physique de l'image, ainsi que le nom et l'extension : 

_Exemples :_
```html
<!-- fichier image situé dans le même répertoire que le fichier HTML --> 
<img src="jarditou_logo.jpg">

<!-- fichier image situé dans un autre répertoire que le fichier HTML --> 
<img src="images/jarditou_logo.jpg"> 

<!-- fichier image situé sur un autre serveur : appel via une url --> 
<img src="https://www.site2.fr/images/jarditou_logo.jpg">
```

> Aucun slash de fermeture en HTML 5 : on écrit `<img src="jarditou_logo.jpg">` et non pas `<img src="jarditou_logo.jpg" />`

### Texte de remplacement 

Cela se fait avec l'attribut `alt`, **obligatoire**. 
Intégrer une description pertinente dans la balise Alt de ces images est indispensable. 

Pourquoi ?

* Permettre aux moteurs de comprendre le contenu des images. Placer des mots-clefs dans la page en dehors du texte directement visible par les visiteurs.
* Accessibilité Internet pour les malvoyants
* si l'image ne s'affiche pas, l'internaute pourra quand même deviner le sens de l'image.
* La synthèse vocale restitue uniquement l’information textuelle.

_Exemple :_ 

	<img src="jarditou_logo.jpg" alt="Logo Jarditou" title="Logo Jarditou">

### L'attribut `<title>` 

L'attribut `<title>` permet d'indiquer un titre (description) de votre image. Cette balise est facultative mais son usage est très fortement recommandé (à la fois pour le référencement sur les moteurs de recherches et les systèmes de synthèse vocale). 

Le contenu de l'attribut doit être court mais suffisamment pertinent. Dans la pratique, on met souvent la même chose que dans alt.  

_Exemple :_ 

	<img src="jarditou_logo.jpg" alt="Logo Jarditou" title="Logo Jarditou">


## Autres médias 

### Vidéos

HTML 5 a ajouté la balise `<video>`.

Seuls 3 formats vidéos sont reconnus par les navigateurs : 

* mp4 (H264 AAC) 
* webm (Matroska) 
* ogg (Theora)
 
Certains navigateurs peuvent ne lire qu'un seul parmi les 3. Pour rester compatible, il faut donc indiquer 3 sources - une pour chaque format - d'une même vidéo (ce qui nécessite de convertir à l'aide d'un logiciel vidéo). [Tableau de compatibilité navigateurs](https://www.alsacreations.com/article/lire/1125-introduction-balise-video-html5-mp4-h264-webm-ogg-theora.html). 

Outre les attributs génériques de sources et de dimensions, on rencontre des attributs de réglages de la vidéo :

* `controls` : accès aux contrôles de lecture (boutons de navigation, volume, etc.), selon les possibilités du navigateur), les masque si omis.
* `preload="rect"` : spécifie au navigateur de débuter le téléchargement de la vidéo tout de suite, en anticipant sur le fait que l'utilisateur lira la vidéo. Attention, cette option est à manier avec prudence (il est préférable que ce soit la seule raison d'être de la page).
* `preload="true"` : lance la lecture automatiquement. Cela peut également être problématique avec une connexion à faible bande passante ou sur un terminal mobile. 
* `preload="image.jpg"` : indiquer une image (aperçu) à afficher par défaut dans l'espace réservé par la vidéo, avant que la lecture de celle-ci ne soit lancée.
* `loop` : indique que la lecture doit s'effectuer en boucle.

_Exemple :_

	<video width="400" height="222" controls="controls"
	   <source src="videos/developpeur.mp4">
	   <source src="videos/developpeur.ogg">
	   <source src="videos/developpeur.webm">
	   La vidéo n'a pu être lue.
	</video>

> Dans la pratique, beaucoup de pages web [intègrent des vidéos via Youtube](https://support.google.com/youtube/answer/171780?hl=fr). 

## Sons

HTML 5 ajoute la balise `<audio>`, dont le fonctionnement et les attributs (panneau de contrôle, chargement et lecture automatiques, multi-sources etc.) sont strictement similaires à la balise `<video>`. 

> [Attributs](https://developer.mozilla.org/fr/docs/Web/HTML/Element/audio) et [formats supportés](https://developer.mozilla.org/fr/docs/Web/HTML/Formats_pour_audio_video). 


## La balise `<iframe>`

La balise `<iframe>` permet l'intégration d'une autre page HTML dans la page HTML courante. Cette technique est par exemple utilisée pour afficher sans rechargement une fenêtre dite « popup » ou fenêtre modale par-dessus la page HTML affichée. 

L'utilisation d'iframes requiert souvent l'usage de Javascript et est fortement déconseillée en termes de bonnes pratiques ergonomiques.

> [Exemples et attributs](https://developer.mozilla.org/fr/docs/Web/HTML/Element/iframe) 

## Exercices

### Exercice 1 

* Créez une page HTML 5, collez le code suivant et visualisez avec votre navigateur. 

```html
<img src="logo_windows.jpg" alt="Texte alternatif de l'image" title="Titre de l'image"> Logo Jarditou
```
Vous pouvez utiliser cette [image](_Exercices/images/logo_windows.png)


* Supprimez l'attribut `title` et observez ce qui se passe au passage de la souris sur l'image. 

* Modifiez le nom de l'image (sans modifier le nom du fichier) dans l’attribut src et observez ce qui se passe dans le navigateur. 

* Supprimez maintenant la balise `alt` et observez ce qui se passe.

### Exercice 2 

Créez une page HTML et intégrez la vidéo d'après le lien ci-dessous

`https://www.youtube.com/watch?v=MuFryJD2wTo&feature=emb_logo`

Utilisez la fonction `Partager` de YouTube (en sélectionnant balise `iframe`) pour récupérer le code d'intégration HTML, ensuite insérez le dans votre page.
