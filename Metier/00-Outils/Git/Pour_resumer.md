
# Git & GitHub

A l'issu de cette séquence, vous serez capable de :


- Comprendre le principe de fonctionnement d'un gestionnaire de code source
- Valider des modifications locales
- Créer un dépôt distant (GitHub)
- Synchroniser le dépôt local avec le dépôt distant
- Consulter l'historique des modifications


## Présentation

**Git** est un **logiciel** de **gestion** de **versions** (VCS Version Control System), c’est un outil permettant de gérer vos projets, de stocker un ensemble de fichiers, en conservant la chronologie de toutes les modifications, et qui permet ainsi de retrouver les différentes versions enregistrées.


**GitHub** est la **plateforme** qui permet d’**héberger** vos différents **projets**.

Ainsi, afin de pouvoir utiliser **GitHub**, il est nécessaire d’installer **Git** puis de créer  un compte sur **GitHub**.

## Installation de Git

Allez sur [https://git-scm.com](https://git-scm.com/) et **téléchargez git**. 

![Téléchargement de Git](img/1.jpg)

Rien de spécial à cocher : next, next … valeurs par défaut !

Une fois **GIT installé**, allez sur votre bureau, puis clic droit.

Vous devriez alors avoir **Git GUI Here** & **Git Bash Here** dans la fenêtre qui s’ouvre comme montré ci-dessous :

![Menu Git GUI Here - Git Bash Here](img/2.jpg)

## Configuration de Git

Maintenant que **Git** est installé, vous allez devoir le **configurer** grâce à la commande `$ git config`

Pour ce faire, **clic droit** sur votre **bureau**, **Git Bash Here**

Renseignez votre **nom d'utilisateur** :
```bash
$ git config --global user.name "Nom prenom"
```
Puis votre **adresse mail** :
```bash
$ git config --global user.email "adresse@mail.fr"
```
Ces deux commandes permettront à chacun de vos **commits** d'être **identifiés** par défaut :

Ex :
```bash
$ git config --global user.name "manu"
```
```bash
$ git config --global user.email "manu@afpa.fr"
```

Pour **modifier** la **configuration globale** : 

`$ git config --global --replace-all user.name "New User Name"`

`$ git config --global --replace-all user.email "New User Email"`

Pour **afficher** la **liste** des **informations** saisies dans **config** : 

`$ git config --global --list`


Vous retrouverez les informations saisies, lors de la visualisation des commits en tapant `$ git log` :

<span style="color :red">**Pour le moment**, **ne testez pas cette commande**</span>, car vous n’avez pas encore réalisé de commit !

![Nom Utilisateur + adresse mail lorsque l'on fait $git Log](img/3.jpg)

### Pour information : 


**Global** : configuration par défaut

Si vous saisissez `$ git config --global user.name ‘’…’’`et `$ git config --global user.email’’…’’`, sur une machine concernée, il s’agit de la **configuration par défaut**. 

C’est-à-dire que si vous créez d’autres dépôts en local et que vous ne renseignez pas la config user.name et user.email, la config sera celle par défaut.

Si sur d’autres dépôts vous désirez avoir une **autre configuration, que celle par défaut**, il faudra dans le dépôt concerné faire un `$ git config` et renseigner votre user.name et votre user.email :

`$ git config user.name ’’…’’` et `$ git config user.email ’’…’’`

## Création du dépôt local

Créez sur le bureau un nouveau dossier, que l’on désire déposer sur GitHub, dans lequel vous placerez par la suite vos fichiers de travail.

![ScreenShot dossier sur bureau](img/4.jpg)
  
Puis allez dans ce dossier, clic droit puis **Git Bash Here**.

![ScreenShot Git Bash Here](img/5.jpg)

## Initialisation du dépôt Git

Saisir la commande `$ git init`:

![ScreenShot $ git init](img/6.jpg)

La commande `$ git init` permet d’initialiser le dépôt Git pour le projet concerné et ainsi de générer un ‘**.git**' dans ledit dossier :

![ScreenShot dossier.git](img/7.jpg)

Attention : le dépôt se trouve dans le dossier .git ! <span style="color:red">**Ne jamais supprimer**</span>

Depuis le terminal **git bash**, taper `$ touch README` :

![ScreenShot $ touch README](img/8.jpg)

![ScreenShot fichier README](img/9.jpg)
 

Cette commande permet de créer le fichier **README** dans le répertoire courant.

Maintenant ouvrir ce fichier et sauvegarder un court message.

 ![ScreenShot court message saisi](img/10.jpg)

**Commit** : un commit permet valider une sauvegarde locale dans **.git**, des différentes modifications apportées à votre projet.

Un commit s'opère en 3 étapes (faire un **S A C**):

•	**Status** (Vérification)

•	**Add** (Ajout des fichiers, de toutes les modifications réalisées à l’index)

•	**Commit** (Validation)

![ScreenShot $ git status](img/11.jpg)


**Attention** : respecter la **casse** (**minuscule MAJUSCULE**)  de vos fichiers et l’extension si existante ! 

Saisir exactement comme présenté par Git, et s’il y a des espaces dans le nom du fichier, saisir le nom du fichier entre ‘’ ‘’

![ScreenShot $ git add et commit](img/12.jpg) 

Lorsque vous faites un commit, **git** va vous ouvrir **vim** : l'éditeur de texte par défaut de git dans le terminal.


**Pour information** : `$ git commit -m "message du commit"`, permet de faire un commit sans passer par un éditeur par défaut. 


**Appuyer** sur la touche **i** pour vous mettre en mode "**insertion**".  

![ScreenShot insertion avec i pour écrire un message](img/13.jpg)

Vous pouvez alors entrer votre message de commit.

Une bonne habitude à prendre est de commencer par un titre général et ensuite d'expliquer en quelques mots le contenu du commit.

Pour sauvegarder faites **Esc** pour quitter le mode "insertion" puis tapez **:wq** pour sauvegarder(w pour "write") puis quitter(q pour "quit")

![ScreenShot premier commit + :wq pour quitter](img/14.jpg)

### Pour information : 

Il se peut, si vous avez installé VS code sur votre machine, que vous n’ayez pas la même console comme ci-dessus mais la console propre à VS code, comme montré ci-dessous :

Sur le dépôt local, création d’un **doc.txt** … 

![ScreenShot doc.txt](img/15.jpg)

puis **Status Add** puis **Commit**

Saisissez alors votre **message** pour votre **commit**: 

![ScreenShot VScode message commit non enregistré](img/16.jpg) 

Une fois le message de votre commit saisi, pour confirmer, il suffit d’enregistrer et de fermer le fichier :

**Ctrl+s** puis fermer le fichier

![ScreenShot VS code enregistrement du message](img/17.jpg)

Ainsi, vous vous retrouvez de nouveau dans **Git Bash**.

## Création de compte sur GitHub

Aller sur le site officiel : https://github.com/  afin de créer un compte GitHub.

![ScreenShot compte GitHub](img/18.jpg)


## Création du dépôt distant

Un **dépôt distant** est un dépôt qui sert à centraliser les modifications apportées par tous les collaborateurs.

Sur le site **GitHub**, créez votre dépôt distant.

Allez sur votre compte et sélectionnez vos dépôts :

![ScreenShot sélection your repositories](img/19.jpg)

Puis New :

![ScreenShot New dans your repositories](img/20.jpg)

### Nommez votre dépôt distant

![ScreenShot New dans your repositories](img/21.jpg)

## Création de la liaison entre le dépôt local et le dépôt distant

Une fois le dépôt distant créé, on se trouve à l’intérieur de celui-ci, qui pour le moment est vide, et on découvre son adresse sur GitHub :

![ScreenShot adresse du dépôt distant](img/22.jpg)

Désormais, nous pouvons, et nous devons, faire la **liaison** entre notre **dépôt local** et notre **dépôt distant**, 
grâce à la commande `$ git remote add origin` et l’adresse HTTPS –SSH :

![ScreenShot $ git remote add origin ...](img/23.jpg)

### Push

Enfin, pour enregistrer le dépôt local vers le dépôt distant, il suffit de ‘’**faire un push**‘’ en utilisant la commande
`$ git push -u origin master` pour le tout **premier Push**, puis `$ git push` pour tous les **nouveaux push**.

![ScreenShot $ git push -u origin master](img/24.jpg)

 ![ScreenShot saisi username et password sur GitHub](img/25.jpg) 
 		
Saisir son **Username** et son **Password** lors du **premier Push**, puis plus nécessaire car GitHub installe un **token** sur la machine concernée. 

Votre dépôt local, ci-dessous, doit se trouver sur votre dépôt distant :

![ScreenShot dépôt local](img/26.jpg)

Hormis le ‘**.git**’, vous devez avoir les mêmes fichiers sur **GitHub** :

![ScreenShot dépôt distant](img/27.jpg)

### Pull

Comme pour le Push, le premier Pull doit s’écrire comme suit :

`$ git pull origin master` pour le tout **premier Pull**, puis `$ git pull` pour tous les **nouveaux Pull**.

Avant le Pull dans le dossier local :

![ScreenShot dépôt local](img/26.jpg)

Puis sur GitHub, création d’un nouveau fichier (là je vous laisse chercher un peu … pour avoir le résultat ci-dessous)

![ScreenShot nouveaufichier.txtdépôt distant](img/28.jpg)  

Puis **Pull** …

![ScreenShot pull origin master](img/29.jpg) 

Pour **info**, quand on fait un **Pull**, **GitHub** fait un **commit**, que l’on distingue en faisant un `$ git log` !

**Après le Pull** dans le dossier local :

![ScreenShot dépôt local après Pull](img/30.jpg)

## Git Log

Git gère la chronologie des **commits** en rattachant chaque commit, au commit précédent de sorte que l'on peut visualiser cet historique comme un arbre. 

Pour retrouver un **commit**, il suffit donc de remonter la chaine des commits créés à partir de celui-là.

Pour afficher l'historique des différents **commits** de votre dépôt, utilisez la commande `$ git log`.

![ScreenShot dépôt local après Pull](img/31.jpg)

## Git checkout

Chaque commit est identifié par un numéro sha (la ligne inscrite en jaune).

On y retrouve également l'auteur ainsi que la date du commit. 

Puis vient enfin le message de commit : Create nouveaufichier.txt, doc.txt, wouah.

Grâce à toutes ces informations, vous allez pouvoir vous déplacer dans l'arborescence de votre projet pour revenir à un état spécifique de celui-ci.

Pour cela, vous allez utiliser la commande `$ git checkout` avec au moins les 5 premiers caractères de la ligne jaune.

Si par exemple, on veut revenir **avant le pull**, on va faire un `$ git checkout` juste avant le commit concerné :

![ScreenShot $ git log](img/32.jpg)

![ScreenShot $ git checkout + N°commit)](img/33.jpg)

On est bien revenu à l’état avant le Pull : on a plus le ‘’nouveaufichier.txt’’

![ScreenShot $ git checkout + N°commit)](img/34.jpg)

