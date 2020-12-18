# Covid Killer

## Infos

Décembre 2020

JavaScript: Epreuve pratique en 7h

Répartition sur 100 pts

- épreuve théorique: 20 pts
- épreuve pratique:
  - qualité du code: 20 pts
  - javascript statique (génération HTML): 30 pts
  - javascript dynamique (interactions utilisateur): 30 pts

## Consignes

_Toutes sources d'information autorisées, mais pas de communication interpersonnelles pendant l'épreuve. L'aspect individuel/unique de la résolution des questions et du problème fait partie de la note._

_Deux langues autorisées: français, anglais._

_Copier/coller de code d'internet sanctionnés._

_Pas le droit de toucher au HTML. Tout le site est généré depuis le JavaScript. Par contre on peut changer le SCSS._

_Frameworks/Librairies de SPA non autorisés (Angular, React, Vue, Jquery...)._

_Les questions au formateur à propos des consignes ou liées aux problèmes techniques sont autorisées._

- Envoyez votre travail aux formateurs (ltruchot) via un lien vers un repo github AVANT 16h45 le 18/12/2020
- Ne touchez plus jamais à ce repo après 16h45 sous peine de malus important

## Épreuve théorique sur 20pts

Pour chaque question, répondre avec **vos propres mots**, sans copier/coller, en au moins 2 phrases.
Les réponses peuvent être subjectives si il y a le signe **(s)** à la fin de la question.

Vous pouvez répondre à même ce document ou dans un fichier à part.

- Qu'est-ce que JavaScript vanilla ?
- A:it's a light,rapid,cross-platform JS framework.We can create applications with Vanilla using plain JS, without importing other JS libraries(such as JQuery).
- Qu'est-ce qu'AJAX ?
- A:AJAX stands for 'Asynchronous Javascript and XML', it's a technique that allow us to create fast and dynamic webpages.AJAX help us to get the data from the server, and passes it to our browser without having to reload the webpage.
- Pourquoi JavaScript est parfois mal-aimé des devs ? **(s)**
- A:Because though it looks easy to start and create dynamic script rapidly, sometimes the freedom of manipulating the codes can make it become very hard to understand for the co-workers.
- Y a-t-il des types en JavaScript ? Si oui, lesquels ?
- A:yes, there are 6 data types in JS. They're string, number, boolean,null, undefined, and symbol(since ECMAScript 2015).
- Est-ce que SASS est un langage qui est interprété par les navigateurs ?
- A: YES. It's a preprocessor scripting language which interpreted or compiled into Cascading Style Sheets (CSS).That's why we only link css in html file ,but actually we edite the style in scss.
- Pourquoi peut-on dire que JavaScript est un langage "multi-paradigmes" ? **(s)**
- A:Because it supports different programming types, such as imperative/procedural programming, Object-Oriented Programming(including prototypal inheritance),and fuctional programming.
- En JS, une fonction peut-elle retourner une fonction ?
- A:YES. It's very common for any js code. Functions are the first citizens in JS. They are the same data as numbers or strings, so functions can be passed to other functions as arguments, as well as returned from functions.
- Est-ce que `alert` existe en Node.JS ?
- A:No,alert does not exist in NodeJS.
  In any case,alert is window's property object , only provided by the browser.That's why we sould not use alert in Node JS.
