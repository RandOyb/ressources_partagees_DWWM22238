# GIT l'essentiel

## GIT

Télécharger MsysGit

Ouvrir le terminal (ou encore console) : touche Windows + R, saisir `cmd` et vérifier que Git est installé : 

	git --version

doit afficher le numéro de version.

### Configurer votre identification 

	git config --global user.name "Dave Loper"
	git config --global user.email "dave.loper@afpa.fr"

### Se placer dans le répertoire de votre projet 

> Par sécurité, faites d'abord un backup de votre projet

Dans le panneau de commande, saisir :

	cd c:/wamp/www/jarditou

### Initialiser Git dans le projet :

	git init

### Déposer les fichiers pour la première fois (tous les fichiers)

	git add .

### Valider le dépôt et mettre une indication
	
    git commit -m "Dépôt initial"

### Afficher les ajouts/modifications effectuées 

	git log

### Ajouter un nouveau fichier

	git add nouveau.php 
    git commit -m "Ajout du fichier nouveau.php" 
    git log 

### Prendre en compte des fichiers modifiés

	git add index.php 
    git commit -m "Modification du titre" 
    git log 

### Salut vieille branche !

Les branches permettent de copier le dépôt d'origine, donc d'obtenir d'autres versions du projet; on pourra alors travailler dans ces versions sans détériorer la principale/initiale.

### Lister les branches existantes

	git branch

Il n'y a pour le moment que la branche `master`, créée par défaut  lors de l'initialisation.

### Créer une branche 

	git branch nombranche

Exemples : `git branch dev`, `git branch v1`, `git branch oreo`, `git branch 2019_01_16`...

> Le nombre de branches est illimité.

### Changer de branche

Pour choisir la branche dans laquelle on souhaite travailler : 

	git checkout nombranche

### Je ne sais plus où j'en suis

Si vous ne savez plus dans quelle branche vous êtes, faites un `git branch` : la branche en couleur (et précédée d'un *) est celle dans laquelle vous travaillez.
 
### Fusionner des branches

Il arrive un moment où il faut publier votre travail effectué dans une branche avec la branche principale :

* On se place dans la branche qui va recevoir les nouvelles modif, ici la branche _master_ : 

    `git checkout master`  

* On va chercher les modifications dans la branche où elles ont été effectuées (ici _nombranche_) :

	 `git merge nombranche`

Etape 3 (facultatif) : supprimer la branche à partir de laquelle on a importé les modifications : 

	 git branch -d nombranche

> Réfléchir s'il faut oui ou non la supprimer. Il est prudent de vérifier d'abord que la fusion s'est bien passée.
  
## Github 

2ème fonction essentielle de Git : partager son code dans le cadre du travail en équipe ou le diffuser publiquement. On va alors créer un dépôt distant (le vôtre est un dépôt local) : c'est-à-dire envoyer notre code sur un serveur public (cloud). Il existe différents services/plateformes de ce type : Github, Gitlab...

* Créér un compte sur [Github](https://github.com), par exemple avec le pseudo _daveloper_ (attention au choix du login qui sera aussi l'url d'accès).
* 
* Dans votre compte Github, créer un nouveau dépôt (_repository_) qui sera obligatoirement en public (les dépôts privés sont payants).

* Github vous donne alors l'url d'accès à votre dépôt en ligne, par exemple _https://github.com/daveloper/jarditou.git_.

* Associer le dépôt local avec le dépôt distant Github :
	
	 `git remote add origin https://github.com/daveloper/jarditou.git`

* Envoyer ("pousser") le code local vers Github : 

	 `git push origin master`

### Travail en équipe

Pour autoriser des personnes à écrire/modifier votre code : sur Github : indiquer les noms (pseudos Github des personnes) dans _Settings > Collaborators_. 

Ces collaborateurs pourront alors importer ("tirer") le code distant dans leur dépôt local en exécutant la commande :
	
	git pull origin master



 


 










 
 



