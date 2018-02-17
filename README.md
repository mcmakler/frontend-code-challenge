![Image of Vacant Apartments](https://i.imgur.com/ZB6aEWT.png)

Vacant Apartments is an application to list advertisements for vacant apartments.


### Application Overview

*Vacant Apartments* consists of _3_ components and _2_ containers and uses `React` and `Redux` as a state container and `Sass` as css preprocessor.

##### Components
Components are the key element of the application, and their importance comes from reusability. Components must be **decoupled**
from the data itself, and should be generic to handle many types of data according to their instructions.
##### Containers
Containers are opposite when it comes to handling data, Containers must be aware of the type of data and act upon them.
That's why I use `stateful` components to represent containers because they care about the application state. On the other
hand, components are `stateless`.
##### Container State
I use `Redux` to manage application state and it must be updated by dispatching an `actions` and make changes through `reducers`
only without mutation;
##### Naming convention
- file naming convention
I use the same convention that `react` uses for their packages, `dashCase` or `kebabCase`.
- file postfix
I find it important to append postfix to file names, makes it easier when navigating between files and you don't have to check
the file path to determine whether it's `reducer`, `action` or `action types`.
I know it makes importing longer, but I choose fast navigation or determination over shorter path names.

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