Si on fait un `$ git log`, on ne voit plus, et c’est tout à fait normal, les commits au-dessus du commit vers lequel on est revenu ( c'est comme le petit poucet qui fait marche arrière et reprend ses cailloux … il ne voit plus son chemin de devant !) :

![ScreenShot $ git checkout + N°commit)](img/35.jpg) 

Pour voir ces commits , il faut revenir sur le ‘’head’’ (point le plus haut) de la branche concernée, en faisant un `$ git checkout master` (**master**, **car** on est dans cet exemple, sur la **branche master**).

 ![ScreenShot $ git checkout master)](img/36.jpg)

On peut ainsi revenir sur d’autres commits qui se trouvent au-dessus du dernier checkout réalisé.

## Git clone

`$ git clone` permet de **récupérer en local**, **un dépôt distant**. 

Il vous suffit de préciser l'adresse de ce dépôt distant.

Pour récupérer l’**adresse** de votre **dépôt distant**, aller sur ledit dépôt puis **Clone or download** :

![ScreenShot dépôt distant)](img/37.jpg)

![ScreenShot URL du dépôt distant)](img/38.jpg)  

Copier l’adresse en cliquant sur le lien prévu à cet effet à côté de l’adresse.

Sur votre bureau, `Git Bash Here` puis saisir la commande `$ git clone` et coller l’adresse :

