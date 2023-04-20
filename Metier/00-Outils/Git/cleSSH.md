# Installer une clé privé
Secure SHell (SSH) est un outil de communication permettant de se connecter de façon sécurisé sur un serveur distant. Le protocole SSH propose un système d’authentification sans mot de passe en utilisant la [cryptographie asymétrique](https://fr.wikipedia.org/wiki/Cryptographie_asym%C3%A9trique). Une paire de clé doit être créée, une publique, une privée. La clé publique est installée sur les serveurs où l'on veut se connecter, la clé privée est conservé en lieu sûr dans le poste de travail. Lors de la connexion un échange de clés permet de valider l’authentification.

## Générer une paire de clés
`ssh-keygen` est une commande à taper dans une invite de commande (Git Bash).

Une fois la commande exécutée, une paire de clés est installée dans votre répertoire `c:\users\votreprofile\.ssh`.

Le fichier `id_rsa` contient votre **clé privée**.

Le fichier `id_rsa.pub` contient votre **clé publique**.


## GitHub
Pour pouvoir utiliser l'authentification SSH lorsque vous publiez une dépôt sur GitHub, vous devez:

1 Déclarer votre clé publique dans votre profile GitHub (le fichier `id_rsa.pub`)
- Connectez vous sur GitHub
- Allez dans **Your profile**
- Cliquez sur **Edit profile**
- Cliquez sur **SSH Keys**
- Cliquez sur **New SSH Keys**
- Coller votre clé publique, puis cliquez sur **Add SSH Key**

2 Pour publier votre dépôt, vous devez utiliser l'adresse SSH

	ssh://git@github.com:votreidentifiant/VOTREDEPOT.git

_Modifiez éventuellement l'adresse du dépôt distant dans la config git de votre dépôt local_.