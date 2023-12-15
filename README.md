# DevOps Mini-Projet 2
Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations
- N° de groupe :21
- Membres du groupe :Budak Melik,Layach Hakim
-https://github.com/Melik-Budak-vinci/devops-mini-proj-tdd-greetings

## Énoncé

### Pré-requis :
- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests


### Ajouter ce fichier MD à votre mini-projet-1
Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue
L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request
Ouvrez une Pull Request / Merge Request 
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.


Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
<"Le fichier yaml est la configuration de notre workflow Github Actions qui nous permet d'instaurer des règles,installer des dépendences et limiter certaine actions par exemple dans notre fichier yaml nous avons limiter les pull request pour que le merge sois autoriser seulement si tous les tests sont passé">
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
<"Le on permet de declancher automatiquement la pipeline pour un évenement spécifier dans ce dernier par exemple au début de notre projet numéro deux notre pipeline devait se declancher quand il y avait un push et ensuite nous avons modifer en ajoutant qu'il fallait une pull request pour que la pipeline ce déclanche.La différence entre on push et on pull request est que la pipeline ce lance apres un push et dans l'autre a un pull request et pour un developpeurs junior je conseillerais on pull request pour éviter les problèmes comme que le junior push sur le main un code errone et donc grave au on pull request quelqu'un de plus expérimenter pourra vérifier le code du junior.">
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
<" Le runs_on est utilisé pour spécifier l'environnement d'exécution pour un job dans le  flux de travail GitHub Actions dans notre pipeline c'est ubuntu-latest.Le run permet de déclancher l'exécution du code ou des scripts">
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
<"Cela est utilisé pour spécifier une action  qui doivent être utilisés dans une étape spécifique. Dans notre pipeline, nous  utilisons uses pour utiliser des actions prédéfinies fournies par GitHub Actions. Par exemple : - uses: actions/checkout@v2.Cela permet de pré-construire et nous simplifier telles que la récupération du code source (actions/checkout).Alors que le run permet d'éxécuter une action précise. ">
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
<"notre réponse est à la fois oui et non, pour le cas oui nous pouvons intervertir par exemple prettier et le linter cela fonctionnera toujours, et pur le cas non, si on intervertit l'installation des dependances avec une autre action definis plus tard qui utilise des dependances cela ne fonctionnera pas car par exemple, la commande npm run prettier a besoin de dependance prettier pour fonctionner donc si l'installation n'est pas fait la commande ne sera pas connu et donc la pipeline lancera une erreur.  ">
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
<"Il faut installer les dépendances aussi ajouter une nouvelle étape dans la pipeline et aussi ajouter le script.On pourrait se poser comme question, quel type de test de sécurité est nécessaire pour notre application? Ou encore quand exécuter le test de sécurité dans le pipeline ?">
```
