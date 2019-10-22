## Store app
------------

> Women's clothing store

## Frontend Stack
------------------

| Framework     | Language Spec           | Build Tool |
| ------------- | ----------------------- | ---------- |
| React / Redux | HTML / JavaScript / CSS | Webpack4   |

| CSS preprocessor | Package manager |
| ---------------- | --------------- |
| SASS             | NPM             |

## Node Versions
------------------

This application has been tested on
> `Success` `node 6.9.0` `npm 3.10.8`

## Folder Structure
-------------------

After creation, the project should look like this:

```
akqa-app/
  README.md
  package.json
  node_modules/
  public/
    index.html
    favicon.ico
    assets/
      data/products.json
    images/
      product-1.jpg
  src/
    App.js
    index.js
    assets/
      icons/
      images/
      scss/
        main.scss
    components/
      features/
        AkProduct/
          AkProduct.js
          AkProduct.scss
      pages/
        AkHome/
          AkHome.js
          AkHome.scss
      ui/
    redux/
      actions/
        product.action.js
      constants/
      reducers/
      store/
    utils/
      apiService.js
```

## Application Installation
---------------------------

In order to run the application in your local environment,
Please follow below steps.

1. `npm i`
2. `npm start`

## Available Scripts
--------------------

In the project directory, you can run:

### `npm i`

This command installs a package, and any packages that it depends on.
If the package has a package-lock, the installation of dependencies will be driven by that,
with an npm-shrinkwrap.json taking precedence if both files exist.
See package-lock.json.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

If you are seeing `Something is already running on port 3001` message, ensure to run
`kill $(lsof -t -i :3001)` to kill all applications which use port 3001.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimises the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Front-End Style Guide
------------------------

Please ensure read below style-guides before you are starting to write Frontend code.

#### HTML/CSS
https://google.github.io/styleguide/htmlcssguide.html

#### JavaScript
https://google.github.io/styleguide/jsguide.html

#### React/JSX
https://github.com/airbnb/javascript/tree/master/react

## For code review
------------------------

Please check below key files for code review.

```
akqa-app/
  src/
    components/
      features/
        AkProduct.js
        AkProduct.scss
    redux/
      actions/
        product.actions.js
```