- Est-ce que `window.console.log === console.log` dans le navigateur ?
- A:YES. In the browser,console.log(console.log==window.console.log) // true. But console.log can be used even in Node or other environment, window.console.log can only be used in the browser.
- Quel est votre aspect préféré de JavaScript ? **(s)**
- I find JS is easier to get start compare to other typed languages. And it's very dynamic and can be applied to various projects. I would like to learn more about JS and it's framework in the upcoming months (though sometimes it's also not easy to understand).

## Épreuve pratique sur 80pts

Vous êtes codeuse/codeur JavaScript dans une clinique du centre-ville.
Vous développez un outil de pré-commande de vaccins dans les stocks publics de la ville, pour les responsables d'équipes médicales.
Votre site doit permettre à ces personnes de réserver différents types de vaccins parmi ceux en cours de développement.

Cloner et utiliser cette "seed" pour produire votre Single Page Application.

Le script `./script.js` est déjà lié à la page `./index.html` grâce à Parcel, de même que `style.scss` - il ne faut donc rien changer dans cette architecture (ne jamais toucher le HTML, garder le lien vers les styles dans le script).

- supprimer le dossier ".git" à la racine du clone
- créer votre propre repo/remote sur votre github et l'associer à votre clone du projet
- `npm install` installe les packages de la seed
- `npm start` lance la seed en mode "développement"
- add, commit, et push réguliers sont recommandés

### Modéliser les données

Produire un fichier data.js dans `./src`, qui exporte un Array d'objets avec les data suivantes:

#### Vaccin 1

Nom: BBIBP-CorV  
Inventeurs: Sinopharm  
Lieux de production: Chine  
Technologie: virus inactivé  
Quantité: 420  
Prix unitaire: 17$  
Approuvé: oui

#### Vaccin 2

Nom: Sputnik V  
Inventeurs: Gamaleya  
Lieux de production: Russie, Inde  
Technologie: adenovirus  
Quantité: 130  
Prix unitaire: 12$  
Approuvé: non

#### Vaccin 3

Nom: AZD1222  
Inventeurs: AstraZeneca, University of Oxford  
Lieux de production: Royaume Unis, Brésil, Inde  
Technologie: adenovirus  
Quantité: 5028  
Prix unitaire: 1.78$  
Approuvé: non

#### Vaccin 4

Nom: Tozinameran  
Inventeurs: BioNTech, Pfizer, Fosun Pharma  
Lieux de production: Allemagne, USA  
Technologie: ARN messager  
Quantité: 980  
Prix unitaire: 14$  
Approuvé: oui

#### Vaccin 5

Nom: mRNA-1273  
Inventeurs: Moderna, NIAID, BARDA  
Lieux de production: USA  
Technologie: ARN messager  
Quantité: 240  
Prix unitaire: 28$  
Approuvé: non

#### Vaccin 6

Nom: Ad26.COV2.S  
Inventeurs: Johnson & Johnson, BIDMC  
Lieux de production: USA, Amérique du Sud, Ukraine, Afrique du Sud  
Technologie: adenovirus  
Quantité: 110  
Prix unitaire: 31$  
Approuvé: non

### Transformer les données en éléments du DOM

Les éléments suivants sont créés dans la div `#app` via JavaScript:

- un `h1` avec le nom du site
- un élément `header`, présentant
  - un bouton pour classer les vaccins par prix
  - un bouton pour cacher les vaccins "non approuvés"
- un élément HTML `main`.
  - c'est le catalogue montrant tous les vaccins sous forme de "cartes", côte à côte ou à la ligne
  - chaque carte présente
    - une image de vaccin (présente dans le dossier "static")
    - toutes les infos disponibles pour ce vaccin
    - un "input" de "quantité" et un bouton "réserver" à côté
- un élément `footer` résume la commande en cours (vide au début), et contient un bouton "passer la commande"

### Manipulation du DOM et interaction utilisateur

- Lorsque l'utilisateur clique sur "cacher les vaccins non approuvés" les vaccins non approuvés sont cachés. On peut désormais les re-montrer grâce au même bouton
- Lorsqu'un utilisateur clique sur le bouton "réserver" d'une carte de vaccin
  - le vaccin apparaît dans la commande du `footer`, avec la quantité demandée (ex: Tozinameran x3)
  - l'input de quantité disparaît de la carte
  - le bouton "réserver" de ce vaccin devient `disabled`
- Lorsqu'un utilisateur clique sur "passer la commande" dans le `footer`:
  - la page se vide entièrement
  - un message indique "La commande a bien été enregistrée..."

### Bonus (pas compté dans les points - peut réhausser la note finale):

- sur cet écran final, un bouton "Annuler la commande" permet de recharger automatiquement la page dans son état initial
- le bouton "classer les vaccins par prix" fonctionne, et réordonne les cartes du vaccin le moins cher au plus cher
- Améliorer l'affichage de votre site grâce aux SCSS
- L'action de passer commande lorsqu'il n'y a pas de commande est impossible
- Un bouton dans le `footer` permet d'annuler toute la réservation d'un coup
- Il est impossible de commander plus de vaccins que les quantités existantes
- Le calcul exact des prix, vaccins par vaccins, et le total du prix final sont ajoutés dans le footer
- Ils sont aussi rappelés dans la page suivante