![ScreenShot $ git clone dans console)](img/39.jpg) 

Le dépôt distant est cloné sur le bureau :

![ScreenShot dossier distant cloné sur bureau)](img/40.jpg) 

![ScreenShot contenu dossier distant cloné sur bureau)](img/41.jpg) 

## Suppression d’un dépôt distant

Pour **supprimer** un **dépôt distant**, allez dans votre dépôt distant, puis **settings**

![ScreenShot sélection du dépôt distant puis settings)](img/42.jpg) 

### Tout en bas de la page :

![ScreenShot delete this repository)](img/43.jpg)  

### Réécrire votre le nom de votre dépôt :

![ScreenShot confirmation suppression)](img/44.jpg)    	

### Confirmer votre mot de passe :	

![ScreenShot confirmation mot de passe)](img/45.jpg)   

Votre dépôt distant, préalablement sélectionné, a été supprimé de votre compte GitHub !

## Inviter un collaborateur sur Git Hub

Allez dans votre dépôt distant que vous désirez partagé, 

![ScreenShot dépôt distant)](img/46.jpg) 

Ensuite **Settings** puis **Manage access** 

![ScreenShot Manage access)](img/47.jpg)  

Votre mot de passe vous sera alors peut être demandé, puis : 

![ScreenShot Confirm Password)](img/48.jpg) 

