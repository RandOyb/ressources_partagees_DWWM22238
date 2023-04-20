# Git et intégration continue

```bash
mkdir rep_git
cd rep_git
git init rep_git --bare
```



Contenu du fichier `rep_git/hooks/post-receive`

```bash
#!/bin/sh

while read oldrev newrev ref
do
	branch=`echo $ref | cut -d/ -f3`
	if [ "$branch" == "master" ]
	then
		GIT_WORK_TREE=/home/xxx/rep_prod git checkout -f $branch
	fi
	if [ "$branch" == "test" ]
	then
		GIT_WORK_TREE=/home/xxx/rep_test git checkout -f $branch
	fi

done
```


```
chmod a+x post-receive
```

```
git remote add origin ssh://identifiant@nom_de_la_machine/chemin/rep_git
```

```
git push origin master
```

