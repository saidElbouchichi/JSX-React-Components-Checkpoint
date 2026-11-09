# JSX and React Components Checkpoint — GOMYCODE

Application React (create-react-app + react-bootstrap) qui affiche un produit dans une carte, construite à partir de petits composants.

## Structure

```
src/
├── App.js              # composant racine : la carte + le message de bienvenue
├── App.css             # style
├── product.js          # objet JSON du produit (nom, prix, description, image) — exporté
└── components/
    ├── Name.js         # nom du produit
    ├── Price.js        # prix du produit
    ├── Description.js  # description du produit
    └── Image.js        # image du produit
```

## Fonctionnement

- Chaque composant importe l'objet `product` et affiche une seule information.
- `App.js` assemble les 4 composants dans une `Card` react-bootstrap.
- Sous la carte : **« Hello, Said »** si la variable `firstName` est remplie, sinon **« Hello, there! »**.
- Une image (avatar) s'affiche seulement si le prénom est fourni (rendu conditionnel avec `&&`).

## Lancer le projet

```bash
npm install
npm start
```
