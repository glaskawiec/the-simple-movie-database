##  :raising_hand: Introduction
This repository was created for recruitment at Dazn. I'm applying  for the JavaScript Web Developer.  
Main objective is implement User interface witch allows users to search Movie DB.  
The user should be able to enter some text into a search field, see and browser the results from the Movie DB.  
  [The Movie Database API](https://themoviedb.docs.apiary.io/#) should be used as data provider.

## :sun_with_face: Word of the author
I use a public API with restrictions - only data from 1000 pages can be seen.  
I don't block the possibility of browsing next pages because  
I want to give you the opportunity to test error handling.  
  
I did not use any external libs excluding React, Styled-Components and testing libraries.  
You can find redux in package.json, but it was used only for testing purposes.  

I use my own library - Houx to manage the state.  
[You can read more here.](https://github.com/glaskawiec/houx)

I did not put comments in the code because I believe that the clearly written code documents itself.


## :rainbow: Demo
[Click here to see application demo](http://the-simple-movie-database.s3-website-eu-west-1.amazonaws.com/)


## :fire: Features
* Started from create-react-app 2.1.8
* State management with Flux architecture
* Async flux actions
* Reducers, action creators fully tested
* Made with hooks
* Dynamic themes
* Slugifyed urls
* Lazy loaded routes
* Performance optimized
* Locally hosted fonts
* React components snapshots with Jest
* React components typechecking with propTypes
* Data models with typechecking
* Generic json-to-model parser
* Airbnb codestyle
* JavaScript and css linting with eslint and stylelint

## :pencil: Prerequisites
*  [Git](https://git-scm.com) installed
*  [NPM](https://www.npmjs.com/) installed

## :hammer: How to run it locally
1. Open you fav terminal and type:
```
git clone https://github.com/glaskawiec/the-simple-movie-database.git
cd the-simple-movie-database/
npm install
```

2. Create `apiKey.js` file at `the-simple-movie-database/src/` and paste your API key.  
You can read more about API key [here](https://www.themoviedb.org/documentation/api).
```
export default 'YOUR_API_KEY';
```

3. Return to terminal and type:
```
npm start
```

## :memo: Available scripts
| command  | description |
| ------------- | ------------- |
| `npm start`  | Runs development server with hot-reloading at `http://localhost:3000`  |
| `npm run test`  | Jest fires all unit tests from `/__tests__` folder  |
| `npm run build`  | Makes production optimalized build at `/build` foder  |
| `npm run lint`  | Eslint searches all .jsx and .js files in `/src` folder for errors  |
| `npm run lint:fix`  | Eslint automaticly fixes all errors in .jsx and .js files at `/src` folder  |
| `npm run lint:css`  | Stylelint searches all .js files with CSS-IN-JSS at `/src` folder for errors  |
| `npm run eject`  | It will copy all the configuration files and the transitive  dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them.  |
---

##### glaskawiec © 2019 - MIT license