![ScreenShot Invite a collaborator)](img/49.jpg) 

**Renseignez** alors **le pseudo GitHub** de votre collaborateur :

![ScreenShot Saisir pseudo collaborateur)](img/50.jpg) 

Votre collaborateur, devrait alors recevoir un mail d’invitation, en attente d’acceptation.

## Suppression d’un dépôt dont vous êtes collaborateur

Cliquez en haut à droite, puis **Settings** :

![ScreenShot settings dans GitHub)](img/51.jpg)

Ensuite **Repositories** :

![ScreenShot repositories)](img/52.jpg)

Sélectionnez un dépôt dont vous êtes collaborateur :

![ScreenShot sélection dépôt à supprimer)](img/53.jpg)

 
Puis **Leave** :

![ScreenShot validation supression)](img/54.jpg)

Vous venez de supprimer le dépôt dont vous étiez collaborateur.

## Lignes de commande ‘’Bash’’ :

**Pour info** : sous les systèmes de type UNIX, **~** appelé **tildé**, désigne le **répertoire** de l’**utilisateur courant**.

`~ = C:\Users\manu\` par exemple.

Sur votre bureau, **Git Bash Here**

•	`mkdir`

![ScreenShot mkdir)](img/55.jpg)

**make directory** ‘’mon depot local’’ : créé un répertoire ‘’mon depot local’’ sur votre bureau. 

![ScreenShot dossier mon depot local sur bureau)](img/56.jpg)

•	` cd`   

![ScreenShot cd mon depot local)](img/57.jpg)

**change directory** : change de répertoire, permet de se rendre dans le répertoire concerné ‘’mon depot local’’

•	` touch` 

![ScreenShot touch README)](img/58.jpg)

Créé un fichier : README 

![ScreenShot touch fichier.txt)](img/59.jpg)


Créé un fichier : fichier.txt 

![ScreenShot touch fichier.txt)](img/60.jpg)

•	` $ clear`  : permet de **nettoyer** la **console Bash**.

## Lignes de commande ‘’Git’’ de base :

### CONFIG

`$ git config --global user.name ‘’nom prenom’’` par défaut OU `$ git config user.name ‘’nom prenom’’`

`$ git config --global user.email ‘’adresse@mail.fr’’`  par défaut  OU `$ git config user.email ‘’adresse@mail.fr’’`

Pour **modifier** la **configuration globale** : 

`$ git config --global --replace-all user.name "New User Name"`

`$ git config --global --replace-all user.email "New User Email"`

Pour **afficher** la **liste** des **informations** saisies dans **config** : 

`$ git config --global --list`

### INITIALISATION

`$ git init` : initialisation du dépôt

### COMMIT : faire un SAC

**S** `$ git status`

**A** `$ git add`	

**C** `$ git commit`

### LIAISON

`$ git remote add origin https://.......` : Liaison entre dépôt local et distant grâce à l'adresse de votre dépôt distant.

### PUSH / PULL

`$ git push -u origin master` puis `$ git push` : pour pousser vers votre dépôt distant

`$ git pull origin master` puis `$ git pull` : pour tirer vers votre dépôt local.

### LOG

`$ git log` : pour lister les différents commits réalisés.

### CHECKOUT

`$ git checkout` : permet de se déplacer dans l’arbre

Pour se placer sur une branche précise :  `$ git checkout <nom de la branche à atteindre>`

Pour se placer sur la branche principale	: `$ git checkout master`

