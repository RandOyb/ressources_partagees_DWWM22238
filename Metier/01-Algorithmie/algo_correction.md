### ALGORITHMIE

##### Objectif:
- Comprendre la notion d'algorithme et les concepts liés.


Algorithme du démarrage d’une voiture.
• Prendre les clés de la voiture
• Ouvrir la porte conducteur
• Entrer dans la voiture
• Introduire la clé dans le neiman
• Tourner la clé
• La voiture est démarrée

- Variables
    Déclaration:
    - QuantitéEssence : Nombre
    - NiveauBatterie : Nombre
    - enEtat : booléen
    - moteurDemarre : booléen
    Assignation / Affectation:
    - QuantitéEssence = 40
    - NiveauBatterie = 87%
    - enEtat = true
    - moteurDemarre = false
    - systemeAllume = false

- Introduire la clé dans le neiman
- Tourner la clé
- Si niveauBatterie > 1, 
    - systemeAllume = true
    - Si systemeAllume = true
        - Continuer à tourner la clé
        - Si quantitéEssence > 1 et enEtat == true
            - moteurDemarre = true
        - sinon si quantitéEssence < 1
            - prendre un bidon et aller à la station
        - sinon si enEtat = false
            - appeler le garagiste
        
- Sinon Le voyant de niveau s'allume


## *Variables*

    
    ### déclaration
        Danger : tableau

    ### assignation
        Danger = [true ; false ;  true ; true]
        
   

## *Fonctions*

    ### **protéger** (`ParametreDanger`)
         
        SI ("Peut-on supprimer le `ParametreDanger`de façon permanente et sans risque ?") = vrai ; 
        ALORS **renvoyer**("le faire ou le faire faire") ;
        SINON
            SI ("Peut-on isoler la zone de `ParametreDanger`de façon permanente et sans risque ?") = vrai ;
            ALORS renvoyer ("le faire ou le faire faire") ;
            SINON
                SI ("Peut-on soustraire la victime de la zone de  `ParametreDanger` sans risque ?") = vrai ;
                ALORS renvoyer ("le faire ou le faire faire") ;
                SINON renvoyer ("interdire l'accès à la zone dangereuse; faire alerter les secours spécialisés")

    ### **renvoyer**(message)

        AFFICHER message


## *prgm*

    Répeter tant que le tableau n'est pas vide
        - index = 1er élement
        - danger = Danger[index]
        - Si danger = true alors
            - **protéger**(danger)
        - Sinon 
            - **renvoyer**("intervention terminée) 



## *Variables*

    - Inter : booléen
    - Inter = true

## *Fonctions*

    ### **LampeAllume**(Interrupteur)

        Si Interrupteur = true
            - DIRE "La lumière est allumé"
        Sinon
            - DIRE "La lumière est éteinte"

## *prgm*

    **lampeAllume**(Inter)
