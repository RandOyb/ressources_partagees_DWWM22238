Commande pour Git :
RESPECTEZ LA SYNTAXE !! ( sauf quotes)

------ Principaux

	Git init  (initialyz un dossier .git (création du dossier))

	Git add -A  (Ajoute tout nos fichiers & dossier a .git)
	git add . ( signifie l'endroit ou je suis")

	Git commit -m  (pour preparer a l'envoi des fichiers( -m = pour mettre un commentaire)

	Git status   (pour verifier l'etat)

	Git push   (Pousse nos fichier/dossier sur Github)
	git push -u origin master (a appliqué a chaque nouveau repository)

	Ls -a  (Affiche les dossiers /fichiers(même les cacher)

	cd ..   (cd navitation ) ( ..  remonter au dossier precedant ) 
	cd ../../'nom du dossier'

	CTRL + l   (clear la console)

	git log (voir les commit fait)

	git remote add origin 'adresse' (ajoute moi un depot distant)
	git remote  -v ( demander l'adresse du depot distant )

	git fetch ( voir les differences entre le dépots local et distant / voir l'état du remote)

	git pull ( recuperer ce qu'il dans le depots distant sur le local )
	git pull origin master master //

------ORDRE d'applications :

	- 1 add
	- 2 commit 
	- 3 push 

------CONFIG

	git config user.name 'name'

	git config user.email 'mail'

	git config --global user.name 'name' ( pour la config global)

------les branch

	git branch dev (crée une branche) "dev"

	git branch -v (donne la liste des branch sur le depot)

	git checkout dev (changer de branche) "dev"

	git checkout -b dev (crée une branche et nous switch dessus) "dev"

	git push -u origin "dev" ( push sur la branch 'dev' d'un nouveau depot)

//git branch --set-upstream-to-origin/<branch> dev //

------STASH

git stash (sauvegarde sur une branche temporaire)
	>
	git stash apply (file une copie du stash)
	git stash pop (redonne le stash le supprime)

------DANGER !

git reset HEAD(supprimer les modifications dans le working )
(enlève tout ce qu'on ajoute au commit)
// Commande a evité 

git add. (ajoute tout les fichiers a partir de l'endroit ou ont se situe)

git amene -a (amene le fichier manquant)
( modifier le message du commit )


------ Editeur de texte

Pour la page editeur de texte a la con ;

	:wq (enregistre et quitte cette daub).

------ ???

git merge interface_graphique ??

git diff ??
