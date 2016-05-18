## Getting started

This is the repository for the React-Redux guide posted here:

[https://eloquent.ly/guides/es6-react-redux](https://eloquent.ly/guides/es6-react-redux).

To get started, clone this repository and checkout the 'basic_components' branch:

```
git clone https://github.com/eloquently/redux-todo-guide.git
git checkout basic_components
```

## Tools Used

Build: Webpack, Babel (es2015 and React), Sass loaders, webpack-dev-server

Test: Mocha, Chai, Enzyme

Front-end: React, React-Dom, Redux

## How to Run Things

Install all dependencies:

```
npm install
```

Run webpack:

```
npm run webpack
```

Automatically run webpack when files change:

```
npm run webpack:watch
```

Run tests:

```
npm run test
```

Run tests automatically when files change:

```
npm run test:watch
```

Run webpack-dev-server (may need to change host and port in `webpack.config.js` if you are not using Cloud9)

```
npm run webpack-dev-server
```