Pour se placer à un commit précis :	`$ git checkout <N° correspondant au commit concerné>`

**Rappel** : minimum les 5 premiers chiffres

## Bonnes pratiques :

•	En équipe, toujours faire un **fetch**, `$ git fetch`, avant de commencer à apporter des modifications et avant de réaliser des commits : 

le cas échéant lors d’un Push ou d’un Pull, Git vous le fera savoir ! :

```bash
	Fetch -> pull (fetch + merge)-> push
```

Pour **information** :

La commande `$ git fetch` va **récupérer** toutes les données des **commits** effectués sur la branche courante **qui n'existent pas encore** dans votre version en local. 

Ces **données** seront **stockées** dans le répertoire de travail local **mais** ne seront **pas fusionnées** avec votre branche locale. 

Si vous souhaitez **fusionner** ces données pour que votre branche soit à jour, vous devez **utiliser** ensuite la commande  `$ git merge`, sur la branche destinataire.


•	Écrire des **commentaires clairs**, **explicite**.

Pour **information**, vous pouvez faire un ‘’**commit commun**’’ regroupant la modification de plusieurs fichiers.

•	Créer des **branches** par **développeurs** et par **fonctionnalités**.

•	<span style="color:red">**Commiter que du code qui fonctionne !**</span>


## $ git gui&

Pour visualiser les différents commit réalisés, l’historique de toutes les branches : 

![ScreenShot $ git gui&)](img/61.jpg)

![ScreenShot Visualize All Branch History)](img/62.jpg)

![ScreenShot Branches du dépôt)](img/63.jpg) 

 ![ScreenShot Visualize All Branch History)](img/64.jpg) Historique de toutes les branches : dépôt distant et local, revient à saisir, `$ gitk--all`, directement dans la **console Git**. 

 ![ScreenShot Visualize master's History)](img/65.jpg)  Historique des branches du dépôt local, revient à saisir, `$ gitk`, directement dans la **console Git**.

## VS code

Dans VS code, pour visualiser les différents commit réalisés, l’historique de toutes les branches : 

Cliquez sur :

![ScreenShot VS code terminal)](img/66.jpg)  

Si on a **powershell**, sélectionner **Select Default Shell** puis **Git Bash** :

![ScreenShot powershell)](img/67.jpg) 

![ScreenShot sélection de Git Bash)](img/68.jpg)   

Refermer le Terminal puis l’ouvrir de nouveau :

![ScreenShot VS code terminal Git Bash)](img/69.jpg) 

Saisir la commande `$ git gui&`:

![ScreenShot $ git gui&)](img/70.jpg) 

On a :

![ScreenShot interface Acces Repository)](img/71.jpg)

![ScreenShot interface Visualize All Branch History)](img/72.jpg)

![ScreenShot de toutes les branches)](img/73.jpg)

## Pour aller plus loin

`$ git pull` : permet de mettre à jour les branches déjà connues sur le dépôt local à partir du dépôt distant.

`$ git fetch` : permet de récupérer toutes les nouveautés du répertoire distant, c’est-à-dire, les branches connues, mais aussi les branches pas encore connues du dépôt local.

**Rappel** : en équipe, toujours faire un fetch avant de commencer à apporter des modifications et avant de réaliser des commits : le cas échéant lors d’un Push ou d’un Pull, Git vous le fera savoir ! :

```bash
Fetch -> pull (fetch + merge)-> push
```

`$ git remote –v` : permet de voir les dépôts distants rattachés au dépôt local.

`$ git branch <nom de votre nouvelle branche>` : permet de créer une nouvelle branche.

`$ git merge <nom de la branche>` : permet de fusionner 2 branches entre elles, pour cela ; se mettre sur la branche destinataire.

`$ gitk--all` : dessine toutes les branches du dépôt distant + local. Cf.Screenshot plus haut

`$ gitk` : dessine les branches du dépôt local.

`$ git branch` : permet d’afficher toutes les branches du dépôt local.

`$ git branch –a` : permet d’afficher toutes les branches du dépôt local mais aussi du dépôt distant. 

![ScreenShot $ git branch et $ git branch -a)](img/74.jpg)

`$ git add .` : permet d’enregistrer toutes les modifications dans le dossier concerné.

Si vous êtes dans un sous dossier, les modifications des dossiers de niveaux supérieurs ne seront pas enregistrées.

