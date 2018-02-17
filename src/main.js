import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Routes from './routes';

import './main.scss';

const render = Routes => {
  ReactDOM.render(
    <AppContainer>
      <Routes/>
    </AppContainer>,
    document.getElementById('advertisements-app')
  );
};

render(Routes);
