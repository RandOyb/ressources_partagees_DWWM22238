**git config**: permet de configurer le dépôt actuel git sur la machine. (email, nom, etc).
`--global` permet de configurer pour l'ensemble des dépôts.

**git init**: initialser un dépôt.

**git clone**: importer un dépôt

**git status**: vérifie l'état du dossier de travail par rapport au dernier commit

**git add**: ajoute des modifications pour le prochain commit

**git commit**: créé un point de sauvegarde avec les modifications ajoutées lors du `git add`

**git fetch**: permet de savoir ce qui a changé sur le dépôt distant

**git pull**: git pull permet de récupérer ce qui se trouve sur le dépôt distant.

**git push**: permet d'envoyer ses commits sur le dépôt distant

**git log**: visualiser l'historique du dépôt. `--oneline` permet un affichage plus compact

**git checkout <maBranche>**: permet de se déplacer dans l'historique du dépôt.

**git branch <maBranche>**: créé une nouvelle branche de travail. Il ne faut pas oublier de basculer sur la nouvelle branche avec un `git checkout maBranche`.

**git merge <brancheAFusionner>***: permet de fusionner 2 branches.

**git stash**: permet de faire un commit temporaire avec toutes les modififcations du dépôt.

**git stash pop**: permet de récupérer sur la branche actuelle les modifications enregistrées dans le stash

**git remote**: concerne le dépôt distant

**git remote add "nom de mon dépôt distant" "adresse de mon dépot"**: