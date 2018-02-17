![Image of Vacant Apartments](https://i.imgur.com/ZB6aEWT.png)

Vacant Apartments is an application to list advertisements for vacant apartments.


### Application Overview

*Vacant Apartments* consists of _3_ components and _2_ containers and uses `React` and `Redux` as a state container and `Sass` as css preprocessor.

##### Components
##### Containers
##### Difference between `component` and `container`
##### Container State
##### Application State
##### Naming convention

### About Stack

#### *Why React ?*
React emphasize the component approach, in fact React is all about building components. along with virtual DOM, React makes it easier to to work the virtual DOM instead the real one.

#### *Why Redux ?*

Redux is state container for the application. It makes it easier to predict and track application state changes that are described as actions. Changing application state made only on `reducer`s which are simple pure functions change the application state taking in consideration the immutability of the state.

#### *Why Sass ?*

Sass is a css preprocessor for writing css, Sass is more declarative and introduce a lot of features such as `selector inheritance` and better conditional statements with `@if` `@else` and looping `@for`.

#### Installation


- clone this repo ` clone git@github.com:d7my11/frontend-code-challenge.git`
- run `npm install` to install dependencies
- run `npm start` to start the server
- hit `http://localhost:3000` on the browser.

##### Running tests

```
npm test
```

##### Running test Coverage

```
npm run coverage
```

##### Running linter
```
npm run lint
```

##### Generator

```
plop [container, component, reducer]
```

##### Main dependencies

| **Dependency** | **Use** |
|----------|-------|
|react|React Library |
|react-dom|React library for DOM rendering |
|redux|Library for unidirectional data flows |
|react-redux|Redux library for connecting React components to Redux |
|redux-thunk|Async Redux wrapping action creators |
|react-router-dom|React library for routing bounded to DOM |
|axios|Promise based HTTP client |
|flexboxgrid-sass|Grid based on CSS3 flexbox  |
