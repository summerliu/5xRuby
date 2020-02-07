# Parody of 5xRuby

## System Requirement
* [Node.js](https://nodejs.org) v10.x
* [NPM](https://www.npmjs.com/) package manager
* [Yarn](https://yarnpkg.com) package manager

## Initialization
```
npm install
yarn add
```

## Useful Scripts
```
npm run dev
yarn run dev
```
Start a webpack dev. server & enable HMR

```
npm run eslint
yarn run eslint
```
Run javascript linting utility

```
npm run build:dev
yarn run build:dev
```
Build development code

```
npm run build
yarn run build
```
Build production code

## Basic Rules of Development
* Confirm there are no eslint warnings before commit
* Don't add unnecessary package to "dependencies" in `package.json`