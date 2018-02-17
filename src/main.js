import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import configStore from './store/config-store';
import Routes from './routes';

import './main.scss';

const store = configStore();

const render = (Routes, store) => {
  ReactDOM.render(
    <AppContainer>
      <Routes store={store}/>
    </AppContainer>,
    document.getElementById('advertisements-app')
  );
};

render(Routes, store);
