# React-Github-API

This project search github user with username and list the repositories for the user and stargazers

## Features

- Server-side rendering with [**React Router**](https://github.com/ReactTraining/react-router) 4.x.

- [**Redux**](http://redux.js.org/) predictable state containers.
- [**Redux Saga**](https://redux-saga.github.io/redux-saga/) [~~Redux Thunk~~]
for asynchronous action creators.
- [**Styled Components**](https://www.styled-components.com/) styled-components utilises tagged template literals to style your components..
- Hot reloading using [**Webpack HMR**](https://webpack.js.org/concepts/hot-module-replacement/).
- [**Webpack 3**](https://webpack.js.org/) for both development and production bundles.

- Responsive front-end interface with [**Bootstrap 3**](http://getbootstrap.com/).
- [**Express**](http://expressjs.com/) 4.x server.

## Quickstart
```
git clone https://github.com/bluearcontech/react-github-api.git your_app
cd your_app
npm install
npm run start
```

## Available Commands
`npm run start` - starts the development server.

## File Structure

### Webpack Config
Webpack for bundling modules. Configuration file is `webpack.config.dev.js`

### Server
It uses Express framework.

If `NODE_ENV` is development, we apply Webpack middlewares for bundling and Hot Module Replacement.

### Client
The `app` directory contains all the shared components, routes and reducers.

